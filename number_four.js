//Write a function called checkSeason, it takes a month parameter and returns the season:Autumn, Winter, Spring or Summer.

function checkSeason(month) {
  month = month.toLowerCase();
  switch (month) {
    case "december":
    case "january":
    case "february":
      return "winter";
    case "march":
    case "april":
    case "may":
      return "spring";
    case "june":
    case "july":
    case "august":
      return "summer";
    case "september":
    case "october":
    case "november":
      return "autumn";

    // there were no need for break statements as the return statments do the job
  }
}

console.log(checkSeason("October"));
console.log(checkSeason("February"));
console.log(checkSeason("march"));
console.log(checkSeason("august"));
