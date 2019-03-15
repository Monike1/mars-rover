// Rover Object Goes Here
// ======================
var rover1 = {
  direction: "N",
  x: 0,
  y: 0,
  travelLog: []
}
// ======================
var rover2 = {
  direction: "N",
  x: 0,
  y: 9,
  travelLog: []
}

var rover3 = {
  direction: "N",
  x: 3,
  y: 0,
  travelLog: []
}

// R is a rover, X is an obstacle on the map
var grid = [
  ["R", null, "X", null, null, null, null, null, null, "R"],
  [null, null, null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, "X", null, null],
  ["R", null, null, null, null, null, null, null, null, null],
  [null, null, null, "X", null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null, null, null],
  [null, null, null, null, null, "X", null, null, null, null],
  ["X", null, null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null, null, null],
];
var commands;


function turnLeft(rover){
  console.log("turnLeft was called!");
  switch (rover.direction) {
    case "W":
    rover.direction = "S";
    break;
    case "E":
    rover.direction = "N";
    break;
    case "S":
    rover.direction = "E";
    break;
    default:
    rover.direction = "W"
  }
  return rover.direction;
}

function turnRight(rover){
  console.log("turnRight was called!");
  switch (rover.direction) {
    case "W":
    rover.direction = "N";
    break;
    case "E":
    rover.direction = "S";
    break;
    case "S":
    rover.direction = "W";
    break;
    default:
    rover.direction = "E";
  } 
  return rover.direction;
}

function moveForward(rover){
  console.log("moveForward was called");
  var coordinates = [rover.x, rover.y];
  
// if statement adds map's boundaries and adds one step to the position
if (rover.direction === "N" && rover.x > 0) {
  if (grid[rover.x - 1][rover.y] === "X") {
    console.log("An obstacle found!");
  } else if (grid[rover.x - 1][rover.y] === "R") {
    console.log("Another rover on your way!");
  } else {
    grid[rover.x][rover.y] = null;
    rover.x -= 1;
    grid[rover.x][rover.y] = "R";
    console.log(rover.x, rover.y);
    rover.travelLog.push(coordinates);
  }
} else if (rover.direction === "S" && rover.x < 9) {
  if (grid[rover.x + 1][rover.y] === "X") {
    console.log("An obstacle found!");
  } else if (grid[rover.x + 1][rover.y] === "R") {
    console.log("Another rover on your way!");
  } else {
    grid[rover.x][rover.y] = null;
    rover.x += 1;
    grid[rover.x][rover.y] = "R";
    console.log(rover.x, rover.y);
    rover.travelLog.push(coordinates);
  }
} else if (rover.direction === "E" && rover.y < 9) {
  if (grid[rover.x][rover.y + 1] === "X") {
    console.log("An obstacle found!");
  } else if (grid[rover.x][rover.y + 1] === "R") {
    console.log("Another rover on your way!");
  } else {
    grid[rover.x][rover.y] = null;
    rover.y += 1;
    grid[rover.x][rover.y] = "R";
    console.log(rover.x, rover.y);
    rover.travelLog.push(coordinates);
  }
} else if (rover.direction === "W" && rover.y > 0) {
  if (grid[rover.x][rover.y - 1] === "X") {
    console.log("An obstacle found!");
  } else if (grid[rover.x][rover.y - 1] === "R") {
    console.log("Another rover on your way!");
  } else {
    grid[rover.x][rover.y] = null;
    rover.y -= 1;
    grid[rover.x][rover.y] = "R";
    console.log(rover.x, rover.y);
    rover.travelLog.push(coordinates);
  }
} else {
  console.log("You can't go forward! End of map");
}
}

function moveBackwards(rover){
  console.log("moveBackwards was called");
  var coordinates = [rover.x, rover.y];
  
// if statement adds map's boundaries and adds one step to the position
if (rover.direction === "N" && rover.x < 9) {
  if (grid[rover.x + 1][rover.y] === "X") {
    console.log("An obstacle found!");
  } else if (grid[rover.x + 1][rover.y] === "R") {
    console.log("Another rover on your way!");
  } else {
    grid[rover.x][rover.y] = null;
    rover.x += 1;
    grid[rover.x][rover.y] = "R";
    console.log(rover.x, rover.y);
    rover.travelLog.push(coordinates);
  }
} else if (rover.direction === "S" && rover.x > 0) {
  if (grid[rover.x - 1][rover.y] === "X") {
    console.log("An obstacle found!");
  } else if (grid[rover.x - 1][rover.y] === "R") {
    console.log("Another rover on your way!");
  } else {
    grid[rover.x][rover.y] = null;
    rover.x -= 1;
    grid[rover.x][rover.y] = "R";
    console.log(rover.x, rover.y);
    rover.travelLog.push(coordinates);
  }
} else if (rover.direction === "E" && rover.y > 0) {
  if (grid[rover.x][rover.y - 1] === "X") {
    console.log("An obstacle found!");
  } else if (grid[rover.x][rover.y -1] === "R") {
    console.log("Another rover on your way!");
  } else {
    grid[rover.x][rover.y] = null;
    rover.y -= 1;
    grid[rover.x][rover.y] = "R";
    console.log(rover.x, rover.y);
    rover.travelLog.push(coordinates);
  }
} else if (rover.direction === "W" && rover.y < 9) {
  if (grid[rover.x][rover.y + 1] === "X") {
    console.log("An obstacle found!");
  } else if (grid[rover.x][rover.y + 1] === "R") {
    console.log("Another rover on your way!");
  } else {
    grid[rover.x][rover.y] = null;
    rover.y += 1;
    grid[rover.x][rover.y] = "R";
    console.log(rover.x, rover.y);
    rover.travelLog.push(coordinates);
  }
} else {
  console.log("You can't go backwards! End of map");
}
}

function listOfCommands(rover, commands) {
  for (var i = 0; i < commands.length; i++) {
    if (commands[i] === "r") {
      turnRight(rover);
    } else if (commands[i] === "l") {
      turnLeft(rover);
    } else if (commands[i] === "f") {
      moveForward(rover);
    } else if (commands[i] === "b") {
      moveBackwards(rover);
    } else {
      console.log("Inputs must be f, b, r or l.")
    }
  }
  console.log("All the spaces the rover has traveled over: " + rover.travelLog.join("; ") + "; " + rover.x + "," + rover.y);
}

listOfCommands(rover1, "bbbrffrfflfrflffffffff");
listOfCommands(rover2, "bbbbblflffffff");
listOfCommands(rover3, "rfrflffrfrfffrbbb");