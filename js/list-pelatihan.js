//data filter

const dataFilter = [
  {
    id: 1,
    title: "Tingkat",
    data: [
      {
        id: 1,
        name: "Pemula",
        value: "pemula",
      },
      {
        id: 2,
        name: "Menengah",
        value: "menengah",
      },
      {
        id: 3,
        name: "Mahir",
        value: "mahir",
      },
      {
        id: 4,
        name: "Ahli",
        value: "ahli",
      },
    ],
  },
  {
    id: 2,
    title: "Harga",
    data: [
      {
        id: 1,
        name: "Berbayar",
        value: "berbayar",
      },
      {
        id: 2,
        name: "Gratis",
        value: "gratis",
      },
    ],
  },
  {
    id: 3,
    title: "Lokasi",
    data: [
      {
        id: 1,
        name: "Jabodatebek",
        value: "jabodetabek",
      },
      {
        id: 2,
        name: "Bandung",
        value: "bandung",
      },
      {
        id: 3,
        name: "Jawa Timur",
        value: "jawatimur",
      },
      {
        id: 4,
        name: "Bali",
        value: "bali",
      },
      {
        id: 5,
        name: "Lainnya",
        value: "lainnya",
      },
    ],
  },
];


const getContainerFilter = document.getElementById("data-pelatihan--filter");
const getContainerFilterMobile = document.getElementById(
  "data-pelatihan--filter-mobile"
);

dataFilter.map((item) => {
 const getContainerLevel = document.createElement("div");
 const getContainerLevelMobile = document.createElement("div");

 getContainerLevel.className = "list-level";
 getContainerLevel.id = item.title

getContainerLevelMobile.className = "button-filter";
getContainerLevelMobile.id = item.title;

 getContainerLevel.innerHTML = `
     <div class="list-level--data-text">
                    <h5>${item.title}</h5>
     </div>
 `;

 getContainerLevelMobile.innerHTML = `  
  <h5>${item.title}</h5>
     <img
       class="btn--filter-mobile"
       src="/assets/icons/chevron-down.png"
       alt="level"
    />
 `;

  item.data.forEach((el) => {
    const containerDiv = document.createElement("div");

    containerDiv.id = el.value;

    containerDiv.innerHTML = `
         <div class="list-level--data">
                 <input type="checkbox" name=${el.value} value=${el.value}>
                 <div class="list-level--data-text">
                    <h5>${el.name}</h5>
                 </div>
         </div>
    `;

    getContainerLevel.appendChild(containerDiv);
  });

  getContainerFilter.appendChild(getContainerLevel)
   getContainerFilterMobile.appendChild(getContainerLevelMobile);
})



// data pelatihan --> fetch api

//1.get container
const getContainerListPelatihan = document.getElementById(
  "data-pelatihan--card"
);


// 2.fetch api
const url = `https://api.mockfly.dev/mocks/8b71d6f2-9d3a-43ed-85d5-483f9c7e2c1d/pelatihan`;


const getAPIPelatihan = async () => {
  let isLoading = false;
  let isError = false;
  let isData = [];

  console.log(isLoading, "ini loading");

   try{ 
     setTimeout(() => {
      isLoading = true;

      console.log(isLoading, "ini loading");

     }, 1000)

    const getAPI = await fetch(url);
    const getJSON = await getAPI.json();
    isLoading = false;
    isData = getJSON.data;
    isData.forEach((el) => {
         let buildContainer = document.createElement("div");

         buildContainer.id = el.id;
         buildContainer.className = "data-pelatihan--card-item";
         buildContainer.innerHTML = `
           <div class="data-pelatihan--card-item--img">
            <img class="data-pelatihan--card-item--img" src=${el.headline_img} alt="img"  />

           </div>
           <div class="data-pelatihan--card-detail">
               <div class="data-pelatihan--card-item--text">
                  <h4>${el.title}</h4>
                  <h5 class="location">${el.location}</h5>
                  <h5 class="price">Rp ${el.price}</h5>
               </div>
                <div class="data-pelatihan--card-item--time">
                  <div class="data-pelatihan--card-item--calender">
                    <img class="calender" src="/assets/icons/calendar.png" alt="calender"  />
                     <h5>${el.duration}</h5>
                  </div>
                   <div class="data-pelatihan--card-item--clock">
                    <img class="clock" src="/assets/icons/clock.png" alt="clock"  />
                     <h5>${el.duration}</h5>
                  </div>
               </div>
               <div class="data-pelatihan--card-item--mentor">
                <img class="profile-mentor" src=${el.image_mentor} alt="mentor" width="80" height="80"/>
                 <h5 class="mentor">${el.mentor}</h5>
               </div>
           </div>
  `;

         getContainerListPelatihan.appendChild(buildContainer);
       });



   }catch(err){
    console.log(err, 'ini error')
   }

}
  

getAPIPelatihan();


const userClickFilter = (data) => {
  console.log(data, "INI DT BUTTON");
  //find children from title filter
  const findData = dataFilter.find((item) => item.title === data.id);

  console.log(findData, 'ini findata')
  if(findData === undefined) return null;
  data.style.backgroundColor = "#EB395F";
  data.style.color = "white";

  //if not
  let isNotData = Array.from(
    document.getElementsByClassName("button-filter")
  );
  isNotData.forEach((el) => {
    console.log(el, 'ini el', data.id)
    if (el.id.toLowerCase() === data.id.toLowerCase()) {
      data.style.backgroundColor = "lightgrey";
      data.style.color = "black";
    }else{
        data.style.backgroundColor = "green";
        data.style.color = "black";
    }
  })


  
};


let isUserClick = Array.from(document.getElementsByClassName("button-filter"));
isUserClick.forEach((dtBtn) =>  dtBtn.addEventListener("click", (e) => {
  e.preventDefault();
  userClickFilter(dtBtn);
   if (el.id.toLowerCase() === data.id.toLowerCase()) {
     data.style.backgroundColor = "lightgrey";
     data.style.color = "black";
   } else {
     data.style.backgroundColor = "green";
     data.style.color = "black";
   }


}));

