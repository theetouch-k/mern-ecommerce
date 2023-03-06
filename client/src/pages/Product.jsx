import React from "react";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import Announcement from "../components/Announcement";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import Footer from "../components/Footer";
import { mobile } from "../responsive";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { publicRequest } from "../requestMethods";
import { addProduct } from "../redux/cartRedux";
import { useDispatch } from "react-redux";

const Container = styled.div``;

const Wrapper = styled.div`
  padding: 50px;
  display: flex;
  ${mobile({ padding: "10px", flexDirection: "column", alignItems: "center" })}
`;

const ImageContainer = styled.div`
  flex: 1;
`;

const Image = styled.img`
  width: 100%;
  object-fit: cover;
  ${mobile({ width: "90vw" })}
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 0px 50px;
  ${mobile({ padding: "10px" })}
`;

const Title = styled.h1`
  font-weight: 200;
`;

const Desc = styled.div`
  margin: 20px 0px;
`;

const Price = styled.div`
  font-weight: 100;
  font-size: 40px;
`;

const FilterContainer = styled.div`
  width: 70%;
  display: flex;
  margin: 30px 0px;
  justify-content: space-between;
  ${mobile({ width: "100%" })}
`;

const FilterTitle = styled.span`
  font-size: 20px;
  font-weight: 200;
  ${mobile({ fontSize: "15px" })}
`;

const Filter = styled.div`
  display: flex;
  align-items: center;
`;

const Select = styled.select`
  margin-left: 10px;
  padding: 5px;
`;

const Option = styled.option``;

const AddContainer = styled.div`
  width: 70%;
  display: flex;
  justify-content: space-between;
  ${mobile({ width: "100%" })}
`;

const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
`;

const Amount = styled.span`
  width: 30px;
  height: 30px;
  border-radius: 10px;
  border: 1px solid teal;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0px 5px;
`;

const Button = styled.button`
  padding: 15px;
  font-weight: 500;
  border: 2px solid teal;
  background-color: white;
  cursor: pointer;

  &:hover {
    background-color: #d8d8d8;
  }
`;

const Product = () => {
  const location = useLocation();
  const id = location.pathname.split("/")[2];
  const [product, setProduct] = useState({});
  const [quantity, setQuantity] = useState(1);
  const [color, setColor] = useState("");
  const [size, setSize] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    const getProduct = async () => {
      try {
        const res = await publicRequest.get("/products/find/" + id);
        setProduct(res.data);
      } catch {}
    };
    getProduct();
  }, [id]);

  const handleQuantity = (type) => {
    if (type === "dec") {
      quantity > 1 && setQuantity(quantity - 1);
    } else {
      setQuantity(quantity + 1);
    }
  };

  const handleClick = () => {
    dispatch(addProduct({ ...product, quantity, color, size }));
  };

  return (
    <Container>
      <Navbar></Navbar>
      <Announcement></Announcement>
      <Wrapper>
        <ImageContainer>
          <Image src={product.img}></Image>
        </ImageContainer>
        <InfoContainer>
          <Title>Deluxe Set 50G</Title>
          <Desc>Baffun uni 50G with rice, seaweed, shoju and wasabi.</Desc>
          <Price>$100</Price>
          <FilterContainer>
            <Filter>
              <FilterTitle>Side dish</FilterTitle>
              <Select>
                <Option>rice</Option>
                <Option>sticky rice</Option>
                <Option>kimchi</Option>
              </Select>
            </Filter>

            <Filter>
              <FilterTitle>Add on</FilterTitle>
              <Select>
                <Option>none</Option>
                <Option>ikura (+$10)</Option>
              </Select>
            </Filter>
          </FilterContainer>
          <AddContainer>
            <AmountContainer>
              <RemoveIcon onClick={() => handleQuantity("dec")} />
              <Amount>{quantity}</Amount>
              <AddIcon onClick={() => handleQuantity("inc")} />
            </AmountContainer>
            <Button onClick={handleClick}>ADD TO CART</Button>
          </AddContainer>
        </InfoContainer>
      </Wrapper>
      <Footer />
    </Container>
  );
};

export default Product;
