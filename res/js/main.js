const cookie = document.getElementById("cookie");
const counter = document.getElementById("counter");
const click = ["res/sounds/click.mp3", "res/sounds/click1.mp3"];
const buy_sound = new Audio("res/sounds/buysound.mp3");
const settingsClose = document.getElementById("settings-close");
const settingsBox = document.getElementById("settingsBox");
const settingsNav = document.getElementById("settings-nav");
const statisticsClose = document.getElementById("statistics-close");
const statisticsBox = document.getElementById("statisticsBox");
const statisticsNav = document.getElementById("statistic-nav");
const buy_boost = document.getElementById("buy-boost");
const buy_autoclicker = document.getElementById("buy-autoclicker");
const buy_upgrade_1 = document.getElementById("buy-upgrade-1");
const upgrade_1_cost = document.getElementById("upgrade-1-cost");
const upgrade_image = document.getElementById("upgrade-image");
const boost_cost = document.getElementById("boost-cost");

const boost_lvl_stats = document.getElementById("boost-lvl-stats");
const ac_lvl_stats = document.getElementById("ac-lvl-stats");
const ac_speed_lvl_stats = document.getElementById("ac-speed-lvl-stats");

const acStats1 = document.getElementById("acStats1");
const acStats2 = document.getElementById("acStats2");
const acStats3 = document.getElementById("acStats3");
const acStats4 = document.getElementById("acStats4");

const autoclicker_cost = document.getElementById("autoclicker-cost");
const container_1 = document.querySelector(".container-1");
const container_2 = document.querySelector(".container-2");
const copyright = document.querySelectorAll(".copyright,.copyright a");
const copyright_link = document.querySelectorAll(".copyright a");
const copyright_id = document.getElementById("copyright");

const th_def = document.getElementById("th-def");
const th_red = document.getElementById("th-red");
const th_dark = document.getElementById("th-dark");
const th_violet = document.getElementById("th-violet");
const th_purple = document.getElementById("th-purple");
const th_orange = document.getElementById("th-orange");
const th_pixel_art = document.getElementById("th-pixel-art");
const th_galaxy = document.getElementById("th-galaxy");
const th_sunset = document.getElementById("th-sunset");

const buy_th_red = document.getElementById("buy-th-red");
const buy_th_dark = document.getElementById("buy-th-dark");
const buy_th_violet = document.getElementById("buy-th-violet");
const buy_th_purple = document.getElementById("buy-th-purple");
const buy_th_orange = document.getElementById("buy-th-orange");
const buy_th_pixel_art = document.getElementById("buy-th-pixel-art");
const buy_th_galaxy = document.getElementById("buy-th-galaxy");
const buy_th_sunset = document.getElementById("buy-th-sunset");

const cost_th_def = document.getElementById("cost-th-def");
const cost_th_red = document.getElementById("cost-th-red");
const cost_th_dark = document.getElementById("cost-th-dark");
const cost_th_violet = document.getElementById("cost-th-violet");
const cost_th_purple = document.getElementById("cost-th-purple");
const cost_th_orange = document.getElementById("cost-th-orange");
const cost_th_pixel_art = document.getElementById("cost-th-pixel-art");
const cost_th_galaxy = document.getElementById("cost-th-galaxy");
const cost_th_sunset = document.getElementById("cost-th-sunset");

const display_amount = document.getElementById("display-amount");
const cookie_cursor = document.getElementById("cookie-cursor");
const ac1 = document.getElementById("ac1");
const ac2 = document.getElementById("ac2");
const ac3 = document.getElementById("ac3");
const ac4 = document.getElementById("ac4");
const per_second = document.getElementById("per-second");

let numberOfCookies = 0;

let autoclickerCost = 50;
let autoclickerAdd = 0;
let boostCost = 50;
let boostMultiplier = 1;
let firstBuyAC = true;

let autoclickerUpgrade = 1;
let autoclickerUpgradeCost = 2000;
let autoclickerInterval = setInterval(autoclickerThing, 1000 * autoclickerUpgrade);
let autoclickerBuyLimit = 9;

let boostLvl = 0;
let acLvl = 0;
let acSpeedLvl = 0;

