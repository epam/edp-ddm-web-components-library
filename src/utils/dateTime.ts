import { DateTime } from 'luxon';
import get from 'lodash/get';
import { ListItem } from 'types/table';

export const formatUTCDateTime = (dateTime: string) => {
  return DateTime.fromISO(dateTime, { zone: 'utc' }).toLocal().toFormat('dd.MM.yyyy HH:mm');
};

export const formatDateTimeToISO = (dateTime: string) => {
  return DateTime.fromISO(dateTime, { zone: 'utc' }).toISO();
};

export const getDateFromDateTime = (dateTime: string) => {
  return DateTime.fromISO(dateTime).toFormat('yyyy-MM-dd');
};

export const dateTimeFormatter = (listItem: ListItem, property: string) => {
  return formatUTCDateTime(get(listItem, property));
};
