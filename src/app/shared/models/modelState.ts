export interface ModelState<T> {
  isLoading: boolean;
  isLoaded: boolean;
  data?: T;
  error?: any;
}
