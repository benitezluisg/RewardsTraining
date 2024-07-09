import React from 'react'
import { Svg, Path } from 'react-native-svg'

export const ProfileIcon = ({ color = '#575757', size = 28 }) => {
  return (
    <Svg width={size} height={size+10} viewBox="0 0 30 42">
      <Path fill={color} d="M30 32.789c0 3.422-2.25 6.211-4.992 6.211h-20.016c-2.742 0-4.992-2.789-4.992-6.211 0-6.164 1.523-13.289 7.664-13.289 1.898 1.852 4.477 3 7.336 3s5.437-1.148 7.336-3c6.141 0 7.664 7.125 7.664 13.289zM24 12c0 4.969-4.031 9-9 9s-9-4.031-9-9 4.031-9 9-9 9 4.031 9 9z"></Path>
    </Svg>
  )
}
