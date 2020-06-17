let storedUserName = JSON.parse(localStorage.getItem("User Name"));
let storedFinalScore =  JSON.parse(localStorage.getItem("User Score"));

// var scores = [
//     storedUserName, 
//     storedFinalScore ]


// function makeUL(array) {
//     // Create the list element:
//     var list = document.createElement('ol');

//     for (var i = 0; i < array.length; i++) {
//         // Create the list item:
//         var item = document.createElement('li');

//         // Set its contents:
//         item.appendChild(document.createTextNode(array[i]));

//         // Add it to the list:
//         list.appendChild(item);
//     }

//     // Finally, return the constructed list:
//     return list;
// }

// Add the contents of options[0] to #foo:
// document.getElementById('highScores').appendChild(makeUL(scores[1]));


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
                let htmlText = ""
    for (var j = 0; j < score.length; j++) {
        htmlText += `<p class='innerScore'> ${j+1+")"} ${user[j]}: ${score[j]} </p>`

    } 
    document.getElementById("highScores").innerHTML =htmlText;
}
highScores();



