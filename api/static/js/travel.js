/**
 * Travel Tracker logic using amCharts 5
 */

// Travel Data - Edit this to add your visited locations!
const travelData = {
    countries: {
        "US": {
            name: "United States",
            visited: true,
            thingsDone: ["placeholder_text"],
            favoritePart: "placeholder_text"
        },
        "GR": {
            name: "Greece",
            visited: true,
            thingsDone: ["Acropolis", "Athens", "Santorini", "Delphi ruins"],
            favoritePart: "The Acropolis was pretty mind-blowing."
        },
        "IT": {
            name: "Italy",
            visited: true,
            thingsDone: ["Pompeii", "Rome", "Naples"],
            favoritePart: "Mount Vesuvius was p crazy"
        },
        "CA": {
            name: "Canada",
            visited: true,
            thingsDone: ["Vancouver", "Toronto", "Montreal", "Niagara Falls", "Blue Mountain"],
            favoritePart: "So random, but we went to the town next to Niagara Falls in like 6th grade and did a haunted house with my friends, and that was a core memory for sure."
        },
        "JM": {
            name: "Jamaica",
            visited: true,
            thingsDone: ["Montego Bay", "Ocho Rios", "Dunns River Falls"],
            favoritePart: "Definitely Dunn's River Falls"
        },
        "IN": {
            name: "India",
            visited: true,
            thingsDone: ["Kolkata", "Jaipur", "Agra", "Mumbai", "Delhi"],
            favoritePart: "The Taj Mahal genuinely made me cry"
        },
        "ES": {
            name: "Spain",
            visited: true,
            thingsDone: ["Barcelona", "Madrid"],
            favoritePart: "Playing pickup soccer in Barcelona with my friend Charlie!"
        },
        "GB": {
            name: "England",
            visited: true,
            thingsDone: ["London"],
            favoritePart: "Going to Wembley"
        },
        "FR": {
            name: "France",
            visited: true,
            thingsDone: ["Paris"],
            favoritePart: "Eiffel Tower. I was really young I need to go back."
        },
        "HN": {
            name: "Honduras",
            visited: true,
            thingsDone: ["Roatán"],
            favoritePart: "Walking through the city, I was young and it was my first time like understanding what a foreign country was like"
        },
        "DE": {
            name: "Germany",
            visited: true,
            thingsDone: ["Rhine River", "Cologne Cathedral", "Black Forest"],
            favoritePart: "Eating Black Forest Cake"
        },
        "BE": {
            name: "Belgium",
            visited: true,
            thingsDone: ["Brussels"],
            favoritePart: "The Atomium."
        },
        "MX": {
            name: "Mexico",
            visited: true,
            thingsDone: ["Cozumel"],
            favoritePart: "Getting a Rey Mysterio Mask"
        }
    },
    states: {
        "US-MI": {
            name: "Michigan",
            visited: true,
            thingsDone: ["Everything I'm from here"],
            favoritePart: "Torch lake on 4th of July with my best friends"
        },
        "US-CA": {
            name: "California",
            visited: true,
            thingsDone: ["I live in sf now"],
            favoritePart: "Sausalito is so pretty"
        },
        "US-NY": {
            name: "New York",
            visited: true,
            thingsDone: ["NYC"],
            favoritePart: "Going out with all my friends from umich"
        },
        "US-FL": {
            name: "Florida",
            visited: true,
            thingsDone: ["Miami", "Key West", "Everglades", "Disney World", "ft lauderdale"],
            favoritePart: "Fish tacos and sunset in Key West, or maybe seeing gators in the everglades boat ride"
        },
        "US-WY": {
            name: "Wyoming",
            visited: true,
            thingsDone: ["Grand Tetons", "Yellowstone", "Rocky Mountains"],
            favoritePart: "Nature"
        },
        "US-DC": {
            name: "Washington DC",
            visited: true,
            thingsDone: ["Monuments", "Museums", "Wharf", "Everything, I lived here for a summer"],
            favoritePart: "Random parks around DC, going to monuments at night, echostage if you have ever been there"
        },
        "US-VA": {
            name: "Virginia",
            visited: true,
            thingsDone: ["McLean", "Arlington", "Shenandoah National Park", "Alexandria", "Monticello"],
            favoritePart: "Monticello"
        },
        "US-IL": {
            name: "Illinois",
            visited: true,
            thingsDone: ["Chicago", "Naperville", "Moline", "Peoria"],
            favoritePart: "Playing Soccer at Skyline Pitch in Chicago"
        },
        "US-NE": {
            name: "Nebraska",
            visited: true,
            thingsDone: ["I honestly don't remember"],
            favoritePart: "lmao"
        },
        "US-SD": {
            name: "South Dakota",
            visited: true,
            thingsDone: ["Badlands National Park", "Mt Rushmore"],
            favoritePart: "Badlands National Park"
        },
        "US-MT": {
            name: "Montana",
            visited: true,
            thingsDone: ["Glacier National Park"],
            favoritePart: "Everything about Glacier National Park"
        },
        "US-TX": {
            name: "Texas",
            visited: true,
            thingsDone: ["Dallas"],
            favoritePart: "Seeing a Copa America game at AT&T Stadium"
        },
        "US-NJ": {
            name: "New Jersey",
            visited: true,
            thingsDone: ["I don't remember"],
            favoritePart: "lmao"
        },
        "US-IA": {
            name: "Iowa",
            visited: true,
            thingsDone: ["I used to live in Cedar Rapids"],
            favoritePart: "Growing up, playing soccer around Iowa, making friendships. Herbert Hoover Museum is p cool."
        },
        "US-UT": {
            name: "Utah",
            visited: true,
            thingsDone: ["Zion National Park"],
            favoritePart: "Zion National Park"
        },
        "US-TN": {
            name: "Tennessee",
            visited: true,
            thingsDone: ["Gatlinburg"],
            favoritePart: "That city is crazy"
        },
        "US-OH": {
            name: "Ohio",
            visited: true,
            thingsDone: ["Dublin", "Miami", "Kalahari"],
            favoritePart: "Seeing my friends at Miami University"
        },
		"US-PA": {
            name: "Pennsylvania",
            visited: true,
            thingsDone: ["Blue Mountain"],
            favoritePart: "I went on a trip to Blue Mountain with my business frat. It was a disaster, the house lost water and heat and the bathrooms were overflowing. It was a great bonding experience though."
        },
        "US-CT": {
            name: "Connecticut",
            visited: true,
            thingsDone: ["Stamford"],
            favoritePart: "We were thinking of moving here, but it was too expensive, and we did not fw the vibes here."
        },
        "US-WA": {
            name: "Washington",
            visited: true,
            thingsDone: ["Seattle", "Mount Rainier"],
            favoritePart: "Pike Place Market"
        },
        "US-AK": {
            name: "Alaska",
            visited: true,
            thingsDone: ["Juneau", "Skagway", "Ketchikan"],
            favoritePart: "We did a cruise through Alaska. Seeing the glacier up close was insane. Also seeing dog mushing puppies was cute."
        },
        "US-MN": {
            name: "Minnesota",
            visited: true,
            thingsDone: ["Minneapolis", "St Paul"],
            favoritePart: "Nickelodeon World Ammusement park thing, + Raddison water park"
        },
        "US-NV": {
            name: "Nevada",
            visited: true,
            thingsDone: ["Las Vegas", "Grand Canyon"],
            favoritePart: "I actually hate Vegas, I feel like a sheep. Grand Canyon was awesome though."
        },
        "US-WI": {
            name: "Wisconsin",
            visited: true,
            thingsDone: ["Madison"],
            favoritePart: "The UW campus was amazing"
        },
        "US-IN": {
            name: "Indiana",
            visited: true,
            thingsDone: ["Indianapolis"],
            favoritePart: "I couldn't tell you"
        }
    }
};

