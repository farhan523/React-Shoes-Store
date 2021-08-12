import React from 'react'

function Card(props) {
    let { pic } = props
    console.log(pic)
    return (
        <div className="card">
            <div class="date">
                <h1>{props.month}</h1>
                <h1>{props.date}</h1>
            </div>
            <div className="image" style={{ backgroundImage: `url(${pic})` }}>

            </div>
        </div>
    )
}

export default Card
