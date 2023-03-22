import { useEffect, useState } from 'react';

interface Props {
  isScroll: boolean;
  width: number;
  height: number;
  distance: number;
}

let timer: any = null;

// 自定义滚动条
export default function ScrollBar({ width, height, distance, isScroll }: Props) {
  const position = { top: `${distance}px`, right: 0 };

  return (
    <div
      className='absolute rounded bg-gray-400 transition-opacity duration-300'
      style={{
        width: `${width}px`,
        height: `${height}px`,
        opacity: isScroll ? 1 : 0,
        ...position,
      }}
    />
  );
}
