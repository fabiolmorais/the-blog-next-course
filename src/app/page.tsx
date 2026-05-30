import SpinLoader from "@/components/SpinLoader";
import { PostList } from "@/components/PostList";
import { Suspense } from "react";

export default async function HomePage() {

  return (
    <div>
      <Suspense fallback={<SpinLoader />}>
        <PostList />
      </Suspense>
    </div>
  );
}
