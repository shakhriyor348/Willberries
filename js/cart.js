const cart = () => {
    const cartBtn = document.querySelector('.button-cart'),
        modalCart = document.querySelector('#modal-cart'),
        modalClose = document.querySelector('.modal-close')


    cartBtn.addEventListener('click', () => {
        modalCart.style = `display: flex;`
    })

    modalClose.addEventListener('click', () => {
        closeModal()
    })

    modalCart.addEventListener('click', (e) => {
        if (e.target.classList.contains('overlay')) {
            closeModal()
        }
    })


    function closeModal() {
        modalCart.style = `display: none;`
    }
}

cart()