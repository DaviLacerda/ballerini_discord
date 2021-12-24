import styled from 'styled-components';

export const Container = styled.div`
    @import url('https://fonts.googleapis.com/css2?family=Righteous&family=Sarala&display=swap');

    width:100%;

    display:flex;
    flex-direction:column;
    align-items:center;

    .welcome{
        display:flex;
        flex-direction:column;
        justify-content:space-around;
        align-items:center;

        width:100%;

        margin:0 32px;

        @media(min-width:900px){
            flex-direction:row;
        }

        .left{
            display:flex;
            gap:32px;
            flex-direction:column;

            img{
                height:430px;
            }

            h1{
                color:#FFF2E7;

                font-family: 'Righteous', cursive;
                font-size:64px;
            }

            p, button{
                font-family:'Sarala', sans-serif;
                font-size:24px;
            }

            p{
                color:#ECD6C4;
            }

            button{
                width:180px;
                height:60px;

                color:#2F2325;
                background-color: #ECD6C4;

                border:none;
                border-radius:20px;
                box-shadow: 4px 5px 4px rgba(0, 0, 0, 0.25);

                transition:.5s;

                @media(min-width:1200px){
                    &:hover, &:active{
                        background-color: rgba(236, 214, 196, 0.53);
                        cursor:pointer;
                    }
                }
            }
        }
    }

    .makes{
        display:flex;
        flex-direction:column;
        align-items:center;
        gap:24px;

        margin-top:48px;
        margin:48px 32px 32px;

        h3{
            color:#FFF2E7;
            font-family:'Righteous',cursive;
            font-size:24px;

            padding-top:42px;

            border-top:0.4px solid #FFF2E7;
        }

        ol{
            display:flex;
            flex-direction:column;
            align-items:center;
            gap:24px;

            margin-bottom:12px;

            li{
                font-family: 'Sarala', sans-serif;
                font-size: 18px;
                color: #ECD6C4;
            }
        }
    }
`;