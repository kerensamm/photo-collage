import styled from "styled-components";

export const GalleryModal = styled.div`
    position:fixed;
    inset:0;
    display:flex;
    align-items:center;
    justify-content:center;
}
`;

export const Underlayer = styled.div`
    position:absolute;
    inset:0;
    background-color:var(--c-main-700);
    opacity:0.6;
}`;

export const ModalBody = styled.div`
    background-color:var(--c-main-500);
    border-radius:0.6em;
    box-shadow: 1px 1px 11px var(--c-main-200);
    min-width:30%;
    min-height:30%;
}`;
