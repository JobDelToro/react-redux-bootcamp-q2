import actions from './ordersSlice';

it('Get all orders', async () => {
    const { getOrders } = actions;
    expect(getOrders()).not.toEqual(undefined);
});

it('Add a product to orders', async () => {
    const { addOrder, getOrders } = actions;
    addOrder({ name: 'example', price: 5, id: 1, image: ['djsks'], description: 'ddjwkjd' })
    expect(getOrders().length).not.toEqual(0);
});
