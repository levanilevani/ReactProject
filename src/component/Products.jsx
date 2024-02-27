import React, { useState, useEffect } from "react";
import Skeleton from "react-loading-skeleton";
import { useNavigate, useParams } from "react-router-dom";

const Product = () => {
  const navigate = useNavigate();
  const {id} = useParams();

  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleNavigation = (path) => {
    navigate(path);
  };

  useEffect(() => {
    const getProduct = async () => {
      setLoading(true);
      try {
        const response = await fetch(`https://fakestoreapi.com/products/${id}`);
        if (!response.ok) {
          throw new Error(`Failed to fetch product with id ${id}`);
        }
        const productData = await response.json();
        setProduct(productData);
        setLoading(false);
      } catch (error) {
        console.error(error);
        setLoading(false);
      }
    };

    getProduct();
  }, [id]);

  const Loading = () => {
    return (
      <div className="col-md-6">
        <Skeleton height={400} />
      </div>
    );
  };

  const ShowProduct = () => {
    return (
      <div className="col-md-6 d-flex me-4
      justify-space-around">
        <img
          src={product.image}
          alt={product.title}
          height="400px"
          width="400px"
        />

        <div className="product-info">
          <h4 className="text-uppercase text-black-50">{product.category}</h4>
          <h1 className="dispaly-5">{product.title}</h1>
          <p className="lead">
            Rating{product.rating && product.rating.rate}
            <i className="fa fa-star"></i>
          </p>
          <h3 className="display-6 fw-bold my-4 "> ${product.price}</h3>
          <p className="lead">{product.description}</p>
          <button className="btn btn-outline-dark me-4"> Add To cart</button>
          <button 
          className="btn btn-outline-dark py-2" 
          onClick={() => handleNavigation("/cart") }
          >
            {" "}
            Go To cart
            </button>
        </div>
      </div>
    );
  };
  return (

    
      <div className="conteiner py-4">
        <div className="row py-4">{loading ? <Loading /> : <ShowProduct />}</div>
      </div>
    
  );
};
export default Product;
