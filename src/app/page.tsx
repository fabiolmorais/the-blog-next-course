import SpinLoader from "@/components/SpinLoader";
import { PostList } from "@/components/PostList";
import { Suspense } from "react";
import { Container } from "@/components/Container";
import { Header } from "@/components/Header";

export default async function HomePage() {
  return (
    <Container>
      <Header />
      <Suspense fallback={<SpinLoader />}>
        <PostList />
      </Suspense>
    </Container>
  );
}
