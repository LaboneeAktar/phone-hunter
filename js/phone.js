const phoneLoad = async (search) => {
    const url = `https://openapi.programming-hero.com/api/phones?search=${search}`;
    const res = await fetch(url);
    const data = await res.json();
    displayPhones(data.data);
}

const displayPhones = phones => {
    const phoneContainer = document.getElementById('phone-container');
    phoneContainer.textContent = '';

    // Display 10 phones only
    phones = phones.slice(0, 10);

    //No phone found
    const noPhones = document.getElementById('no-phone');
    if (phones.length === 0) {
        noPhones.classList.remove('d-none');
    }
    else {
        noPhones.classList.add('d-none');
    }
    //Display All Phones
    phones.forEach(phone => {
        console.log(phone);
        const phoneDiv = document.createElement('div');
        phoneDiv.classList.add('col');
        phoneDiv.innerHTML = `
            <div class="card">
                <img src="${phone.image}" class="card-img-top w-75 mx-auto p-3 " alt="...">
                <div class="card-body">
                    <h5 class="card-title">${phone.phone_name}</h5>
                    <p class="card-text">Brand: ${phone.brand}</p>
                    <p class="card-text">Slug: ${phone.slug}</p>
                </div>
            </div>
        `;
        phoneContainer.appendChild(phoneDiv);
    })
    //Stop Loader
    toggleSpinner(false);
}



document.getElementById('btn-search').addEventListener('click', function () {
    //Start Loader
    toggleSpinner(true);
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;
    phoneLoad(searchText);
    searchField.value = '';
})

const toggleSpinner = isLoading => {
    const loaderSection = document.getElementById('loader');
    if (isLoading) {
        loaderSection.classList.remove('d-none');
    }
    else {
        loaderSection.classList.add('d-none');
    }
}

// phoneLoad();