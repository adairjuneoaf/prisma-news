import type { GetStaticProps, NextPage } from "next";
import Head from "next/head";

import Link from "next/link";
import { RichText } from "prismic-dom";

import getPrismicClient from "../../services/prismic";

import { Container, Content } from "../../styles/pages/posts/index";

type Post = {
  id: string;
  slug: string;
  title: string;
  publishedAt: string;
  previewContentPost: string;
};

interface PostsProps {
  listPosts: Array<Post>;
}

const Posts: NextPage<PostsProps> = ({ listPosts }) => {
  return (
    <Container>
      <Head>
        <title>prisma.news | Posts</title>
      </Head>
      <Content>
        {listPosts.map((post) => (
          <article key={post.id}>
            <section>
              <time>{post.publishedAt}</time>&nbsp;-&nbsp;<cite>Adair Juneo</cite>
            </section>
            <aside>
              <Link href={`/posts/${post.slug}`}>
                <a>{post.title}</a>
              </Link>
              <p>{post.previewContentPost}</p>
            </aside>
            <div className="dividerArticles"></div>
          </article>
        ))}
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
    revalidate: 60 * 60 * 4, // 4 Horas,
  };
};

export default Posts;
