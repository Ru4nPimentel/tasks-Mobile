export function add(x: number, y: number){
  return x + y
}

describe('calc', () => {
  it('should calculate the values', () => {

    expect(add(2,1)).toEqual(3)
  });
});
