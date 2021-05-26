

const apiCall = (url, id) => {
    fetch(`${url}/${id}`)
        .then(res => {
            if (!res.ok){
                throw new Error(res.status)
            }
            return res.json()
        })
        .then(data => console.log(data))
        .catch(error => console.error('Error with status:', error))
}

const id = 1
const url = 'https://jsonplaceholder.typicode.com/users'
apiCall(url, id)
