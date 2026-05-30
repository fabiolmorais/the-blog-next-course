import SpinLoader from "@/components/SpinLoader";
import { PostList } from "@/components/PostList";
import { Suspense } from "react";
import { Container } from "@/components/Container";

export default async function HomePage() {
  return (
    <Container>
      <Suspense fallback={<SpinLoader />}>
        <PostList />
      </Suspense>
    </Container>
  );
}
