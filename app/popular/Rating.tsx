'use client'

import { useMemo } from 'react'
import { FaStar } from 'react-icons/fa'
import { FaStarHalf } from 'react-icons/fa'

interface Props {
  stars: number // 接收评分参数
}

const Rating: React.FC<Props> = ({ stars }) => {
  const maxRating = 5 // 设置最大评分值为 5

  // 当评分值变化时，更新填充星星数量
  const fullStars = useMemo(() => Math.floor(stars), [stars])
  const halfStars = useMemo(
    () => (stars === fullStars ? 0 : 1),
    [fullStars, stars]
  )

  return (
    <div className="flex items-center">
      {Array(maxRating)
        .fill('')
        .map((_, index) => {
          if (index < fullStars) {
            return (
              <FaStar key={index} className="text-green-normal text-[19px]" />
            )
          } else if (halfStars && index === fullStars) {
            return (
              <FaStarHalf
                key={index}
                className="text-green-normal text-[19px]"
              />
            )
          } else {
            return <FaStar key={index} className="text-[19px] text-gray-400" />
          }
        })}
    </div>
  )
}

export default Rating
