// import LanguageSwitcher from '@/components/BaseLayout/Footer/LanguageSwitcher';
// import Logo from '@/components/BaseLayout/Header/Logo';
// import DevTools from '@/components/DevTools';
// import Body from '@/components/common/Typography/Body';
// import { TextSize } from '@/components/common/Typography/types';

export default function Footer() {
  return (
    <footer className="footer footer-center min-w-[20rem] bg-base-200 px-4 py-0 text-base-content sm:px-6 xl:px-8">
      <div className="flex w-full flex-col items-center justify-center border-b-[1px] border-b-og-neutral-300 pb-4 pt-8 lg:pb-6 lg:pt-10">
        {/* <Logo className="mb-4" /> */}

      </div>
      <div className="mb-4 flex flex-col items-center sm:flex-row lg:mb-6">
        <div className="sm:order-last">
          {/* <Body sizes={TextSize.Xs}>
            ViewSonic 2017-2024. © All Rights Reserved.
          </Body> */}
        </div>
        <div className="grid grid-flow-col gap-4 sm:me-10">
          {/* @todo: links, i18n? */}
          {/* <Body sizes={TextSize.Xs}>Privacy Policy</Body>
          <Body sizes={TextSize.Xs}>Terms of Use</Body> */}
        </div>
      </div>
    </footer>
  );
}
