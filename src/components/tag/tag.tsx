import { DynaPuff } from 'next/font/google';
import { GroupBase, StylesConfig } from 'react-select';
import styled from 'styled-components';

const dynapuff = DynaPuff({ subsets: ['latin'] });

export const handleTagColor = (color: string): string => {
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
    case 'gray':
      return 'rgb(189, 189, 189)';
    default:
      return 'rgb(189, 189, 189)';
  }
};

export const Tag = styled.span<{ color: string }>`
  background: ${({ color }) => handleTagColor(color)};
  display: inline-flex;
  align-items: center;
  flex-shrink: 1;
  min-width: 0px;
  height: 18px;
  border-radius: 3px;
  padding-left: 6px;
  padding-right: 6px;
  font-size: 14px;
  line-height: 120%;
  color: rgb(73, 41, 14);
  margin: 0px;
`;

interface TagOption {
  label: string;
  value: string;
  color: string;
}

export const tagSelectColourStyles: StylesConfig<TagOption, true, GroupBase<TagOption>> = {
  control: (styles) => ({
    ...styles,
    backgroundColor: 'white',
    fontFamily: dynapuff.style.fontFamily,
  }),
  option: (styles, { isDisabled }) => {
    return {
      ...styles,
      color: 'rgb(73,41,14)',
      cursor: isDisabled ? 'not-allowed' : 'default',
      fontFamily: dynapuff.style.fontFamily,
    };
  },
  multiValue: (styles, { data }) => {
    const { color } = data;
    return {
      ...styles,
      backgroundColor: handleTagColor(color),
      fontFamily: dynapuff.style.fontFamily,
    };
  },
  multiValueLabel: (styles) => ({
    ...styles,
    color: 'rgb(73,41,14)',
  }),
  multiValueRemove: (styles, { data }) => ({
    ...styles,
    color: 'rgb(73,41,14)',
    ':hover': {
      backgroundColor: handleTagColor(data.color),
      color: 'white',
    },
  }),
};
