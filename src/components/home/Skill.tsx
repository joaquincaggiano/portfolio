"use client";

import { ReactNode, useState } from "react";
import { useTranslations } from "next-intl";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "@heroui/modal";
import { Button } from "@heroui/button";

interface Props {
  name: string;
  icon: ReactNode;
  description: string;
}

const Skill = ({ name, icon, description }: Props) => {
  const [openModal, setOpenModal] = useState(false);

  const t = useTranslations();

  return (
    <>
      <div
        className="flex flex-col justify-between items-center gap-3 p-2 mb-3 cursor-pointer transform hover:scale-125 transition duration-300"
        onClick={() => setOpenModal(true)}
      >
        {icon}

        <h4 className="text-base text-white font-normal">{name}</h4>
      </div>

      <Modal
        isOpen={openModal}
        onOpenChange={setOpenModal}
        backdrop="blur"
        placement="top-center"
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="text-lg sm:text-xl lg:text-2xl font-semibold">
                {name}
              </ModalHeader>
              <ModalBody>
                <p className="text-sm sm:text-base lg:text-lg font-normal">
                  {description}
                </p>
              </ModalBody>
              <ModalFooter>
                <Button
                  variant="bordered"
                  className="border-blue-light hover:bg-gradient-to-r from-blue-dark to-blue-light font-medium hover:border-0"
                  onPress={onClose}
                >
                  {t("common.close")}
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};

export default Skill;
