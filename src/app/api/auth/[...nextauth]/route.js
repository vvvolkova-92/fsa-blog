import NextAuth from "next-auth";
import YandexProvider from "next-auth/providers/yandex";
import CredentialsProvider from "next-auth/providers/credentials"
import User from "@/models/User";
import connect from "@/ulits/DB";
import bcrypt from "bcryptjs";

const handler = NextAuth({
  providers: [
    YandexProvider({
      clientId: process.env.YANDEX_CLIENT_ID,
      clientSecret: process.env.YANDEX_CLIENT_SECRET,
    }),
    CredentialsProvider({
      id: "credentials",
      name: "Credentials",
      async authorize(credentials) {
        await connect();
        try {
          const user = await User.findOne({email: credentials.email});
          if(user) {
            const isCorrentPassword = await bcrypt.compare(credentials.password, user.password);
            if(isCorrentPassword) {
              return user
            } else throw new Error("Указан не верный пароль")
          }
          else throw new Error("Пользователь не найден")
        } catch (e) {
          throw new Error(e);
        }
      }
    })
  ],
  pages: {
    error: "/dashboard/login"
  },
  secret: process.env.NEXTAUTH_SECRET,
})

export {handler as GET, handler as POST}