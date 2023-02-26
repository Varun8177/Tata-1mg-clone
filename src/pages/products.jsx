import FilterAndSort from "@/components/FilterAndSort";
import Pagination from "@/components/Pagination_m";
import ProductCard from "@/components/ProductCard";
import ProductsSkeleton from "@/components/ProductsSkeleton";
import TopSectionProductsPage from "@/components/TopSectionProductsPage";
import { getData } from "@/redux/products/products.action";
import { Box, Grid } from "@chakra-ui/react";
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
    dispatch(getData(sort, order));
  };
  console.log(sort, order);

  const handleFilter = (value) => {
    setFilterValue(value);
    console.log(filterValue);
  };

  useEffect(() => {
    dispatch(getData(sort, order));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Box
        display={{ lg: "flex", md: "flex", base: "grid" }}
        gap={{ lg: "50px", md: "20px" }}
        bg="#f6f6f6"
      >
        <FilterAndSort
          handleFilter={handleFilter}
          handleSortPrice={handleSortPrice}
          handleSortRating={handleSortRating}
          handleSortReset={handleSortReset}
        />

        <Box className="allProductSection" p={{ base: "20px" }}>
          <TopSectionProductsPage />
          <Grid
            templateColumns={{
              lg: "repeat(4, 1fr)",
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
    </>
  );
};

export default Products;

// export async function getServerSideProps() {
//     const data = await axios
//         .get(`https://dead-earrings-tick.cyclic.app/products`)
//         .then((res) => { return res.data })
//         .catch((error) => console.log(error));
//     return { props: { data } };
// }
