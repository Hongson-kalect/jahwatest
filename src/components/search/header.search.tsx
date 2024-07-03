import styled from "styled-components";

const Wrapper = styled.div`
  /* display: inline-block; */
  padding: 0px 8px;
  position: relative;

  & input[type="text"] {
    width: 100%;
    padding: 2px 20px;
    border: none;
    outline: none;
    border-radius: 20px;
    box-shadow: 0 0 6px rgba(0, 0, 0, 0.3);
  }

  & input[type="text"]:focus {
    box-shadow: 0 0 6px rgba(3, 110, 5, 0.6);
  }

  & button[type="submit"] {
    background-color: #37af37;
    border: none;
    color: #fff;
    cursor: pointer;
    padding: 3px 12px;
    border-radius: 20px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    position: absolute;
    top: 0;
    right: 0;
    transition: 0.3s ease;
    transform: translateY(-1px);
  }

  & button[type="submit"]:hover {
    /* transform: scale(1.1); */
    color: rgb(255, 255, 255);
    background-color: #378f37;
  }
`;

export const HeaderSearch = () => {
  return (
    <Wrapper className="search">
      <input placeholder="Search..." type="text" />
      <button type="submit">Go</button>
    </Wrapper>
  );
};
