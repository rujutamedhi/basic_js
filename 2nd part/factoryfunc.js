function createPerson(name, age, job) {
    return {
      name: name,
      age: age,
      job: job,
      
     
      printDetails: function() {
        console.log(`Name: ${this.name}`);
        console.log(`Age: ${this.age}`);
        console.log(`Job: ${this.job}`);
      }
    };
  }
  

  const person = createPerson('Rujuta', 20, 'Software Engineer');
  

  person.printDetails();
  