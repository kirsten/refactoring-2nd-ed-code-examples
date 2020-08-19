let defaultOwnerData = { firstName: "Kirsten", lastName: "Nordine" };

export function defaultOwner() { return new Person(defaultOwnerData); }
export function updateDefaultOwner(ownerData) { defaultOwnerData = ownerData; }

class Person {
  constructor(data) {
    this._lastName = data.lastName;
    this._firstName = data.firstName;
  }

  get lastName() { return this._lastName; }
  get firstName() { return this._firstName; }
}

