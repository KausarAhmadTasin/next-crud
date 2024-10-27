import connectDB from "@/lib/connectDB";

export const POST = async (request) => {
  try {
    const db = await connectDB();
    const todoCollection = db.collection("todos");
    const newTodo = await request.json();
    const res = await todoCollection.insertOne(newTodo);

    return Response.json({ message: "TODO added" });
  } catch (error) {
    return Response.json({ message: "Could not add todo" });
  }
};

export const GET = async () => {
  try {
    const db = await connectDB();
    const todoCollection = db.collection("todos");
    const todos = await todoCollection.find().toArray();

    return new Response(JSON.stringify(todos), { status: 200 });
  } catch (error) {
    return new Response("Error fetching todos", { status: 500 });
  }
};
