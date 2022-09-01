import { createStyles, Theme } from '@material-ui/core';
import { createFileStyles } from 'components/Form/formioComponents/CustomFormioFile/CustomFile.styles';
import { createFieldSetStyles } from 'components/Form/formioComponents/CustomFieldSet/CustomFieldSet.styles';
import { createButtonStyles } from 'components/Form/formioComponents/CustomButton/CustomButton.styles';
import { createColumnsStyles } from 'components/Form/formioComponents/CustomColumns/CustomColumns.styles';
import { createTableStyles } from 'components/Form/formioComponents/CustomTable/CustomTable.styles';

const styles = (theme: Theme) => createStyles({
  '@global': {
    ...createFileStyles(theme.colors),
    ...createFieldSetStyles(theme),
    ...createButtonStyles(theme),
    ...createColumnsStyles(),
    ...createTableStyles(theme),
  },
});

export default styles;
