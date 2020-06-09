import { NextApiResponse, NextApiRequest } from 'next';

import { bankOfAzerothData } from './bank-of-azeroth';
import { middleEarthBankData } from './middle-earth-bank';
import { nabooBankData } from './naboo-bank';

export interface LenderResponse {
  name: string;
  fields: Array<
    | 'first_name'
    | 'last_name'
    | 'email'
    | 'date_of_birth'
    | 'monthly_income'
    | 'gender'
    | 'address'
  >;
}

const handler = (_: NextApiRequest, res: NextApiResponse<LenderResponse[]>) => {
  res.status(200).json([nabooBankData, middleEarthBankData, bankOfAzerothData]);
};

export default handler;
