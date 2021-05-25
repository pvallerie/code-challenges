const apiCall = url => {
    fetch(url)
        .then(res => res.json())
        .then(data => console.log(data))
}

const jsonplaceholder = 'https://jsonplaceholder.typicode.com/users'
apiCall(jsonplaceholder)