let acHundred = false;
let acThousand = false;
let acTwThousand = false;
let acMilion = false;

let thDarkBought = false;
let thRedBought = false;
let thVioletBought = false;
let thPurpleBought = false;
let thOrangeBought = false;
let thPixelArtBought = false;
let thGalaxyBought = false;
let thSunsetBought = false;

function updateTitle() {
    if (display_amount.style.color === 'rgb(181, 255, 181)') {
        if (numberOfCookies == 1) {
            document.title = `${numberOfCookies} cookie - Clicker`;
        } else {
            document.title = `${numberOfCookies} cookies - Clicker`;
        }
    } else {
        document.title = "Clicker";
    }
}

function buySound() {
    buy_sound.currentTime = 0;
    buy_sound.play();
}

function updateBoost() {
    if (numberOfCookies >= boostCost) {
        buy_boost.style.opacity = 1;
        buy_boost.style.pointerEvents = "auto";
    }

    if (numberOfCookies < boostCost) {
        buy_boost.style.opacity = 0.7;
        buy_boost.style.pointerEvents = "none";
    }
}

function updateAutoclicker() {
    if (numberOfCookies >= autoclickerCost) {
        buy_autoclicker.style.opacity = 1;
        buy_autoclicker.style.pointerEvents = "auto";
    }

    if (numberOfCookies < autoclickerCost) {
        buy_autoclicker.style.opacity = 0.7;
        buy_autoclicker.style.pointerEvents = "none";
    }
}

function updateAutoclickerUpgrade() {
    if (autoclickerBuyLimit <= 0) {
        upgrade_1_cost.innerText = "Max";
        buy_upgrade_1.style.opacity = 1;
        buy_upgrade_1.style.pointerEvents = "none";
        upgrade_image.style.filter= "grayscale(1)";
    } else {
        if (numberOfCookies >= autoclickerUpgradeCost) {
            buy_upgrade_1.style.opacity = 1;
            buy_upgrade_1.style.pointerEvents = "auto";
            upgrade_image.style.filter = "grayscale(0)";
        }

        if (numberOfCookies < autoclickerUpgradeCost) {
            buy_upgrade_1.style.opacity = 0.7;
            buy_upgrade_1.style.pointerEvents = "none";
            upgrade_image.style.filter= "grayscale(1)";
        }
    }
}

function updateThemeShop() {
    if (numberOfCookies >= 4000) {
        buy_th_dark.style.opacity = 1;
        buy_th_dark.style.pointerEvents = "auto";
    }

    if (numberOfCookies < 4000 || thDarkBought == true) {
        buy_th_dark.style.opacity = 0.7;
        buy_th_dark.style.pointerEvents = "none";
    }

    if (numberOfCookies >= 40000) {
        buy_th_pixel_art.style.opacity = 1;
        buy_th_pixel_art.style.pointerEvents = "auto";
    }

    if (numberOfCookies < 40000 || thPixelArtBought == true) {
        buy_th_pixel_art.style.opacity = 0.7;
        buy_th_pixel_art.style.pointerEvents = "none";
    }

    if (numberOfCookies >= 20000) {
        buy_th_galaxy.style.opacity = 1;
        buy_th_galaxy.style.pointerEvents = "auto";
    }

    if (numberOfCookies < 20000 || thGalaxyBought == true) {
        buy_th_galaxy.style.opacity = 0.7;
        buy_th_galaxy.style.pointerEvents = "none";
    }

    if (numberOfCookies >= 15000) {
        buy_th_sunset.style.opacity = 1;
        buy_th_sunset.style.pointerEvents = "auto";
    }

    if (numberOfCookies < 15000 || thSunsetBought == true) {
        buy_th_sunset.style.opacity = 0.7;
        buy_th_sunset.style.pointerEvents = "none";
    }

    if (numberOfCookies >= 8000) {
        buy_th_red.style.opacity = 1;
        buy_th_red.style.pointerEvents = "auto";
        buy_th_violet.style.opacity = 1;
        buy_th_violet.style.pointerEvents = "auto";
        buy_th_purple.style.opacity = 1;
        buy_th_purple.style.pointerEvents = "auto";
        buy_th_orange.style.opacity = 1;
        buy_th_orange.style.pointerEvents = "auto";
    }

    if (numberOfCookies < 8000) {
        buy_th_red.style.opacity = 0.7;
        buy_th_red.style.pointerEvents = "none";
        buy_th_violet.style.opacity = 0.7;
        buy_th_violet.style.pointerEvents = "none";
        buy_th_purple.style.opacity = 0.7;
        buy_th_purple.style.pointerEvents = "none";
        buy_th_orange.style.opacity = 0.7;
        buy_th_orange.style.pointerEvents = "none";
    }

    if (thOrangeBought == true) {
        buy_th_orange.style.opacity = 0.7;
        buy_th_orange.style.pointerEvents = "none";
    }

    if (thVioletBought == true) {
        buy_th_violet.style.opacity = 0.7;
        buy_th_violet.style.pointerEvents = "none";
    }

    if (thRedBought == true) {
        buy_th_red.style.opacity = 0.7;
        buy_th_red.style.pointerEvents = "none";
    }

    if (thPurpleBought == true) {
        buy_th_purple.style.opacity = 0.7;
        buy_th_purple.style.pointerEvents = "none";
    }
}

