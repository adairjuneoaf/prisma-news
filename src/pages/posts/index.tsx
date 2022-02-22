import type { GetStaticProps, NextPage } from "next";

import Link from "next/link";
import { RichText } from "prismic-dom";

import getPrismicClient from "../../services/prismic";

import { Container, Content } from "../../styles/pages/posts/index";

type Post = {
  id: string;
  slug: string;
  title: string;
  //author: string;
  publishedAt: string;
  previewContentPost: string;
};

interface PostsProps {
  listPosts: Array<Post>;
}

const Posts: NextPage<PostsProps> = ({ listPosts }) => {
  return (
    <Container>
      <Content>
        {listPosts.map((post) => (
          <>
            <article key={post.id}>
              <section>
                <time>{post.publishedAt}</time>&nbsp;-&nbsp;<cite>Adair Juneo</cite>
              </section>
              <aside>
                <Link href={"/posts"}>
                  <a>{post.title}</a>
                </Link>
                <p>{post.previewContentPost}</p>
              </aside>
            </article>
            <div className="dividerArticles"></div>
          </>
        ))}

        {/* <article>
          <section>
            <time>08 de março de 2021</time>&nbsp;-&nbsp;<cite>Adair Juneo</cite>
          </section>
          <aside>
            <Link href={"/posts"}>
              <a>How Stripe Designs Beautiful Websites</a>
            </Link>
            <p>Examining the tips and tricks used to make Stripe&apos;s website design a notch above the rest.</p>
          </aside>
        </article>
        <div className="dividerArticles"></div> */}
      </Content>
    </Container>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const prismic = getPrismicClient();

  const response = await prismic.getByType("post", {
    fetch: ["publication.title", "publication.content"],
    pageSize: 100,
  });

  const listPosts = response.results.map((post) => {
    return {
      id: post.id,
      slug: post.uid,
      title: RichText.asText(post.data.title),
      publishedAt: new Date(post.first_publication_date).toLocaleDateString("pt-BR", {
        day: "2-digit",
        month: "long",
        year: "numeric",
      }),
      previewContentPost: post.data.content.find((content: any) => content.type === "paragraph")?.text ?? "",
    };
  });

  return {
    props: {
      listPosts,
    },
  };
};

export default Posts;
