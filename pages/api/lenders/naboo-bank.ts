import { NextApiRequest, NextApiResponse } from 'next';

import { LenderResponse } from '.';

export const nabooBankData: LenderResponse = {
  name: 'Naboo Bank',
  fields: ['first_name', 'last_name', 'gender', 'monthly_income', 'address'],
};

const handler = (_: NextApiRequest, res: NextApiResponse<LenderResponse>) => {
  res.status(200).json(nabooBankData);
};

export default handler;
