import React, { Fragment, useEffect, useState } from 'react'
import { Box, Grid } from '@material-ui/core'
import CardProduct from '../components/CardProduct';



const ListProducts = () => {
    const [products, setProducts] = useState([])
    const getProducts = () => {
        fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(json=> setProducts(json))
    }
    useEffect(() => {
        getProducts()
    },[])
    return (
        <Fragment>
            <Box margin={5}>
                <h1> Lista de Productos</h1>
                <Grid container
                    direction="row"
                    justify="space-around"
                    alignItems="center"
                    >
                        <CardProduct listProducts = {products}/>
                </Grid>
            </Box>
        </Fragment>
    )
}

export default ListProducts