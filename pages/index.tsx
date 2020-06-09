import { FC } from "react"

const EXAMPLE_REQUEST_PAYLOAD = {
  "first_name": "Ann",
  "last_name": "Heselden",
  "gender": "female",
  "email": "ann.heselden@divido.com",
  "phone_number": "+447473468883",
  "monthly_income": 50000
};

const IndexPage: FC = () => (
  <div style={{width: '600px', margin: '0 auto'}}>
    <h1>Hello 👋</h1>
    <p>Thank you for taking the time to do our technical test.</p>
    <p>You will build a website that let's user apply for credit online. We've bootstrapped the project for you using `Next.js`, and has the backend API's that you will use ready to go!</p>
    <h2>Background</h2>
    <p>You are the tech lead for SuperForm Inc. and have been tasked with building the Front End architecture for a new Web Application called "Application Form".</p>
    <p>The purpose of the Application Form is to render a form with a set of questions to the user which will let them apply for credit. However, the set of questions depends on what "Bank" is lending the money. For this excersise we've partnered up with the following banks:</p>
    <ul>
      <li>Bank of Azeroth</li>
      <li>Naboo Bank</li>
      <li>Middle Earth Bank</li>
    </ul>
    <p>They all require different fields to be captured from the user, but lucky for you your backend colleagues have written an API that returns all the information you need to build the front end.</p>
    <ul>
      <li><code><a href="/api/lenders/bank-of-azeroth">GET /api/lenders/bank-of-azeroth</a></code></li>
      <li><code><a href="/api/lenders/naboo-bank">GET /api/lenders/naboo-bank</a></code></li>
      <li><code><a href="/api/lenders/middle-earth-bank">GET /api/lenders/middle-earth-bank</a></code></li>
    </ul>
    <p>There's also an endpoint where you can submit the form to, which will render a decision, accepted or declined.</p>
    <ul>
      <li><code>POST /api/lender/...</code></li>
    </ul>
    <p>See example of request payload for Bank of Azeroth below.</p>
    <pre>
      <code>
        {JSON.stringify(EXAMPLE_REQUEST_PAYLOAD, null, 2)}
      </code>
    </pre>
    <h2>Requirements</h2>
    <ul>
      <li><code><a href="/bank-of-azeroth">/bank-of-azeroth</a> should render the form fields for Bank of Azeroth</code></li>
      <li><code><a href="/naboo-bank">/naboo-bank</a> should render the form fields for Naboo Bank</code></li>
      <li><code><a href="/middle-earth-bank">/middle-earth-bank</a> should render the form fields for Middle Earth Bank</code></li>
      <li><code>When the form is submitted user should get information about the decision</code></li>
    </ul>
    <h2>Implementation</h2>
    <ul>
      <li>Use React as the framework</li>
      <li>Write in TypeScript</li>
      <li>Build a GraphQL API that the frontend will talk to</li>
    </ul>
    <h2>Design</h2>
    <p>It’s entirely up to you how you would like to design the Application Form!</p>
    <h2>Testing</h2>
    <p>Feel free to add tests if you want, atleast think about what tests you would to write.</p>
    <h2>Follow up questions</h2>
    <ol>
      <li>How would you setup front end validation?</li>
      <li>What if a lender would have certain front end validation, different from the other lenders - how would you solve that?</li>
      <li>What if Lender B would like `monthly_income` to be a select element with different options instead of input?</li>
      <li>How would you write tests for this application?</li>
    </ol>
  </div>
)

export default IndexPage
