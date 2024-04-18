import { CSSProperties, PropsWithChildren } from 'react';

import { TextTag } from '@/components/common/Typography/types';

export type Props = {
  className?: string;
  style?: CSSProperties;
  textTag?: TextTag;
} & PropsWithChildren;

export default function Typography({
  className,
  style,
  children,
  textTag: Wrapper = TextTag.P,
}: Props) {
  return (
    <Wrapper
      className={className}
      style={style}
    >
      {children}
    </Wrapper>
  );
}
