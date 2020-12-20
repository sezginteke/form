describe("form", () => {
  class A {
    public dummy: number = 5;
  }

  let dummy: A = new A();

  beforeAll(async () => {
    dummy.dummy = 6;
  });

  test("test - 1", () => {
    expect(dummy.dummy).toEqual(6);
  });
});
