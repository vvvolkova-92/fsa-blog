import {NextResponse} from "next/server";
import connect from "@/ulits/DB";
import Post from "@/models/Post";

export const GET = async (request) => {
  const url = new URL(request.url);
  const email = url.searchParams.get("email");

  try {
    await connect();
    const posts = await Post.find(email && {email});
    return new NextResponse(JSON.stringify(posts), {
      status: 200
    });
  }
  catch (e) {
    return new NextResponse("Ошибка базы данных", {
      status: 500
    });
  }
};

export const POST = async (request) => {
  const body = await request.json();
  const post = new Post(body);
  try {
    await connect();
    await post.save();
    return new NextResponse("Пост отправлен", {
      status: 201
    });
  }
  catch (e) {
    return new NextResponse("Ошибка базы данных", {
      status: 500
    });
  }
}