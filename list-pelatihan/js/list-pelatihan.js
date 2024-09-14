//first put data filter in laptop/dekstop size

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
    title: "Lokasi",
    data: [
      {
        id: 1,
        name: "Jakarta",
        value: "jakarta",
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
  getContainerLevel.id = item.title;

  getContainerLevelMobile.className = "button-filter";
  getContainerLevelMobile.id = item.title;

  getContainerLevel.innerHTML = `
     <div class="list-level--data-text list-filter-header">
                    <h4>${item.title}</h4>
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
                 <input type="checkbox"  class="option" name=${el.value} value=${el.value}>
                 <div class="list-level--data-text">
                    <h5>${el.name}</h5>
                 </div>
         </div>
    `;

    getContainerLevel.appendChild(containerDiv);
  });

  getContainerFilter.appendChild(getContainerLevel);
  getContainerFilterMobile.appendChild(getContainerLevelMobile);
});

//FLOW DATA PELATIHAN WITH API

//1.get container
const getContainerListPelatihan = document.getElementById(
  "data-pelatihan--card"
);

// 2.fetch api
// const url = `https://api.mockfly.dev/mocks/8b71d6f2-9d3a-43ed-85d5-483f9c7e2c1d/pelatihan`;
const url = `https://api.mockfly.dev/mocks/74037101-b7cd-43f3-846a-7a1e87ad952f/pelatihan`;

//3. first load, we hit api
const hitAPI = async (data) => {
  let { isData, isError, isLoading } = data;

  try {
    setTimeout(() => {
      isLoading = true;
    }, 1000);
    const getAPI = await fetch(url);
    if (getAPI.status !== 200) getErrorComponent();
    const getJSON = await getAPI.json();
    isLoading = false;
    isData = getJSON.data;
    return { isData, isLoading };
  } catch (err) {
    return getErrorComponent();
  }
};

