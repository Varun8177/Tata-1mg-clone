import FilterAndSort from '@/components/FilterAndSort';
import Pagination from '@/components/Pagination';
import ProductCard from '@/components/ProductCard';
import ProductsSkeleton from '@/components/ProductsSkeleton';
import { Box, Grid, Heading, Image, Text } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import React from 'react';

const Products = () => {
    const router = useRouter();
    const handle = () => {
        router.push('/');
    }
    return (
        <>
            <Box display={'flex'} mt='1%' gap='50px' bg='#f6f6f6' >
                <Box className='filterandSortSection' bg='white' w='190px' h='500px' ml='7%' mt='15px' >
                    <FilterAndSort />
                </Box>
                <Box className='allProductSection'>
                    <Box mt='10px'>
                        <Text>
                            <span onClick={handle} style={{ color: '#ff6f61', cursor: 'pointer', fontSize: '12px' }}>Home</span> <span style={{ color: 'grey', fontSize: '12px' }}>{'> '}All Products</span>
                        </Text>
                        <Heading fontSize={'24px'} fontWeight='700' lineHeight={'34px'} m='10px 0'>TATA 1MG HEALTH PRODUCTS</Heading>
                    </Box>
                    <Image
                        src='https://onemg.gumlet.io/q_auto,h_124,f_auto,a_ignore,w_1062/9c43e75c-414a-4323-9096-74cdafa1efd8.png'
                        alt='Dan Abramov'
                        w='100%'
                        m={'12px 0'}
                    />
                    <Box display={{ "lg": "flex", "md": "none", "base": "none" }} gap='8px'>

                        <Image
                            src='https://onemg.gumlet.io/q_auto,h_187,f_auto,a_ignore,w_350/483095fe-4263-45ad-9916-1da74bd70b61.png'
                            alt='Dan Abramov'
                        />
                        <Image
                            src='https://onemg.gumlet.io/q_auto,h_187,f_auto,a_ignore,w_350/d9081b44-9fba-42ad-a9f0-7ed99abffe0b.png'
                            alt='Dan Abramov'
                        />
                        <Image
                            src='https://onemg.gumlet.io/q_auto,h_187,f_auto,a_ignore,w_350/14bfa337-4a8d-4cd2-9fce-44ae14394470.png'
                            alt='Dan Abramov'
                        />
                    </Box>
                    <Heading fontSize={'24px'} fontWeight='700' lineHeight={'34px'} m='15px 0'>ALL PRODUCTS</Heading>
                    <Grid templateColumns={{ "lg": "repeat(4, 1fr)", "md": "repeat(2, 1fr)", "base": "repeat(1, 1fr)" }} gap="20px 20px" mt='30px'>
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                    </Grid>
                    {/* <ProductsSkeleton /> */}
                </Box>
            </Box>
            <Pagination />
        </>
    )
}

export default Products;