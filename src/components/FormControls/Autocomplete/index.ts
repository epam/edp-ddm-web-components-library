import { withStyles } from '@material-ui/core';

import styles from './Autocomplete.styles';
import Autocomplete, { AutocompleteProps } from './Autocomplete';

export default withStyles(styles)(Autocomplete) as React.ComponentClass<AutocompleteProps>;
