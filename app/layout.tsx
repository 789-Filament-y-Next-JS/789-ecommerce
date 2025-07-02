import "./globals.css";
import { bodyFont } from "@/config/fonts";



interface Props {
  children: React.ReactNode;
}


export default function RootLayout(props: Props) {

  return (
    <html lang="es" suppressHydrationWarning>
      <body className={ bodyFont.className } >
        { props.children }
      </body>
    </html>
  );
}
