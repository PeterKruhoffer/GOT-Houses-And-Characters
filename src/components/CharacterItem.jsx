import React from 'react'

const CharacterItem = ({ item }) => {
    return (
        <div>
            <div className='card'>
                <div className='card-inner'>
                    <div className='card-front'>
                        <img src={item.image} alt="Character img" />
                    </div>
                    <div className='card-back'>
                        <h1>{item.name}</h1>
                        <ul>
                            <li>
                                <strong>Actor:</strong> {item.actor}
                            </li>
                            <li>
                                <strong>Status:</strong> {item.alive ? "Alive" : "Dead"}
                            </li>
                            <li>
                                <strong>Age:</strong> {item.age?.age ?? "Not Known"}
                            </li>
                            <li>
                                <strong>Alligiance:</strong> {item.allegiances[0]}
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CharacterItem
