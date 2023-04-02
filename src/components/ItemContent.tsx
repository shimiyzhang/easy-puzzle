/* eslint-disable @next/next/no-img-element */
import { useContext, useEffect, useState } from 'react';
import { Popover } from 'antd';
import UploadImage from './UploadImage';
import { ImageContext, Image } from '@/pages/index';
import { LayoutProps } from '@/data/layoutData';

interface ItemContentProps {
  index: number;
  layout: LayoutProps;
  parentHeight: number;
  active: number | null;
  setActive: (index: number | null) => void;
}

interface ItemStyle {
  top: number;
  left: number;
  width: string;
  height: string;
  transform: string;
}

interface ImageStyle {
  width: number;
  height: number;
  transform: {
    direction: string;
    distance: number;
  };
}

// 图片布局展示
export default function ItemContent({
  index,
  layout,
  parentHeight,
  active,
  setActive,
}: ItemContentProps) {
  const [images, setImages] = useContext(ImageContext);

  const [isOpen, setIsOpen] = useState(false);
  const [position, setPosition] = useState({ top: 0, left: 0 });
  const [itemStyle, setItemStyle] = useState<ItemStyle | {}>({});
  const [imageStyle, setImageStyle] = useState<ImageStyle>({
    width: 0,
    height: 0,
    transform: {
      direction: 'X',
      distance: 0,
    },
  });
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [isDrage, setIsDrage] = useState(false);
  const [mouseDownXY, setMouseDownXY] = useState({ x: 0, y: 0 });

  useEffect(() => {
    setItemStyle({
      top: 0,
      left: 0,
      width: `${parentHeight * layout.width}px`,
      height: `${parentHeight * layout.height}px`,
      transform: `translate(${parentHeight * layout.x}px, ${parentHeight * layout.y}px)`,
    });
    let imageUrl = '';
    let imageWidth = 0;
    let imageHeight = 0;
    let transform = {
      direction: 'X',
      distance: 0,
    };
    images.forEach((image: Image) => {
      if (image.index === index) {
        imageUrl = image.url;
        imageWidth = image.width;
        imageHeight = image.height;
      }
    });
    setImageUrl(imageUrl);
    // 相对于布局和图片的最大宽高比,计算图片尺寸
    const wScale = (parentHeight * layout.width) / imageWidth;
    const hScale = (parentHeight * layout.height) / imageHeight;
    if (wScale > hScale) {
      imageWidth = parentHeight * layout.width;
      imageHeight = imageHeight * wScale;
      transform = {
        direction: 'Y',
        distance: -Math.abs(imageHeight - parentHeight * layout.height) / 2,
      };
    } else {
      imageHeight = parentHeight * layout.height;
      imageWidth = imageWidth * hScale;
      transform = {
        direction: 'X',
        distance: -Math.abs(imageWidth - parentHeight * layout.width) / 2,
      };
    }
    setImageStyle({
      width: imageWidth,
      height: imageHeight,
      transform: transform,
    });
  }, [parentHeight, layout, index, images]);

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
    setActive(null);
  };

  const handleMouseDown = (event: React.MouseEvent<HTMLDivElement>) => {
    setIsDrage(true);
    setMouseDownXY({ x: event.nativeEvent.offsetX, y: event.nativeEvent.offsetY });
  };

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    if (isDrage) {
      const { movementX, movementY } = event;
      if (imageStyle.transform.direction === 'X') {
        const maxDistance = imageStyle.width - parentHeight * layout.width;
        let distance = imageStyle.transform.distance + movementX;
        if (distance > 0 !== maxDistance > 0 && Math.abs(distance) <= Math.abs(maxDistance)) {
          const style = {
            ...imageStyle,
            transform: {
              direction: 'X',
              distance: distance,
            },
          };
          setImageStyle(style);
        }
      } else {
        const maxDistance = imageStyle.height - parentHeight * layout.height;
        const distance = imageStyle.transform.distance + movementY;
        if (distance > 0 !== maxDistance > 0 && Math.abs(distance) <= Math.abs(maxDistance)) {
          const style = {
            ...imageStyle,
            transform: {
              direction: 'Y',
              distance: distance,
            },
          };
          setImageStyle(style);
        }
      }
    }
  };

  const handleMouseUp = () => {
    setIsDrage(false);
  };

  const handleMouseLeave = () => {
    setIsDrage(false);
  };

  const transform =
    imageStyle.transform.direction === 'X'
      ? `translateX(${imageStyle.transform.distance}px)`
      : `translateY(${imageStyle.transform.distance}px)`;

  return (
    <>
      <div
        className={`absolute overflow-hidden border-2 ${
          active === index ? 'border-blue-400' : 'border-gray-300'
        }`}
        style={itemStyle}
        onClick={(e: React.MouseEvent<HTMLDivElement>) => handleClick(e, index)}
      >
        {!!imageUrl ? (
          <>
            <div
              className={`relative cursor-move`}
              style={{
                width: imageStyle.width,
                height: imageStyle.height,
                transform: transform,
              }}
              onMouseUp={handleMouseUp}
              onMouseDown={handleMouseDown}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
            >
              <img className='h-full w-full' src={imageUrl} alt='upload-image' draggable={false} />
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

      {active === index && !imageUrl && (
        <Popover
          placement='bottom'
          content={
            <UploadImage
              onFileChange={(width, height, url) => handleFileChange(width, height, url, index)}
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
    </>
  );
}
