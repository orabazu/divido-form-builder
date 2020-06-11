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

export interface LenderPostResponse {
  decision: 'accepted' | 'declined';
}
