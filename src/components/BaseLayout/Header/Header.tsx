// import Logo from '@/components/BaseLayout/Header/Logo';
// import NavDrawer from '@/components/BaseLayout/Header/NavDrawer/NavDrawer';
// import NavMenu from '@/components/BaseLayout/Header/NavMenu/NavMenu';
// import UserAction from '@/components/BaseLayout/Header/UserAction';

export default function Header() {
  return (
    <header className="navbar min-w-[20rem] items-stretch border-b-[1px] border-b-og-neutral-300 px-4 py-0">
      <div className="flex-none sm:hidden">
        {/* <NavDrawer /> */}
      </div>
      <div className="flex-1">
        {/* <Logo className="me-6" />
        <NavMenu /> */}
      </div>
      <div className="flex-none">
        {/* <UserAction /> */}
      </div>
    </header>
  );
}
