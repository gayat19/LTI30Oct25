import { useState } from "react"
import './Product.css';

export default function Product(props){
const [product,setProduct] = useState(props.product);

const callAPIToPopulateObject=()=>{
    fetch('https://dummyjson.com/products/1')
    .then((rawData)=>{
        return rawData.json();
    })
    .then((data)=>{
        setProduct(data)
    });
}
    return(<>
    <button onClick={callAPIToPopulateObject}>Populate Data</button>
    <div className="card-container">
        <div className="card">
            <img src={product?.thumbnail} alt="Product Image"/>
            <h3>{product?.title}</h3>
            <p>{product?.description}</p>
            <button>Buy for {product?.price}</button>
        </div>
    </div>
    </>)
}