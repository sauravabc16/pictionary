let shuffledSuggestions = shuffleArray([...suggestions]);
let currentIndex = 0;

document.getElementById('suggestButton').addEventListener('click', function() {
    if (currentIndex >= shuffledSuggestions.length) {
        shuffledSuggestions = shuffleArray([...suggestions]);
        currentIndex = 0;
    }

    const suggestion = shuffledSuggestions[currentIndex++];
    document.getElementById('suggestion').textContent = suggestion;
    fetchImage(suggestion);
});

// Fisher-Yates (aka Knuth) Shuffle
function shuffleArray(array) {
    let currentIndex = array.length, temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}

async function fetchImage(query) {
    const apiKey = '8WBSyxeJJIkprZJ_8027n3G3r3PKQniC6x5fCcg_qUs';
    const url = `https://api.unsplash.com/search/photos?page=1&query=${encodeURIComponent(query)}&client_id=${apiKey}`;

    try {
        const response = await fetch(url);
        const data = await response.json();
        const image = data.results[0];

        if (image) {
            const imageUrl = image.urls.regular;
            const downloadUrl = image.links.download_location;
            const photographerName = image.user.name;
            const photographerUrl = image.user.links.html;

            document.getElementById('imageContainer').style.backgroundImage = `url(${imageUrl})`;
            document.getElementById('attribution').innerHTML = `Photo by <a href="${photographerUrl}?utm_source=pictionary&utm_medium=referral">${photographerName}</a> on <a href="https://unsplash.com/?utm_source=pictionary&utm_medium=referral">Unsplash</a>`;

            // Trigger download event
            await fetch(`${downloadUrl}?client_id=${apiKey}`);
        } else {
            document.getElementById('imageContainer').style.backgroundImage = 'none';
            document.getElementById('attribution').innerHTML = '';
        }
    } catch (error) {
        console.error('Error fetching image:', error);
        document.getElementById('imageContainer').style.backgroundImage = 'none';
        document.getElementById('attribution').innerHTML = '';
    }
}

