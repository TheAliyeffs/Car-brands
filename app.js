const cars = [
    {
        brand: "Mercedes",
        logo: "./images/Mercedes-Logo.png",
        models: "C-Class",
        Engine: "4.0L 6-Cylinder",
    },
    {
        brand: "Mercedes",
        logo: "./images/Mercedes-Logo.png",
        models: "E-Class",   
        Engine: "2.3L Compressor",
    },
    {
        brand: "Mercedes",
        logo: "./images/Mercedes-Logo.png",
        models: "S-Class",
        Engine: "6.0L V10",
    },
    {
        brand: "Mercedes",
        logo: "./images/Mercedes-Logo.png",
        models: "w124", 
        Engine: "3.0L V6",
    },
    {
        brand: "BMW",
        logo: "./images/bmw.png",
        models: "F10",
        Engine: "2.0L Turbo",   
    },
    {
        brand: "BMW",
        logo: "./images/bmw.png",
        models: "F30",  
        Engine: "2.3L Turbo",
    },
    {
        brand: "BMW",
        logo: "./images/bmw.png",
        models: "X5",
        Engine: "3.5L V6",

    },
    {
        brand: "BMW",
        logo: "./images/bmw.png",
        models: "F80 M3",
        Engine: "3.0L V6",


    },
    {
        brand: "Kia",
        logo: "./images/kia-logo.png",
        models: "Sorento",
        Engine: "2.8L V6",
    },
    {
        brand: "Kia",
        logo: "./images/kia-logo.png",
        models: "Sorento",
        Engine: "2.5L CDI",
    },
    {
        brand: "Kia",
        logo: "./images/kia-logo.png",
        models: "Optima",
        Engine: "2.0L Turbo",
    },
    {
        brand: "Kia",
        logo: "./images/kia-logo.png",
        models: "Sportage",
        Engine: "2.0L Turbo",
    },
    {
        brand: "Toyota",
        logo: "./images/Toyota-Logo.png",
        models: "Prado",
        Engine: "4.0L 4*4",
    },
    {
        brand: "Toyota",
        logo: "./images/Toyota-Logo.png",
        models: "Prado",
        Engine: "2.5L 4*4",
    },
    {
        brand: "Toyota",
        logo: "./images/Toyota-Logo.png",
        models: "Camry",
        Engine: "2.0L Turbo",
    },
    {
        brand: "Toyota",
        logo: "./images/Toyota-Logo.png",
        models: "RAV4",
        Engine: "2.5L V6",
    }
    
];




const uniqueBrands = Array.from(new Set(cars.map(car => car.brand)));


const buttonContainer = document.querySelector(".button-container");
uniqueBrands.forEach(brand => {
    const button = document.createElement("button");
    button.innerText = brand;
    button.addEventListener("click", () => filterCars(brand));
    buttonContainer.appendChild(button);
});


const allButton = document.createElement("button");
allButton.innerText = "All";
allButton.addEventListener("click", () => filterCars("All"));
buttonContainer.prepend(allButton);


const gridContainer = document.querySelector(".grid-container");
function displayCars(filteredCars) {
    gridContainer.innerHTML = ""; 
    filteredCars.forEach(car => {
        const carBox = document.createElement("div");
        carBox.className = "car-box";
        carBox.innerHTML = `
            <img src="${car.logo}" alt="${car.brand} Logo">
            <h3>${car.brand}</h3>
            <p>Models: ${car.models}</p>
            <p>Engine: ${car.Engine}</p>
        `;
        gridContainer.appendChild(carBox);
    });
}


function filterCars(brand) {
    const buttons = document.querySelectorAll("button");
    buttons.forEach(button => button.classList.remove("active"));
    const clickedButton = Array.from(buttons).find(button => button.innerText === brand || (brand === "All" && button.innerText === "All"));
    if (clickedButton) clickedButton.classList.add("active");

    if (brand === "All") {
        displayCars(cars); 
    } else {
        const filteredCars = cars.filter(car => car.brand === brand);
        displayCars(filteredCars);
    }
}

const darkModeToggle = document.getElementById("dark-mode-toggle");
        darkModeToggle.addEventListener("click", () => {
            document.body.classList.toggle("dark-mode");
        });



filterCars("All");

