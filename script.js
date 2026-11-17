const districts = [
    {
        name: "La Paz",
        description: "La Paz is a well-known district of Iloilo City, recognized for its food culture and local traditions.",
        food: "La Paz Batchoy",
        foodDescription: "A famous Ilonggo noodle soup made with pork, liver, broth, noodles, and crunchy toppings."
    },

    {
        name: "Jaro",
        description: "Jaro is known for its historical landmarks, heritage houses, and cultural traditions.",
        food: "Jaro Delicacies",
        foodDescription: "Explore the traditional delicacies and local specialties of Jaro."
    },

    {
        name: "Molo",
        description: "Molo is a historic district known for its heritage church and traditional cuisine.",
        food: "Pancit Molo",
        foodDescription: "A popular Ilonggo soup containing dumplings served in flavorful chicken broth."
    },

    {
        name: "Arevalo (Villa)",
        description: "Arevalo is a coastal district known for its seafood, local traditions, and community celebrations.",
        food: "Seafood Specialties",
        foodDescription: "Discover the seafood dishes and local food specialties of Arevalo."
    },

    {
        name: "Mandurriao",
        description: "Mandurriao is a developing district with commercial centers, restaurants, and growing communities.",
        food: "Local Ilonggo Cuisine",
        foodDescription: "Explore the local dishes and food establishments of Mandurriao."
    },

    {
        name: "City Proper",
        description: "City Proper is the central district of Iloilo City, known for its markets, businesses, and historical sites.",
        food: "Traditional Ilonggo Food",
        foodDescription: "Discover traditional dishes and local food favorites in the city center."
    },

    {
        name: "Lapuz",
        description: "Lapuz is a coastal district with a strong connection to fishing, local trade, and community life.",
        food: "Seafood Specialties",
        foodDescription: "Explore seafood dishes and local specialties found in Lapuz."
    }
];


// HOME BUTTON
function showHome() {
    document.getElementById("content").innerHTML = `
        <section>
            <h2>Welcome to Iloilo!</h2>

            <hr>

            <p>
                Welcome to ILOlicious!
                Explore the seven districts of Iloilo City
                and learn about their unique cuisines,
                traditions, and local specialties.
            </p>

            <h3>Choose a District</h3>

            <p>
                Hover over a district button to see its photo.
                Click the button to view its information.
            </p>
        </section>
    `;

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}


// DISTRICT BUTTONS
function showDistrict(index) {

    const district = districts[index];

    document.getElementById("content").innerHTML = `
        <section class="details">

            <h2>${district.name}</h2>

            <hr>

            <p>${district.description}</p>

            <div class="food-card">

                <h3>Signature Food: ${district.food}</h3>

                <p>${district.foodDescription}</p>

            </div>

            <h3>Location</h3>

            <p>${district.name}, Iloilo City, Philippines</p>

            <a
                class="map-button"
                href="https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(district.name + ', Iloilo City, Philippines')}"
                target="_blank"
                rel="noopener noreferrer">
                View on Google Maps
            </a>

        </section>
    `;

    document.getElementById("content").scrollIntoView({
        behavior: "smooth"
    });
}


showHome();