import { GetStaticProps, GetStaticPaths, InferGetStaticPropsType } from "next";
import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote } from "next-mdx-remote";
//import hydrate from "next-mdx-remote/hydrate";
import matter from "gray-matter";
import { fetchPostContent } from "../../lib/posts";
import fs from "fs";
import yaml from "js-yaml";
import { parseISO } from "date-fns";
import PostLayout from "../../components/PostLayout";

import InstagramEmbed from "react-instagram-embed";
import YouTube from "react-youtube";
import { TwitterTweetEmbed } from "react-twitter-embed";
import Author from "../../components/Author";
import { getAuthor } from "../../lib/authors";

// export type Props = {
//   title: string;
//   dateString: string;
//   slug: string;
//   tags: string[];
//   author: string;
//   description?: string;
//   source: MDXRemote.Source;
// };

const components = { InstagramEmbed, YouTube, TwitterTweetEmbed };
const slugToPostContent = ((postContents) => {
  let hash = {};
  postContents.forEach((it) => (hash[it.slug] = it));
  return hash;
})(fetchPostContent());

export default function Post({
  title,
  dateString,
  slug,
  description = "",
  tags,
  author,
  source,
  content,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  //const content = hydrate(source, { components });
  return (
    <PostLayout
      title={title}
      date={parseISO(dateString)}
      slug={slug}
      tags={tags}
      author={author}
      description={description}
    >
      <MDXRemote {...source} />
    </PostLayout>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = fetchPostContent().map((it) => "/posts/" + it.slug);
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const slug = params.post as string;
  const source = fs.readFileSync(slugToPostContent[slug].fullPath, "utf8");

  // use grey-matter package to process the front-matter
  const { data, content } = matter(source, {
    engines: {
      yaml: (s) => yaml.load(s, { schema: yaml.JSON_SCHEMA }) as object,
    },
  });

  // serialize the front-matter
  const mdxSource = await serialize(source, {
    scope: data,
    parseFrontmatter: true,
  });

  return {
    props: {
      title: data.title,
      dateString: data.date,
      slug: data.slug,
      description: "",
      tags: data.tags,
      author: data.author,
      source: mdxSource,
      content: content,
    },
  };
};
