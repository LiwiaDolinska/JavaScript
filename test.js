
var myCar = {

    maxSpeed: 70,
    driver: "Net Ninja",
    drive: function(speed, time){
        console.log(speed * time);
    },
    logDriver: function(){
        console.log("driver name is " + this.driver);
    }

};

var Car = function(maxSpeed, driver){

    this.maxSpeed = maxSpeed;
    this.driver = driver;
    this.drive = function(speed, time){
        console.log(speed * time);
};
  this.logDriver = function(){
    console.log("driver name is " + this.driver);
  };

}

var myCar = new Car(70, "Ninja");
var myCar2 = new Car(40, "Me");
var myCar3 = new Car(10, "Bond");
var myCar4 = new Car(90, "Shrek");

myCar.drive(30,5);
myCar3.logDriver();


  

