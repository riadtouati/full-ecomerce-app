import React, {useEffect, useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Rating from '../components/Rating';
import LoaddingBox from '../components/LoadingBox';
import MessageBox  from "../components/MessageBox";
import { detailsProduct } from '../actions/productActions';

export default function ProductScreen(props) {
  /*const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  useEffect(() => {
      const fetchData = async () => {
        try {
          setLoading(true);
          const { data } = await axios.get('api/product');
          setLoading(false);
          setProducts(data);
        } catch(err) {
          setError(err.message);
          setLoading(false);
        }
        
      };
      fetchData();
  }, []);*/
  // get product from static file in frontend 
  //const product = products.find((x) => x._id === props.match.params.id);

  const dispatch = useDispatch();
  const productId = props.match.params.id;
  const [qty, setQty] = useState(1);
  const productDetails = useSelector( state => state.productDetails);
  const { loading, error, product} = productDetails;
  
  useEffect(()=> {
    dispatch(detailsProduct(productId));
  }, [dispatch, productId]);

  const addToCardHandler = () => {
    props.history.push(`/cart/${productId}?qty=${qty}`);
  };

  return (
    <div>
    {loading ? ( 
        <LoaddingBox> </LoaddingBox>
    ) : error ? (
        <MessageBox variant="danger" >{error}</MessageBox>
    ) : ( 
      <div>
      <Link to="/">Back to result</Link>
      <div className="row top">
        <div className="col-2">
          <img className="large" src={product.image} alt={product.name}></img>
        </div>
        <div className="col-1">
          <ul>
            <li>
              <h1>{product.name}</h1>
            </li>
            <li>
              <Rating
                rating={product.rating}
                numReviews={product.numReviews}
              ></Rating>
            </li>
            <li>Pirce : ${product.price}</li>
            <li>
              Description:
              <p>{product.description}</p>
            </li>
          </ul>
        </div>
        <div className="col-1">
          <div className="card card-body">
            <ul>
              <li>
                <div className="row">
                  <div>Price</div>
                  <div className="price">${product.price}</div>
                </div>
              </li>
              <li>
                <div className="row">
                  <div>Status</div>
                  <div>
                    {product.countInStock > 0 ? (
                      <span className="success">In Stock</span>
                    ) : (
                      <span className="error">Unavailable</span>
                    )}
                  </div>
                </div>
              </li>
              {
                product.countInStock > 0 && (
                  <>
                  <li>
                    <div className="rowx">
                      <div>Qte</div>
                      <div>
                        <select value={qty} onChange={e => setQty(e.target.value)}>
                          {
                            [...Array(product.countInStock).keys()].map(
                              (x) => (
                              <option key={x+1} value={x+1}>{x+1}</option>
                            )
                            )}
                        </select>
                      </div>
                    </div>
                  </li>
                    <li>
                      <button 
                        onClick={addToCardHandler} 
                        className="primary block">
                          Add to Cart
                      </button>
                    </li>
                  </>
                )
              }
              
            </ul>
          </div>
        </div>
      </div>
    </div>
    )}
     
  </div>

   
  );
}