import React, { ReactNode, useState } from 'react';
import { useRouter } from 'next/router';
import { GetStaticProps, NextPage } from 'next';
import Image from 'next/image';
import { Grid } from '@material-ui/core';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';
import Typography from '@material-ui/core/Typography';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';
import { Formik } from 'formik';

import { server } from 'config';
import { BANKS } from './api/lenders';
import {
  LenderFields,
  LenderGetResponse,
  LenderGetResponseExtended,
} from 'lib/types';
import { createComponent } from 'lib/utils';

import styles from '../styles/lenderName.module.css';
type Props = {
  children?: ReactNode;
} & {
  lenderData?: LenderGetResponse | LenderGetResponseExtended; // TODO add type here
};

const renderForm = (
  component: string | LenderFields,
  handleChange: (e: React.ChangeEvent<any>) => void,
) => {
  if (typeof component !== 'undefined') {
    return createComponent(component, handleChange);
  }
};

const onSubmite = async (
  values: any,
  lenderSlug: any,
): Promise<{ decision: string }> => {
  const rawRes = await fetch(`${server}/api/lenders/${lenderSlug}`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(values),
  });

  const res = await rawRes.json();
  return res;
};

const LenderNamePage: NextPage = ({ lenderData }: Props) => {
  const router = useRouter();
  const lenderSlug = router.query.lenderName?.toString();
  const [decision, setDecision] = useState('');
  const [isOpen, setIsOpen] = useState(false);

  const handleSnackBar = (
    _event: React.SyntheticEvent | React.MouseEvent,
    reason?: string,
  ) => {
    if (reason === 'clickaway') {
      return;
    }

    setIsOpen(false);
  };

  const renderSnackBar = (isOpen: boolean, message: string | null) => {
    return (
      <Snackbar
        open={isOpen}
        autoHideDuration={1000}
        onClose={handleSnackBar}
        message={message}
      />
    );
  };

  return (
    <Container maxWidth="lg">
      <Grid container spacing={2}>
        <Grid item>
          <Breadcrumbs aria-label="breadcrumb">
            <Link color="inherit" href="/">
              Home
            </Link>
            <Typography color="textPrimary">{lenderSlug}</Typography>
          </Breadcrumbs>
          <Image
            width="auto"
            height="250px"
            src={`/${lenderSlug}.svg`}
            className={styles.Image}
          />
        </Grid>
        <Grid item>
          <Typography variant="h2" gutterBottom>
            {lenderData?.name}
          </Typography>
          <Formik
            initialValues={{}}
            onSubmit={async (values) => {
              const res = await onSubmite(values, lenderSlug);

              setIsOpen(true);
              setDecision(res.decision);
            }}
          >
            {(formik) => {
              const { handleChange, handleSubmit } = formik;
              return (
                <form onSubmit={handleSubmit}>
                  <Grid
                    container
                    direction="column"
                    justify="center"
                    alignItems="stretch"
                  >
                    {lenderData?.fields.map(
                      (component: string | LenderFields) =>
                        renderForm(component, handleChange),
                    )}
                    <Button variant="contained" color="primary" type="submit">
                      Register
                    </Button>
                  </Grid>
                </form>
              );
            }}
          </Formik>
          {renderSnackBar(isOpen, decision)}
        </Grid>
      </Grid>
    </Container>
  );
};

export const getStaticProps: GetStaticProps = async (context) => {
  const res = await fetch(
    `${server}/api/lenders/${
      context.params?.lenderName ? context.params?.lenderName : ''
    }`,
  );

  if (res.status !== 200)
    throw String(`Invalid server response: ${res.status} ${res.statusText}`);

  const lenderData = await res.json();
  return {
    props: {
      lenderData,
    },
  };
};

export const getStaticPaths = async () => {
  const res = await fetch(`${server}/api/lenders`);

  if (res.status !== 200)
    throw String(`Invalid server response: ${res.status} ${res.statusText}`);

  const { banks } = await res.json();

  const paths = banks.map((b: BANKS) => ({ params: { lenderName: b } }));

  return {
    paths,
    fallback: false,
  };
};

export default LenderNamePage;
