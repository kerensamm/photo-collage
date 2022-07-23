import styled, { css } from "styled-components";

export const Button = styled.button`
    color:var(--c-neutral-100);
    background-color:var(--c-main-500);
    border:unset;
    min-width:80%;
    padding-block:0.4em;
    border-radius:0.4em;
    border: 1px solid var(--c-main-600);
    cursor:pointer;
    

    ${({ bold }) =>
      bold &&
      css`
            background-color:var(--c-accent-400);

        }`}
    ${({ border }) =>
      border &&
      css`
            border: 1px solid var(--c-main-700);
        }`}

    &:hover{
        filter:brightness(0.85);
    }
}`;

export const Action = styled.button`
    background-color:var(--c-main-700);
    opacity:0.8;
    border:none;
    border-radius: 0.2em;
    cursor:pointer;
    padding:0.5vmin;

    svg{
        stroke: var(--c-neutral-200);

    }
    &:nth-of-type(2){
        svg{
            stroke:var(--c-main-700);
            fill:var(--c-neutral-200);
        }
    }
    &:not(:nth-of-type(2)){
        svg{
            transform:scale(0.9);
        }
    }
}`;
