import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { useSession } from "next-auth/react";
import Head from "next/head";

import { RichText } from "prismic-dom";
import getPrismicClient from "../../../services/prismic";

import { ParsedUrlQuery } from "querystring";

import { Container, Content } from "../../../styles/pages/posts/preview/[slug]";
import Link from "next/link";
import { useEffect } from "react";
import { useRouter } from "next/router";

interface SlugType extends ParsedUrlQuery {
  slug: string;
}

interface PagePostPreviewProps {
  post: { id: string; slug: string; title: string; publishedAt: string; contentPost: string };
}

const PostPreview: NextPage<PagePostPreviewProps> = ({ post }) => {
  const { data } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (data?.subscriptionUser) {
      router.push(`/posts/${post.slug}`);
    }
  }, [data, post.slug, router]);

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
        <aside className="previewContent" dangerouslySetInnerHTML={{ __html: post.contentPost }} />
      </Content>

      <Link href={"/"}>
        <a title="Me inscrever agora!">
          Deseja continuar lendo?&nbsp;<span>Inscreva-se agora</span>&nbsp;🤗
        </a>
      </Link>
    </Container>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { slug } = params as SlugType;

  const prismic = getPrismicClient();

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
    contentPost: RichText.asHtml(response.data.content.splice(0, 3)),
  };

  return {
    props: { post },
    revalidate: 60 * 60 * 4, // 4 Horas
  };
};

export default PostPreview;
