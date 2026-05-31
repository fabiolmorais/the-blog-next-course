import { PostCoverImage } from "@/components/PostCoverImage";
import { PostHeading } from "@/components/PostHeading";
import { Container } from "@/components/Container";
import { PostList } from "@/components/PostList";
import { Suspense } from "react";
import { Header } from "@/components/Header";
import SpinLoader from "@/components/SpinLoader";

export default async function HomePage() {
  return (
    <Container>
      <Header />

      <section className="grid grid-cols-1 gap-8 mb-16 sm:grid-cols-2 group">
        <PostCoverImage
          linkProps={{
            href: "/post/asdasd",
          }}
          imageProps={{
            width: 1200,
            height: 720,
            src: "/images/bryen_9.png",
            alt: "Alt da imagem",
            priority: true,
          }}
        />
        <div className="flex flex-col gap-4 sm:justify-center">
          <time
            className="text-slate-600 block text-sm/tight"
            dateTime="2025-04-20"
          >
            20/04/2025 10:00
          </time>

          <PostHeading as="h1" url="#">
            Lorem ipsum dolor sit amet consectetur
          </PostHeading>

          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quam aut
            nam veniam deleniti itaque quod officia excepturi sint iste nisi
            ipsum nihil obcaecati quibusdam incidunt, enim repudiandae veritatis
            soluta nostrum?
          </p>
        </div>
      </section>

      <Suspense fallback={<SpinLoader />}>
        <PostList />
      </Suspense>
    </Container>
  );
}
