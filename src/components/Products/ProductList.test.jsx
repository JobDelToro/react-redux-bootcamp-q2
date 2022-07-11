import { unmountComponentAtNode } from 'react-dom';
import { render } from '@testing-library/react';
import ProductList from './ProductList';
import ProductCard from './ProductCard';
import { act } from 'react-dom/test-utils';

let container = null;
beforeEach(() => {
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

it('Test Product Card and its props', () => {
    act(() => {
      render(<ProductList products={[]}/>, container)
    });
});