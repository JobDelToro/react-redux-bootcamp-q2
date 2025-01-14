import { unmountComponentAtNode } from 'react-dom';
import { render } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import Products from '.';

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

it('renders the Products component', () => {
  act(() => {
    render(<Products />, container);
  });
});
