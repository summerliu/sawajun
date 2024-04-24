import { useTranslation } from 'next-i18next';
import { useEffect, useState } from 'react';

export default function I18nSelect() {
  const { i18n } = useTranslation('common');
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const languages = isClient ? i18n.languages : [];

  return (
    <label className="label cursor-pointer px-2 text-sm">
      <span className="label-text">I18n</span>
      <select
        className="mr-1 py-0"
        value={i18n.language}
        onChange={e => {
          i18n.changeLanguage(e.target.value);
        }}
      >
        {languages.map(key => (
          <option key={key} value={key}>
            {key}
          </option>
        ))}
      </select>
    </label>
  );
}
