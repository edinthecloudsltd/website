import { FaTwitter, FaLinkedinIn } from 'react-icons/fa';
import { FiMail } from 'react-icons/fi';

import MaxWidthWrapper from 'src/components/common/max-width-wrapper';

import * as Styled from './styles';

const Footer: React.FC = () => {
  const date = new Date().getFullYear();

  return (
    <Styled.Wrapper>
      <MaxWidthWrapper>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            width: '100%',
            height: '100%',
            paddingBottom: '2rem',
          }}
        >
          <p style={{ marginTop: 'auto' }}>© {date} Ed in the Clouds</p>
          <div style={{ display: 'flex', gap: '1rem', marginTop: 'auto' }}>
            <Styled.IconWrapper>
              <a href="https://twitter.com/ed1nthecloud">
                <FaTwitter size={25} />
              </a>
            </Styled.IconWrapper>
            <Styled.IconWrapper>
              <a href="https://www.linkedin.com/in/edwardsmith92/">
                <FaLinkedinIn size={25} />
              </a>
            </Styled.IconWrapper>
            <Styled.IconWrapper>
              <a href="mailto:ed@edintheclouds.io">
                <FiMail size={25} />
              </a>
            </Styled.IconWrapper>
          </div>
        </div>
      </MaxWidthWrapper>
    </Styled.Wrapper>
  );
};

export default Footer;
