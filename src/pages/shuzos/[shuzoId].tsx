import type { GetStaticProps, GetStaticPaths } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useRouter } from 'next/router';

export const getStaticPaths: GetStaticPaths = async() => {
  return {
    paths: [
      { params: { shuzoId: 'shuzoId' } },
    ],
    fallback: true,
  }
}
export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale ?? "zh-TW", [
        "common",
      ])),
    },
  };
};

export default function Shuzos() {
  const router = useRouter();
  const { shuzoId } = router.query;

  return (
    <div>
      <h1>Shuzo ID: {shuzoId}</h1>
    </div>
  );
}