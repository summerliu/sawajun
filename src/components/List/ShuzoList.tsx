import { useTranslation } from "next-i18next";

import Typography from "@/components/common/Typography/Typography";
import { TextTag } from "@/components/common/Typography/types";
import styles from '@/components/common/Typography/Typography.module.css';
import data from '@/data/shuzoData.json';
import ShuzoCard from "@/components/common/Cards/ShuzoCard";

export default function ShuzoList() {
  const { t } = useTranslation('common');
  return (
    <div className="">
      <Typography textTag={TextTag.H1} className={styles['headline-xl']}>
        {t('shuzo')}
      </Typography>

      {data.map((item) => <ShuzoCard key={item.name} item={item} />)}
    </div>
  );
}
