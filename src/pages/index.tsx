import SakeList from '@/components/List/SakeList'
import ShuzoList from '@/components/List/ShuzoList'
import { GetStaticProps } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale ?? "zh-TW", [
        "common",
      ])),
    },
  };
};

export default function Home() {
  return (
    <div>
      <ShuzoList/>
      <SakeList/>
    </div>
  )
}
