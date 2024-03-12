import NextAuth from "next-auth";
import { options } from "./options";

const handler = NextAuth(options);
console.log("hello1")
export { handler as GET, handler as POST };
