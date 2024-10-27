import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions = {
  session: { strategy: "jwt", maxAge: 30 * 24 * 60 * 60 },
  secret: process.env.NEXT_PUBLIC_AUTH_SECRET,

  providers: [
    CredentialsProvider({
      credentials: {
        email: {
          label: "Email",
          type: "email",
          placeholder: "Your Email",
        },
        password: {
          label: "Password",
          type: "password",
          placeholder: "Password",
        },
      },

      async authorize(credentials) {
        const { email, password } = credentials;
        if (!credentials) {
          return null;
        }
        if (email) {
          const currentUser = users.find((user) => user.email === email);
          if (currentUser.password === password) {
            return { ...currentUser };
          }
        }
        return null;
      },
    }),
  ],
};

const handler = NextAuth(authOptions);

const users = [
  {
    id: 1,
    name: "abul",
    email: "abul@gmail.com",
    password: "111111",
  },
];

export { handler as GET, handler as POST };
