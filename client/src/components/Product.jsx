import styled from "styled-components";
import ShoppingCartRoundedIcon from "@mui/icons-material/ShoppingCartRounded";
import FavoriteRoundedIcon from "@mui/icons-material/FavoriteRounded";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import { Link } from "react-router-dom";

const Info = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #a0a0a06e;
  opacity: 0;
  z-index: 3;
  transition: all 0.3s ease;
`;

const Container = styled.div`
  min-width: 280px;
  flex: 1;
  margin: 5px;
  height: 350px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  &:hover ${Info} {
    opacity: 1;
  }
`;

const Image = styled.img`
  max-width: 100%;
  max-height: 100%;
  z-index: 2;
`;

const Icon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px;
  transition: all 0.3s ease;
  cursor: pointer;

  &:hover {
    background-color: #dbdbdb;
    transform: scale(1.2);
  }
`;

const Product = ({ item }) => {
  return (
    <Container>
      <Image src={item.img}></Image>
      <Info>
        <Icon>
          <ShoppingCartRoundedIcon />
        </Icon>
        <Icon>
          <Link to={`/product/${item._id}`}>
            <SearchRoundedIcon />
          </Link>
        </Icon>
        <Icon>
          <FavoriteRoundedIcon />
        </Icon>
      </Info>
    </Container>
  );
};

export default Product;
