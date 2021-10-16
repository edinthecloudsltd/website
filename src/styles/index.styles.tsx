import styled from 'styled-components';

import colors from './colors';

export const HomeHeadingWrapper = styled.section`
  display: flex;
  font-size: 4.5rem;
  font-weight: 700;
  justify-content: center;
  align-items: center;
`;

export const HomeContentWrapper = styled.main`
  padding: 5rem 0;
  color: rgba(126, 179, 227);
`;

export const HomeContentCard = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: #c7f1ff;
  border-radius: 50px;
  padding: 5rem;
  max-width: 744px;
  margin: 0 auto;
  box-shadow: 0px 12px 12px 2px rgba(0, 0, 0, 0.1);
`;

export const BlogPostsWrapper = styled.main`
  background: ${colors.teal};
  margin-top: 5rem;
  border-radius: 50px;
  padding: 5rem 2rem;
`;

export const BlogPostsInnerWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 2rem;
  justify-content: center;
`;

export const BlogPostCard = styled.div`
  flex: 1 50%;
  border-radius: 50px;
  padding: 3.5rem;
  max-width: 45%;
  background: salmon;
  transition: 0.5s ease;
  box-shadow: 0px 12px 12px 2px rgba(0, 0, 0, 0.1);

  &:hover {
    transform: scale(1.02);
  }
`;
