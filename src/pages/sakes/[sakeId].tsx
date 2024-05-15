import Typography from '@/components/common/Typography/Typography';
import { TextTag } from '@/components/common/Typography/types';
import type { GetStaticProps, GetStaticPaths } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useRouter } from 'next/router';
import styles from '@/components/common/Typography/Typography.module.css';
import classNames from 'classnames';

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
    <div className='flex w-full flex-col'>
      <Typography className={classNames(styles['headline-sm'], 'mb-2 flex md:mb-3')} textTag={TextTag.H4}>
        {sakeId}
      </Typography>
    </div>
  );
}