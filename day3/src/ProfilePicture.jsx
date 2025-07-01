import React from 'react'

function ProfilePicture() {
    const imageUrl = './src/assets/IMG_0409.JPG'
    const handleClick = (e) => e.target.style.display="none"
  return (
    <img onClick={(e) =>handleClick(e)} id="img" src={imageUrl} alt="profile" />
  )
}

export default ProfilePicture