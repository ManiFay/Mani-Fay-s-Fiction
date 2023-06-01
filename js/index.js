const contacts = document.getElementById('contacts')

contacts.addEventListener('mouseover', () => {
    contacts.innerHTML = "Contacts/Socials"
})

contacts.addEventListener('mouseout', () => {
    contacts.innerHTML = ""
})