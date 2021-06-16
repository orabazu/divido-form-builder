import React from 'react';
import dynamic from 'next/dynamic';

import { LenderFields, LenderGetResponse } from '..';

const TextField = dynamic(() =>
  import('@material-ui/core/TextField').finally(() =>
    console.log('loaded TextField'),
  ),
);

const Chip = dynamic(() =>
  import('@material-ui/core/Chip').finally(() => console.log('loaded Chip')),
);

const Checkbox = dynamic(() =>
  import('@material-ui/core/Checkbox').finally(() => console.log('loaded Checkbox')),
);

const Radio = dynamic(() =>
  import('../../../components/Radiox').finally(() => console.log('loaded radio')),
);


const getActualComponent = (
  fieldName: string | LenderFields,
): {
  component: React.ComponentType<any>;
  props: React.ComponentProps<any>;
} => {
  let res;
  let isStr = typeof fieldName === 'string'
  let componentType =  isStr ? fieldName : (fieldName as LenderFields).type
  let componentProps = isStr ? {} : fieldName
  switch (componentType) {
    case 'first_name':
    case 'last_name':
    case 'text':
      res = {
        component: TextField,
        props: {
          type: 'text',
          ...componentProps
        },
      };
      break;
    case 'email':
      res = {
        component: TextField,
        props: {
          type: 'email',
          ...componentProps
        },
      };
      break;
    case 'date_of_birth':
      res = {
        component: TextField,
        props: {
          type: 'date',
          ...componentProps
        },
      };
      break;
    case 'monthly_income':
      res = {
        component: TextField,
        props: {
          type: 'number',
          ...componentProps
        },
      };
      break;
    case 'gender':
    case 'select':
      res = {
        component: Radio,
        props: {
          type: 'number',
          ...componentProps
        },
      };
      break;
    case 'checkbox':
      res = {
        component: Checkbox,
        props: {
          ...componentProps
        },
      };
      break;
    default:
      res = {
        component: Chip,
        props: {
          label: 'Unknown Component',
        },
      };
      break;
  }

  return res;
};

// | 'first_name'
// | 'last_name'
// | 'email'
// | 'date_of_birth'
// | 'monthly_income'
// | 'gender'
// | 'address'

export const createComponent = (fieldName: string | LenderFields) => {
  const { component, props } = getActualComponent(fieldName);
  return React.createElement(component, props, 'asdd');
};
