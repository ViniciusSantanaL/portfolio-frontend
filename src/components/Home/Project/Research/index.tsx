'use client'
import { MyInput } from '@/components/Input'
import { Select } from '@/components/Select'
import { Technology } from '@/model/Technology.types'

export function Research() {
  const technologies: Technology[] = [
    { label: 'Java', value: 1, imagePath: '/assets/java-icon.png' },
    { label: 'React', value: 2, imagePath: '/assets/java-icon.png' },
    { label: 'CSS', value: 3, imagePath: '/assets/java-icon.png' },
    { label: 'SASS', value: 4, imagePath: '/assets/java-icon.png' },
    { label: 'C', value: 5, imagePath: '/assets/java-icon.png' },
  ]

  return (
    <div className="w-full bg-gray-850 rounded-md p-4">
      <div className="flex w-full gap-12">
        <MyInput label="Project Name" />
        <Select
          label="Technologies"
          items={technologies}
          handleSelectItem={() => null}
        />
      </div>
    </div>
  )
}
