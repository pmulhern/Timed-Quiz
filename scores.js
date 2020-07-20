
// Pulling stored scores from local storage
let storedUserName = JSON.parse(localStorage.getItem("User Name"));
let storedFinalScore =  JSON.parse(localStorage.getItem("User Score"));

// Below is a bubble sort to sort the scores from Highest to Lowest on the Scoreboard
function highScores() {
    let score = storedFinalScore;
    let user = storedUserName;

    for (var i = 0; i < score.length; i++) {
        for (var j = 0; j < score.length; j++) {
            if (score[i] > score[j]) {
                let temp = score[j];
                let tempUser = user[j]
                score[j] = score [i]
                score[i] = temp

                user[j] = user [i]
                user[i] = tempUser
                
         }
        }
    } 
    //Writing the User Name and Scores to the HTML
                let htmlText = ""
    for (var j = 0; j < score.length; j++) {
        htmlText += `<p class='innerScore'> ${j+1+")"} ${user[j]}: ${score[j]} </p>`

    } 
    document.getElementById("highScores").innerHTML=htmlText;
}
// Calling the function
highScores();

// Adding a click function to clear the score board
let clearBtn = document.getElementById("Clear");

clearBtn.addEventListener("click",function(event) {
    event.preventDefault();
    window.localStorage.clear();
    location.reload();
})

// END JS Code
