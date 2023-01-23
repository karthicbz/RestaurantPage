const Credits = ()=>{
    const credits = document.createElement('div');
    credits.classList.add('credits');
    const imgCredits = document.createElement('div');
    imgCredits.classList.add('img-credits');
    const img1 = document.createElement('p');
    img1.innerHTML = 'Photo by <a href="https://unsplash.com/@ninjason?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Jason Leung</a> on <a href="https://unsplash.com/photos/poI7DelFiVA?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>';
    imgCredits.appendChild(img1);
    const img2 = document.createElement('p');
    img2.innerHTML = 'Photo by <a href="https://unsplash.com/de/@nickkarvounis?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Nick Karvounis</a> on <a href="https://unsplash.com/photos/Ciqxn7FE4vE?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>';
    imgCredits.appendChild(img2);
    const img3 = document.createElement('p');
    img3.innerHTML = 'Photo by <a href="https://unsplash.com/@edoronila?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Esperanza Doronila</a> on <a href="https://unsplash.com/photos/Xns5s92Ipcc?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>';
    imgCredits.appendChild(img3);
    const img4 = document.createElement('p');
    img4.innerHTML = 'Photo by <a href="https://unsplash.com/@kgadia87?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Kristian Angelo</a> on <a href="https://unsplash.com/photos/j3WPrwQKhXU?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>';
    imgCredits.appendChild(img4);
    credits.appendChild(imgCredits);

    const websiteCredit = document.createElement('div');
    websiteCredit.classList.add('web-credit');
    const creditText = document.createElement('p');
    creditText.innerText = 'Made with 💖 by pkarthicbz';
    websiteCredit.appendChild(creditText);
    credits.appendChild(websiteCredit);

    return credits;
}



const footerContent = ()=>{
    const footer = document.createElement('div');
    footer.classList.add('footer');
    const footerHead = document.createElement('p');
    footerHead.textContent = 'Credits';
    footer.appendChild(footerHead);
    footer.appendChild(Credits());
    return {footer};
}

export {footerContent};