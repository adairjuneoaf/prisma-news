import { GetServerSideProps, NextPage } from "next";
import { Session } from "next-auth";
import { getSession } from "next-auth/react";

import Head from "next/head";
import { RichText } from "prismic-dom";
import { ParsedUrlQuery } from "querystring";

import getPrismicClient from "../../services/prismic";

import { Container, Content } from "../../styles/pages/posts/[slug]";

interface SlugType extends ParsedUrlQuery {
  slug: string;
}

interface PagePostProps {
  post: { id: string; slug: string; title: string; publishedAt: string; contentPost: string };
}

const Post: NextPage<PagePostProps> = ({ post }) => {
  return (
    <Container>
      <Head>
        <title>prisma.news | {post.title}</title>
      </Head>
      <Content>
        <h1>{post.title}</h1>
        <section>
          <time>{post.publishedAt}</time>&nbsp;-&nbsp;<cite>Adair Juneo</cite>
        </section>
        <aside dangerouslySetInnerHTML={{ __html: post.contentPost }} />
      </Content>
    </Container>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ params, req }) => {
  const { slug } = params as SlugType;

  const session = await getSession({ req });
  const prismic = getPrismicClient();

  if (!session?.subscriptionUser) {
    return {
      redirect: {
        destination: `/posts/preview/${slug}`,
        permanent: false,
      },
    };
  }

  const response = await prismic.getByUID("post", slug);

  const post = {
    id: response.id,
    slug: response.uid,
    title: RichText.asText(response.data.title),
    publishedAt: new Date(response.first_publication_date).toLocaleDateString("pt-BR", {
      day: "2-digit",
      month: "long",
      year: "numeric",
    }),
    contentPost: RichText.asHtml(response.data.content),
  };

  return {
    props: { post },
  };
};

export default Post;
