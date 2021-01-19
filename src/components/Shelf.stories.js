import React from "react"
import Shelf from "./Shelf"
import * as Cards from "./Card.stories"


const shelfStory = {
    component: Shelf,
    title: "Example/Row",
    argTypes:
    {
        Clicked: { action: 'clicked' }
    },
};

const Template = (args, { loaded: joke }) => <Shelf {...args} {...joke} />;

export const MovieRow = Template.bind({});
MovieRow.args = {
    details: [
        { ...Cards.Shows.args },
        { ...Cards.Shows.args, Title: "The Punisher", ImageUri: "https://cnet4.cbsistatic.com/img/Bi_fHzNUnyVVCxsv3Jcf5OHnE2A=/470x836/2017/09/12/f5bba373-d99e-4ffe-83e9-8bd8a76f280a/the-punisher-netflix-13.jpg" },
        { ...Cards.Shows.args, Title: "Westworld", ImageUri: "https://m.media-amazon.com/images/M/MV5BMTRmYzNmOTctZjMwOS00ODZlLWJiZGQtNDg5NDY5NjE3MTczXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_.jpg" }
    ]
}
MovieRow.loaders = [
    async () => ({
        joke: await (await fetch("https://official-joke-api.appspot.com/random_joke")).json()
    })
]

export default shelfStory