/* eslint-disable @next/next/no-img-element */
import { useState } from 'react';

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
    children: [],
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
  return (
    <div className='flex h-full items-center'>
      <div
        className={`h-full rounded-r-lg bg-white overflow-hidden ${
          open ? 'w-72' : 'w-0'
        }`}>
        <div className='flex flex-wrap pt-4 pl-5'>
          {layoutList.map(({ label, value }) => (
            <button
              className={`py-1 px-3 border border-gray-100 mr-2 rounded-lg text-xs hover:border-gray-400 ${
                active === value ? ' bg-gray-400 text-white' : ''
              }`}
              key={value}
              onClick={() => setActive(value)}>
              {label}
            </button>
          ))}
        </div>
        <div>
          {layoutList.map((layer, index) => {
            if (layer?.children?.length > 0) {
              return (
                <div key={index}>
                  {index !== 0 ? (
                    <div className='pt-2 pb-1 px-5 text-sm'>{layer.label}</div>
                  ) : (
                    <div className='pt-2'></div>
                  )}
                  <div className='flex flex-wrap pl-5'>
                    {layer?.children?.map(({ key, src }) => (
                      <div
                        className={`bg-gray-100 mr-4 mb-4  border-2 rounded hover:bg-gray-200 ${
                          key === activeKey
                            ? 'border-blue-500'
                            : 'border-gray-100'
                        }`}
                        key={key}>
                        <img
                          className='w-16 h-16'
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
      <button
        className='flex h-12 w-6 items-center justify-center rounded-r-lg bg-white text-black'
        onClick={() => setOpen(!open)}>
        {open ? '＜' : '＞'}
      </button>
    </div>
  );
}
