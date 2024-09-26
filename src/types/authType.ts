export interface SignInInputType {
  text: React.ReactNode;
  value: string;
  name: string;
  setValue: (value: string) => void;
  clearValue: () => void;
}

export interface SignInLinkType {
  url: string;
  text: string;
}

export enum AuthenticationMethodType {
  FindId = 'find-id',
  FindPw = 'find-pw',
  FoundId = 'found-id',
  FoundPw = 'found-pw',
}

export interface SignUpFieldType {
  name: string;
  nickname: string;
  password: string;
  confirmPassword: string;
}
