import { ReactComponent as ArrowIcon } from 'assets/images/arrow.svg';
import ProductPrice from 'components/ProductPrice';
import { Link, useParams } from 'react-router-dom';
import { Product } from 'types/products';
import { BASE_URL } from 'util/requests';

import './styles.css';
import axios from 'axios';
import { useEffect, useState } from 'react';
import ProductDetailsLoader from './ProductDetailsLoader';
import ProductInfoLoader from './ProductInfoLoader';

type UrlParams = {
  productId: string;
};

const ProductDetils = () => {
  const { productId } = useParams<UrlParams>();
  const [isLoading, setLoading] = useState(false);

  const [product, setProduct] = useState<Product>();

  useEffect(() => {
    setLoading(true);
    axios
      .get(`${BASE_URL}/products/${productId}`)
      .then((Response) => {
        setProduct(Response.data);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [productId]);

  return (
    <div className=" product-details-container">
      <div className="base-card product-dateils-card">
        <Link to="/products">
          <div className="goback-container">
            <ArrowIcon />
            <h2>VOLTAR</h2>
          </div>
        </Link>
        <div className="row">
          <div className="col-xl-6">
            {isLoading ? (
              <ProductInfoLoader />
            ) : (
              <>
                <div className="img-container">
                  <img src={product?.imgUrl} alt={product?.name} />
                </div>
                <div className="name-price-container">
                  <h1>{product?.name}</h1>
                  {product && <ProductPrice price={product?.price} />}
                </div>
              </>
            )}
          </div>
          <div className="col-xl-6">
            {isLoading ? (
              <ProductDetailsLoader />
            ) : (
              <div className="description-container">
                <h1>Descrição do produto</h1>
                <p>{product?.description}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
export default ProductDetils;
