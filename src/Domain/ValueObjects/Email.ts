// value objects são classes que definem um atributo que terá uma validação específica que não pode ser quebrada
// por exemplo um email, cpf, cnpj, etc...
// esses atributos são imutáveis, ou seja, uma vez criado o objeto, ele deve seguir as regras estabelecidas
// e seu valor não pode ser alterado

class Email {
  public emailValue: string;

  constructor(readonly value: string) {
    if (!this.validate(value)) {
      throw new Error("Invalid email format");
    }
    this.emailValue = value;
  }

  validate(value: string): boolean {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(value);
  }

  getValue(): string {
    return this.emailValue;
  }
}

export = Email;
