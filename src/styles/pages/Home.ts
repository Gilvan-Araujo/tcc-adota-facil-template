import styled from 'styled-components'

import theme from '@styles/theme'

export const HomeContainer = styled.div`
  display: flex;
  height: calc(100vh - 4rem);
  width: calc(100vw - 4rem);
  padding: 2rem;
  margin: 2rem;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;

  div {
    display: flex;
    gap: 2rem;
  }
`

export const OptionsContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  height: 100%;

  .slider {
    width: 25vw;
  }

  div {
    transition: all 0.5s ease-in-out;
    font-size: 1rem;
    padding: 10px;
    margin: 10px;

    &.highlight {
      transition: all 0.5s ease-in-out;
      padding: 20px;
      font-size: 1.25rem;
      background-color: ${theme.palette.secondary.light};
      color: ${theme.palette.primary.contrastText};
    }
  }

  @media (max-width: 430px) {
    flex-direction: column-reverse;

    .slider {
      height: 25vh !important;
    }
  }
`

export const MenuContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  height: 100%;

  .MuiButton-root {
    font-size: 1rem;
  }

  .MuiList-root {
    background-color: ${theme.palette.secondary.main};
    color: ${theme.palette.primary.contrastText};
  }
`
