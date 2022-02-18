import type { NextPage } from "next";
import Link from "next/link";

import { Container, Content } from "../../styles/pages/posts/index";

const Posts: NextPage = () => {
  return (
    <Container>
      <Content>
        <article>
          <section>
            <time>12 de março de 2021</time>&nbsp;-&nbsp;<cite>Adair Juneo</cite>
          </section>
          <aside>
            <Link href={"/posts"}>
              <a>Creating a Monorepo with Lerna &amp; Yarn Workspaces</a>
            </Link>
            <p>In this guide, you will learn how to create a Monorepo to manage multiple packages with a shared build, test, and release process.</p>
          </aside>
        </article>
        <div className="dividerArticles"></div>
        <article>
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
        <div className="dividerArticles"></div>
      </Content>
    </Container>
  );
};

export default Posts;
