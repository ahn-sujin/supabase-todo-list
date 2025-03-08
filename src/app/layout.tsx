import "@/styles/globals.css";
import "@/styles/reset.css";
import styles from "@/styles/layout.module.css";
import ReactQueryClientProvider from "@/config/ReactQueryClientProvider";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ReactQueryClientProvider>
          <div className={styles.container}>
            <header>TODO LIST</header>
            <main>{children}</main>
          </div>
        </ReactQueryClientProvider>
      </body>
    </html>
  );
}
