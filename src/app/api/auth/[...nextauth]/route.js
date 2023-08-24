import NextAuth from "next-auth";
import YandexProvider from "next-auth/providers/yandex";

const handler = NextAuth({
  providers: [
    YandexProvider({
      clientId: process.env.YANDEX_CLIENT_ID,
      clientSecret: process.env.YANDEX_CLIENT_SECRET,
    })
  ],
  secret: process.env.NEXTAUTH_SECRET,
})

export {handler as GET, handler as POST}