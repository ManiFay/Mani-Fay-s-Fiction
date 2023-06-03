const credit = document.getElementById('credit')

credit.addEventListener('mouseover', () => {
    credit.innerHTML = "Credit for this art goes to my brother. I, Mani Fay, wrote the article."
})

credit.addEventListener('mouseout', () => {
    credit.innerHTML = "Hover over this text to see the credits for the artist and article!"
})