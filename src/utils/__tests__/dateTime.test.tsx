import { Settings } from 'luxon';

import { formatUTCDateTime, formatDateTimeToISO } from '../dateTime';

describe('dateTimeUtils', () => {
  describe('formatUTCDateTime', () => {
    it('should return correct format from UTC', () => {
      Settings.defaultZoneName = 'UTC+6';
      expect(formatUTCDateTime('2020-11-30T11:14:49')).toEqual('30.11.2020 17:14');
    });
  });
  describe('formatDateTimeToISO', () => {
    it('should be format to ISO', () => {
      expect(formatDateTimeToISO('2021-03-12T12:00:00+02:00')).toEqual('2021-03-12T10:00:00.000Z');
    });
  });
});
