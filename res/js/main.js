const cookie = document.getElementById("cookie");
const counter = document.getElementById("counter");
const click = ["res/sounds/click.mp3", "res/sounds/click1.mp3"];
const buy_sound = new Audio("res/sounds/buysound.mp3");
const settingsClose = document.getElementById("settings-close");
const settingsBox = document.getElementById("settingsBox");
const settingsNav = document.getElementById("settings-nav");
const achievementNav = document.getElementById("achievement-nav");
const buy_boost = document.getElementById("buy-boost");
const buy_autoclicker = document.getElementById("buy-autoclicker");
const buy_upgrade_1 = document.getElementById("buy-upgrade-1");
const upgrade_1_cost = document.getElementById("upgrade-1-cost");
const upgrade_image = document.getElementById("upgrade-image");
const boost_cost = document.getElementById("boost-cost");
const autoclicker_cost = document.getElementById("autoclicker-cost");

const th_def = document.getElementById("th-def");
const th_red = document.getElementById("th-red");
const th_dark = document.getElementById("th-dark");
const th_violet = document.getElementById("th-violet");
const th_purple = document.getElementById("th-purple");
const th_orange = document.getElementById("th-orange");
const th_pixel_art = document.getElementById("th-pixel-art");

const buy_th_red = document.getElementById("buy-th-red");
const buy_th_dark = document.getElementById("buy-th-dark");
const buy_th_violet = document.getElementById("buy-th-violet");
const buy_th_purple = document.getElementById("buy-th-purple");
const buy_th_orange = document.getElementById("buy-th-orange");
const buy_th_pixel_art = document.getElementById("buy-th-pixel-art");

const cost_th_def = document.getElementById("cost-th-def");
const cost_th_red = document.getElementById("cost-th-red");
const cost_th_dark = document.getElementById("cost-th-dark");
const cost_th_violet = document.getElementById("cost-th-violet");
const cost_th_purple = document.getElementById("cost-th-purple");
const cost_th_orange = document.getElementById("cost-th-orange");
const cost_th_pixel_art = document.getElementById("cost-th-pixel-art");

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
    clickText.style.position = "absolute";
    clickText.style.left = `${e.clientX}px`;
    clickText.style.top = `${e.clientY}px`;
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

settingsNav.onclick = () => {
    if (settingsBox.style.display === 'none' || settingsBox.style.display === '') {
        settingsBox.style.display = 'block';
    } else {
        settingsBox.style.display = 'none';
    }
}

// https://www.geeksforgeeks.org/draggable-element-using-javascript/

function onMouseDrag({ movementX, movementY }) {
    let getsettingsBoxStyle = window.getComputedStyle(settingsBox);
    let leftValue = parseInt(getsettingsBoxStyle.left);
    let topValue = parseInt(getsettingsBoxStyle.top);
    settingsBox.style.left = `${leftValue + movementX}px`;
    settingsBox.style.top = `${topValue + movementY}px`;
}
settingsBox.addEventListener("mousedown", () => {
    settingsBox.addEventListener("mousemove", onMouseDrag);
    settingsBox.style.cursor = "grabbing";
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
        buy_boost.style.cursor = 'pointer';
        buy_autoclicker.style.cursor = 'pointer';
        settingsNav.style.cursor = 'pointer';
        achievementNav.style.cursor = 'pointer';
        cookie_cursor.style.cursor = 'pointer';
        display_amount.style.cursor = 'pointer';
        buy_upgrade_1.style.cursor = 'pointer';
        buy_th_dark.style.cursor = 'pointer';
        buy_th_red.style.cursor = 'pointer';
        buy_th_pixel_art.style.cursor = 'pointer';
        buy_th_violet.style.cursor = 'pointer';
        buy_th_purple.style.cursor = 'pointer';
        buy_th_orange.style.cursor = 'pointer';
    } else {
        cookie_cursor.style.color = '#b5ffb5';
        document.querySelectorAll('*').forEach(function (element) {
            element.style.cursor = 'url("res/img/cursor.png"), auto';
        });
    }
};

//Themes

th_red.onclick = () => {
    document.body.style.background = "radial-gradient(circle, rgba(255,121,121,1) 52%, rgba(255,79,79,1) 100%)";
    document.body.style.backgroundAttachment = "fixed";
    cookie.src = 'res/img/cookie.png';
    resetFont();
}

th_def.onclick = () => {
    document.body.style.background = "radial-gradient(circle, rgba(0, 212, 255, 1) 52%, rgba(126, 119, 255, 1) 100%)";
    document.body.style.backgroundAttachment = "fixed";
    cookie.src = 'res/img/cookie.png';
    resetFont();
}

th_dark.onclick = () => {
    document.body.style.background = "#1b1b1b";
    document.body.style.backgroundAttachment = "fixed";
    cookie.src = 'res/img/cookie.png';
    resetFont();
}

th_violet.onclick = () => {
    document.body.style.background = "radial-gradient(circle, rgba(161,141,206,1) 34%, rgba(244,146,240,1) 100%)";
    document.body.style.backgroundAttachment = "fixed";
    cookie.src = 'res/img/cookie.png';
    resetFont();
}

th_purple.onclick = () => {
    document.body.style.background = "radial-gradient(circle, rgba(198,63,123,1) 5%, rgba(102,49,119,1) 100%)";
    document.body.style.backgroundAttachment = "fixed";
    cookie.src = 'res/img/cookie.png';
    resetFont();
}

th_orange.onclick = () => {
    document.body.style.background = "radial-gradient(circle, rgba(245,92,122,1) 15%, rgba(246,188,102,1) 100%)";
    document.body.style.backgroundAttachment = "fixed";
    cookie.src = 'res/img/cookie.png';
    resetFont();
}

th_pixel_art.onclick = () => {
    document.body.style.background = "rgba(0,0,0,0)";
    document.body.style.backgroundImage = 'url("res/img/background_pixel.png")'
    document.body.style.backgroundAttachment = "";
    cookie.src = 'res/img/cookie_pixel.png';
    document.querySelectorAll('*:not(.material-symbols-rounded)').forEach(function (element) {
        element.style.fontFamily = '"Pixel", sans-serif';
    });
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

function resetFont() {
    document.querySelectorAll('*:not(.material-symbols-rounded)').forEach(function (element) {
        element.style.fontFamily = '"Itim", sans-serif';
    });
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
            updateThemeShop();
            console.log("Cheat activated: themehack");
            cheatKey = "";
        }
    } else {
        cheatKey = "";
    }
});