// 布局菜单
export interface Layout {
  label: string;
  value: number;
  children: LayoutChildren[];
}

export interface LayoutChildren {
  key: string;
  src: string;
  props?: LayoutProps[];
}

export interface LayoutProps {
  width: number;
  height: number;
  x: number;
  y: number;
}

export const layoutList: Layout[] = [
  {
    label: '2',
    value: 2,
    children: [
      {
        key: '2-1',
        src: '/assets/images/layout/2-1.png',
        props: [
          {
            width: 1,
            height: 1 / 2,
            x: 0,
            y: 0,
          },
          {
            width: 1,
            height: 1 / 2,
            x: 0,
            y: 1 / 2,
          },
        ],
      },
      {
        key: '2-2',
        src: '/assets/images/layout/2-2.png',
        props: [
          {
            width: 1 / 2,
            height: 1,
            x: 0,
            y: 0,
          },
          {
            width: 1 / 2,
            height: 1,
            x: 1 / 2,
            y: 0,
          },
        ],
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
        props: [
          {
            width: 1,
            height: 1 / 3,
            x: 0,
            y: 0,
          },
          {
            width: 1,
            height: 1 / 3,
            x: 0,
            y: 1 / 3,
          },
          {
            width: 1,
            height: 1 / 3,
            x: 0,
            y: 2 / 3,
          },
        ],
      },
      {
        key: '3-2',
        src: '/assets/images/layout/3-2.png',
        props: [
          {
            width: 1 / 3,
            height: 1,
            x: 0,
            y: 0,
          },
          {
            width: 1 / 3,
            height: 1,
            x: 1 / 3,
            y: 0,
          },
          {
            width: 1 / 3,
            height: 1,
            x: 2 / 3,
            y: 0,
          },
        ],
      },
      {
        key: '3-3',
        src: '/assets/images/layout/3-3.png',
        props: [
          {
            width: 1 / 2,
            height: 1 / 2,
            x: 0,
            y: 0,
          },
          {
            width: 1 / 2,
            height: 1 / 2,
            x: 1 / 2,
            y: 0,
          },
          {
            width: 1,
            height: 1 / 2,
            x: 0,
            y: 1 / 2,
          },
        ],
      },
      {
        key: '3-4',
        src: '/assets/images/layout/3-4.png',
        props: [
          {
            width: 1,
            height: 1 / 2,
            x: 0,
            y: 0,
          },
          {
            width: 1 / 2,
            height: 1 / 2,
            x: 0,
            y: 1 / 2,
          },
          {
            width: 1 / 2,
            height: 1 / 2,
            x: 1 / 2,
            y: 1 / 2,
          },
        ],
      },
      {
        key: '3-5',
        src: '/assets/images/layout/3-5.png',
        props: [
          {
            width: 1 / 2,
            height: 1 / 2,
            x: 0,
            y: 0,
          },
          {
            width: 1 / 2,
            height: 1,
            x: 1 / 2,
            y: 0,
          },
          {
            width: 1 / 2,
            height: 1 / 2,
            x: 0,
            y: 1 / 2,
          },
        ],
      },
      {
        key: '3-6',
        src: '/assets/images/layout/3-6.png',
        props: [
          {
            width: 1 / 2,
            height: 1,
            x: 0,
            y: 0,
          },
          {
            width: 1 / 2,
            height: 1 / 2,
            x: 1 / 2,
            y: 0,
          },
          {
            width: 1 / 2,
            height: 1 / 2,
            x: 1 / 2,
            y: 1 / 2,
          },
        ],
      },
      {
        key: '3-7',
        src: '/assets/images/layout/3-7.png',
        props: [
          {
            width: 1,
            height: 2 / 5,
            x: 0,
            y: 0,
          },
          {
            width: 3 / 5,
            height: 3 / 5,
            x: 0,
            y: 2 / 5,
          },
          {
            width: 2 / 5,
            height: 3 / 5,
            x: 3 / 5,
            y: 2 / 5,
          },
        ],
      },
      {
        key: '3-8',
        src: '/assets/images/layout/3-8.png',
        props: [
          {
            width: 3 / 5,
            height: 3 / 5,
            x: 0,
            y: 0,
          },
          {
            width: 2 / 5,
            height: 3 / 5,
            x: 3 / 5,
            y: 0,
          },
          {
            width: 1,
            height: 2 / 5,
            x: 0,
            y: 3 / 5,
          },
        ],
      },
      {
        key: '3-9',
        src: '/assets/images/layout/3-9.png',
        props: [
          {
            width: 3 / 5,
            height: 1,
            x: 0,
            y: 0,
          },
          {
            width: 2 / 5,
            height: 2 / 5,
            x: 3 / 5,
            y: 0,
          },
          {
            width: 2 / 5,
            height: 3 / 5,
            x: 3 / 5,
            y: 2 / 5,
          },
        ],
      },
      {
        key: '3-10',
        src: '/assets/images/layout/3-10.png',
        props: [
          {
            width: 1,
            height: 3 / 5,
            x: 0,
            y: 0,
          },
          {
            width: 2 / 5,
            height: 2 / 5,
            x: 0,
            y: 3 / 5,
          },
          {
            width: 3 / 5,
            height: 2 / 5,
            x: 2 / 5,
            y: 3 / 5,
          },
        ],
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
        props: [
          {
            width: 1 / 2,
            height: 1 / 2,
            x: 0,
            y: 0,
          },
          {
            width: 1 / 2,
            height: 1 / 2,
            x: 1 / 2,
            y: 0,
          },
          {
            width: 1 / 2,
            height: 1 / 2,
            x: 0,
            y: 1 / 2,
          },
          {
            width: 1 / 2,
            height: 1 / 2,
            x: 1 / 2,
            y: 1 / 2,
          },
        ],
      },
      {
        key: '4-2',
        src: '/assets/images/layout/4-2.png',
        props: [
          {
            width: 1,
            height: 1 / 4,
            x: 0,
            y: 0,
          },
          {
            width: 1,
            height: 1 / 4,
            x: 0,
            y: 1 / 4,
          },
          {
            width: 1,
            height: 1 / 4,
            x: 0,
            y: 2 / 4,
          },
          {
            width: 1,
            height: 1 / 4,
            x: 0,
            y: 3 / 4,
          },
        ],
      },
      {
        key: '4-3',
        src: '/assets/images/layout/4-3.png',
        props: [
          {
            width: 1 / 4,
            height: 1,
            x: 0,
            y: 0,
          },
          {
            width: 1 / 4,
            height: 1,
            x: 1 / 4,
            y: 0,
          },
          {
            width: 1 / 4,
            height: 1,
            x: 2 / 4,
            y: 0,
          },
          {
            width: 1 / 4,
            height: 1,
            x: 3 / 4,
            y: 0,
          },
        ],
      },
      {
        key: '4-4',
        src: '/assets/images/layout/4-4.png',
        props: [
          {
            width: 1 / 2,
            height: 1 / 3,
            x: 0,
            y: 0,
          },
          {
            width: 1 / 2,
            height: 1 / 3,
            x: 0,
            y: 1 / 3,
          },
          {
            width: 1 / 2,
            height: 1 / 3,
            x: 0,
            y: 2 / 3,
          },
          {
            width: 1 / 2,
            height: 1,
            x: 1 / 2,
            y: 0,
          },
        ],
      },
      {
        key: '4-5',
        src: '/assets/images/layout/4-5.png',
        props: [
          {
            width: 1 / 2,
            height: 1 / 3,
            x: 1 / 2,
            y: 0,
          },
          {
            width: 1 / 2,
            height: 1 / 3,
            x: 1 / 2,
            y: 1 / 3,
          },
          {
            width: 1 / 2,
            height: 1 / 3,
            x: 1 / 2,
            y: 2 / 3,
          },
          {
            width: 1 / 2,
            height: 1,
            x: 0,
            y: 0,
          },
        ],
      },
      {
        key: '4-6',
        src: '/assets/images/layout/4-6.png',
        props: [
          {
            width: 1 / 3,
            height: 1 / 2,
            x: 0,
            y: 0,
          },
          {
            width: 1 / 3,
            height: 1 / 2,
            x: 1 / 3,
            y: 0,
          },
          {
            width: 1 / 3,
            height: 1 / 2,
            x: 2 / 3,
            y: 0,
          },
          {
            width: 1,
            height: 1 / 2,
            x: 0,
            y: 1 / 2,
          },
        ],
      },
      {
        key: '4-7',
        src: '/assets/images/layout/4-7.png',
        props: [
          {
            width: 1,
            height: 1 / 2,
            x: 0,
            y: 0,
          },
          {
            width: 1 / 2,
            height: 1 / 2,
            x: 0,
            y: 1 / 2,
          },
          {
            width: 1 / 2,
            height: 1 / 4,
            x: 1 / 2,
            y: 2 / 4,
          },
          {
            width: 1 / 2,
            height: 1 / 4,
            x: 1 / 2,
            y: 3 / 4,
          },
        ],
      },
      {
        key: '4-8',
        src: '/assets/images/layout/4-8.png',
        props: [
          {
            width: 1 / 3,
            height: 1 / 2,
            x: 0,
            y: 1 / 2,
          },
          {
            width: 1 / 3,
            height: 1 / 2,
            x: 1 / 3,
            y: 1 / 2,
          },
          {
            width: 1 / 3,
            height: 1 / 2,
            x: 2 / 3,
            y: 1 / 2,
          },
          {
            width: 1,
            height: 1 / 2,
            x: 0,
            y: 0,
          },
        ],
      },
      {
        key: '4-9',
        src: '/assets/images/layout/4-9.png',
        props: [
          {
            width: 2 / 3,
            height: 1 / 2,
            x: 0,
            y: 0,
          },
          {
            width: 1 / 3,
            height: 1,
            x: 2 / 3,
            y: 0,
          },
          {
            width: 1 / 3,
            height: 1 / 2,
            x: 0,
            y: 1 / 2,
          },
          {
            width: 1 / 3,
            height: 1 / 2,
            x: 1 / 3,
            y: 1 / 2,
          },
        ],
      },
      {
        key: '4-10',
        src: '/assets/images/layout/4-10.png',
        props: [
          {
            width: 1,
            height: 1 / 3,
            x: 0,
            y: 0,
          },
          {
            width: 1 / 2,
            height: 1 / 3,
            x: 0,
            y: 1 / 3,
          },
          {
            width: 1 / 2,
            height: 1 / 3,
            x: 1 / 2,
            y: 1 / 3,
          },
          {
            width: 1,
            height: 1 / 3,
            x: 0,
            y: 2 / 3,
          },
        ],
      },
      {
        key: '4-11',
        src: '/assets/images/layout/4-11.png',
        props: [
          {
            width: 1 / 3,
            height: 1,
            x: 0,
            y: 0,
          },
          {
            width: 1 / 3,
            height: 1 / 2,
            x: 1 / 3,
            y: 0,
          },
          {
            width: 1 / 3,
            height: 1 / 2,
            x: 1 / 3,
            y: 1 / 2,
          },
          {
            width: 1 / 3,
            height: 1,
            x: 2 / 3,
            y: 0,
          },
        ],
      },
      {
        key: '4-12',
        src: '/assets/images/layout/4-12.png',
        props: [
          {
            width: 1,
            height: 1 / 3,
            x: 0,
            y: 0,
          },
          {
            width: 1,
            height: 1 / 3,
            x: 0,
            y: 1 / 3,
          },
          {
            width: 1 / 2,
            height: 1 / 3,
            x: 0,
            y: 2 / 3,
          },
          {
            width: 1 / 2,
            height: 1 / 3,
            x: 1 / 2,
            y: 2 / 3,
          },
        ],
      },
      {
        key: '4-13',
        src: '/assets/images/layout/4-13.png',
        props: [
          {
            width: 1 / 3,
            height: 1 / 2,
            x: 0,
            y: 0,
          },
          {
            width: 1 / 3,
            height: 1 / 2,
            x: 0,
            y: 1 / 2,
          },
          {
            width: 1 / 3,
            height: 1,
            x: 1 / 3,
            y: 0,
          },
          {
            width: 1 / 3,
            height: 1,
            x: 2 / 3,
            y: 0,
          },
        ],
      },
      {
        key: '4-14',
        src: '/assets/images/layout/4-14.png',
        props: [
          {
            width: 1 / 2,
            height: 1 / 4,
            x: 0,
            y: 0,
          },
          {
            width: 1 / 2,
            height: 1 / 4,
            x: 0,
            y: 1 / 4,
          },
          {
            width: 1 / 2,
            height: 1 / 2,
            x: 1 / 2,
            y: 0,
          },
          {
            width: 1,
            height: 1 / 2,
            x: 0,
            y: 1 / 2,
          },
        ],
      },
      {
        key: '4-15',
        src: '/assets/images/layout/4-15.png',
        props: [
          {
            width: 1 / 4,
            height: 1 / 2,
            x: 0,
            y: 0,
          },
          {
            width: 1 / 4,
            height: 1 / 2,
            x: 1 / 4,
            y: 0,
          },
          {
            width: 1 / 2,
            height: 1,
            x: 1 / 2,
            y: 0,
          },
          {
            width: 1 / 2,
            height: 1 / 2,
            x: 0,
            y: 1 / 2,
          },
        ],
      },
      {
        key: '4-16',
        src: '/assets/images/layout/4-16.png',
        props: [
          {
            width: 1 / 3,
            height: 1,
            x: 0,
            y: 0,
          },
          {
            width: 1 / 3,
            height: 1 / 2,
            x: 1 / 3,
            y: 0,
          },
          {
            width: 1 / 3,
            height: 1 / 2,
            x: 2 / 3,
            y: 0,
          },
          {
            width: 2 / 3,
            height: 1 / 2,
            x: 1 / 3,
            y: 1 / 2,
          },
        ],
      },
      {
        key: '4-17',
        src: '/assets/images/layout/4-17.png',
        props: [
          {
            width: 2 / 5,
            height: 3 / 5,
            x: 0,
            y: 0,
          },
          {
            width: 3 / 5,
            height: 3 / 5,
            x: 2 / 5,
            y: 0,
          },
          {
            width: 3 / 5,
            height: 2 / 5,
            x: 0,
            y: 3 / 5,
          },
          {
            width: 2 / 5,
            height: 2 / 5,
            x: 3 / 5,
            y: 3 / 5,
          },
        ],
      },
      {
        key: '4-18',
        src: '/assets/images/layout/4-18.png',
        props: [
          {
            width: 1 / 2,
            height: 2 / 3,
            x: 0,
            y: 0,
          },
          {
            width: 1 / 2,
            height: 1 / 3,
            x: 1 / 2,
            y: 0,
          },
          {
            width: 1 / 2,
            height: 1 / 3,
            x: 0,
            y: 2 / 3,
          },
          {
            width: 1 / 2,
            height: 2 / 3,
            x: 1 / 2,
            y: 1 / 3,
          },
        ],
      },
      {
        key: '4-19',
        src: '/assets/images/layout/4-19.png',
        props: [
          {
            width: 1 / 2,
            height: 1 / 3,
            x: 0,
            y: 0,
          },
          {
            width: 1 / 2,
            height: 2 / 3,
            x: 1 / 2,
            y: 0,
          },
          {
            width: 1 / 2,
            height: 2 / 3,
            x: 0,
            y: 1 / 3,
          },
          {
            width: 1 / 2,
            height: 1 / 3,
            x: 1 / 2,
            y: 2 / 3,
          },
        ],
      },
      {
        key: '4-20',
        src: '/assets/images/layout/4-20.png',
        props: [
          {
            width: 2 / 3,
            height: 2 / 3,
            x: 0,
            y: 0,
          },
          {
            width: 1 / 3,
            height: 1 / 3,
            x: 2 / 3,
            y: 0,
          },
          {
            width: 2 / 3,
            height: 1 / 3,
            x: 0,
            y: 2 / 3,
          },
          {
            width: 1 / 3,
            height: 2 / 3,
            x: 2 / 3,
            y: 1 / 3,
          },
        ],
      },
    ],
  },
  {
    label: '5',
    value: 5,
    children: [
      {
        key: '5-1',
        src: '/assets/images/layout/5-1.png',
        props: [
          {
            width: 1,
            height: 1 / 5,
            x: 0,
            y: 0,
          },
          {
            width: 1,
            height: 1 / 5,
            x: 0,
            y: 1 / 5,
          },
          {
            width: 1,
            height: 1 / 5,
            x: 0,
            y: 2 / 5,
          },
          {
            width: 1,
            height: 1 / 5,
            x: 0,
            y: 3 / 5,
          },
          {
            width: 1,
            height: 1 / 5,
            x: 0,
            y: 4 / 5,
          },
        ],
      },
      {
        key: '5-2',
        src: '/assets/images/layout/5-2.png',
        props: [
          {
            width: 2 / 3,
            height: 1 / 3,
            x: 0,
            y: 0,
          },
          {
            width: 1 / 3,
            height: 2 / 3,
            x: 2 / 3,
            y: 0,
          },
          {
            width: 1 / 3,
            height: 2 / 3,
            x: 0,
            y: 1 / 3,
          },
          {
            width: 1 / 3,
            height: 1 / 3,
            x: 1 / 3,
            y: 1 / 3,
          },
          {
            width: 2 / 3,
            height: 1 / 3,
            x: 1 / 3,
            y: 2 / 3,
          },
        ],
      },
      {
        key: '5-3',
        src: '/assets/images/layout/5-3.png',
        props: [
          {
            width: 1,
            height: 3 / 4,
            x: 0,
            y: 0,
          },
          {
            width: 1 / 4,
            height: 1 / 4,
            x: 0,
            y: 3 / 4,
          },
          {
            width: 1 / 4,
            height: 1 / 4,
            x: 1 / 4,
            y: 3 / 4,
          },
          {
            width: 1 / 4,
            height: 1 / 4,
            x: 2 / 4,
            y: 3 / 4,
          },
          {
            width: 1 / 4,
            height: 1 / 4,
            x: 3 / 4,
            y: 3 / 4,
          },
        ],
      },
      {
        key: '5-4',
        src: '/assets/images/layout/5-4.png',
        props: [
          {
            width: 1 / 2,
            height: 1 / 2,
            x: 0,
            y: 0,
          },
          {
            width: 1 / 2,
            height: 1 / 2,
            x: 1 / 2,
            y: 0,
          },
          {
            width: 1 / 3,
            height: 1 / 2,
            x: 0,
            y: 1 / 2,
          },
          {
            width: 1 / 3,
            height: 1 / 2,
            x: 1 / 3,
            y: 1 / 2,
          },
          {
            width: 1 / 3,
            height: 1 / 2,
            x: 2 / 3,
            y: 1 / 2,
          },
        ],
      },
      {
        key: '5-5',
        src: '/assets/images/layout/5-5.png',
        props: [
          {
            width: 1 / 3,
            height: 1 / 3,
            x: 0,
            y: 0,
          },
          {
            width: 2 / 3,
            height: 2 / 3,
            x: 1 / 3,
            y: 0,
          },
          {
            width: 1 / 3,
            height: 1 / 3,
            x: 0,
            y: 1 / 3,
          },
          {
            width: 1 / 3,
            height: 1 / 3,
            x: 0,
            y: 2 / 3,
          },
          {
            width: 2 / 3,
            height: 1 / 3,
            x: 1 / 3,
            y: 2 / 3,
          },
        ],
      },
      {
        key: '5-6',
        src: '/assets/images/layout/5-6.png',
        props: [
          {
            width: 2 / 3,
            height: 2 / 3,
            x: 0,
            y: 0,
          },
          {
            width: 1 / 3,
            height: 2 / 3,
            x: 2 / 3,
            y: 0,
          },
          {
            width: 1 / 3,
            height: 1 / 3,
            x: 0,
            y: 2 / 3,
          },
          {
            width: 1 / 3,
            height: 1 / 3,
            x: 1 / 3,
            y: 2 / 3,
          },
          {
            width: 1 / 3,
            height: 1 / 3,
            x: 2 / 3,
            y: 2 / 3,
          },
        ],
      },
      {
        key: '5-7',
        src: '/assets/images/layout/5-7.png',
        props: [
          {
            width: 1 / 3,
            height: 2 / 3,
            x: 0,
            y: 0,
          },
          {
            width: 2 / 3,
            height: 2 / 3,
            x: 1 / 3,
            y: 0,
          },
          {
            width: 1 / 3,
            height: 1 / 3,
            x: 0,
            y: 2 / 3,
          },
          {
            width: 1 / 3,
            height: 1 / 3,
            x: 1 / 3,
            y: 2 / 3,
          },
          {
            width: 1 / 3,
            height: 1 / 3,
            x: 2 / 3,
            y: 2 / 3,
          },
        ],
      },
      {
        key: '5-8',
        src: '/assets/images/layout/5-8.png',
        props: [
          {
            width: 2 / 3,
            height: 1 / 3,
            x: 0,
            y: 0,
          },
          {
            width: 1 / 3,
            height: 1 / 3,
            x: 2 / 3,
            y: 0,
          },
          {
            width: 2 / 3,
            height: 2 / 3,
            x: 0,
            y: 1 / 3,
          },
          {
            width: 1 / 3,
            height: 1 / 3,
            x: 2 / 3,
            y: 1 / 3,
          },
          {
            width: 1 / 3,
            height: 1 / 3,
            x: 2 / 3,
            y: 2 / 3,
          },
        ],
      },
      {
        key: '5-9',
        src: '/assets/images/layout/5-9.png',
        props: [
          {
            width: 1 / 3,
            height: 1 / 3,
            x: 0,
            y: 0,
          },
          {
            width: 2 / 3,
            height: 1 / 3,
            x: 1 / 3,
            y: 0,
          },
          {
            width: 1 / 3,
            height: 1 / 3,
            x: 0,
            y: 1 / 3,
          },
          {
            width: 2 / 3,
            height: 2 / 3,
            x: 1 / 3,
            y: 1 / 3,
          },
          {
            width: 1 / 3,
            height: 1 / 3,
            x: 0,
            y: 2 / 3,
          },
        ],
      },
      {
        key: '5-10',
        src: '/assets/images/layout/5-10.png',
        props: [
          {
            width: 2 / 3,
            height: 1 / 2,
            x: 0,
            y: 0,
          },
          {
            width: 1 / 3,
            height: 1 / 2,
            x: 2 / 3,
            y: 0,
          },
          {
            width: 2 / 3,
            height: 1 / 2,
            x: 0,
            y: 1 / 2,
          },
          {
            width: 1 / 3,
            height: 1 / 4,
            x: 2 / 3,
            y: 1 / 2,
          },
          {
            width: 1 / 3,
            height: 1 / 4,
            x: 2 / 3,
            y: 3 / 4,
          },
        ],
      },
      {
        key: '5-11',
        src: '/assets/images/layout/5-11.png',
        props: [
          {
            width: 1 / 2,
            height: 1 / 2,
            x: 0,
            y: 0,
          },
          {
            width: 1 / 2,
            height: 1 / 3,
            x: 1 / 2,
            y: 0,
          },
          {
            width: 1 / 2,
            height: 1 / 3,
            x: 1 / 2,
            y: 1 / 3,
          },
          {
            width: 1 / 2,
            height: 1 / 2,
            x: 0,
            y: 1 / 2,
          },
          {
            width: 1 / 2,
            height: 1 / 3,
            x: 1 / 2,
            y: 2 / 3,
          },
        ],
      },
      {
        key: '5-12',
        src: '/assets/images/layout/5-12.png',
        props: [
          {
            width: 1,
            height: 1 / 3,
            x: 0,
            y: 0,
          },
          {
            width: 1 / 3,
            height: 1 / 3,
            x: 0,
            y: 1 / 3,
          },
          {
            width: 1 / 3,
            height: 1 / 3,
            x: 1 / 3,
            y: 1 / 3,
          },
          {
            width: 1 / 3,
            height: 1 / 3,
            x: 2 / 3,
            y: 1 / 3,
          },
          {
            width: 1,
            height: 1 / 3,
            x: 0,
            y: 2 / 3,
          },
        ],
      },
      {
        key: '5-13',
        src: '/assets/images/layout/5-13.png',
        props: [
          {
            width: 1 / 3,
            height: 1 / 2,
            x: 0,
            y: 0,
          },
          {
            width: 1 / 3,
            height: 1,
            x: 1 / 3,
            y: 0,
          },
          {
            width: 1 / 3,
            height: 1 / 2,
            x: 2 / 3,
            y: 0,
          },
          {
            width: 1 / 3,
            height: 1 / 2,
            x: 0,
            y: 1 / 2,
          },
          {
            width: 1 / 3,
            height: 1 / 2,
            x: 2 / 3,
            y: 1 / 2,
          },
        ],
      },
      {
        key: '5-14',
        src: '/assets/images/layout/5-14.png',
        props: [
          {
            width: 1 / 4,
            height: 1 / 2,
            x: 0,
            y: 0,
          },
          {
            width: 1 / 4,
            height: 1 / 2,
            x: 1 / 4,
            y: 0,
          },
          {
            width: 1 / 4,
            height: 1 / 2,
            x: 2 / 4,
            y: 0,
          },
          {
            width: 1 / 4,
            height: 1 / 2,
            x: 3 / 4,
            y: 0,
          },
          {
            width: 1,
            height: 1 / 2,
            x: 0,
            y: 1 / 2,
          },
        ],
      },
      {
        key: '5-15',
        src: '/assets/images/layout/5-15.png',
        props: [
          {
            width: 1 / 2,
            height: 1 / 4,
            x: 0,
            y: 0,
          },
          {
            width: 1 / 2,
            height: 1 / 4,
            x: 0,
            y: 1 / 4,
          },
          {
            width: 1 / 2,
            height: 1 / 4,
            x: 0,
            y: 2 / 4,
          },
          {
            width: 1 / 2,
            height: 1 / 4,
            x: 0,
            y: 3 / 4,
          },
          {
            width: 1 / 2,
            height: 1,
            x: 1 / 2,
            y: 0,
          },
        ],
      },
      {
        key: '5-16',
        src: '/assets/images/layout/5-16.png',
        props: [
          {
            width: 1 / 3,
            height: 1,
            x: 0,
            y: 0,
          },
          {
            width: 1 / 3,
            height: 1 / 3,
            x: 1 / 3,
            y: 0,
          },
          {
            width: 1 / 3,
            height: 1 / 3,
            x: 1 / 3,
            y: 1 / 3,
          },
          {
            width: 1 / 3,
            height: 1 / 3,
            x: 1 / 3,
            y: 2 / 3,
          },
          {
            width: 1 / 3,
            height: 1,
            x: 2 / 3,
            y: 0,
          },
        ],
      },
      {
        key: '5-17',
        src: '/assets/images/layout/5-17.png',
        props: [
          {
            width: 1 / 2,
            height: 1 / 3,
            x: 0,
            y: 0,
          },
          {
            width: 1 / 2,
            height: 1 / 3,
            x: 1 / 2,
            y: 0,
          },
          {
            width: 1 / 2,
            height: 1 / 3,
            x: 0,
            y: 1 / 3,
          },
          {
            width: 1 / 2,
            height: 1 / 3,
            x: 1 / 2,
            y: 1 / 3,
          },
          {
            width: 1,
            height: 1 / 3,
            x: 0,
            y: 2 / 3,
          },
        ],
      },
      {
        key: '5-18',
        src: '/assets/images/layout/5-18.png',
        props: [
          {
            width: 1 / 2,
            height: 1 / 3,
            x: 0,
            y: 0,
          },
          {
            width: 1 / 2,
            height: 1 / 3,
            x: 1 / 2,
            y: 0,
          },
          {
            width: 1,
            height: 1 / 3,
            x: 0,
            y: 1 / 3,
          },
          {
            width: 1 / 2,
            height: 1 / 3,
            x: 0,
            y: 2 / 3,
          },
          {
            width: 1 / 2,
            height: 1 / 3,
            x: 1 / 2,
            y: 2 / 3,
          },
        ],
      },
      {
        key: '5-19',
        src: '/assets/images/layout/5-19.png',
        props: [
          {
            width: 1 / 3,
            height: 1 / 3,
            x: 0,
            y: 0,
          },
          {
            width: 1 / 3,
            height: 1 / 3,
            x: 1 / 3,
            y: 0,
          },
          {
            width: 1 / 3,
            height: 1 / 3,
            x: 2 / 3,
            y: 0,
          },
          {
            width: 1,
            height: 1 / 3,
            x: 0,
            y: 1 / 3,
          },
          {
            width: 1,
            height: 1 / 3,
            x: 0,
            y: 2 / 3,
          },
        ],
      },
      {
        key: '5-20',
        src: '/assets/images/layout/5-20.png',
        props: [
          {
            width: 1 / 3,
            height: 1,
            x: 0,
            y: 0,
          },
          {
            width: 1 / 3,
            height: 1 / 2,
            x: 1 / 3,
            y: 0,
          },
          {
            width: 1 / 3,
            height: 1 / 2,
            x: 1 / 3,
            y: 1 / 2,
          },
          {
            width: 1 / 3,
            height: 1 / 2,
            x: 2 / 3,
            y: 0,
          },
          {
            width: 1 / 3,
            height: 1 / 2,
            x: 2 / 3,
            y: 1 / 2,
          },
        ],
      },
      {
        key: '5-21',
        src: '/assets/images/layout/5-21.png',
        props: [
          {
            width: 1 / 3,
            height: 1,
            x: 0,
            y: 0,
          },
          {
            width: 1 / 3,
            height: 1,
            x: 1 / 3,
            y: 0,
          },
          {
            width: 1 / 3,
            height: 1 / 3,
            x: 2 / 3,
            y: 0,
          },
          {
            width: 1 / 3,
            height: 1 / 3,
            x: 2 / 3,
            y: 1 / 3,
          },
          {
            width: 1 / 3,
            height: 1 / 3,
            x: 2 / 3,
            y: 2 / 3,
          },
        ],
      },
    ],
  },
  {
    label: '6',
    value: 6,
    children: [
      {
        key: '6-1',
        src: '/assets/images/layout/6-1.png',
        props: [
          {
            width: 1 / 2,
            height: 1 / 3,
            x: 0,
            y: 0,
          },
          {
            width: 1 / 2,
            height: 1 / 3,
            x: 1 / 2,
            y: 0,
          },
          {
            width: 1 / 2,
            height: 1 / 3,
            x: 0,
            y: 1 / 3,
          },
          {
            width: 1 / 2,
            height: 1 / 3,
            x: 1 / 2,
            y: 1 / 3,
          },
          {
            width: 1 / 2,
            height: 1 / 3,
            x: 0,
            y: 2 / 3,
          },
          {
            width: 1 / 2,
            height: 1 / 3,
            x: 1 / 2,
            y: 2 / 3,
          },
        ],
      },
      {
        key: '6-2',
        src: '/assets/images/layout/6-2.png',
        props: [
          {
            width: 1 / 3,
            height: 1 / 2,
            x: 0,
            y: 0,
          },
          {
            width: 1 / 3,
            height: 1 / 2,
            x: 1 / 3,
            y: 0,
          },
          {
            width: 1 / 3,
            height: 1 / 2,
            x: 2 / 3,
            y: 0,
          },
          {
            width: 1 / 3,
            height: 1 / 2,
            x: 0,
            y: 1 / 2,
          },
          {
            width: 1 / 3,
            height: 1 / 2,
            x: 1 / 3,
            y: 1 / 2,
          },
          {
            width: 1 / 3,
            height: 1 / 2,
            x: 2 / 3,
            y: 1 / 2,
          },
        ],
      },
      {
        key: '6-3',
        src: '/assets/images/layout/6-3.png',
        props: [
          {
            width: 1,
            height: 2 / 3,
            x: 0,
            y: 0,
          },
          {
            width: 1 / 5,
            height: 1 / 3,
            x: 0,
            y: 2 / 3,
          },
          {
            width: 1 / 5,
            height: 1 / 3,
            x: 1 / 5,
            y: 2 / 3,
          },
          {
            width: 1 / 5,
            height: 1 / 3,
            x: 2 / 5,
            y: 2 / 3,
          },
          {
            width: 1 / 5,
            height: 1 / 3,
            x: 3 / 5,
            y: 2 / 3,
          },
          {
            width: 1 / 5,
            height: 1 / 3,
            x: 4 / 5,
            y: 2 / 3,
          },
        ],
      },
      {
        key: '6-4',
        src: '/assets/images/layout/6-4.png',
        props: [
          {
            width: 1 / 3,
            height: 1 / 5,
            x: 0,
            y: 0,
          },
          {
            width: 1 / 3,
            height: 1 / 5,
            x: 0,
            y: 1 / 5,
          },
          {
            width: 1 / 3,
            height: 1 / 5,
            x: 0,
            y: 2 / 5,
          },
          {
            width: 1 / 3,
            height: 1 / 5,
            x: 0,
            y: 3 / 5,
          },
          {
            width: 1 / 3,
            height: 1 / 5,
            x: 0,
            y: 4 / 5,
          },
          {
            width: 2 / 3,
            height: 1,
            x: 1 / 3,
            y: 0,
          },
        ],
      },
      {
        key: '6-5',
        src: '/assets/images/layout/6-5.png',
        props: [
          {
            width: 1 / 3,
            height: 1 / 3,
            x: 0,
            y: 0,
          },
          {
            width: 1 / 3,
            height: 1 / 3,
            x: 0,
            y: 1 / 3,
          },
          {
            width: 1 / 3,
            height: 1 / 3,
            x: 0,
            y: 2 / 3,
          },
          {
            width: 1 / 3,
            height: 1 / 3,
            x: 1 / 3,
            y: 2 / 3,
          },
          {
            width: 1 / 3,
            height: 1 / 3,
            x: 2 / 3,
            y: 2 / 3,
          },
          {
            width: 2 / 3,
            height: 2 / 3,
            x: 1 / 3,
            y: 0,
          },
        ],
      },
      {
        key: '6-6',
        src: '/assets/images/layout/6-6.png',
        props: [
          {
            width: 2 / 3,
            height: 2 / 3,
            x: 0,
            y: 0,
          },
          {
            width: 1 / 3,
            height: 1 / 3,
            x: 2 / 3,
            y: 0,
          },
          {
            width: 1 / 3,
            height: 1 / 3,
            x: 2 / 3,
            y: 1 / 3,
          },
          {
            width: 1 / 3,
            height: 1 / 3,
            x: 2 / 3,
            y: 2 / 3,
          },
          {
            width: 1 / 3,
            height: 1 / 3,
            x: 0,
            y: 2 / 3,
          },
          {
            width: 1 / 3,
            height: 1 / 3,
            x: 1 / 3,
            y: 2 / 3,
          },
        ],
      },
      {
        key: '6-7',
        src: '/assets/images/layout/6-7.png',
        props: [
          {
            width: 2 / 3,
            height: 2 / 3,
            x: 0,
            y: 1 / 3,
          },
          {
            width: 1 / 3,
            height: 1 / 3,
            x: 0,
            y: 0,
          },
          {
            width: 1 / 3,
            height: 1 / 3,
            x: 1 / 3,
            y: 0,
          },
          {
            width: 1 / 3,
            height: 1 / 3,
            x: 2 / 3,
            y: 0,
          },
          {
            width: 1 / 3,
            height: 1 / 3,
            x: 2 / 3,
            y: 1 / 3,
          },
          {
            width: 1 / 3,
            height: 1 / 3,
            x: 2 / 3,
            y: 2 / 3,
          },
        ],
      },
      {
        key: '6-8',
        src: '/assets/images/layout/6-8.png',
        props: [
          {
            width: 2 / 3,
            height: 2 / 3,
            x: 1 / 3,
            y: 1 / 3,
          },
          {
            width: 1 / 3,
            height: 1 / 3,
            x: 0,
            y: 0,
          },
          {
            width: 1 / 3,
            height: 1 / 3,
            x: 1 / 3,
            y: 0,
          },
          {
            width: 1 / 3,
            height: 1 / 3,
            x: 2 / 3,
            y: 0,
          },
          {
            width: 1 / 3,
            height: 1 / 3,
            x: 0,
            y: 1 / 3,
          },
          {
            width: 1 / 3,
            height: 1 / 3,
            x: 0,
            y: 2 / 3,
          },
        ],
      },
      {
        key: '6-9',
        src: '/assets/images/layout/6-9.png',
        props: [
          {
            width: 3 / 4,
            height: 1 / 4,
            x: 0,
            y: 0,
          },
          {
            width: 1 / 4,
            height: 2 / 4,
            x: 3 / 4,
            y: 0,
          },
          {
            width: 1 / 4,
            height: 2 / 4,
            x: 3 / 4,
            y: 2 / 4,
          },
          {
            width: 2 / 4,
            height: 1 / 4,
            x: 1 / 4,
            y: 3 / 4,
          },
          {
            width: 1 / 4,
            height: 3 / 4,
            x: 0,
            y: 1 / 4,
          },
          {
            width: 2 / 4,
            height: 2 / 4,
            x: 1 / 4,
            y: 1 / 4,
          },
        ],
      },
      {
        key: '6-10',
        src: '/assets/images/layout/6-10.png',
        props: [
          {
            width: 1 / 2,
            height: 1 / 3,
            x: 0,
            y: 0,
          },
          {
            width: 1 / 2,
            height: 1 / 3,
            x: 1 / 2,
            y: 0,
          },
          {
            width: 3 / 10,
            height: 1 / 3,
            x: 0,
            y: 1 / 3,
          },
          {
            width: 4 / 10,
            height: 1 / 3,
            x: 3 / 10,
            y: 1 / 3,
          },
          {
            width: 3 / 10,
            height: 1 / 3,
            x: 7 / 10,
            y: 1 / 3,
          },
          {
            width: 1,
            height: 1 / 3,
            x: 0,
            y: 2 / 3,
          },
        ],
      },
      {
        key: '6-11',
        src: '/assets/images/layout/6-11.png',
        props: [
          {
            width: 1 / 2,
            height: 1 / 2,
            x: 0,
            y: 0,
          },
          {
            width: 1 / 4,
            height: 1 / 2,
            x: 1 / 2,
            y: 0,
          },
          {
            width: 1 / 4,
            height: 1 / 2,
            x: 3 / 4,
            y: 0,
          },
          {
            width: 1 / 4,
            height: 1 / 2,
            x: 0,
            y: 1 / 2,
          },
          {
            width: 1 / 4,
            height: 1 / 2,
            x: 1 / 4,
            y: 1 / 2,
          },
          {
            width: 1 / 2,
            height: 1 / 2,
            x: 1 / 2,
            y: 1 / 2,
          },
        ],
      },
      {
        key: '6-12',
        src: '/assets/images/layout/6-12.png',
        props: [
          {
            width: 1 / 2,
            height: 6 / 10,
            x: 0,
            y: 0,
          },
          {
            width: 1 / 4,
            height: 4 / 10,
            x: 0,
            y: 6 / 10,
          },
          {
            width: 1 / 4,
            height: 4 / 10,
            x: 1 / 4,
            y: 6 / 10,
          },
          {
            width: 1 / 2,
            height: 1 / 3,
            x: 1 / 2,
            y: 0,
          },
          {
            width: 1 / 2,
            height: 1 / 3,
            x: 1 / 2,
            y: 1 / 3,
          },
          {
            width: 1 / 2,
            height: 1 / 3,
            x: 1 / 2,
            y: 2 / 3,
          },
        ],
      },
      {
        key: '6-13',
        src: '/assets/images/layout/6-13.png',
        props: [
          {
            width: 1 / 2,
            height: 1 / 4,
            x: 0,
            y: 0,
          },
          {
            width: 1 / 2,
            height: 1 / 4,
            x: 0,
            y: 1 / 4,
          },
          {
            width: 1 / 2,
            height: 1 / 2,
            x: 1 / 2,
            y: 0,
          },
          {
            width: 1 / 2,
            height: 1 / 2,
            x: 0,
            y: 1 / 2,
          },
          {
            width: 1 / 2,
            height: 1 / 4,
            x: 1 / 2,
            y: 1 / 2,
          },
          {
            width: 1 / 2,
            height: 1 / 4,
            x: 1 / 2,
            y: 3 / 4,
          },
        ],
      },
      {
        key: '6-14',
        src: '/assets/images/layout/6-14.png',
        props: [
          {
            width: 1,
            height: 1 / 2,
            x: 0,
            y: 0,
          },
          {
            width: 1 / 3,
            height: 1 / 4,
            x: 0,
            y: 1 / 2,
          },
          {
            width: 1 / 3,
            height: 1 / 4,
            x: 1 / 3,
            y: 1 / 2,
          },
          {
            width: 1 / 3,
            height: 1 / 4,
            x: 0,
            y: 3 / 4,
          },
          {
            width: 1 / 3,
            height: 1 / 4,
            x: 1 / 3,
            y: 3 / 4,
          },
          {
            width: 1 / 3,
            height: 1 / 2,
            x: 2 / 3,
            y: 1 / 2,
          },
        ],
      },
      {
        key: '6-15',
        src: '/assets/images/layout/6-15.png',
        props: [
          {
            width: 1 / 4,
            height: 1 / 2,
            x: 0,
            y: 0,
          },
          {
            width: 1 / 4,
            height: 1 / 2,
            x: 1 / 4,
            y: 0,
          },
          {
            width: 1 / 4,
            height: 1 / 2,
            x: 2 / 4,
            y: 0,
          },
          {
            width: 1 / 4,
            height: 1 / 2,
            x: 3 / 4,
            y: 0,
          },
          {
            width: 1 / 2,
            height: 1 / 2,
            x: 0,
            y: 1 / 2,
          },
          {
            width: 1 / 2,
            height: 1 / 2,
            x: 1 / 2,
            y: 1 / 2,
          },
        ],
      },
      {
        key: '6-16',
        src: '/assets/images/layout/6-16.png',
        props: [
          {
            width: 1 / 3,
            height: 1 / 4,
            x: 0,
            y: 0,
          },
          {
            width: 1 / 3,
            height: 1 / 4,
            x: 0,
            y: 1 / 4,
          },
          {
            width: 1 / 3,
            height: 1 / 2,
            x: 1 / 3,
            y: 0,
          },
          {
            width: 1 / 3,
            height: 1 / 2,
            x: 2 / 3,
            y: 0,
          },
          {
            width: 1 / 2,
            height: 1 / 2,
            x: 0,
            y: 1 / 2,
          },
          {
            width: 1 / 2,
            height: 1 / 2,
            x: 1 / 2,
            y: 1 / 2,
          },
        ],
      },
      {
        key: '6-17',
        src: '/assets/images/layout/6-17.png',
        props: [
          {
            width: 1 / 2,
            height: 1 / 3,
            x: 0,
            y: 0,
          },
          {
            width: 1 / 2,
            height: 1 / 3,
            x: 0,
            y: 1 / 3,
          },
          {
            width: 1 / 2,
            height: 1 / 3,
            x: 0,
            y: 2 / 3,
          },
          {
            width: 1 / 4,
            height: 1 / 2,
            x: 1 / 2,
            y: 0,
          },
          {
            width: 1 / 4,
            height: 1 / 2,
            x: 3 / 4,
            y: 0,
          },
          {
            width: 1 / 2,
            height: 1 / 2,
            x: 1 / 2,
            y: 1 / 2,
          },
        ],
      },
      {
        key: '6-18',
        src: '/assets/images/layout/6-18.png',
        props: [
          {
            width: 1 / 2,
            height: 1 / 2,
            x: 0,
            y: 0,
          },
          {
            width: 1 / 2,
            height: 1 / 2,
            x: 1 / 2,
            y: 0,
          },
          {
            width: 1 / 2,
            height: 1 / 2,
            x: 0,
            y: 1 / 2,
          },
          {
            width: 1 / 4,
            height: 1 / 4,
            x: 1 / 2,
            y: 1 / 2,
          },
          {
            width: 1 / 4,
            height: 1 / 4,
            x: 3 / 4,
            y: 1 / 2,
          },
          {
            width: 1 / 2,
            height: 1 / 4,
            x: 1 / 2,
            y: 3 / 4,
          },
        ],
      },
      {
        key: '6-19',
        src: '/assets/images/layout/6-19.png',
        props: [
          {
            width: 1,
            height: 1 / 3,
            x: 0,
            y: 0,
          },
          {
            width: 1 / 2,
            height: 1 / 3,
            x: 0,
            y: 1 / 3,
          },
          {
            width: 1 / 2,
            height: 1 / 3,
            x: 1 / 2,
            y: 1 / 3,
          },
          {
            width: 1 / 3,
            height: 1 / 3,
            x: 0,
            y: 2 / 3,
          },
          {
            width: 1 / 3,
            height: 1 / 3,
            x: 1 / 3,
            y: 2 / 3,
          },
          {
            width: 1 / 3,
            height: 1 / 3,
            x: 2 / 3,
            y: 2 / 3,
          },
        ],
      },
      {
        key: '6-20',
        src: '/assets/images/layout/6-20.png',
        props: [
          {
            width: 1 / 3,
            height: 1,
            x: 0,
            y: 0,
          },
          {
            width: 1 / 3,
            height: 1 / 2,
            x: 1 / 3,
            y: 0,
          },
          {
            width: 1 / 3,
            height: 1 / 2,
            x: 1 / 3,
            y: 1 / 2,
          },
          {
            width: 1 / 3,
            height: 1 / 3,
            x: 2 / 3,
            y: 0,
          },
          {
            width: 1 / 3,
            height: 1 / 3,
            x: 2 / 3,
            y: 1 / 3,
          },
          {
            width: 1 / 3,
            height: 1 / 3,
            x: 2 / 3,
            y: 2 / 3,
          },
        ],
      },
      {
        key: '6-21',
        src: '/assets/images/layout/6-21.png',
        props: [
          {
            width: 2 / 3,
            height: 1 / 3,
            x: 0,
            y: 0,
          },
          {
            width: 1 / 3,
            height: 1 / 3,
            x: 2 / 3,
            y: 0,
          },
          {
            width: 1 / 3,
            height: 1 / 3,
            x: 0,
            y: 1 / 3,
          },
          {
            width: 2 / 3,
            height: 1 / 3,
            x: 1 / 3,
            y: 1 / 3,
          },
          {
            width: 2 / 3,
            height: 1 / 3,
            x: 0,
            y: 2 / 3,
          },
          {
            width: 1 / 3,
            height: 1 / 3,
            x: 2 / 3,
            y: 2 / 3,
          },
        ],
      },
    ],
  },
  {
    label: '7',
    value: 7,
    children: [
      {
        key: '7-1',
        src: '/assets/images/layout/7-1.png',
        props: [
          {
            width: 1 / 4,
            height: 1 / 2,
            x: 0,
            y: 0,
          },
          {
            width: 1 / 4,
            height: 1 / 2,
            x: 1 / 4,
            y: 0,
          },
          {
            width: 1 / 4,
            height: 1 / 2,
            x: 2 / 4,
            y: 0,
          },
          {
            width: 1 / 4,
            height: 1 / 2,
            x: 3 / 4,
            y: 0,
          },
          {
            width: 1 / 3,
            height: 1 / 2,
            x: 0,
            y: 1 / 2,
          },
          {
            width: 1 / 3,
            height: 1 / 2,
            x: 1 / 3,
            y: 1 / 2,
          },
          {
            width: 1 / 3,
            height: 1 / 2,
            x: 2 / 3,
            y: 1 / 2,
          },
        ],
      },
      {
        key: '7-2',
        src: '/assets/images/layout/7-2.png',
        props: [
          {
            width: 1 / 3,
            height: 1 / 3,
            x: 0,
            y: 0,
          },
          {
            width: 1 / 3,
            height: 1 / 3,
            x: 1 / 3,
            y: 0,
          },
          {
            width: 1 / 3,
            height: 1 / 3,
            x: 2 / 3,
            y: 0,
          },
          {
            width: 1 / 3,
            height: 1 / 3,
            x: 0,
            y: 2 / 3,
          },
          {
            width: 1 / 3,
            height: 1 / 3,
            x: 1 / 3,
            y: 2 / 3,
          },
          {
            width: 1 / 3,
            height: 1 / 3,
            x: 2 / 3,
            y: 2 / 3,
          },
          {
            width: 1,
            height: 1 / 3,
            x: 0,
            y: 1 / 3,
          },
        ],
      },
      {
        key: '7-3',
        src: '/assets/images/layout/7-3.png',
        props: [
          {
            width: 1 / 2,
            height: 1 / 3,
            x: 0,
            y: 0,
          },
          {
            width: 1 / 2,
            height: 1 / 3,
            x: 1 / 2,
            y: 0,
          },
          {
            width: 1 / 3,
            height: 1 / 3,
            x: 0,
            y: 1 / 3,
          },
          {
            width: 1 / 3,
            height: 1 / 3,
            x: 1 / 3,
            y: 1 / 3,
          },
          {
            width: 1 / 3,
            height: 1 / 3,
            x: 2 / 3,
            y: 1 / 3,
          },
          {
            width: 1 / 2,
            height: 1 / 3,
            x: 0,
            y: 2 / 3,
          },
          {
            width: 1 / 2,
            height: 1 / 3,
            x: 1 / 2,
            y: 2 / 3,
          },
        ],
      },
      {
        key: '7-4',
        src: '/assets/images/layout/7-4.png',
        props: [
          {
            width: 1 / 6,
            height: 2 / 5,
            x: 0,
            y: 0,
          },
          {
            width: 1 / 6,
            height: 2 / 5,
            x: 1 / 6,
            y: 0,
          },
          {
            width: 1 / 6,
            height: 2 / 5,
            x: 2 / 6,
            y: 0,
          },
          {
            width: 1 / 6,
            height: 2 / 5,
            x: 3 / 6,
            y: 0,
          },
          {
            width: 1 / 6,
            height: 2 / 5,
            x: 4 / 6,
            y: 0,
          },
          {
            width: 1 / 6,
            height: 2 / 5,
            x: 5 / 6,
            y: 0,
          },
          {
            width: 1,
            height: 3 / 5,
            x: 0,
            y: 2 / 5,
          },
        ],
      },
      {
        key: '7-5',
        src: '/assets/images/layout/7-5.png',
        props: [
          {
            width: 3 / 4,
            height: 2 / 3,
            x: 0,
            y: 0,
          },
          {
            width: 1 / 4,
            height: 1 / 3,
            x: 3 / 4,
            y: 0,
          },
          {
            width: 1 / 4,
            height: 1 / 3,
            x: 3 / 4,
            y: 1 / 3,
          },
          {
            width: 1 / 4,
            height: 1 / 3,
            x: 0,
            y: 2 / 3,
          },
          {
            width: 1 / 4,
            height: 1 / 3,
            x: 1 / 4,
            y: 2 / 3,
          },
          {
            width: 1 / 4,
            height: 1 / 3,
            x: 2 / 4,
            y: 2 / 3,
          },
          {
            width: 1 / 4,
            height: 1 / 3,
            x: 3 / 4,
            y: 2 / 3,
          },
        ],
      },
      {
        key: '7-6',
        src: '/assets/images/layout/7-6.png',
        props: [
          {
            width: 3 / 4,
            height: 2 / 3,
            x: 1 / 4,
            y: 0,
          },
          {
            width: 1 / 4,
            height: 1 / 3,
            x: 0,
            y: 0,
          },
          {
            width: 1 / 4,
            height: 1 / 3,
            x: 0,
            y: 1 / 3,
          },
          {
            width: 1 / 4,
            height: 1 / 3,
            x: 0,
            y: 2 / 3,
          },
          {
            width: 1 / 4,
            height: 1 / 3,
            x: 1 / 4,
            y: 2 / 3,
          },
          {
            width: 1 / 4,
            height: 1 / 3,
            x: 2 / 4,
            y: 2 / 3,
          },
          {
            width: 1 / 4,
            height: 1 / 3,
            x: 3 / 4,
            y: 2 / 3,
          },
        ],
      },
      {
        key: '7-7',
        src: '/assets/images/layout/7-7.png',
        props: [
          {
            width: 1 / 3,
            height: 1 / 4,
            x: 0,
            y: 0,
          },
          {
            width: 1 / 3,
            height: 1 / 4,
            x: 1 / 3,
            y: 0,
          },
          {
            width: 1 / 3,
            height: 1 / 4,
            x: 2 / 3,
            y: 0,
          },
          {
            width: 2 / 3,
            height: 3 / 4,
            x: 0,
            y: 1 / 4,
          },
          {
            width: 1 / 3,
            height: 1 / 4,
            x: 2 / 3,
            y: 1 / 4,
          },
          {
            width: 1 / 3,
            height: 1 / 4,
            x: 2 / 3,
            y: 2 / 4,
          },
          {
            width: 1 / 3,
            height: 1 / 4,
            x: 2 / 3,
            y: 3 / 4,
          },
        ],
      },
      {
        key: '7-8',
        src: '/assets/images/layout/7-8.png',
        props: [
          {
            width: 1 / 4,
            height: 1 / 3,
            x: 0,
            y: 0,
          },
          {
            width: 1 / 4,
            height: 1 / 3,
            x: 1 / 4,
            y: 0,
          },
          {
            width: 1 / 4,
            height: 1 / 3,
            x: 2 / 4,
            y: 0,
          },
          {
            width: 1 / 4,
            height: 1 / 3,
            x: 3 / 4,
            y: 0,
          },
          {
            width: 1 / 4,
            height: 1 / 3,
            x: 0,
            y: 1 / 3,
          },
          {
            width: 1 / 4,
            height: 1 / 3,
            x: 0,
            y: 2 / 3,
          },
          {
            width: 3 / 4,
            height: 2 / 3,
            x: 1 / 4,
            y: 1 / 3,
          },
        ],
      },
      {
        key: '7-9',
        src: '/assets/images/layout/7-9.png',
        props: [
          {
            width: 3 / 4,
            height: 2 / 4,
            x: 0,
            y: 0,
          },
          {
            width: 3 / 8,
            height: 2 / 4,
            x: 0,
            y: 2 / 4,
          },
          {
            width: 3 / 8,
            height: 2 / 4,
            x: 3 / 8,
            y: 2 / 4,
          },
          {
            width: 1 / 4,
            height: 1 / 4,
            x: 3 / 4,
            y: 0,
          },
          {
            width: 1 / 4,
            height: 1 / 4,
            x: 3 / 4,
            y: 1 / 4,
          },
          {
            width: 1 / 4,
            height: 1 / 4,
            x: 3 / 4,
            y: 2 / 4,
          },
          {
            width: 1 / 4,
            height: 1 / 4,
            x: 3 / 4,
            y: 3 / 4,
          },
        ],
      },
      {
        key: '7-10',
        src: '/assets/images/layout/7-10.png',
        props: [
          {
            width: 1 / 2,
            height: 1 / 2,
            x: 0,
            y: 0,
          },
          {
            width: 1 / 2,
            height: 1 / 2,
            x: 1 / 2,
            y: 0,
          },
          {
            width: 1 / 2,
            height: 1 / 2,
            x: 0,
            y: 1 / 2,
          },
          {
            width: 1 / 4,
            height: 1 / 4,
            x: 1 / 2,
            y: 1 / 2,
          },
          {
            width: 1 / 4,
            height: 1 / 4,
            x: 1 / 2,
            y: 3 / 4,
          },
          {
            width: 1 / 4,
            height: 1 / 4,
            x: 3 / 4,
            y: 1 / 2,
          },
          {
            width: 1 / 4,
            height: 1 / 4,
            x: 3 / 4,
            y: 3 / 4,
          },
        ],
      },
      {
        key: '7-11',
        src: '/assets/images/layout/7-11.png',
        props: [
          {
            width: 1 / 2,
            height: 1 / 2,
            x: 0,
            y: 0,
          },
          {
            width: 1 / 2,
            height: 1 / 2,
            x: 0,
            y: 1 / 2,
          },
          {
            width: 1 / 2,
            height: 1 / 4,
            x: 1 / 2,
            y: 0,
          },
          {
            width: 1 / 2,
            height: 1 / 4,
            x: 1 / 2,
            y: 1 / 4,
          },
          {
            width: 1 / 2,
            height: 1 / 4,
            x: 1 / 2,
            y: 2 / 4,
          },
          {
            width: 1 / 4,
            height: 1 / 4,
            x: 2 / 4,
            y: 3 / 4,
          },
          {
            width: 1 / 4,
            height: 1 / 4,
            x: 3 / 4,
            y: 3 / 4,
          },
        ],
      },
      {
        key: '7-12',
        src: '/assets/images/layout/7-12.png',
        props: [
          {
            width: 1 / 2,
            height: 1 / 2,
            x: 0,
            y: 0,
          },
          {
            width: 1 / 2,
            height: 1 / 2,
            x: 1 / 2,
            y: 0,
          },
          {
            width: 1 / 3,
            height: 1 / 4,
            x: 0,
            y: 1 / 2,
          },
          {
            width: 1 / 3,
            height: 1 / 4,
            x: 0,
            y: 3 / 4,
          },
          {
            width: 1 / 3,
            height: 1 / 4,
            x: 2 / 3,
            y: 1 / 2,
          },
          {
            width: 1 / 3,
            height: 1 / 4,
            x: 2 / 3,
            y: 3 / 4,
          },
          {
            width: 1 / 3,
            height: 1 / 2,
            x: 1 / 3,
            y: 1 / 2,
          },
        ],
      },
      {
        key: '7-13',
        src: '/assets/images/layout/7-13.png',
        props: [
          {
            width: 1 / 3,
            height: 1 / 3,
            x: 0,
            y: 0,
          },
          {
            width: 1 / 3,
            height: 1 / 3,
            x: 1 / 3,
            y: 0,
          },
          {
            width: 1 / 3,
            height: 1 / 3,
            x: 2 / 3,
            y: 0,
          },
          {
            width: 2 / 3,
            height: 1 / 3,
            x: 0,
            y: 1 / 3,
          },
          {
            width: 2 / 3,
            height: 1 / 3,
            x: 0,
            y: 2 / 3,
          },
          {
            width: 1 / 3,
            height: 1 / 3,
            x: 2 / 3,
            y: 1 / 3,
          },
          {
            width: 1 / 3,
            height: 1 / 3,
            x: 2 / 3,
            y: 2 / 3,
          },
        ],
      },
      {
        key: '7-14',
        src: '/assets/images/layout/7-14.png',
        props: [
          {
            width: 1 / 3,
            height: 1 / 3,
            x: 0,
            y: 0,
          },
          {
            width: 1 / 3,
            height: 1 / 3,
            x: 0,
            y: 1 / 3,
          },
          {
            width: 1 / 3,
            height: 1 / 3,
            x: 0,
            y: 2 / 3,
          },
          {
            width: 1 / 3,
            height: 1 / 3,
            x: 1 / 3,
            y: 1 / 3,
          },
          {
            width: 1 / 3,
            height: 1 / 3,
            x: 2 / 3,
            y: 1 / 3,
          },
          {
            width: 2 / 3,
            height: 1 / 3,
            x: 1 / 3,
            y: 0,
          },
          {
            width: 2 / 3,
            height: 1 / 3,
            x: 1 / 3,
            y: 2 / 3,
          },
        ],
      },
      {
        key: '7-15',
        src: '/assets/images/layout/7-15.png',
        props: [
          {
            width: 1 / 3,
            height: 1 / 3,
            x: 0,
            y: 0,
          },
          {
            width: 1 / 3,
            height: 1 / 3,
            x: 0,
            y: 1 / 3,
          },
          {
            width: 1 / 3,
            height: 1 / 3,
            x: 0,
            y: 2 / 3,
          },
          {
            width: 1 / 3,
            height: 1 / 3,
            x: 1 / 3,
            y: 0,
          },
          {
            width: 1 / 3,
            height: 1 / 3,
            x: 1 / 3,
            y: 1 / 3,
          },
          {
            width: 1 / 3,
            height: 1 / 3,
            x: 1 / 3,
            y: 2 / 3,
          },
          {
            width: 1 / 3,
            height: 1,
            x: 2 / 3,
            y: 0,
          },
        ],
      },
      {
        key: '7-16',
        src: '/assets/images/layout/7-16.png',
        props: [
          {
            width: 1 / 2,
            height: 1 / 3,
            x: 0,
            y: 0,
          },
          {
            width: 1 / 2,
            height: 1 / 3,
            x: 0,
            y: 1 / 3,
          },
          {
            width: 1 / 2,
            height: 1 / 3,
            x: 0,
            y: 2 / 3,
          },
          {
            width: 1 / 4,
            height: 1 / 4,
            x: 1 / 2,
            y: 0,
          },
          {
            width: 1 / 4,
            height: 1 / 4,
            x: 1 / 2,
            y: 1 / 4,
          },
          {
            width: 1 / 4,
            height: 1 / 2,
            x: 3 / 4,
            y: 0,
          },
          {
            width: 1 / 2,
            height: 1 / 2,
            x: 1 / 2,
            y: 1 / 2,
          },
        ],
      },
      {
        key: '7-17',
        src: '/assets/images/layout/7-17.png',
        props: [
          {
            width: 1 / 2,
            height: 1 / 3,
            x: 0,
            y: 0,
          },
          {
            width: 1 / 4,
            height: 1 / 3,
            x: 0,
            y: 1 / 3,
          },
          {
            width: 1 / 4,
            height: 1 / 3,
            x: 0,
            y: 2 / 3,
          },
          {
            width: 1 / 4,
            height: 1 / 3,
            x: 1 / 4,
            y: 1 / 3,
          },
          {
            width: 1 / 4,
            height: 1 / 3,
            x: 1 / 4,
            y: 2 / 3,
          },
          {
            width: 1 / 2,
            height: 1 / 2,
            x: 1 / 2,
            y: 0,
          },
          {
            width: 1 / 2,
            height: 1 / 2,
            x: 1 / 2,
            y: 1 / 2,
          },
        ],
      },
      {
        key: '7-18',
        src: '/assets/images/layout/7-18.png',
        props: [
          {
            width: 1 / 3,
            height: 1 / 4,
            x: 0,
            y: 0,
          },
          {
            width: 1 / 3,
            height: 1 / 4,
            x: 0,
            y: 1 / 4,
          },
          {
            width: 1 / 2,
            height: 1 / 2,
            x: 0,
            y: 1 / 2,
          },
          {
            width: 1 / 3,
            height: 1 / 2,
            x: 1 / 3,
            y: 0,
          },
          {
            width: 1 / 3,
            height: 1 / 2,
            x: 2 / 3,
            y: 0,
          },
          {
            width: 1 / 2,
            height: 1 / 4,
            x: 1 / 2,
            y: 1 / 2,
          },
          {
            width: 1 / 2,
            height: 1 / 4,
            x: 1 / 2,
            y: 3 / 4,
          },
        ],
      },
    ],
  },
  {
    label: '更多',
    value: 999,
    children: [],
  },
];

// 根据key值返回对应布局信息
export const findLayoutProps = (key: string) => {
  let childrens: LayoutChildren[] = [];
  layoutList.forEach((layout) => {
    childrens = [...childrens, ...layout.children];
  });
  return childrens.find((child) => child.key === key)?.props || [];
};
