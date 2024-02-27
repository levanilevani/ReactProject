import React, { useState, useEffect } from "react";
import Skeleton from "react-loading-skeleton";
import { useNavigate } from "react-router-dom";
const Products = () => {
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
  };

  const [data, setData] = useState([]);
  const [filter, setFilter] = useState(data);
  const [loading, setLoading] = useState(false);
  let componentMounted = true;

  useEffect(() => {
    const getProducts = async () => {
     try{
      setLoading(true);
      const response = await fetch("https://fakestoreapi.com/products");
      if (!componentMounted) {
        return;
      }
      const responseData = await response.json();
        setData(responseData);
        setFilter(responseData);
        setLoading(false);
       }
      
     catch (error)  {
      console.error("Error fetching products:", error);
      setLoading(false);
      };
    };
    getProducts();

    return () => {
componentMounted = false;
    };
  }, []);
  const Loading = () => {
    return (
      <>
        <div className="col-md-3">
          <Skeleton height={350} />
        </div>
        <div className="col-md-3">
          <Skeleton height={350} />
        </div>
        <div className="col-md-3">
          <Skeleton height={350} />
        </div>
        <div className="col-md-3">
          <Skeleton height={350} />
        </div>
      </>
    );
  };
  const filterProduct = (cat) => {
    const updateList = data.filter((x) => x.category === cat);
    setFilter(updateList);
  };
  const ShowProducts = () => {
    return (
      <>
        <div className="buttons d-flex justify-content-center mb-5 pb-5">
          <button
            className="btn btn-outline-dark me-2"
            onClick={() => {
              setFilter(data);
            }}
          >
            All
          </button>
          <button
            className="btn btn-outline-dark me-2"
            onClick={() => {
              filterProduct(`men's clothing`);
            }}
          >
            Men's Clothing
          </button>
          <button
            className="btn btn-outline-dark me-2"
            onClick={() => {
              filterProduct(`women's clothing`);
            }}
          >
            Women's Clothing
          </button>
          <button
            className="btn btn-outline-dark me-2"
            onClick={() => {
              filterProduct("jewelery");
            }}
          >
            jewelery
          </button>
          <button
            className="btn btn-outline-dark me-2"
            onClick={() => {
              filterProduct("electronics");
            }}
          >
            Electronic
          </button>
        </div>
        {filter.map((product) => (
          
              <div className="col-md-3 mb-4" key={product.id}>
                <div class="card h-100 text-center p-4" >
                  <img
                    src={product.image}
                    alt={product.title}
                    class="card-img-top"                    
                    height="250px"
                  />
                  <div class="card-body">
                    <h5 class="card-title mb-0">
                      {product.title.substring(0, 12)}
                    </h5>
                    <p class="card-text lead fw-bold">${product.price}</p>
                    <button
                     class="btn btn-outline-dark"
                      onClick={() =>
                        handleNavigation(`/products/${product.id}`)  
                      }
                    >
                      Shop now
                    </button>
                  </div>
                </div>
              </div>
            
          
        ))}
      </>
    );
  };
  return (
    <div>
      <div className="container my-5 py-5">
        <div className="row">
          <div className="col-12 mb-5">
            <h1 className="display-6 fw-bolder text-center">latest Products</h1>
            <hr />
          </div>
        </div>
        <div className="row justify-content-center">
          {loading ? <Loading /> : <ShowProducts />}
        </div>
      </div>
    </div>
  );
};
export default Products;
