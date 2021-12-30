import styled from 'styled-components';

export const ContainerAtCenter = styled.div`
    @import url('https://fonts.googleapis.com/css2?family=Righteous&family=Sarala&display=swap');

    width:100%;
    min-height:100vh;

    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;

    @media(min-width:600px){
        flex-direction:row;
    }

    .bot{
        width:100%;
        max-width:430px;

        img{
            width:100%;
            max-width:430px;
        }
    }

    .error{
        width:fit-content;
        height:fit-content;
         
        display:flex;
        align-items:flex-start;
        
        flex-direction:column;
        gap:8px;

        padding:16px;

        h1{
            font-family: 'Righteous', cursive;
            color:#FFF2E7;

            text-align:left;
            font-size:64px;
        }

        h2{
            font-family:'Sarala',sans-serif;
            font-size:32px;
            color:#ECD6C4;
        }

        button{
            width:180px;
            height:60px;

            color:#2F2325;
            background-color: #ECD6C4;
            font-family:'Sarala',sans-serif;
            font-size:16px;

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
`;