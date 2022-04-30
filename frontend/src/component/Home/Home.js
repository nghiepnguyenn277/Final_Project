import React, { Fragment, useEffect } from "react";
import { CgMouse } from "react-icons/all";
import "./Home.css";
import MetaData from "../layout/MetaData";
import { clearErrors, getProduct } from "../../actions/productAction";
import { useSelector, useDispatch } from "react-redux";
import Loader from "../layout/Loader/Loader";
import { useAlert } from "react-alert";
import { TiArrowDownThick } from "react-icons/ti";
const Home = () => {
  const alert = useAlert();
  const dispatch = useDispatch();
  const { loading, error, } = useSelector((state) => state.products);

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }
    dispatch(getProduct());
  }, [dispatch, error, alert]);

  return (
    <Fragment>
      {loading ? (
        <Loader />
      ) : (
        <Fragment>
          <MetaData title="ECOMMERCE" />

          <div className="banner">
        
            <h1>Welcome to Nin Shoes</h1>
            <h2>You can buy the shoes here</h2>
             <TiArrowDownThick style={{height: 55, width :55 }}/>
            <a href="/products">
              <button>
                Shop Now <CgMouse />
              </button>
            </a>
          </div>

        </Fragment>
      )}
    </Fragment>
  );
};

export default Home;
