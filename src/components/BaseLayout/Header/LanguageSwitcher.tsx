import { useTranslation } from 'next-i18next';
import { useEffect, useState } from 'react';
import LanguageSvg from '@/components/assets/outlined/language.svg';

export default function I18nSelect() {
  const { i18n } = useTranslation('common');
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedLanguage = e.target.value;
    i18n.changeLanguage(selectedLanguage);
  };

  const languages = isClient ? i18n.languages : [];

  return (
    <label className="label cursor-pointer px-2 text-sm flex items-center">
      <LanguageSvg viewBox="0 0 24 24" className="w-4 h-4 mr-2" />
      <select
        className="mr-4 py-0"
        value={i18n.language}
        onChange={handleLanguageChange}
      >
        {languages.length && languages.map((lang) => (
          <option key={lang} value={lang}>
            {lang}
          </option>
        ))}
      </select>
    </label>
  );
}
