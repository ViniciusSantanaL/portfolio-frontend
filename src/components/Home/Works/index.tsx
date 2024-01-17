'use client'

import { useState } from 'react'
import { Work } from '@/model/Work.types'
import { Carousel } from './Carousel'
import { CarouselStepper } from './CarouselStepper'
import data from './data.json'

export function Works() {
  const works: Array<Work> = data.works
  const [actualIndexWork, setActualIndexWork] = useState<number>(0)

  return (
    <section className="min-h-screen w-full flex justify-center items-center flex-col gap-4">
      <h2 className="text-5xl text-shadow-principal mb-8">Experiences</h2>
      <Carousel
        actualIndexWork={actualIndexWork}
        setActualIndexWork={setActualIndexWork}
        works={works}
      />
      <CarouselStepper
        carouselSize={works.length}
        currentStepIndex={actualIndexWork}
        setActualIndexWork={setActualIndexWork}
      />
    </section>
  )
}
