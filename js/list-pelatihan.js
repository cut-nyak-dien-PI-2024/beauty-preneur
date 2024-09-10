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

dataFilter.map((item) => {
 const getContainerLevel = document.createElement("div");

 getContainerLevel.className = "list-level";
 getContainerLevel.id = item.title


 getContainerLevel.innerHTML = `
     <div class="list-level--data-text">
                    <h5>${item.title}</h5>
     </div>
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
})



// data pelatihan --> next day : fetch api
const dataPelatihan = [
  {
    createdAt: "2038-01-13T09:25:58.336Z",
    title: "title 1",
    desc: "desc 1",
    level: "level 1",
    duration: "5",
    total_student: "3",
    portofolio: [
      {
        id: 1,
        name: "pelatihan-1",
        url: "/assets/img/pelatihan-1.png",
      },
      {
        id: 2,
        name: "pelatihan-2",
        url: "/assets/img/pelatihan-2.png",
      },
      {
        id: 3,
        name: "pelatihan-3",
        url: "/assets/img/pelatihan-3.png",
      },
      {
        id: 4,
        name: "pelatihan-4",
        url: "/assets/img/pelatihan-4.png",
      },
    ],
    price: "228.00",
    materi: "materi 1",
    about: "about 1",
    mentor: "Elsa Carroll",
    location: "location 1",
    image_mentor: "https://loremflickr.com/640/480/cats",
    id: "1",
  },
  {
    createdAt: "2038-01-13T09:25:58.336Z",
    title: "title 1",
    desc: "desc 1",
    level: "level 1",
    duration: "5",
    total_student: "3",
    portofolio: [
      {
        id: 1,
        name: "pelatihan-1",
        url: "/assets/img/pelatihan-1.png",
      },
      {
        id: 2,
        name: "pelatihan-2",
        url: "/assets/img/pelatihan-2.png",
      },
      {
        id: 3,
        name: "pelatihan-3",
        url: "/assets/img/pelatihan-3.png",
      },
      {
        id: 4,
        name: "pelatihan-4",
        url: "/assets/img/pelatihan-4.png",
      },
    ],
    price: "228.00",
    materi: "materi 1",
    about: "about 1",
    mentor: "Elsa Carroll",
    location: "location 1",
    image_mentor: "https://loremflickr.com/640/480/cats",
    id: "2",
  },
  {
    createdAt: "2038-01-13T09:25:58.336Z",
    title: "title 1",
    desc: "desc 1",
    level: "level 1",
    duration: "5",
    total_student: "3",
    portofolio: [
      {
        id: 1,
        name: "pelatihan-1",
        url: "/assets/img/pelatihan-1.png",
      },
      {
        id: 2,
        name: "pelatihan-2",
        url: "/assets/img/pelatihan-2.png",
      },
      {
        id: 3,
        name: "pelatihan-3",
        url: "/assets/img/pelatihan-3.png",
      },
      {
        id: 4,
        name: "pelatihan-4",
        url: "/assets/img/pelatihan-4.png",
      },
    ],
    price: "228.00",
    materi: "materi 1",
    about: "about 1",
    mentor: "Elsa Carroll",
    location: "location 1",
    image_mentor: "https://loremflickr.com/640/480/cats",
    id: "1",
  },
];


  