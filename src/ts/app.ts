let cl=console.log;

interface Ibike{
    model:string,
    fuel:string,
    vehicleType:"motorbike",
    company:string,
    milage:number,
    stand:number
}

interface Icar{
    model:string,
    fuel:string,
    vehicleType:"car",
    company:string,
    milage:number
    bootsize:number,
    doors:number
}


type Vehicle =Ibike | Icar
const myBike:Vehicle={
    model:"quertyz",
    fuel:"unlimited",
    vehicleType:"motorbike",
    company:"apache",
    milage:45,
    stand:1
}

const myCar:Vehicle={
    model:"ertyil",
    fuel:"limited",
    vehicleType:"car",
    company: "tata",
    milage:60,
    bootsize:10,
    doors:5
}

cl(myBike.company)
cl(myCar.company)

function printInfo(vehicle:Vehicle){
    if(vehicle.vehicleType==="car"){
        cl(`the number of doors are ${vehicle.doors} and the bootsize is ${vehicle.bootsize}`)
    }
}
printInfo(myCar)

//=========================================================================//


// class Car{
//     drive(){
//         cl(`Driving a Card!!!..`)
//     }
// }

// class Truck{
//     drive(){
//         cl(`driving a Truck!!!...`)
//     }
//     loadCargo(amount:number){
//         cl(`loading a cargo of ${amount}`)
//     }
// }

// type Tvehicle= Car | Truck

// let v1:Car=new Car();
// let v2:Truck=new Truck();


// function moveVehicle(vehicle:Tvehicle){
//     if (vehicle instanceof Car){
//         vehicle.drive
//     }
//     if(vehicle instanceof Truck){
//         vehicle.loadCargo(5000)
//     }
// }


// moveVehicle(v1)
// moveVehicle(v2)

// moveVehicle({
//     loadCargo() { },
//     drive: function (): void {
      
//     }
// })

