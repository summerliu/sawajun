import Logo from '@/components/BaseLayout/Header/Logo';
import LanguageSwitcher from '@/components/BaseLayout/Header/LanguageSwitcher';
import NavDrawer from '@/components/BaseLayout/Header/NavDrawer/NavDrawer';
import { useTranslation } from 'react-i18next';
import NavLink from '@/components/BaseLayout/Header/NavLink';

export default function Header() {
  const { t } = useTranslation('common');
  return (
    <header className="navbar min-w-[20rem] items-stretch border-b-[1px] border-b-neutral-300 px-4 py-0">
      <div className="flex-none sm:hidden">
        <NavDrawer title={t('categories.course')}>
          <NavLink path='/' name='test'/>
        </NavDrawer>
      </div>
      <div className="flex-1">
        <Logo />
        <div role="menubar" className="mb-[-2px] hidden h-full sm:block">
        </div>
      </div>
      <div className="flex-none">
        <LanguageSwitcher/>
      </div>
    </header>
  );
}
