import styled from 'styled-components';

const handleTagColor = (color: string): string => {
  switch (color) {
    case 'yellow':
      return 'rgb(253, 236, 200)';
    case 'green':
      return 'rgb(219, 237, 219)';
    case 'brown':
      return 'rgb(238, 224, 218)';
    case 'purple':
      return 'rgb(232, 222, 238)';
    case 'blue':
      return 'rgb(211, 229, 239)';
    case 'pink':
      return 'rgb(245, 224, 233)';
    case 'red':
      return 'rgb(255, 226, 221)';
    case 'orange':
      return 'rgb(250, 222, 201)';
    default:
      return 'blue';
  }
};

export const Wrapper = styled.main`
  padding-top: var(--navbar-height);
  padding-bottom: 4rem;
  background: white;
`;

export const BlogPosts = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, 450px);
  gap: 2rem;
  justify-content: center;

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

export const Tag = styled.button<{ color: string }>`
  display: flex;
  flex-wrap: no-wrap;
  align-items: center;
  background: ${({ color }) => handleTagColor(color)};
  padding: 0.3rem;
  border-radius: 5px;
  padding: 0.1rem 0.5rem;
  box-shadow: 2px 2px 3px 0.2px rgba(0, 0, 0, 0.4);
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
