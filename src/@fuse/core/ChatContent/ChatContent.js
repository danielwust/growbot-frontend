import React from "react";

function ChatContent() {
    return (
			<div>
				<img
						src="assets/images/bot/flixbot.gif"	alt="bot"
						style={{
								maxWidth: "256px",
								width: "25%",
						}}
						className="rounded-6"
				/>
				<h1 className="py-14">Pergunta</h1>
				<h4 className="pb-12">Selecione uma das opções</h4>
				<blockquote>
					<p>Paragrafo 1</p>
					<p>Paragrafo 2</p>
					<p>Paragrafo 3</p>
				</blockquote>
			</div>
    );
}

export default React.memo(ChatContent);
