/* eslint-disable @next/next/no-img-element */
import { useState } from 'react';

// 右侧菜单
export default function RightMenu() {
  const [open, setOpen] = useState(true);

  return (
    <div className='flex h-full items-center'>
      <button
        className='flex h-12 w-6 items-center justify-center rounded-l-lg bg-white text-black'
        onClick={() => setOpen(!open)}
      >
        {open ? '＞' : '＜'}
      </button>
      <div
        className={`h-full overflow-hidden rounded-tr-lg bg-white ${open ? 'w-72' : 'w-0'}`}
      ></div>
    </div>
  );
}
