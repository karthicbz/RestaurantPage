const paras = ()=>{
    const shopName = document.createElement('p');
    shopName.classList.add('shop-name');
    shopName.innerText = 'Boomraj Restaurant';

    const shopDesc = document.createElement('p');
    shopDesc.classList.add('shop-desc');
    shopDesc.innerText = 'We serve a delicious south indian food in a south indian themed space which makes you feel you are in 80\'s.';
    return {shopName, shopDesc};
}

function importAll(r) {
    const cache = {};
    r.keys().forEach((key) => (cache[key] = r(key)));
    return cache;
}

const branchDetails = ()=>{
    const cache = importAll(require.context('../assets/', true, /\w+\d{1}.jpg$/));
    const branchDetail = document.createElement('div');
    branchDetail.classList.add('branch-details');
    const title = document.createElement('p');
    title.innerText = 'Our Branches';
    branchDetail.appendChild(title);
    const branches = document.createElement('div');
    branches.classList.add('branches');

    for(let key in cache){
        const branch = document.createElement('div');
        branch.classList.add('branch');
        const branch_img = document.createElement('img');
        branch_img.classList.add('branch-img');
        branch_img.src = cache[key];
        branch.appendChild(branch_img);

        const branchName = document.createElement('p');
        branchName.classList.add('branch-name');
        branchName.innerText = key.replace('.jpg', '').replace('./', '').replace('_1', '');
        branch.appendChild(branchName);
        branches.appendChild(branch);
    }
    branchDetail.appendChild(branches);

    return {branchDetail};
}

const homePage = (()=>{
    const home = document.createElement('div');
    home.classList.add('home');
    home.appendChild(paras().shopName);
    home.appendChild(paras().shopDesc);
    home.appendChild(branchDetails().branchDetail);
    // console.log(home);
    return home;
})();

// branchDetails();

// export {paras, branchDetails};
export {homePage};