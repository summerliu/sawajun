import type { GetStaticProps, GetStaticPaths } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useRouter } from 'next/router';

export const getStaticPaths: GetStaticPaths = async() => {
  return {
    paths: [
      { params: { sakeId: 'sakeId' } },
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

export default function Sakes() {
  const router = useRouter();
  const { sakeId } = router.query;

  return (
    <div>
      <h1>Sake ID: {sakeId}</h1>
    </div>
  );
}