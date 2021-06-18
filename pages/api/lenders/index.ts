import { BanksGetResponse } from 'lib/types';
import { NextApiRequest, NextApiResponse } from 'next';

export enum BANKS {
  AZE = "bank-of-azeroth",
  MID = "middle-earth-bank",
  NAB = "naboo-bank",
}

const banks: BANKS[] = [BANKS.AZE,BANKS.MID,BANKS.NAB]

const handler = (
  req: NextApiRequest,
  res: NextApiResponse<BanksGetResponse>,
): void => {
  if (req.method !== 'GET') {
    res.status(404);
  } else {
    res.status(200).json({
      banks
    });
  }
};


export default handler