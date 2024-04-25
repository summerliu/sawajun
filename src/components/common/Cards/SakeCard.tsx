import Typography from "@/components/common/Typography/Typography";
import { TextTag } from "@/components/common/Typography/types";
import ImageWithBlur from "@/components/common/Images/ImageWithBlur";
import styles from '@/components/common/Typography/Typography.module.css';
import { useTranslation } from "next-i18next";
import Card from "@/components/common/Cards/Card";

export type SakeData = {
  image: string;
  name: string;
  about: string;
  alc: number;
  size: number;
  price: {
    wholesale: number;
    retail: number;
  }
}

type Props = {
  item: SakeData;
};

export default function SakeCard({ item }: Props) {
  const { t } = useTranslation('common');

  return (
    <Card slug='sakes' name={item.name}>
      <div className="relative aspect-[3/2] rounded-tl-lg rounded-tr-lg">
        <ImageWithBlur key={item.name} alt={item.name} src={item.image} sizes="200px"/>
      </div>
      <div className="card-body gap-0 p-0">
        <div className="flex items-start py-2 sm:py-3 font-bold">
          <Typography textTag={TextTag.H4} className={styles['headline-sm']}>
            {item.name}
          </Typography>
        </div>
        <div className="flex flex-row items-start gap-3 sm:gap-3 text-gray-600">
          <Typography textTag={TextTag.Span} className={styles['body-xs']}>
            {item.alc}%
          </Typography>
          <Typography textTag={TextTag.Span} className={styles['body-xs']}>
            {item.size}ml
          </Typography>
        </div>
        <div className="flex flex-row gap-3 sm:gap-3">
          <Typography textTag={TextTag.H5} className={styles['headline-xs']}>
            {t('wholesale')}: ${item.price.wholesale}
          </Typography>
          <Typography textTag={TextTag.H5} className={styles['headline-xs']}>
            {t('retail')}: ${item.price.retail}
          </Typography>
        </div>
      </div>
    </Card>
  );
}
