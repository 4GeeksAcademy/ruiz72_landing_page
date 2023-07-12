import React from 'react';
import Proptypes from 'prop-types'

import image from "../../img/img1.jpg";

const Card = (props) => {
    return (
        <>
            <div className="card mx-2" style={{ width: "18rem" }}>
            <img src={image} />
                <div className="card-body">
                    <h5 className="card-title"> {props.titulo}</h5>
                    <p className="card-text"> {props.texto}</p>
                    <a href="#" className="btn btn-primary">Learn More</a>
                </div>
            </div>
        </>
    );
};
Card.propTypes = {
    titulo : Proptypes.string,
    mensaje : Proptypes.string
}
export default Card;