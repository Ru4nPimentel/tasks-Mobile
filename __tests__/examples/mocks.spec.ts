describe('Mock', () => {
  it('use de Mock', () => {

    const fakeFunction = jest.fn(); //cria uma função de teste para mock
    const fakeAdd = fakeFunction.mockImplementation((a,b) => 5) //implementa no mock uma implementação da função

    expect(fakeAdd(1,1)).toBe(5)

  });
})
