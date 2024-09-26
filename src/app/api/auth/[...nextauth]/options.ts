import { commonResType, userDataType } from '@/types/ResponseTypes';
import { NextAuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import KakaoProvider from 'next-auth/providers/kakao';

export const options: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: 'credentials',
      credentials: {
        id: { label: 'id', type: 'text' },
        password: { label: 'password', type: 'password' },
      },
      async authorize(credentials): Promise<any> {
        if (!credentials?.id || !credentials?.password) {
          return null;
        }

        try {
          const res = await fetch(
            `${process.env.API_BASE_URL}/api/v1/auth/sign-in`,
            {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                userId: credentials.id,
                password: credentials.password,
              }),
              cache: 'no-cache',
            }
          );
          const user = (await res.json()) as commonResType<userDataType>;
          return user.result;
        } catch (error) {
          console.error('error', error);
        }
        return null;
      },
    }),
    KakaoProvider({
      clientId: process.env.KAKAO_CLIENT_ID || '',
      clientSecret: process.env.KAKAO_CLIENT_SECERET || '',
    }),
  ],
  callbacks: {
    async signIn({ user, account, profile, email, credentials }) {
      if (profile && account) {
        try {
          const res = await fetch(
            `${process.env.API_BASE_URL}/api/v1/auth/oauth-sign-in`,
            {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                provider: account.provider,
                providerId: account.providerAccountId,
                providerEmail: user.email,
              }),
              cache: 'no-cache',
            }
          );
          const data = (await res.json()) as commonResType<userDataType>;
          if (data.result?.registered === true) {
            user.accessToken = data.result?.accessToken;
            user.name = data.result?.userId;
            user.uuid = data.result?.uuid;
            console.log(data.result);
          } else {
            return '/sign-up';
          }
          return true;
        } catch (error) {
          console.error('error입니다.', error);
          return '/sign-up';
        }
      }
      return true;
    },

    async jwt({ token, user }) {
      return { ...token, ...user };
    },

    async session({ session, token }) {
      session.user = { ...token } as any;
      return session;
    },

    async redirect({ url, baseUrl }) {
      return url.startsWith(baseUrl) ? url : baseUrl;
    },
  },
  pages: {
    signIn: '/sign-in',
    error: '/error',
  },
};
