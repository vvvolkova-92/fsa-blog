import {NextResponse} from "next/server";
import connect from "@/ulits/DB";
import Post from "@/models/Post";

export const GET = async (request, {params}) => {
  const {id} = params;
  try {
    await connect();
    const post = await Post.findById(id);
    return new NextResponse(JSON.stringify(post), {
      status: 200
    });
  }
  catch (e) {
    return new NextResponse("Ошибка базы данных", {
      status: 500
    });
  }
}