import React, { useContext, useState, useEffect } from 'react';
import { graphql } from 'gatsby';
import { ImageGallery } from '../../components';
import CartContext from 'context/CartContext';

export const query = graphql`
  query ProductQuery($shopifyId: String) {
    shopifyProduct(shopifyId: { eq: $shopifyId }) {
      shopifyId
      title
      description
      images {
        id
        localFile {
          childImageSharp {
            fluid(maxWidth: 300) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    }
  }
`;
export default function ProductTemplate(props) {
  const { getProductById } = useContext(CartContext);
  const [product, setProduct] = useState(null);

  useEffect(() => {
    getProductById(props.data.shopifyProduct.shopifyId).then(results => {
      console.log(results);
      setProduct(results);
    });
  }, [getProductById, setProduct, props.data.shopifyProduct.shopifyId]);

  console.log(props);
  return (
    <div className="container wrapper">
      <div className="grid">
        <div className="grid__column grid__column--12 grid__column--7@sm">
          <ImageGallery images={props.data.shopifyProduct.images} />
        </div>
        <div className="grid__column grid__column--12 grid__column--5@sm">
          <div className="product__info">
            <div className="product-info">
              <h1 className="product-info__title">
                {props.data.shopifyProduct.title}
              </h1>
              <p>{props.data.shopifyProduct.description}</p>
              <div className="product-info__options">
                {product?.availableForSale && (
                  <>
                    {product?.options.map(o => (
                      <div className="product-option">
                        <p className="product-option__name" key={o.id}>
                          {o.name}
                        </p>
                        <div className="product-option__values">
                        {}
                          <div className="product-option__value">
                            <div className="radio-button">mediana</div>
                          </div>
                          <div className="product-option__value">
                            <div className="radio-button">Gigante</div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
