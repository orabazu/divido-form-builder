# Frontend Code Test

Hey :wave:, thanks for taking the time to do our technical test!

## Task

Your goal is to build a product called Application Form. This product will dynamically generate a form based on data received from an API using React and GraphQL. Use GraphQL as a proxy between the frontend and the REST APIs.

There are three banks requesting an Application Form:

- Bank of Azeroth
- Naboo Bank
- Middle Earth Bank

### Requirements

```
As a user
When I go to /:lender-name
I want to see the form for the lender
So that I can apply for a bank loan
```

```
As a user
When I submit the form
I want to know if I was accepted or declined
```

### REST APIs

```json
// GET /api/lenders/:lender-name
{
  "name": "Bank of Azeroth",
  "fields": [
    "first_name",
    "last_name",
    "gender",
    "email",
    "phone_number",
    "monthly_income"
  ]
}

// POST /api/lenders/:lender-name

// Request
{
  "first_name": "Ann",
  "last_name": "Heselden",
  "gender": "female",
  "email": "ann.heselden@divido.com",
  "phone_number": "+447473468883",
  "monthly_income": 50000
}

// Response
{
  "decision": "accepted",
}
```

## UX and Design

It’s entirely up to you how you would like to design the Application Form! Feel free to use 3rd party tools like `emotion` or `material-ui`.

## Testing

Feel free to add tests if you want, or present what tests you would add if you had more time.

## Running the project

```bash
yarn && yarn dev
```

or open with [CodeSandbox](https://githubbox.com/dividohq/frontend-code-test/tree/docs/simplify-readme).

## Follow up Questions

- How would you setup frontend validation?
- What if a lender has different frontend validation than the other
  lenders - how would you solve that?
- What if a lender would like `monthly_income` to be a select element
  instead of input?
- How would you write tests for this product?
