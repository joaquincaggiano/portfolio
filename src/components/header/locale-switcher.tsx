"use client";

import { useLocale } from "next-intl";
import { useState, useTransition } from "react";
import { Button } from "@heroui/button";
import { Card, CardBody } from "@heroui/card";
import EspFlagSvg from "../svg/EspFlagSvg";
import UsaFlagSvg from "../svg/UsaFlagSvg";
import { usePathname, useRouter } from "@/i18n/routing";

const LocaleSwitcher = () => {
  const [openModal, setOpenModal] = useState(false);
  const [isPending, startTransition] = useTransition();
  const router = useRouter();
  const localActive = useLocale();
  const pathname = usePathname();

  const onSelectChange = (nextLocale: "es" | "en" | undefined) => {
    startTransition(() => {
      router.replace(`/${pathname}`, { locale: nextLocale });
    });
  };

  return (
    <>
      <Button
        variant="bordered"
        className="border-0"
        // className="border-blue-light border-1"
        onPress={() => setOpenModal(!openModal)}
        startContent={localActive === "es" ? <EspFlagSvg /> : <UsaFlagSvg />}
      >
        {localActive.toUpperCase()}
      </Button>

      {openModal && (
        <Card className="absolute top-14 w-full max-w-[100px] bg-gradient-to-r from-blue-dark to-blue-light">
          <CardBody className="flex flex-col">
            <Button
              disabled={isPending}
              onPress={() => onSelectChange("es")}
              endContent={<EspFlagSvg />}
              variant="light"
              className="text-base"
            >
              ES
            </Button>
            <Button
              disabled={isPending}
              onPress={() => onSelectChange("en")}
              endContent={<UsaFlagSvg />}
              variant="light"
              className="text-base"
            >
              EN
            </Button>
          </CardBody>
        </Card>
      )}
    </>
  );
};

export default LocaleSwitcher;
