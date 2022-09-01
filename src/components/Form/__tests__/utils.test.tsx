import { FormComponent, FormSubmission } from '../types';
import {
  disableComponentDataCache,
  prepareFileSubmission,
  prepareSubmissions,
  isFileComponent,
  numberToString,
  modifySelectRowData,
  parseValueToNumber,
  findNavigationButtons,
} from '../utils';

describe('Form utils', () => {
  it('should add noCache option to existing filer', () => {
    const component = {
      filter: 'test=test',
    } as FormComponent;
    const result = disableComponentDataCache(component);

    expect(result.filter && result.filter.indexOf('&noCache=') > 0).toBeTruthy();
  });

  it('should create filter with noCache', () => {
    const component = {} as FormComponent;
    const result = disableComponentDataCache(component);

    expect(result.filter && result.filter.indexOf('noCache=') === 0).toBeTruthy();
  });

  it('should clear from file submission all except id and hash', () => {
    const components = [
      {
        type: 'file',
        key: 'file',
      } as FormComponent,
    ];
    const submissions = {
      data: {
        file: [{
          size: 12345,
          name: 'someFileName.doc',
          data: {
            id: 'someId',
            checksum: 'someHash',
            name: 'someName',
            size: 12345,
          },
        }],
      },
    } as FormSubmission;
    expect(prepareFileSubmission(components, submissions)).toStrictEqual({
      data: {
        file: [{
          id: 'someId',
          checksum: 'someHash',
        }],
      },
    });
  });

  describe('Day component', () => {
    it('should correct format date Day component with isFormData', () => {
      const components = [
        {
          type: 'day',
          key: 'dateTime',
          dayFirst: false,
        } as FormComponent,
      ];
      const submissions = {
        data: {
          dateTime: '03/12/2021',
        },
      } as FormSubmission;
      expect(prepareSubmissions(components, submissions, true)).toStrictEqual({
        data: {
          dateTime: '2021-03-12',
        },
      });
    });
    it('should correct format date Day component with isFormData and dayFirst', () => {
      const components = [
        {
          type: 'day',
          key: 'dateTime',
          dayFirst: true,
        } as FormComponent,
      ];
      const submissions = {
        data: {
          dateTime: '12/03/2021',
        },
      } as FormSubmission;
      expect(prepareSubmissions(components, submissions, true)).toStrictEqual({
        data: {
          dateTime: '2021-03-12',
        },
      });
    });

    it('should correct format date Day component', () => {
      const components = [
        {
          type: 'day',
          key: 'dateTime',
        } as FormComponent,
      ];
      const submissions = {
        data: {
          dateTime: '2021-03-12',
        },
      } as FormSubmission;
      expect(prepareSubmissions(components, submissions)).toStrictEqual({
        data: {
          dateTime: '03/12/2021',
        },
      });
    });
    it('should correct format date Day component with dayFirst', () => {
      const components = [
        {
          type: 'day',
          key: 'dateTime',
          dayFirst: true,
        } as FormComponent,
      ];
      const submissions = {
        data: {
          dateTime: '2021-03-12',
        },
      } as FormSubmission;
      expect(prepareSubmissions(components, submissions)).toStrictEqual({
        data: {
          dateTime: '12/03/2021',
        },
      });
    });
    it('should return undefined', () => {
      const components = [
        {
          type: 'day',
          key: 'dateTime',
          dayFirst: true,
        } as FormComponent,
      ];
      const submissions = undefined;
      expect(prepareSubmissions(components, submissions)).toBe(undefined);
    });

    it('should return null on empty form io value', () => {
      const components = [
        {
          type: 'day',
          key: 'dateTime',
          dayFirst: true,
        } as FormComponent,
      ];
      const submissions = {
        data: {
          dateTime: '00/00/0000',
        },
      } as FormSubmission;
      expect(prepareSubmissions(components, submissions, true)).toEqual({
        data: {
          dateTime: null,
        },
      });
    });
  });

  describe('isFileComponent', () => {
    it('should return true', () => {
      expect(isFileComponent('file')).toEqual(true);
    });
    it('should return false', () => {
      expect(isFileComponent('text')).toEqual(false);
    });
  });

  describe('numberToString', () => {
    it('should convert number to string', () => {
      expect(numberToString(43)).toEqual('43');
    });
    it('shouldn\'t convert value', () => {
      expect(numberToString('text')).toEqual('text');
    });
  });
  describe('modifySelectRowData', () => {
    it('should return unmodified row', () => {
      expect(modifySelectRowData({} as any, {} as any, { select: 'some value' })).toEqual({ select: 'some value' });
    });
    it('should return unmodified row, because type of componet is not equal select', () => {
      const component = { conditional: { when: 'textfield' } } as unknown as FormComponent;
      const root = { form: { components: [{} as FormComponent] }, options: {} };
      expect(modifySelectRowData(
        component,
        root,
        { select: 'some value' },
      )).toEqual({ select: 'some value' });
    });
    it('should return modified row', () => {
      const component = { conditional: { when: 'select' } } as unknown as FormComponent;
      const root = {
        form: {
          components: [
            { key: 'select', type: 'select', valueProperty: 'title' } as FormComponent],
        },
        options: {},
      };
      expect(modifySelectRowData(
        component,
        root,
        { select: { title: 'some value' } },
      )).toEqual({ select: 'some value' });
    });
  });

  describe('parseValueToNumber', () => {
    it('should parse value with comma to Number', () => {
      expect(parseValueToNumber('55,25')).toEqual(55.25);
    });
    it('should parse value with spaces to Number', () => {
      expect(parseValueToNumber('35 945 959')).toEqual(35945959);
    });
    it('should parse value with zero to Number', () => {
      expect(parseValueToNumber('0')).toEqual(0);
    });
  });
  
  describe('findNavigationButtons', () => {
    it('should return empty array', () => {
      const components = [
        {
          'type': 'button',
          'label': 'Submit',
        },
      ] as FormComponent[];

      const columnsComponets = [
        {
          'label': 'Columns',
          'columns': [
            {
              'components': [{
                'label': 'Text Field',
                'key': 'textField',
                'type': 'textfield',
              }],
            },
            {
              'components': [],
            },
          ],
        },
      ]; 
      expect(findNavigationButtons(components)).toEqual([]);
      expect(findNavigationButtons([])).toEqual([]);
      expect(findNavigationButtons({} as FormComponent[])).toEqual([]);
      expect(findNavigationButtons(null as unknown as FormComponent[])).toEqual([]);
      expect(findNavigationButtons(columnsComponets as unknown as FormComponent[])).toEqual([]);
    });

    it('should return array of one button with navigation action', () => {
      const components = [
        {
          'type': 'button',
          'label': 'Submit',
          'action': 'navigation',
        },
      ] as FormComponent[];
      expect(findNavigationButtons(components)).toEqual(components);
    });

    it('should return array of two button with navigation action from columns component', () => {
      const components = [
        {
          'label': 'Columns',
          'columns': [
            {
              'components': [
                {
                  'type': 'button',
                  'label': 'Submit 1',
                  'action': 'navigation',
                },
              ],
            },
            {
              'components': [
                {
                  'type': 'button',
                  'label': 'Submit 2',
                  'action': 'navigation',
                },
              ],
            },
          ],
        },
        {
          'type': 'button',
          'label': 'Submit',
          'action': 'submit',
        },
      ] as FormComponent[];
      expect(findNavigationButtons(components)).toEqual([
        {
          'type': 'button',
          'label': 'Submit 1',
          'action': 'navigation',
        },
        {
          'type': 'button',
          'label': 'Submit 2',
          'action': 'navigation',
        },
      ]);
    });

    it('should return array of four button with navigation action from columns component with nested columns', () => {
      const components = [
        {
          'label': 'Columns',
          'columns': [
            {
              'components': [
                {
                  'label': 'Columns',
                  'columns': [
                    {
                      'components': [
                        {
                          'type': 'button',
                          'label': 'Submit 1',
                          'action': 'navigation',
                        },
                      ],
                    },
                    {
                      'components': [
                        {
                          'type': 'button',
                          'label': 'Submit 2',
                          'action': 'navigation',
                        },
                      ],
                    },
                  ],
                },
              ],
            },
            {
              'components': [
                {
                  'label': 'Columns',
                  'columns': [
                    {
                      'components': [
                        {
                          'type': 'button',
                          'label': 'Submit 3',
                          'action': 'navigation',
                        },
                      ],
                    },
                    {
                      'components': [
                        {
                          'type': 'button',
                          'label': 'Submit 4',
                          'action': 'navigation',
                        },
                      ],
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          'type': 'button',
          'label': 'Submit',
          'action': 'submit',
        },
      ] as FormComponent[];
      expect(findNavigationButtons(components)).toEqual([
        {
          'type': 'button',
          'label': 'Submit 1',
          'action': 'navigation',
        },
        {
          'type': 'button',
          'label': 'Submit 2',
          'action': 'navigation',
        },
        {
          'type': 'button',
          'label': 'Submit 3',
          'action': 'navigation',
        },
        {
          'type': 'button',
          'label': 'Submit 4',
          'action': 'navigation',
        },
      ]);
    });

    it('should return array of one button with navigation action from columns component with nested editgrid', () => {
      const components = [
        {
          'label': 'Columns',
          'columns': [
            {
              'components': [
                {
                  'label': 'Edit Grid',
                  'type': 'editgrid',
                  'components': [
                    {
                      'type': 'button',
                      'label': 'Submit 1',
                      'action': 'navigation',
                    },
                  ],
                },
              ],
  
            },
            {
              'components': [],
            },
          ],
        },
        {
          'type': 'button',
          'label': 'Submit',
          'key': 'submit',
        },
      ] as FormComponent[];
      expect(findNavigationButtons(components)).toEqual([
        {
          'type': 'button',
          'label': 'Submit 1',
          'action': 'navigation',
        },
      ]);
    });

    it('should return array of one button with navigation action from editgrid', () => {
      const components = [
        {
          'label': 'Edit Grid',
          'key': 'editGrid',
          'type': 'editgrid',
          'components': [
            {
              'label': 'Submit 1',
              'type': 'button',
              'action': 'navigation',
            },
          ],
        },
        {
          'type': 'button',
          'label': 'Submit',
          'key': 'submit',
        },
      ] as unknown as FormComponent[];
      expect(findNavigationButtons(components)).toEqual([
        {
          'type': 'button',
          'label': 'Submit 1',
          'action': 'navigation',
        },
      ]);
    });
  });
});
