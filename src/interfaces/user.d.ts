export interface userProps {
  name: string;
  phone: string;
  address: string;
  select?: string;
  url?: string;
  agreement: boolean;
}

export type UserListState = userProps[];
