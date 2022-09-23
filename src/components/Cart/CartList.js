import styled from 'styled-components/macro';
import CartItem from './CartItem';
import CartFooter from './CartFooter';
import { func } from 'prop-types';
import { CartContext } from 'app/App';
import {useContext} from 'react';

export default function CartList() {
  const useCart = useContext(CartContext)
  return (
    <Container>
      {useCart.products.map((product) => (
        <CartItem key={product.id} product={product}/>
      ))}
      <CartFooter/>
    </Container>
  );
}

CartList.propTypes = {
  onUpdate: func,
};

/* -------------------------------------------------------------------------- */

const Container = styled.ul`
  list-style: none;
  margin: 0;
  padding-left: 0;
`;