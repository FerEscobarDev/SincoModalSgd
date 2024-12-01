import { useState } from "react";
import { Modal } from "../../components";
import { Meta, StoryObj } from "@storybook/react";
import { ContextModal } from "@context/contextModal";

const meta = {
    title: 'SincoSgd/Modal',
    component: Modal,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof Modal>;

export default meta;

type Story = StoryObj<typeof Modal>;

const ModalProviderDecorator = (Story: any) => {
    const [isOpen, setIsOpen] = useState(true);
    const handleCierre = () => setIsOpen(false);
    return (
        <ContextModal.Provider value={{ modal: { open: isOpen }, handleCierre }}>
            <Story />
        </ContextModal.Provider>
    );
};

export const Basic: Story = {
    args: {
        open: true,
    },
    decorators: [ModalProviderDecorator],
};