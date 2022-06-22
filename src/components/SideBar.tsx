import { gql, useQuery } from "@apollo/client"
import Lesson from "./Lesson"
  const GET_LESSONS_QUERY = gql`
  query {
  lessons(orderBy: availableAt_ASC, stage: PUBLISHED) {
    availableAt
    slug
    title
    id
    lessonType
  }
}
  `
  interface GetLessonQueryResponse {
    lessons: {
      availableAt: string,
      title: string,
      slug: string,
      id: string,
      lessonType: 'Live' | 'class'
    }[]
  }

export function SideBar () {
  const { data } = useQuery<GetLessonQueryResponse>(GET_LESSONS_QUERY)
  return (
    <aside className="w-[348px] bg-gray-700 border-l">
      <span className="font-bold text-2xl pb-6 mb-6 border-b border-gray-500 block p-5 text-green-300">
          Cronograma de aulas
      </span>
      <div className="flex flex-col gap-8">
         {data?.lessons.map(lesson => {
            return ( 
            <Lesson key={lesson.id}
              title= {lesson.title}
              slug= {lesson.slug}
              dataAvaliable={new Date(lesson.availableAt)}
              type={lesson.lessonType}  />)
         })}
      </div>
    </aside>
  )
}