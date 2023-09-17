// button 
const sortBtn = document.getElementById('btn-sort-by-date');

const loadApiData = () => {
    const url = `https://openapi.programming-hero.com/api/ai/tools`;
    fetch(url)
        .then(res => res.json())
        .then(data => displayLoadData(data.data))
        .catch((error) => {
            console.log(error);
        })
}
const displayLoadData = (data) => {

    // toggleSpinner(true);

    // console.log(data.tools[0]);
    const getData = data.tools;
    console.log(getData);



    // date sort wise 
    const dateSort = [];

    const middleObjects = document.getElementById('middle-objects');
    for (let i = 0; i < getData.length; i++) {

        if (i == 5 || i == 10) {
            continue;
        } else {
            // count = count + 1;

            dateSort.push(getData[i].published_in);

            // slice 6 elements 

            const newDivCreate = document.createElement('div');
            const features = getData[i].features;
            newDivCreate.innerHTML = `
                <div class="p-4 border rounded"> 
                <img src="${getData[i].image}" class="rounded"> 
                <h1 class="font-bold mt-2 mb-1 text-lg">Features</h1>
                <ol id="get-features">
                    <li>1. ${features[0] || 'No Data Found'}</li>
                    <li>2. ${features[1] || 'No Data Found'}</li>
                    <li>3. ${features[2] || 'No Data Found'}</li> 
                </ol>
                <hr class="my-3">
                <div>
                

                <div class="flex justify-between items-center">

                <div>
                <h2 class="font-bold text-lg pb-2">${getData[i].name}</h2>
                <p class="text-date"><i class="fa-solid fa-calendar-days"></i> ${getData[i].published_in}</p>
                </div>

                <div onclick="loadDynamicApi('${getData[i].id}')" class="showModal bg-btnBgColor rounded-full hover:bg-opacity-30 duration-300 bg-opacity-10">
                <i class="fa-solid fa-arrow-right p-3 text-btnBgColor"></i>
                </div>

                </div>



                </div>
                </div>
                `;
            middleObjects.appendChild(newDivCreate);


        }

    }
    // // sort date
    // document.getElementById('btn-sort-by-date').addEventListener('click', function() {
    //     dateSort.sort(function(a, b) {
    //         return parseInt(a) - parseInt(b);
    //         // console.log(parseInt(a) - parseInt(b));
    //     })

    // })

    // stop spinner 
    toggleSpinner(false);
}

//loading
const toggleSpinner = isLoading => {
    const loadingSection = document.getElementById('spinner');
    if (isLoading) {
        loadingSection.classList.remove('hidden');
    } else {
        loadingSection.classList.add('hidden');
    }
}

// dynamic api 
const loadDynamicApi = (id) => {
    const url = `https://openapi.programming-hero.com/api/ai/tool/${id}`;
    fetch(url)
        .then(res => res.json())
        .then(data => displayLoadDynamicApi(data.data))
        .catch((error) => {
            console.log(error);
        })
}
const displayLoadDynamicApi = (data) => {
    console.log(data);
    const modalDetails = document.getElementById('view-details');
    modalDetails.innerHTML = `
    
    <div class="relative bg-white p-2 md:p-8 lg:p-14 rounded-lg grid grid-cols-1 lg:grid-cols-2 w-9/12 shadow-lg gap-5">
    <!-- left side -->
    <div class="bg-btnBgColor bg-opacity-10 p-6 border border-btnBgColor rounded">
    <h1 class="font-bold text-xl">${data.description}</h1>

    <!-- left side inner boxes -->
    <div class="grid grid-cols-1 lg:grid-cols-3 my-5 gap-3">
     <div class="text-green-500 bg-white p-5 rounded-lg font-bold text-center text-sm">$10/ month Basic</div>   
     <div class="text-orange-500 bg-white p-5 rounded-lg font-bold text-center text-sm">$50/ month Pro</div>   
     <div class="text-red-600 bg-white p-5 rounded-lg font-bold text-center text-sm">Contact us Enterprise</div>   
    </div>

    <!-- Feautres and integrations -->
    <div class="lg:flex lg:justify-evenly mb-4">
    <div>
    <h1 class="font-bold text-xl">Features</h1>
    <ul class="list-disc list-inside space-y-1 mt-2">
        <li>${data.integrations[0] || 'No Massage Found'}</li>
        <li>${data.integrations[1] || 'No Massage Found'}</li>
        <li>${data.integrations[2] || 'No Massage Found'}</li>
    </ul>
    </div>
    <div>
    <h1 class="font-bold text-xl">Integrations</h1>
    <ul class="list-disc list-inside space-y-1 mt-2">
        <li>${data.integrations[0] || 'No Massage Found'}</li>
        <li>${data.integrations[1] || 'No Massage Found'}</li>
        <li>${data.integrations[2] || 'No Massage Found'}</li>
    </ul>
    </div>   
    </div>
    </div>

    <!-- Right side -->
    <div class="p-5 rounded-lg border">
    <img src="${data.image_link[0]}" alt="Tech Tumbnail Image" class="rounded">
    <h1 class="my-8 text-center font-bold text-xl">Hi, How are you doing today?</h1>
    <p class="leading-relaxed || 'No Massage Found' text-sm text-center mx-6">I'm doing well, thank you for asking. How can I assist you today?</p>
    </div>
    
    <div class="close-modal absolute right-0 p-2"><i class="fa-solid fa-xmark px-3 py-2.5 hover:bg-btnBgColor hover:bg-opacity-50 bg-btnBgColor bg-opacity-20 rounded-full text-btnBgColor"></i></div>
    </div>
    `;

    // modal close and open 
    const modal = document.querySelector('.modal');
    const showModal = document.querySelectorAll('.showModal');
    for (let i = 0; i < showModal.length; i++) {
        showModal[i].addEventListener('click', function() {
            modal.classList.remove('hidden');
        })
    }
    const closeModalBtn = document.querySelectorAll('.close-modal');
    for (let i = 0; i < closeModalBtn.length; i++) {
        closeModalBtn[i].addEventListener('click', function() {
            modal.classList.add('hidden');
        })
    }
}

// loadDynamicApi();
loadApiData();
