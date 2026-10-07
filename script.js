function example(name) {
  return `${name}`;
}

console.log(example("Aleksandre"));

//  task 1

function calculateDiscount(price, discount) {
  return price - discount;
}

function checkPrice(price) {
  if (price < 100) {
    return "Cheap product";
  } else {
    return "Expensive product";
  }
}

const finalPrice = calculateDiscount(200, 20);
console.log(checkPrice(finalPrice));
// TASK 2

const player = {
  name: "Shadow",
  health: 75,
  level: 12,
};

function getPlayerHealth(health) {
  if (health > 0) {
    return "Player is alive";
  } else {
    return "Player is defeated";
  }
}

const totalAnsswer = getPlayerHealth(player.health);
console.log(totalAnsswer);

const menu = ["Burger", "Pizza", "Fries", "Cola"];

function getFood(menu, index) {
  return menu[index];
}

function createOrder(food, drink) {
  return `Your order  ${food} + ${drink}`;
}

const food = getFood(menu, 0);
const drink = getFood(menu, 3);
const finalOrder = createOrder(food, drink);
console.log(finalOrder);

const student = {
  name: "Nika",
  score: 78,
};

function checkScore(score) {
  if (score >= 50) {
    return "Passed";
  } else {
    return "Failed";
  }
}

function createStudentResult(name, result) {
  return `${name} ${result}`;
}

const result = checkScore(student.score);
console.log(createStudentResult(student.name, result));

// TASK 5

const trip = {
  country: "japan",
  days: 7,
  budget: 2100,
};

function calculateDailyBudget(budget, days) {
  return budget / days;
}

function checkDailyBudget(dailyBudget) {
  if (dailyBudget >= 200) {
    return "Comfortable trip";
  } else {
    return "Budget trip";
  }
}

const dailyBudget = calculateDailyBudget(trip.budget, trip.days);
console.log(dailyBudget);
console.log(checkDailyBudget(dailyBudget));

// task 5

function getNumber() {
  return 10;
}

function checkNumber(num) {
  if (getNumber > 10) {
    return "Big";
  } else {
    return "Small";
  }
}

const getNum = checkNumber(getNumber());
console.log(getNum);

// CHALLANGES

function calculateTicketPrice(age, type, time) {
  let price = 0;
  if (age < 10) {
    price = 5;
  } else if (age >= 10 && age <= 64) {
    price = 15;
  } else if (age >= 65) {
    price = 10;
  }
  if (type === "3D") {
    price = price + 5;
  }

  return price;
}

let userAge = Number(prompt("Enter your age"));
let userMovieType = prompt("Enter movie type (regular or 3D):");
let userTimeOfDay = prompt("Enter time of day (matinee or evening):");

let finalPricee = calculateTicketPrice(userAge, userMovieType, userTimeOfDay);
console.log(`Ticket price: ${finalPricee} GEL`);

// 2
function rockPaperScissors() {
  let player1 = prompt("player 1, enter rock,paper or scissors").toLowerCase();
  let player2 = prompt("player 2ს, enter rock,paper or scissors").toLowerCase();

  if (player1 === player2) {
    return "Draws";
  } else if (player1 === "rock") {
    if (player2 === "scissors") {
      return "player1 wins";
    } else {
      return "player2 wins";
    }
  } else if (player1 === "paper") {
    if (player2 === "rock") {
      return "player1 wins";
    } else {
      return "player2 wins";
    }
  } else if (player1 === "scissors") {
    if (player2 === "paper") {
      return "player1 wins";
    } else {
      return "player2 wins";
    }
  }
}

rockPaperScissors();
console.log(rockPaperScissors());

// 3
