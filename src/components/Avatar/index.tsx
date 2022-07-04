import React from 'react'
import { forwardRef } from 'react'
import { AvatarWrapper } from './avatar.style'
import { AvatarProps } from './type'

const Avatar = forwardRef<HTMLImageElement, AvatarProps>(({ size, shape, ...props }, ref) => {
  return (
    <AvatarWrapper size={size} shape={shape} {...props} ref={ref} />
  )
})

export default Avatar  