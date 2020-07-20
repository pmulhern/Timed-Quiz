//create a timer set to 60 seconds
var time = 60

function timer() {
    var x = setInterval(function() {
    document.getElementById("count").innerHTML="Time:"+" "+time+" seconds";
    time=time-1;

    if(time<0){time=0 && hideQuizForm()}

    if(time <=-1) {
            clearInterval(x);    
        }else if (
            currentQuestionIndex >= lastQuestion)
            clearInterval(x);
}, 1000);
}

//create initial main variables
let score = 0;
let questionEl = document.getElementById("question");
let choiceA = document.getElementById("A");
let choiceB = document.getElementById("B");
let choiceC = document.getElementById("C");
let choiceD = document.getElementById("D");
let runningQuestion = 0;
let currentQuestionIndex;
let submitBtn = document.getElementById("Submit");
let clearBtn = document.getElementById("Clear");
let userScore = score;

// array of questions for the quiz
let questions = [
    {
        question : "Who is the starting Center for 76ers?",
        choiceA : "Joel Embiid",
        choiceB : "Ben Simmons",
        choiceC : "Josh Richardson",
        choiceD : "Tobias Harris",
        correct : "A"
    },{
        question : "What year was Ben Simmons selected as the number 1 overall draft pick?",
        choiceA : "2014",
        choiceB : "2016",
        choiceC : "2018",
        choiceD : "2020",
        correct : "B"
    },{
        question : "Who did Tobias Harris play for before the 76ers?",
        choiceA : "Timberwolves",
        choiceB : "Bulls",
        choiceC : "Clippers",
        choiceD : "Heat",
        correct : "C"
    },{
        question : "Who is the 76ers current Head Coach?",
        choiceA : "Maurice Cheeks",
        choiceB : "Doug Collins",
        choiceC : "Larry Brown",
        choiceD : "Brett Brown",
        correct : "D"
    },{
        question : "Allen Iverson's nickname was...",
        choiceA : "The Process",
        choiceB : "The King",
        choiceC : "The Answer",
        choiceD : "The Rock",
        correct : "C"
    },{
        question : "Julius Erving announced his retirement from the NBA in which year?",
        choiceA : "1985",
        choiceB : "1986",
        choiceC : "1987",
        choiceD : "1988",
        correct : "B"
    },{
        question : "How many times have the 76ers been to the NBA finals?",
        choiceA : "4",
        choiceB : "7",
        choiceC : "9",
        choiceD : "12",
        correct : "C"
    },{
        question : "What player won the NBA Championship MVP in 1983?",
        choiceA : "Moses Malone",
        choiceB : "Julius Irving",
        choiceC : "Maurice Cheeks",
        choiceD : "Bobby Jones",
        correct : "A"
    },{
        question : "Which of the following players did NOT win Rookie of the Year?",
        choiceA : "Ben Simmons",
        choiceB : "Allen Iverson",
        choiceC : "Joel Embiid",
        choiceD : "Michael Williams",
        correct : "C"
    },{
        question : "Who is the all time point leader?",
        choiceA : "Allen Iverson",
        choiceB : "Hal Greer",
        choiceC : "Julius Irving",
        choiceD : "Dolph Schayes",
        correct : "B"
    } 
   
];

// Function to capture name for high score
function enterName() {
    let userName = getElementById("userName").value;
}


const lastQuestion = questions.length -1;

//create Event Listener to start quiz 
const startButton = document.getElementById("start-btn")
startButton.addEventListener("click", startQuiz)


//create Event Listener to retake quiz by refreshing the page 
const retakeButton = document.getElementById("retake-btn")
retakeButton.addEventListener("click", retakeQuiz)


function ReTakeBtn() {
    document.getElementById("retake-btn").id = "newid";
}


// Function of functions.  Function, sets currentQuestion Index to zero starts timer and sets questions.  This is one of the main functions in the JS.
function startQuiz() {
    currentQuestionIndex = 0;
    setNextQuestion();
    timer();
    ReTakeBtn();
    document.getElementById('start-btn').style.visibility='hidden';
       
}

