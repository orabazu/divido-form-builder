import { NextApiRequest, NextApiResponse } from 'next';

import { LenderGetResponseExtended, LenderPostResponse } from 'lib/types';

export const nabooBankData: LenderGetResponseExtended = {
  name: 'Naboo Bank',
  fields: [
    { name: 'first_name', type: 'text', required: true },
    { name: 'last_name', type: 'text', required: true },
    {
      name: 'gender',
      type: 'select',
      required: true,
      options: ['opt1', 'opt2', 'opt3'],
    },
    { name: 'contractor', type: 'checkbox', required: false },
  ],
};

const handler = (
  req: NextApiRequest,
  res: NextApiResponse<LenderGetResponseExtended | LenderPostResponse>,
): void => {
  if (req.method === 'POST') {
    const decision = Math.random() > 0.5 ? 'accepted' : 'declined';
    res.status(200).json({ decision });
  } else {
    res.status(200).json(nabooBankData);
  }
};

export default handler;