function autoclickerThing() {
    numberOfCookies = numberOfCookies + autoclickerAdd;
    counter.innerText = "Cookies: " + numberOfCookies;
    updateTitle();
    updateBoost();
    updateAutoclicker();
    updateAutoclickerUpgrade();
    updateThemeShop();
}

function checkAchievements() {
    if (numberOfCookies >= 100 && !acHundred) {
        console.log("Achievement unlocked: 100 cookies");
        ac1.style.display = "inline-block";

        setTimeout(() => {
            ac1.classList.add("fade-out");
        }, 2000);

        setTimeout(() => {
            ac1.classList.remove("fade-out");
            ac1.style.display = "none";
        }, 4000);

        acHundred = true;
    }

    if (numberOfCookies >= 1000 && !acThousand) {
        console.log("Achievement unlocked: 1000 cookies");
        ac2.style.display = "inline-block";

        setTimeout(() => {
            ac2.classList.add("fade-out");
        }, 2000);

        setTimeout(() => {
            ac2.classList.remove("fade-out");
            ac2.style.display = "none";
        }, 4000);

        acThousand = true;
    }

    if (numberOfCookies >= 20000 && !acTwThousand) {
        console.log("Achievement unlocked: 20000 cookies");
        ac3.style.display = "inline-block";

        setTimeout(() => {
            ac3.classList.add("fade-out");
        }, 2000);

        setTimeout(() => {
            ac3.classList.remove("fade-out");
            ac3.style.display = "none";
        }, 4000);

        acTwThousand = true;
    }

    if (numberOfCookies >= 1000000 && !acMilion) {
        console.log("Achievement unlocked: 1000000 cookies");
        ac4.style.display = "inline-block";

        setTimeout(() => {
            ac4.classList.add("fade-out");
        }, 2000);

        setTimeout(() => {
            ac4.classList.remove("fade-out");
            ac4.style.display = "none";
        }, 4000);

        acMilion = true;
    }

    if (acHundred == true) {
        acStats1.style.display = "block";
    }

    if (acThousand == true) {
        acStats2.style.display = "block";
    }

    if (acTwThousand == true) {
        acStats3.style.display = "block";
    }

    if (acMilion == true) {
        acStats4.style.display = "block";
    }
}

cookie.onclick = (e) => {
    numberOfCookies += boostMultiplier;
    counter.innerText = "Cookies: " + numberOfCookies;

    updateTitle();

    //Zvuk pri kliknuti

    const randomClicks = Math.floor(Math.random() * click.length);
    const clickAudio = new Audio(click[randomClicks]);
    clickAudio.currentTime = 0;
    clickAudio.play();

    //Text pri kliknuti

    const clickText = document.createElement("div");
    clickText.className = "click-text";
    clickText.style.left = `${e.clientX + window.scrollX}px`;
    clickText.style.top = `${e.clientY + window.scrollY}px`;
    clickText.innerText = "+ " + boostMultiplier;
    document.body.appendChild(clickText);
    setTimeout(() => {
        clickText.remove();
    }, 1990);

    checkAchievements();

    updateBoost();
    updateAutoclicker();
    updateAutoclickerUpgrade();
    updateThemeShop();
}

