import NextAuth, { User } from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials";

type CustomUser = User & {
    jwt: string;
  };


export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    CredentialsProvider({
        name: "Credentials",
        credentials: {
          // username: { label: "Email", type: "text", placeholder: "" },
          // password: { label: "Password", type: "password" }
        },
        async authorize(credentials, req) {
          const user: CustomUser = {
            id: "1",
            name: "Italo Silva",
            email: "jsmith@example.com",
            jwt: "SDFAJKFHSFDFDSGFJHDSFDS7FDJHFGDSF9DSHFDSGFDJSHFGDFJDHSGF5DSGDFGDFDSSDF"
          };
  
          if (user) {
            return user;
          } else {
            throw new Error('Invalid login credentials');
          }
        }
      })
    // ...add more providers here
  ],
}
export default NextAuth(authOptions)