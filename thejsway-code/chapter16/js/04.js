// List of questions (statement + answer)
const questions = [{
    statement: "2+2?",
    answer: "2+2 = 4"
}, {
    statement: "In which year did Christopher Columbus discover America?",
    answer: "1492"
}, {
    statement: "What occurs twice in a lifetime, but once in every year, twice in a week but never in a day?",
    answer: "The E letter"
}];

const content = document.getElementById("content");
for (let i = 0; i < questions.length; i++) {
    const quesName = document.createElement("span");
    quesName.innerText = `Question ${i+1}: `;
    quesName.style.fontWeight = "bold";

    const quesStatement = document.createElement("span");
    quesStatement.innerText = `${questions[i].statement}`;
    quesStatement.style.fontStyle = "italic";

    const ques = document.createElement("div");
    ques.id = `q${i}`;
    ques.appendChild(quesName);
    ques.appendChild(quesStatement);

    const answer = document.createElement("button");
    answer.innerText = "Show answer";
    answer.addEventListener("click", e => {
        const ans = document.createElement("div");
        ans.id = `a${i}`;
        ans.innerText = questions[i].answer;
        ques.appendChild(ans);
        content.removeChild(answer);
    });

    content.appendChild(ques);
    content.appendChild(answer);
}