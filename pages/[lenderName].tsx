import React, { FC } from 'react';
import { useRouter } from 'next/router';

import { Grid } from '@material-ui/core';

const lenderNamePage: FC = () => {
  const router = useRouter();
  const lenderSlug = router.query.lenderName?.toString();

  return <Grid container>{lenderSlug}</Grid>;
};

export default lenderNamePage;
