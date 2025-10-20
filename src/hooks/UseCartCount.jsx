import React, { useContext } from 'react'
import { ProductsContext } from '../contexts/ProductsContext'

const UseCartCount = () => {
    const {cartCount} = useContext(ProductsContext);
    return cartCount;
}

export default UseCartCount
