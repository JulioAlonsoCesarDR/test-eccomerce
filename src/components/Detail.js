import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { useParams } from 'react-router-dom'
import { Box, Grid } from '@material-ui/core'

const Detail = props => {
    const [detail, setDetail] = useState({})
    const {id} = useParams()
    const getDetail = ()=>{
        fetch(`https://fakestoreapi.com/products/${id}`)
                .then(res=>res.json())
                .then(json=>setDetail(json))
    }
    useEffect(() => {
        getDetail()
    }, [])
    return (
        <div>
            <Box m={5}>
                <Grid container spacing={3}>
                    <Grid item md={4} container justify="center" alignItems="center">
                        <img src={detail.image} alt="img" width="50%" height="auto"/>
                    </Grid>
                    <Grid item md={8}>
                        <h1>
                            {detail.title}
                        </h1>
                        <p>
                            {detail.description}
                        </p>
                        <Grid container justify="flex-end" alignItems="center">
                            <span>costo: </span><h2>$ {detail.price}</h2>
                        </Grid>
                    </Grid>
                </Grid>
            </Box>
        </div>
    )
}

Detail.propTypes = {

}

export default Detail
