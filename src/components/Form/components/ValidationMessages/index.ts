import { memo } from 'react';
import ValidationMessages, { propsComparator } from './ValidationMessages';

export default memo(ValidationMessages, propsComparator);
