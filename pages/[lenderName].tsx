import React, { ReactNode } from 'react';
import { useRouter } from 'next/router';
import { Grid } from '@material-ui/core';
import { GetStaticProps, NextPage } from 'next';
import dynamic from 'next/dynamic'

import { server } from 'config';
import { BANKS } from './api/lenders';
import { LenderFields, LenderGetResponse, LenderGetResponseExtended } from 'lib/types';

import { createComponent } from 'lib/types/utils';



type Props = {
  children?: ReactNode;
} & {
  lenderData?: LenderGetResponse | LenderGetResponseExtended; // TODO add type here
};

const renderForms = (component: string | LenderFields) => {
  if (typeof component !== 'undefined') {
    console.log(component);
    return createComponent(component)
  }
};

const LenderNamePage: NextPage = ({ lenderData }: Props) => {
  const router = useRouter();
  const lenderSlug = router.query.lenderName?.toString();
  console.log(lenderData, '231321');
  return (
    <Grid container>
      {lenderSlug} -- {lenderData?.name}{' '}
      {lenderData?.fields.map((component: string | LenderFields) =>
        renderForms(component),
      )}
      {/* <Typography2>jojo</Typography2> */}
    </Grid>
  );
};

export const getStaticProps: GetStaticProps = async (context) => {
  const res = await fetch(
    `${server}/api/lenders/${
      context.params?.lenderName ? context.params?.lenderName : ''
    }`,
  ); // TODO remove !

  const lenderData = await res.json();
  console.log(lenderData, 'lenderData');
  return {
    props: {
      lenderData,
    },
  };
};

export const getStaticPaths = async () => {
  const res = await fetch(`${server}/api/lenders`);

  const { banks } = await res.json();

  console.log(banks);

  const paths = banks.map((b: BANKS) => ({ params: { lenderName: b } }));

  return {
    paths,
    fallback: false,
  };
};

export default LenderNamePage;
