import connect from "@/ulits/DB";
import {NextResponse} from "next/server";
import User from "@/models/User";
import bcrypt from 'bcryptjs';
export const POST = async (request) => {
  const {name, email, password} = await request.json();
  await connect();
  const hashedPswd = await bcrypt.hash(password, 5);
  const user = new User({
    username: name, email, password: hashedPswd,
  })
  try {
    await user.save();
    return new NextResponse("Пользователь успешно создан", {
      status: 201
    })
  } catch (e) {
    console.log(e);
    return new NextResponse(e.message, {
      status: 500
    })
  }
}