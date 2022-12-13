import styled from "styled-components";


export const Container = styled.div`
    margin: 30px 0;
    cursor: pointer;

    a {
        display: flex;
        align-items: center;
        text-decoration: none;
    }
`;

export const Info = styled.div`
    flex: 1;
    margin-right: 20px;
`;

export const Title = styled.div`
    text-align: right;
    font-weight: bold;
    margin-bottom:5px;
    font-size: 15px;
    color: #FFF;
`;

export const Description = styled.div`
    text-align: right;
    font-size: 13px;
    color: #B8B8D4;
`;

type Icon = {
    active: boolean;
}

export const IconArea = styled.div<Icon>`
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background-color: ${props => props.active ? '#25CD89' : '#494A7C'};
    display: flex;
    justify-content: center;
    align-items: center;
`;

type Point = {
    active: boolean
}
export const Point = styled.div<Point>`
    width: 6px;
    height: 6px;
    border-radius: 50%;
    border: 3px solid #494A7C;
    margin-left: 30px;
    margin-right: -6px;
    background-color: ${props => props.active ? '#25CD89' : '##02044A'};;
`;