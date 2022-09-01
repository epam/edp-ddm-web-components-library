/* eslint-disable */
import { Components } from 'react-formio';
import settingsForm from './CustomSelectBoxesSettings';

const SelectBoxesComponent = (Components as any).components.selectboxes;

export default class CustomSelectBoxes extends (SelectBoxesComponent as any) {
  static editForm = settingsForm;
}
