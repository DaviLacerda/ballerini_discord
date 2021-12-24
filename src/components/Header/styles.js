import styled from 'styled-components';

export const HeaderStyled = styled.header`
    @import url('https://fonts.googleapis.com/css2?family=Sarala&display=swap');

    display:flex;
    align-items:center;
    justify-content:space-around;
    padding:24px;
    
    border-bottom:0.4px solid #FFF2E7;

    .logo{
        img{
            height:72px;
        }
    }

    .links{
        ul{
            display:flex;
            flex-direction:row;
            gap:32px;

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