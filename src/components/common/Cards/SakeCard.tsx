import Typography from "@/components/common/Typography/Typography";
import { TextTag } from "@/components/common/Typography/types";
import ImageWithBlur from "@/components/common/Images/ImageWithBlur";
import styles from '@/components/common/Typography/Typography.module.css';
import Card from "@/components/common/Cards/Card";
import classNames from "classnames";
import AddSvg from '@/components/assets/outlined/add.svg';
import { MouseEventHandler, useCallback } from "react";
import { useTranslation } from "next-i18next";

export type SakeData = {
  image: string;
  name: string;
  about: string;
  alc: number;
  size: number;
  price: number;
}

type Props = {
  item: SakeData;
};

export default function SakeCard({ item }: Props) {
  const { t } = useTranslation('common');

  const handleClick: MouseEventHandler = useCallback((e) => {
    e.stopPropagation();
    console.log('click card');
  }, []);

  return (
    <Card slug='sakes' name={item.name}>
      <div className="relative aspect-[3/2] rounded-tl-lg rounded-tr-lg">
        <ImageWithBlur key={item.name} alt={item.name} src={item.image} sizes="200px"/>
      </div>
      <div className="card-body gap-0 p-0 text-center pb-3">
        <Typography textTag={TextTag.H4} className={classNames(styles['headline-sm'], "py-2 sm:py-3 font-semibold")}>
          {item.name}
        </Typography>
        <Typography textTag={TextTag.H5} className={classNames(styles['headline-xs'], "text-center pb-2 sm:pb-3")}>
          ${item.price}
        </Typography>
        <div className="w-full">
          <button className="min-w-[3.5rem] rounded-md border py-2 px-4 bg-secondary text-white flex items-center justify-center m-auto gap-1" onClick={handleClick}>
            {t('add-to-cart')}
            <AddSvg className='text-white'/>
          </button>
        </div>
      </div>
    </Card>
  );
}
