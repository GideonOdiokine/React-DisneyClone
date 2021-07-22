import React, { useEffect } from "react";
import styled from "styled-components";
import ImgSlider from "./ImgSlider";
import NewDisney from "./NewDisney";
import Original from "./Original";
import Recommend from "./Recommend";
import Trending from "./Trending";
import Viewers from "./Viewers";
import { useDispatch, useSelector } from "react-redux";
import db from "../firebase";
import { setMovies } from "../features/movie/movieSlice";
import { selectUserName } from "../features/user/userSlice";
const Home = () => {
  const dispatch = useDispatch();
  const userName = useSelector(selectUserName);
  let recommends = [];
  let newDisneys = [];
  let originals = [];
  let trendings = [];

  useEffect(() => {
    db.collection("movies").onSnapshot((snapshot) => {
      // eslint-disable-next-line
      snapshot.docs.map((doc) => {
        // eslint-disable-next-line
        switch (doc.data().type) {// eslint-disable-next-line
          // eslint-disable-next-line
          case "recommend":
            // eslint-disable-next-line
            recommends = [...recommends, { id: doc.id, ...doc.data() }];// eslint-disable-next-line
            // eslint-disable-next-line
            break;
          case "new":
            // eslint-disable-next-line
            newDisneys = [...newDisneys, { id: doc.id, ...doc.data() }];// eslint-disable-next-line
            break;
          case "original":
            // eslint-disable-next-line
            originals = [...originals, { id: doc.id, ...doc.data() }];// eslint-disable-next-line
            break;
            // eslint-disable-next-line
          case "trending":
            // eslint-disable-next-line
            trendings = [...trendings, { id: doc.id, ...doc.data() }];
            break;
        }
      });
      dispatch(
        setMovies({
          recommend: recommends,
          newDisney: newDisneys,
          original: originals,
          trending: trendings,
        })
      );
    });
  }, [userName]);

  return (
    <Container>
      <ImgSlider />
      <Viewers />
      <Recommend />
      <NewDisney />
      <Original />
      <Trending />
    </Container>
  );
};
const Container = styled.main`
  position: relative;
  background: url("images/home-background.png") no-repeat;
  min-height: calc(100vh - 250px);
  overflow: hidden;
  display: block;
  top: 72px;
  padding: 0 calc(3.5vw - 3px);

  &:after {
    background: url("images/home-background.png") center center / cover
      no-repeat fixed;
    content: "";
    position: absolute;
    inset: 0px;
    opacity: 1;
    z-index: -1;
  }
`;

export default Home;
