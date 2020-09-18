import React from "react";
import { MDXRenderer } from "gatsby-plugin-mdx";
import { graphql as gql, Link } from "gatsby";
import { Layout } from "../components/Layout";
import Dump from "../components/Dump";

export default ({ data, pageContext }) => {
  const { frontmatter, body } = data.mdx;
  const { previous, next } = pageContext;
  return (
    <Layout>
      {/* <Dump previous={previous} /> */}
      {/* <Dump next={next} /> */}
      <h1>{frontmatter.title}</h1>
      <p>{frontmatter.date}</p>
      <MDXRenderer>{body}</MDXRenderer>
      {previous && (
        <Link to={previous.fields.slug}>
          <p>previous: {previous.frontmatter.title}</p>
        </Link>
      )}
      {next && (
        <Link to={next.fields.slug}>
          <p>next: {next.frontmatter.title}</p>
        </Link>
      )}
    </Layout>
  );
};

export const query = gql`
  query PostsBySlug($slug: String!) {
    mdx(fields: { slug: { eq: $slug } }) {
      body
      frontmatter {
        title
        date(formatString: "YYYY MMMM Do")
      }
    }
  }
`;
