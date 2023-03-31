import React from 'react'

const Categorie = (props) => {
    return (
        <>
            <div className="card category">
                <div className="card-body  ">
                <img src={props.img} className="avtarimg"  alt="avtar img"/>
                    <h5>Name: {props.name}</h5>
                    <h5>Gender: {props.gender}</h5>
                    <h5>Phone: {props.phone}</h5>
                    <h5>Address: {props.address}</h5>
                    <h5>Email: {props.email}</h5>
                </div>
            </div>
        </>
    )
}

export default Categorie;