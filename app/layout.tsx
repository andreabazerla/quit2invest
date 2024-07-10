import "./globals.scss";

import { Container } from "react-bootstrap";

export const metadata = {
  title: 'Quit2Invest',
  description: 'Quit smoking and start to invest!',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true}>
        <Container className="d-flex vh-100 flex-column">
          {children}
        </Container>
      </body>
    </html>
  );
}
