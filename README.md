## Welcome!

This is the code for my [personal website](https://jameshurley.ie/), built with [NextJS](https://nextjs.org/) and [React](https://reactjs.org/), and hosted using [AWS](https://aws.amazon.com/) services (Route 53, API Gateway, Lambda, S3 and CloudFront).

### To run locally:

#### 1) Add a .env file:

_Sample content:_

```
GOOGLE_MAPS_API_KEY="123"
NODE_ENV="production"
GA_ID=UA-123
FORMSPREE_TOKENS="abc"
```

**GOOGLE_MAPS_API_KEY**: Allows the map to load.  
**GA_ID**: Google Analytics to track performance.  
**FORMSPREE_TOKENS**: Third party backend for contact form.

#### 2) Install dependencies and start:

```
npm i
npm run dev
```

#### 3) Go to [localhost](http://localhost:3000)
