import Logo from '@/components/BaseLayout/Header/Logo';
import LanguageSwitcher from '@/components/BaseLayout/Header/LanguageSwitcher';

export default function Header() {
  return (
    <header className="navbar min-w-[20rem] items-stretch border-b-[1px] border-b-neutral-300 px-4 py-0">
      <div className="flex-1">
        <Logo />
      </div>
      <div className="flex-none">
        <LanguageSwitcher/>
      </div>
    </header>
  );
}
