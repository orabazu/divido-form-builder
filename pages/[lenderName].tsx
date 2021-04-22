import { useRouter } from 'next/router';
import { Grid } from '@material-ui/core';
import { NextPage } from 'next';

const LenderNamePage: NextPage = () => {
  const router = useRouter();
  const lenderSlug = router.query.lenderName?.toString();

  return <Grid container>{lenderSlug}</Grid>;
};

export default LenderNamePage;
