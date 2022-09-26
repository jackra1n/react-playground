import { useState, useEffect } from 'react'
import "./App.css";

const digitecFetchUrl = "";

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

function HomePageGreeting() {

  const [state, setState] = useState({products: [], dataIsLoaded: false})
  
  useEffect(() => {
    if (!state.dataIsLoaded) {
      console.log("fetching data");
      fetch(digitecFetchUrl, { 
        method: "POST",
        body: bodyContent,
        headers: headersList
      })
      .then(response => response.json())
      .then(data => {
        setState({
          products: data.data.socialShopping.items,
          dataIsLoaded: true
        });
      })
    }
  })
  
  if (!state.dataIsLoaded) {
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
      {state.products.map((item) => (
        <div>
          <p><b>{item.userName}</b> bought <b>{item.fullProductName}</b> from <b>{item.brandName}</b></p>
        </div>
      ))}
    </div>
  </div>
  )
}

export default HomePageGreeting
