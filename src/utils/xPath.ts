export const createXPathParam = (path?: string, param?: string) => {
  return path && param ? `${path}-${param}` : undefined;
};
