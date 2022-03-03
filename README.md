At Repeat, a lot of our client-side product surface area involves fetching data from an API, presenting a form to modify the data, and sending updated data back to the server.

As such, for this code exercise, we'd like you to build a React application that:

1. Fetches a `Product` from a mock API (see interface definition below)
2. Displays a form for editing the properties of that product
    * Change the product `title`
    * Add, remove, and edit the product's `tags`
    * Change the `vendor` of the product
    * Turn `replenishable` on/off
    * Change the product `status`
3. Sends the updated product information back to the mock API when a user submits the form

In this starter project – scaffolded with [Create React App](https://reactjs.org/docs/create-a-new-react-app.html) [(CRA.md)](./CRA.md), we've built out that mock API with a tool called [Mirage](https://miragejs.com/). What this means is that from your React app, you can `GET` and `PATCH` the following endpoints to retrieve and update product information. For simplicity's sake, you can assume there's only a single product, with an id of `1`. 

```
GET /api/products/1
PATCH /api/products/1
```

When making API calls from your React app, note that they won't appear as XHR requests in the Network tab of your browser developer tools. Instead, they'll appear in the console as individual log lines that you can inspect.

<img width="504" alt="Screen Shot 2020-12-01 at 1 24 21 PM" src="https://user-images.githubusercontent.com/5148596/100781048-87d88a80-33d8-11eb-931f-75ed6b0e22e5.png">

While we won't be evaluating you for your visual design skills, you should build a form that's intuitive and accessible. Feel free to leverage whatever libraries you find necessary (be they for UI components, state management, or forms). We're interested in your opinions about building things with React.

We'd like to see what you can accomplish in 4 hours - if you complete the initial task, you can move on to:

1. Adding tests for the components you write
2. Adding client-side validation
3. Support for multiple product forms (instead of the single, hard-coded product)

Please reach out with any questions!

```tsx
interface Product {
  title: string;
  tags: string[];
  vendor: string;
  replenishable: boolean;
  status: 'archived' | 'draft' | 'active';
}
```
