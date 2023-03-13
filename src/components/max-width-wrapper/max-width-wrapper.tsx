import styled from 'styled-components';

export const StyledWrapper = styled.main`
  position: relative;
  width: 100%;
  max-width: 1000px;
  margin-left: auto;
  margin-right: auto;
  padding-left: 32px;
  padding-right: 32px;

  @media (max-width: 563px) {
    padding-left: 20px;
    padding-right: 20px;
  }
`;

function MaxWidthWrapper({ children }: React.PropsWithChildren<{}>) {
  return <StyledWrapper>{children}</StyledWrapper>;
}

export default MaxWidthWrapper;
