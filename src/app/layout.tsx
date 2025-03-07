import "@/styles/globals.css";
import "@/styles/reset.css";
import styles from "@/styles/layout.module.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className={styles.container}>
          <header>TODO LIST</header>
          <main>{children}</main>
        </div>
      </body>
    </html>
  );
}
