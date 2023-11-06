import { Work } from '@/model/Work.types'
import Image from 'next/image'
interface WorkCardProps {
  work: Work
}

export function Card({ work }: WorkCardProps) {
  return (
    <div className="flex flex-col justify-center items-center gap-4 max-w-[600px]">
      <h2 className="text-5xl">{work.title}</h2>
      <Image
        width={400}
        height={400}
        src={`/assets/works/${work.planetImg}`}
        alt=""
      />
      <div>
        <p className="font-medium text-2xl p-2 rounded-xl">
          {work.dateStart} {`->`} <span>{work.dateEnd.toUpperCase()}</span>
        </p>
      </div>
      <p className="text-center">{work.description}</p>

      <button className="text-lg font-bold  p-2 border border-transparent hover:border-neutral-50 rounded-md">
        + View More
      </button>
    </div>
  )
}
