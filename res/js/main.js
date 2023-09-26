const cookie = document.getElementById("cookie");
const counter = document.getElementById("counter");
const click = ["res/sounds/click.mp3", "res/sounds/click1.mp3"];
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

function autoclickerThing() {
    numberOfCookies = numberOfCookies + autoclickerAdd;
    counter.innerHTML = "Cookies: " + numberOfCookies;
    updateTitle();
    updateBoost();
    updateAutoclicker();
    updateAutoclickerUpgrade();
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
    counter.innerHTML = "Cookies: " + numberOfCookies;

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
}

updateTitle();

//Shop

buy_boost.onclick = () => {
    if (numberOfCookies >= boostCost) {
        numberOfCookies -= boostCost;
        boostCost *= 2;
        boost_cost.innerHTML = boostCost;
        boostMultiplier *= 2;
        counter.innerHTML = "Cookies: " + numberOfCookies;
        updateBoost();
        updateAutoclicker();
        updateAutoclickerUpgrade();
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
        updateBoost();
        updateAutoclicker();
        updateAutoclickerUpgrade();
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
        updateBoost();
        updateAutoclicker();
        updateAutoclickerUpgrade();
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
            counter.innerHTML = "Cookies: " + numberOfCookies;
            updateBoost();
            updateAutoclicker();
            updateAutoclickerUpgrade();
            checkAchievements();
            console.log("Cheat activated: ieatedit");
            cheatKey = "";
        } else if (cheatKey.includes("nikocado")) {
            numberOfCookies += 1000000;
            counter.innerHTML = "Cookies: " + numberOfCookies;
            updateBoost();
            updateAutoclicker();
            updateAutoclickerUpgrade();
            checkAchievements();
            console.log("Cheat activated: nikocado");
            cheatKey = "";
        }
    } else {
        cheatKey = "";
    }
});