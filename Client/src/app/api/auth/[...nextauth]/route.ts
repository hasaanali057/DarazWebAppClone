import { Backend_URL } from "@/lib/constants";
import axios from "axios";
import nextAuth, { NextAuthOptions, Session } from "next-auth";
import CredentialsProvider from 'next-auth/providers/credentials';

interface MySession extends Session {
  backendTokens: string | null; // Modify the data type as needed
}

type user = {
  id:string;
  email: string;
}

export const authoptions: NextAuthOptions = {
  providers:[
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
      },
      async authorize(credentials, req) {
        
        const { email, password } = credentials as { email: string; password: string; };

        //if(!email || !password) return null;
        
        // getting user from DataBase and Nest Server
        const res = await axios.post(Backend_URL+'/auth/login',{
          email: email,
          password: password
        });
        
        if(res.status == 401){
          console.log(res.statusText);
          return null;
        }
        
        const user =await res.data;
        
        return user;
      },
    })
  ],
  // callbacks:{
  //   async jwt({
  //     token, user
  //   }){
  //     if(user) return { ...token, ...user };
  //     return token;
  //   },
  //   async session({ token, session }){
  //     session. = token.user;
  //     session.backendTokens = token.backendtokens;
  //     return session;
  //   }
  // },
  pages: {
    signIn: '/pages/signin',
  },
  session: {
    strategy: 'jwt',
  },
  secret: process.env.AUTH_SECRET,
}

const handler = nextAuth(authoptions);

export { handler as GET, handler as POST };