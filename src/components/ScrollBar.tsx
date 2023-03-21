import { useEffect, useState } from 'react';

interface Props {
  scrollRef: any;
  width: number;
  height: number;
  direction?: 'x' | 'y';
}

let timer: any = null;

// 自定义滚动条
export default function ScrollBar({ scrollRef, width, height, direction = 'y' }: Props) {
  const [distance, setDistance] = useState(0);
  const [isScroll, setIsScroll] = useState(false);

  useEffect(() => {
    const handleScroll = (event: any) => {
      setIsScroll(true);
      clearTimeout(timer);
      timer = setTimeout(() => {
        setIsScroll(false);
      }, 300);
      const dom: HTMLElement = event.target;

      if (direction === 'y') {
        const clientHeight = dom.clientHeight;
        const scrollHeight = dom.scrollHeight;
        const scrollTop = dom.scrollTop;
        setDistance((scrollTop / (scrollHeight - clientHeight)) * (clientHeight - height) || 0);
      } else {
        const clientWidth = dom.clientWidth;
        const scrollWidth = dom.scrollWidth;
        const scrollLeft = dom.scrollLeft;
        setDistance((scrollLeft / (scrollWidth - clientWidth)) * (clientWidth - width) || 0);
      }
    };

    const element = scrollRef.current;
    element.addEventListener('scroll', handleScroll, true);

    return () => {
      element.removeEventListener('scroll', handleScroll);
    };
  }, [direction, height, scrollRef, width]);

  const position =
    direction === 'y' ? { top: `${distance}px`, right: 0 } : { bottom: 0, left: `${distance}px` };

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
