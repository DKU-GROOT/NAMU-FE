export interface LoginResponse {
  code: string;
  message: string;
  token: string;
  expirationTime: number;
  nickname: string;
  point: number;
  treeLevel: number;
  notice: boolean;
}
