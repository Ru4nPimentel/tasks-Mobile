describe('Comparar numeros', () => {
  it('use de comparação', () => {
    expect(1 + 2).toBeGreaterThan(1) // ele verifica se o numero e maior
    expect(1 + 2).toBeGreaterThanOrEqual(1) // ele verifica se o numero e maior ou igual

    expect(1 + 2).toBeLessThan(4) // ele verifica se o numero e menor
    expect(1 + 2).toBeLessThanOrEqual(3) //  ele verifica se o numero e menor ou igual
  });
})
