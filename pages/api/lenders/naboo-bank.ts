import { NextApiRequest, NextApiResponse } from 'next';

import { LenderGetResponse, LenderPostResponse } from 'lib/types';

export const nabooBankData: LenderGetResponse = {
  name: 'Naboo Bank',
  fields: ['first_name', 'last_name', 'gender', 'monthly_income', 'address'],
};

const handler = (
  req: NextApiRequest,
  res: NextApiResponse<LenderGetResponse | LenderPostResponse>,
): void => {
  if (req.method === 'POST') {
    const decision = Math.random() > 0.5 ? 'accepted' : 'declined';
    res.status(200).json({ decision });
  } else {
    res.status(200).json(nabooBankData);
  }
};

export default handler;
