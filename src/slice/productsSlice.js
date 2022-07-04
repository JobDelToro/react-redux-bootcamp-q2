let actions = {}
/** 
 * Fetching products data.
 *
 * @param  {}
 *
 * @return {Array}
 *         An array of products
*/
const fetchProducts = () => {
    const res = fetch('data/products.json');
    return res.then(res => (res.json()));
};

actions = { ...actions, fetchProducts };

export default actions;
