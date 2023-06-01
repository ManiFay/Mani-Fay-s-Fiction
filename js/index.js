const credit = document.getElementById('')

credit.addEventListener('mouseover', () => {
    contacts.innerHTML = "Credit for this art goes to my brother."
})

credit.addEventListener('mouseout', () => {
    contacts.innerHTML = "Click here to see the crdits for the artist!"
})