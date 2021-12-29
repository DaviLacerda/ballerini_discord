import styled, { keyframes } from "styled-components";

const allPage = keyframes`
    from{
        height:0px;
    }
    to{
        height:20vh;
    }
`;

export const HeaderContainer = styled.header`
    @import url("https://fonts.googleapis.com/css2?family=Montserrat&family=Rock+Salt&display=swap");
    
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    gap:10px;

    width: 100%;

    border-radius: 0 0 20px 20px;
    background: linear-gradient(68.15deg, #2F2325 16.62%, #8E5D52 85.61%);
    color: #fff;

    @media(max-width:300px){
        flex-direction:column;
    }
    
    padding:16px;

    h1 {
        font-family: "Rock Salt", cursive;
        width: fit-content;
        text-align: center;
        word-wrap: break-word;
    }

    nav.menu {
        @media (max-width: 600px) {
            display: none;
        }
    }

    nav.menu__toggle {
        display: none;
        align-items: center;
        justify-content: center;
        animation: ${allPage} 0.5s forwards;
        
        ul {
            flex-direction: column;
        }

        @media (min-width: 600px) {
            display: none;
        }
    }

        ul{
            display:flex;
            flex-direction:row;
            gap:12px;

            a{
                text-decoration:none;
                &:visited{
                    color:inherit;
                }
            }

            li{
                font-family:'Sarala',sans-serif;
                font-size:18px;
                color:#fff2e7;
                
                list-style-type:none;

                transition:filter .5s;

                &:hover{
                    cursor:pointer;
                    filter:brightness(0.9);
                }
            }
        }
    }
`;