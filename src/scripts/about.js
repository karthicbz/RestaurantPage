const timings = ()=>{
    const timingHead = document.createElement('p');
    timingHead.innerText = 'Timings';

    const timingDetails = document.createElement('p');
    timingDetails.innerText = 'Opens Monday to Sunday - 11 AM to 11 PM.';

    return {timingHead, timingDetails};
}

const addressDetails = ()=>{
    const address = document.createElement('div');
    address.classList.add('address');
    const addressHead = document.createElement('p');
    addressHead.innerText = 'Head Office';
    address.appendChild(addressHead);
    const addressHeadDetails = document.createElement('p');
    addressHeadDetails.innerHTML = 'Area 51<br>Boomer street<br>Planet Mars';
    address.appendChild(addressHeadDetails);

    return address;
}

const contactForm = ()=>{
    const contact = document.createElement('div');
    contact.classList.add('contact');
    const contactHead = document.createElement('p');
    contactHead.innerText = 'Contact Us';
    contact.appendChild(contactHead);

    const contactForm = document.createElement('form');
    const name = document.createElement('input');
    name.type = 'text';
    name.name = 'Name';
    name.placeholder = 'Name';

    const email = document.createElement('input');
    email.type = 'email';
    email.name = 'email';
    email.placeholder = 'Email';

    const message = document.createElement('textarea')
    // message.type = 'textarea';
    message.name = 'message';
    message.placeholder = 'type message here...';

    contactForm.appendChild(name);
    contactForm.appendChild(email);
    contactForm.appendChild(message);
    contact.appendChild(contactForm);

    return contact;
}



const timingComponent = (()=>{
    const timing = document.createElement('div');
    timing.classList.add('about');
    timing.appendChild(timings().timingHead);
    timing.appendChild(timings().timingDetails);
    timing.appendChild(addressDetails());
    timing.appendChild(contactForm());
    return timing;
})();

export {timingComponent};