import React from 'react'

const HouseItem = ({ item }) => {
    return (
        <div className='card'>
            <div className='card-inner'>
                <div className='card-front'>
                    <img src={item.logoURL} alt="House Crest" />
                </div>
                <div className='card-back'>
                    <h1>{item.name}</h1>
                    <ul>
                        <li>
                            <strong>House words:</strong> {item.words}
                        </li>
                        <li>
                            <strong>Sigil:</strong> {item.sigil}
                        </li>
                        <li>
                            <strong>Seat:</strong> {item.seat[0]}
                        </li>
                        <li>
                            <strong>Region:</strong> {item.region[0]}
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default HouseItem
