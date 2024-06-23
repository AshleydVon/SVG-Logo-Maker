class Shape {
    constructor() {}
  
    render() {
      return '';
    }
  
    setColor(color) {
      this.color = color;
    }
  }
  
  class Circle extends Shape {
    render() {
      return `<circle cx="150" cy="100" r="80" fill="${this.color}"></circle>`;
    }
  }
  
  class Triangle extends Shape {
    render() {
      return `<polygon points="150,18,244,182,56,182" fill="${this.color}"></polygon>`;
    }
  }
  
  class Square extends Shape {
    render() {
      return `<rect x="50" y="50" width="200" height="200" fill="${this.color}"></rect>`;
    }
  }
  
  module.exports.Circle = Circle;
  module.exports.Triangle = Triangle;
  module.exports.Square = Square;