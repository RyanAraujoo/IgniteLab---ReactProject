import { gql, useQuery } from "@apollo/client"
import { DefaultUi, Player, Youtube } from "@vime/react"
import { CaretRight, DiscordLogo, FileArrowDown, Lightning } from "phosphor-react"

import  '@vime/core/themes/default.css'

const GET_URL_VIDEO = gql`
query getLessonBySlug($slug: String) {
  lesson(where: {slug: $slug}) {
    title
    videoId
    description
    teacher {
      name
      bio
      avatarURL
    }
  }
}
`

 interface getVideoQueryResponse {
      lesson: {
         videoId: string;
         tile: string;
         description: string;
           teacher: {
              name: string;
              bio: string;
              avatarURL: string;
           }
      }
 }

 interface getLessonSlug {
   lessonSlug: string;
 }

export default function Video (props: getLessonSlug) {
  const { data } = useQuery <getVideoQueryResponse> (GET_URL_VIDEO, {
    variables: {
         slug: props.lessonSlug,
    }
  })
    if (!data) {
      return <div className="flex-1">
               <p>Carregando...</p>   
      </div>
    }

      return (
         <div className="flex-1">
            <div className="bg-black flex justify-center">
                  <div className="h-full w-full max-w-[1180px]  max-h-[60vh] aspect-video">
                          <Player>
                                 <Youtube videoId={data.lesson.videoId} />
                                 <DefaultUi />
                           </Player>
                  </div>
            </div>
            
            <div className="p-8 max-w-[1180px] mx-auto">
               <div className="flex itens-start gap-16">
                  <div className="flex-1 my-1">
                     <h1 className="text-2xl font-bold my-5">
                        {data.lesson.tile}
                        </h1>
                        <span className="mt-8 text-gray-200"> 
                     {data.lesson.description}
                     </span>
                  </div>
               <div className="flex flex-col gap-4">
                  <a href="#" className="p-4 text-sm bg-green-500 flex items-center rounded font-bold uppercase gap-2 justify-center hover:bg-green-700 transition-colors">
                     <DiscordLogo size={24} />
                     <span>COMUNIDADE DO DISCORD</span>
                  </a>
                  <a href="#" className="p-4 text-sm text-blue-500 flex items-center rounded font-bold uppercase gap-2 justify-center hover:bg-blue-500 hover:text-gray-900 transition-colors">
                     <Lightning size={24} />
                     <span>ACESSE O DESAFIO</span>
                  </a>
               </div>
            </div>
            <div className="flex items-center gap-4 mt-6">
                  <div >
                       <img 
                        className="h-16 w-16 rounded-full border-2 border-blue-500 overflow-hidden"
                        src={data.lesson.teacher.avatarURL}
                        alt=""
                        />
            
                  </div>
                  <div className="leading-reload">
                              <strong className="font-bold text-2xl block">{data.lesson.teacher.name}</strong>
                              <span className="text-gray-200 text-sm block">{data.lesson.teacher.bio}</span>
                  </div>
            </div>
            <div className="gap-8 mt-20 grid grid-cols-2">
            <a href="#" className="bg-gray-700 rounded overflow-hidden flex items-stretch gap-6 hover:bg-gray-600 transition-colors">
                     <div className="bg-green-700 h-full p-6 flex items-center">
                        <FileArrowDown size={40} />
                     </div>
                     <div className="py-6 leading-relaxed">
                        <strong className="text-2xl">Material Complementar</strong>
                        <p className="text-sm text-gray-200 mt-2">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, cumque, alias quo sequi dolorem qui
                           </p>
                     </div>
                     <div className="h-full p-6 flex items-center">
                        <CaretRight size={24}/>
                     </div>
               </a>
               <a href="#" className="bg-gray-700 rounded overflow-hidden flex items-stretch gap-6 hover:bg-gray-600 transition-colors">
                     <div className="bg-green-700 h-full p-6 flex items-center">
                        <FileArrowDown size={40} />
                     </div>
                     <div className="py-6 leading-relaxed">
                        <strong className="text-2xl">Walpapers Exclusivos</strong>
                        <p className="text-sm text-gray-200 mt-2">
                           Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, cumque, alias quo sequi dolorem qui
                           </p>
                     </div>
                     <div className="h-full p-6 flex items-center">
                        <CaretRight size={24}/>
                     </div>
               </a>
            </div>
               </div>
               </div>
      )
}