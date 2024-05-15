import { useCallback, useState } from 'react';

import ArrowBottomSvg from '@/components/assets/outlined/arrow-bottom.svg';
import ArrowTopSvg from '@/components/assets/outlined/arrow-top.svg';

type Props = {
  title: React.ReactNode;
  content: React.ReactNode;
  countNode?: React.ReactNode;
};

export default function CollapseList({
  title,
  content,
  countNode,
}: Props) {
  const [isOpen, setIsOpen] = useState<boolean>(true);

  const handleCollapse = useCallback(() => {
    setIsOpen(!isOpen);
  }, [isOpen]);

  return (
    <div className={`collapse collapse-${isOpen ? 'open' : 'close'}`}>
      <div
        className="collapse-title relative flex items-center"
        onClick={handleCollapse}
      >
        <div className="flex items-center">
          {title}
          {countNode}
        </div>
        <div className="absolute end-0 top-0 pt-4">
          {isOpen ? <ArrowBottomSvg /> : <ArrowTopSvg />}
        </div>
      </div>
      <ul className="collapse-content">{content}</ul>
    </div>
  );
}
