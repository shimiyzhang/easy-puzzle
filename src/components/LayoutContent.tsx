import { useEffect, useRef, useState } from 'react';
import { LayoutProps } from '@/data/layoutData';

const baseStyle = {
  maxHeight: '80vh',
  maxWidth: '80vh',
};

export type LayoutContentProps = {
  layoutProps: LayoutProps[];
};

export default function LayoutContent({ layoutProps }: LayoutContentProps) {
  const contentRef = useRef<HTMLDivElement>(null);

  const [height, setHeight] = useState(0);

  useEffect(() => {
    // 监听
    const onResize = () => {
      const content = contentRef.current;
      if (!content) return;

      const width = content.offsetWidth;
      const height = content.offsetHeight;
      if (width !== height) {
        setHeight(width);
      }
    };

    onResize();

    window.addEventListener('resize', onResize);

    return () => window.removeEventListener('resize', onResize);
  }, []);

  const style = height === 0 ? { height: baseStyle.maxHeight } : { height };

  const layoutItem = layoutProps.map((layout, index) => {
    const itemStyle = {
      top: layout.top,
      left: layout.left,
      width: `${height * layout.width}px`,
      height: `${height * layout.height}px`,
      transform: `translate(${height * layout.x}px, ${height * layout.y}px)`,
    };
    return <div className='absolute border border-gray-500' style={itemStyle} key={index} />;
  });

  return (
    <div
      className='relative h-full w-full bg-white'
      style={{ ...baseStyle, ...style }}
      ref={contentRef}
    >
      {layoutItem}
    </div>
  );
}
