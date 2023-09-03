/* eslint-disable @next/next/no-img-element */
import { useRef, useState } from 'react';
import ScrollBar, { ScrollBarRef } from './ScrollBar';
import { layoutList } from '@/data/layoutData';

export type LayoutMenuProps = {
  activeKey: string;
  changeKey: (key: string) => void;
};

// 左侧菜单
export default function LayoutMenu({ activeKey, changeKey }: LayoutMenuProps) {
  const [open, setOpen] = useState(true);
  const [active, setActive] = useState(2);
  const scrollRef = useRef<ScrollBarRef | null>(null);

  const onChangeActive = (value: number) => {
    if (!scrollRef.current) return;
    setActive(value);
    scrollRef.current.scrollTo(value);
  };

  const filterList = layoutList.filter(({ children }) => children.length > 0);
  const indexs = filterList.map(({ value }) => value);

  return (
    <div className='flex h-full items-center'>
      <div className={`h-full overflow-hidden rounded-tr-lg bg-white ${open ? 'w-72' : 'w-0'}`}>
        <div className='relative flex h-full flex-col'>
          <div className='flex flex-wrap pt-4 pb-2 pl-5'>
            {filterList.map(({ label, value }) => (
              <button
                className={`mr-2 mb-2 rounded-lg border border-gray-100 py-1 px-3 text-xs ${
                  active === value ? ' bg-gray-400 text-white' : ''
                }`}
                key={value}
                onClick={() => onChangeActive(value)}
              >
                {label}
              </button>
            ))}
          </div>
          {/* scroll-bar */}
          <ScrollBar
            width={4}
            height={80}
            ref={scrollRef}
            indexs={indexs}
            activeIndex={active}
            onIndexChange={(index) => setActive(index)}
          >
            {/* layout-list */}
            {filterList.map((layout, index) => (
              <div key={index}>
                {index !== 0 ? (
                  <div className='px-5 pt-2 pb-1 text-sm'>{layout.label}</div>
                ) : (
                  <div className='pt-2'></div>
                )}
                <div className='flex flex-wrap pl-5'>
                  {layout?.children?.map(({ key, src }) => (
                    <div
                      className={`mr-4 mb-4 cursor-pointer rounded border-2 bg-gray-100 hover:bg-gray-200 ${
                        key === activeKey ? 'border-blue-500' : 'border-gray-100'
                      }`}
                      key={key}
                    >
                      <img
                        className='h-16 w-16'
                        src={src}
                        alt='template-item'
                        onClick={() => changeKey(key)}
                      />
                    </div>
                  ))}
                </div>
                <div className='h-px bg-gray-200'></div>
              </div>
            ))}
          </ScrollBar>
        </div>
      </div>
      <button
        className='flex h-12 w-6 items-center justify-center rounded-r-lg bg-white text-black'
        onClick={() => setOpen(!open)}
      >
        {open ? '＜' : '＞'}
      </button>
    </div>
  );
}
