export interface ApiResponse<T = any> {
  data: T;
  message?: string;
  status: number;
}
