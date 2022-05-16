import React, { useEffect, useState } from 'react';

import { useRouter } from 'next/router';
import { FaHeart } from 'react-icons/fa';
import styled from 'styled-components';

import styles from './heart-button.module.css';

const Heart = styled(FaHeart)<{ hasLiked: boolean }>`
  height: 100%;
  width: auto;
  fill: ${({ hasLiked }) => (hasLiked ? 'red' : 'gray')};
  transition: all 0.5s ease;

  &:active {
    transform: scale(1.2);
  }
`;

export const HeartButton: React.FC = () => {
  const router = useRouter();
  const [counter, setCounter] = useState<number>(0);
  const [hasLiked, setHasLiked] = useState<boolean>(false);

  const { id } = router.query;

  const fetchLikes = async () => {
    const res = await (await fetch(`/api/posts/${id}/likes`)).json();
    return { likes: res.likes, hasLiked: res.hasLiked };
  };

  const updateLikes = async () => {
    const method = hasLiked ? 'DELETE' : 'PUT';
    const res = await (await fetch(`/api/posts/${id}/likes`, { method })).json();
    return { likes: res.likes, hasLiked: res.hasLiked };
  };

  useEffect(() => {
    (async () => {
      const { likes, hasLiked: liked } = await fetchLikes();
      setCounter(likes);
      setHasLiked(liked);
    })();
  }, []);

  const handleClick = async () => {
    const { likes, hasLiked: liked } = await updateLikes();
    setCounter(likes);
    setHasLiked(liked);
  };

  return (
    <div className={styles.container}>
      <div className={styles.inner}>
        <p>{counter}</p>
        <Heart hasLiked={hasLiked} onClick={handleClick} />
      </div>
    </div>
  );
};