//4. component list pelatihan for first load
const apiFirstFetch = (data) => {
  deleteErrorComponent();
  deleteLoadingComponent();

  let { isData, isError, isLoading } = data;

  if (isData?.length === 0 || isData === undefined) return getErrorComponent();

  isData?.forEach((el) => {
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
};

//5. component list pelatihan for filter and search
const apiFilterData = (data) => {
  deleteErrorComponent();
  deleteLoadingComponent();

  const existingFilterList = document.getElementsByClassName(
    "data-pelatihan--card-item"
  );
  const arrayOfElements = Array.from(existingFilterList);

  arrayOfElements.forEach((element) => {
    element.remove();
  });

  if (data.length === 0) return getErrorComponent();
  data?.forEach((el) => {
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
};

//6. put result api in hereee
let getResult = null;

//7. logic for api
const getAPIPelatihan = async (dataParams) => {
  let getOnedata = null;
  const getTitle = dataParams?.map((item) => item.title);
  if (getTitle !== undefined) getOnedata = getTitle[0];
  const getValue = dataParams?.map((item) => item.value);

  let isLoading = false;
  let isError = false;
  let isData = [];

  //8. there is 2 condition : if dataParams is undefined, we hit api.  if there is data params , we filter
  if (dataParams?.length === 0 || dataParams === undefined) {
    getResult = await hitAPI({
      isData: isData,
      isLoading: isLoading,
      isError: isError,
    });
    apiFirstFetch(getResult); //put component
  } else {
    //9. we need to delete search value when we choose filter okay
    let searchLatihan = document.getElementById("cari-pelatihan");
    searchLatihan.value = "";

    let isSimilar = null;
    switch (getOnedata) {
      case "Tingkat":
        isSimilar = getResult?.isData?.filter((item) =>
          getValue.includes(item.level)
        );
        break;
      case "Lokasi":
        isSimilar = getResult?.isData?.filter((item) =>
          getValue.includes(item.location)
        );
        break;
    }

    apiFilterData(isSimilar); //put component
  }
};

getAPIPelatihan(); //10. call logic api :D

//12. this logic for mobile filter coz mobile logic and desktop/laptop logic is kind of different.
const userClickFilter = (data) => {
  //find children from title filter
  const findData = dataFilter.find((item) => item.title === data.id);

  if (findData === undefined) return null;

  let getHeadTag = document.getElementsByTagName("main")[0];

  //13. when we choose another filter, so that's mean we have to remove child element because
  //  if we dont do that, it will duplicate :(
  const existingFilterList = document.getElementById("list-filter");
  if (existingFilterList) {
    existingFilterList.remove();
  }

  let makeContainerList = document.createElement("div");
  makeContainerList.id = "list-filter";
  makeContainerList.innerHTML = `
     <div class="list-filter-header">
            <h4>${findData.title}</h4>
             <img
                class="close"
                src="/assets/icons/cancel-light.png"
                alt="close"
                height="40"
                width="40"
                id="closeFilter"
              />
          </div>
          <div class="list-level--data-container">
           ${findData.data
             .map((item) => {
               return `<div class="list-level--data">
              <input type="checkbox"  class="option"  name=${item.name} value=${item.value} />
              <div class="list-level--data-text">
                <h5>${item.name}</h5>
              </div>
            </div>`;
             })
             .join("")}
          </div>
   `;

  getHeadTag.append(makeContainerList);

  //14. logic when user click close filter, we have to remove screen filter
  const closeFilterData = document.getElementById("closeFilter");
  closeFilterData.addEventListener("click", () => {
    const existingFilterList = document.getElementById("list-filter");
    if (existingFilterList) {
      existingFilterList.remove();
    }
  });

  //15. we call logic filter on here
  getCheckValueFilter();
};

//16. when user click options that we share such as lokasi and tingkat
let isUserClick = Array.from(document.getElementsByClassName("button-filter"));
isUserClick.forEach((dtBtn) =>
  dtBtn.addEventListener("click", (e) => {
    e.preventDefault();
    userClickFilter(dtBtn);
  })
);

//17. logic filter
const getCheckValueFilter = (data) => {
  //get checked value
  let getAllFilter = [];
  let getCheckbox = document.querySelectorAll(".option");

  getCheckbox.forEach((checkbox) => {
    checkbox.addEventListener("change", (e) => {
      if (checkbox.checked === true) {
        //18. when user check, if it is true  we have to put on array
        // and then send to logic getAPIPelatihan

        let parentElementCheckbox =
          e.target.parentElement.parentElement.parentElement.firstElementChild;
        let textParent = parentElementCheckbox.textContent.trim();
        const dataObjectFilter = {
          title: textParent,
          value: checkbox.value,
        };
        getAllFilter.push(dataObjectFilter);
      } else {
        //19. if false, we have to remove it from our array
        const filterData = getAllFilter.filter(
          (item) => item.value !== checkbox.value
        );
        getAllFilter = filterData;
      }

      getAPIPelatihan(getAllFilter);
    });
  });
};

//20. call logic filter :D
getCheckValueFilter();

//21. logic for search
let searchLatihan = document.getElementById("cari-pelatihan");
searchLatihan.addEventListener("change", (e) => {
  e.preventDefault();
  //22. search based on data when first load
  if (getResult.isData === undefined) getErrorComponent();
  let findData = getResult?.isData?.filter((item) =>
    item.title.toLowerCase().includes(e.target.value.toLowerCase())
  );
  if (findData.length === 0) {
    getErrorComponent();
  }
  apiFilterData(findData); //put data on component
});

//23. error component
const getErrorComponent = () => {
  // deleteLoadingComponent();

  let makeElement = document.createElement("div");
  makeElement.id = "error";
  makeElement.innerHTML = `
    <img src="/assets/img/error.png" alt="error" width="250" height="250"/>
    <h4>Yah, Data yang kamu cari tidak ada </h4>

  `;
  getContainerListPelatihan.appendChild(makeElement);
};

//24. loading component
const getLoadingComponent = () => {
  // deleteErrorComponent();

  let makeElementLoading = document.createElement("div");
  makeElementLoading.id = "loading";
  makeElementLoading.innerHTML = `
    <img src="/assets/img/loading.png" alt="loading" width="250" height="250"/>
    <h4>Sabar ya, kita lagi cariin </h4>

  `;
  getContainerListPelatihan.appendChild(makeElementLoading);
};

const deleteLoadingComponent = () => {
  const existingComponent = document.getElementById("loading");
  if (existingComponent) {
    existingComponent.remove();
  }
};

const deleteErrorComponent = () => {
  const existingComponentError = document.getElementById("error");
  if (existingComponentError) {
    existingComponentError.remove();
  }
};
