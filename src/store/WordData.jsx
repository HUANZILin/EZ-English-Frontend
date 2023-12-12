const WordData = React.createContext({

})

useEffect(() => {
    const url = 'https://jybluega.com/ez-backend/wordList';
    fetch(url, {
        headers: {Authorization: `Bearer ${token}`}
      })
    .then((response)=> {
        if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return response.json();
    })
    .then((data) => {
        setOnPlaying(data.data.wordsData);
      })
},[])

console.log(onPlaying);