"use client";

import React from "react";

import Modal from "@/app/components/common/Modal";
import Button from "@/app/components/ui/Button";

interface AddProjectModalProps {
    isOpen: boolean;
    onClose: () => void;
    onSave: () => void;
}

const AddProjectModal = ({ isOpen, onClose, onSave }: AddProjectModalProps) => {
    return (
        <Modal open={isOpen} onClose={onClose} modalClass="max-w-150">
            <div className="flex h-full flex-col bg-white">
                <div className="px-4 md:px-6 py-5 border-b border-light-grey-300">
                    <h2 className="text-lg xl:text-xl font-semibold text-midnight-blue tracking-minimal">
                        Add Project
                    </h2>
                </div>

                <div className="flex-1 p-4 md:px-6 bg-white" />

                <div className="border-t border-light-grey-300 px-4 md:px-6 py-4">
                    <div className="flex justify-end gap-2">
                        <Button variant="outline" onClick={onClose}>
                            Cancel
                        </Button>
                        <Button onClick={onSave}>
                            Add Project
                        </Button>
                    </div>
                </div>
            </div>
        </Modal>
    );
};

export default AddProjectModal;