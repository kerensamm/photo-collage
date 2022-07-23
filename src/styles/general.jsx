import styled from "styled-components";

export const MainLayout = styled.div`
display:grid;
grid-template-columns: 0.4fr 2fr; 
grid-template-rows: 0.2fr 2.6fr 0.2fr; 
grid-template-areas: 
  "header header"
  "action main"
  "action edit"; 
}
width:100%;
height:100%;
background-color:var(--c-main-600);

}`;

export const ActionsMenu = styled.div`
    grid-area:action;
    border-right: 1px solid var(--c-main-200);
    display:flex;
}`;
export const HeaderDiv = styled.div`
    grid-area:header;
    border-bottom: 1px solid var(--c-main-200);
}`;
export const Main = styled.div`
    grid-area:main;
    min-height:calc(90vh - 10vmin);
    min-width:70%;
    background-color:var(--c-main-700);
}`;
export const EditBar = styled.div`
    grid-area:edit;
    border-top: 1px solid var(--c-main-200);
}`;

export const SideNav = styled.div`
    padding-inline:1vmin;
    height:100%;
    display:flex;
    flex-direction:column;
    padding-top:2vmin;
    gap:2.5vmin;
    align-items:center;
    border-right: 1px solid var(--c-main-200);
    svg{
        cursor:pointer;
        stroke:var(--c-neutral-100);
    }
}`;

export const ImageContainer = styled.div`
    width: 47%;
    aspect-ratio: 1;
    overflow:hidden;
    border-radius:0.2em;
    img{
        transform: scale(1.25);
        object-position:center;
    }
}`;
