import Link from 'next/link';

import Date from 'src/utils/date';

import * as Styled from './styles';

export default function BlogPostCard({
  id,
  date,
  title,
  tags,
  description,
}: {
  id: string;
  date: string;
  title: string;
  tags: string[];
  description: string;
}) {
  return (
    <Link passHref href={`/posts/${id}`}>
      <Styled.Card key={id} style={{ background: '#c7f1ff' }}>
        <h2
          style={{
            fontFamily: 'coffee-service, sans-serif',
            fontSize: '1.5rem',
            lineHeight: 1.2,
            fontWeight: 500,
            letterSpacing: '0.1rem',
            color: '#34344c',
            marginBottom: '1rem',
          }}
        >
          {title}
        </h2>
        <p>{description}</p>
        <small className="text-blue200">
          <Date dateString={date} />
        </small>
        <Styled.TagContainer>
          {tags.map((t, i) => (
            <Link
              key={i}
              passHref
              href={{
                pathname: '/posts',
                query: { tag: t },
              }}
            >
              <Styled.Tag>{t}</Styled.Tag>
            </Link>
          ))}
        </Styled.TagContainer>
      </Styled.Card>
    </Link>
  );
}
