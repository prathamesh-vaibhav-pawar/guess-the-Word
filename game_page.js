player_1 = localStorage.getItem("player1_name")
player_2 = localStorage.getItem("player2_name")

player1_Score = 0;
player2_Score = 0;

document.getElementById("player1").innerHTML = player_1 + player1_Score;
document.getElementById("player2").innerHTML = player_2 + player2_Score;

document.getElementById("Question_p").innerHTML = "Question Givern by" + player_1
document.getElementById("Ans_p").innerHTML = "Answer Given by" + player_2

function Send(){
    Ques_word = document.getElementById("type_q").value 
    word = Ques_word.toLowerCase()
    new_word = word.length;
    for(i=0; i<new_word; i+=2){
        letter = word.charAt(i)
        word = word.replace(letter,"_")
    }
    heading = "<h4 id='Ques'>"+word+"</h4> <br>"
    Ans = "<input type = 'text' id = 'inp1' placeholder = 'WriteAnswer'> <br>"
    Send_btn = "<button class = 'btn btn-primary' onclick = 'Check()'>Submit Answer</button> <br>"
    document.getElementById("Show").innerHTML = heading + Ans + Send_btn
    realQ = Ques_word.toLowerCase()
}
player_Answer = "player_1";
Question_turn = "player2";

function Check(){
    Ans_compare = document.getElementById("inp1").value
    realA = Ans_compare.toLowerCase()
    if(realQ == realA){
        if(player_Answer == "player_1"){
            player1_Score = player1_Score + 1
            document.getElementById("player1").innerHTML = player_1 + player1_Score
        }
    else{
        player2_Score = player2_Score + 1
        document.getElementById("player2").innerHTML = player_2 + player2_Score
    }
}
    if(Question_turn == "player_1"){
        player_Answer = "player_1"
        Question_turn = "player2"
        document.getElementById("Question_p").innerHTML = "Question Givern by"+ player_2
        document.getElementById("Ans_p").innerHTML = "Answer Given by" + player_1
    }
    else{
        Question_turn = "player_1"
        player_Answer = "player2"
        document.getElementById("Question_p").innerHTML = "Question Givern by" + player_1
        document.getElementById("Ans_p").innerHTML = "Answer Given by" + player_2
    }
    document.getElementById("Show").innerHTML = " "
    document.getElementById("type_q").innerHTML = " "
}
