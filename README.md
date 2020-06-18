# Timed Quiz

This project is a question multiple choice quiz on a topic of my choosing.  The content will the The Philadelphia 76ers basketball team


## Quiz Design

```
User has 60 seconds to answer 10 multiple choice questions
Correct answers will be worth 10 points each
Incorrect answers will deduct 5 seconds from the timer
Total score will include points for correctly answered questions and a time bonus added on top
When the quiz is over... either by answering all questions or when time runs out... the user will be able to enter their name and placed on the leaderboard
```

## Site navigation, high scores and local storage

```
There is a navigation bar on the main home page that shows Start Quiz, High Scores and Retake Quiz
    Start Quiz will start the timer and launch questions
    High Scores will take user to a second HTML page where they can see the scores of other users
    Retake Quiz will be used to reset the Q&A back to the beginning
The main window shows the user instructions until the Start Quix button is selected
There is also an option to play they 76ers theme song on the main page
The High Scores Page is a separte HTML with separate Javascript
    Page shows uder name and their scores and sorts the scres from highest to lowest
    Page has two buttons in the navigation bar:
        Return to Quiz - Takes user back to main HTML/ Quiz UI
        Clear Scores - Will clear data from the local storage
```


Link to site https://pmulhern.github.io/timedQuiz/