updateTitle();

//Shop

buy_boost.onclick = () => {
    if (numberOfCookies >= boostCost) {
        numberOfCookies -= boostCost;
        boostCost *= 2;
        boost_cost.innerText = boostCost;
        boostMultiplier *= 2;
        counter.innerText = "Cookies: " + numberOfCookies;
        boostLvl += 1;
        boost_lvl_stats.innerText = boostLvl;
        buySound();
        updateBoost();
        updateAutoclicker();
        updateAutoclickerUpgrade();
        updateThemeShop();
    }
}

buy_autoclicker.onclick = () => {
    if (numberOfCookies >= autoclickerCost) {
        numberOfCookies -= autoclickerCost;
        autoclickerCost *= 2;
        autoclicker_cost.innerText = autoclickerCost;
        autoclickerAdd *= 2;
        counter.innerText = "Cookies: " + numberOfCookies;
        per_second.innerText = (autoclickerAdd * (2 - autoclickerUpgrade)).toFixed(1);
        acLvl += 1;
        ac_lvl_stats.innerText = acLvl;
        buySound();
        updateBoost();
        updateAutoclicker();
        updateAutoclickerUpgrade();
        updateThemeShop();
    }

    if (firstBuyAC) {
        firstBuyAC = false;
        autoclickerAdd = 1;
        per_second.innerText = (autoclickerAdd * (2 - autoclickerUpgrade)).toFixed(1);
    }
}

buy_upgrade_1.onclick = () => {
    autoclickerBuyLimit -= 1;
    if (numberOfCookies >= autoclickerUpgradeCost) {
        numberOfCookies -= autoclickerUpgradeCost;
        autoclickerUpgradeCost *= 6;
        upgrade_1_cost.innerText = autoclickerUpgradeCost;
        autoclickerUpgrade -= 0.1;
        clearInterval(autoclickerInterval);
        autoclickerInterval = setInterval(autoclickerThing, 1000 * autoclickerUpgrade);
        per_second.innerText = (autoclickerAdd * (2 - autoclickerUpgrade)).toFixed(1);
        counter.innerText = "Cookies: " + numberOfCookies;
        if (autoclickerBuyLimit <= 0) {
            upgrade_1_cost.innerText = "Max";
            buy_upgrade_1.style.opacity = 0.7;
            buy_upgrade_1.style.pointerEvents = "none";
        }
        acSpeedLvl += 1;
        ac_speed_lvl_stats.innerText = acSpeedLvl;
        buySound();
        updateBoost();
        updateAutoclicker();
        updateAutoclickerUpgrade();
        updateThemeShop();
    }
}

settingsClose.onclick = () => {
    settingsBox.style.display = "none";
}

statisticsClose.onclick = () => {
    statisticsBox.style.display = "none";
}

settingsNav.onclick = () => {
    if (settingsBox.style.display === 'none' || settingsBox.style.display === '') {
        settingsBox.style.display = 'block';
    } else {
        settingsBox.style.display = 'none';
    }
}

statisticsNav.onclick = () => {
    if (statisticsBox.style.display === 'none' || statisticsBox.style.display === '') {
        statisticsBox.style.display = 'block';
    } else {
        statisticsBox.style.display = 'none';
    }
}

// https://www.geeksforgeeks.org/draggable-element-using-javascript/

const onMouseDrag = ({ movementX, movementY, target }) => {
    const box = target;
    const boxStyle = window.getComputedStyle(box);
    let leftValue = parseInt(boxStyle.left);
    let topValue = parseInt(boxStyle.top);
    box.style.left = `${leftValue + movementX}px`;
    box.style.top = `${topValue + movementY}px`;
};

settingsBox.addEventListener("mousedown", (event) => {
    if (event.target === settingsBox) {
        settingsBox.addEventListener("mousemove", onMouseDrag);
        settingsBox.style.cursor = "grabbing";
    }
});

statisticsBox.addEventListener("mousedown", (event) => {
    if (event.target === statisticsBox) {
        statisticsBox.addEventListener("mousemove", onMouseDrag);
        statisticsBox.style.cursor = "grabbing";
    }
});

