import React from "react";
import { Layout } from "../components/Layout";
import { graphql as gql } from "gatsby";

export default ({ data }) => {
  return (
    <React.Fragment>
      <Layout>
        {data.allMdx.nodes.map(({ excerpt, frontmatter }) => (
          <React.Fragment>
            <h1>{frontmatter.title}</h1>
            <p>{frontmatter.date}</p>
            <p>{excerpt}</p>
          </React.Fragment>
        ))}
      </Layout>
    </React.Fragment>
  );
};

export const query = gql`
  query SITE_INDEX_QUERY {
    allMdx(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { published: { eq: true } } }
    ) {
      nodes {
        id
        excerpt(pruneLength: 250)
        frontmatter {
          title
          date
        }
      }
    }
  }
`;
