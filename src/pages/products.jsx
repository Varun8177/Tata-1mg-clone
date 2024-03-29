import FilterAndSort from "@/components/FilterAndSort";
import Footer from "@/components/footer";
import MainNavbar from "@/components/navbar/MainNavbar/MainNavbar";
import Pagination from "@/components/Pagination_m";
import ProductCard from "@/components/ProductCard";
import ProductsSkeleton from "@/components/ProductsSkeleton";
import TopSectionProductsPage from "@/components/TopSectionProductsPage";
import { getData } from "@/redux/products/products.action";
import { Box, Grid } from "@chakra-ui/react";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const Products = () => {
  const router = useRouter();
  const loading = useSelector((store) => store.ProductReducer.isLoading);
  const data = useSelector((store) => store.ProductReducer.products);
  const [currentPage, setCurrentPage] = useState(1);
  const [filterValue, setFilterValue] = useState("");
  const [sort, setSort] = useState("");
  const [order, setOrder] = useState("asc");
  const dispatch = useDispatch();
  // console.log(loading);

  let pageSize = 8;
  let items = 38;
  const onPageChange = (page) => {
    setCurrentPage(page);
  };

  const handleSortPrice = (value) => {
    setSort("price");
    setOrder(value);
    dispatch(getData(sort, order));
  };
  const handleSortRating = (value) => {
    setSort("rating");
    setOrder(value);
    dispatch(getData(sort, order));
  };
  const handleSortReset = () => {
    setSort("");
    setOrder("");
    dispatch(getData("", ""));
  };
  //   console.log(sort, order);

  const handleFilter = (value) => {};

  useEffect(() => {
    dispatch(getData(sort, order));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Head>
        <title>Health Prime</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MainNavbar />
      <Box
        display={{ lg: "flex", md: "flex", sm:"flex", base: "grid" }}
        gap={{ lg: "5%",md:"5%",sm:"0%" }}
        bg="#f6f6f6"
        w="100%"
      >
        <Box w={{lg:"20%", md:"20%", sm: "30%"}}>
        <FilterAndSort
          handleFilter={handleFilter}
          handleSortPrice={handleSortPrice}
          handleSortRating={handleSortRating}
          handleSortReset={handleSortReset}
        />
        </Box>
        
        <Box className="allProductSection" p={{ base: "20px" }} w={{lg:"75%", md:"70%", sm: "70%"}}>
          <TopSectionProductsPage />
          <Grid
            templateColumns={{
              xl: "repeat(4, 1fr)",
              lg: "repeat(3, 1fr)",
              md: "repeat(2, 1fr)",
              base: "repeat(1, 1fr)",
            }}
            gap="20px 20px"
            mt="30px"
          >
            {loading ? (
              <ProductsSkeleton />
            ) : (
              data?.length &&
              data
                ?.filter((item, i) => {
                  return i >= 8 * (currentPage - 1) && i < 8 * currentPage;
                })
                .map((item, i) => {
                  // return <Link key={i + 1} href={`products/${item.id}`}>
                  return <ProductCard key={i + 1} {...item} />;
                  // </Link>
                })
            )}
          </Grid>
        </Box>
      </Box>
      <Pagination
        onPageChange={onPageChange}
        pageSize={pageSize}
        items={items}
        currentPage={currentPage}
      />
      {/* <Footer /> */}
    </>
  );
};

export default Products;

// export async function getServerSideProps() {
//     const data = await axios
//         .get(`https://health-prime.onrender.com/products`)
//         .then((res) => { return res.data })
//         .catch((error) => console.log(error));
//     return { props: { data } };
// }
