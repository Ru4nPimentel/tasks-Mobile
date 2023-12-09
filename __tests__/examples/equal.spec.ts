describe('Igualdade', () => {
  it('uso basico - toEqual', () => {

    expect(1 + 1).toEqual(2)

    expect('devMobile').toEqual('devMobile')
    expect({name: 'ruan'}).toEqual({name: 'ruan'})
  });

  it('uso basico - toBe', () => {
    expect(1 + 1).toBe(2)
    expect('devMobile').toBe('devMobile')
    // expect({name: 'ruan'}).toBe({name: 'ruan'}) // toBe não serve para comparar objetos ja que podem parecer iguais mais o endereçamento e diferente, por isso e usado o toEqual
  });

  it('Not Method', () => {
      expect(1 + 1).not.toEqual(1) // ele vai passar ja que o resultado tem que ser falso
  });

  it('Match - expressoes regulares', () => {
    expect('dev').toMatch(/\w/); // toMatch para testar uma expreção regular
  })
});
