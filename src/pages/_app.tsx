import BaseLayout from '@/components/BaseLayout/BaseLayout'
import '@/styles/globals.css'
import { appWithTranslation } from 'next-i18next';
import type { AppProps } from 'next/app'

import nextI18nConfig from '../../next-i18next.config';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <BaseLayout>
      <Component {...pageProps} />
    </BaseLayout>
  )
}

const App = appWithTranslation(MyApp, nextI18nConfig);
export default App;