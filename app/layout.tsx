import type { Metadata } from "next";
import { Figtree } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/Sidebar";
import SupabaseProvider from "@/providers/supabaseProvider";
import UserProvider from "@/providers/userProvider";
import ModalProvider from "@/providers/ModalProvider";
import ToasterProvider from "@/providers/ToasterProvider";
import getSongsByUserID from "@/actions/getSongsByUserID";
import Player from "@/components/Player";

const font = Figtree({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Harmony Beats",
  description: "Listen to music",
};

export const revaliadate = 0;

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const userSongs = await getSongsByUserID();

  return (
    <html lang="en">
      <body className={font.className}>
        <ToasterProvider />
        <SupabaseProvider>
          <UserProvider>
            <ModalProvider products={[]} />
            <Sidebar songs={userSongs}>{children}</Sidebar>
            <Player />
          </UserProvider>
        </SupabaseProvider>
      </body>
    </html>
  );
}
