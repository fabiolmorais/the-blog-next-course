import SpinLoader from "@/components/SpinLoader";
import { PostList } from "@/components/PostList";
import { Suspense } from "react";

export default async function HomePage() {

  return (
    <div className="text-slate-900 bg-slate-100 min-h-screen dark:bg-slate-900 dark:text-slate-100">
      <Suspense fallback={<SpinLoader />}>
        <PostList />
      </Suspense>
    </div>
  );
}
