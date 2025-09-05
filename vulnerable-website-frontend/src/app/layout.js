import "./globals.css";
import ClientLayout from "@/components/ClientLayout/ClientLayout";

export const metadata = {
  title: "E-Ticaret | OWASP Top 10",
  description: "E-Ticaret | OWASP Top 10",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded"
          rel="stylesheet"
        />
      </head>
      <body>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