var suggestions = [
    "aircraft carrier",
    "airplane",
    "alarm clock",
    "ambulance",
    "angel",
    "animal migration",
    "ant",
    "anvil",
    "apple",
    "arm",
    "asparagus",
    "axe",
    "backpack",
    "banana",
    "bandage",
    "barn",
    "baseball",
    "baseball bat",
    "basket",
    "basketball",
    "bat",
    "bathtub",
    "beach",
    "bear",
    "beard",
    "bed",
    "bee",
    "belt",
    "bench",
    "bicycle",
    "binoculars",
    "bird",
    "birthday cake",
    "blackberry",
    "blueberry",
    "book",
    "boomerang",
    "bottlecap",
    "bowtie",
    "bracelet",
    "brain",
    "bread",
    "bridge",
    "broccoli",
    "broom",
    "bucket",
    "bulldozer",
    "bus",
    "bush",
    "butterfly",
    "cactus",
    "cake",
    "calculator",
    "calendar",
    "camel",
    "camera",
    "camouflage",
    "campfire",
    "candle",
    "cannon",
    "canoe",
    "car",
    "carrot",
    "castle",
    "cat",
    "ceiling fan",
    "cello",
    "cell phone",
    "chair",
    "chandelier",
    "church",
    "circle",
    "clarinet",
    "clock",
    "cloud",
    "coffee cup",
    "compass",
    "computer",
    "cookie",
    "cooler",
    "couch",
    "cow",
    "crab",
    "crayon",
    "crocodile",
    "crown",
    "cruise ship",
    "cup",
    "Bicycle",
    "Beach",
    "Guitar",
    "Ice Cream",
    "Castle",
    "Moon",
    "Pizza",
    "Robot",
    "Train",
    "Unicorn",
    "Dragon",
    "Clown",
    "Telescope",
    "Pirate",
    "Snowman",
    "Kangaroo",
    "Octopus",
    "Submarine",
    "Jellyfish",
    "Helicopter",
    "Tornado",
    "Eiffel Tower",
    "Volcano",
    "Fireworks",
    "Rainbow",
    "Scissors",
    "Telephone",
    "Astronaut",
    "Lemonade",
    "Hammock",
    "Popcorn",
    "Lightning",
    "Alarm Clock",
    "Cactus",
    "Bowling",
    "Dominoes",
    "Compass",
    "Saxophone",
    "diamond",
    "dishwasher",
    "diving board",
    "dog",
    "dolphin",
    "donut",
    "door",
    "dragon",
    "dresser",
    "drill",
    "drums",
    "duck",
    "dumbbell",
    "ear",
    "elbow",
    "elephant",
    "envelope",
    "eraser",
    "eye",
    "eyeglasses",
    "face",
    "fan",
    "feather",
    "fence",
    "finger",
    "fire hydrant",
    "fireplace",
    "firetruck",
    "fish",
    "flamingo",
    "flashlight",
    "flip flops",
    "floor lamp",
    "flower",
    "flying saucer",
    "foot",
    "fork",
    "frog",
    "frying pan",
    "garden",
    "garden hose",
    "giraffe",
    "goatee",
    "golf club",
    "grapes",
    "grass",
    "guitar",
    "hamburger",
    "hammer",
    "hand",
    "harp",
    "hat",
    "headphones",
    "hedgehog",
    "helicopter",
    "helmet",
    "hexagon",
    "hockey puck",
    "hockey stick",
    "horse",
    "hospital",
    "hot air balloon",
    "hot dog",
    "hot tub",
    "hourglass",
    "house",
    "house plant",
    "hurricane",
    "ice cream",
    "jacket",
    "jail",
    "kangaroo",
    "key",
    "keyboard",
    "knee",
    "knife",
    "ladder",
    "lantern",
    "laptop",
    "leaf",
    "leg",
    "light bulb",
    "lighter",
    "lighthouse",
    "lightning",
    "line",
    "lion",
    "lipstick",
    "lobster",
    "lollipop",
    "mailbox",
    "map",
    "marker",
    "matches",
    "megaphone",
    "mermaid",
    "microphone",
    "microwave",
    "monkey",
    "moon",
    "mosquito",
    "motorbike",
    "mountain",
    "mouse",
    "moustache",
    "mouth",
    "mug",
    "mushroom",
    "nail",
    "necklace",
    "nose",
    "ocean",
    "Namaste",
    "Biryani",
    "Dosa",
    "Sari",
    "Lassi",
    "Chai",
    "Roti",
    "Samosa",
    "Diwali",
    "Guru",
    "Yoga",
    "Curry",
    "Holi",
    "Rangoli",
    "Jugaad",
    "Bollywood",
    "Dhoti",
    "Karma",
    "Ghee",
    "Ashram",
    "octagon",
    "octopus",
    "onion",
    "oven",
    "owl",
    "paintbrush",
    "paint can",
    "palm tree",
    "panda",
    "pants",
    "paper clip",
    "parachute",
    "parrot",
    "passport",
    "peanut",
    "pear",
    "peas",
    "pencil",
    "penguin",
    "piano",
    "pickup truck",
    "picture frame",
    "pig",
    "pillow",
    "pineapple",
    "pizza",
    "pliers",
    "police car",
    "pond",
    "pool",
    "popsicle",
    "postcard",
    "potato",
    "power outlet",
    "purse",
    "rabbit",
    "raccoon",
    "radio",
    "rain",
    "rainbow",
    "rake",
    "remote control",
    "rhinoceros",
    "rifle",
    "river",
    "roller coaster",
    "rollerskates",
    "sailboat",
    "sandwich",
    "saw",
    "saxophone",
    "school bus",
    "scissors",
    "scorpion",
    "screwdriver",
    "Pressure Cooker",
    "Stainless Steel Utensils",
    "Tava (Griddle)",
    "Masala Dabba (Spice Box)",
    "Mixer Grinder",
    "Rice Cooker",
    "Stainless Steel or Copper Water Bottle",
    "Idli Steamer",
    "Chapati Roller (Belan)",
    "Kadai (Wok)",
    "Jute or Cloth Bags",
    "Indian Spices (Turmeric, Cumin, Coriander, etc.)",
    "Stainless Steel Lunch Boxes (Tiffin)",
    "Clay or Brass Diyas (Oil Lamps)",
    "Sarees and Traditional Clothing",
    "Jhoola (Indoor Swing)",
    "Carpets and Rugs",
    "Brass or Silver Pooja Items (Prayer Accessories)",
    "Broom (Jhadu) and Dustpan",
    "Stainless Steel or Copper Utensil Scrubbers",
    "sea turtle",
    "see saw",
    "shark",
    "sheep",
    "shoe",
    "shorts",
    "shovel",
    "sink",
    "skateboard",
    "skull",
    "skyscraper",
    "sleeping bag",
    "smiley face",
    "snail",
    "snake",
    "snorkel",
    "snowflake",
    "snowman",
    "soccer ball",
    "sock",
    "speedboat",
    "spider",
    "spoon",
    "spreadsheet",
    "square",
    "squiggle",
    "squirrel",
    "stairs",
    "star",
    "steak",
    "stereo",
    "stethoscope",
    "stitches",
    "stop sign",
    "stove",
    "strawberry",
    "streetlight",
    "string bean",
    "submarine",
    "suitcase",
    "sun",
    "swan",
    "sweater",
    "swing set",
    "sword",
    "syringe",
    "table",
    "teapot",
    "teddy-bear",
    "telephone",
    "television",
    "tennis racquet",
    "tent",
    "The Eiffel Tower",
    "The Great Wall of China",
    "The Mona Lisa",
    "tiger",
    "toaster",
    "toe",
    "toilet",
    "tooth",
    "toothbrush",
    "toothpaste",
    "tornado",
    "tractor",
    "traffic light",
    "train",
    "tree",
    "triangle",
    "trombone",
    "truck",
    "trumpet",
    "t-shirt",
    "umbrella",
    "underwear",
    "van",
    "vase",
    "violin",
    "washing machine",
    "watermelon",
    "waterslide",
    "whale",
    "wheel",
    "windmill",
    "wine bottle",
    "wine glass",
    "wristwatch",
    "yoga",
    "zebra",
    "zigzag"
  ];
