//Event listener

document.getElementById("markquizBtn").addEventListener("click", markingQuiz);

function markingQuiz() {
  //Variables
  let question1 = document.getElementById("Input1").value;
  let question2 = document.getElementById("Input2").value;
  let question3 = document.getElementById("Input3").value;
  let question4 = document.getElementById("Input4").value;
  let grade1 = document.getElementById("Question1Grade");

  question1 = question1.toLowerCase();
  question2 = question2.toLowerCase();
  question3 = question3.toLowerCase();
  question4 = question4.toLowerCase();
  let num = 1;

  if (question1 == "metal" || question1 == "metals") {
    grade1.innerHTML = "Correct :)";
    document.getElementById("grade").innerHTML = num++;
  } else {
    grade1.innerHTML = "The highest rarity is metal";
  }
  if (
    question2 == "energy refills" ||
    question2 == "energy refill" ||
    question2 == "ads"
  ) {
    document.getElementById("Question2Grade").innerHTML = "Correct :)";
    document.getElementById("grade").innerHTML = num++;
  } else {
    document.getElementById("Question2Grade").innerHTML =
      "You can refill energy by using energy refills and ads";
  }

  if (question3 == "regime flash" || question1 == "red son deathstroke") {
    document.getElementById("Question3Grade").innerHTML = "Correct :)";
    document.getElementById("grade").innerHTML = num++;
  } else {
    document.getElementById("Question3Grade").innerHTML =
      "There are 2 cards that give speed to the team , regime flash and red son deathstroke.";
  }

  if (question4 == "13") {
    document.getElementById("Question4Grade").innerHTML = "Correct :)";
    document.getElementById("grade").innerHTML = num++;
  } else {
    document.getElementById("Question4Grade").innerHTML =
      "There are 13 bronze cards in injustice mobile";
  }
}
