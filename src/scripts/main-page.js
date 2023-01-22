const paras = ()=>{
    const shopName = document.createElement('p');
    shopName.classList.add('shop-name');
    shopName.innerText = 'Boomraj Restaurant';

    const shopDesc = document.createElement('p');
    shopDesc.classList.add('shop-desc');
    shopDesc.innerText = 'We serve a delicious south indian food in a south indian themed space which makes you feel you are in 80\'s.';

    return {shopName, shopDesc};
}

export {paras};