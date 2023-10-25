import { useEffect, useState } from "react";
import styled from "styled-components";

const Container = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: row;
    padding: 2rem;
    
`;

const FuncButton = styled.button`
    color: #314543
    border-radius: 2rem;
`;

const FuncBar = (props) => {

    const [searchWord,setSearchWord] = useState("");

    const changeHandler =(event) => {
        setSearchWord(event.target.value);
    };

    useEffect(() => {
        props.isSearching(searchWord);
    }, [searchWord]);

    return(
        <Container>
            <input type="text" placeholder="請輸入要搜尋的單字" style={{width: '30vw',borderRadius: '30px',color: '#314543',fontSize: '1.5rem',fontWeight: 'bold',textIndent:'10px'}} onChange={changeHandler}/>
            <button type="button" style={{color: '#314543',border: 'none',fontWeight: 'bold',marginLeft: '5rem',fontSize: '1.5rem',
    borderRadius: '30px'}}>A-Z排序</button>
        </Container>
    );
};

export default FuncBar;