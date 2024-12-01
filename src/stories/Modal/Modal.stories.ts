import { Modal } from "../../components";
import { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Modal> = {
    title: 'SincoSgd/Modal',
    component: Modal,
    parameters: {
        layout: 'centered',
    },
};

export default meta;

type Story = StoryObj<typeof Modal>;

export const Basic: Story = {
    args: {
        open: true,
        headerProps: {
            titulo: 'Modal Title',
        },
    },
};