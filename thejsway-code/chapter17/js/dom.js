// Accessing form fields
const form = document.querySelector("form");

// show form-fields infomation
console.log(`Number form fields: ${form.elements.length}`);
Array.from(form.elements).forEach(e => {
    console.log(`Element name: ${e.name}, eID: ${e.id}, eType: ${e.type}`);
});

// in case of we know that a form consists of 'news' element 
console.log(form.elements.news.type);
console.log(form.elements.nationality.value);

// Shows all user input and cancels form data sending
form.addEventListener("submit", e => {
    const data = e.target.elements;
    console.log(`Username: ${data.username.value}`);
    console.log(`Password: ${data.password.value}`);
    console.log(`Email: ${data.email.value}`);
    console.log(`Subscription: ${data.subscription.value}`);
    console.log(`Nationality: ${data.nationality.value}`);
    e.preventDefault(); // Cancel form data sending
});