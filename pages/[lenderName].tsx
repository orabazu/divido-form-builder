import React, { ReactNode } from 'react';
import { useRouter } from 'next/router';
import { GetStaticProps, NextPage } from 'next';
import { Grid } from '@material-ui/core';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';

import { Formik } from 'formik';

import { server } from 'config';
import { BANKS } from './api/lenders';
import {
  LenderFields,
  LenderGetResponse,
  LenderGetResponseExtended,
} from 'lib/types';

import { createComponent } from 'lib/types/utils';

type Props = {
  children?: ReactNode;
} & {
  lenderData?: LenderGetResponse | LenderGetResponseExtended; // TODO add type here
};

const renderForm = (component: string | LenderFields, handleChange: (e: React.ChangeEvent<any>) => void) => {
  if (typeof component !== 'undefined') {
    console.log(component);
    return createComponent(component, handleChange);
  }
};

const onSubmit = (value: any): void => {
  console.log(value);
};

const LenderNamePage: NextPage = ({ lenderData }: Props) => {
  const router = useRouter();
  const lenderSlug = router.query.lenderName?.toString();
  console.log(lenderData, '231321');
  return (
    <Container maxWidth="sm">
      {lenderSlug} -- {lenderData?.name}{' '}
      <Formik
        initialValues={{}}
        onSubmit={(values) => {
          console.log(values,'2321323213')
          alert(values)
          onSubmit(values);
        }}
      >
        {(formik) => {
          const {
            //   errors,
            //   touched,
            //   isValid,
            //   dirty,
              handleChange,
            // handleSubmit,
            //   values,
            submitForm
          } = formik;
          console.log(formik);
          return (
            <form onSubmit={submitForm}>
              <Grid
                container
                direction="column"
                justify="center"
                alignItems="stretch"
              >
                {lenderData?.fields.map((component: string | LenderFields) =>
                  renderForm(component, handleChange),
                )}
                <Button variant="contained" color="primary" type="submit">
                  Primary
                </Button>
              </Grid> 
            </form>
          );
        }}
      </Formik>
      {/* <Typography2>jojo</Typography2> */}
    </Container>
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
