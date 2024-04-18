import type { DOMAttributes, HTMLAttributes } from 'react';

import LogoPNG from '@/components/BaseLayout/Header/assets/logo.png';
import ImageWithBlur from '@/components/common/Images/ImageWithBlur';

type DOMAttributesKeys = keyof DOMAttributes<HTMLDivElement>;

export type LogoProps = Omit<HTMLAttributes<HTMLDivElement>, DOMAttributesKeys>;

export default function Logo({ className }: LogoProps) {
  return (
    <div className={`relative ms-1 h-[7.5rem] w-[7.9375rem] md:ms-0 md:h-[5.625rem] md:w-[10.625rem] ${className}`}>
      <ImageWithBlur
        role="img"
        src={LogoPNG}
        alt="LOGO"
        fill={true}
        sizes="(max-width: 1280px) 10.625rem, (max-width: 768px) 7.9375rem"
      />
    </div>
  );
}
