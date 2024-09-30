class person {
    constructor(name) {
      this.name = name;
    }
    display = () => { 
      
      console.log(`My name is ${this.name}`);
    }
  }
  const p = new person('Rujuta');
p.display();

  