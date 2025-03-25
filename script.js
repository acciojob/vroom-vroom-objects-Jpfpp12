function Car(make, model) {
    this.make = make;
    this.model = model;
}

// Add method to the Car prototype
Car.prototype.getMakeModel = function() {
    return `${this.make} ${this.model}`;
};

// SportsCar Constructor (inherits from Car)
function SportsCar(make, model, topSpeed) {
    // Call the parent constructor (Car)
    Car.call(this, make, model);
    this.topSpeed = topSpeed;
}

// Inherit from Car's prototype
SportsCar.prototype = Object.create(Car.prototype);
SportsCar.prototype.constructor = SportsCar;

// Add method to SportsCar prototype
SportsCar.prototype.getTopSpeed = function() {
    return this.topSpeed;
};