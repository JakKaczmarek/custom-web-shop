const bike = [
  {
    id: 2,
    bike_name: "Vitus E-substance Carbon",
    price: 4300,
    category: "Vitus",
    src: "http://localhost:8000/api/bikes/bikesImages/bike2/bike2.jpg",
    alt: "bike2",
    srcArray: [
      {
        id: 5,
        path: "http://localhost:8000/api/bikes/bikesImages/bike2/bike2.jpg",
        bikesId: 2,
      },
      {
        id: 6,
        path: "http://localhost:8000/api/bikes/bikesImages/bike2/bike21.jpg",
        bikesId: 2,
      },
    ],
  },
];

function testing() {
  return bike[0];
}

describe("Products", () => {
  it("Should return bikeName and price", () => {
    expect(bike[0].bike_name).toBe("Vitus E-substance Carbon");
    expect(bike[0].price).toBeGreaterThanOrEqual(1000);
    expect(bike[0].price).toEqual(4300);
  });

  it("test() should return srcArray", () => {
    expect(testing()).toHaveProperty("srcArray");
  });

  it("Should return twice", () => {
    const mock = jest.fn(() => true);
    mock();
    mock();
    expect(mock).toHaveBeenCalledTimes(2);
  });

  it("Should test function", () => {
    const mockCallback = jest.fn((x) => 42 + x);
    mockCallback(1);
    mockCallback(2);
    expect(mockCallback).toHaveBeenCalledTimes(2);
  });
});
