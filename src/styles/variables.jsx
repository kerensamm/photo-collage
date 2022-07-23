import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
:root, [data-theme="dark"] {

  /* Colors */
  --c-neutral-100:hsl(0,0%,100%);
  --c-neutral-200: hsl(0,0%,90%);
  --c-neutral-300:hsl(0,0%,70%);
  --c-neutral-400: hsl(0,0%,50%);
  --c-neutral-600: hsl(0,0%,30%);
  --c-neutral-700: hsl(0,0%,10%);
  --c-neutral-800:hsl(0,0%,0%);
  
  --c-accent-100: hsl(348,100%,84%);
  --c-accent-200: hsl(348,76%,72%);
  --c-accent-400: hsl(348,61%,54%);
  --c-accent-700: hsl(347,76%,28%);

  --c-main-100: hsl(216,71%,80%);
  --c-main-200: hsl(210,40%,12%);
  --c-main-500: hsl(216,40%,20%);
  --c-main-600: hsl(210,64%,6%);
  --c-main-700: hsl(216,71%,4%);
}

[data-theme="light"]{
  /* Colors */
  --c-neutral-100:hsl(0,0%,0%);
  --c-neutral-200: hsl(0,0%,10%);
  --c-neutral-300:hsl(0,0%,30%);
  --c-neutral-400: hsl(0,0%,50%);
  --c-neutral-600: hsl(0,0%,70%);
  --c-neutral-700: hsl(0,0%,90%);
  --c-neutral-800:hsl(0,0%,100%);
  
  --c-accent-100: hsl(347,76%,28%);
  --c-accent-200: hsl(348,76%,72%);
  --c-accent-700: hsl(348,100%,84%);

  --c-main-100: hsl(216,71%,4%);
  --c-main-200: hsl(216,60%,90%);
  --c-main-500: hsl(210,64%,6%);
  --c-main-600: hsl(216,60%,93%);
  --c-main-700: hsl(216,71%,95%);
}
`;
