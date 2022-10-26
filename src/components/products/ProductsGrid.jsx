import ProductCard from "./ProductCard";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { Typography } from "@mui/material";
import ProductData from "./ProductData";


import { useEffect } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { getProducts } from '../../actions/productActions'
import { useAlert} from 'react-alert'

const Item = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(1),
  textAlign: "center",
  boxShadow: "none",
}));

const ProductsGrid = () => {

  const { loading, products, error} = useSelector(state=> state.products)
  const alert= useAlert();

  const dispatch = useDispatch();
  useEffect(() => {
      if (error){
          return alert.error(error)
      }

      dispatch(getProducts());
  }, [dispatch])

  return (
    <div className="products-grid">
      <Box m={5}>
        <Box
          m={0}
          pt={0}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <Typography
            component="strong"
            mb={4}
            variant="h2"
            align="center"
            style={{
              color: "#12284C",
              paddingTop: "0px",
              fontFamily: "Nunito Sans",
            }}
          >
            Productos
          </Typography>
        </Box>
        <Grid container spacing={6}>
          {products.map((ProductData) => (
            <Grid item key={ProductData.id} xl={3} lg={4} md={6} sm={6}>
              <Item>
                <ProductCard
                  id={ProductData.id}
                  title={ProductData.title}
                  subtitle={ProductData.subtitle}
                  image={ProductData.image}
                  category={ProductData.category}
                  descriptionEs={ProductData.descriptionEs}
                  descriptionEn={ProductData.descriptionEn}
                  c
                  ingredientsEn={ProductData.ingredientsEn}
                  ingredientsEs={ProductData.ingredientsEs}
                  price={ProductData.price}
                  rating={ProductData.rating}
                  timeLeft={ProductData.timeLeft}
                  totalSales={ProductData.totalSales}
                />
              </Item>
            </Grid>
          ))}
        </Grid>
      </Box>
    </div>
  );
};

export default ProductsGrid;
