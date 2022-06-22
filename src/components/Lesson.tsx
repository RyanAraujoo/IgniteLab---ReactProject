import { CheckCircle, Lock } from 'phosphor-react'
import {format, isPast} from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR';

interface LessonProps {
      title: string;
      slug: string;
      dataAvaliable: Date;
      type: 'Live' | 'class';
}

export default function Lesson (props: LessonProps) {
          const isLessonAvaliable = isPast(props.dataAvaliable)
          const formatLessonAvailable = format(props.dataAvaliable, "EEEE ' • '", {
            locale: ptBR,
          })
  return (
    <a href="#">
        <span className="text-gray-300 p-5">
        {formatLessonAvailable.charAt(0).toLocaleUpperCase() + formatLessonAvailable.slice(1).replace('-feira', '')}
        </span>
        <div className="rounded border border-gray-500 p-4 mt-2">
            <header className="flex items-center justify-between">
                      {isLessonAvaliable ? (
                         <span className="text-sm text-orange-500 font-medium flex items-center gap-2">
                         <Lock size={20} /> 
                        Em Breve
                         </span>
                      ) : (<span className="text-sm text-blue-500 font-medium flex items-center gap-2">
                      <CheckCircle size={20} /> 
                      Aula Liberada
            </span>)}
                     
                      <span className="text-xs rounded py-[0.125rem] px-2 text-white border border-green-300 font-bold">
                                  {props.type == 'Live' ? 'Ao Vivo' : 'Aula Prática'}
                      </span>
            </header>
            <p>
                <strong className="text-gray-200 mt-5 block">
                          {props.title}
                </strong>
            </p>
        </div>
    </a>
  )
}
