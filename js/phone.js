/*
const phoneLoad = async (search, dataLimit) => {
    const url = `https://openapi.programming-hero.com/api/phones?search=${search}`;
    const res = await fetch(url);
    const data = await res.json();
    displayPhones(data.data, dataLimit);
}

const displayPhones = (phones, dataLimit) => {
    const phoneContainer = document.getElementById('phone-container');
    phoneContainer.textContent = '';

    // Display 10 phones only
    const showAll = document.getElementById('show-all');
    if (dataLimit && phones.length > 10) {
        phones = phones.slice(0, 10);
        showAll.classList.remove('d-none');
    }
    else {
        showAll.classList.add('d-none');
    }

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
                    <button onclick="loadPhoneDetails('${phone.slug}')" class="btn btn-success" data-bs-toggle="modal" data-bs-target="#phoneDetailsModal">Show Details</button>
                </div>
            </div>
        `;
        phoneContainer.appendChild(phoneDiv);
    })
    //Stop Loader
    toggleSpinner(false);
}

const processSearch = (dataLimit) => {
    //Start Loader
    toggleSpinner(true);
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;
    phoneLoad(searchText, dataLimit);
    searchField.value = '';
}

//Handle search button click
document.getElementById('btn-search').addEventListener('click', function () {
    processSearch(10);
})

//search inputfield enter key handler
document.getElementById('search-field').addEventListener('keydown', function (event) {
    if (event.key == 'Enter') {
        processSearch(10);
    }
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


//not the best way but we will try this because of some API limitations 
document.getElementById('btn-show-all').addEventListener('click', function () {
    processSearch();
})

const loadPhoneDetails = async id => {
    const url = `https://openapi.programming-hero.com/api/phone/${id}`;
    const res = await fetch(url);
    const data = await res.json();
    displayPhoneDetails(data.data);
}

const displayPhoneDetails = phone => {
    console.log(phone);
    const modalTitle = document.getElementById('phoneDetailsModalLabel');
    modalTitle.innerText = phone.name;
    const phoneDetails = document.getElementById('phone-details');
    phoneDetails.innerHTML = `
        <p>Release Date: ${phone.releaseDate ? phone.releaseDate : "No Release Date Found"}</p>
        <p>Storage: ${phone.mainFeatures ? phone.mainFeatures.storage : "No Storange Information"}</p>
        <p>Others: Bluetooth - ${phone.others ? phone.others.Bluetooth : "No Bluetooth Information"}</p>
        <p>Sensor: ${phone.mainFeatures.sensors ? phone.mainFeatures.sensors[0] : "No Sensor"}, ${phone.mainFeatures.sensors[1]}</p>
    `;
}

phoneLoad('apple');
*/

const person = [
    {
        name: "rahim",
        age: 22,
        friends: ["rahim,karim,jabbar"],
    },
    {
        name: "rahim2",
        age: 22,
        friends: ["rahim,karim,jabbar"],
    },
    {
        name: "rahim3",
        age: 22,
        friends: ["rahim,karim,jabbar"],
    },
];

console.log(person.slice(2, 1));