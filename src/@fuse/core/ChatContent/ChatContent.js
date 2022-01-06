import React from "react";

const quests = [
    {
        quest: "Qual é o seu principal nome em cadastros?",
        subquest: "Selecione uma das opções",
        answers: ["Nome", "Sobrenome", "Nome de batalha", "Usuario de acesso"],
        type: "multiple",
    },
    {
        quest: "Qual o seu email?",
        subquest: "Insira seu email",
        answers: ["Email"],
        type: "input",
    },
    {
        quest: "Qual a sua data de nascimento?",
        subquest: "Insira seu nascimento",
        answers: ["Data de nascimento"],
        type: "input",
    },
];

let answers = [];
quests[0].answers.map((answer, index) => {
    answers.push(<p key={index}>{answer}</p>);
}, this);

function ChatContent() {
    return (
        <div>
            <img
                src="assets/images/bot/flixbot.gif"
								className="rounded-6" alt="bot"
                style={{
                    maxWidth: "256px",
                    width: "25%",
                }}
            />
            <h1 className="py-14">{quests[0].quest}</h1>
            <h4 className="pb-12">{quests[0].subquest}</h4>
            <blockquote>{answers}</blockquote>
        </div>
    );
}

export default React.memo(ChatContent);
