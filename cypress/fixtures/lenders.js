const azeroth = {
  initialValues: {
    first_name: '',
    last_name: '',
    email: '',
    monthly_income: '',
  },
  name: 'Bank of Azeroth',
  slug: 'bank-of-azeroth',
};

const middleEarth = {
  name: 'Middle Earth Bank',
  slug: 'middle-earth-bank',
  initialValues: {
    first_name: '',
    email: '',
    date_of_birth: '',
    monthly_income: '',
  },
};

const naboo = {
  name: 'Naboo Bank',
  slug: 'naboo-bank',
  initialValues: {
    first_name: '',
    last_name: '',
    gender: '',
    monthly_income: '',
    address: '',
  },
};

export default function getLendersList() {
  const mockedApiResult = [azeroth, middleEarth, naboo];

  return mockedApiResult;
}
