import { NextApiRequest, NextApiResponse } from 'next';

import { LenderResponse } from '.';

export const bankOfAzerothData: LenderResponse = {
  name: 'Bank of Azeroth',
  fields: ['first_name', 'last_name', 'email', 'gender', 'monthly_income'],
};

const handler = (_: NextApiRequest, res: NextApiResponse<LenderResponse>) => {
  res.status(200).json(bankOfAzerothData);
};

export default handler;
