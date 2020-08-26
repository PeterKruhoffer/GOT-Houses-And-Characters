import React, { useEffect, useState } from 'react'
import axios from "axios"
import HouseItem from "./HouseItem"

const HouseGrid = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        const fetchItems = async () => {
            const result = await axios(`https://api.got.show/api/show/houses`)

            setItems(result.data)
        }
        fetchItems()
    }, [])

    const knownHouseNames = ["House Arryn", "House Baratheon", "House Bolton", "House Frey", "House Greyjoy", "House Lannister", "House Martell", "House Mormont", "House Stark", "House Targaryen", "House Tully", "House Tyrell"]

    // let index = 0;
    // function filterByKnownHouseNames(items) {
    //     if (items.name === knownHouseNames[index]) {
    //         index++
    //         return true
    //     } else {
    //         return false
    //     }
    // }

    const filteredItems = items.filter(item => knownHouseNames.includes(item.name))

    return (
        <section className="cards">
            {filteredItems.map(item => (
                <HouseItem key={item._id} item={item} />
            ))}
        </section>)
}

export default HouseGrid
