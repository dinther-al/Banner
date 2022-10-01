import React from "react";
import axios from "axios";
import "./grid.css";
import "./Banner.css";
import "./responsive.css";
import Rectangle from "../../assets/img/Rectangle.png";
import Brand from "../../assets/img/Streakfly.png";
import Logo from "../../assets/img/Logo.png";
import Shoe from "../../assets/img/shoe.png";
import ShoeDesc1 from "../../assets/img/Shoe-desc1.png";
import ShoeDesc2 from "../../assets/img/Shoe-desc2.png";
import ShoeDesc3 from "../../assets/img/Shoe-desc3.png";
import ShoeDesc4 from "../../assets/img/Shoe-desc4.png";

export default function Banner() {
  const [data, setData] = React.useState([]);
  const getApi = async () => {
    axios
      .get("https://localhost:7292/api/HomePage/Banner?productId=1")
      .then((res) => setData(res.data));
  };
  React.useEffect(() => {
    getApi();
  }, []);
  return (
    <div>
      <div className="Banner__background">
        <img className="Banner__background-img" src={Rectangle} alt="" />
      </div>
      <div className="Banner__brand">
        <img src={Brand} alt="" />
      </div>
      <div className="Banner__logo">
        <img src={Logo} alt="" />
      </div>
      <div className="grid wide">
        {data.map((item, index) => (
          <div className="row Banner-show" key={index}>
            <div className="col l-6 m-12 Banner-zoom">
              <h2 className="Banner__title">{item.productDetails.type}</h2>
              <h1 className="Banner__heading">
                {item.productDetails.productName}
              </h1>
              <p className="Banner__text">{item.productDetails.description}</p>
              <div className="Banner__group">
                <select className="Banner__select">
                  <option className="Banner__select-item" value="1">
                    GET
                  </option>
                </select>
                <select className="Banner__select">
                  <option className="Banner__select-item" value="1">
                    SIZE
                  </option>
                </select>
                <span className="Banner__select-price">$173</span>
              </div>
              <div className="Banner__button">
                <button className="btn btn--primary">Add to Bag</button>
                <button className="btn Banner__button-item">See Details</button>
              </div>
            </div>
            <div className="col l-6 m-12 Banner__shoes">
              <img
                className="Banner-img"
                src={Shoe}
                alt={item.productDetails.productImage}
              />

              <ul className="Banner__list">
                <li className="Banner__list-img">
                  <img
                    className="Banner__list-img-item"
                    src={ShoeDesc1}
                    alt=""
                  />
                </li>
                <li className="Banner__list-img">
                  <img
                    className="Banner__list-img-item"
                    src={ShoeDesc2}
                    alt=""
                  />
                </li>
                <li className="Banner__list-img">
                  <img
                    className="Banner__list-img-item"
                    src={ShoeDesc3}
                    alt=""
                  />
                </li>
                <li className="Banner__list-img">
                  <img
                    className="Banner__list-img-item"
                    src={ShoeDesc4}
                    alt=""
                  />
                </li>
              </ul>
            </div>
            <div className="overplay"></div>
          </div>
        ))}
      </div>
      <div className="Banner__statistical">
        <div className="grid wide statistical__global">
          <div className="row statistical__link">
            <div className="col l-4 m-12 Banner__foot">
              <p className="statistical__data">
                <span className="statistical__amount">500+ </span>
                <span className="statistical__text">Amazing products</span>
              </p>
            </div>
            <div className="col l-4 m-12 Banner__foot">
              <p className="statistical__data">
                <span className="statistical__amount">40k+ </span>
                <span className="statistical__text">Orders Complated</span>
              </p>
            </div>
            <div className="col l-4 m-12 Banner__foot">
              <p className="statistical__data">
                <span className="statistical__amount">32k+ </span>
                <span className="statistical__text">Happy Customers</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
