const contacts = document.getElementById('contacts')

var a = document.createElement('a');
      var linkText = document.createTextNode("Contacts/Socials");
      a.appendChild(linkText);
      a.title = "Contacts/Socials";
      a.href = "contacts.html";
      document.body.appendChild(a);

contacts.addEventListener('mouseover', () => {
    contacts.innerHTML = "Contacts/Socials"
})

contacts.addEventListener('mouseout', () => {
    contacts.innerHTML = a
})