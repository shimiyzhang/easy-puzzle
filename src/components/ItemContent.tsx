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

  const handleFileChange = (url: string, index: number) => {
    setImages([...images, { url, index }]);
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
        images.forEach((image: Image) => {
          if (image.index === index) {
            imageUrl = image.url;
          }
        });
        return (
          <div key={index}>
            <div
              className='absolute p-2'
              style={itemStyle}
              onClick={(e: React.MouseEvent<HTMLDivElement>) => handleClick(e, index)}
            >
              {!!imageUrl ? (
                <div
                  className={`relative h-full w-full cursor-move border-2 bg-cover bg-center bg-no-repeat ${
                    active === index ? 'border-blue-400' : 'border-gray-300'
                  }`}
                  style={{
                    backgroundImage: `url(${imageUrl})`,
                  }}
                  onClick={(e) => e.stopPropagation()}
                >
                  <div
                    onClick={(e: React.MouseEvent<HTMLDivElement>) => handleRemoveImage(e, index)}
                  >
                    <img
                      className='absolute top-1 right-1 h-4 w-4 cursor-pointer'
                      src='/delete-btn.svg'
                      alt='delete-btn'
                    />
                  </div>
                </div>
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
                    onFileChange={(url) => handleFileChange(url, index)}
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
