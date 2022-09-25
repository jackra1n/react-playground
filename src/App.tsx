import React from "react";
import "./App.css";

const digitecFetchUrl = "https://cors-anywhere.herokuapp.com/https://www.digitec.ch/api/graphql/get-social-shoppings";

const headersList = {
  "Accept": "*/*",
  "User-Agent": "Thunder Client (https://www.thunderclient.com)",
  "Content-Type": "application/json",
  "Origin": "https://www.digitec.ch"
}

const gqlBody = {
  query: `query GET_SOCIAL_SHOPPINGS($take: Int, $latest: String) {
    socialShopping(take: $take, latest: $latest) {
      latestTransactionTimeStamp
      items {
        id
        userName
        cityName
        dateTime
        imageUrl
        brandName
        fullProductName
        salesPrice {
          amountIncl
          amountExcl
          currency
          __typename
        }
        oAuthProviderName
        targetUserName
        quote
        voteTypeId
        productTypeName
        socialShoppingTransactionTypeId
        url
        rating
        searchString
        __typename
      }
      __typename
    }
  }`,
  variables: {"take":10,"latest":null}
}
const bodyContent =  JSON.stringify(gqlBody);

export default class HomePageGreeting extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      products: [],
      DataIsLoaded: false
    };
  }
  
  componentDidMount() {
    console.log("fetching data");
    fetch(digitecFetchUrl, { 
      method: "POST",
      body: bodyContent,
      headers: headersList
    })
    .then(response => response.json())
    .then(data => {
      this.setState({
        products: data.data.socialShopping.items,
        DataIsLoaded: true
      });
    })
  }
  
  render() {
    const { DataIsLoaded, products } = this.state;
    if (!DataIsLoaded) {
      return <div>Loading...</div>;
    }
    return (
      <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <p>
          {products.map((item) => (
            <div>
              <p><b>{item.userName}</b> bought <b>{item.fullProductName}</b> from <b>{item.brandName}</b></p>
            </div>
          ))}
        </p>
      </div>
    </div>
  )};
}
