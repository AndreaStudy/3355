export interface SignUpErrorMessageType {
  id: string;
  name: string;
  nickname: string;
  email: string;
  password: string;
  confirmPassword: string;
  terms: string;
}

export interface SignUpRequestType {
  id: string;
  nickname: string;
  email: string;
  password: string;
  confirmPassword: string;
  terms: string[];
}

export interface ChangePwRequestType {
  password: string;
  confirmPassword: string;
}

export interface AddDeliveryRequestType {
  nickname: string;
  receiver: string;
  postNumber: string;
  address: string;
  detailAddress: string;
  phone1: string;
  phone2: string;
  message: string;
  baseAddress: boolean;
}

export interface cartItemType {
  productUuid: string;
  memberUuid: string;
  limitQuantity: number;
  currentQuantity: number;
  regDate: Date;
  modDate: Date;
  checked: boolean;
}
