export interface ErrorInfo {
  message?: string;
  componentProps?: {
    title?: string;
    description?: string;
    backLink?: string;
    backLinkTitle?: string;
    hasRefreshBtn?: boolean;
    hideNavigation?: boolean;
  };
}
