
function Person(name, age) {
    this.name = name;
    this.age = age;
    
    
    this.printDetails = () => {
      
      console.log(`Name: ${this.name}, Age: ${this.age}`);
    };
    
  }
  
  const person = new Person('Rujuta', 20);
  person.printDetails(); 

  

  