import { useState, useEffect, useRef, forwardRef, useContext, useImperativeHandle } from 'react';
import { message } from 'antd';
import { ImageContext } from '@/pages';
import ItemContent from './ItemContent';
import { LayoutProps } from '@/data/layoutData';
import domtoimage from 'dom-to-image';

const baseStyle = {
  maxHeight: '80vh',
  maxWidth: '80vh',
};

export type LayoutContentRef = {
  downloadImage: () => void;
};

export type LayoutContentProps = {
  layoutProps: LayoutProps[];
};

// 拼图主体布局
const LayoutContent = forwardRef<LayoutContentRef, LayoutContentProps>(function LayoutContent(
  { layoutProps },
  ref,
) {
  const [images, _] = useContext(ImageContext);

  const contentRef = useRef<HTMLDivElement>(null);

  const [height, setHeight] = useState(0);
  const [active, setActive] = useState<number | null>(null);

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

  useEffect(() => {
    setActive(null);
  }, [layoutProps]);

  const downloadImage = () => {
    if (!contentRef.current) return;
    if (images.length < layoutProps.length) {
      message.warning('请添加图片');
      return;
    }
    setActive(null);
    // 过滤掉右上角的删除按钮
    const filter = (node: any) => !node.classList.contains('ignore') && node.tagName !== 'SCRIPT';
    domtoimage
      .toPng(contentRef.current, { filter })
      .then((dataUrl) => {
        const link = document.createElement('a');
        link.download = 'image.png';
        link.href = dataUrl;
        link.click();
        message.success('下载成功');
      })
      .catch(() => {
        message.error('下载失败');
      });
  };

  // 将downloadImage方法暴露给父组件
  useImperativeHandle(ref, () => ({ downloadImage }));

  const style = height === 0 ? { height: baseStyle.maxHeight } : { height };

  return (
    <div
      className='relative h-full w-full bg-white p-4'
      style={{ ...baseStyle, ...style }}
      ref={contentRef}
    >
      {layoutProps.map((layout, index) => {
        return (
          <ItemContent
            key={index}
            index={index}
            layout={layout}
            parentHeight={height}
            active={active}
            setActive={(index) => setActive(index)}
          />
        );
      })}
    </div>
  );
});
export default LayoutContent;
