import React from 'react';

import Card from './Card';

const cardStory = {
  title: 'Example/Card',
  component: Card,
  argTypes:
  {
    Clicked: { action: 'clicked' }
  },
};

const Template = (args) => <Card {...args} />;

export const Shows = Template.bind({});
Shows.args = {
  Title: "DareDevil",
  ImageUri: "https://i.pinimg.com/originals/31/5d/d4/315dd46f45fe609566238e394ebf1726.jpg",

};


export default cardStory