am5.ready(function() {
    // Create root element
    const root = am5.Root.new("chartdiv");

    // Set themes
    root.setThemes([
        am5themes_Animated.new(root)
    ]);

    // Create the map chart
    const chart = root.container.children.push(am5map.MapChart.new(root, {
        panX: "rotateX",
        panY: "rotateY",
        projection: am5map.geoOrthographic(),
        paddingBottom: 20,
        paddingTop: 20,
        paddingLeft: 20,
        paddingRight: 20
    }));

    // Add background for the globe (Oceans)
    const backgroundSeries = chart.series.push(am5map.MapPolygonSeries.new(root, {}));
    backgroundSeries.mapPolygons.template.setAll({
        fill: am5.color(0x075985), // Deep ocean blue
        fillOpacity: 0.4,
        strokeOpacity: 0
    });
    // Add a single polygon that covers the entire world
    backgroundSeries.data.push({
        geometry: am5map.getGeoCircle({ latitude: 0, longitude: 0 }, 89.99)
    });
    // Add another circle on the opposite side to ensure full coverage
    backgroundSeries.data.push({
        geometry: am5map.getGeoCircle({ latitude: 0, longitude: 180 }, 89.99)
    });

    // Create main polygon series for countries
    const worldSeries = chart.series.push(am5map.MapPolygonSeries.new(root, {
        geoJSON: am5geodata_worldLow,
        exclude: ["AQ"] // Exclude Antarctica
    }));

    worldSeries.mapPolygons.template.setAll({
        tooltipText: "{name}",
        interactive: true,
        fill: am5.color(0x000000), // black
        stroke: am5.color(0xffffff), // white
        strokeWidth: 0.5,
        templateField: "polygonSettings"
    });

    // Hover state
    worldSeries.mapPolygons.template.states.create("hover", {
        fill: am5.color(0x333333) // dark grey
    });

    // Visited state (active)
    worldSeries.mapPolygons.template.states.create("active", {
        fill: am5.color(0xef4444) // red-500
    });

    // USA Series (hidden by default)
    const usaSeries = chart.series.push(am5map.MapPolygonSeries.new(root, {
        geoJSON: am5geodata_usaLow,
        visible: false
    }));

    usaSeries.mapPolygons.template.setAll({
        tooltipText: "{name}",
        interactive: true,
        fill: am5.color(0x000000), // black
        stroke: am5.color(0xffffff), // white
        strokeWidth: 0.5,
        templateField: "polygonSettings"
    });

    usaSeries.mapPolygons.template.states.create("hover", {
        fill: am5.color(0x333333)
    });

    usaSeries.mapPolygons.template.states.create("active", {
        fill: am5.color(0xef4444)
    });

    // Set up data for world map
    worldSeries.events.on("datavalidated", () => {
        worldSeries.mapPolygons.each((polygon) => {
            const id = polygon.dataItem.get("id");
            if (travelData.countries[id]) {
                polygon.set("active", true);
            }
        });
    });

    // Set up data for USA map
    usaSeries.events.on("datavalidated", () => {
        usaSeries.mapPolygons.each((polygon) => {
            const id = polygon.dataItem.get("id");
            if (travelData.states[id]) {
                polygon.set("active", true);
            }
        });
    });

    // Info panel elements
    const infoPanel = document.getElementById("info-panel");
    const infoContent = document.getElementById("info-content");
    const locationName = document.getElementById("location-name");
    const thingsDoneList = document.getElementById("things-done");
    const favoritePart = document.getElementById("favorite-part");
    const backButton = document.getElementById("back-to-world");
    const closePanel = document.getElementById("close-panel");

    function showInfo(name, data) {
        locationName.textContent = name;
        thingsDoneList.innerHTML = "";
        data.thingsDone.forEach(thing => {
            const li = document.createElement("li");
            li.textContent = thing;
            thingsDoneList.appendChild(li);
        });
        favoritePart.textContent = data.favoritePart;

        infoPanel.classList.remove("hidden");
        setTimeout(() => {
            infoPanel.style.transform = "translateX(0)";
            infoPanel.style.opacity = "1";
        }, 10);
    }

    function hideInfo() {
        infoPanel.style.transform = "translateX(100%)";
        infoPanel.style.opacity = "0";
        setTimeout(() => {
            infoPanel.classList.add("hidden");
        }, 300);
    }

    closePanel.addEventListener("click", hideInfo);

    // Click events
    worldSeries.mapPolygons.template.events.on("click", (ev) => {
        const dataItem = ev.target.dataItem;
        const id = dataItem.get("id");
        const name = dataItem.get("name");

        if (id === "US") {
            // Drill down to USA
            worldSeries.hide();
            usaSeries.show();
            chart.set("projection", am5map.geoAlbersUsa());
            backButton.classList.remove("hidden");
            hideInfo();
        } else if (travelData.countries[id]) {
            showInfo(name, travelData.countries[id]);
        }
    });

    usaSeries.mapPolygons.template.events.on("click", (ev) => {
        const dataItem = ev.target.dataItem;
        const id = dataItem.get("id");
        const name = dataItem.get("name");

        if (travelData.states[id]) {
            showInfo(name, travelData.states[id]);
        }
    });

    backButton.addEventListener("click", () => {
        usaSeries.hide();
        worldSeries.show();
        chart.set("projection", am5map.geoOrthographic());
        backButton.classList.add("hidden");
        hideInfo();
    });

    // Rotate globe
    let animation;
    function startRotation() {
        animation = chart.animate({
            key: "rotationX",
            from: chart.get("rotationX"),
            to: chart.get("rotationX") + 360,
            duration: 30000,
            loops: Infinity
        });
    }

    // Stop rotation on interaction
    chart.events.on("pointerdown", () => {
        if (animation) animation.stop();
    });

    // startRotation(); // Uncomment to have it rotate automatically

    // Make stuff animate on load
    chart.appear(1000, 100);

});