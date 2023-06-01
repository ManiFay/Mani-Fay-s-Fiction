const credit = document.getElementById('credit')

credit.addEventListener('mouseover', () => {
    credit.innerHTML = "Credit for this art goes to my brother."
})

credit.addEventListener('mouseout', () => {
    credit.innerHTML = "Hover over this text to see the credits for the artist!"
})