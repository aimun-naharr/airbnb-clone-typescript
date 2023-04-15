// import the PrismaClient class from the @prisma/client package
import { PrismaClient } from "@prisma/client";
// declare a global variable named prisma that can be undefined or an instance of PrismaClient
declare global{
    var prisma: PrismaClient | undefined
}
// assign the global prisma variable to a new instance of PrismaClient if it is undefined, or use the existing one
const client =globalThis.prisma || new PrismaClient()

if(process.env.NODE_ENV!== 'production') globalThis.prisma=client

export default client;