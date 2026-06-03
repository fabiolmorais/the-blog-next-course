import { PostFeatured } from "@/components/PostFeatured";
import { PostList } from "@/components/PostList";
import { Suspense } from "react";
import SpinLoader from "@/components/SpinLoader";

export default async function HomePage() {
  return (
    <>
      <Suspense fallback={<SpinLoader />}>
        <PostFeatured />
      </Suspense>

      <Suspense fallback={<SpinLoader />}>
        <PostList />
      </Suspense>
    </>
  );
}
