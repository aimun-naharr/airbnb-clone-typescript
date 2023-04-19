// import { NextResponse } from "next/server";
import bcrypt from "bcrypt";

import prisma from "@/libs/prismadb";
import type { NextApiRequest, NextApiResponse } from 'next'

export default async function POST(
	req: NextApiRequest,
	res: NextApiResponse
) {
  const body = await req.body;
  const { 
    email,
    name,
    password,
   } = body;

   const hashedPassword = await bcrypt.hash(password, 12);

   const user = await prisma.user.create({
      data:{
		email,
		name, 
		hashedPassword,
  
	  }
  });

res.status(200).json(user)
}
