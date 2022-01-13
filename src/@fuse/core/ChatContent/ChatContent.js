import React from "react";

import MessageBox from '@fuse/core/MessageBox';

import { quests, start } from "@server/quests";

let answers = [];
quests[0].answers.map((item, index) => {
    answers.push(<MessageBox item={item} key={index}></MessageBox>);
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
            <div className="flex">{answers}</div>
        </div>
    );
}

export default React.memo(ChatContent);
