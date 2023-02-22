import { Grid, Skeleton } from '@chakra-ui/react'
import React from 'react';

const ProductsSkeleton = () => {
    const [isLoaded, setIsLoaded] = React.useState(false)
    return (
        <Grid templateColumns={{ "lg": "repeat(4, 1fr)", "md": "repeat(2, 1fr)", "base": "repeat(1, 1fr)" }} gap="20px 20px" mt='30px'>
            <Skeleton
                height='350px'
                width='240px'
                isLoaded={isLoaded}
                bg='green.500'
                color='white'
                fadeDuration={1}
            >
            </Skeleton>
            <Skeleton
                height='350px'
                width='240px'
                isLoaded={isLoaded}
                bg='green.500'
                color='white'
                fadeDuration={1}
            >
            </Skeleton>
            <Skeleton
                height='350px'
                width='240px'
                isLoaded={isLoaded}
                bg='green.500'
                color='white'
                fadeDuration={1}
            >
            </Skeleton>
            <Skeleton
                height='350px'
                width='240px'
                isLoaded={isLoaded}
                bg='green.500'
                color='white'
                fadeDuration={1}
            >
            </Skeleton>
        </Grid>
    )
}

export default ProductsSkeleton;