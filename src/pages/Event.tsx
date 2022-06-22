import Header from "../components/Header";
import Video from "../components/Video";
import SideBar  from "../components/SideBar";

export default function Event () {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="flex flex-1">
      <Video />
      <SideBar />
      </div>
    </div>
  )
}