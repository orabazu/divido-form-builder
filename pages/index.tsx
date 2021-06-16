import { Typography, Link, List, ListItem } from '@material-ui/core';
import { GetStaticProps, NextPage } from 'next';
import { server } from 'config';
import { BANKS } from './api/lenders';

const HomePage: NextPage = () => {
  const lenders = [
    { name: 'Bank of Azeroth', slug: 'bank-of-azeroth' },
    { name: 'Middle Earth Bank', slug: 'middle-earth-bank' },
    { name: 'Naboo Bank', slug: 'naboo-bank' },
  ];

  return (
    <>
      <Typography variant="h5" component="h5">
        fe-react-chg-ts
      </Typography>
      <List>
        {lenders.map((lender) => (
          <ListItem key={lender.name}>
            <Link data-testid={lender.slug} href={`/${lender.slug}`}>
              {lender.name}
            </Link>
          </ListItem>
        ))}
      </List>
    </>
  );
};



export default HomePage;
