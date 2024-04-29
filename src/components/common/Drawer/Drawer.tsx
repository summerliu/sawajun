import { HTMLAttributes, ReactNode } from 'react';

import useControlScroll from '@/hooks/useControlScroll';
import classNames from 'classnames';

export type DrawerProps = {
  side: ReactNode;
  open?: boolean;
  end?: boolean;
  toggleClassName?: string;
  contentClassName?: string;
  sideClassName?: string;
  overlayClassName?: string;
  onClickOverlay?: () => void;
} & HTMLAttributes<HTMLDivElement>;

export default function Drawer({
  children,
  side,
  open,
  end,
  className,
  toggleClassName,
  contentClassName,
  sideClassName,
  overlayClassName,
  onClickOverlay,
  ...otherProps
}: DrawerProps) {
  useControlScroll(open ?? false);

  return (
    <div
      data-testid="drawer"
      aria-expanded={open}
      {...otherProps}
      className={classNames('drawer', className, { 'drawer-end': end })}
    >
      <input
        role="checkbox"
        type="checkbox"
        className={classNames('drawer-toggle', toggleClassName)}
        checked={open}
        readOnly
      />
      <div
        data-testid="drawer-content"
        className={classNames('drawer-content', contentClassName)}
      >
        {children}
      </div>
      <div
        data-testid="drawer-side"
        className={classNames('drawer-side', sideClassName)}
      >
        <label
          data-testid="drawer-overlay"
          className={classNames('drawer-overlay', overlayClassName)}
          onClick={onClickOverlay}
        ></label>
        {side}
      </div>
    </div>
  );
}
