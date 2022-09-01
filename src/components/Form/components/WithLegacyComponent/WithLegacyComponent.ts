import { modifySelectRowData, checkRefresh } from '../../utils';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const withLegacyComponent = (Component: any) => class FormioLegacyClass extends Component {
  checkCondition(row: Record<string, unknown>, data: Record<string, unknown>) {
    return super.checkCondition(modifySelectRowData(this.component, this.root, row), data);
  }

  checkRefresh(refreshData: string, changed: Record<string, unknown>, flags: Record<string, unknown>) {
    return checkRefresh.call(this, refreshData, changed, flags);
  }
} as typeof Component;
