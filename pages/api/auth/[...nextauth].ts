import { Auth } from "@/src/services/auth/auth-service";
import { User as UserLogin } from "@/src/services/user/user-service";
import axios from "axios";
import { Session } from "inspector";
import NextAuth, { Account, Profile, User } from "next-auth"
import { JWT } from "next-auth/jwt";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";

type CustomUser = User & {
    profileId: number
    jwt: string;
  };

type DataResp =  {
    data: string;
    status: number;
  };

  type NextAuthSession = {
    id: string;
    jwt: string;
    name: string;
    email: string;
    profileId: number;
    expiration: number;
  };
  type DataUser = {
    id: string;
    username: string;
    email: string;
    profileId: number;
  };
  
  type LoginData = {
    jwt: string;
    user: DataUser;
  };

  const currentTimeInSeconds = Math.floor(Date.now() / 1000);
  const tokenExpirationInSeconds = 7 * 24 * 60 * 60;

export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    CredentialsProvider({
        name: "Credentials",
        credentials: {
          // username: { label: "Email", type: "text", placeholder: "" },
          // password: { label: "Password", type: "password" }
        },
        async authorize(credentials:any, req):Promise<any> {
          try {
           
            const authorized:DataResp = await Auth.sideIn({
                          email:credentials?.email,
                          password:credentials?.password
                        })
           const userData = await UserLogin.FindOne({
                            email:credentials?.email,
                            jwt:authorized.data
                          })
            if(userData?.data){
              const {id, name, email,profileId } = userData.data
               const user: CustomUser = {
                id,
                name,
                email,
                profileId,
                jwt: authorized.data
              };
              return user
            }
            return null

          } catch (error) {
            return null
          }
        }
      }),
      GoogleProvider({ 
        clientId: `${process.env.GOOGLE_CLIENT_ID}`,
        clientSecret: `${process.env.GOOGLE_SECRET_KEY}`,
    })

    // ...add more providers here
  ],
  
  callbacks: {
    async signIn({ user, account, profile }: { user: User ; account: Account | null; profile?: Profile | undefined }): Promise<boolean> {
      return true;
    },
    async redirect({ url, baseUrl }: { url: string; baseUrl: string }): Promise<string> {
      return baseUrl;
    },
    async session({ session, token }: { session: Session|any; token: JWT| any }): Promise<any> {
      if (!token) {
        return session;
      }
      session.accessToken = token.jwt;
      session.user = {
        id: token.id,
        name: token.name,
        email: token.email,
        profileId: token.profileId,
      };
      return session;
    },
    async jwt({ token, user, account, profile, isNewUser }: { token: JWT|any; user?: User| any; account?: Account | null; profile?: Profile; isNewUser?: boolean }): Promise<JWT> {
      const isSignedIn = !!user;
      if (isSignedIn && user) {
        if(account && account?.provider === 'google'){
          const authorized = await axios.get(`${process.env.APP_BASE_URL}auth/google/login?access_token=${account.access_token}`)
          const userData = await UserLogin.FindOne({
            email:user?.email,
            jwt:authorized.data.access_token
          })
         
          if(!userData){
            return {};
          }
          token = {
            jwt: authorized.data.access_token,
            id: userData.data.id,
            name: user.name,
            email: user.email,
            profileId: 1,
            expiration: `${currentTimeInSeconds + tokenExpirationInSeconds}`,
          }
          console.log(token)
        }else{
          token = {
              jwt: user.jwt,
              id: user.user.id,
              name: user.user.username,
              email: user.user.email,
              profileId: user.user.profileId,
              expiration: `${currentTimeInSeconds + tokenExpirationInSeconds}`,
            }
        }
      }

      if (token.expiration && currentTimeInSeconds > token.expiration) {
        return {};
      }

      return token;
    }
  }
}

const setToken = (data: LoginData): NextAuthSession|any => {
  if (!data || !data?.user || !data?.jwt) return {};

  return {
    jwt: data.jwt,
    id: data.user.id,
    name: data.user.username,
    email: data.user.email,
    profileId: data.user.profileId,
    expiration: `${currentTimeInSeconds + tokenExpirationInSeconds}`,
  };
};

export default NextAuth(authOptions)