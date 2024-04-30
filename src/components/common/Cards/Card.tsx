import classNames from "classnames";
import { useRouter } from "next/router";
import { PropsWithChildren, useCallback } from "react";

type Props = {
  name: string;
  slug: string;
  className?: string;
} & PropsWithChildren;

export default function Card({
  name,
  slug,
  className,
  children
}: Props) {
  const { push, pathname } = useRouter();

  const handleClick = useCallback(() => {
    push(`${pathname}/${slug}/${name}`);
  }, [name, pathname, push, slug]);

  return (
    <div className={classNames("cursor-pointer card rounded-lg group w-full sm:w-[calc((100%-(1.5rem*1))/2)] lg:w-[calc((100%-(1.5rem*2))/3)] xl:w-[calc((100%-(1.5rem*3))/4)] border border-solid border-neutral-300", className)} onClick={handleClick}>
      {children}
    </div>
  )
}