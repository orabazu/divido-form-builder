export interface LenderGetResponse {
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

export interface LenderGetResponseExtended {
  name: string;
  fields: Array<LenderFields>;
}

export interface LenderFields {
  name: string;
  type: string;
  required: boolean;
  options?: Array<string>;
}

export interface LenderPostResponse {
  decision: 'accepted' | 'declined';
}
