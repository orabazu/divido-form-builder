# Frontend Code Test

Thank you for taking the time to do our technical test :).

You will build a website that let's user apply for credit online. We've bootstrapped the project for you using `Next.js`, and has the backend API's that you will use ready to go!

## Background

You are the tech lead for SuperForm Inc. and have been tasked with building the Front End architecture for a new Web Application called "Application Form".

The purpose of the Application Form is to render a `<form/>` with a set of questions to the user which will let them apply for credit. However, the set of questions depends on what "Bank" is lending the money. For this excersise we've partnered up with the following banks:

- Bank of Azeroth
- Aztec Bank
- Banco de Bank

They all require different fields to be captured from the user, but lucky for you your backend colleagues have written an API that returns all the information you need to build the front end.

### `GET /api/lender/<lender>`

See an example response for `GET /api/lender/bank_of_azeroth`.

```
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
```

### `POST /api/lender/<lender>`

See example of request payload for Bank of Azeroth below.

```
{
    "first_name": "Ann",
    "last_name": "Heselden",
    "gender": "female",
    "email": "ann.heselden@divido.com",
    "phone_number": "+447473468883",
    "monthly_income": 50000
}
```

## Requirements

```
As a user
When I go to /<lender>
I want to answer the information needed for <lender>
```

```
As a user
When I submit the form
I want to know if I was accepted or declined
```

## Implementation

- Use React as the framework
- Build a GraphQL API that the frontend will talk to

## Design

It’s entirely up to you how you would like to design the Application Form!

## Testing

Feel free to add tests if you want, or present what tests you would add if you had more time.

## Running the project

```bash
yarn
yarn dev
```
