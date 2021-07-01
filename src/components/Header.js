import React, { useEffect } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { auth, provider } from "../firebase";
import {
  selectUserName,
  selectUserPhoto,
  setUserLoginDetails,
} from "../features/user/userSlice";

const Header = (props) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const userName = useSelector(selectUserName);
  const userPhoto = useSelector(selectUserPhoto);
  const photo = useSelector(selectUserPhoto);
  // const email = useSelector(selectUserEmail);

  useEffect(() => {
    auth.onAuthStateChanged(async (user) => {
      if (user) {
        setUser(user);
        history.push("/home");
      }
    });
  }, [userName]);
  const handleAuth = () => {
    auth
      .signInWithPopup(provider)
      .then((result) => {
        setUser(result.user);
      })
      .catch((error) => alert(error.message));
  };
  const setUser = (user) => {
    dispatch(
      setUserLoginDetails({
        name: user.displayName,
        email: user.email,
        photo: user.photoURL,
      })
    );
  };
  return (
    <Nav>
      <Logo>
        <img src="./images/logo.svg" alt="" />
      </Logo>

      {!userName ? (
        <Login onClick={handleAuth}>Login</Login>
      ) : (
        <>
          <NavMenu>
            <a href="/home">
              <img src="./images/home-icon.svg" alt="home" />
              <span>HOME</span>
            </a>
            <a href="/home">
              <img src="./images/search-icon.svg" alt="saerch" />
              <span>SEARCH</span>
            </a>
            <a href="/home">
              <img src="./images/watchlist-icon.svg" alt="home" />
              <span>WATCHLIST</span>
            </a>
            <a href="/home">
              <img src="./images/original-icon.svg" alt="home" />
              <span>ORIGINAL</span>
            </a>
            <a href="/home">
              <img src="./images/movie-icon.svg" alt="home" />
              <span>MOVIES</span>
            </a>
            <a href="/home">
              <img src="./images/home-icon.svg" alt="home" />
              <span>SERIES</span>
            </a>
          </NavMenu>
          <UserImg src={userPhoto} alt={userName} />
        </>
      )}
    </Nav>
  );
};

const Nav = styled.nav`
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 70px;
  background-color: #090b13;
  padding: 0 36px;
  letter-spacing: 16px;
  z-index: 3;
`;
const Logo = styled.a`
  width: 80px;
  padding: 0;
  margin-top: 4px;
  max-height: 70px;
  font-size: 0;
  display: inline-block;
  img {
    display: block;
    width: 100%;
  }
`;

const NavMenu = styled.div`
  align-items: center;
  display: flex;
  flex-flow: row nowrap;
  height: 100%;
  justify-centent: flex-end;
  padding: 0;
  margin: 0px;
  margin-right: auto;
  position: relative;
  margin-left: 25px;

  a {
    display: flex;
    padding: 0 12px;
    align-items: center;

    img {
      height: 20px;
      min-width: 20px;
      width: 20px;
      z-index: auto;
    }
    span {
      color: rgb(249, 249, 249);
      font-size: 13px;
      letter-spacing: 1.42px;
      line-height: 1.08;
      padding: 2px 0px;
      position: relative;
      white-space: nowrap;

      &:before {
        content: "";
        background-color: rgb(249, 249, 249);
        border-radius: 0px 0px 4px 4px;
        bottom: -6px;
        display: block;
        height: 2px;
        opacity: 0;
        position: absolute;
        right: 0px;
        left: 0px;
        transform-origin: left center;
        transform: scaleX(0);
        transition: all 250ms cubic-bezier(0.25, 0.46, 0.94) 0s;
        width: auto;
        visibility: hidden;
      }
    }
    &:hover {
      span:before {
        transform: scaleX(1);
        visibility: visible;
        opacity: 1 !important;
      }
    }
  }

  // @media(max-width:768px){
  // display:none;
  // }
`;
const Login = styled.a`
  background-color: rgba(0, 0, 0, 0.6);
  letter-spacing: 1.5px;
  padding: 8px 18px;
  font-size: 18px;
  text-transform: uppercase;
  border: 1px solid #f9f9f9;
  border-radius: 4px;
  cursor: pointer;
  font-weight: 700;
  transition: all 0.2s ease 0s;

  &:hover {
    background-color: rgb(246, 246, 246);
    border: 1px solid #000;
    color: #000000;
  }
`;
const UserImg = styled.img`
  height: 100%;
  border-radius: 50%;
`;
export default Header;
