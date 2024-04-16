import { useTranslation } from "next-i18next";

export default function SakeList() {
  const { t } = useTranslation('common');
  return (
    <div className="">
      <div className="flex-1">
        {t('sake')}
      </div>
    </div>
  );
}
