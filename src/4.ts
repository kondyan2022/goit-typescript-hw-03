class Key {
  private signature: number;
  constructor() {
    this.signature = Math.random();
  }
  getSignature(): number {
    return this.signature;
  }
}

class Person {
  constructor(protected key: Key) {}
  getKey(): Key {
    return this.key;
  }
}
abstract class House {
  private tenants: Person[];
  protected door: boolean;
  constructor(protected key: Key) {}
  public comeIn(person: Person): void {
    if (this.door) {
      this.tenants.push(person);
    }
  }
  public abstract openDoor(key: Key): void;
}

class MyHouse extends House {
  openDoor(key: Key) {
    this.door = this.key.getSignature() === key.getSignature();
  }
}
const key = new Key();

const house = new MyHouse(key);
const person = new Person(key);

house.openDoor(person.getKey());

house.comeIn(person);

export {};
