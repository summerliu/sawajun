import {
  DOMAttributes,
  type LabelHTMLAttributes,
  type PropsWithChildren,
  useCallback,
} from 'react';

import { TextTag } from '@/components/common/Typography/types';
import classNames from 'classnames';

type DOMAttributesKeys = keyof DOMAttributes<HTMLLabelElement>;

export type DropdownToggleProps = Omit<
  LabelHTMLAttributes<HTMLLabelElement>,
  DOMAttributesKeys
> &
  PropsWithChildren & {
    textTag?: TextTag;
  };

export default function DropdownToggle({
  children,
  className,
  textTag: Wrapper = TextTag.Label,
  ...props
}: DropdownToggleProps) {
  // @ts-expect-error: no check
  const handleMouseDown = useCallback(event => {
    const targetEl = event.currentTarget;

    // enable close dropdown
    if (targetEl && targetEl.matches(':focus')) {
      setTimeout(() => {
        targetEl.blur();
      }, 0);
    }
  }, []);

  return (
    <Wrapper
      data-testid="dropdown-toggle"
      tabIndex={0}
      {...props}
      className={classNames('cursor-pointer', className)}
      onMouseDown={handleMouseDown}
    >
      {children}
    </Wrapper>
  );
}
