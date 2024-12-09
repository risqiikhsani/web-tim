import { Main, Section } from "@/components/craft";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Main>
      <Section>{children}</Section>
    </Main>
  );
}
