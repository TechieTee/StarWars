import styled from "styled-components";
import React from "react";

function NotFound() {
  return (
    <Div className="d-flex justify-content-center align-items-center h-100">
      <h2>404: Page not found</h2>
    </Div>
  );
}
const Div = styled.div`
  min-height: 100vh;
`

export default NotFound;
