function updateScore(){
    score = 0
    new_score = score + 1
    document.getElementById("Score_screen").innerHTML = new_score
}
function Save_s(){
    localStorage.setItem("score",new_score);
}
function Next(){
    window.location = "activity.html";
}