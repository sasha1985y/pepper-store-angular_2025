interface UserInterface {
  getName(): string;
  setName(name: string): void;
  getAge(): number;
  setAge(age: number): void;
  id: string;
}

class User implements UserInterface {
  _name: string;
  age: number;
  id: string;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  get name(): string {
    return this.name;
  }

  setName(name: string): void {
    this.name = name;
    fetch(`/api/users/${this.id}/name`, {
      method: "PUT",
      body: JSON.stringify({ name }),
    }).then(response => response.json());
  }

  onSetName() {}

  getAge(): number {
    return this.age;
  }

  setAge(age: number): void {
    this.age = age;
    fetch(`/api/users/${this.id}/age`, {
      method: "PUT",
      body: JSON.stringify({ age }),
    }).then(response => response.json());
  }
}


