import "./globals.css";
import { Rubik } from "next/font/google";
const inter = Rubik({ subsets: ["latin"] });

export const metadata = {
  title: "Quiz App",
  description: "Created by Waqar",
};

export default function RootLayout({ props, children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
