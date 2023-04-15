import { PrismaAdapter } from "@next-auth/prisma-adapter";
import NextAuth, { AuthOptions } from "next-auth";
import prisma from "@/libs/prismadb";
// Import providers for GitHub, Google and credentials
import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
// Import bcrypt for password hashing and comparison
import bcrypt from 'bcrypt'

// Define the auth options for NextAuth
export const authOptions: AuthOptions = {
	// Use the Prisma adapter with the prisma client instance
	adapter: PrismaAdapter(prisma),
	// Specify the providers for authentication
	providers: [
		GithubProvider({
			clientId: process.env.GITHUB_ID as string,
			clientSecret: process.env.GITHUB_SECRET as string,
		}),
		GoogleProvider({
			clientId: process.env.GOOGLE_CLIENT_ID as string,
			clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
		}),
		// Credentials provider with email and password fields
		CredentialsProvider({
			name: "credentials",
			credentials: {
				email: { label: "email", type: "text" },
				password: { label: "password", type: "password" },
			},
			async authorize(credentials) {
				// Check if the credentials are valid
				if (!credentials?.email || !credentials?.password) {
					throw new Error("Invalid credentials");
				}
				// Find the user with the given email in the database
				const user=await prisma.user.findUnique({
					where:{
						email: credentials.email
					}
				})
				// Check if the user exists and has a hashed password
				if(!user || !user?.hashPassword){
					throw new Error('Invalid credentials')
				}
				// Compare the given password with the hashed password
				const isCorrectPassword=await bcrypt.compare(credentials.password, user.hashPassword)
				if(!isCorrectPassword){
					throw new Error('Invalid credentials')
				}
				// Return the user object if authenticated successfully
				return user
			},
		}),
	],
	//whenever any error happens it will redirect to '/' page
	pages:{
		signIn: '/'
	},
	debug: process.env.NODE_ENV==='development',
	session:{
		strategy: 'jwt'
	},
	secret: process.env.NEXTAUTH_SECRET
};

// Export the default handler for NextAuth with the auth options
export default NextAuth(authOptions)