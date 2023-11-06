'use client'

import React, { useCallback } from 'react'

interface ControlListCardProps {
  listCardSize: number
  actualPositions: {
    start: number
    end: number
  }
  setActualPositions: React.Dispatch<
    React.SetStateAction<{ start: number; end: number }>
  >
}
export function ControlListCard({
  listCardSize,
  actualPositions,
  setActualPositions,
}: ControlListCardProps) {
  const pageSize = Math.round(listCardSize / 4)

  const handleNextPage = useCallback(() => {
    setActualPositions({
      start: actualPositions.start + 4,
      end: actualPositions.end + 4,
    })
  }, [actualPositions])

  return (
    <div className="mt-4 flex justify-end items-center gap-4">
      <button className="w-28 bg-blue-550 p-2 rounded-lg font-medium text-xs hover:brightness-90">
        PREVIOUS
      </button>
      <div className="flex items-center gap-2">
        <button className="cursor-pointer bg-gray-850 rounded-md text-xl hover:brightness-75 py-1 px-3">
          1
        </button>
        <button className="cursor-pointer bg-gray-850 rounded-md text-xl hover:brightness-75 py-1 px-3">
          2
        </button>
        <button className="cursor-pointer bg-gray-850 rounded-md text-xl hover:brightness-75 py-1 px-3">
          3
        </button>
        <button className="cursor-pointer bg-gray-850 rounded-md text-xl hover:brightness-75 py-1 px-3">
          4
        </button>
      </div>
      <button className="w-28 bg-purple-750 p-2 rounded-lg font-medium text-xs hover:brightness-90">
        NEXT
      </button>
    </div>
  )
}
