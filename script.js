const districts = [
    {
        name: "La Paz",
        description: "La Paz is a well-known district of Iloilo City, recognized for its food culture and local traditions.",
        food: "La Paz Batchoy",
        foodDescription: "A famous Ilonggo noodle soup made with pork, liver, broth, noodles, and crunchy toppings.",
        gallery: [
            {
                image: "images/PhotoGallery/Lapaz/AliciaBatchoy[LaPaz].jpg",
                title: "Alicia Special Batchoy", 
                description: `Alicia's Special Batchoy is a favorite local eatery in Iloilo known for its tasty noodle soup 
                            and classic snacks like puto and empanadas. It has several branches across Iloilo City,
                            including a popular spot in La Paz, making it a great place to enjoy warm, comforting Ilonggo food.`
            },
            {
                image: "images/PhotoGallery/Lapaz/MadgeCafe[Lapaz].jpeg",
                title: "Madge Cafe",
                description: `Madge Cafe at La Paz Public Market is the original 1940s coffee shop known for traditional 
                        pre-war brewed local coffee and classic breakfast fare, while the Shops at Atria location pairs that 
                        heritage coffee with a modern retail setting, cakes, and evening hours, and the Iloilo Central Market branch 
                        offers a casual market-side stop for coffee, rice meals, and cold treats.`
            },
            {
                image: "images/PhotoGallery/Lapaz/CharlieBurger[Lapaz].jpeg",
                title: "Charlie's Burgers",
                description: `A local burger stand in La Paz serving juicy burgers
                            with a variety of toppings and sauces.`
            },
            {
                image: "images/PhotoGallery/Lapaz/Deco[Lapaz].jpeg",
                title: "Deco's Original La Paz Batchoy Since 1938",
                description: `A historic Ilonggo eatery at 18 Huervana St, La Paz Public Market, Iloilo City, widely recognized as the 
                        birthplace of La Paz batchoy.Traditional La Paz Batchoy. Serves steaming bowls of fresh round miki noodles in a rich pork,
                        beef, and bone marrow broth seasoned with guinamos (shrimp paste), topped generously with pork loin, liver, innards, toasted garlic, 
                        spring onions, and crushed chicharon`
            },
            {
                image: "images/PhotoGallery/Lapaz/BBW[Lapaz].jpeg",
                title: "Big Bad Bowls",
                description: `A casual, homegrown Asian fusion restaurant in Iloilo City known for serving hearty, budget-friendly rice and 
                        noodle bowls made with family recipes, fresh ingredients, and house-blended chili sauces. Features filling rice toppings 
                        including Big Bad Tapa, Kansi Flakes, Sisig, Beef Pares, Bibimbowl, Donkkaesu, and Thai Basil Pork alongside pan-fried gyoza, 
                        lumpiang shanghai, and Milky Gulaman.`
            },
            {
                image: "images/PhotoGallery/Lapaz/Ref[Lapaz].jpeg",
                title: "Francisco’s Refreshment",
                description: `Long-running, casual Filipino eatery and catering service in La Paz, Iloilo City, that has been serving Ilonggos since 1975. 
                        Located along Luna Street directly across from West Visayas State University, it is known for homestyle Ilonggo and Filipino comfort
                        food as well as classic desserts. Popular dishes include bakareta (beef stew), fried chicken, fish salpicao, bihon guisado, valenciana,
                        and local soups.`
            },
            {
                image: "images/PhotoGallery/Lapaz/Net[Lapaz].jpeg",
                title: "Netong’s original special la paz batchoy",
                description: `A foundational stall inside Public Market, widely recognized for defining classic La Paz batchoy flavor profile. 
                        They are known for La Paz batchoy, batchoy chicharon, sotanghon batchoy, puto and La Paz siopao.`
            }
        ]
    },

    {
        name: "Jaro",
        description: "Jaro is known for its historical landmarks, heritage houses, and cultural traditions.",
        food: "Jaro Delicacies",
        foodDescription: "Explore the traditional delicacies and local specialties of Jaro.",
        gallery: [
            {
                image: "images/PhotoGallery/Jaro/aqua cafe.webp",
                title: "Aquarium Cafe & Lounge",
                description: `Aquarium Cafe & Lounge is a unique themed restaurant in Jaro, Iloilo City,
                 where you can enjoy good food and coffee surrounded by giant fish tanks and live animals. 
                 Along with colorful marine life, the cafe has indoor exhibits featuring reptiles, exotic birds, 
                 and even big cats like tigers, making it a fun dining spot for families and animal lovers.`
            },
            {
                image: "images/PhotoGallery/Jaro/kammnsosiiii.jpg",
                title: "Grace Kansi House",
                description: `Grace Kansi House is a budget-friendly soup shop in Jaro, Iloilo City, 
                known for serving hearty, cauldron-cooked kansi (sour and savory beef soup) in a casual 
                setting with warm service, dine-in/takeout options, and free street parking.`
            },
            {
                image: "images/PhotoGallery/Jaro/biscocho.jpg",
                title: "Original Biscocho Haus",
                description: `Jaro flagship pasalubong destination ,having popularized iloilo’s signature 
                twice baked buttered bread known as biscocho and chewy butterscotch bars since 1975.`
            },
            {
                image: "images/PhotoGallery/Jaro/Original De O Campo Barquillos.png",
                title: "Original De O Campo Barquillos",
                description: `Jaro Historic wafer maker, crafting paper thin rolled Barquillos using
                 traditional cast iron molds since 1896. They also served Piyaya, ube piyaya and barquiteros.`
            },
            {
                image: "images/PhotoGallery/Jaro/creamhorn.jpg",
                title: "iCreamhorn",
                description: `iCreamhorn (formerly known as Margec's Cream Horn) is an Iloilo bakery 
                known for its cone-shaped Danish puff pastries filled with rich, creamy custard. Originally 
                founded in 1987 and taken over by Francis Campos in 2017, it is a popular local treat and pasalubong.`
            },
            {
                image: "images/PhotoGallery/Jaro/casa sinugba.jpg",
                title: "Casa Sinugba",
                description: `Casa Sinugba is a Filipino restaurant in Jaro, Iloilo City (opened June 2026) serving 
                grilled specialties, seafood, and Ilonggo comfort food in a spacious setting. Their specialties are 
                the Crispy pork sisig, kansi (including sizzling kansi), grilled pecho, chili garlic shrimp, and 
                tanigue.`
            },
            {
                image: "images/PhotoGallery/Jaro/Screenshot 2026-11-23 114416.png",
                title: "Rgies PH",
                description: `Rgies PH (also known as Rgies Delicacies) is a wholesale bakery and pasalubong brand 
                based in Iloilo City, Philippines, best known for pioneering flavored butterscotch squares.
                They are best known for their chewy butterscotch squares—specifically pioneering the Mango Bits variant 
                alongside Original Cashew, Dates, Choco Oats, Almonds, and Coffee. They also produce Yema Dulce de Leche, 
                Butterscotti (a biscuit version of butterscotch), and cookies.`
            }
        ]
    },

    {
        name: "Molo",
        description: "Molo is a historic district known for its heritage church and traditional cuisine.",
        food: "Pancit Molo",
        foodDescription: "A popular Ilonggo soup containing dumplings served in flavorful chicken broth.",
        mapUrl: "https://maps.app.goo.gl/GvhTxc98URUakZMV6",
        gallery: [
            {
                image: "images/PhotoGallery/Molo/theo.png",
                title: "Baking studio by Theo’s",
                description: `Baking studio by Theo’s is a modern cafe, bakery, and restaurant at 
                North Grove in Molo, Iloilo City. It offers a cozy, green space where you can 
                enjoy a wide variety of food, blending classic Filipino and Ilonggo delicacies 
                with international dishes from around the world. Whether you are stopping by for 
                a fresh baked good, local inspired coffee, wholesome meal, or evening drinks.`
            },
            {
                image: "images/PhotoGallery/Molo/moloobollsz.jpg",
                title: "Kap Ising's Pancit Molo",
                description: `The district's most famous spot for authentic Pancit Molo, served 
                alongside fresh lumpia, potato empanada, and frozen packs to take home`
            },
            {
                image: "images/PhotoGallery/Molo/Panaderia de Molo.png",
                title: "Panaderia de Molo",
                description: `Oldest heritage bakeries in the Visayas, continuously baking 
                traditional Spanish- influenced biscuits. They served their specialties 
                like Galleys, Roquillos, biscocho de molo, lengua de Gato and polvoron.`

            },
            {
                image: "images/PhotoGallery/Molo/mamas kitcheren products.png",
                title: "Mama’s Kitchen and Food Products",
                description: `Bakehouse originating from molo-arevalo border, famous for 
                gourmet fruit and nut pastries. Such as mango chewies, cashew crunchies, 
                Molo pastel, biscuit, tsokolate crunchies, santan spread , tablea bites 
                and Dulce de leche.`
            },
            {
                image: "images/PhotoGallery/Molo/lechon liempo ramboys.jpg",
                title: "Ramboy’s",
                description: `Traditional Filipino grill and lechonan. They are known for 
                their Crispy-skinned grilled pork belly (lechon liempo) and roasted chicken 
                (lechon manok), alongside Filipino group dishes like pansit and chopsuey.`
            },
            {
                image: "images/PhotoGallery/Molo/kofi and company.png",
                title: "Kofi & Kompany",
                description: `Specialty coffee, pastries, and all-day brunch.
                They are known for Espresso drinks, frappes, thick Epicookies, 
                soufflé pancakes, pasta, and Filipino breakfast plates.`
            },
            {
                image: "images/PhotoGallery/Molo/Vegan-Batchoy-4.jpg",
                title: "Batchoy Ilonggo Foodhaus",
                description: `Ilonggo comfort food and noodle soups. They are known for their 
                Signature La Paz-style batchoy (including Batchoy Overload and seafood variations)
                as well as hearty bowls of arroz caldo and goto.`
            }
        ]
    },

    {
        name: "Arevalo (Villa)",
        description: "Arevalo is a coastal district known for its seafood, local traditions, and community celebrations.",
        food: "Seafood Specialties",
        foodDescription: "Discover the seafood dishes and local food specialties of Arevalo.",
        gallery: [
            {
                image: "images/PhotoGallery/VillaArevallo/8house.jpg",
                title: "8 Villa Beach House",
                description: `8 Villa Beach House is a laid-back beachfront restaurant in Villa Arevalo 
                known for fresh seafood and classic Ilonggo dishes right on the sand. It is a revival of 
                one of Iloilo's earliest coastal restaurants from the early 1900s, offering an old-school 
                beach house vibe, sunset views, and occasional live music on weekends. Popular dishes 
                include grilled boneless bangus and seafood bilaos, and the venue is both family-friendly 
                and pet-friendly. `
            },
            {
                image: "images/PhotoGallery/VillaArevallo/tatoys manokan and resto.png",
                title: "Tatoy's Manokan and Seafood Restaurant",
                description: `Tatoy's Manokan and Seafood Restaurant is a heritage Filipino dining establishment 
                founded in the early 1970s by Honorato "Tiyo Tatoy" Espinosa. What began as a humble three-table 
                nipa shanty operating on weekends evolved over decades into a widely recognized culinary destination 
                known for authentic Ilonggo flavors, charcoal-roasted native chicken, and fresh seafood.`
            },
            {
                image: "images/PhotoGallery/VillaArevallo/breakthrough resto.png",
                title: "Breakthrough Restaurant",
                description: `Breakthrough Restaurant is a long-standing Ilonggo seafood and Filipino dining spot in 
                Iloilo City, known for live-tank seafood and beachside dining. They served baked talaba, Diwali, 
                aligue rice, sizzling crabmeat and kilawin na tanigue.`
            },
            {
                image: "images/PhotoGallery/VillaArevallo/balay na bato.png",
                title: "Advanceña-Camiña balay na Bato",
                description: `1860’s ancestral mansion where visitors enjoy thick tablea hot chocolate whisked 
                with a traditional wooden batirol. Their signatures are tsokolate de batirol, biscocho dunkers, 
                and Guimaras Mango Tart.`
            },
            {
                image: "images/PhotoGallery/VillaArevallo/arnels talabahan.png",
                title: "Arnel’s Talabahan",
                description: `Arnel’s Talabahan is a humble, beachfront eatery loved by locals for its fresh, 
                affordable oysters and relaxing seaside views. It is a great spot to enjoy simple, home-style 
                grilled meats and seafood right by the water. 
                `
            },
            {
                image: "images/PhotoGallery/VillaArevallo/kikis caferesto.png",
                title: "Kiki’s CafeResto",
                description: `Kiki’s CafeResto is a peaceful, nature-filled neighborhood cafe and eatery known 
                for its freshly baked pies and comforting rice meals. It is a relaxing spot to hang out with friends 
                or family over coffee, dessert, and home-style Filipino food.`
            },
            {
                image: "images/PhotoGallery/VillaArevallo/cocina de uhong.png",
                title: "Cocina De Uhong",
                description: `Cocina de Uhong is a cozy, home-style eatery known for turning fresh, homegrown mushrooms 
                into delicious Filipino and Western comfort food. It is a great spot to enjoy healthy, meatless twists 
                on classic favorites like burgers, sisig, and even ice cream.`
            }
        ]
    },

    {
        name: "Mandurriao",
        description: "Mandurriao is a developing district with commercial centers, restaurants, and growing communities.",
        food: "Local Ilonggo Cuisine",
        foodDescription: "Explore the local dishes and food establishments of Mandurriao.",
        gallery: [
            {
                image: "images/PhotoGallery/Mandurriao/LarsBuko[Man].jpeg",
                title: "Lars Buko Batchoy",
                description: `Lars Buko Batchoy is a Filipino eatery founded in 2016 by Larry "Lars" Abanilla Lao and 
                Primrose Paredes Uy, best known for blending traditional La Paz batchoy with young coconut (buko). 
                What started as a modest, no-frills canteen gained widespread attention online and in local food media 
                for its creative spin on a classic noodle soup .`
            },
            {
                image: "images/PhotoGallery/Mandurriao/Jo’sChick[Man].jpg",
                title: "Jo’s Chicken Inato",
                description: `Jo’s Chicken Inato is a casual, budget-friendly Filipino restaurant known for its tasty, 
                charcoal-grilled chicken barbecue and unlimited rice. It is a great everyday spot for families and groups 
                to enjoy a hearty meal in a relaxed setting. They also serve other classic Filipino favorites like grilled 
                bangus, sizzling dishes, and fresh lumpia. `
            },
            {
                image: "images/PhotoGallery/Mandurriao/Pedb[Man].jpg",
                title: "Pedbacs Restaurant",
                description: `Pedbacs Restaurant in Mandurriao, Iloilo City specializes in homestyle Filipino comfort food, 
                highlighted by its Kanding Sarsyado (goat meat stew) alongside classics like pork kare-kare, all-meat dinuguan, 
                callos, and all-day silog breakfasts`
            },
            {
                image: "images/PhotoGallery/Mandurriao/PUNOT[Man].jpeg",
                title: "PUNOT",
                description: `It is located along the Iloilo River Esplanade and specializes in elevated, contemporary 
                interpretations of traditional Western Visayas Heritage dishes.They serve signature dishes such as sizzling KBL, 
                crispy dinuguan kadyos humba fusion, smoked batwan pork ribs, crab fat pasta, seafood paella, and tuna panga inasal. `
            },
            {
                image: "images/PhotoGallery/Mandurriao/MangoTree[Man].jpeg",
                title: "The Mango Tree Restaurant and Maridel's",
                description: `It showcases modern Ilonggo dining, artisanal cakes, and innovative dishes highlighting regional mangoes 
                and citrus.Signature Foods Sourced Here: Guimaras Mango Pizza, Mango Soft Serve, Calamansi Tart, Matcha Cream Horns, 
                Grilled Pork Tomahawk Inasal, and Lechon Roll.`
            },
            {
                image: "images/PhotoGallery/Mandurriao/Balay[Man].jpeg",
                title: "Balay Esplanade",
                description:`Balay Esplanade is a casual Filipino restaurant located in the Smallville Complex in Mandurriao, Iloilo City. 
                Known for its home-cooked Filipino comfort food, it offers generous, shareable portions suited for families and groups in a 
                relaxed setting right along the Iloilo River Esplanade area.`
            },
            {
                image: "images/PhotoGallery/Mandurriao/Mr.Knuc[Man].jpeg",
                title: "Mr. Knuckles Crispy Pata",
                description: `Mr. Knuckles Crispy Pata is a casual, family-friendly restaurant in Mandurriao, Iloilo City, specializing in 
                Filipino crispy pata alongside classic comfort dishes and soup. Plated Restaurant is a quiet, cozy Asian restaurant in Iloilo City. 
                This affordable spot is best known for big servings of tasty Asian comfort food with a touch of Ilonggo flavor. Their top dishes 
                include Pad Thai, Vietnamese Grilled Pork Spare Ribs, and Sisig Pancit. It stands out in Iloilo's dining scene for mixing 
                classic Asian favorites with warm Ilonggo hospitality and local twists. `
            }
        ]
    },

    {
        name: "City Proper",
        description: "City Proper is the central district of Iloilo City, known for its markets, businesses, and historical sites.",
        food: "Traditional Ilonggo Food",
        foodDescription: "Discover traditional dishes and local food favorites in the city center.",
        gallery: [
            {
                image: "images/PhotoGallery/CityProper/siopao roberto.png",
                title: "Roberto’s",
                description: `Roberto’s is a legendary Chinese-Filipino family restaurant in Iloilo City, Philippines, 
                famous for its iconic oversized siopao. The restaurant serves a range of savory meals and snacks in a 
                casual setting. Its menu includes steamed buns, meatballs, and other comfort foods. It also offers a simple 
                option for a relaxed meal.`
            },
            {
                image: "images/PhotoGallery/CityProper/arozcaldo.png",
                title: "Luna’s Arroz Caldo",
                description: `Luna's Arroz Caldo is a classic, 24-hour Ilonggo comfort food eatery in Iloilo City Proper. 
                Operating since 1967, this casual, budget-friendly spot on General Luna Street is famous for its steaming
                bowls of native chicken arroz caldo (Filipino rice porridge) paired with soft puto (rice cake), alongside 
                all-day silog breakfast meals and short orders.`
            },
            {
                image: "images/PhotoGallery/CityProper/Betty's Ilonggo Table and Bakehouse.png",
                title: "Betty's Ilonggo Table and Bakehouse",
                description: `Betty's Ilonggo Table and Bakehouse is a Filipino restaurant and bakery in Iloilo City celebrating
                traditional Ilonggo home-style cooking like kansi, KBL, palabok, and local baked goods.`
            },
            {
                image: "images/PhotoGallery/CityProper/master chua haus.png",
                title: "Master Chua Food Haus",
                description: `Chinese- Filipino culinary heritage of downtown Iloilo, such as dumplings, beef pares, pata Tim, 
                pork hamonado, siomai, and tokwa’t baboy.`
            },
            {
                image: "images/PhotoGallery/CityProper/oka bakery.png",
                title: "OKA Bakery",
                description: `They serve different kinds of  local pastries such as Calle Real pan de sal, pan de Rosa, 
                empanada de Calle Real, toasted siopao, ibajay-style fried chicken,chicharon,bulaklak, classic halo halo,
                leche flan, and tsokolate`
            },
            {
                image: "images/PhotoGallery/CityProper/iloggo lauya.png",
                title: "Casa Maruja",
                description: `Casa Maruja is a charming, old-world heritage home turned into a cozy, casual restaurant.
                It offers a warm, nostalgic atmosphere where families and visitors can enjoy authentic, home-style Ilonggo
                dishes like their famous Lauya at affordable prices.`
            },
            {
                image: "images/PhotoGallery/CityProper/Jr. Rawit's Native Chicken Lechon.png",
                title: "Jr. Rawit's Native Chicken Lechon",
                description: `A no-frills, local eatery in Iloilo City Proper famous for its charcoal-roasted native chicken. 
                Located on Rizal Street near Iloilo Central Market, this budget-friendly spot specializes in flavorful, 
                smoky lechon manok (roasted native chicken) served fresh off the spit with steamed rice and their signature 
                spiced native vinegar.`
            }
        ]
    },

    {
        name: "Lapuz",
        description: "Lapuz is a coastal district with a strong connection to fishing, local trade, and community life.",
        food: "Seafood Specialties",
        foodDescription: "Explore seafood dishes and local specialties found in Lapuz.",
        gallery: [
            {
                image: "images/PhotoGallery/Lapuz/Muelle[Lapuz].jpeg",
                title: "Muelle Deli and Restaurant",
                description: `Muelle Deli and Restaurant is a cozy, upscale riverside restaurant in Lapuz, Iloilo City, known 
                for its scenic river views, live evening music, house-made sausages, steaks, and Filipino-international fusion 
                dishes. It offers both air-conditioned indoor seating and breezy outdoor dining along the Iloilo River, making 
                it a popular spot for relaxed family dinners, date nights, and casual drinks. `
            },
            {
                image: "images/PhotoGallery/Lapuz/Sabya[Lapuz].jpeg",
                title: "Sabya Kitchen",
                description: `Sabya Kitchen is a progressive Filipino restaurant along the Iloilo River in Lapuz, Iloilo City, 
                offering a cozy riverfront setting. From the team behind Jo’s Chicken Inato, it serves modern, elevated takes 
                on Ilonggo, Cebuano, and Filipino comfort food, including standout dishes like Osso Buco Kaldereta, Callos Ilonggo, 
                aligue tortang talong, and creative drinks such as the Budbud Latte.`
            },
            {
                image: "images/PhotoGallery/Lapuz/Sisigan[Lapuz].jpg",
                title: "Sisigan sa Lapuz by KL Food Station and Digz Batchoy",
                description: `Anchors to Lapuz neighborhood dining scene They served hearty sizzling plates, grilled fish and portside 
                comfort food. `
            },
            {
                image: "images/PhotoGallery/Lapuz/3rdSt[Lapuz].jpg",
                title: "3rd St. Coffee",
                description: `A cozy, budget-friendly neighborhood cafe on Sampaguita St. (behind Assumption of Our Lady Church in 
                Bo. Obrero, Lapuz) serving iced coffees, fruit teas, sandwiches, street-food snacks like siomai and pancit canton, 
                and affordable rice meals.`
            },
            {
                image: "images/PhotoGallery/Lapuz/Dina[Lapuz].jpeg",
                title: "Dina eatery",
                description: `Dina Eatery. A casual, cash-only local carinderia on Everlasting St., Lapuz, well-liked by residents 
                for affordable home-style Filipino dishes, especially its beef kansi, beefsteak, and pinakbet.`
            },
            {
                image: "images/PhotoGallery/Lapuz/Bario[Lapuz].jpeg",
                title: "Bario tapsilogan & Grill Chicken Inasal",
                description: `Bario tapsilogan & Grill Chicken Inasal. A neighborhood grill and tapsilogan in Zone 3, Barrio Obrero, 
                Lapuz, specializing in Ilonggo-style Chicken Inasal, fried bangus, pork sisig, and hearty silog rice meals.`
            },
            {
                image: "images/PhotoGallery/Lapuz/Yard[Lapuz].jpeg",
                title: "Yard Cafe & Bistro",
                description:`Yard Cafe & Bistro is a casual, cozy neighborhood hangout in Zone 7, Don Esteban Lapuz, Iloilo City, 
                known for affordable food, coffee, drinks, and live music or jam sessions. They Serves breakfast, brunch, lunch, 
                dinner, dessert, quick bites, and small plates, alongside coffee, cocktails, beer, and happy hour drinks.`
            }
        ]
    }
];


