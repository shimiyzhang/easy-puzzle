import Head from 'next/head';
import Image from 'next/image';
import { createContext, useRef, useState } from 'react';
import LayoutMenu from '@/components/LayoutMenu';
import LayoutContent, { LayoutContentRef } from '@/components/LayoutContent';
import RightMenu from '@/components/RightMenu';
import { findLayoutProps } from '@/data/layoutData';
export interface Image {
  index: number;
  width: number;
  height: number;
  url: string;
}
export const ImageContext = createContext<any>([]);

export default function Home() {
  const [activeKey, setActiveKey] = useState('2-1');
  const [images, setImages] = useState<Image[]>([]);

  const imageRef = useRef<LayoutContentRef>(null);

  const layoutProps = findLayoutProps(activeKey);

  const downloadImage = () => {
    if (!imageRef.current) return;
    imageRef.current.downloadImage();
  };

  return (
    <>
      <Head>
        <title>易拼图</title>
        <meta
          name='description'
          content='易拼图，基于Next.js的在线拼图网站，自带多种照片拼图模板来帮助您完成设计，并可以让您轻松调整背景和效果。'
        />
        <meta name='keywords' content='美图，图片，照片，拼图，拼图拼接' />
      </Head>

      <div className='relative flex h-screen w-full flex-col gap-4 bg-gray-100'>
        <header className='sticky top-0 flex h-16 w-full border-t-4 border-t-blue-500 bg-white'>
          <div className='mx-auto flex w-full items-center justify-between px-10'>
            <div className='flex items-center gap-2'>
              <Image src='/logo.svg' width={30} height={30} alt='logo' />
              <h1 className='mb-0 text-xl font-semibold'>易拼图</h1>
            </div>
            <button
              className='rounded-3xl border border-blue-500 bg-blue-500 py-2 px-5 font-semibold text-white hover:bg-blue-600 active:bg-blue-700'
              onClick={downloadImage}
            >
              下载
            </button>
          </div>
        </header>
        <main className='flex w-full flex-1 gap-4 overflow-hidden bg-gray-100'>
          <ImageContext.Provider value={[images, setImages]}>
            <div className='flex h-full flex-shrink-0'>
              <LayoutMenu activeKey={activeKey} changeKey={(key) => setActiveKey(key)} />
            </div>
            <div className='relative flex flex-1 items-center justify-center overflow-hidden'>
              <LayoutContent ref={imageRef} layoutProps={layoutProps} />
            </div>
            <div className='flex h-full flex-shrink-0'>
              <RightMenu />
            </div>
          </ImageContext.Provider>
        </main>
      </div>
    </>
  );
}
