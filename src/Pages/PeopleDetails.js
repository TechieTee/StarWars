import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import styled from "styled-components";
import AppLayout from "../components/AppLayout";
import profileImg from "../Images/image6.png";
import useFetch from "../shared/hooks/useFetch";
import { useLogin } from "../shared/hooks/useLogin";

const PeopeleDetails = () => {
  const location = useLocation();
  const { data, error, isLoading } = useFetch(
    `https://swapi.dev/api${location.pathname}`
  );
  console.log(data);
  const { loggedIn } = useLogin();

  if (!loggedIn)
    return <Navigate to="/login" state={{ from: location }} replace />;
  return (
    <AppLayout>
      {!!error ? (
        <p>{error}</p>
      ) : isLoading ? (
        <p>Loading...</p>
      ) : (
        <ImageProfile>
          <img src={profileImg} alt="profileImg" />
          <div>
            <h3>{data?.name}</h3>{" "}
            <p className="text-capitalize">Gender: {data?.gender}</p>
            <p className="text-capitalize">Year of Birth: {data?.birth_year}</p>
            <p className="text-capitalize">Skin color: {data?.skin_color}</p>
            <p className="text-capitalize">Height: {data?.height}</p>
          </div>
        </ImageProfile>
      )}
    </AppLayout>
  );
};
export default PeopeleDetails;

const ImageProfile = styled.div`
  width: 750px;
  height: 530px;
  grid-gap: 0px;
  display: grid;
  grid-template-columns: 50% 50%;
  img {
    margin: auto;
    width: 100%;
    height: 100%;
  }

  div {
    margin: auto;
    width: 90%;
    height: 90%;

    h3 {
      font-family: "Inter";
      font-style: normal;
      font-weight: 700;
      font-size: 48px;
      line-height: 90px;
      color: #000000;
    }
    p {
      font-family: "Inter";
      font-style: normal;
      font-weight: 500;
      font-size: 16px;
      line-height: 24px;
    }
  }
`;
