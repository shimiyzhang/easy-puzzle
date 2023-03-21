/* eslint-disable @next/next/no-img-element */
import { useRef, useState } from 'react';
import ScrollBar from './ScrollBar';

const layoutList = [
  {
    label: '2',
    value: 2,
    children: [
      {
        key: '2-1',
        src: '/assets/images/layout/2-1.png',
      },
      {
        key: '2-2',
        src: '/assets/images/layout/2-2.png',
      },
    ],
  },
  {
    label: '3',
    value: 3,
    children: [
      {
        key: '3-1',
        src: '/assets/images/layout/3-1.png',
      },
      {
        key: '3-2',
        src: '/assets/images/layout/3-2.png',
      },
      {
        key: '3-3',
        src: '/assets/images/layout/3-3.png',
      },
      {
        key: '3-4',
        src: '/assets/images/layout/3-4.png',
      },
      {
        key: '3-5',
        src: '/assets/images/layout/3-5.png',
      },
      {
        key: '3-6',
        src: '/assets/images/layout/3-6.png',
      },
      {
        key: '3-7',
        src: '/assets/images/layout/3-7.png',
      },
      {
        key: '3-8',
        src: '/assets/images/layout/3-8.png',
      },
      {
        key: '3-9',
        src: '/assets/images/layout/3-9.png',
      },
      {
        key: '3-10',
        src: '/assets/images/layout/3-10.png',
      },
    ],
  },
  {
    label: '4',
    value: 4,
    children: [
      {
        key: '4-1',
        src: '/assets/images/layout/4-1.png',
      },
      {
        key: '4-2',
        src: '/assets/images/layout/4-2.png',
      },
      {
        key: '4-3',
        src: '/assets/images/layout/4-3.png',
      },
      {
        key: '4-4',
        src: '/assets/images/layout/4-4.png',
      },
      {
        key: '4-5',
        src: '/assets/images/layout/4-5.png',
      },
      {
        key: '4-6',
        src: '/assets/images/layout/4-6.png',
      },
      {
        key: '4-7',
        src: '/assets/images/layout/4-7.png',
      },
      {
        key: '4-8',
        src: '/assets/images/layout/4-8.png',
      },
      {
        key: '4-9',
        src: '/assets/images/layout/4-9.png',
      },
      {
        key: '4-10',
        src: '/assets/images/layout/4-10.png',
      },
      {
        key: '4-11',
        src: '/assets/images/layout/4-11.png',
      },
      {
        key: '4-12',
        src: '/assets/images/layout/4-12.png',
      },
      {
        key: '4-13',
        src: '/assets/images/layout/4-13.png',
      },
      {
        key: '4-14',
        src: '/assets/images/layout/4-14.png',
      },
      {
        key: '4-15',
        src: '/assets/images/layout/4-15.png',
      },
      {
        key: '4-16',
        src: '/assets/images/layout/4-16.png',
      },
      {
        key: '4-17',
        src: '/assets/images/layout/4-17.png',
      },
      {
        key: '4-18',
        src: '/assets/images/layout/4-18.png',
      },
      {
        key: '4-19',
        src: '/assets/images/layout/4-19.png',
      },
      {
        key: '4-20',
        src: '/assets/images/layout/4-20.png',
      },
    ],
  },
  {
    label: '5',
    value: 5,
    children: [],
  },
  {
    label: '6',
    value: 6,
    children: [],
  },
  {
    label: '更多',
    value: 999,
    children: [],
  },
];

export default function LayoutMenu() {
  const [open, setOpen] = useState(true);
  const [active, setActive] = useState(2);
  const [activeKey, setActiveKey] = useState('2-1');
  const scrollRef = useRef(null);

  return (
    <div className='flex h-full items-center'>
      <div className={`h-full overflow-hidden rounded-tr-lg bg-white ${open ? 'w-72' : 'w-0'}`}>
        <div className='relative flex h-full flex-col'>
          <div className='flex flex-wrap pt-4 pb-2 pl-5'>
            {layoutList.map(({ label, value }) => (
              <button
                className={`mr-2 rounded-lg border border-gray-100 py-1 px-3 text-xs hover:border-gray-400 ${
                  active === value ? ' bg-gray-400 text-white' : ''
                }`}
                key={value}
                onClick={() => setActive(value)}
              >
                {label}
              </button>
            ))}
          </div>
          <div className='relative flex-1 overflow-hidden'>
            {/* scroll-bar */}
            <ScrollBar scrollRef={scrollRef} width={4} height={80} direction='y' />
            {/* layout-list */}
            <div className='h-full w-full overflow-y-scroll' ref={scrollRef}>
              {layoutList.map((layout, index) => {
                if (layout?.children?.length > 0) {
                  return (
                    <div key={index}>
                      {index !== 0 ? (
                        <div className='px-5 pt-2 pb-1 text-sm'>{layout.label}</div>
                      ) : (
                        <div className='pt-2'></div>
                      )}
                      <div className='flex flex-wrap pl-5'>
                        {layout?.children?.map(({ key, src }) => (
                          <div
                            className={`mr-4 mb-4 rounded border-2 bg-gray-100 hover:bg-gray-200 ${
                              key === activeKey ? 'border-blue-500' : 'border-gray-100'
                            }`}
                            key={key}
                          >
                            <img
                              className='h-16 w-16'
                              src={src}
                              alt='template-item'
                              onClick={() => setActiveKey(key)}
                            />
                          </div>
                        ))}
                      </div>
                      <div className='h-px bg-gray-200'></div>
                    </div>
                  );
                }
                return null;
              })}
            </div>
          </div>
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
