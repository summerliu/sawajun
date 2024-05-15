import classnames from "classnames";

import Typography from "@/components/common/Typography/Typography";
import { TextTag } from "@/components/common/Typography/types";
import styles from '@/components/common/Typography/Typography.module.css';

type Props = {
  className?: string;
  price: number;
}

export default function Price({
  className,
  price
}: Props) {
  return (
    <Typography textTag={TextTag.H5} className={classnames(styles['headline-xs'], 'h-6', className)}>
      ${price}
    </Typography>
  );
}
