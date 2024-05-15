/**
 * reference https://github.com/daisyui/react-daisyui/tree/main/src/Dropdown
 */
import type { Dispatch, HTMLAttributes, SetStateAction } from 'react';

import {
  DropdownHorizontal,
  DropdownVertical,
} from '@/components/common/Dropdown/declarations';
import classNames from 'classnames';

export type DropdownProps = HTMLAttributes<HTMLDivElement> & {
  open?: boolean;
  end?: boolean;
  hover?: boolean;
  horizontal?: DropdownHorizontal;
  vertical?: DropdownVertical;
  setIsFocused?: Dispatch<SetStateAction<boolean>>;
};

export default function Dropdown({
  className,
  open,
  end = true,
  hover = false,
  horizontal,
  vertical,
  children,
  setIsFocused,
  ...props
}: DropdownProps) {
  return (
    <div
      role="listbox"
      {...props}
      className={classNames(
        'dropdown',
        className,
        {
          'dropdown-end': end,
          'dropdown-hover': hover,
        },
        horizontal,
        vertical
      )}
      {...(setIsFocused && {
        onFocus: () => setIsFocused(true),
        onBlur: () => setIsFocused(false),
      })}
    >
      {children}
    </div>
  );
}
