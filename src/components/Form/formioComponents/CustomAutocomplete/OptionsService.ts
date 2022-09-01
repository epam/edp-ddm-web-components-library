import { BehaviorSubject } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import isArray from 'lodash/isArray';
import { tap } from 'rxjs/operators';
import { Formio } from 'react-formio';

const defaultState: Data = {
  list: [],
  isLoading: false,
  isLoaded: false,
};

interface Data {
  list: Array<Record<string, unknown>>;
  isLoading: boolean;
  isLoaded?: boolean;
}

export default class OptionsService {
  public data$: BehaviorSubject<Data> = new BehaviorSubject(defaultState);

  private baseUrl = Formio.getBaseUrl();

  loadData = (
    options: { url: string, query?: Record<string, string | number | boolean | string[] | number[] | boolean[]> },
  ) => {
    this.data$.next({ ...defaultState, isLoading: true });
    return ajax({
      method: 'GET',
      url: options.url.startsWith('http') ? options.url : `${this.baseUrl}${options.url}`,
      withCredentials: true,
      queryParams: options.query ? options.query : {},
      crossDomain: true,
      headers: {
      },
    }).pipe(
      tap((data) => {
        const list = isArray(data.response) ? data.response : [];
        this.data$.next({ list, isLoading: false, isLoaded: true });
      }),
    );
  };

  setData = (data: Array<Record<string, unknown>>) => {
    this.data$.next({ list: data, isLoading: false });
  };
}
