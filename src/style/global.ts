import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  *:before,
  *:after {
    box-sizing: border-box;
  }

  a,
  a:visited {
    text-decoration: none;
    font-family: 'StratosSkyeng', sans-serif;
    cursor: pointer;
  }

  html,
  body {
    width: 100%;
    height: 100%;
    font-family: 'StratosSkyeng', sans-serif;
    color: #FFFFFF;
    overflow: hidden;
  }

  ul li {
    list-style: none;
  }
  
  main {
    flex: 1 1 auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }

  @font-face {
    font-family: 'StratosSkyeng';
    src: local('StratosSkyeng'),
    url('../fonts/stratos/Stratos-Regular.woff2') format('font-woff2'),
    url('../fonts/stratos/Stratos-Regular.woff2') format('font-woff');
    font-weight: 400;
    font-style: normal;
  }

  @keyframes load {
    from {
      left: -150px;
    }
    to {
      left: 100%;
    }
  }
`;
