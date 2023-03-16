export interface ModelState<T> {
  isLoading: boolean;
  data?: T;
  error?: any;
}
