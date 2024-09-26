import NextAuth, { DefaultSession } from 'next-auth/next';

declare module 'next-auth' {
  interface Session {
    user: {
      accessToken: string;
      kakaoAccessToken: string;
      kakaoRefreshToken: string;
      name: string;
      uuid: string;
    } & DefaultSession['user'];
  }

  interface User extends DefaultUser {
    accessToken: string;
    name: string;
    uuid: string;
  }
}
