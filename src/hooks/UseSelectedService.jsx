import React, { useContext } from 'react'
import { ServicesContext } from '../contexts/ServicesContext'

const UseSelectedService = () => {
    const {selectedService} = useContext(ServicesContext);
    return selectedService;
}

export default UseSelectedService
