import React, {
  useState,
  ReactNode,
  useRef,
  forwardRef,
  useImperativeHandle,
  ReactElement,
} from 'react';
import { traverseReactNode } from '@/utils/traverse-react-node';

export type ScrollBarProps = {
  width: number;
  height: number;
  children: ReactNode;
  indexs: number[];
  activeIndex: number;
  onIndexChange: (index: number) => void;
};

export type ScrollBarRef = {
  scrollTo: (index: number) => void;
};

let timer: any = null;

// 自定义滚动条
const ScrollBar = forwardRef<ScrollBarRef, ScrollBarProps>(function ScrollBar(props, ref) {
  const scrollRef = useRef<HTMLDivElement>(null);

  const [isScroll, setIsScroll] = useState(false);
  const [distance, setDistance] = useState(0);

  const panels: ReactElement[] = [];

  traverseReactNode(props.children, (child, index) => {
    if (!React.isValidElement(child)) return;
    panels.push(
      <div key={props.indexs[index]} data-index={props.indexs[index]}>
        {child.props.children}
      </div>,
    );
  });

  const scrollTo = (value: number) => {
    if (!scrollRef.current) return;
    const children = scrollRef.current.children;
    for (let index = 0; index < children.length; index++) {
      const element = children.item(index) as HTMLElement;
      const dataIndex = element.dataset.index;
      if (Number(dataIndex) === value) {
        element?.scrollIntoView();
      }
    }
  };

  // scrollTop方法暴露给父组件
  useImperativeHandle(ref, () => ({ scrollTo }));

  const handleScroll = () => {
    if (scrollRef.current) {
      // 控制显隐
      setIsScroll(true);
      clearTimeout(timer);
      timer = setTimeout(() => setIsScroll(false), 300);

      // 计算滚动条位置
      const dom: HTMLElement = scrollRef.current;
      const clientHeight = dom.clientHeight;
      const scrollHeight = dom.scrollHeight;
      const scrollTop = dom.scrollTop;
      setDistance((scrollTop / (scrollHeight - clientHeight)) * (clientHeight - props.height) || 0);

      // 获取可视距离顶部元素
      const elements = dom.children;
      for (let i = 0; i < elements.length; i++) {
        const panel = elements.item(i) as HTMLElement;
        if (!panel) continue;
        const panelIndex = panel.dataset['index'];
        if (!panelIndex) continue;
        if (panel.offsetTop + panel.clientHeight > scrollTop) {
          props.activeIndex !== Number(panelIndex) && props.onIndexChange?.(Number(panelIndex));
          return;
        }
      }
    }
  };

  const position = { top: `${distance}px`, right: 0 };

  return (
    <div className='relative flex-1 overflow-hidden'>
      <div
        className='absolute rounded bg-gray-400 transition-opacity duration-300'
        style={{
          width: `${props.width}px`,
          height: `${props.height}px`,
          opacity: isScroll ? 1 : 0,
          ...position,
        }}
      />
      <div
        className='relative h-full w-full overflow-y-scroll'
        ref={scrollRef}
        onScroll={handleScroll}
      >
        {panels}
      </div>
    </div>
  );
});

export default ScrollBar;
