import Image from "next/image";
import { Inter } from "next/font/google";
import HomeContainer from "@/view/home/home.container";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return <HomeContainer />;
}
