const getGoods = () => {
    const links = document.querySelectorAll('.navigation-link') 
    links.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault()
            getData()
        })
    })

    const getData = () => {
        fetch('https://willberries-48fee-default-rtdb.firebaseio.com/db.json')
            .then(res => res.json())
            .then(data => localStorage.setItem('data', JSON.stringify(data)))
    }
}

getGoods()