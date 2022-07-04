import actions from './productsSlice';

it('fetch data of products', async () => {
    const { fetchProducts } = actions;
    try {
        const data = await fetchProducts();
        expect(data.data.products.items.length).not.toEqual(0);
    } catch(e) {
        expect(e).toEqual({
            error: 'Problemas getting products.',
        });
    }
});
