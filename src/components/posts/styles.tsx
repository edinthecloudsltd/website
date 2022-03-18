import styled from 'styled-components';

export const Wrapper = styled.main`
  padding-top: var(--navbar-height);
  padding-bottom: 4rem;
`;

export const BlogPosts = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, 450px);
  gap: 2rem;
  justify-content: center;
  padding-top: 2rem;

  @media (max-width: 568px) {
    grid-template-columns: repeat(auto-fill, 95vw);
    gap: 1.5rem 4rem;
  }
`;

export const TagList = styled.div`
  position: fixed;
  left: 5%;
  width: 10%;
  padding-top: 2rem;
  display: flex;
  gap: 0.2rem;
  flex-wrap: wrap;
`;

export const Tag = styled.button`
  display: flex;
  flex-wrap: no-wrap;
  align-items: center;
  background: rgba(126, 179, 227);
  padding: 0.3rem;
  color: white;
  border-radius: 5px;
`;

export const ActiveFilters = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.2rem;
  width: 100%;
  height: 2rem;
  margin-bottom: 1rem;
`;

export const PostContent = styled.main`
  & > h3 {
    font-weight: 700;
    font-size: 1.2rem;
    margin-bottom: 0.5rem;
  }

  & > p {
    margin-bottom: 1rem;
  }

  & > ol {
    padding-left: 2rem;
    margin-bottom: 1rem;
    li {
      list-style-type: decimal;
    }
  }

  & > ul {
    padding-left: 2rem;
    margin-bottom: 1rem;
    li {
      list-style-type: circle;
    }
  }
`;
