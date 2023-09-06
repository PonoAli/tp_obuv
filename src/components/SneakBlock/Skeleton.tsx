import React from 'react'
import ContentLoader from 'react-content-loader'

export const Skeleton: React.FC = () => {
  return (
    <ContentLoader 
    speed={2}
    width={290}
    height={399}
    viewBox="0 0 280 399"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  >
    <rect x="20" y="0" rx="0" ry="0" width="293" height="280" /> 
    <rect x="20" y="290" rx="0" ry="0" width="112" height="38" /> 
    <rect x="20" y="335" rx="0" ry="0" width="92" height="27" /> 
    <circle cx="197" cy="325" r="35" /> 
    <rect x="239" y="308" rx="0" ry="0" width="22" height="31" />
  </ContentLoader>
  )
}
