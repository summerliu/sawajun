import Image from 'next/image';
import type { ImageProps } from 'next/image';
import { CSSProperties, useMemo } from 'react';

type Props = { testId?: string } & ImageProps;

export default function SvgImage({
  src,
  alt,
  width,
  height,
  style = {},
  ...other
}: Props) {
  const imageStyle = useMemo<CSSProperties>(
    () => ({
      ...(!width ? { objectFit: 'scale-down' } : {}),
      ...style,
    }),
    [style, width]
  );

  return (
    <Image
      src={src}
      alt={alt}
      {...(!width && {
        fill: true,
        sizes: '1.5rem',
      })}
      width={width}
      height={height}
      style={imageStyle}
      {...other}
    />
  );
}
