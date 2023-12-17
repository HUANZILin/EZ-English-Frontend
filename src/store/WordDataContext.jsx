import { createContext, useState, useEffect } from "react";

export const WordData = createContext({
    wordList : [],
    collecting : () => {}
});

export default function WordDataProvider({children}){
    const [wordData,setWordData] = useState([]);
    const [nowLoading, setNowLoading] = useState(true);
    const [error ,setError] = useState();

    useEffect(() => {
        const url = 'https://jybluega.com/ez-backend/wordList';
        const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJtX2lkIjoiNCIsIm1fYWNjb3VudCI6InRlc3QifQ.1TMkD1UIvZDPAdv64e8wLYp4F7rkBYgrYre9yQ8s33A';
        async function fetchData(){
          const response = await fetch(url, {
            headers: { Authorization: `Bearer ${token}` }});
          const resData =await response.json();
          setWordData(resData.data.wordsData);
          setNowLoading(false);
        }
        try{
            fetchData();
        }catch(error){
            console.log("The error occuered! :",error.message);
        }
        
    },[])

    const nowCollecting = () => {
        
    }

    return(
        <WordData.Provider value={wordData}>
            {children}
        </WordData.Provider>
    )
}
// const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJtX2lkIjoiNCIsIm1fYWNjb3VudCI6InRlc3QifQ.1TMkD1UIvZDPAdv64e8wLYp4F7rkBYgrYre9yQ8s33A';

// useEffect(() => {
//     const url = 'https://jybluega.com/ez-backend/wordList';
//     fetch(url, {
//         headers: {Authorization: `Bearer ${token}`}
//       })
//     .then((response)=> {
//         if (!response.ok) {
//             throw new Error('Network response was not ok');
//           }
//           return response.json();
//     })
//     .then((data) => {
//         setOnPlaying(data.data.wordsData);
//       })
// },[])