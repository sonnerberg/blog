import React from "react";
import Dump from "../components/Dump";
import { Layout } from "../components/Layout";
import { graphql as gql, Link } from "gatsby";
import styled from "styled-components";

const IndexWrapper = styled.main``;

const PostWrapper = styled.div``;

export default ({ data }) => {
  return (
    <Layout>
      <IndexWrapper>
        <Dump data={data} />
        {data.allMdx.nodes.map(({ excerpt, frontmatter, id, fields }) => (
          <PostWrapper key={id}>
            <Link to={fields.slug}>
              <h1>{frontmatter.title}</h1>
              <p>{frontmatter.date}</p>
              <p>{excerpt}</p>
            </Link>
          </PostWrapper>
        ))}
      </IndexWrapper>
    </Layout>
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
        fields {
          slug
        }
      }
    }
  }
`;
