import Image from "next/image";
import Sidebar from "../components/Sidebar";

export default function Home() {
  return (
    <div
      className="text-[#111d13] min-h-screen max-w-[1400px] border-2 border-black
    mx-auto"
    >
      <Sidebar></Sidebar>
    </div>
  );
}
