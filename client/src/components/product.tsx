import React, { CSSProperties } from 'react';

interface Props {
    name: string,
    price: string,
    info: string
}


export default function Product(props: Props) {

    const products = [
        {
            name: "bordsfläkt",
            price: "200kr",
            info: "Blåser bra som fan, håll i hatten!"
        }
    ]


    return (
        <div style={productStyle}>
            <h1>
                {props.name}
            </h1>
            <p>
                {props.price}
            </p>
            <p>
                {props.info}
            </p>
            <button>
                Lägg i kundvagn
            </button>
        </div>
                
    );
}

const productStyle: CSSProperties = {
    display: "flex",
    flexDirection: "column",
    backgroundColor: "white",
    height: "40%",
    margin: "10px",
    padding: "10px",
    borderRadius: "10px"    
}

