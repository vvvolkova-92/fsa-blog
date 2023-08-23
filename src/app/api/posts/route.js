import {NextResponse} from "next/server";
import connect from "@/ulits/DB";
import Post from "@/models/Post";

export const GET = async (request) => {
  try {
    await connect();
    const posts = await Post.find();
    return new NextResponse(JSON.stringify(posts), {
      status: 200
    });
  }
  catch (e) {
    return new NextResponse("Ошибка базы данных", {
      status: 500
    });
  }
}