export interface userType {
  name: string;
  phone: string;
  address: string;
  select?: string;
  url?: string;
  agreement: boolean;
}

export type userId = string | undefined;

export type userSelectType = userType[];

export type userListType = {
  id: userId;
  userList: userType[];
};

export type allUserListType = userListType[];

export interface disabledCheckType {
  label: string;
  required?: boolean;
  value?: stinrg | boolean;
}

export type disabledCheckUserData = disabledCheckType[];
