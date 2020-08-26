import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from "axios"
import CharacterItem from "./CharacterItem"

const CharacterGrid = () => {
    const { house } = useParams()
    const [items, setItems] = useState([]);

    useEffect(() => {
        const fetchItems = async () => {
            const result = await axios(`https://api.got.show/api/show/characters/byHouse/${house}`)
            console.log(result.data);
            setItems(result.data)
        }
        fetchItems()
    }, [house])

    return (
        <section className="cards">
            {items.map(item => (
                <CharacterItem key={item._id} item={item} />
            ))}
        </section>
    )
}

export default CharacterGrid
