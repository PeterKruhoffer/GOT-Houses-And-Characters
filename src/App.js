import React, { useState, useEffect } from 'react';
import axios from "axios"
import HouseGrid from "./components/HouseGrid"
import Header from "./components/ui/Header"
import './App.css';

function App() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchItems = async () => {
      const result = await axios(`https://api.got.show/api/show/houses`)

      setItems(result.data)
    }
    fetchItems()
  }, [])

  return (
    <div className="container">
      <Header />
      <HouseGrid items={items} />
    </div>
  );
}

export default App;
