// 布局菜单
export interface Layout {
  laber: string,
  value: number,
  children: LayoutChildren[]
}

export interface LayoutChildren {
  key: string,
  src: string,
  props?: LayoutProps[]
}

export interface LayoutProps {
  top: number,
  left: number,
  width: number,
  height: number,
  x: number,
  y: number,
}

export const layoutList = [
  {
    label: '2',
    value: 2,
    children: [
      {
        key: '2-1',
        src: '/assets/images/layout/2-1.png',
        props: [
          {
            top: 0,
            left: 0,
            width: 1,
            height: 1 / 2,
            x: 0,
            y: 0,
          },
          {
            top: 0,
            left: 0,
            width: 1,
            height: 1 / 2,
            x: 0,
            y: 1 / 2,
          }
        ]
      },
      {
        key: '2-2',
        src: '/assets/images/layout/2-2.png',
        props: [
          {
            top: 0,
            left: 0,
            width: 1 / 2,
            height: 1,
            x: 0,
            y: 0,
          },
          {
            top: 0,
            left: 0,
            width: 1 / 2,
            height: 1,
            x: 1 / 2,
            y: 0,
          }
        ]
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
            top: 0,
            left: 0,
            width: 1,
            height: 1 / 3,
            x: 0,
            y: 0
          },
          {
            top: 0,
            left: 0,
            width: 1,
            height: 1 / 3,
            x: 0,
            y: 1 / 3,
          },
          {
            top: 0,
            left: 0,
            width: 1,
            height: 1 / 3,
            x: 0,
            y: 2 / 3,
          }
        ]
      },
      {
        key: '3-2',
        src: '/assets/images/layout/3-2.png',
        props: [
          {
            top: 0,
            left: 0,
            width: 1 / 3,
            height: 1,
            x: 0,
            y: 0,
          },
          {
            top: 0,
            left: 0,
            width: 1 / 3,
            height: 1,
            x: 1 / 3,
            y: 0,
          },
          {
            top: 0,
            left: 0,
            width: 1 / 3,
            height: 1,
            x: 2 / 3,
            y: 0,
          }
        ]
      },
      {
        key: '3-3',
        src: '/assets/images/layout/3-3.png',
        props: [
          {
            top: 0,
            left: 0,
            width: 1 / 2,
            height: 1 / 2,
            x: 0,
            y: 0,
          },
          {
            top: 0,
            left: 0,
            width: 1 / 2,
            height: 1 / 2,
            x: 1 / 2,
            y: 0,
          },
          {
            top: 0,
            left: 0,
            width: 1,
            height: 1 / 2,
            x: 0,
            y: 1 / 2,
          }
        ]
      },
      {
        key: '3-4',
        src: '/assets/images/layout/3-4.png',
        props: [
          {
            top: 0,
            left: 0,
            width: 1,
            height: 1 / 2,
            x: 0,
            y: 0,
          },
          {
            top: 0,
            left: 0,
            width: 1 / 2,
            height: 1 / 2,
            x: 0,
            y: 1 / 2,
          },
          {
            top: 0,
            left: 0,
            width: 1 / 2,
            height: 1 / 2,
            x: 1 / 2,
            y: 1 / 2,
          }
        ]
      },
      {
        key: '3-5',
        src: '/assets/images/layout/3-5.png',
        props: [
          {
            top: 0,
            left: 0,
            width: 1 / 2,
            height: 1 / 2,
            x: 0,
            y: 0,
          },
          {
            top: 0,
            left: 0,
            width: 1 / 2,
            height: 1,
            x: 1 / 2,
            y: 0,
          },
          {
            top: 0,
            left: 0,
            width: 1 / 2,
            height: 1 / 2,
            x: 0,
            y: 1 / 2,
          }
        ]
      },
      {
        key: '3-6',
        src: '/assets/images/layout/3-6.png',
        props: [
          {
            top: 0,
            left: 0,
            width: 1 / 2,
            height: 1,
            x: 0,
            y: 0,
          },
          {
            top: 0,
            left: 0,
            width: 1 / 2,
            height: 1 / 2,
            x: 1 / 2,
            y: 0,
          },
          {
            top: 0,
            left: 0,
            width: 1,
            height: 1 / 2,
            x: 1 / 2,
            y: 1 / 2,
          }
        ]
      },
      {
        key: '3-7',
        src: '/assets/images/layout/3-7.png',
        props: [
          {
            top: 0,
            left: 0,
            width: 1,
            height: 2 / 5,
            x: 0,
            y: 0,
          },
          {
            top: 0,
            left: 0,
            width: 3 / 5,
            height: 3 / 5,
            x: 0,
            y: 2 / 5,
          },
          {
            top: 0,
            left: 0,
            width: 2 / 5,
            height: 3 / 5,
            x: 3 / 5,
            y: 2 / 5,
          }
        ]
      },
      {
        key: '3-8',
        src: '/assets/images/layout/3-8.png',
        props: [
          {
            top: 0,
            left: 0,
            width: 3 / 5,
            height: 3 / 5,
            x: 0,
            y: 0,
          },
          {
            top: 0,
            left: 0,
            width: 2 / 5,
            height: 3 / 5,
            x: 3 / 5,
            y: 0,
          },
          {
            top: 0,
            left: 0,
            width: 1,
            height: 2 / 5,
            x: 0,
            y: 3 / 5,
          }
        ]
      },
      {
        key: '3-9',
        src: '/assets/images/layout/3-9.png',
        props: [
          {
            top: 0,
            left: 0,
            width: 3 / 5,
            height: 1,
            x: 0,
            y: 0,
          },
          {
            top: 0,
            left: 0,
            width: 2 / 5,
            height: 2 / 5,
            x: 3 / 5,
            y: 0,
          },
          {
            top: 0,
            left: 0,
            width: 2 / 5,
            height: 3 / 5,
            x: 3 / 5,
            y: 2 / 5,
          }
        ]
      },
      {
        key: '3-10',
        src: '/assets/images/layout/3-10.png',
        props: [
          {
            top: 0,
            left: 0,
            width: 1,
            height: 3 / 5,
            x: 0,
            y: 0,
          },
          {
            top: 0,
            left: 0,
            width: 2 / 5,
            height: 2 / 5,
            x: 0,
            y: 3 / 5,
          },
          {
            top: 0,
            left: 0,
            width: 3 / 5,
            height: 2 / 5,
            x: 2 / 5,
            y: 3 / 5,
          }
        ]
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

// 根据key值返回对应布局信息
export const findLayoutProps = (key: string) => {
  let childrens: LayoutChildren[] = []
  layoutList.forEach(layout => {
    childrens = [...childrens, ...layout.children]
  });
  return childrens.find(child => child.key === key)?.props || [];
}