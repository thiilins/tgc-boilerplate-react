import styled, { css } from 'styled-components'

export const Container = styled.label`
  ${({ theme }) => css`
    font-size: 0.7rem;
    position: relative;

    .toggleWrapper {
      position: relative;
      overflow: hidden;
      -webkit-transform: translate3d(0, 0, 0);
      transform: translate3d(0, 0, 0);
      color: ${theme.colors.primaryText};
    }
    .toggleWrapper input {
      width: 0;
      height: 0;
    }
    .toggle {
      cursor: pointer;
      display: inline-block;
      position: relative;
      width: 9em;
      height: 5em;
      background-color: #83d8ff;
      border-radius: 84px;
      -webkit-transition: background-color 200ms
        cubic-bezier(0.445, 0.05, 0.55, 0.95);
      transition: background-color 200ms cubic-bezier(0.445, 0.05, 0.55, 0.95);
    }

    .toggle__handler {
      display: inline-block;
      position: relative;
      z-index: 1;
      top: 0.3em;
      left: 0.3em;
      width: 4.4em;
      height: 4.4em;
      background-color: #ffcf96;
      border-radius: 100%;
      -webkit-box-shadow: 0 0.2em 0.6em rgba(0, 0, 0, 0.3);
      box-shadow: 0 0.2em 0.6em rgba(0, 0, 0, 0.3);
      -webkit-transition: all 400ms cubic-bezier(0.68, -0.55, 0.265, 1.55);
      transition: all 400ms cubic-bezier(0.68, -0.55, 0.265, 1.55);
      -webkit-transform: rotate(-45deg);
      -ms-transform: rotate(-45deg);
      transform: rotate(-45deg);
    }

    .toggle__handler .crater {
      position: absolute;
      background-color: #e8cda5;
      opacity: 0;
      -webkit-transition: opacity 200ms ease-in-out;
      transition: opacity 200ms ease-in-out;
      border-radius: 100%;
    }

    .toggle__handler .crater--1 {
      top: 1.8em;
      left: 1em;
      width: 4px;
      height: 4px;
    }

    .toggle__handler .crater--2 {
      top: 2.8em;
      left: 2.2em;
      width: 0.6em;
      height: 0.6em;
    }

    .toggle__handler .crater--3 {
      top: 1em;
      left: 2.5em;
      width: 0.8em;
      height: 0.8em;
    }

    .star {
      position: absolute;
      background-color: #fff;
      -webkit-transition: all 300ms cubic-bezier(0.445, 0.05, 0.55, 0.95);
      transition: all 300ms cubic-bezier(0.445, 0.05, 0.55, 0.95);
      border-radius: 50%;
    }

    .star--1 {
      top: 1em;
      left: 3.5em;
      z-index: 0;
      width: 3em;
      height: 0.3em;
    }

    .star--2 {
      top: 1.8em;
      left: 2.8em;
      z-index: 1;
      width: 3em;
      height: 0.3em;
    }

    .star--3 {
      top: 2.7em;
      left: 4em;
      z-index: 0;
      width: 3em;
      height: 0.3em;
    }

    .star--4,
    .star--5,
    .star--6 {
      opacity: 0;
      -webkit-transition: all 300ms 0 cubic-bezier(0.445, 0.05, 0.55, 0.95);
      transition: all 300ms 0 cubic-bezier(0.445, 0.05, 0.55, 0.95);
    }

    .star--4 {
      top: 1.6em;
      left: 1.1em;
      z-index: 0;
      width: 0.2em;
      height: 0.2em;
      -webkit-transform: translate3d(0.3em, 0, 0);
      transform: translate3d(0.3em, 0, 0);
    }

    .star--5 {
      top: 3.2em;
      left: 1.7em;
      z-index: 0;
      width: 0.3em;
      height: 0.3em;
      -webkit-transform: translate3d(0.3em, 0, 0);
      transform: translate3d(0.3em, 0, 0);
    }

    .star--6 {
      top: 3.6em;
      left: 2.8em;
      z-index: 0;
      width: 0.2em;
      height: 0.2em;
      -webkit-transform: translate3d(0.3em, 0, 0);
      transform: translate3d(0.3em, 0, 0);
    }

    input:checked + .toggle {
      background-color: #749dd6;
    }

    input:checked + .toggle:before {
      color: #749ed7;
    }

    input:checked + .toggle:after {
      color: #fff;
    }

    input:checked + .toggle .toggle__handler {
      background-color: #ffe5b5;
      -webkit-transform: translate3d(4em, 0, 0) rotate(0);
      transform: translate3d(4em, 0, 0) rotate(0);
    }

    input:checked + .toggle .toggle__handler .crater {
      opacity: 1;
    }

    input:checked + .toggle .star--1 {
      width: 0.2em;
      height: 0.2em;
    }

    input:checked + .toggle .star--2 {
      width: 0.4em;
      height: 0.4em;
      -webkit-transform: translate3d(-0.5em, 0, 0);
      transform: translate3d(-0.5em, 0, 0);
    }

    input:checked + .toggle .star--3 {
      width: 0.2em;
      height: 0.2em;
      -webkit-transform: translate3d(-0.7em, 0, 0);
      transform: translate3d(-0.7em, 0, 0);
    }

    input:checked + .toggle .star--4,
    input:checked + .toggle .star--5,
    input:checked + .toggle .star--6 {
      opacity: 1;
      -webkit-transform: translate3d(0, 0, 0);
      transform: translate3d(0, 0, 0);
    }

    input:checked + .toggle .star--4 {
      -webkit-transition: all 300ms 200ms cubic-bezier(0.445, 0.05, 0.55, 0.95);
      transition: all 300ms 200ms cubic-bezier(0.445, 0.05, 0.55, 0.95);
    }

    input:checked + .toggle .star--5 {
      -webkit-transition: all 300ms 300ms cubic-bezier(0.445, 0.05, 0.55, 0.95);
      transition: all 300ms 300ms cubic-bezier(0.445, 0.05, 0.55, 0.95);
    }

    input:checked + .toggle .star--6 {
      -webkit-transition: all 300ms 400ms cubic-bezier(0.445, 0.05, 0.55, 0.95);
      transition: all 300ms 400ms cubic-bezier(0.445, 0.05, 0.55, 0.95);
    }
  `}
`