//Reloads or refreshes the screen.  Run After the quiz is taken.
function retakeQuiz () {
    location.reload();
}


function setNextQuestion() {
    showQuestion(currentQuestionIndex)
}

//This function maps each question and answer group in our array to the HTML.
function showQuestion () {
    document.getElementById("question").innerHTML=questions[currentQuestionIndex].question;
    document.getElementById("A").innerHTML=questions[currentQuestionIndex].choiceA;
    document.getElementById("B").innerHTML=questions[currentQuestionIndex].choiceB;
    document.getElementById("C").innerHTML=questions[currentQuestionIndex].choiceC;
    document.getElementById("D").innerHTML=questions[currentQuestionIndex].choiceD;
}


// This function is also a main driver.  It grades questions, adds points for correct questions, removes time for incorrect questions and scrolls through the questions until the end of the question index or time runs out.
function checkAnswer(answer){
    if( answer == questions[currentQuestionIndex].correct && time > 0) {
        // answer is correct
        score += 10;
        document.getElementById("display").innerHTML = "Correct!";
    }else{
        // answer is wrong
        time -= 5
        document.getElementById("display").innerHTML = "Incorrect";
    }
    count = 0;
    if(currentQuestionIndex < lastQuestion && time > 0) {
        currentQuestionIndex++;
        showQuestion();
    }else{
        // end the quiz and show the score
        // showScore();
        hideQuizForm();
    }
    
}


document.getElementById('userName').style.display = "none";

// Hide the quiz form.  Function called at end of quiz. And after we will show input box to enter name for high score record.
function hideQuizForm () {
    document.getElementById('question').style.visibility='hidden';
    document.getElementById('A').style.visibility='hidden';
    document.getElementById('B').style.visibility='hidden';
    document.getElementById('C').style.visibility='hidden';
    document.getElementById('D').style.visibility='hidden';
    document.getElementById('display').style.visibility='hidden';
    document.getElementById('userScore').innerText="Your Score is " + parseInt(score+time);
    document.getElementById("userName").style.display = "block";
}


// This section pushes user score and name to the local storage
let localUserName = [];
let localFinalScore = [];

let storedUserName = [];
let storedFinalScore = [];

    submitBtn.addEventListener("click",function(event, localUserName, localFinalScore) {
    event.preventDefault();

    if(localStorage.getItem("User Name") === null ) {
    let userName = document.getElementById("lname").value;
    let finalScore = score+time; 
    
    let localUserName = [];
    let localFinalScore = [];

    localUserName.push(userName)
    localFinalScore.push(finalScore)
  
    localStorage.setItem("User Name", JSON.stringify(localUserName));
    localStorage.setItem("User Score", JSON.stringify(localFinalScore));
    } else {       

        let userName = document.getElementById("lname").value;
        let finalScore = score+time;  
    
        let storedUserName = JSON.parse(localStorage.getItem("User Name"));
        let storedFinalScore =  JSON.parse(localStorage.getItem("User Score"));

        storedUserName.push(userName)
        storedFinalScore.push(finalScore)
        
        localStorage.setItem("User Name", JSON.stringify(storedUserName));
        localStorage.setItem("User Score", JSON.stringify(storedFinalScore));

    }

        alert("Your information has been saved")

        document.getElementById('quiz_display').style.visibility='hidden';
});


// This assigns the clearBtn and clears out the scores stored in the local storage
//     clearBtn.addEventListener("click",function(event) {
//     event.preventDefault();

//     window.localStorage.clear();
// });

// I created this part to confirm the pull from local storage was working correctly.  Not an essential part of the code, more of a control for the developer.
    storedUserName = JSON.parse(localStorage.getItem("User Name"));
    console.log(storedUserName)
    storedFinalScore =  JSON.parse(localStorage.getItem("User Score"));
    console.log(storedFinalScore)

// End JS Code
