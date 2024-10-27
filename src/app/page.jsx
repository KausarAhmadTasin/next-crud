import TodoForm from "@/components/TodoForm/TodoForm";

export default function Home() {
  return (
    <div className="justify-items-center min-h-screen pb-20 gap-16 p-8 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <TodoForm />
      </main>
    </div>
  );
}
