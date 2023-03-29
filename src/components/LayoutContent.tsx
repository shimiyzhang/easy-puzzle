import { useEffect, useRef, useState } from 'react';
import ItemContent from './ItemContent';
import { LayoutProps } from '@/data/layoutData';

const baseStyle = {
  maxHeight: '80vh',
  maxWidth: '80vh',
};

export type LayoutContentProps = {
  layoutProps: LayoutProps[];
};

// 拼图主体布局
export default function LayoutContent({ layoutProps }: LayoutContentProps) {
  const contentRef = useRef<HTMLDivElement>(null);

  const [height, setHeight] = useState(0);

  useEffect(() => {
    // 监听
    const onResize = () => {
      const content = contentRef.current;
      if (!content) return;

      const width = content.offsetWidth;
      setHeight(width);
    };

    onResize();

    window.addEventListener('resize', onResize);

    return () => window.removeEventListener('resize', onResize);
  }, []);

  const style = height === 0 ? { height: baseStyle.maxHeight } : { height };

  return (
    <div
      className='relative h-full w-full bg-white p-4'
      style={{ ...baseStyle, ...style }}
      ref={contentRef}
    >
      <ItemContent parentHeight={height} layoutProps={layoutProps} />
    </div>
  );
}
