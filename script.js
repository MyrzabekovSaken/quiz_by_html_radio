function checkResult() {
    const first_answer = document.querySelector('input[name="answer_1"]:checked');
    const second_answer = document.querySelector('input[name="answer_2"]:checked');
    const third_answer = document.querySelector('input[name="answer_3"]:checked');

    let score = 0;

    if (first_answer && first_answer.value === "Argentina") {
        score++;
    } 
    if (second_answer && second_answer.value== "RealMadrid") {
        score++;
    } 
    if (third_answer && third_answer.value== "EliudKipchoge") {
        score++;
    }

    document.getElementById("result").innerHTML = "Your score is: " + score; 
    document.getElementById("first_answer_1").checked = false;
    document.getElementById("first_answer_2").checked = false;
    document.getElementById("first_answer_3").checked = false;
    document.getElementById("second_answer_1").checked = false;
    document.getElementById("second_answer_2").checked = false;
    document.getElementById("second_answer_3").checked = false;
    document.getElementById("third_answer_1").checked = false;
    document.getElementById("third_answer_2").checked = false;
    document.getElementById("third_answer_3").checked = false;
}
