import { useTranslation } from "next-i18next";

import Typography from "@/components/common/Typography/Typography";
import { TextTag } from "@/components/common/Typography/types";

export default function ShuzoList() {
  const { t } = useTranslation('common');
  return (
    <div className="">
      <Typography textTag={TextTag.H1}>
        {t('shuzo')}
      </Typography>
      <div className="flex-1">
        
      </div>
    </div>
  );
}
