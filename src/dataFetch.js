import '../public/books.json'
const dataFetcher = (location = '../public/books.json') => {
    fetch(location)
    .then(res=>res.json())
    .then(data => console.log(data))
}

export default dataFetcher