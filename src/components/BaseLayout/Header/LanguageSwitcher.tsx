import { useTranslation } from 'next-i18next';

function distinct<T>(arr: Array<T>) {
  return Array.from(new Set<T>(arr));
}

export default function I18nSelect() {
  const { i18n } = useTranslation('common');

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
        {distinct(i18n.languages.concat('cimode')).map(key => (
          <option key={key} value={key}>
            {key}
          </option>
        ))}
      </select>
    </label>
  );
}
