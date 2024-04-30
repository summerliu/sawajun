import type { HTMLAttributes, PropsWithChildren } from 'react';

import classNames from 'classnames';

export type DropdownMenuProps = HTMLAttributes<HTMLUListElement> &
  PropsWithChildren;

export default function DropdownMenu({
  className,
  children,
  ...props
}: DropdownMenuProps) {
  return (
    <ul
      tabIndex={0}
      role="menu"
      className={classNames(
        'menu card dropdown-content z-[52] rounded-lg bg-base-100 p-0 shadow',
        className
      )}
      {...props}
    >
      <div className="card-body !p-0">{children}</div>
    </ul>
  );
}
