import Typography from "@/components/common/Typography/Typography";
import { TextTag } from "@/components/common/Typography/types";
import ImageWithBlur from "@/components/common/Images/ImageWithBlur";
import styles from '@/components/common/Typography/Typography.module.css';
import { useTranslation } from "next-i18next";

type ItemData = {
  image: string;
  title: string;
  about: string;
  alc: number;
  size: number;
  price: {
    wholesale: number;
    retail: number;
  }
}

type Props = {
  item: ItemData;
};

export default function Card({item}: Props) {
  const { t } = useTranslation('common');

  return (
    <div className="card rounded-lg group hover:shadow-md w-full sm:w-[calc((100%-(1.5rem*1))/2)] lg:w-[calc((100%-(1.5rem*2))/3)] xl:w-[calc((100%-(1.5rem*3))/4)]">
      <div className="relative aspect-[3/2] rounded-tl-lg rounded-tr-lg">
        <ImageWithBlur key={item.title} alt={item.title} src={item.image} sizes="200px"/>
      </div>
      <div className="card-body gap-0 p-0">
        <div className="flex items-start py-3 sm:py-4">
          <Typography textTag={TextTag.H4} className={styles['headline-sm']}>
            {item.title}
          </Typography>
        </div>
        <div className="flex flex-row items-start gap-3 sm:gap-3">
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
    </div>
  );
}
