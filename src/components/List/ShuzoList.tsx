import { useTranslation } from "next-i18next";

import Typography from "@/components/common/Typography/Typography";
import { TextTag } from "@/components/common/Typography/types";
import styles from '@/components/common/Typography/Typography.module.css';
import data from '@/data/data.json';
import ShuzoCard from "@/components/common/Cards/ShuzoCard";

export default function ShuzoList() {
  const { t } = useTranslation('common');
  return (
    <div className="pb-12">
      <Typography textTag={TextTag.H1} className={styles['headline-xl']}>
        {t('shuzo')}
      </Typography>

      <div className="flex flex-wrap gap-y-7 sm:gap-x-6 sm:gap-y-9">
        {data.map((item) => <ShuzoCard key={item.name} item={item} />)}
      </div>
    </div>
  );
}
