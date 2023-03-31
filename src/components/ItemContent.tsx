/* eslint-disable @next/next/no-img-element */
import { useContext, useEffect, useState } from 'react';
import { Popover } from 'antd';
import { LayoutProps } from '@/data/layoutData';
import UploadImage from './UploadImage';
import { ImageContext, Image } from '@/pages/index';

interface ItemContentProps {
  parentHeight: number;
  layoutProps: LayoutProps[];
}

// 图片布局展示
export default function ItemContent({ parentHeight, layoutProps }: ItemContentProps) {
  const [active, setActive] = useState<number | null>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [position, setPosition] = useState({ top: 0, left: 0 });

  const [images, setImages] = useContext(ImageContext);

  useEffect(() => {
    setActive(null);
  }, [layoutProps]);

  const handleClick = (event: React.MouseEvent<HTMLDivElement>, index: number) => {
    setActive(index);
    const open = index !== active ? true : !isOpen;
    setIsOpen(open);
    setPosition({ top: event.clientY, left: event.clientX });
  };

  const handleFileChange = (width: number, height: number, url: string, index: number) => {
    setImages([...images, { width, height, url, index }]);
  };

  const handleRemoveImage = (event: React.MouseEvent<HTMLDivElement>, index: number) => {
    event.stopPropagation();
    const changed = images.filter((image: Image) => image.index !== index);
    setImages(changed);
  };

  return (
    <>
      {layoutProps.map((layout, index) => {
        const itemStyle = {
          top: 0,
          left: 0,
          width: `${parentHeight * layout.width}px`,
          height: `${parentHeight * layout.height}px`,
          transform: `translate(${parentHeight * layout.x}px, ${parentHeight * layout.y}px)`,
        };
        let imageUrl = '';
        let imageWidth = 0;
        let imageHeight = 0;
        let transform = `translate(0, 0)`;
        images.forEach((image: Image) => {
          if (image.index === index) {
            imageUrl = image.url;
            imageWidth = image.width;
            imageHeight = image.height;
          }
        });
        // 相对于布局和图片的最大宽高比,计算图片尺寸
        const wScale = (parentHeight * layout.width) / imageWidth;
        const hScale = (parentHeight * layout.height) / imageHeight;
        if (wScale > hScale) {
          imageWidth = parentHeight * layout.width;
          imageHeight = imageHeight * wScale;
          transform = `translateY(${-Math.abs(imageHeight - parentHeight * layout.height) / 2}px)`;
        } else {
          imageHeight = parentHeight * layout.height;
          imageWidth = imageWidth * hScale;
          transform = `translateX(${-Math.abs(imageWidth - parentHeight * layout.width) / 2}px)`;
        }
        return (
          <div key={index}>
            <div
              className={`absolute overflow-hidden ${
                active === index ? 'border-blue-400' : 'border-gray-300'
              }`}
              style={itemStyle}
              onClick={(e: React.MouseEvent<HTMLDivElement>) => handleClick(e, index)}
            >
              {!!imageUrl ? (
                <>
                  <div
                    className={`relative cursor-move border-2`}
                    style={{
                      width: `${imageWidth}px`,
                      height: `${imageHeight}px`,
                      transform: transform,
                    }}
                    onClick={(e) => e.stopPropagation()}
                  >
                    <img className='h-full w-full' src={imageUrl} alt='upload-image' />
                  </div>
                  <div
                    className='absolute top-0 right-0 h-6 w-6 cursor-pointer p-1'
                    onClick={(e: React.MouseEvent<HTMLDivElement>) => handleRemoveImage(e, index)}
                  >
                    <img
                      className='h-full w-full cursor-pointer'
                      src='/delete-btn.svg'
                      alt='delete-btn'
                    />
                  </div>
                </>
              ) : (
                <div
                  className={`h-full w-full border-2 ${
                    active === index ? 'border-blue-400' : 'border-gray-300'
                  }`}
                >
                  <img
                    className='absolute top-1/2 left-1/2 h-10 w-10 -translate-x-1/2 -translate-y-1/2'
                    src='/add-btn.svg'
                    alt='add-btn'
                  />
                </div>
              )}
            </div>

            {active === index && (
              <Popover
                placement='bottom'
                content={
                  <UploadImage
                    onFileChange={(width, height, url) =>
                      handleFileChange(width, height, url, index)
                    }
                    closePopover={() => setIsOpen(false)}
                  />
                }
                trigger='click'
                open={isOpen}
                overlayInnerStyle={{ padding: '6px 0', borderRadius: 6 }}
              >
                <div
                  className='fixed h-px w-px'
                  style={{ ...position }}
                  onClick={() => {
                    setIsOpen(false);
                    setActive(null);
                  }}
                ></div>
              </Popover>
            )}
          </div>
        );
      })}
    </>
  );
}