document.addEventListener("mouseup", () => {
    settingsBox.style.cursor = "pointer";
    statisticsBox.style.cursor = "auto";
    settingsBox.removeEventListener("mousemove", onMouseDrag);
    statisticsBox.removeEventListener("mousemove", onMouseDrag);
});
document.addEventListener("mouseup", () => {
    settingsBox.removeEventListener("mousemove", onMouseDrag);
    if (cookie_cursor.style.color === 'rgb(181, 255, 181)') {
        document.querySelectorAll('*').forEach(function (element) {
            element.style.cursor = 'url("res/img/cursor.png"), auto';
        });
    } else {
        settingsBox.style.cursor = "auto";
    }
});

display_amount.onclick = () => {
    if (display_amount.style.color === 'rgb(181, 255, 181)') {
        display_amount.style.color = '#ffb5b5';
    } else {
        display_amount.style.color = '#b5ffb5';
    }
};

cookie_cursor.onclick = () => {
    if (cookie_cursor.style.color === 'rgb(181, 255, 181)') {
        cookie_cursor.style.color = '#ffb5b5';
        document.querySelectorAll('*').forEach(function (element) {
            element.style.cursor = 'auto';
        });
        //Cinsky kod
        cookie.style.cursor = 'pointer';
        settingsClose.style.cursor = 'pointer';
        statisticsClose.style.cursor = 'pointer';
        buy_boost.style.cursor = 'pointer';
        buy_autoclicker.style.cursor = 'pointer';
        settingsNav.style.cursor = 'pointer';
        statisticsNav.style.cursor = 'pointer';
        cookie_cursor.style.cursor = 'pointer';
        display_amount.style.cursor = 'pointer';
        buy_upgrade_1.style.cursor = 'pointer';
        buy_th_dark.style.cursor = 'pointer';
        buy_th_red.style.cursor = 'pointer';
        buy_th_pixel_art.style.cursor = 'pointer';
        buy_th_violet.style.cursor = 'pointer';
        buy_th_purple.style.cursor = 'pointer';
        buy_th_orange.style.cursor = 'pointer';
        buy_th_sunset.style.cursor = 'pointer';
        buy_th_galaxy.style.cursor = 'pointer';
        for (const element of copyright_link) {
            element.style.cursor = "pointer";
        }
    } else {
        cookie_cursor.style.color = '#b5ffb5';
        document.querySelectorAll('*').forEach(function (element) {
            element.style.cursor = 'url("res/img/cursor.png"), auto';
        });
    }
};

//Themes

th_red.onclick = () => {
    document.body.classList.remove("moving-background");
    document.body.style.background = "radial-gradient(circle, rgba(255,121,121,1) 52%, rgba(255,79,79,1) 100%)";
    document.body.style.backgroundAttachment = "fixed";
    cookie.src = 'res/img/cookie.png';
    resetFont();
    for (const element of copyright) {
        element.style.color = "#0000006c";
    }
}

th_def.onclick = () => {
    document.body.classList.remove("moving-background");
    document.body.style.background = "radial-gradient(circle, rgba(0, 212, 255, 1) 52%, rgba(126, 119, 255, 1) 100%)";
    document.body.style.backgroundAttachment = "fixed";
    cookie.src = 'res/img/cookie.png';
    resetFont();
    for (const element of copyright) {
        element.style.color = "#0000006c";
    }
}

th_dark.onclick = () => {
    document.body.classList.remove("moving-background");
    document.body.style.background = "#1b1b1b";
    document.body.style.backgroundAttachment = "fixed";
    cookie.src = 'res/img/cookie.png';
    resetFont();
}

th_violet.onclick = () => {
    document.body.classList.remove("moving-background");
    document.body.style.background = "radial-gradient(circle, rgba(161,141,206,1) 34%, rgba(244,146,240,1) 100%)";
    document.body.style.backgroundAttachment = "fixed";
    cookie.src = 'res/img/cookie.png';
    resetFont();
    for (const element of copyright) {
        element.style.color = "#0000006c";
    }
}

