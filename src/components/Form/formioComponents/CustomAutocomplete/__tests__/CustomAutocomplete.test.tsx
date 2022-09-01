import { SelectComponent } from 'components/Form/types';
import CustomAutocomplete from '../CustomAutocomplete';

const ITEM = { value: 'Item name' };

describe('CustomAutocomplete', () => {
  function createInstanceCustomAutocomplete(component: SelectComponent) {
    return new CustomAutocomplete(component as SelectComponent, {}, null);
  }

  it('should formatted value when component dataSrc equal url', () => {
    const customAutocomplete = createInstanceCustomAutocomplete({ dataSrc: 'url', multiple: true } as SelectComponent);

    customAutocomplete.optionsService.data$.next({ list: [ITEM], isLoading: false });
    expect(customAutocomplete.getOptions()).toEqual([{ label: ITEM, originalValue: ITEM, value: 'Item name' }]);
  });

  it('should formatted value when component dataSrc equal cutom', () => {
    const customAutocomplete = createInstanceCustomAutocomplete(
      { dataSrc: 'custom', multiple: true } as SelectComponent,
    );
    customAutocomplete.optionsService.data$.next({ list: [ITEM], isLoading: false });
    expect(customAutocomplete.getOptions()).toEqual([{ label: ITEM, originalValue: ITEM, value: 'Item name' }]);
  });

  it('should formatted value when component dataSrc equal values', () => {
    const customAutocomplete = createInstanceCustomAutocomplete(
      { dataSrc: 'values', data: { values: [ITEM] }, multiple: true } as SelectComponent,
    );
    customAutocomplete.optionsService.data$.next({ list: [ITEM], isLoading: false });
    expect(customAutocomplete.getOptions()).toEqual([{ label: ITEM, originalValue: ITEM, value: 'Item name' }]);
  });
});
