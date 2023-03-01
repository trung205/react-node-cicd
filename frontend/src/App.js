import React, {useEffect, useState} from 'react'
import axios from 'axios'
import './App.css';

function App() {
  const [username, setUsername] = useState('')
  useEffect(() => {
    getNames()
  }, [])

  const getNames = async () => {
    const res = await axios.get('/names')
    setUsername(res.data)
  }
  return (
    <>
      <h1>My frontend eeeee</h1>
      <h3>{username}</h3>
    </>
  );
}

export default App;
