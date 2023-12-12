import { createContext, useState } from "react";

const [wordData,setWordData] = useState([]);

export const WordData = createContext();
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