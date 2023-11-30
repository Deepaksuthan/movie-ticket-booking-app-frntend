import React from "react";
import Header from "../miniComponents/Header";
import { Carousel } from "react-bootstrap";
import { DataState } from "../context/Provider";
import { useNavigate } from "react-router-dom";
import { useToast } from "@chakra-ui/react";
import Footer from "../miniComponents/Footer";

const HomePage = () => {
  let navigate = useNavigate();
  const { movies, location } = DataState();
  const toast = useToast();
  const clickHandler = (val) => {
    if (location) {
      navigate("/details/" + val._id);
    } else {
      toast({
        title: "Select Location",
        status: "warning",
        duration: 3000,
        isClosable: true,
        position: "top",
      });
    }
  };
  return (
    <>
      <Header />
      <div>
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://assetscdn1.paytm.com/images/catalog/view_item/2184244/1699350659960.jpg?format=webp&imwidth=1024"
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://assetscdn1.paytm.com/images/catalog/view_item/2281833/1699438155154.jpg?format=webp&imwidth=1024"
              alt="Second slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://assetscdn1.paytm.com/images/catalog/view_item/2184238/1699350258016.jpg?format=webp&imwidth=1024"
              alt="Third slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://assetscdn1.paytm.com/images/catalog/view_item/2283967/1699612242788.jpg?format=webp&imwidth=1024"
              alt="Fourth slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://assets-in.bmscdn.com/promotions/cms/creatives/1697555347107_movies.jpg"
              alt="Fifth slide"
            />
          </Carousel.Item>
        </Carousel>
      </div>
      <div className="text">
        <h1>Recommended Movies</h1>
      </div>

      <div className="search-items">
        {movies.map((e, i) => {
          return (
            <div
              key={e._id}
              className="main-cards"
              onClick={() => clickHandler(e)}
            >
              <div className="card mb-3">
                <img src={e.poster} className="card-img-top" alt="...poster" />
                <div className="card-body">
                  <h5 className="card-title">{e.movieName}</h5>
                  <p className="card-text">
                    {e.type}
                    <span className="heart">
                      <i className="fa-solid fa-heart"></i>&nbsp;{e.like}%
                    </span>
                  </p>
                  <p className="card-text">
                    <small className="text-muted">{e.language}</small>
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <Footer />
    </>
  );
};

export default HomePage;
