import React, { useContext } from 'react'
import { ProductsContext } from '../contexts/ProductsContext'

const UseSelectedProduct = () => {
    const {selectedProduct} = useContext(ProductsContext);
    return selectedProduct ;
}

export default UseSelectedProduct
