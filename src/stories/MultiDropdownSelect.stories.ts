import type { Meta, StoryObj } from "@storybook/react";
import MultiDropdownSelect from "../MultiDropdownSelect";

const meta = {
  title: "Example/Multi Dropdown Select",
  component: MultiDropdownSelect,
  parameters: {
    layout: "padded",
    style: {
      padding: "400px",
    },
  },
  tags: ["autodocs"],
  argTypes: {
    initialOtions: {
      control: {
        type: "object",
      },
      description:
        "Array of simple strings or objects like { value: string; customTitle?: React.ReactNode } which defines initial options",
    },
    defaultValue: {
      control: {
        type: "object",
      },
      description:
        "Array of strings which defines default value and pre-selected options",
    },
    fullWidth: {
      control: {
        type: "boolean",
      },
    },
    color: { control: "color" },
    className: { control: "text" },
    name: { control: "text" },
    onChange: {
      control: { disable: true },
      description: "Handle selected items in case client made any changes!",
    },
    onOptionsUpdate: {
      control: { disable: true },
      description: "Handle new items in case client entered new options!",
    },
  },
} satisfies Meta<typeof MultiDropdownSelect>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Blue: Story = {
  args: {
    initialOtions: [
      { value: "education", customTitle: "Education 🎓" },
      { value: "science", customTitle: "Yeeeah, science! ⚗️" },
      { value: "art", customTitle: "Art 🎭" },
      { value: "sport", customTitle: "Sport ⚽️" },
      { value: "games", customTitle: "Games 🎮" },
      { value: "health", customTitle: "Health 🏥" },
      { value: "1", customTitle: "Option one" },
      { value: "Two" },
      "Three",
      "4",
    ],
    color: "blue",
    defaultValue: ["education"],
    className: "",
    name: "my_multi_dropdown_select",
  },
};

export const Red: Story = {
  args: {
    initialOtions: [
      { value: "education", customTitle: "Education 🎓" },
      { value: "science", customTitle: "Yeeeah, science! ⚗️" },
      { value: "art", customTitle: "Art 🎭" },
      { value: "sport", customTitle: "Sport ⚽️" },
      { value: "games", customTitle: "Games 🎮" },
      { value: "health", customTitle: "Health 🏥" },
      { value: "1", customTitle: "Option one" },
      { value: "Two" },
      "Three",
      "4",
    ],
    color: "red",
    defaultValue: ["science"],
  },
};
