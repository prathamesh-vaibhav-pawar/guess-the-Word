function player_names(){
    player1 = document.getElementById("player1").value 
    player2 = document.getElementById("player2").value 
    localStorage.setItem("player1_name", player1)
    localStorage.setItem("player2_name",player2)
    window.location = "game_page.html"
}