import React from 'react'
import HouseItem from "./HouseItem"

const HouseGrid = ({ items }) => {

    const knownHouseNames = ["House Arryn", "House Baratheon", "House Bolton", "House Frey", "House Greyjoy", "House Lannister", "House Martell", "House Mormont", "House Stark", "House Targaryen", "House Tully", "House Tyrell"]

    let x = 0;
    function filterByKnownHouseNames(items) {
        if (items.name === knownHouseNames[x]) {
            x++
            return true
        } else {
            return false
        }
    }

    // function filterByLogoURL(items) {
    //     if (items.sigil !== "" && items.logoURL !== null && items.words !== "" && items._id !== "5cc0751804e71a0010b85ce7" && items._id !== "5cc0751804e71a0010b85d31" && items._id !== "5cc0751804e71a0010b85d5f" && items._id !== "5cc0751804e71a0010b85d64" && items._id !== "5cc0751804e71a0010b85d79") {
    //         return true;
    //     } else {
    //         return false;
    //     }
    // }

    const filteredItems = items.filter(filterByKnownHouseNames)

    return (
        <section className="cards">
            {filteredItems.map(item => (
                <HouseItem key={item._id} item={item} />
            ))}
        </section>)
}

export default HouseGrid
