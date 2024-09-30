class Person {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
    printDetails() {
      console.log(`Name: ${this.name}, Age: ${this.age}`);
    }
  }
  class Student extends Person {
    constructor(name, age, rollNo) {
      super(name, age);
      if (rollNo <= 0) {
        throw new Error('Roll number must be greater than zero');
      }
      if(age<=0){
        throw new Error('Age should be greater than 0')
      }
      this.rollNo = rollNo;
    }
    printDetails() {
      
      super.printDetails(); 
      console.log(`Roll No: ${this.rollNo}`);
    }
  }
  try {
    const student2 = new Student('Rujuta', 0, 10);
    student2.printDetails(); 
  } catch (error) {
    console.error(error.message);  
  }
  