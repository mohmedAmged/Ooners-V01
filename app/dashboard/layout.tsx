
import { Metadata } from "next";
import Footer from "../components/Footer/Footer";
import NavBar from "../components/NavBar/NavBar";
import { LayoutInterface } from "../utils/interfaces";
export const metadata: Metadata = {
    title: "Ooners",
    description: "Find an Investment that suits you",
    icons: {
      icon: "/public/logoooTab.png",
    },
  };
export default function layout({ children }: Readonly<LayoutInterface>) {
    return (
        <>
            <NavBar />
            {children}
            <Footer />
        </>
    );
};
