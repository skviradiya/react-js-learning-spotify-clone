export interface IFetchAccessTokenData {
  access_token: string;
  token_type: string;
  expires_in: number;
}
export interface ICategoriesResponse {
  categories: {
    href: string;
    items: ICategoriesItem[];
    limit: number;
    next: string;
    offset: number;
    previous: any;
    total: number;
  };
}
export interface ICategoriesItem {
  href: string;
  id: string;
  icons: {
    height: number;
    url: string;
    width: number;
  }[];
  name: string;
}
