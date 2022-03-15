import { FaTwitter, FaLinkedinIn } from 'react-icons/fa';
import { FiMail } from 'react-icons/fi';

import MaxWidthWrapper from 'src/components/common/max-width-wrapper';

import * as Styled from './styles';

const Footer: React.FC = () => {
  const date = new Date().getFullYear();

  return (
    <MaxWidthWrapper>
      <Styled.Wrapper>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            marginTop: 'auto',
            width: '100%',
            paddingBottom: '2rem',
          }}
        >
          <p>© {date} Ed in the Clouds</p>
          <div style={{ display: 'flex', gap: '1rem' }}>
            <Styled.IconWrapper>
              <FaTwitter size={25} />
            </Styled.IconWrapper>
            <Styled.IconWrapper>
              <FaLinkedinIn size={25} />
            </Styled.IconWrapper>
            <Styled.IconWrapper>
              <FiMail size={25} />
            </Styled.IconWrapper>
          </div>
        </div>
      </Styled.Wrapper>
    </MaxWidthWrapper>
  );
};

export default Footer;
