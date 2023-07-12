import React from 'react';
import Jumbotron from './Jumbotron';
import Card from './Card';


let cardsInfo = [
    { titulo: 'Italia', texto: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad vel laboriosam magnam est possimus incidunt.' },
    { titulo: 'Costa Rica', texto: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores, esse.' },
    { titulo: 'Panama', texto: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.' },
    { titulo: 'Colombia', texto: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, ex omnis.' }

]

const ContenedorPrincipal = () => {
    return (
        <div className="container-fluid">
            <div className="contenedor-principal mt-3">
                <Jumbotron />
                <div className="my-4"></div>
                <div className="card-container d-flex justify-content-center">
                    {
                        cardsInfo.map((value, index, array) => {
                            return <Card titulo={value.titulo} texto={value.texto}/>
                        })
                    }
                </div>
            </div>
        </div>
    );
};

export default ContenedorPrincipal;