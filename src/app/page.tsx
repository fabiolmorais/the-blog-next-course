import { PostFeatured } from "@/components/PostFeatured";
import { Container } from "@/components/Container";
import { PostList } from "@/components/PostList";
import { Suspense } from "react";
import { Header } from "@/components/Header";
import SpinLoader from "@/components/SpinLoader";

export default async function HomePage() {
  return (
    <Container>
      <Header />

      <Suspense fallback={<SpinLoader />}>
        <PostFeatured />
      </Suspense>
      
      <Suspense fallback={<SpinLoader />}>
        <PostList />
      </Suspense>
    </Container>
  );
}
