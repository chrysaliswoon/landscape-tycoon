// Set the initial amount for each value

let bank = 100;
let staminaLevel = 100;
let inventory = null;

const teethSalary = 1;
const sccisorsSalary = 5;
const pushLawnSalary = 50;
const battLawnSalary = 100;
const studentSalary = 250;

const staminaRecover = 10;

let teethStats = {
    qty: 1,
    price: "free",
    staminaCost: 50,
}

let scissorsStats = {
    qty: 0,
    price: 5,
    staminaCost: 40,
}

let pushLawnMowerStats = {
    qty: 0,
    price: 25,
    staminaCost: 30,
}

let battLawnMowerStats = {
    qty: 0,
    price: 250,
    staminaCost: 20,
}

let studentStats = {
    qty: 0,
    price: 500,
    staminaCost: 10,
}


// function purchase(item) {
//     switch(item) {
//         case 1;
//         if (scissorsStats.price <= bank) {
//             bank = bank - scissorsStats.price;
//             scissorsStats.qty = scissorsStats.qty + 1;
//         }
//         break;
//     }
//     update()
// }

// function update() {
//     scissorsAmt.innerHTML = "Qty: " + scissorsStats.qty;
// }

function useTeeth() {
    terminal.innerHTML = "You've selected to use your TEETH to mow the lawn."; 
    inventory = "teeth"
}

function useScissors() {
    terminal.innerHTML = "You've selected to use the RUSTY SCISSORS to mow the lawn.";
    inventory = "scissors"
}

function useMower() {
    terminal.innerHTML = "You've selected to use the OLD-TIMEY PUSH LAWNMOWER to mow the lawn.";
    inventory = "pushLawnMower"
}

function useBatteryMower() {
    terminal.innerHTML = "You've selected to use the FANCY BATTERY LAWNMOWER to mow the lawn.";
    inventory = "battLawnMower"
}

function useStudents() {
    terminal.innerHTML = "You've selected to deploy the STUDENTS to mow the lawn.";
    inventory = "students"

}

////////////////

function purchaseScissors() {
    terminal.innerHTML = "You've purchased 1 RUSTY SCISSORS at $" + scissorsStats.price;
    scissorsStats.qty = scissorsStats.qty + 1;
    bank = bank - scissorsStats.price;
    scissorsAmt.innerHTML = "Qty: " + scissorsStats.qty;
    cash.innerHTML = "Bank:$ " + bank;
}

function purchaseMower() {
    terminal.innerHTML = "You've purchased 1 OLD-TIMEY PUSH LAWNMOWER at $" + pushLawnMowerStats.price;
    pushLawnMowerStats.qty = pushLawnMowerStats.qty + 1;
    bank = bank - pushLawnMowerStats.price;
    mowerAmt.innerHTML = "Qty: " + pushLawnMowerStats.qty;
    cash.innerHTML = "Bank:$ " + bank;
}

function purchaseBatteryMower() {
    terminal.innerHTML = "You've purchased 1 FANCY BATTERY LAWNMOWER at $" + battLawnMowerStats.price;
    battLawnMowerStats.qty = battLawnMowerStats.qty + 1;
    bank = bank - battLawnMowerStats.price;
    batteryAmt.innerHTML = "Qty: " + battLawnMowerStats.qty;
    cash.innerHTML = "Bank:$ " + bank;
}

function purchaseStudents() {
    terminal.innerHTML = "You've hired 1 STUDENT for your lanscape empire at $" + studentStats.price + " for every lawn you mow.";
    studentStats.qty = studentStats.qty + 1;
    bank = bank - studentStats.price;
    studentsAmt.innerHTML = "Hired: " + studentStats.qty;
}

////////////////

function sellScissors() {
    terminal.innerHTML = "You've sold 1 RUSTY SCISSORS at $" + (scissorsStats.price - 3);
    scissorsStats.qty = scissorsStats.qty - 1;
    bank = bank + (scissorsStats.price - 10);
    scissorsAmt.innerHTML = "Qty: " + scissorsStats.qty;
    cash.innerHTML = "Bank:$ " + bank;
}

