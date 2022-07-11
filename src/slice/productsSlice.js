import config from '../config';
let productsActions = {};

/** 
 * Fetching products data.
 *
 * @param  {}
 *
 * @return {Array}
 *         An array of products
*/
const fetchProducts = () => {
    const res = fetch(`${config.domain}/data/products.json`);
    return res.then(res => (res.json()));
};

productsActions = { ...productsActions, fetchProducts };

export default productsActions;
