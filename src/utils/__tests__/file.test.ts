import {
  FileFullResponse, FileShortResponse, Form, FileMetadata, TaskData,
} from 'components/Form/types';
import {
  fillFilesMetadata,
  getFileIdsWithoutMetadata,
  getFormFileKeys,
  findDataByKey,
} from 'utils/file';

describe('Form file input utils', () => {
  const form: Form = {
    name: 'testForm',
    components: [
      {
        type: 'textfield',
        key: 'someTextKey',
      },
      {
        type: 'file',
        key: 'someFileKey1',
      },
      {
        type: 'file',
        key: 'someFileKey2',
      },
    ],
  } as Form;
  const nestedForm = {
    ...form,
    components: [...form.components, {
      type: 'editgrid',
      components: [
        {
          type: 'file',
          key: 'nestedFileKey1',
        },
      ],
    }],
  } as Form;
  const dataVariables = {
    someFileKey1: [
      {
        id: 'someId1',
        checksum: 'someHash1',
      },
    ],
    someFileKey2: [
      {
        name: 'someFileName',
        url: 'someFileUrl',
        id: 'someId2',
      },
    ],
  } as unknown as TaskData<Record<string, Partial<FileFullResponse[] & FileShortResponse[]>>>;
  const nestedDataVariables = {
    ...dataVariables,
    editGrid: [
      {
        nestedFileKey1: [
          {
            id: 'someId1',
            checksum: 'someHash1',
          },
        ],
      },
    ],
  };

  describe('getFormFileKeys', () => {
    it('should extract file keys from form definition', () => {
      const keys = getFormFileKeys(form);
      expect(keys).toStrictEqual(['someFileKey1', 'someFileKey2']);
    });

    it('should extract file keys from form definition with nested components', () => {
      const keys = getFormFileKeys(nestedForm);
      expect(keys).toStrictEqual(['someFileKey1', 'someFileKey2', 'nestedFileKey1']);
    });
  });

  describe('fillFilesMetadata', () => {
    it('should fill files data with provided metadata', () => {
      const fileMetadata: FileMetadata[] = [
        {
          id: 'someId1',
          checksum: 'someHash1',
          name: 'someFileName',
          size: 424242,
          type: 'someFileType',
          url: 'someFileUrl',
        },
      ];
      const taskData = fillFilesMetadata(fileMetadata, dataVariables, form);
      expect(taskData).toStrictEqual({
        someFileKey1: [
          {
            data: {
              checksum: 'someHash1',
              id: 'someId1',
              name: 'someFileName',
              size: 424242,
              type: 'someFileType',
              url: 'someFileUrl',
            },
            name: 'someFileName',
            originalName: 'someFileName',
            size: 424242,
            url: 'someFileUrl',
          },
        ],
        someFileKey2: [
          {
            id: 'someId2',
            name: 'someFileName',
            url: 'someFileUrl',
          },
        ],
      });
    });

    it('should fill nested files data with provided metadata', () => {
      const fileMetadata: FileMetadata[] = [
        {
          id: 'someId1',
          checksum: 'someHash1',
          name: 'someFileName',
          size: 424242,
          type: 'someFileType',
          url: 'someFileUrl',
        },
        {
          id: 'someId1',
          checksum: 'someHash1',
          name: 'someFileName',
          size: 424242,
          type: 'someFileType',
          url: 'someFileUrl',
        },
      ];
      const taskData = fillFilesMetadata(fileMetadata, nestedDataVariables, nestedForm);
      expect(taskData).toStrictEqual({
        someFileKey1: [
          {
            data: {
              checksum: 'someHash1',
              id: 'someId1',
              name: 'someFileName',
              size: 424242,
              type: 'someFileType',
              url: 'someFileUrl',
            },
            name: 'someFileName',
            originalName: 'someFileName',
            size: 424242,
            url: 'someFileUrl',
          },
        ],
        someFileKey2: [
          {
            id: 'someId2',
            name: 'someFileName',
            url: 'someFileUrl',
          },
        ],
        editGrid: [
          {
            nestedFileKey1: [
              {
                data: {
                  checksum: 'someHash1',
                  id: 'someId1',
                  name: 'someFileName',
                  size: 424242,
                  type: 'someFileType',
                  url: 'someFileUrl',
                },
                name: 'someFileName',
                originalName: 'someFileName',
                size: 424242,
                url: 'someFileUrl',
              },
            ],
          },
        ],
      });
    });
  });

  describe('findDataByKey', () => {
    it('should find correct data', () => {
      expect(findDataByKey(nestedDataVariables, 'nestedFileKey1')).toEqual([
        {
          key: 'nestedFileKey1',
          data: [
            {
              id: 'someId1',
              checksum: 'someHash1',
            },
          ],
        },
      ]);
    });
  });

  it('should extract ids of file type data only without metadata', () => {
    const ids = getFileIdsWithoutMetadata(form, dataVariables);
    expect(ids).toStrictEqual([{ id: 'someId1', fieldName: 'someFileKey1' }]);
  });
});
