"use client";
import Header from "./(components)/Header";
import Menu from "./(components)/Menu";
import MenuProvider from "./(context)/MenuContext";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body className="">
        <MenuProvider>
          <Menu />
          <Header />
          <div className="pt-12">{children}</div>
        </MenuProvider>
      </body>
    </html>
  );
}
