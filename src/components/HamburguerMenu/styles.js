import styled from 'styled-components';

export const BurguerContainer = styled.div`
    display:none;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    gap:4px;
    
    position:absolute;
    top:12px;
    right:12px;

    width:1.5rem;
    height:1.5rem;
        

    @media(max-width:600px){
        display:flex;
    }
    
    .bar{
        width:100%;
        height:10%;

        background-color:#fff;

        transition:.3s;
    }

    .bar--top{
        transform:rotate(45deg);

        position:absolute;
        top:50%;
    }

    .bar--mid{
        filter: opacity(0);
    }

    .bar--bot{
        transform:rotate(-45deg);

        position:absolute;
        top:50%;
    }
`;