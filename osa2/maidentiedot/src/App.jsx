import { useState } from 'react'

const SearchField = (props) => {
  return (
    <>
    <h1>Country Informer</h1>
    <p>Search for country: <input value={props.searchTerm}/></p>
    </>
  )
}

function App() {
  const [searchTerm, setSearchTerm] = useState('Finland')
  return (
    <>
    <SearchField searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>
    </>
  )
}

export default App