th_purple.onclick = () => {
    document.body.classList.remove("moving-background");
    document.body.style.background = "radial-gradient(circle, rgba(198,63,123,1) 5%, rgba(102,49,119,1) 100%)";
    document.body.style.backgroundAttachment = "fixed";
    cookie.src = 'res/img/cookie.png';
    resetFont();
    for (const element of copyright) {
        element.style.color = "#0000006c";
    }
}

th_orange.onclick = () => {
    document.body.classList.remove("moving-background");
    document.body.style.background = "radial-gradient(circle, rgba(245,92,122,1) 15%, rgba(246,188,102,1) 100%)";
    document.body.style.backgroundAttachment = "fixed";
    cookie.src = 'res/img/cookie.png';
    resetFont();
    for (const element of copyright) {
        element.style.color = "#0000006c";
    }
}

th_sunset.onclick = () => {
    document.body.classList.add("moving-background");
    document.body.style.background = "linear-gradient(70deg, #3a1c71, #d76d77, #ffaf7b, #d76d77, #3a1c71)"
    document.body.style.backgroundAttachment = "fixed";
    cookie.src = 'res/img/cookie.png';
    resetFont();
    for (const element of copyright) {
        element.style.color = "#0000006c";
    }
}

th_pixel_art.onclick = () => {
    document.body.classList.remove("moving-background");
    document.body.style.background = "rgba(0,0,0,0)";
    document.body.style.backgroundImage = 'url("res/img/background_pixel.png")'
    document.body.style.backgroundAttachment = "";
    copyright_id.classList.add("copyright2");
    container_2.classList.add("container-2-fix");
    cookie.src = 'res/img/cookie_pixel.png';
    document.querySelectorAll('*:not(.material-symbols-rounded)').forEach(function (element) {
        element.style.fontFamily = '"Pixel", sans-serif';
    });
    for (const element of copyright) {
        element.style.color = "#0000006c";
    }
}

th_galaxy.onclick = () => {
    document.body.classList.remove("moving-background");
    document.body.style.background = "rgba(0,0,0,0)";
    document.body.style.backgroundImage = 'url("res/img/space.png")'
    document.body.style.backgroundAttachment = "";
    document.body.style.backgroundSize = "cover";
    cookie.src = 'res/img/cookie.png';
    resetFont();
}

buy_th_dark.onclick = () => {
    if (numberOfCookies >= 4000) {
        numberOfCookies -= 4000;
        cost_th_dark.innerText = "Bought";
        thDarkBought = true;
        counter.innerText = "Cookies: " + numberOfCookies;
        th_dark.style.display = "block";
        buySound();
        updateBoost();
        updateAutoclicker();
        updateAutoclickerUpgrade();
        updateThemeShop();
    }
}

buy_th_pixel_art.onclick = () => {
    if (numberOfCookies >= 40000) {
        numberOfCookies -= 40000;
        cost_th_pixel_art.innerText = "Bought";
        thPixelArtBought = true;
        counter.innerText = "Cookies: " + numberOfCookies;
        th_pixel_art.style.display = "block";
        buySound();
        updateBoost();
        updateAutoclicker();
        updateAutoclickerUpgrade();
        updateThemeShop();
    }
}

buy_th_galaxy.onclick = () => {
    if (numberOfCookies >= 40000) {
        numberOfCookies -= 40000;
        cost_th_galaxy.innerText = "Bought";
        thGalaxyBought = true;
        counter.innerText = "Cookies: " + numberOfCookies;
        th_galaxy.style.display = "block";
        buySound();
        updateBoost();
        updateAutoclicker();
        updateAutoclickerUpgrade();
        updateThemeShop();
    }
}

buy_th_purple.onclick = () => {
    if (numberOfCookies >= 8000) {
        numberOfCookies -= 8000;
        cost_th_purple.innerText = "Bought";
        thPurpleBought = true;
        counter.innerText = "Cookies: " + numberOfCookies;
        th_purple.style.display = "block";
        buySound();
        updateBoost();
        updateAutoclicker();
        updateAutoclickerUpgrade();
        updateThemeShop();
    }
}

