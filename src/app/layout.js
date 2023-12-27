import Header from "./components/Header/page";
import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html>
      <head>
        <title>JasGiigli</title> {/* Add a title for your HTML document */}
      </head>
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
