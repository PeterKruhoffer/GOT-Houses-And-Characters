import React from 'react'

const CharacterItem = ({ item: { image, name, age, alive, allegiances, actor } }) => {
    return (
        <div>
            <div className='card'>
                <div className='card-inner'>
                    <div className='card-front'>
                        <img src={image} alt="Character img" />
                    </div>
                    <div className='card-back'>
                        <h1>{name}</h1>
                        <ul>
                            <li>
                                <strong>Actor:</strong> {actor}
                            </li>
                            <li>
                                <strong>Status:</strong> {alive ? "Alive" : "Dead"}
                            </li>
                            <li>
                                <strong>Age:</strong> {age?.age ?? "Not Known"}
                            </li>
                            <li>
                                <strong>Alligiance:</strong> {allegiances[0]}
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CharacterItem
