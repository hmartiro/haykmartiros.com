import React from 'react';
import Helmet from 'react-helmet';
import styled from 'styled-components';

import TextPostBody from './../components/TextPostBody';
import ProjectLinks from './../components/ProjectLinks';

const StyledTitleWrap = styled.div`
  margin-bottom: 1em;
`;

const StyledTitle = styled.h1`
  margin-bottom: 0;
`;

const StyledPostDate = styled.time`
  color: #999;
  font-weight: 400;
  display: block;
  margin-top: 1em;
  margin-bottom: 1em;
  text-align: right;
`;

export default ({ data }) => {
  const post = data.markdownRemark;

  return (
    <div>
      {post.frontmatter.title && (
        <Helmet>
          <title>Hayk Martiros | {post.frontmatter.title}</title>
        </Helmet>
      )}

      {post.frontmatter.title &&
        post.frontmatter.excerpt && (
          <Helmet>
            <meta property="og:title" content={post.frontmatter.title} />
            <meta name="twitter:title" content={post.frontmatter.title} />

            <meta
              property="og:description"
              content={post.frontmatter.excerpt}
            />
            <meta
              name="twitter:description"
              content={post.frontmatter.excerpt}
            />
          </Helmet>
        )}

      <h1>{post.frontmatter.title}</h1>
      <TextPostBody htmlAst={post.htmlAst} />
      <StyledPostDate>{post.frontmatter.date}</StyledPostDate>
    </div>
  );
};

export const query = graphql`
  query BlogPostQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      htmlAst
      frontmatter {
        title
        date
        excerpt
      }
    }
  }
`;
