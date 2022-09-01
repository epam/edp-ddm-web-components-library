import get from 'lodash/get';

import { ListItem } from 'types/table';

export const textFormatter = (listItem: ListItem, property: string) => {
  return get(listItem, property);
};
