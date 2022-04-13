import Button from "./Button.js";

export default {
  title: "components/Button",
  component: Button,
};

const Template = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: "Find a place to live!",
};
