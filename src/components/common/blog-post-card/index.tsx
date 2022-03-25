import Link from 'next/link';

import { Tag } from 'src/components/common/tag';

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
  tags: { id: string; name: string; color: string }[];
  description: string;
}) {
  return (
    <Link passHref href={`/posts/${id}`}>
      <Styled.Card key={id} style={{ background: '#c7f1ff' }}>
        <h2
          style={{
            fontFamily: 'coffee-service, sans-serif',
            fontSize: '2rem',
            lineHeight: 1.2,
            fontWeight: 500,
            letterSpacing: '-1px',
            color: '#34344c',
            marginBottom: '1rem',
          }}
        >
          {title}
        </h2>
        <p>{description}</p>
        <small style={{ fontWeight: 500 }} className="text-blue200">
          {new Date(date).toLocaleDateString('en-GB', {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric',
          })}
        </small>
        <Styled.TagContainer>
          {tags.map((t, i) => (
            <Tag key={i} color={t.color}>
              {t.name}
            </Tag>
          ))}
        </Styled.TagContainer>
      </Styled.Card>
    </Link>
  );
}