function sellMower() {
    terminal.innerHTML = "You've sold 1 OLD-TIMEY PUSH LAWNMOWER at $" + (pushLawnMowerStats.price - 15);
    pushLawnMowerStats.qty = pushLawnMowerStats.qty - 1;
    bank = bank + (pushLawnMowerStats.price - 15);
    mowerAmt.innerHTML = "Qty: " + pushLawnMowerStats.qty;
    cash.innerHTML = "Bank:$ " + bank;
}

function sellBatteryMower() {
    terminal.innerHTML = "You've sold 1 FANCY BATTERY LAWNMOWER at $" + (battLawnMowerStats.price - 100);
    battLawnMowerStats.qty = battLawnMowerStats.qty - 1;
    bank = bank + (battLawnMowerStats.price - 100);
    batteryAmt.innerHTML = "Qty: " + battLawnMowerStats.qty;
    cash.innerHTML = "Bank:$ " + bank;
}

function sellStudents() {
    terminal.innerHTML = "You've fired 1 STUDENT from your lanscape empire." ;
    studentStats.qty = studentStats.qty - 1;
    studentsAmt.innerHTML = "Hired: " + studentStats.qty;
}

/////////////////////////

function mowLawn() {
    if (inventory === "teeth") {
        terminal.innerHTML = "You've used your teeth to mow the lawn and earned $" + teethSalary;  
        bank = bank + teethSalary;  
        cash.innerHTML = "Bank:$ " + bank;
        staminaLevel = staminaLevel - teethStats.staminaCost
        stamina.innerHTML = "Stamina:" + staminaLevel
    } else if (inventory === "scissors") {
        terminal.innerHTML = "You've used the rusty scissors to mow the lawn and earned $" + sccisorsSalary  
        bank = bank + sccisorsSalary;  
        cash.innerHTML = "Bank:$ " + bank;  
        staminaLevel = staminaLevel - scissorsStats.staminaCost
        stamina.innerHTML = "Stamina:" + staminaLevel
    } else if (inventory === "pushLawnMower") {
        terminal.innerHTML = "You've used the old-timey push lawnmower to mow the lawn and earned $" + pushLawnSalary   
        bank = bank + pushLawnSalary;  
        cash.innerHTML = "Bank:$ " + bank; 
        staminaLevel = staminaLevel - pushLawnMowerStats.staminaCost
        stamina.innerHTML = "Stamina:" + staminaLevel
    } else if (inventory === "battLawnMower") {
        terminal.innerHTML = "You've used the fancy battery lawnmower to mow the lawn and earned $" + battLawnSalary   
        bank = bank + battLawnSalary;  
        cash.innerHTML = "Bank:$ " + bank; 
        staminaLevel = staminaLevel - battLawnMowerStats.staminaCost
        stamina.innerHTML = "Stamina:" + staminaLevel
    } else if (inventory === "students") {
        terminal.innerHTML = "You've deployed the students to mow the lawn for you and earned $" + studentSalary   
        bank = bank + studentSalary;  
        cash.innerHTML = "Bank:$ " + bank; 
        staminaLevel = staminaLevel - studentStats.staminaCost
        stamina.innerHTML = "Stamina:" + staminaLevel
    } else {
        terminal.innerHTML = "Select a tool to use to mow the lawn."
    }
}

////////////////////////////////

function takeBreak() {
    terminal.innerHTML = "You've taken a short break and recovered " + staminaRecover + " stamina."
    staminaLevel = staminaLevel + staminaRecover
    stamina.innerHTML = "Stamina:" + staminaLevel
}

function reset() {
    terminal.innerHTML = "The game has reset to it's initial values.";
    bank = 100;
    cash.innerHTML = "Bank:$ " + bank;
    stamina = 100;
    stamina.innerHTML = stamina;
    scissorsStats.qty = 0;
    scissorsAmt.innerHTML = "Qty: " + scissorsStats.qty;
    pushLawnMowerStats.qty = 0;
    mowerAmt.innerHTML = "Qty: " + pushLawnMowerStats.qty;
    battLawnMowerStats.qty = 0;
    batteryAmt.innerHTML = "Qty: " + battLawnMowerStats.qty;
    studentStats.qty = 0;
    studentsAmt.innerHTML = "Qty: " + studentStats.qty;
}