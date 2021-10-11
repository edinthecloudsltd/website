import styled from 'styled-components';

export const StyledWrapper = styled.main`
  position: relative;
  width: 100%;
  max-width: 1440px;
  margin-left: auto;
  margin-right: auto;
  padding-left: 32px;
  padding-right: 32px;

  @media (max-width: 563px) {
    padding-left: 16px;
    padding-right: 16px;
  }
`;

const MaxWidthWrapper: React.FC = ({ children }) => {
  return <StyledWrapper>{children}</StyledWrapper>;
};

export default MaxWidthWrapper;
