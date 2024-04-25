import SakeCard from "@/components/common/Cards/SakeCard";
import data from '@/data/sakeData.json';

export default function SakeList() {
  return (
    <div className="flex flex-wrap gap-y-7 sm:gap-x-6 sm:gap-y-9">
      {data[0].products.map((item) => <SakeCard key={item.name} item={item} />)}
    </div>
  );
}
