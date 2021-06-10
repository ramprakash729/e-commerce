import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Product from "./Product";
import { db } from "./Firebase";

function Home() {
  const [product, setProduct] = useState([]);
  const getProduct = () => {
    db.collection("product").onSnapshot((snapshot) => {
      let tempProduct = [];
      tempProduct = snapshot.docs.map((doc) => ({
        id: doc.id,
        product: doc.data(),
      }));
      setProduct(tempProduct);
    });
  };

  useEffect(() => {
    getProduct();
  }, []);

  console.log(product);
  return (
    <div>
      <Container>
        <Banner></Banner>
        <Content>
          {product.map((data) => (
            <Product
              title={data.product.name}
              price={data.product.price}
              rating={data.product.rating}
              image={data.product.image}
              id={data.id}
            ></Product>
          ))}
        </Content>
      </Container>
    </div>
  );
}

export default Home;

const Container = styled.div`
  margin: 0 auto;
  max-width: 1500px;
`;

const Banner = styled.div`
  background-image: url("https://i.imgur.com/SYHeuYM.jpg");
  min-height: 600px;
  backgound-size: cover;
  background-position: center;
  z-index: 1;
  mask-image: linear-gradient(to bottom, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0));
`;

const Content = styled.div`
  background-color: white;
  padding: 0 10px;
  margin-top: -350px;
  z-index: 100;
  display: flex;
  flex-wrap: wrap;
`;
