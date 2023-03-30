import React from 'react'

const Categorie = (props) => {
    return (
        <>
            <div className="card category">
                <div className="card-body  ">
                    <h5>Name: {props.name}</h5>
                    <h5>Gender: {props.gender}</h5>
                    <img className="avtarimg" src={props.img}></img>
                    <h5>Phone: {props.phone}</h5>
                    <h5>Address: {props.address}</h5>
                    <h5>Email: {props.email}</h5>
                </div>
            </div>
        </>
    )
}

export default Categorie;