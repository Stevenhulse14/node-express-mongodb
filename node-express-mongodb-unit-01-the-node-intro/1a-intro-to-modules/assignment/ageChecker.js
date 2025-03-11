// Declare the ageChecker function here: BY: Cristine

function ageChecker(age) {
  if (age < 18) {
    return "Child";
  } else if (age >= 18 && age <= 20) {
    return "Military-Age";
  } else if (age >= 21) {
    return "Alcohol-Age";
  } else {
    return "ageChecker error: unexpected input";
  }
}

module.exports = ageChecker;
// Export the ageChecker function here:
