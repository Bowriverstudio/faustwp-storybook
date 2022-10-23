import React from "react";

import TestImage from "../TestImage";

export default {
  title: "Example/TestImage",
  component: TestImage,
};

const Template = (args) => <TestImage {...args} />;

export const TestImageStory = Template.bind({});
