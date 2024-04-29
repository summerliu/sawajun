import Link from 'next/link';

import { TextTag } from '@/components/common/Typography/types';
import Typography from '@/components/common/Typography/Typography';

type Props = {
  path: string;
  name: string;
};

export default function NavLink({ path, name }: Props) {
  return (
    <li role="menuitem">
      <Link
        href={path}
        className="px-3 active:!bg-neutral-300"
        prefetch={false}
      >
        <Typography
          textTag={TextTag.Span}
          className="break-all"
        >
          {name}
        </Typography>
      </Link>
    </li>
  );
}
