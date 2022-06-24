import Header from "../components/Header";
import Video from "../components/Video";
import {SideBar}  from "../components/SideBar";
import { useParams } from "react-router-dom";

export default function Event () {
  const { slug } = useParams<{ slug: string }>()
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="flex flex-1">
      {slug ? <Video lessonSlug={slug}/> : <div className="flex-1">Carregando..</div>}
      <SideBar />
      </div>
    </div>
  )
}