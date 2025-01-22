"use client";

import { useLocale, useTranslations } from "next-intl";
import { useTransition } from "react";
import { usePathname, useRouter } from "@/i18n/routing";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
} from "@heroui/dropdown";
import { Button } from "@heroui/button";
import EspFlagSvg from "../icons/EspFlagSvg";
import UsaFlagSvg from "../icons/UsaFlagSvg";

const LocaleSwitcher = () => {
  const t = useTranslations("common");
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
    <Dropdown>
      <DropdownTrigger>
        <Button
          variant="bordered"
          className="border-0"
          startContent={localActive === "es" ? <EspFlagSvg /> : <UsaFlagSvg />}
        >
          {localActive.toUpperCase()}
        </Button>
      </DropdownTrigger>
      <DropdownMenu
        aria-label="Language actions"
        disabledKeys={isPending ? ["es", "en"] : []}
      >
        <DropdownItem
          key="es"
          startContent={<EspFlagSvg />}
          onPress={() => onSelectChange("es")}
        >
          {t("spanish")}
        </DropdownItem>
        <DropdownItem
          key="en"
          startContent={<UsaFlagSvg />}
          onPress={() => onSelectChange("en")}
        >
          {t("english")}
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
};

export default LocaleSwitcher;
