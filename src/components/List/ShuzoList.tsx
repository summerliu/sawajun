import { useTranslation } from "next-i18next";

export default function ShuzoList() {
  const { t } = useTranslation('common');
  return (
    <div className="">
      <div className="flex-1">
        {t('shuzo')}
      </div>
    </div>
  );
}
