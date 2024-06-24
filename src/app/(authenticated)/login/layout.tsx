import { SessionProvider } from "next-auth/react";
import "../../../styles/global.scss";
export default function RootLayoutsdd({children,}: Readonly<{children: React.ReactNode;}>) {
  return (
    <html lang="en">
      <body  suppressHydrationWarning={true}>
            {children}
        </body>
    </html>
  );
}