// HOME BUTTON
function showHome() {
    document.getElementById("content").innerHTML = `
        <section>
            <h2 style="text-align: center;">Welcome to Iloilo!</h2>

            <hr>

            <p>
                Welcome to ILoLicious!
                Explore the seven districts of Iloilo City
                and learn about their unique cuisines,
                traditions, and local specialties.
            </p>

            <hr>

            <h2 style="text-align: center;">About</h2>

            <p>
                ILoLicious is your guide to discovering the unique flavors,
                traditions, and local specialties across the seven districts
                of Iloilo City. From the famous La Paz Batchoy to the historic
                streets of Molo, we celebrate the rich food culture and heritage
                that make each district special.
            </p>

            <p>
                Explore each district to find embedded maps, photo galleries,
                and signature dishes waiting to be discovered.
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

        // Generate gallery items with unique images and descriptions for each district
    let galleryHTML = '';
    district.gallery.forEach((item, i) => {
        galleryHTML += `
            <div class="gallery-item">
                <img src="${item.image}" alt="${district.name} gallery image ${i + 1}" class="gallery-img" loading="lazy" onerror="this.hidden=true">
                <h4 class="gallery-title">${item.title}</h4>
                <p class="gallery-desc">${item.description}</p>
            </div>
        `;
    });

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

            <!-- Embedded Google Map of the district -->
            <div class="map-container">
                <iframe
                    width="100%"
                    height="350"
                    style="border:0; border-radius: 15px;"
                    loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade"
                    src="${district.mapEmbedUrl || `https://www.google.com/maps?q=${encodeURIComponent(district.name + ', Iloilo City, Philippines')}&output=embed`}"
                    allowfullscreen
                    aria-label="Google Map of ${district.name}">
                </iframe>
            </div>

            <!-- Photo Gallery: 7 placeholders -->
            <h3>Photo Gallery</h3>
            <div class="gallery">
                ${galleryHTML}
            </div>

        </section>
    `;

    document.getElementById("content").scrollIntoView({
        behavior: "smooth"
    });
}


showHome();
