import React, { useEffect, useState } from 'react';

import { useRouter } from 'next/router';
import { FaHeart } from 'react-icons/fa';
import styled from 'styled-components';

import styles from './heart-button.module.css';

const Heart = styled(FaHeart)<{ hasClicked: boolean }>`
  height: 100%;
  width: auto;
  fill: ${({ hasClicked }) => (hasClicked ? 'red' : 'gray')};
  transition: all 0.5s ease;

  &:active {
    transform: scale(1.2);
  }
`;

export const HeartButton: React.FC = () => {
  const router = useRouter();
  const [counter, setCounter] = useState<number>(0);
  const [hasClicked, setHasClicked] = useState<boolean>(false);

  const { id } = router.query;

  const fetchLikes = async () => {
    const res = await (await fetch(`/api/posts/${id}/likes`)).json();
    return res.likes;
  };

  const updateLikes = async () => {
    const res = await (await fetch(`/api/posts/${id}/likes`, { method: 'PUT' })).json();
    return res.likes;
  };

  useEffect(() => {
    (async () => {
      const likes = await fetchLikes();
      setCounter(likes);
    })();
  }, []);

  const handleClick = async () => {
    const likes = await updateLikes();
    if (likes) {
      setHasClicked(true);
      setCounter(likes);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.inner}>
        <p>{counter}</p>
        <Heart hasClicked={hasClicked} onClick={handleClick} />
      </div>
    </div>
  );
};
