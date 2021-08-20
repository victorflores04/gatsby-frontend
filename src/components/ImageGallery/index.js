import React, { useState } from 'react';
import Image from 'gatsby-image';
import ImageThumbnail from './ImageThumbnail';

export function ImageGallery({ images }) {

    const [activeImageThumbnail, setActiveImageThumbnail] = useState(images[0])
    const handleClick = image => {
        setActiveImageThumbnail(image)
    }

  return (
    <div className="product__gallery">
      <div className="gallery gallery--product">
        <div className="gallery__main">
          <Image fluid={activeImageThumbnail.localFile.childImageSharp.fluid} />
        </div>
        <div className="gallery__thumbs">
          <div className="gallery-thumbs__main  tns-slider tns-carousel tns-subpixel tns-calc tns-vertical">
            {images.map(image => {
              return (
                <ImageThumbnail
                  key={image.id}
                  isActive={activeImageThumbnail.id === image.id}
                  onClick={handleClick}
                  image={image}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
