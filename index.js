
            function Car(make, model, year){

                this.make = make;
                this.model = model;
                this.year = year;
                this.getCarInfo = function (){
                    return (this.model + " " +this.make + ", released" + " in" + " " + this.year);
                };



            };

            function Person (name, age, cars){
                this.name = name;
                this.age = age;
                this.cars = cars;
                this.hasCar = function (){
                    return (this.name + " is" + " " +this.age + " years old and has" + " " + this.cars.getCarInfo());


                };

            }

            var tesla = new Car("Model S", "Tesla", 2015);


            var tom = new Person("Tom", 24, tesla);
           
           
            document.write(tom.hasCar());