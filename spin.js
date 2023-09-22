document.getElementById("startCarousel").addEventListener("click", spinLanguage);

function spinAll() {

    resetAll();


    spinLocation();
    setTimeout(() => {
        spinLanguage();
        setTimeout(() => {
            spinObjects();
        }, 500); 
    }, 500); 
}

function resetAll() {

    document.getElementById("location").textContent = "";
    document.getElementById("language").textContent = "";
    document.getElementById("locationImg").src = "";

    document.getElementById("dots").textContent = "";
    document.getElementById("emf").textContent = "";
    document.getElementById("writing").textContent = "";
    document.getElementById("spiritbox").textContent = "";
    document.getElementById("thermo").textContent = "";
    document.getElementById("uv").textContent = "";
    document.getElementById("videocam").textContent = "";
    document.getElementById("crucifix").textContent = "";
    document.getElementById("firelight").textContent = "";
    document.getElementById("flashlight").textContent = "";
    document.getElementById("headgear").textContent = "";
    document.getElementById("igniter").textContent = "";
    document.getElementById("incense").textContent = "";
    document.getElementById("motion").textContent = "";
    document.getElementById("paramic").textContent = "";
    document.getElementById("photocam").textContent = "";
    document.getElementById("salt").textContent = "";
    document.getElementById("sound").textContent = "";
    document.getElementById("tripod").textContent = "";

    document.getElementById("dotsimg").src = "img/loading.png";
    document.getElementById("emfimg").src = "img/loading.png";
    document.getElementById("writingimg").src = "img/loading.png";
    document.getElementById("spiritboximg").src = "img/loading.png";
    document.getElementById("thermoimg").src = "img/loading.png";
    document.getElementById("uvimg").src = "img/loading.png";
    document.getElementById("videocamimg").src = "img/loading.png";
    document.getElementById("crucifiximg").src = "img/loading.png";
    document.getElementById("firelightimg").src = "img/loading.png";
    document.getElementById("flashlightimg").src = "img/loading.png";
    document.getElementById("headgearimg").src = "img/loading.png";
    document.getElementById("igniterimg").src = "img/loading.png";
    document.getElementById("incenseimg").src = "img/loading.png";
    document.getElementById("motionimg").src = "img/loading.png";
    document.getElementById("paramicimg").src = "img/loading.png";
    document.getElementById("photocamimg").src = "img/loading.png";
    document.getElementById("saltimg").src = "img/loading.png";
    document.getElementById("soundimg").src = "img/loading.png";
    document.getElementById("tripodimg").src = "img/loading.png";
}

function generateRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}


