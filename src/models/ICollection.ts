export interface ICollection {
  id: string;
  user: {
    first_name: string;
    last_name: string;
  };
  urls: {
    small: string;
  };
}
export interface IAPICollection {
  results: ICollection[];
}
