import { HeroUIProvider } from "@heroui/system";

export function ProviderUI({ children }: { children: React.ReactNode }) {
  return <HeroUIProvider>{children}</HeroUIProvider>;
}
