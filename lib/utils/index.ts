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
  let componentType : string | LenderFields
  let label: string
  let name: string
  let defaultProps : {}

  if(isStr){
    componentType = fieldName
    label = getLabel()[fieldName as string]
    name = fieldName as string
    defaultProps = {
      label,
      name,
      onChange: handleChange,
    }
  } else {
    componentType = (fieldName as LenderFields).type;
    label = getLabel()[(fieldName as LenderFields).name];
    name = (fieldName as LenderFields).name;
    defaultProps = {
      label,
      onChange: handleChange,
      ...fieldName as LenderFields,
    }
  }
  
  switch (componentType) {
    case 'first_name':
    case 'last_name':
    case 'text':
      component = {
        component: TextField,
        props: {
          type: 'text',
          ...defaultProps,
        },
      };
      break;
    case 'email':
      component = {
        component: TextField,
        props: {
          type: 'email',
          ...defaultProps,
        },
      };
      break;
    case 'date_of_birth':
      component = {
        component: TextField,
        props: {
          type: 'date',
          ...defaultProps,
        },
      };
      break;
    case 'monthly_income':
      component = {
        component: TextField,
        props: {
          type: 'number',
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
          ...defaultProps,
        },
      };
      break;
    case 'checkbox':
      component = {
        component: Checkbox,
        props: {
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
  return React.createElement(component, props);
};

export const getLabel = (): { [k: string]: string } => ({
  first_name: 'First Name',
  last_name: 'Last Name',
  email: 'Email',
  gender: 'Gender',
  monthly_income: 'Monthly Income',
  date_of_birth: 'Date of Birth',
  contractor: 'Contractor',
});
