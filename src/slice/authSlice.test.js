import actions from './authSlice';

it('Log in with generic credentials', async () => {
    const { login } = actions;
    expect(await login({ email: 'wizeline', password: 'Rocks!' })).toEqual();
});
