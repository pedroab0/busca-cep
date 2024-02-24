// dependencies
import React from 'react';
import { ComponentStory, Meta } from '@storybook/react';

// component
import { Button, ButtonProps } from '.';


export default {
  title: 'Button',
  component: Button,
} as Meta<typeof Button>;

const Template: ComponentStory<typeof Button> = (
  props: ButtonProps
) => <Button {...props} />;

const onClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
  console.log(event);
};

export const Default = Template.bind({});
Default.args = {
  label: 'Fazer busca',
};