import React from 'react';
import dynamic from 'next/dynamic';

import { LenderFields } from '../types';

const TextField = dynamic(() => import('@material-ui/core/TextField'));
const Chip = dynamic(() => import('@material-ui/core/Chip'));
const Checkbox = dynamic(() => import('components/CheckboxComponent'));
const Radio = dynamic(() => import('components/RadioComponent'));

const getComponentWithProps = (
  fieldName: string | LenderFields,
  handleChange: (e: React.ChangeEvent<any>) => void,
): {
  component: React.ComponentType<any>;
  props: React.ComponentProps<any>;
} => {
  let component;
  const isStr = typeof fieldName === 'string';
  const componentType = isStr ? fieldName : (fieldName as LenderFields).type;
  const label = isStr ? getLabel()[fieldName as string] : getLabel()[(fieldName as LenderFields).name];
  const name = isStr ? fieldName : (fieldName as LenderFields).name;
  const defaultProps = isStr ? {} : fieldName;

  switch (componentType) {
    case 'first_name':
    case 'last_name':
    case 'text':
      component = {
        component: TextField,
        props: {
          type: 'text',
          label,
          name,
          onChange: handleChange,
          ...defaultProps,
        },
      };
      break;
    case 'email':
      component = {
        component: TextField,
        props: {
          type: 'email',
          label,
          name,
          onChange: handleChange,
          ...defaultProps,
        },
      };
      break;
    case 'date_of_birth':
      component = {
        component: TextField,
        props: {
          type: 'date',
          label,
          name,
          onChange: handleChange,
          ...defaultProps,
        },
      };
      break;
    case 'monthly_income':
      component = {
        component: TextField,
        props: {
          type: 'number',
          label,
          name,
          onChange: handleChange,
          ...defaultProps,
        },
      };
      break;
    case 'gender':
    case 'select':
      component = {
        component: Radio,
        props: {
          type: 'number',
          label,
          name,
          onChange: handleChange,
          ...defaultProps,
        },
      };
      break;
    case 'checkbox':
      component = {
        component: Checkbox,
        props: {
          label,
          name,
          onChange: handleChange,
          ...defaultProps,
        },
      };
      break;
    default:
      component = {
        component: Chip,
        props: {
          label: 'Unknown Component',
        },
      };
      break;
  }

  return component;
};

export const createComponent = (
  fieldName: string | LenderFields,
  handleChange: (e: React.ChangeEvent<any>) => void,
) => {
  const { component, props } = getComponentWithProps(fieldName, handleChange);
  return React.createElement(component, props, 'asdd');
};


export const getLabel = () :{[k:string]: string} => ({
  first_name: 'First Name',
  last_name: 'Last Name',
  email: 'Email',
  gender: 'Gender',
  monthly_income: 'Monthly Income',
  date_of_birth: 'Date of Birth',
  contractor: 'Contractor'
})
