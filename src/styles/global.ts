import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

*{
    margin: 0px;
    padding: 0px;
    box-sizing: border-box;
}

:root{
  --white: #FFFFFF;

  --gray-100: #E1E1E6;
  --gray-300: #a8a8b3;
  --gray-800: #29292E;
  --gray-900: #121214;

  --blue-800: #273133;
  --blue-950: #1F2729;

  --cyan-500: #61dafb;

  --green-500: #04D361;
  
  --yellow-300: #FFB319;
  --yellow-500: #EBA417;
}

html{
    @media(max-width: 1080px){
        font-size: 93.75%;
    }

    @media(max-width: 720px){
        font-size: 87.5%;
    }
}

body {
    background: var(--gray-900);
    color: var(--white);
    -webkit-font-smoothing: antialiased;
}

body, input, textarea, button{
    font-family: 'Roboto', sans-serif;
    font-size: 1rem;
    font-weight: 400;
}

p{
    font-family: 'Roboto', sans-serif;
    font-size: 0.875rem;
    font-weight: 400;
}

a{
  color: inherit;
  text-decoration: none;
}

h1, h2, h3, h4, h5, h6, strong{
    font-family: 'Roboto', sans-serif;
    font-size: 1.5rem;
    font-weight: 700;
    color: var(--gray-100);
}

button {
    cursor: pointer;
}

span.highlightInformation{
    color: var(--cyan-500);
}

[disable] {
    opacity: 0.6;
    cursor: not-allowed;
}

`;
