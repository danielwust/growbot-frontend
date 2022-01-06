import React from "react";

const quests = [
    {
        name: {
            quest: "Qual é o seu principal nome em cadastros?",
            subquest: "Selecione uma das opções",
            answers: [
                "Nome",
                "Sobrenome",
                "Nome de batalha",
                "Usuario de acesso",
            ],
            type: "multiple",
        },
    },
    {
        email: {
            quest: "Qual o seu email?",
            subquest: "Insira seu email",
            answers: ["Email"],
            type: "input",
        },
    },
    {
        date: {
            quest: "Qual a sua data de nascimento?",
            subquest: "Insira seu nascimento",
            answers: ["Data de nascimento"],
            type: "input",
        },
    },
];

let answers = [];
quests[0].name.answers.map((answer, index) => {
		answers.push(<p key={index}>{answer}</p>);
}, this);

function ChatContent() {
    return (
        <div>
            <img
                src="assets/images/bot/flixbot.gif"
                alt="bot"
                style={{
                    maxWidth: "256px",
                    width: "25%",
                }}
                className="rounded-6"
            />
            <h1 className="py-14">{quests[0].name.quest}</h1>
            <h4 className="pb-12">{quests[0].name.subquest}</h4>
            <blockquote>{answers}</blockquote>
        </div>
    );
}

export default React.memo(ChatContent);
