import { useState } from 'react'

import axios from 'axios'
import { useEffect } from 'react';

const SearchField = (props) => {
  return (
    <>
    <h1>Country Informer</h1>
    <p>Search for country: <input value={props.searchTerm} name="searchfieldy" onChange={e => {
      props.setSearchTerm(e.target.value);
    }}/></p>
    </>
  )
}

const SearchResults = (props) => {
  if (props.commonNames.length > 10) {
    return (
      <>
      <p>Too many matches, specify another filter</p>
      </> 
    )
  } else if (props.commonNames.length < 10 && props.commonNames.length > 1) {
    return (
      <>
      {props.commonNames.map(country => <p key={country}>{country}</p>)}
      </>
    )
  } else if (props.commonNames.length == 1) {
    return (
      <>
      {props.commonNames.map(country => <h1 key={country}>{country}</h1>)}
      <p>Capital: {props.countryData.capital[0]}</p>
      </>
    )
  } else {
    return (
      <>
      <p>No matches</p>
      </>
    )
  }
}

function App() {
  const [searchTerm, setSearchTerm] = useState('Finland')
  const [commonNames, setCommonNames] = useState([])
  const [countryData, setCountryData] = useState({})
  useEffect(() => {
    axios.get('https://studies.cs.helsinki.fi/restcountries/api/all')
         .then((response) => {
          const countries = []
          response.data.forEach(country => {
            if (country.name.common.toLowerCase().includes(searchTerm.toLowerCase())) {
            countries.push(country.name.common)
            setCommonNames(countries)
            }
          }
        )
      }
    )
    if(commonNames.length == 1) {
      axios.get('https://studies.cs.helsinki.fi/restcountries/api/name/'+commonNames[0])
        .then((response)=> {
          setCountryData(response.data)
          console.log(countryData)
        }
      )
    }
  })
  return (
    <>
    <SearchField searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>
    <SearchResults commonNames={commonNames} countryData={countryData}/>
    </>
  )
}

export default App
