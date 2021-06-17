import React from 'react';
import dynamic from 'next/dynamic';

import { LenderFields } from '..';

const TextField = dynamic(() => import('@material-ui/core/TextField'));
const Chip = dynamic(() => import('@material-ui/core/Chip'));
const Checkbox = dynamic(() => import('@material-ui/core/Checkbox'));
const Radio = dynamic(() => import('../../../components/Radiox'));

const getActualComponent = (
  fieldName: string | LenderFields,
  handleChange: (e: React.ChangeEvent<any>) => void,
): {
  component: React.ComponentType<any>;
  props: React.ComponentProps<any>;
} => {
  let res;
  let isStr = typeof fieldName === 'string';
  let componentType = isStr ? fieldName : (fieldName as LenderFields).type;
  const label = isStr ? fieldName : (fieldName as LenderFields).name;
  const name = isStr ? fieldName : (fieldName as LenderFields).name;
  let componentProps = isStr ? {} : fieldName;
  switch (componentType) {
    case 'first_name':
    case 'last_name':
    case 'text':
      res = {
        component: TextField,
        props: {
          type: 'text',
          label,
          name,
          onChange: handleChange,
          ...componentProps,
        },
      };
      break;
    case 'email':
      res = {
        component: TextField,
        props: {
          type: 'email',
          label,
          name,
          onChange: handleChange,
          ...componentProps,
        },
      };
      break;
    case 'date_of_birth':
      res = {
        component: TextField,
        props: {
          type: 'date',
          label,
          name,
          onChange: handleChange,
          ...componentProps,
        },
      };
      break;
    case 'monthly_income':
      res = {
        component: TextField,
        props: {
          type: 'number',
          label,
          name,
          onChange: handleChange,
          ...componentProps,
        },
      };
      break;
    case 'gender':
    case 'select':
      res = {
        component: Radio,
        props: {
          type: 'number',
          label,
          name,
          onChange: handleChange,
          ...componentProps,
        },
      };
      break;
    case 'checkbox':
      res = {
        component: Checkbox,
        props: {
          label,
          name,
          onChange: handleChange,
          ...componentProps,
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

export const createComponent = (
  fieldName: string | LenderFields,
  handleChange: (e: React.ChangeEvent<any>) => void,
) => {
  const { component, props } = getActualComponent(fieldName, handleChange);
  return React.createElement(component, props, 'asdd');
};
