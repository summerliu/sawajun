import Typography from "@/components/common/Typography/Typography";
import { TextTag } from "@/components/common/Typography/types";
import ImageWithBlur from "@/components/common/Images/ImageWithBlur";
import styles from '@/components/common/Typography/Typography.module.css';
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

  return (
    <Card slug='shuzos' name={item.name} className="border border-solid border-neutral-300">
      <div className="relative aspect-[1/1] rounded-tl-lg rounded-tr-lg">
        <ImageWithBlur key={item.name} alt={item.name} src={item.images[0]} sizes="200px"/>
      </div>
      <div className="card-body gap-0 p-0">
        <div className="py-2 sm:py-3 font-bold px-4 sm:px-6">
          <Typography textTag={TextTag.H4} className={styles['headline-sm']}>
            {item.name}
          </Typography>
        </div>
        {item.title &&
        <div className="py-2 sm:py-3 px-4 sm:px-6 text-gray-600">
          <Typography textTag={TextTag.H5} className={styles['headline-xs']}>
            {item.title}
          </Typography>
        </div>}
      </div>
    </Card>
  );
}
