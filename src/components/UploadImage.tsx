/* eslint-disable @next/next/no-img-element */
import { useRef } from 'react';
import { fileToBase64 } from '@/utils/utils';

interface UploadImageProps {
  closePopover: () => void;
  onFileChange: (url: string) => void;
}

// 添加图片
export default function UploadImage({ closePopover, onFileChange }: UploadImageProps) {
  const inputRef = useRef<HTMLInputElement | null>(null);

  const uploadImage = () => {
    closePopover();
    inputRef.current?.click();
  };

  const fileChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files || [];
    const url = await fileToBase64(files[0]);
    onFileChange(url);
  };

  return (
    <div className='w-22'>
      <span onClick={uploadImage}>
        <input
          ref={inputRef}
          onChange={fileChange}
          className='hidden'
          type='file'
          accept='image/jpeg,image/jpg,image/png'
        />
        <div className='flex cursor-pointer items-center justify-start bg-white p-1 text-xs hover:bg-gray-100'>
          <img className='h-6 w-6' src='/image-icon.svg' alt='image-icon' />
          <span>添加图片</span>
        </div>
      </span>
    </div>
  );
}
