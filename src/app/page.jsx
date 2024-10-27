import TodoApp from "@/components/TodoApp/TodoApp";
import TodoForm from "@/components/TodoForm/TodoForm";
import Todos from "@/components/Todos/Todos";

export default function Home() {
  return (
    <div className="justify-items-center min-h-screen pb-20 gap-16 p-8 font-[family-name:var(--font-geist-sans)]">
      <main className="flex gap-14 items-center sm:items-start">
        <TodoApp />
      </main>
    </div>
  );
}
