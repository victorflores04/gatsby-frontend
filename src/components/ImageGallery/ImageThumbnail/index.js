import React from 'react';
import Image from 'gatsby-image';

export default function ImageThumbnail({ isActive, onClick, image }) {
  const handleClick = () => {
    onClick(image);
  };
  return (
    <div className="gallery-thumbs__item tns-item tns-slide-active tns-nav-active"  onClick={handleClick} isActive={isActive}>
      <div className="">
        <Image fluid={image.localFile.childImageSharp.fluid} />
      </div>
    </div>
  );
}
