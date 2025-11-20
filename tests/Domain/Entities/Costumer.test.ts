import Costumer from "../../../src/Domain/Entities/Costumer";

const costumer = new Costumer("1", "John Doe", "john.doe@example.com");

test("Costumer entity should be created correctly", () => {
  expect(costumer.idCostumer).toBe("1");
  expect(costumer.name).toBe("John Doe");
  //expect(costumer.email).toBe("john.doe@example.com");
  expect(costumer.email).toBe("johnexample@mail.com");
});
