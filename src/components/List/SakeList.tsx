import Card from "@/components/common/Cards/Card";
import data from '@/data/data.json';

export default function SakeList() {
  return (
    <div className="flex flex-wrap gap-y-6 sm:gap-x-6 sm:gap-y-8">
      {data.products.map((item) => <Card key={item.title} item={item}/>)}
    </div>
  );
}
