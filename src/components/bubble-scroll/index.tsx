import React from 'react';

import SimplexNoise from 'simplex-noise';

import * as Styled from './styles';

const bubbles = [
  {
    s: 0.8,
    x: 1134,
    y: 10,
  },
  {
    s: 0.8,
    x: 1620,
    y: 171,
  },
  {
    s: 0.8,
    x: 1761,
    y: 272,
  },
  {
    s: 0.8,
    x: 2499,
    y: 79,
  },
  {
    s: 0.8,
    x: 2704,
    y: 234,
  },
  {
    s: 0.8,
    x: 2271,
    y: 256,
  },
  {
    s: 0.8,
    x: 795,
    y: 126,
  },
  {
    s: 0.8,
    x: 276,
    y: 156,
  },
  {
    s: 0.8,
    x: 1210,
    y: 265,
  },
  {
    s: 0.8,
    x: 444,
    y: 93,
  },
  {
    s: 0.8,
    x: 2545,
    y: 287,
  },
  {
    s: 0.8,
    x: 1303,
    y: 93,
  },
  {
    s: 0.8,
    x: 907,
    y: 40,
  },
  {
    s: 0.8,
    x: 633,
    y: 220,
  },
  {
    s: 0.8,
    x: 323,
    y: 60,
  },
  {
    s: 0.8,
    x: 129,
    y: 257,
  },
  {
    s: 0.8,
    x: 1440,
    y: 242,
  },
  {
    s: 0.8,
    x: 1929,
    y: 193,
  },
  {
    s: 0.8,
    x: 2135,
    y: 98,
  },
  {
    s: 0.8,
    x: 2276,
    y: 82,
  },
  {
    s: 0.8,
    x: 2654,
    y: 82,
  },
  {
    s: 0.8,
    x: 2783,
    y: 20,
  },
  {
    s: 1.0,
    x: 1519,
    y: 18,
  },
  {
    s: 1.0,
    x: 1071,
    y: 133,
  },
  {
    s: 1.0,
    x: 1773,
    y: 5,
  },
  {
    s: 1.0,
    x: 2098,
    y: 385,
  },
  {
    s: 1.0,
    x: 2423,
    y: 144,
  },
  {
    s: 1.0,
    x: 901,
    y: 285,
  },
  {
    s: 1.0,
    x: 624,
    y: 11,
  },
  {
    s: 1.0,
    x: 75,
    y: 3,
  },
  {
    s: 1.0,
    x: 413,
    y: 267,
  },
  {
    s: 1.0,
    x: 2895,
    y: 171,
  },
  {
    s: 1.0,
    x: 1990,
    y: -25,
  },
];

const backgroundPositions: string[] = [];

for (let i = 0; i < 7; i += 1) {
  for (let j = 0; j < 7; j += 1) {
    backgroundPositions.push(`${-100 * j}px ${-100 * i}px`);
  }
}

const CANVAS_WIDTH = 1800;
// The amplitude. The amount the noise affects the movement.
const NOISE_AMOUNT = 5;
// The frequency. Smaller for flat slopes, higher for jagged spikes.
const NOISE_SPEED = 0.004;
// Pixels to move per frame. At 60fps, this would be 18px a sec.
const SCROLL_SPEED = 0.5;

const noise = new SimplexNoise();

interface IBubbleScrollProps {
  items: { name: string; fileName: string }[];
}

const BubbleScroll: React.FC<IBubbleScrollProps> = ({ items }) => {
  const animationRef = React.useRef<number>();
  const bubblesRef = React.useRef(
    bubbles.map((bubble) => ({
      ...bubble,
      noiseSeedX: Math.floor(Math.random() * 64000),
      noiseSeedY: Math.floor(Math.random() * 64000),
      xWithNoise: bubble.x,
      yWithNoise: bubble.y,
    }))
  );
  const [isReady, setReady] = React.useState(false);

  const animate = () => {
    bubblesRef.current = bubblesRef.current.map((bubble, index) => {
      const newNoiseSeedX = bubble.noiseSeedX + NOISE_SPEED;
      const newNoiseSeedY = bubble.noiseSeedY + NOISE_SPEED;

      const randomX = noise.noise2D(newNoiseSeedX, 0);
      const randomY = noise.noise2D(newNoiseSeedY, 0);

      const newX = bubble.x - SCROLL_SPEED;

      const newXWithNoise = newX + randomX * NOISE_AMOUNT;
      const newYWithNoise = bubble.y + randomY * NOISE_AMOUNT;

      const element = document.getElementById(`bubble-${index}`);

      if (element) {
        element.style.transform = `translate(${newXWithNoise}px, ${newYWithNoise}px) scale(${bubble.s})`;
      }

      return {
        ...bubble,
        noiseSeedX: newNoiseSeedX,
        noiseSeedY: newNoiseSeedY,
        x: newX < -200 ? CANVAS_WIDTH : newX,
        xWithNoise: newXWithNoise,
        yWithNoise: newYWithNoise,
      };
    });

    animationRef.current = requestAnimationFrame(animate);
  };

  React.useEffect(() => {
    setTimeout(() => {
      setReady(true);
    }, 200);

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  if (items.length === 0) {
    return null;
  }

  return (
    <Styled.BubbleScrollWrapper>
      <Styled.BubbleScrollInnerWrapper>
        {bubbles.map((bubble, index) => (
          <Styled.Bubble
            id={`bubble-${index}`}
            key={`${bubble.x} ${bubble.y}`}
            style={{
              // backgroundPosition: backgroundPositions[index],
              // transform: `translate(${bubble.x}px, ${bubble.y}px) scale(${bubble.s})`,
              opacity: isReady ? 1 : 0,
            }}
          >
            <Styled.BubbleOverlay>
              <p>{items[index]?.name}</p>
            </Styled.BubbleOverlay>
            <img
              src={`assets/svg/skills/${items[index]?.fileName}`}
              alt={'hello'}
              style={{ maxWidth: '65%', height: 'auto' }}
            />
          </Styled.Bubble>
        ))}
      </Styled.BubbleScrollInnerWrapper>
    </Styled.BubbleScrollWrapper>
  );
};

export default BubbleScroll;
