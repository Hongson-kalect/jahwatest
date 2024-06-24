import styled from "styled-components";

const Wrapper = styled.div`
  .body {
    --radius: 8px;
    --border: 4px;
    --height: 48px;
    --speed: 0.25s;
    display: grid;
    place-items: center;
    align-content: center;
    font-family: "SF Pro Text", "SF Pro Icons", "AOS Icons", "Helvetica Neue",
      Helvetica, Arial, sans-serif, system-ui;
  }

  .tabs {
    height: var(--height);
    display: grid;
    grid-auto-flow: column;
    background: hsl(0 0% 0%);
    border-radius: var(--radius);
    grid-auto-columns: 1fr;
    position: relative;
    border: var(--border) solid hsl(0 0% 0%);
  }

  .tabs {
    --ease: linear(
      0,
      0.1641 3.52%,
      0.311 7.18%,
      0.4413 10.99%,
      0.5553 14.96%,
      0.6539 19.12%,
      0.738 23.5%,
      0.8086 28.15%,
      0.8662 33.12%,
      0.9078 37.92%,
      0.9405 43.12%,
      0.965 48.84%,
      0.9821 55.28%,
      0.992 61.97%,
      0.9976 70.09%,
      1
    );
  }

  .tabs > .input,
  .sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border-width: 0;
  }

  .tabs:has(:checked:nth-of-type(1)) {
    --active: 0;
  }
  .tabs:has(:checked:nth-of-type(2)) {
    --active: 1;
  }
  .tabs:has(:checked:nth-of-type(3)) {
    --active: 2;
  }
  .tabs:has(:checked:nth-of-type(4)) {
    --active: 3;
  }

  .tabs :checked + .label {
    --highlight: 1;
  }

  .tabs:has(.input:nth-of-type(2)) {
    --count: 2;
  }
  .tabs:has(.input:nth-of-type(3)) {
    --count: 3;
  }
  .tabs:has(.input:nth-of-type(4)) {
    --count: 4;
  }

  .tabs .label {
    padding: 0 clamp(10px, 10px + 10px, 20px);
    cursor: pointer;
    text-align: center;
    height: 100%;
    display: grid;
    border-radius: calc(var(--radius) - var(--border));
    place-items: center;
    color: hsl(0 0% 100% / calc(0.5 + var(--highlight, 0)));
    transition: background, color;
    transition-duration: 0.25s;
    transition-timing-function: var(--ease, ease);
  }

  .input:not(:checked) + .label:hover {
    --highlight: 0.35;
    background: hsl(0 0% 20%);
  }

  .tabs::after {
    pointer-events: none;
    content: "";
    width: calc(100% / var(--count));
    height: 100%;
    background: hsl(0 0% 100%);
    position: absolute;
    border-radius: calc(var(--radius) - var(--border));
    mix-blend-mode: difference;
    translate: calc(var(--active, 0) * 100%) 0;
    transition: translate, outline-color;
    transition-duration: var(--speed);
    transition-timing-function: var(--ease, ease);
    outline: 2px solid transparent;
  }

  .tabs:has(:focus-visible)::after {
    outline-color: red;
  }
`;

type RadioType = {
  children?: React.ReactNode;
  options: {
    label: string;
    value: string;
  }[];
  groupName?: string;
  className?: string;
};

export const RadioGroup = (props: RadioType) => {
  return (
    <Wrapper>
      <div className="body">
        <div className="tabs">
          {props.options.map((option, index) => {
            return (
              <div className="tabs" key={index}>
                <input
                  //   checked={index === 1}
                  value="HTML"
                  name="fav_language"
                  id="html"
                  type="radio"
                  className="input"
                />
                <label htmlFor="html" className="label">
                  HTML
                </label>
              </div>
            );
          })}
        </div>
      </div>
    </Wrapper>
  );
};
