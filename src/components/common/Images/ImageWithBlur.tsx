import Image from 'next/image';
import type { ImageProps } from 'next/image';
import { CSSProperties, useMemo, useState } from 'react';

import dataURL from '@/components/common/Images/blurDataURL';

export const defaultImgSizes = '92px';
export type ImageWithBlurProps = {} & ImageProps;

export default function ImageWithBlur({
  src,
  alt,
  priority,
  className,
  style = {},
  ...optionalProps
}: ImageProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  const imageStyle = useMemo<CSSProperties>(
    () => ({
      ...style,
      ...(isLoading && {
        // to preserve aspect ratio of placeholder
        objectFit: 'cover',
      }),
    }),
    [style, isLoading]
  );

  return (
    <Image
      placeholder="blur"
      blurDataURL={dataURL}
      fill
      src={src}
      alt={alt}
      priority={priority}
      onLoad={() => {
        setIsLoading(false);
      }}
      onError={() => {
        setIsError(true);
        setIsLoading(false);
      }}
      style={imageStyle}
      className={`w-full ${isError && 'bg-transparent'} ${className}`}
      {...optionalProps}
    />
  );
}
