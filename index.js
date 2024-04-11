// Add your Circle class here

class Circle {
    constructor(radius) {
      this.radius = radius;
    }
  
    // Getter method for diameter
    get diameter() {
      return this.radius * 2;
    }
  
    // Getter method for circumference
    get circumference() {
      return Math.PI * this.diameter;
    }
  
    // Getter method for area
    get area() {
      return Math.PI * this.radius ** 2;
    }
  
    // Setter method for diameter
    set diameter(diameter) {
      this.radius = diameter / 2;
    }
  
    // Setter method for circumference
    set circumference(circumference) {
      this.radius = circumference / (2 * Math.PI);
    }
  
    // Setter method for area
    set area(area) {
      this.radius = Math.sqrt(area / Math.PI);
    }
  }


  const circle1 = new Circle(5);

  console.log(circle1.radius); 
  console.log(circle1.diameter); 
  console.log(circle1.circumference); 
  console.log(circle1.area); 

  // Using setter methods to update properties
  circle1.diameter = 20;
  console.log(circle1.radius); 
  console.log(circle1.diameter); 
  
  circle1.area = 314.1592653589793;
  console.log(circle1.radius); 
  console.log(circle1.diameter); 
  console.log(circle1.area); 
  