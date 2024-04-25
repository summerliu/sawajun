import Typography from "@/components/common/Typography/Typography";
import { TextTag } from "@/components/common/Typography/types";
import ImageWithBlur from "@/components/common/Images/ImageWithBlur";
import styles from '@/components/common/Typography/Typography.module.css';
import { useTranslation } from "next-i18next";
import Card from "@/components/common/Cards/Card";

export type ShuzoData = {
  id: string;
  name: string;
  title: string;
  description: string;
  images: string[];
}

type Props = {
  item: ShuzoData;
};

export default function ShuzoCard({ item }: Props) {
  const { t } = useTranslation('common');

  return (
    <Card slug='shuzos' name={item.name}>
      <div className="relative aspect-[3/2] rounded-tl-lg rounded-tr-lg">
        <ImageWithBlur key={item.name} alt={item.name} src={item.images[0]} sizes="200px"/>
      </div>
      <div className="card-body gap-0 p-0">
        <div className="flex items-start py-2 sm:py-3 font-bold">
          <Typography textTag={TextTag.H4} className={styles['headline-sm']}>
            {item.name}
          </Typography>
        </div>
        {item.title && 
        <div className="flex flex-col items-start gap-3 sm:gap-3 text-gray-600">
          <Typography textTag={TextTag.H5} className={styles['headline-xs']}>
            {t('wholesale')}
          </Typography>
          <Typography textTag={TextTag.H5} className={styles['headline-xs']}>
            {item.title}
          </Typography>
        </div>}
        <div className="flex flex-col gap-3 sm:gap-3">
          <Typography textTag={TextTag.H5} className={styles['headline-xs']}>
            {t('wholesale')}
          </Typography>
          <Typography textTag={TextTag.H5} className={styles['headline-xs']}>
            {item.description}
          </Typography>
        </div>
      </div>
    </Card>
  );
}
