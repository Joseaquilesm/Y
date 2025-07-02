import Image from "next/image";
import Sidebar from "../components/Sidebar";
import Feed from "../components/Feed";
import TrendingFeed from "../components/TrendingFeed";
export default function Home() {
  return (
    <div
      className="flex justify-center text-[#111d13] min-h-screen max-w-[1400px]
    mx-auto"
    >
      <Sidebar />
      <Feed />
      <TrendingFeed />
    </div>
  );
}