function spinObjects() {
    resetAll();

    const elements = document.getElementsByClassName('hidden');
    for (let i = 0; i < elements.length; i++) {
        elements[i].classList.remove('hidden');
    }

    const objects = [
        { name: "dots", tier: ["No Dots", "Tier 1", "Tier 2", "Tier 3"], img: ["img/no.png", "img/dots1.png", "img/dots2.png", "img/dots3.png"] },
        { name: "emf", tier: ["No Emf", "Tier 1", "Tier 2", "Tier 3"], img: ["img/no.png", "img/emf1.png", "img/emf2.png", "img/emf3.png"] },
        { name: "writing", tier: ["No writing", "Tier 1", "Tier 2", "Tier 3"], img: ["img/no.png", "img/writing1.png", "img/writing2.png", "img/writing3.png"] },
        { name: "spiritbox", tier: ["No spiritbox", "Tier 1", "Tier 2", "Tier 3"], img: ["img/no.png", "img/spiritbox1.png", "img/spiritbox2.png", "img/spiritbox3.png"] },
        { name: "thermo", tier: ["No thermo", "Tier 1", "Tier 2", "Tier 3"], img: ["img/no.png", "img/thermo1.png", "img/thermo2.png", "img/thermo3.png"] },
        { name: "uv", tier: ["No Uv", "Tier 1", "Tier 2", "Tier 3"], img: ["img/no.png", "img/uv1.png", "img/uv2.png", "img/uv3.png"] },
        { name: "videocam", tier: ["No Videocam", "Tier 1", "Tier 2", "Tier 3"], img: ["img/no.png", "img/videocam1.png", "img/videocam2.png", "img/videocam3.png"] },
        { name: "crucifix", tier: ["No Crucifix", "Tier 1", "Tier 2", "Tier 3"], img: ["img/no.png", "img/crucifix1.png", "img/crucifix2.png", "img/crucifix3.png"] },
        { name: "firelight", tier: ["No Firelight", "Tier 1", "Tier 2", "Tier 3"], img: ["img/no.png", "img/firelight1.png", "img/firelight2.png", "img/firelight3.png"] },
        { name: "flashlight", tier: ["No Flashlight", "Tier 1", "Tier 2", "Tier 3"], img: ["img/no.png", "img/flashlight1.png", "img/flashlight2.png", "img/flashlight3.png"] },
        { name: "headgear", tier: ["No Headgear", "Tier 1", "Tier 2", "Tier 3"], img: ["img/no.png", "img/headgear1.png", "img/headgear2.png", "img/headgear3.png"] },
        { name: "igniter", tier: ["No Igniter", "Tier 1", "Tier 2", "Tier 3"], img: ["img/no.png", "img/igniter1.png", "img/igniter2.png", "img/igniter3.png"] },
        { name: "incense", tier: ["No Incense", "Tier 1", "Tier 2", "Tier 3"], img: ["img/no.png", "img/incense1.png", "img/incense2.png", "img/incense3.png"] },
        { name: "motion", tier: ["No Motion", "Tier 1", "Tier 2", "Tier 3"], img: ["img/no.png", "img/motion1.png", "img/motion2.png", "img/motion3.png"] },
        { name: "paramic", tier: ["No Paramic", "Tier 1", "Tier 2", "Tier 3"], img: ["img/no.png", "img/paramic1.png", "img/paramic2.png", "img/paramic3.png"] },
        { name: "photocam", tier: ["No Photocam", "Tier 1", "Tier 2", "Tier 3"], img: ["img/no.png", "img/photocam1.png", "img/photocam2.png", "img/photocam3.png"] },
        { name: "salt", tier: ["No Salt", "Tier 1", "Tier 2", "Tier 3"], img: ["img/no.png", "img/salt1.png", "img/salt2.png", "img/salt3.png"] },
        { name: "sound", tier: ["No Soundsensor", "Tier 1", "Tier 2", "Tier 3"], img: ["img/no.png", "img/sound1.png", "img/sound2.png", "img/sound3.png"] },
        { name: "tripod", tier: ["No Tripod", "Tier 1", "Tier 2", "Tier 3"], img: ["img/no.png", "img/tripod1.png", "img/tripod2.png", "img/tripod3.png"] },
    
    ];

    let index = 0; 

    function showNextObject() {
        if (index < objects.length) {
            const object = objects[index];
            const value = generateRandomNumber(0, 6);
            const tierIndex = Math.min(3, Math.floor(value / 2));
            const tierText = object.tier[tierIndex];
            const imgSrc = object.img[tierIndex];

            document.getElementById(object.name).textContent = `${object.name.charAt(0).toUpperCase() + object.name.slice(1)}: ${tierText}`;
            document.getElementById(object.name + "img").src = imgSrc;

            index++; 
            setTimeout(showNextObject, 300);
        }
    }

    showNextObject(); 
}

function spinLanguage() {
    const languages = [
        "English",
        "Brazilian Portuguese",
        "Spanish",
        "Portuguese",
        "German",
        "French",
        "Italian",
        "Czech",
        "Polish",
        "Russian",
        "Japanese",
        "Korean",
        "Turkish",
        "Simplified Chinese",
        "Traditional Chinese",
        "Dutch",
        "Greek",
        "Norwegian",
        "Romanian",
        "Swedish",
        "Ukrainian",
        "Bulgarian",
        "Danish",
        "Finnish",
        "Hungarian",
        "Arabic",
        "Catalan"
    ];

    let currentIndex = 0;
    const interval = 100; // Adjust the interval duration (in milliseconds)
    const languageElement = document.getElementById("language");

    const carouselInterval = setInterval(() => {
        languageElement.textContent = languages[currentIndex];
        currentIndex++;

        if (currentIndex >= languages.length) {
            clearInterval(carouselInterval);
            const randomIndex = Math.floor(Math.random() * languages.length);
            const selectedLang = languages[randomIndex];
            languageElement.textContent = selectedLang;
        }
    }, interval);
}

function spinLocation() {
    const locations = [
        "Tanglewood Drive",
        "Edgefield Road",
        "Ridgeview Court",
        "Grafton Farmhouse",
        "Willow Street",
        "Maple Lodge Campsite",
        "Camp Woodwind",
        "Prison",
        "Sunny Meadows - Restricted",
        "Sunny Meadows - Full",
        "Bleasdale Farmhouse",
        "Brownstone High School"
    ];

    let currentIndex = 0;
    const interval = 100; // Adjust the interval duration (in milliseconds)
    const locationElement = document.getElementById("location");
    const locationImg = document.getElementById("locationImg");

    const carouselInterval = setInterval(() => {
        locationElement.textContent = locations[currentIndex];
        locationImg.src = `img/${locations[currentIndex]}.png`
        currentIndex++;

        if (currentIndex >= locations.length) {
            clearInterval(carouselInterval);
            const randomIndex = Math.floor(Math.random() * locations.length);
            const selectedLocation = locations[randomIndex];
            locationElement.textContent = selectedLocation;
            locationImg.src = `img/${locations[randomIndex]}.png`
        }
    }, interval);
}

document.getElementById("startCarouselLocation").addEventListener("click", spinLocation);