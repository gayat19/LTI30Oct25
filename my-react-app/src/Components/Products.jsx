import axios from "axios";
import { useEffect, useState } from "react";
import Product from "./Product";

export default function Products(){
    const [products,setProducts] = useState([])
    useEffect(()=>{
        axios.get("https://dummyjson.com/products")
        .then(result=>{
            setProducts(result.data.products)
        })
    },[])

    return(<>

    {
        products?.map(prod=><Product key={products.id} product={prod}/>)
    }
    </>)
}