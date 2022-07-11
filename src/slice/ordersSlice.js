let ordersActions = {};
let orders = [];

/** 
 * Getting orders data.
 *
 * @param  {}
 *          
 *
 * @return {Array}
 *          Array of products that belongs to order
*/
const getOrders = () => {
    return orders;
};
/** 
 * Add a product into the orders array.
 *
 * @param  {Object}
 *          Product object
 *
 * @return {VoidFunction}
 * 
*/
const addOrder = product => {

    product = { ...product, quantity: 1 };

    orders = orders.filter((orderProduct, i) => {
        if (orderProduct.id === product.id) {
            product = { ...orderProduct, quantity: (orderProduct.quantity + 1) };
        }
        return orderProduct.id !== product.id
    });
    orders = [ ...orders, product ];
};

ordersActions = { ...ordersActions, getOrders };
ordersActions = { ...ordersActions, addOrder };

export default ordersActions;
