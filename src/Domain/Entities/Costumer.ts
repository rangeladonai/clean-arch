import Email from "../ValueObjects/Email";

export default class Costumer {
  public idCostumer: string;
  public name: string;
  public email: string;

  constructor(idCostumer: string, name: string, email: string) {
    this.idCostumer = idCostumer;
    this.name = name;
    this.email = new Email(email).getValue();
  }
}