buy_th_red.onclick = () => {
    if (numberOfCookies >= 8000) {
        numberOfCookies -= 8000;
        cost_th_red.innerText = "Bought";
        thRedBought = true;
        counter.innerText = "Cookies: " + numberOfCookies;
        th_red.style.display = "block";
        buySound();
        updateBoost();
        updateAutoclicker();
        updateAutoclickerUpgrade();
        updateThemeShop();
    }
}

buy_th_violet.onclick = () => {
    if (numberOfCookies >= 8000) {
        numberOfCookies -= 8000;
        cost_th_violet.innerText = "Bought";
        thVioletBought = true;
        counter.innerText = "Cookies: " + numberOfCookies;
        th_violet.style.display = "block";
        buySound();
        updateBoost();
        updateAutoclicker();
        updateAutoclickerUpgrade();
        updateThemeShop();
    }
}

buy_th_orange.onclick = () => {
    if (numberOfCookies >= 8000) {
        numberOfCookies -= 8000;
        cost_th_orange.innerText = "Bought";
        thOrangeBought = true;
        counter.innerText = "Cookies: " + numberOfCookies;
        th_orange.style.display = "block";
        buySound();
        updateBoost();
        updateAutoclicker();
        updateAutoclickerUpgrade();
        updateThemeShop();
    }
}

buy_th_sunset.onclick = () => {
    if (numberOfCookies >= 15000) {
        numberOfCookies -= 15000;
        cost_th_sunset.innerText = "Bought";
        thSunsetBought = true;
        counter.innerText = "Cookies: " + numberOfCookies;
        th_sunset.style.display = "block";
        buySound();
        updateBoost();
        updateAutoclicker();
        updateAutoclickerUpgrade();
        updateThemeShop();
    }
}

function resetFont() {
    document.querySelectorAll('*:not(.material-symbols-rounded)').forEach(function (element) {
        element.style.fontFamily = '"Itim", sans-serif';
    });

    for (const element of copyright) {
      element.style.fontFamily = "monospace";
      element.style.color = "#ffffff6c";
    }
    copyright_id.classList.remove("copyright2");
    container_2.classList.remove("container-2-fix");
}

// Secrety

let cheatKey = "";
document.addEventListener("keydown", (event) => {
    if (document.activeElement === document.body) {
        cheatKey += event.key;
        if (cheatKey.includes("rainbow")) {
            cookie.classList.add("rainbow");
            console.log("Secret activated: rainbow");
            cheatKey = "";
        } else if (cheatKey.includes("ieatedit")) {
            numberOfCookies += 1000;
            counter.innerText = "Cookies: " + numberOfCookies;
            updateBoost();
            updateAutoclicker();
            updateAutoclickerUpgrade();
            checkAchievements();
            updateThemeShop();
            console.log("Cheat activated: ieatedit");
            cheatKey = "";
        } else if (cheatKey.includes("nikocado")) {
            numberOfCookies += 1000000;
            counter.innerText = "Cookies: " + numberOfCookies;
            updateBoost();
            updateAutoclicker();
            updateAutoclickerUpgrade();
            checkAchievements();
            updateThemeShop();
            console.log("Cheat activated: nikocado");
            cheatKey = "";
        } else if (cheatKey.includes("themehack")) {
            thDarkBought = true;
            thOrangeBought = true;
            thPixelArtBought = true;
            thRedBought = true;
            thVioletBought = true;
            thPurpleBought = true;
            thGalaxyBought = true;
            thSunsetBought = true;
            cost_th_dark.innerText = "Bought";
            th_dark.style.display = "block";
            cost_th_red.innerText = "Bought";
            th_red.style.display = "block";
            cost_th_pixel_art.innerText = "Bought";
            th_pixel_art.style.display = "block";
            cost_th_violet.innerText = "Bought";
            th_violet.style.display = "block";
            cost_th_purple.innerText = "Bought";
            th_purple.style.display = "block";
            cost_th_orange.innerText = "Bought";
            th_orange.style.display = "block";
            cost_th_galaxy.innerText = "Bought";
            th_galaxy.style.display = "block";
            cost_th_sunset.innerText = "Bought";
            th_sunset.style.display = "block";
            updateThemeShop();
            console.log("Cheat activated: themehack");
            cheatKey = "";
        }
    } else {
        cheatKey = "";
    }
});