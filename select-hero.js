const heroBody = document.querySelector(".hero-body");
const selectButtons = document.querySelectorAll('.select-btn');

const heroes = [
    {
        name: "Terrestrial",
        image: "https://eyes.nasa.gov/apps/exo/assets/image/thumbnail/exoplanet/terrestrial-list.webp"
    },
    {
        name: "Super-Earth",
        image: "https://eyes.nasa.gov/apps/exo/assets/image/thumbnail/exoplanet/gj-15-a-b-list.webp"
    },
    {
        name: "Gas-Giant",
        image: "https://eyes.nasa.gov/apps/exo/assets/image/thumbnail/exoplanet/kepler-16-b-list.webp"
    },
    {
        name: "Neptune-Like",
        image: "https://eyes.nasa.gov/apps/exo/assets/image/thumbnail/exoplanet/au-mic-b-list.webp"
    }
];
function setHeroToLS(heroName) {
    localStorage.setItem("hero", JSON.stringify(heroes.find(hero => hero.name === heroName)))
}

function handleHeroSelect() {
    console.log(this)
    const planetType = this.dataset.id;
    switch (planetType) {
        case "Terrestrial": {
            setHeroToLS("Terrestrial")
            break;
        }
        case "Super-Earth": {
            setHeroToLS("Super-Earth")
            break;
        }
        case "Gas-Giant": {
            setHeroToLS("Gas-Giant")
            break;
        }
        case "Neptune-Like": {
            setHeroToLS("Neptune-Like")
            break;
        }
    }
    window.location.assign('home.html');
}

selectButtons.forEach(button => {
    button.addEventListener('click', handleHeroSelect);
});

const hero = JSON.parse(localStorage.getItem("hero"))

console.log("hero", hero)
if(hero) {
    const header = `
        <div class="header">
            <div class="planet-card" style="display: flex; align-items: center; column-gap: 10px;">
                <h2 id="hero-name">You are ${hero.name}</h2>
                <img id="hero-image" class="planet-image-small" src="${hero.image}"/>
            </div>
        </div>
    `;

    heroBody.insertAdjacentHTML('beforeend', header);
}

