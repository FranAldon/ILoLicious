// Set a gallery item's optional locationLink to customize its "View location" destination.
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
                link: "https://www.facebook.com/p/Alicias-Special-Batchoy-61553693961401/",
                locationLink:"https://maps.app.goo.gl/cf62Cd97fxEgZm619",
                description: `Alicia's Special Batchoy is a favorite local eatery in Iloilo known for its tasty noodle soup
                            and classic snacks like puto and empanadas. It has several branches across Iloilo City,
                            including a popular spot in La Paz, making it a great place to enjoy warm, comforting Ilonggo food.`,
                category: "meals", 
            },
            {
                image: "images/PhotoGallery/Lapaz/MadgeCafe[Lapaz].jpeg",
                title: "Madge Cafe",
                link: "https://www.facebook.com/madgecafeatriaofficialpage",
                locationLink:"https://maps.google.com/?q=Madge+Cafe+Iloilo+City",
                description: `Madge Cafe at La Paz Public Market is the original 1940s coffee shop known for traditional
                        pre-war brewed local coffee and classic breakfast fare, while the Shops at Atria location pairs that
                        heritage coffee with a modern retail setting, cakes, and evening hours, and the Iloilo Central Market branch
                        offers a casual market-side stop for coffee, rice meals, and cold treats.`
            },
            {
                image: "images/PhotoGallery/Lapaz/CharlieBurger[Lapaz].jpeg",
                title: "Charlie's Burgers",
                link: "https://www.facebook.com/charlies.ilo",
                locationLink:"https://maps.app.goo.gl/gTYJB1N5SqAxW8yd7",
                description: `A local burger stand in La Paz serving juicy burgers
                            with a variety of toppings and sauces.`
            },
            {
                image: "images/PhotoGallery/Lapaz/Deco[Lapaz].jpeg",
                title: "Deco's Original La Paz Batchoy Since 1938",
                locationLink:"https://maps.app.goo.gl/gEyN686W2u8e2rJ89",
                link: "https://www.facebook.com/profile.php?id=100075636563464",
                description: `A historic Ilonggo eatery at 18 Huervana St, La Paz Public Market, Iloilo City, widely recognized as the
                        birthplace of La Paz batchoy.Traditional La Paz Batchoy. Serves steaming bowls of fresh round miki noodles in a rich pork,
                        beef, and bone marrow broth seasoned with guinamos (shrimp paste), topped generously with pork loin, liver, innards, toasted garlic,
                        spring onions, and crushed chicharon`
            },
            {
                image: "images/PhotoGallery/Lapaz/BBW[Lapaz].jpeg",
                title: "Big Bad Bowls",
                link: "https://bigbadbowls.com/contact-us/",
                locationLink:"https://maps.app.goo.gl/Q4jDAsULLdku9PnP7",
                description: `A casual, homegrown Asian fusion restaurant in Iloilo City known for serving hearty, budget-friendly rice and
                        noodle bowls made with family recipes, fresh ingredients, and house-blended chili sauces. Features filling rice toppings
                        including Big Bad Tapa, Kansi Flakes, Sisig, Beef Pares, Bibimbowl, Donkkaesu, and Thai Basil Pork alongside pan-fried gyoza,
                        lumpiang shanghai, and Milky Gulaman.`
            },
            {
                image: "images/PhotoGallery/Lapaz/Ref[Lapaz].jpeg",
                title: "Francisco's Refreshment",
                link: "https://www.facebook.com/fracs1975",
                locationLink:"https://maps.app.goo.gl/Gk8wwKMVVtvqs8Lz5",
                description: `Long-running, casual Filipino eatery and catering service in La Paz, Iloilo City, that has been serving Ilonggos since 1975.
                        Located along Luna Street directly across from West Visayas State University, it is known for homestyle Ilonggo and Filipino comfort
                        food as well as classic desserts. Popular dishes include bakareta (beef stew), fried chicken, fish salpicao, bihon guisado, valenciana,
                        and local soups.`
            },
            {
                image: "images/PhotoGallery/Lapaz/Net[Lapaz].jpeg",
                title: "Netong's original special la paz batchoy",
                link: "https://www.facebook.com/netongsrestaurant",
                locationLink:"https://www.google.com/maps/place//data=!4m2!3m1!1s0x33aee513a85604db:0xf422f9f5ce9bfc13",
                description: `A foundational stall inside Public Market, widely recognized for defining classic La Paz batchoy flavor profile.
                        They are known for La Paz batchoy, batchoy chicharon, sotanghon batchoy, puto and La Paz siopao.`
            },
            {
                image: "images/PhotoGallery/Lapaz/Green[Lapaz].jpg",
                title: "Greenhouse Cafe",
                link: "https://www.facebook.com/share/18WNj7sbmt/",
                locationLink:"https://maps.app.goo.gl/HyTe5pU21YjgyFKKA?g_st=ac",
                description: `A neighborhood café and restaurant offering meals, snacks, coffee, and refreshing drinks. 
                It has indoor and outdoor seating, making it a casual place for students and groups.`
            },
            {
                image: "images/PhotoGallery/Lapaz/Inggo[Lapaz].jpg",
                title: "Inggo's Original La Paz Batchoy",
                link: "https://www.facebook.com/share/1GtUpzdMb4/",
                locationLink:"https://maps.app.goo.gl/V2A7SQRT28dTvq2PA?g_st=ac",
                description: `A historic batchoy establishment associated with Domingo Inggo Lozada and the early beginnings of La Paz Batchoy. 
                It serves traditional noodle soup with pork, broth, and different noodle choices.`
            },
            
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
                link: "https://aquariumcafe.com.ph/",
                locationLink:"https://maps.app.goo.gl/WGEbFk9TrEEgGyv87",
                description: `Aquarium Cafe & Lounge is a unique themed restaurant in Jaro, Iloilo City,
                 where you can enjoy good food and coffee surrounded by giant fish tanks and live animals.
                 Along with colorful marine life, the cafe has indoor exhibits featuring reptiles, exotic birds,
                 and even big cats like tigers, making it a fun dining spot for families and animal lovers.`
            },
            {
                image: "images/PhotoGallery/Jaro/kammnsosiiii.jpg",
                title: "Grace Kansi House",
                link: "https://www.facebook.com/profile.php?id=100034506265837",
                locationLink:"https://maps.app.goo.gl/3i5rUQrrkEEYcbAR7",
                description: `Grace Kansi House is a budget-friendly soup shop in Jaro, Iloilo City,
                known for serving hearty, cauldron-cooked kansi (sour and savory beef soup) in a casual
                setting with warm service, dine-in/takeout options, and free street parking.`
            },
            {
                image: "images/PhotoGallery/Jaro/biscocho.jpg",
                title: "Original Biscocho Haus",
                link: "https://www.facebook.com/OriginalBiscochoHaus",
                locationLink:"https://www.google.com/maps/place//data=!4m2!3m1!1s0x33aee5208b71e771:0x22b61283eb65c9e",
                description: `Jaro flagship pasalubong destination ,having popularized iloilo's signature
                twice baked buttered bread known as biscocho and chewy butterscotch bars since 1975.`
            },
            {
                image: "images/PhotoGallery/Jaro/Original De O Campo Barquillos.png",
                title: "Original De O Campo Barquillos",
                link: "https://www.instagram.com/deocampobarquillos/?hl=en",
                locationLink:"https://maps.app.goo.gl/RjrSAvnL8uSiLwxv6",
                description: `Jaro Historic wafer maker, crafting paper thin rolled Barquillos using
                 traditional cast iron molds since 1896. They also served Piyaya, ube piyaya and barquiteros.`
            },
            {
                image: "images/PhotoGallery/Jaro/creamhorn.jpg",
                title: "iCreamhorn",
                link: "https://web.facebook.com/profile.php?id=61564620604367",
                locationLink:"https://maps.app.goo.gl/Qttm1uHWy2kKmDE96",
                description: `iCreamhorn (formerly known as Margec's Cream Horn) is an Iloilo bakery
                known for its cone-shaped Danish puff pastries filled with rich, creamy custard. Originally
                founded in 1987 and taken over by Francis Campos in 2017, it is a popular local treat and pasalubong.`
            },
            {
                image: "images/PhotoGallery/Jaro/casa sinugba.jpg",
                title: "Casa Sinugba",
                link: "https://www.facebook.com/profile.php?id=61590718220142",
                locationLink:"https://maps.app.goo.gl/sv4FgEc8K6XdCoZp6",
                description: `Casa Sinugba is a Filipino restaurant in Jaro, Iloilo City (opened June 2026) serving
                grilled specialties, seafood, and Ilonggo comfort food in a spacious setting. Their specialties are
                the Crispy pork sisig, kansi (including sizzling kansi), grilled pecho, chili garlic shrimp, and
                tanigue.`
            },
            {
                image: "images/PhotoGallery/Jaro/Screenshot 2026-11-23 114416.png",
                title: "Rgies PH",
                link: "https://rgies.ph/",
                locationLink:"https://maps.app.goo.gl/gX8k5C1nSLD5FRZY8",
                description: `Rgies PH (also known as Rgies Delicacies) is a wholesale bakery and pasalubong brand
                based in Iloilo City, Philippines, best known for pioneering flavored butterscotch squares.
                They are best known for their chewy butterscotch squares—specifically pioneering the Mango Bits variant
                alongside Original Cashew, Dates, Choco Oats, Almonds, and Coffee. They also produce Yema Dulce de Leche,
                Butterscotti (a biscuit version of butterscotch), and cookies.`
            },
            {
                image: "images/PhotoGallery/Jaro/MC[Jaro].jpg",
                title: "M&C Bakehouse",
                link: "https://www.facebook.com/MCBAKEHOUSE#",
                locationLink:"https://maps.app.goo.gl/LdsTMxfrZxaYauVH6?g_st=ac",
                description: `A neighborhood bakery offering freshly baked products and local-style pasalubong. 
                Its almond biscocho and polvoron are among the products mentioned by customers.`
            },
            {
                image: "images/PhotoGallery/Jaro/Pj[Jaro].jpg",
                title: "PJ Delicacies",
                link: "https://www.facebook.com/PJDelicacies",
                locationLink:"https://maps.app.goo.gl/czr6g4boXrjYLGtu6?g_st=ac",
                description: `A local bakery and pasalubong shop offering Ilonggo delicacies and baked treats. 
                It is known for its barquillos, including goat's milk barquillos, and other take-home products.`
            },
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
                title: "Baking studio by Theo's",
                link: "https://www.facebook.com/theosrestaurantbakery/",
                locationLink:"https://maps.app.goo.gl/L7HnSk9cs29uMEcD7",
                description: `Baking studio by Theo's is a modern cafe, bakery, and restaurant at
                North Grove in Molo, Iloilo City. It offers a cozy, green space where you can
                enjoy a wide variety of food, blending classic Filipino and Ilonggo delicacies
                with international dishes from around the world. Whether you are stopping by for
                a fresh baked good, local inspired coffee, wholesome meal, or evening drinks.`
            },
            {
                image: "images/PhotoGallery/Molo/moloobollsz.jpg",
                title: "Kap Ising's Pancit Molo",
                link: "https://pancitmolo.com/",
                locationLink:"https://maps.app.goo.gl/sAimz2WeRrFBXj28A",
                description: `The district's most famous spot for authentic Pancit Molo, served
                alongside fresh lumpia, potato empanada, and frozen packs to take home`
            },
            {
                image: "images/PhotoGallery/Molo/Panaderia de Molo.png",
                title: "Panaderia de Molo",
                link: "https://panaderiademolo.com/",
                locationLink:"https://www.google.com/maps/place//data=!4m2!3m1!1s0x33aee51335846e57:0xd0a7b8ced3323e51",
                description: `Oldest heritage bakeries in the Visayas, continuously baking
                traditional Spanish- influenced biscuits. They served their specialties
                like Galleys, Roquillos, biscocho de molo, lengua de Gato and polvoron.`

            },
            {
                image: "images/PhotoGallery/Molo/mamas kitcheren products.png",
                title: "Mama's Kitchen and Food Products",
                link: "https://www.facebook.com/mamaskitcheniloilo",
                locationLink:"https://www.google.com/maps/place//data=!4m2!3m1!1s0x33aef074ce2a056f:0x4d96e9d9e2ccc0f0",
                description: `Bakehouse originating from molo-arevalo border, famous for
                gourmet fruit and nut pastries. Such as mango chewies, cashew crunchies,
                Molo pastel, biscuit, tsokolate crunchies, santan spread , tablea bites
                and Dulce de leche.`
            },
            {
                image: "images/PhotoGallery/Molo/lechon liempo ramboys.jpg",
                title: "Ramboy's",
                link: "https://www.facebook.com/faithcomandante",
                locationLink:"https://maps.app.goo.gl/esJQkhQAGHRZS7wT8",
                description: `Traditional Filipino grill and lechonan. They are known for
                their Crispy-skinned grilled pork belly (lechon liempo) and roasted chicken
                (lechon manok), alongside Filipino group dishes like pansit and chopsuey.`
            },
            {
                image: "images/PhotoGallery/Molo/kofi and company.png",
                title: "Kofi & Kompany",
                link: "https://booky.ph/biz/kofi-kompany-molo-boulevard/menu/",
                locationLink:"https://maps.app.goo.gl/dUgL5NX9KEniDFBy6",
                description: `Specialty coffee, pastries, and all-day brunch.
                They are known for Espresso drinks, frappes, thick Epicookies,
                soufflé pancakes, pasta, and Filipino breakfast plates.`
            },
            {
                image: "images/PhotoGallery/Molo/Vegan-Batchoy-4.jpg",
                title: "Batchoy Ilonggo Foodhaus",
                link: "http://www.batchoy-ilonggo-foodhaus.business/menu",
                locationLink:"https://maps.app.goo.gl/fV6fwTm1T8j8pQLr7",
                description: `Ilonggo comfort food and noodle soups. They are known for their
                Signature La Paz-style batchoy (including Batchoy Overload and seafood variations)
                as well as hearty bowls of arroz caldo and goto.`
            },
            {
                image: "images/PhotoGallery/Molo/Casa[Molo].jpg",
                title: "Casa De Daban",
                link: "https://maps.app.goo.gl/fV6fwTm1T8j8pQLr7",
                locationLink:"https://maps.app.goo.gl/GE6BT7o4exqBMQ5h8?g_st=ac",
                description: `A casual restaurant serving Ilonggo-style grilled chicken, liempo, 
                brick-oven pizza, and burgers. It offers a homey atmosphere and a combination 
                of local and modern food.`
            },
            {
                image: "images/PhotoGallery/Molo/Rella[Molo].jpg",
                title: "Rella's House of Lumpia",
                link: "https://www.facebook.com/share/1FDiH1JhNn/",
                locationLink:"https://maps.app.goo.gl/ShCgeqJmmVv418mu6?g_st=ac",
                description: `A food establishment specializing in freshly prepared lumpia and 
                sizzling Filipino dishes. It offers savory snacks and meals for visitors.`
            },
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
                link: "https://www.facebook.com/8VIllaBeach/",
                locationLink:"https://maps.app.goo.gl/5a5sjNpDdAKJXbB57",
                description: `8 Villa Beach House is a laid-back beachfront restaurant in Villa Arevalo
                known for fresh seafood and classic Ilonggo dishes right on the sand. It is a revival of
                one of Iloilo's earliest coastal restaurants from the early 1900s, offering an old-school
                beach house vibe, sunset views, and occasional live music on weekends. Popular dishes
                include grilled boneless bangus and seafood bilaos, and the venue is both family-friendly
                and pet-friendly.`
            },
            {
                image: "images/PhotoGallery/VillaArevallo/tatoys manokan and resto.png",
                title: "Tatoy's Manokan and Seafood Restaurant",
                link: "https://tatoysmanokan.com/",
                locationLink:"https://maps.app.goo.gl/CjDxdvTMHA564zc58",
                description: `Tatoy's Manokan and Seafood Restaurant is a heritage Filipino dining establishment
                founded in the early 1970s by Honorato "Tiyo Tatoy" Espinosa. What began as a humble three-table
                nipa shanty operating on weekends evolved over decades into a widely recognized culinary destination
                known for authentic Ilonggo flavors, charcoal-roasted native chicken, and fresh seafood.`
            },
            {
                image: "images/PhotoGallery/VillaArevallo/breakthrough resto.png",
                title: "Breakthrough Restaurant",
                link: "https://breakthroughrestaurants.com/",
                locationLink:"https://maps.app.goo.gl/GvzYRBgtoZKFYauP7",
                description: `Breakthrough Restaurant is a long-standing Ilonggo seafood and Filipino dining spot in
                Iloilo City, known for live-tank seafood and beachside dining. They served baked talaba, Diwali,
                aligue rice, sizzling crabmeat and kilawin na tanigue.`
            },
            {
                image: "images/PhotoGallery/VillaArevallo/balay na bato.png",
                title: "Advanceña-Camiña balay na Bato",
                link: "https://www.facebook.com/BalayNgaBatoIloilo/",
                locationLink:"https://www.google.com/maps/place//data=!4m2!3m1!1s0x33aef00b322ba773:0x67f8c92592c5625d",
                description: `1860's ancestral mansion where visitors enjoy thick tablea hot chocolate whisked
                with a traditional wooden batirol. Their signatures are tsokolate de batirol, biscocho dunkers,
                and Guimaras Mango Tart.`
            },
            {
                image: "images/PhotoGallery/VillaArevallo/arnels talabahan.png",
                title: "Arnel's Talabahan",
                link: "https://www.facebook.com/p/Arnels-Talabahan-100057528636929/",
                locationLink:"https://maps.app.goo.gl/JAxKUFTov2B79YXV8",
                description: `Arnel's Talabahan is a humble, beachfront eatery loved by locals for its fresh,
                affordable oysters and relaxing seaside views. It is a great spot to enjoy simple, home-style
                grilled meats and seafood right by the water.
                `
            },
            {
                image: "images/PhotoGallery/VillaArevallo/kikis caferesto.png",
                title: "Kiki's CafeResto",
                link: "https://www.facebook.com/p/Kikis-Cafe-Resto-100064076135447/",
                locationLink:"https://maps.app.goo.gl/bevgsSCBkr5f29F96",
                description: `Kiki's CafeResto is a peaceful, nature-filled neighborhood cafe and eatery known
                for its freshly baked pies and comforting rice meals. It is a relaxing spot to hang out with friends
                or family over coffee, dessert, and home-style Filipino food.`
            },
            {
                image: "images/PhotoGallery/VillaArevallo/cocina de uhong.png",
                title: "Cocina De Uhong",
                link: "https://www.facebook.com/profile.php?id=100070695023519",
                locationLink:"https://maps.app.goo.gl/uwinNrohkeFnsBad7",
                description: `Cocina de Uhong is a cozy, home-style eatery known for turning fresh, homegrown mushrooms
                into delicious Filipino and Western comfort food. It is a great spot to enjoy healthy, meatless twists
                on classic favorites like burgers, sisig, and even ice cream.`
            },
            {
                image: "images/PhotoGallery/VillaArevallo/Screenshot 2026-11-26 140538.png",
                title: "Trattoria D' Amore",
                link: "https://www.facebook.com/share/1EFimUYLVW/",
                locationLink:"https://maps.app.goo.gl/dU7mpzXkD23SF6DM8?g_st=ac",
                description: `Trattoria D'Amore is an Italian-inspired dining restaurant that offers a selection of 
                delicious dishes in a warm and welcoming atmosphere. It provides guests with a comfortable place to 
                enjoy flavorful meals, quality food, and a relaxing dining experience.`
            },
            {
                image: "images/PhotoGallery/VillaArevallo/Screenshot 2026-11-26 140716.pn",
                title: "Pabusog - Eat all you can",
                link: "https://www.facebook.com/share/1CNf6y2w5N/",
                locationLink:"https://maps.app.goo.gl/7QN6CzCSsuVLA2vT9?g_st=ac",
                description: `Pabusog – Eat All You Can is a buffet-style dining establishment that offers a variety 
                of food choices for customers who enjoy unlimited dining. It provides a selection of dishes that 
                allows guests to explore different flavors and enjoy satisfying meals in one place.`
            },
            
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
                link: "https://www.facebook.com/share/1CcZPhzGc1/?mibextid=wwXIfr",
                locationLink:"https://maps.app.goo.gl/edidB8Pm1gywrNwt5",
                description: `Lars Buko Batchoy is a Filipino eatery founded in 2016 by Larry "Lars" Abanilla Lao and
                Primrose Paredes Uy, best known for blending traditional La Paz batchoy with young coconut (buko).
                What started as a modest, no-frills canteen gained widespread attention online and in local food media
                for its creative spin on a classic noodle soup .`
            },
            {
                image: "images/PhotoGallery/Mandurriao/Jo’sChick[Man].jpg",
                title: "Jo’s Chicken Inato",
                link: "https://www.facebook.com/JosChickenInato/",
                locationLink:"https://maps.app.goo.gl/yymmjhPXu4oKrY2v9",
                description: `Jo’s Chicken Inato is a casual, budget-friendly Filipino restaurant known for its tasty,
                charcoal-grilled chicken barbecue and unlimited rice. It is a great everyday spot for families and groups
                to enjoy a hearty meal in a relaxed setting. They also serve other classic Filipino favorites like grilled
                bangus, sizzling dishes, and fresh lumpia. `
            },
            {
                image: "images/PhotoGallery/Mandurriao/Pedb[Man].jpg",
                title: "Pedbacs Restaurant",
                link: "https://www.facebook.com/pedbacs",
                locationLink:"https://maps.app.goo.gl/czyuviq757UCYNEs6",
                description: `Pedbacs Restaurant in Mandurriao, Iloilo City specializes in homestyle Filipino comfort food,
                highlighted by its Kanding Sarsyado (goat meat stew) alongside classics like pork kare-kare, all-meat dinuguan,
                callos, and all-day silog breakfasts`
            },
            {
                image: "images/PhotoGallery/Mandurriao/PUNOT[Man].jpeg",
                title: "PUNOT",
                link: "https://www.facebook.com/punotrestaurant",
                locationLink:"https://maps.app.goo.gl/PsdWEoSg5zRBxtc37",
                description: `It is located along the Iloilo River Esplanade and specializes in elevated, contemporary
                interpretations of traditional Western Visayas Heritage dishes.They serve signature dishes such as sizzling KBL,
                crispy dinuguan kadyos humba fusion, smoked batwan pork ribs, crab fat pasta, seafood paella, and tuna panga inasal. `
            },
            {
                image: "images/PhotoGallery/Mandurriao/MangoTree[Man].jpeg",
                title: "The Mango Tree Restaurant and Maridel's",
                link: "https://www.facebook.com/themangotreerestaurant",
                locationLink:"https://www.google.com/maps/place//data=!4m2!3m1!1s0x33aefad2830e635d:0x98041036d4840e67",
                description: `It showcases modern Ilonggo dining, artisanal cakes, and innovative dishes highlighting regional mangoes
                and citrus.Signature Foods Sourced Here: Guimaras Mango Pizza, Mango Soft Serve, Calamansi Tart, Matcha Cream Horns,
                Grilled Pork Tomahawk Inasal, and Lechon Roll.`
            },
            {
                image: "images/PhotoGallery/Mandurriao/Balay[Man].jpeg",
                title: "Balay Esplanade",
                link: "https://www.facebook.com/balayesplanade",
                locationLink:"https://maps.app.goo.gl/7BP7WP891GvyPK4z9",
                description:`Balay Esplanade is a casual Filipino restaurant located in the Smallville Complex in Mandurriao, Iloilo City.
                Known for its home-cooked Filipino comfort food, it offers generous, shareable portions suited for families and groups in a
                relaxed setting right along the Iloilo River Esplanade area.`
            },
            {
                image: "images/PhotoGallery/Mandurriao/Mr.Knuc[Man].jpeg",
                title: "Mr. Knuckles Crispy Pata",
                link: "https://www.facebook.com/mrknucklescrispypata",
                locationLink:"https://maps.app.goo.gl/JPcGBRbKCSMEyxcc9",
                description: `Mr. Knuckles Crispy Pata is a casual, family-friendly restaurant in Mandurriao, Iloilo City, specializing in
                Filipino crispy pata alongside classic comfort dishes and soup. Plated Restaurant is a quiet, cozy Asian restaurant in Iloilo City.
                This affordable spot is best known for big servings of tasty Asian comfort food with a touch of Ilonggo flavor. Their top dishes
                include Pad Thai, Vietnamese Grilled Pork Spare Ribs, and Sisig Pancit. It stands out in Iloilo's dining scene for mixing
                classic Asian favorites with warm Ilonggo hospitality and local twists. `
            },
            {
                image: "images/PhotoGallery/Mandurriao/Screenshot 2026-11-26 135742.png",
                title: "Beng's Seafood Restaurant",
                link: "https://www.facebook.com/share/1F5phrqzsR/",
                locationLink:"https://maps.app.goo.gl/YmTYxCoP4a4XsuJP6?g_st=ac",
                description: `Beng's Seafood Restaurant is a dining establishment that specializes in serving fresh seafood dishes and 
                delicious local favorites.`
            },
            {
                image: "images/PhotoGallery/Mandurriao/Screenshot 2026-11-26 135958.png",
                title: "Bite: Bakery & Kitchen",
                link: "https://www.facebook.com/share/1FyvvfNh5w/",
                locationLink:"https://maps.app.goo.gl/axcTZ57emDC6JUVE8?g_st=ac",
                description: `Bite: Bakery & Kitchen is a cozy dining establishment that combines the charm of a bakery with the comfort of a 
                kitchen. It offers a variety of freshly baked goods, delicious meals, and satisfying treats suitable for breakfast, snacks, 
                or casual dining.`
            },
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
                title: "Roberto's",
                link: "https://robertosiloilo.com/",
                locationLink:"https://maps.app.goo.gl/eyzq8ecrtngYbKXD9 ",
                description: `Roberto’s is a legendary Chinese-Filipino family restaurant in Iloilo City, Philippines,
                famous for its iconic oversized siopao. The restaurant serves a range of savory meals and snacks in a
                casual setting. Its menu includes steamed buns, meatballs, and other comfort foods. It also offers a simple
                option for a relaxed meal.`
            },
            {
                image: "images/PhotoGallery/CityProper/arozcaldo.png",
                title: "Luna's Arroz Caldo",
                link: "https://www.facebook.com/p/Lunas-Arrozcaldohan-100063972368459/",
                locationLink:"https://maps.app.goo.gl/G8qhJB8RTFDptQBMA",
                description: `Luna's Arroz Caldo is a classic, 24-hour Ilonggo comfort food eatery in Iloilo City Proper.
                Operating since 1967, this casual, budget-friendly spot on General Luna Street is famous for its steaming
                bowls of native chicken arroz caldo (Filipino rice porridge) paired with soft puto (rice cake), alongside
                all-day silog breakfast meals and short orders.`
            },
            {
                image: "images/PhotoGallery/CityProper/Betty's Ilonggo Table and Bakehouse.png",
                title: "Betty's Ilonggo Table and Bakehouse",
                link: "https://www.facebook.com/bettysiloilo",
                locationLink:"https://maps.app.goo.gl/9TMh4YH9vPPeG5uN7",
                description: `Betty's Ilonggo Table and Bakehouse is a Filipino restaurant and bakery in Iloilo City celebrating
                traditional Ilonggo home-style cooking like kansi, KBL, palabok, and local baked goods.`
            },
            {
                image: "images/PhotoGallery/CityProper/master chua haus.png",
                title: "Master Chua Food Haus",
                link: "https://www.facebook.com/pages/Master-Chua-Food-Haus/229944697461607",
                locationLink:"https://maps.app.goo.gl/NDu3mTxMXPm1FZSZ8",
                description: `Chinese- Filipino culinary heritage of downtown Iloilo, such as dumplings, beef pares, pata Tim,
                pork hamonado, siomai, and tokwa't baboy.`
            },
            {
                image: "images/PhotoGallery/CityProper/oka bakery.png",
                title: "OKA Bakery",
                link: "https://www.facebook.com/p/OKA-Bakery-iloilo-61578982064426/",
                locationLink:"https://maps.app.goo.gl/exCDRL8sodnm2jrr5",
                description: `They serve different kinds of  local pastries such as Calle Real pan de sal, pan de Rosa,
                empanada de Calle Real, toasted siopao, ibajay-style fried chicken,chicharon,bulaklak, classic halo halo,
                leche flan, and tsokolate`
            },
            {
                image: "images/PhotoGallery/CityProper/iloggo lauya.png",
                title: "Casa Maruja",
                link: "https://www.facebook.com/profile.php?id=100091540254407&sk=reels_tab",
                locationLink:"https://maps.app.goo.gl/mWpmPWzQEJfwcoQm8",
                description: `Casa Maruja is a charming, old-world heritage home turned into a cozy, casual restaurant.
                It offers a warm, nostalgic atmosphere where families and visitors can enjoy authentic, home-style Ilonggo
                dishes like their famous Lauya at affordable prices.`
            },
            {
                image: "images/PhotoGallery/CityProper/Jr. Rawit's Native Chicken Lechon.png",
                title: "Jr. Rawit's Native Chicken Lechon",
                link: "https://www.facebook.com/p/Jr-Rawits-Native-Lechon-Manok-100064114115157/",
                locationLink:"https://maps.app.goo.gl/xLPNnEZb28L9Cmw77",
                description: `A no-frills, local eatery in Iloilo City Proper famous for its charcoal-roasted native chicken.
                Located on Rizal Street near Iloilo Central Market, this budget-friendly spot specializes in flavorful,
                smoky lechon manok (roasted native chicken) served fresh off the spit with steamed rice and their signature
                spiced native vinegar.`
            },
            {
                image: "images/PhotoGallery/CityProper/Screenshot 2026-11-26 134043.png",
                title: "Mestizo",
                link: "https://www.facebook.com/share/19tsH9oX1U/ ",
                locationLink:"https://maps.app.goo.gl/LiaGDGV1ZzobegsH6?g_st=ac",
                description: `Mestizo is a restaurant that offers a unique dining experience by showcasing a combination 
                of Filipino and Spanish-inspired cuisine. It serves flavorful dishes prepared with a blend of 
                 recipes and modern culinary influences.`
            },
            {
                image: "images/PhotoGallery/CityProper/Screenshot 2026-11-26 134652.png",
                title: "Giuseppe Iloilo",
                link: "https://www.facebook.com/share/18ahr7Dta3/ ",
                locationLink:"https://maps.app.goo.gl/FA5u4NBhEXjkh2g46?g_st=ac ",
                description: `Giuseppe Iloilo is an Italian restaurant that offers a variety of authentic Italian-inspired 
                dishes, including pasta, pizza, and other flavorful specialties. `
            },
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
                link: "https://www.facebook.com/muelledeliandrestaurant/",
                locationLink:"https://maps.app.goo.gl/5ajdS2ss8akpzRW66",
                description: `Muelle Deli and Restaurant is a cozy, upscale riverside restaurant in Lapuz, Iloilo City, known
                for its scenic river views, live evening music, house-made sausages, steaks, and Filipino-international fusion
                dishes. It offers both air-conditioned indoor seating and breezy outdoor dining along the Iloilo River, making
                it a popular spot for relaxed family dinners, date nights, and casual drinks. `
            },
            {
                image: "images/PhotoGallery/Lapuz/Sabya[Lapuz].jpeg",
                title: "Sabya Kitchen",
                link: "https://www.facebook.com/profile.php?id=61564820136276",
                locationLink:"https://maps.app.goo.gl/smAf6TrWNLqnBsRh9",
                description: `Sabya Kitchen is a progressive Filipino restaurant along the Iloilo River in Lapuz, Iloilo City,
                offering a cozy riverfront setting. From the team behind Jo’s Chicken Inato, it serves modern, elevated takes
                on Ilonggo, Cebuano, and Filipino comfort food, including standout dishes like Osso Buco Kaldereta, Callos Ilonggo,
                aligue tortang talong, and creative drinks such as the Budbud Latte.`
            },
            {
                image: "images/PhotoGallery/Lapuz/Sisigan[Lapuz].jpg",
                title: "Sisigan sa Lapuz by KL Food Station and Digz Batchoy",
                link: "https://www.facebook.com/ByKLmoto",
                locationLink:"https://maps.app.goo.gl/jV84jT8vzVTHfLFc7",
                description: `Anchors to Lapuz neighborhood dining scene They served hearty sizzling plates, grilled fish and portside
                comfort food. `
            },
            {
                image: "images/PhotoGallery/Lapuz/3rdSt[Lapuz].jpg",
                title: "3rd St. Coffee",
                link: "https://www.facebook.com/profile.php?id=61559810117517",
                locationLink:"https://maps.app.goo.gl/pq85Xm9pdCe2UAsz6",
                description: `A cozy, budget-friendly neighborhood cafe on Sampaguita St. (behind Assumption of Our Lady Church in
                Bo. Obrero, Lapuz) serving iced coffees, fruit teas, sandwiches, street-food snacks like siomai and pancit canton,
                and affordable rice meals.`
            },
            {
                image: "images/PhotoGallery/Lapuz/Dina[Lapuz].jpeg",
                title: "Dina eatery",
                link: "https://www.facebook.com/profile.php?id=61591838795839",
                locationLink:"https://maps.app.goo.gl/X6ny2pyQraZ9Ps8a7",
                description: `Dina Eatery. A casual, cash-only local carinderia on Everlasting St., Lapuz, well-liked by residents
                for affordable home-style Filipino dishes, especially its beef kansi, beefsteak, and pinakbet.`
            },
            {
                image: "images/PhotoGallery/Lapuz/Bario[Lapuz].jpeg",
                title: "Bario tapsilogan & Grill Chicken Inasal",
                link: "https://www.facebook.com/profile.php?id=61576420851493",
                locationLink:"https://maps.app.goo.gl/x8rudG1ESg2JzWw88",
                description: `Bario tapsilogan & Grill Chicken Inasal. A neighborhood grill and tapsilogan in Zone 3, Barrio Obrero,
                Lapuz, specializing in Ilonggo-style Chicken Inasal, fried bangus, pork sisig, and hearty silog rice meals.`
            },
            {
                image: "images/PhotoGallery/Lapuz/Yard[Lapuz].jpeg",
                title: "Yard Cafe & Bistro",
                link: "https://www.facebook.com/profile.php?id=61555963571209",
                locationLink:"https://maps.app.goo.gl/LMEFCFYjUeZQPHQz5",
                description:`Yard Cafe & Bistro is a casual, cozy neighborhood hangout in Zone 7, Don Esteban Lapuz, Iloilo City,
                known for affordable food, coffee, drinks, and live music or jam sessions. They Serves breakfast, brunch, lunch,
                dinner, dessert, quick bites, and small plates, alongside coffee, cocktails, beer, and happy hour drinks.`
            },
            {
                image: "images/PhotoGallery/Lapuz/Screenshot 2026-11-26 135153.png",
                title: "FORUM Rooftop Dining and Lounge",
                link: "https://www.facebook.com/share/1GySMevkgy/",
                locationLink:"https://maps.app.goo.gl/sc7fyATkLyroeLgW8?g_st=ac",
                description: `Forum Rooftop Dining and Lounge is a dining and entertainment establishment that offers a relaxing 
                rooftop experience with a welcoming ambiance.`
            },
            {
                image: "images/PhotoGallery/Lapuz/Screenshot 2026-11-26 135502.png",
                title: "Ponsyon by breakthrough",
                link: "https://www.facebook.com/share/1Jbe1SZxSx/",
                locationLink:"https://maps.app.goo.gl/dHNEHu2L7q3Uo9N89?g_st=ac",
                description: `Ponsyon by Breakthrough is an in-city Filipino and seafood restaurant serving traditional Ilonggo 
                comfort food as a sister concept to the longtime Breakthrough Restaurants brand.`
            },
        ]
    }
];

// ============================================================================
// Reviews & Feedback (persisted in localStorage)
// ============================================================================
const REVIEW_STORAGE_KEY = "ilolicious_reviews";

let currentLightboxDistrictIndex = null;
let currentLightboxItemIndex = null;
let editingReviewId = null;

let reviewsMap = new Map(); // key "${districtIndex}-${itemIndex}" => review[]

function reviewStorageKey(districtIndex, itemIndex) {
    return `${districtIndex}-${itemIndex}`;
}

function loadReviews() {
    try {
        const raw = localStorage.getItem(REVIEW_STORAGE_KEY);
        if (raw) {
            reviewsMap = new Map(Object.entries(JSON.parse(raw)));
        }
    } catch (e) {
        console.warn("ILoLicious: failed to load reviews", e);
        reviewsMap = new Map();
    }
}

function saveReviews() {
    try {
        localStorage.setItem(
            REVIEW_STORAGE_KEY,
            JSON.stringify(Object.fromEntries(reviewsMap))
        );
    } catch (e) {
        console.warn("ILoLicious: failed to save reviews", e);
    }
}

function getReviews(districtIndex, itemIndex) {
    return reviewsMap.get(reviewStorageKey(districtIndex, itemIndex)) || [];
}

function addReview(districtIndex, itemIndex, review) {
    const key = reviewStorageKey(districtIndex, itemIndex);
    const list = getReviews(districtIndex, itemIndex);
    list.push(review);
    reviewsMap.set(key, list);
    saveReviews();
}

function updateReview(districtIndex, itemIndex, reviewId, newText) {
    const key = reviewStorageKey(districtIndex, itemIndex);
    const list = getReviews(districtIndex, itemIndex);
    const review = list.find((r) => r.id === reviewId);
    if (!review) return false;
    review.text = newText;
    review.updatedAt = new Date().toISOString();
    reviewsMap.set(key, list);
    saveReviews();
    return true;
}

function deleteReview(districtIndex, itemIndex, reviewId) {
    const key = reviewStorageKey(districtIndex, itemIndex);
    const list = getReviews(districtIndex, itemIndex);
    const filtered = list.filter((r) => r.id !== reviewId);
    if (filtered.length === list.length) return false;
    reviewsMap.set(key, filtered);
    saveReviews();
    return true;
}

function createReviewId() {
    return Date.now().toString(36) + Math.random().toString(36).slice(2, 8);
}

function formatReviewDate(isoString) {
    const d = new Date(isoString);
    return (
        d.toLocaleDateString(undefined, {
            year: "numeric",
            month: "short",
            day: "numeric",
        }) +
        " at " +
        d.toLocaleTimeString(undefined, { hour: "2-digit", minute: "2-digit" })
    );
}

// Resolve which photo the lightbox opened from so reviews stay scoped to that photo.
function findGalleryItemIndex(title, description) {
    const districtIndices =
        activeIndex != null ? [activeIndex] : districts.map((_, index) => index);
    for (const districtIndex of districtIndices) {
        const district = districts[districtIndex];
        const itemIndex = district.gallery.findIndex((item) => {
            if (item.title !== title) return false;
            return (
                item.description === description ||
                description.endsWith(` \u2022 ${item.description}`)
            );
        });
        if (itemIndex !== -1) {
            return { districtIndex, itemIndex };
        }
    }
    return null;
}

function renderReviews() {
    const listEl = document.getElementById("reviewList");
    if (!listEl) return;

    const reviews =
        currentLightboxDistrictIndex != null
            ? getReviews(currentLightboxDistrictIndex, currentLightboxItemIndex)
            : [];

    if (reviews.length === 0) {
        listEl.innerHTML = `<p class="empty-reviews">No reviews yet. Be the first to share your feedback!</p>`;
        return;
    }

    listEl.innerHTML = reviews
        .map((review) => {
            const isEditing = editingReviewId === review.id;
            const dateStr = formatReviewDate(review.createdAt);
            const updatedStr =
                review.updatedAt && review.updatedAt !== review.createdAt
                    ? ` <span style="font-weight:600;">(edited)</span>`
                    : "";

            if (isEditing) {
                return `
                <div class="review-card review-card--editing">
                    <div class="review-meta">
                        <span class="review-author">${escapeHtml(review.author)}</span>
                        <span>${escapeHtml(dateStr)}${updatedStr}</span>
                    </div>
                    <textarea class="review-edit-text" rows="3">${escapeHtml(
                        review.text
                    )}</textarea>
                    <div class="review-actions">
                        <button type="button" data-review-id="${review.id}" data-review-action="save" class="review-save-btn">Save</button>
                        <button type="button" data-review-id="${review.id}" data-review-action="cancel" class="review-cancel-btn">Cancel</button>
                    </div>
                </div>`;
            }

            return `
            <div class="review-card">
                <div class="review-meta">
                    <span class="review-author">${escapeHtml(review.author)}</span>
                    <span>${escapeHtml(dateStr)}${updatedStr}</span>
                </div>
                <p class="review-text">${escapeHtml(review.text)}</p>
                <div class="review-actions">
                    <button type="button" data-review-id="${review.id}" data-review-action="edit" class="review-edit-btn">Edit</button>
                    <button type="button" data-review-id="${review.id}" data-review-action="delete" class="review-delete-btn">Delete</button>
                </div>
            </div>`;
        })
        .join("");
}

function initReviews() {
    loadReviews();

    const lightbox = document.getElementById("lightbox");
    const authorInput = document.getElementById("reviewAuthor");
    const textInput = document.getElementById("reviewText");
    const addBtn = document.getElementById("reviewAddBtn");

    if (!lightbox || !authorInput || !textInput || !addBtn) return;

    function updateAddButtonState() {
        addBtn.disabled = !(authorInput.value.trim() && textInput.value.trim());
    }

    authorInput.addEventListener("input", updateAddButtonState);
    textInput.addEventListener("input", updateAddButtonState);
    updateAddButtonState();

    addBtn.addEventListener("click", () => {
        if (currentLightboxDistrictIndex === null) return;
        const author = authorInput.value.trim();
        const text = textInput.value.trim();
        if (!author || !text) return;

        addReview(currentLightboxDistrictIndex, currentLightboxItemIndex, {
            id: createReviewId(),
            author,
            text,
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString(),
        });

        authorInput.value = "";
        textInput.value = "";
        updateAddButtonState();
        renderReviews();
    });

    lightbox.addEventListener("click", (e) => {
        const btn = e.target.closest("button[data-review-id]");
        if (!btn || currentLightboxDistrictIndex === null) return;

        const action = btn.dataset.reviewAction;
        const reviewId = btn.dataset.reviewId;

        if (action === "edit") {
            editingReviewId = reviewId;
            renderReviews();
        } else if (action === "delete") {
            if (!confirm("Delete this review?")) return;
            deleteReview(currentLightboxDistrictIndex, currentLightboxItemIndex, reviewId);
            if (editingReviewId === reviewId) editingReviewId = null;
            renderReviews();
        } else if (action === "save") {
            const card = btn.closest(".review-card");
            const textarea = card && card.querySelector(".review-edit-text");
            if (textarea && textarea.value.trim()) {
                updateReview(
                    currentLightboxDistrictIndex,
                    currentLightboxItemIndex,
                    reviewId,
                    textarea.value.trim()
                );
            }
            editingReviewId = null;
            renderReviews();
        } else if (action === "cancel") {
            editingReviewId = null;
            renderReviews();
        }
    });
}

// ============================================================================
// State
// ============================================================================
let activeIndex = null;   // null = home view
let isSearching = false;
let activeCategory = null; // 'all' | 'meals' | 'desserts' | 'beverages' | null

const navButtons = document.querySelectorAll(".nav-button");
const searchInput = document.getElementById("districtSearch");
const contentEl = document.getElementById("content");
const backToTopBtn = document.getElementById("backToTop");

//Contact Section
const teamContactInfo = [
    { label: "Email", value: "ILoLicious@gmail.com" },
    { label: "Phone", value: "+15552345678" },
    { label: "Social media", value: "https://www.facebook.com/profile.php?id=61553662959404" }
];

// ============================================================================
// Helpers
// ============================================================================
function escapeHtml(text) {
    const div = document.createElement("div");
    div.textContent = text;
    return div.innerHTML;
}

// Set an item's category to "meals", "desserts", or "beverages" to choose its filter manually.
// If no category is set, infer it from the item's title.
function getItemCategory(item) {
    if (item.category) {
        return item.category.trim().toLowerCase();
    }

    const t = item.title.toLowerCase();
    if (t.includes("cafe") || t.includes("coffee") || t.includes("refreshment") || t.includes("bistro") || t.includes("kofi")) {
        return "beverages";
    }
    if (t.includes("biscocho") || t.includes("barquillos") || t.includes("creamhorn") || t.includes("piyaya") ||
        t.includes("butterscotch") || t.includes("panaderia") || t.includes("bakery") ||
        t.includes("pasalubong") || t.includes("delicacies") || t.includes("bakehouse") || t.includes("baking studio")) {
        return "desserts";
    }
    return "meals";
}

function setActiveButton(target) {
    navButtons.forEach((btn) => {
        const isHome = btn.classList.contains("home-button");
        const isDistrict = btn.classList.contains("district-button");

        if (target === "home") {
            btn.classList.toggle("active", isHome && activeIndex === null);
        } else if (isDistrict) {
            // Determine index from onclick: showDistrict(N)
            const onclick = btn.getAttribute("onclick") || "";
            const match = onclick.match(/showDistrict\((\d+)\)/);
            const btnIndex = match ? Number(match[1]) : null;
            btn.classList.toggle("active", btnIndex === target);
        }
    });
}

function animateContent() {
    contentEl.style.animation = "none";
    contentEl.offsetHeight; // force reflow
    contentEl.style.animation = null;
}

function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
}

// Show back-to-top button on scroll
window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
        backToTopBtn.classList.add("visible");
    } else {
        backToTopBtn.classList.remove("visible");
    }
});

// Close lightbox with Escape key
window.addEventListener("keydown", (e) => {
    const lightbox = document.getElementById("lightbox");
    if (e.key === "Escape" && lightbox.classList.contains("open")) {
        closeLightbox();
    }
});

// ============================================================================
// Lightbox
// ============================================================================
function openLightbox(src, title, description, link, locationLink) {
    const lightbox = document.getElementById("lightbox");
    const img = document.getElementById("lightboxImg");
    const cap = document.getElementById("lightboxCaption");
    const desc = document.getElementById("lightboxDescription");
    const lnk = document.getElementById("lightboxLink");
    const locLnk = document.getElementById("lightboxLocationLink");
    img.src = src;
    img.alt = title || "";
    cap.textContent = title || "";
    desc.textContent = description || "";
    desc.style.display = description ? "block" : "none";
    if (link) {
        lnk.href = link;
        lnk.style.display = "inline-block";
    } else {
        lnk.style.display = "none";
    }
    if (locationLink) {
        locLnk.href = locationLink;
        locLnk.style.display = "inline-block";
    } else {
        locLnk.style.display = "none";
    }

    const resolvedItem = findGalleryItemIndex(title, description);
    currentLightboxDistrictIndex = resolvedItem ? resolvedItem.districtIndex : null;
    currentLightboxItemIndex = resolvedItem ? resolvedItem.itemIndex : null;
    editingReviewId = null;
    renderReviews();

    lightbox.classList.add("open");
    lightbox.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
}

function closeLightbox() {
    const lightbox = document.getElementById("lightbox");
    lightbox.classList.remove("open");
    lightbox.setAttribute("aria-hidden", "true");
    document.getElementById("lightboxImg").src = "";
    document.getElementById("lightboxCaption").textContent = "";
    document.getElementById("lightboxDescription").textContent = "";
    document.getElementById("lightboxLink").href = "#";
    document.getElementById("lightboxLink").style.display = "none";
    document.getElementById("lightboxLocationLink").href = "#";
    document.getElementById("lightboxLocationLink").style.display = "none";
    editingReviewId = null;
    document.body.style.overflow = "";
}

// ============================================================================
// Category Filter
// ============================================================================
function filterCategory(category) {
    activeCategory = category === "all" ? null : category;

    document.querySelectorAll(".category-pill").forEach((pill) => {
        pill.classList.toggle("active", pill.dataset.category === (activeCategory || "all"));
    });

    if (activeIndex !== null) {
        showDistrict(activeIndex);
    } else {
        showHome();
    }
}

// Delegate lightbox clicks on gallery images (content is regenerated)
document.addEventListener("click", (e) => {
    const galleryImg = e.target.closest(".gallery-img");
    if (galleryImg && galleryImg.src) {
        const galleryItem = galleryImg.closest(".gallery-item");
        const title =
            galleryItem?.querySelector(".gallery-title")?.textContent || "";
        const description =
            galleryItem?.querySelector(".gallery-desc")?.textContent || "";
        const link =
            galleryItem?.dataset.link ||
            `https://www.google.com/search?q=${encodeURIComponent(title)}`;
        const locationLink =
            galleryItem?.dataset.locationLink ||
            `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(title)}`;
        openLightbox(
            galleryImg.src,
            title,
            description,
            link,
            locationLink
        );
    }
});

// ============================================================================
// Search
// ============================================================================
function buildSearchResults(query) {
    const q = query.toLowerCase().trim();
    const results = [];

    districts.forEach((district, dIndex) => {
        district.gallery.forEach((item) => {
            const haystack = [
                district.name,
                district.food,
                item.title,
                item.description
            ]
                .join(" ")
                .toLowerCase();
            if (haystack.includes(q)) {
                results.push({ district, districtIndex: dIndex, item });
            }
        });
    });

    return results;
}

function renderSearchResults(query) {
    const results = buildSearchResults(query);

    let resultsHTML = "";
    if (results.length === 0) {
        resultsHTML = `
            <section class="details">
                <h2>Search results</h2>
                <hr>
                <p style="text-align:center; color:var(--color-text-muted);">
                    No places found matching "<strong>${escapeHtml(query)}</strong>".
                </p>
                <p style="text-align:center; margin-top:16px;">
                    <button class="nav-button" onclick="showHome()" style="margin:0 auto;display:block;">Clear search</button>
                </p>
            </section>
        `;
    } else {
        resultsHTML = `
            <section class="details">
                <h2>Search results for "<strong>${escapeHtml(query)}</strong>"</h2>
                <hr>
                <p style="color:var(--color-text-muted); margin-bottom:20px;">
                    ${results.length} place${results.length !== 1 ? "s" : ""} found.
                </p>
                <div class="gallery" style="margin-top:0;">
        `;

        results.forEach(({ district, districtIndex, item }) => {
            resultsHTML += `
                <div class="gallery-item" style="cursor:pointer;" onclick="showDistrict(${districtIndex})">
                    <img src="${escapeHtml(item.image)}" alt="${escapeHtml(item.title)}" class="gallery-img" loading="eager" decoding="async"
                        onerror="this.style.display='none'; const ph=this.nextElementSibling; ph.style.display='flex'; ph.textContent='Image unavailable';"
                        onload="this.style.display='block'; this.nextElementSibling.style.display='none';">
                    <div style="display:none; align-items:center; justify-content:center; height:220px; background:#e8e0ca; color:var(--color-text-muted); font-size:13px; padding:12px; text-align:center; border:1px dashed var(--color-border);">
                        Image unavailable
                    </div>
                    <div class="gallery-item-content">
                        <h4 class="gallery-title">${escapeHtml(item.title)}</h4>
                        <p class="gallery-desc">${escapeHtml(district.name)} &bull; ${escapeHtml(item.description)}</p>
                        <p style="margin-top:8px; color:var(--color-primary-dark); font-weight:700; font-size:14px;">
                            View ${escapeHtml(district.name)} district
                        </p>
                    </div>
                </div>
            `;
        });

        resultsHTML += `</div></section>`;
    }

    contentEl.innerHTML = resultsHTML;
    animateContent();
    contentEl.scrollIntoView({ behavior: "smooth" });
}

searchInput.addEventListener("input", (e) => {
    const q = e.target.value.trim();
    if (q.length === 0) {
        // Restore current view
        isSearching = false;
        if (activeIndex === null) {
            showHome();
        } else {
            showDistrict(activeIndex);
        }
        return;
    }
    isSearching = true;
    activeIndex = null;
    setActiveButton("home");
    renderSearchResults(q);
});

// ============================================================================
// Home
// ============================================================================
function showHome(scrollTarget = null) {
    activeIndex = null;
    isSearching = false;
    searchInput.value = "";
    setActiveButton("home");

    contentEl.innerHTML = `
        <section class="details">
            <h2 id="home" style="text-align:center;">Welcome to Iloilo!</h2>
            <hr>

            <p style="text-align:center; font-size:19px; max-width:700px; margin:0 auto 30px;">
                <img src="images/LogosPic/Logo[Horiz].png">
                    Welcome to <strong>ILoLicious</strong> — your guide to discovering the unique flavors,
                    traditions, and local specialties across the seven districts of Iloilo City.
            </p>

            ${activeCategory ? `<p style="text-align:center; color:var(--color-primary-dark); font-weight:600; margin-bottom:16px;">Showing: ${activeCategory.charAt(0).toUpperCase() + activeCategory.slice(1)}</p>` : ""}

            <hr>

            <h2 id="about" style="text-align:center;">About</h2>
            <img src="images/BackgroundPic/1696868323084.webp"; style="display: block; margin: 0 auto; width: 50%;">
            <p>
                Iloilo City was recognized as the first ‘UNESCO Creative City of Gastronomy’because of its long-standing gastronomic tradition rooted in culinary heritage, with active community programs, local economic support, and sustainability goals.
                <br>
                <br>Indigenous cultures, Spanish, and other cultural influences influenced Ilonggo cuisine. It is also known for comforting foods and slow-cooked staples like La Paz Batchoy, Pancit Molo, and KBL, alongside sour native broths like Kansi (a sour soup) and laswa fresh vegetable soup. 
                It is also anchored by abundant coastal seafood, agricultural lands, and much more.
                <br>
                <br>This vibrant food culture lives on in different districts of Iloilo through public markets and preserves passed down through elders' heirloom recipes and generational teaching.
                <br>
                <br>Iloilo actively supports its food industry in the belief that it is instrumental for its urban development.
                <br>
                <br>Since 2021, the city has organized the "Timplada" event and festivals to showcase the creativity of its gastronomic sector and local cuisine. In the collaboration of micro-, small and medium-sized businesses in the gastronomy sector to showcase their products and meet potential investors.
                <br>
                <br>Iloilo is also working to safeguard its culinary heritage by participating in the production of a recipe book entitled "Flavours of Iloilo", which brings together contemporary and traditional recipes unique to the city.
                <br>
                <br>In addition, Gastronomy anchors local livelihood and tourism across more than 300 restaurants employing around 4,600 people, while complementing festivals like Dinagyang.
                <br>
                <br>Therefore, this initiative shows the well-deserved recognition of “UNESCO Creative City of Gastronomy” through the continuous appreciation and commitment of Ilonggos to its local cuisine and livelihood.
            </p>
            <p>
                Explore each district to find embedded maps, photo galleries, and signature dishes
                waiting to be discovered. Tap a district button above to begin.
            </p>

            <section class="team-contact" id="contact" aria-labelledby="contact-heading">
                <h2 id="contact-heading">Contact</h2>
                <dl>
                    ${teamContactInfo.map(({ label, value }) => `
                        <div class="team-contact-item">
                            <dt>${escapeHtml(label)}</dt>
                            <dd>${escapeHtml(value)}</dd>
                        </div>
                    `).join("")}
                </dl>
            </section>
        </section>
    `;

    animateContent();
    if (scrollTarget) {
        document.getElementById(scrollTarget)?.scrollIntoView({
            behavior: "smooth",
            block: "center",
            inline: "nearest"
        });
    } else {
        window.scrollTo({ top: 0, behavior: "smooth" });
    }
}

// ============================================================================
// District view
// ============================================================================
function showDistrict(index) {
    const district = districts[index];
    activeIndex = index;
    isSearching = false;
    searchInput.value = "";
    setActiveButton(index);

    // Build gallery items (grid) with lazy loading and broken-image fallback
    let galleryHTML = "";
    district.gallery.forEach((item, i) => {
        if (activeCategory && getItemCategory(item) !== activeCategory) return;
        galleryHTML += `
            <div class="gallery-item" role="button" tabindex="0"
                data-link="${escapeHtml(item.link || `https://www.google.com/search?q=${encodeURIComponent(district.name + " " + item.title)}`)}"
                data-location-link="${escapeHtml(item.locationLink || `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(item.title + ", " + district.name + ", Iloilo City, Philippines")}`)}"
                onclick="openLightbox(this.querySelector('.gallery-img').src, this.querySelector('.gallery-title').textContent, this.querySelector('.gallery-desc').textContent, this.dataset.link, this.dataset.locationLink)"
                onkeydown="if(event.key==='Enter'||event.key===' '){event.preventDefault();openLightbox(this.querySelector('.gallery-img').src, this.querySelector('.gallery-title').textContent, this.querySelector('.gallery-desc').textContent, this.dataset.link, this.dataset.locationLink)}">
                <img src="${escapeHtml(item.image)}" alt="${escapeHtml(
            `${district.name} gallery image ${i + 1}`
        )}" class="gallery-img" loading="eager" decoding="async"
                    onerror="this.style.display='none'; const ph=this.nextElementSibling; ph.style.display='flex'; ph.textContent='Image unavailable';"
                    onload="this.style.display='block'; this.nextElementSibling.style.display='none';">
                <div style="display:none; align-items:center; justify-content:center; height:220px; background:#e8e0ca; color:var(--color-text-muted); font-size:13px; padding:12px; text-align:center; border:1px dashed var(--color-border);">
                    Image unavailable
                </div>
                <div class="gallery-item-content">
                    <h4 class="gallery-title">${escapeHtml(item.title)}</h4>
                    <p class="gallery-desc">${escapeHtml(item.description)}</p>
                </div>
            </div>
        `;
    });

    if (!galleryHTML) {
        galleryHTML = `<p style="text-align:center; color:var(--color-text-muted); padding:20px;">No ${activeCategory} items found in this district.</p>`;
    }

    // Map URL: Google short links (goo.gl / app.goo.gl) cannot be embedded in an iframe,
    // so always use a proper embed URL for the map frame. Use mapUrl only for the
    // "View larger map" link.
    const mapEmbedSrc = `https://www.google.com/maps?q=${encodeURIComponent(
        district.name + ", Iloilo City, Philippines"
    )}&output=embed`;
    const mapLinkSrc = district.mapUrl || mapEmbedSrc;

    contentEl.innerHTML = `
        <section class="details">
            <h2>${escapeHtml(district.name)}</h2>
            <hr>

            <p>${escapeHtml(district.description)}</p>

            <div class="food-card">
                <h3>Signature Food: ${escapeHtml(district.food)}</h3>
                <p>${escapeHtml(district.foodDescription)}</p>
            </div>

            <h3>Location</h3>
            <p>${escapeHtml(district.name)}, Iloilo City, Philippines</p>

            <!-- Embedded Google Map of the district -->
            <div class="map-container">
                <iframe
                    loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade"
                    src="${mapEmbedSrc}"
                    allowfullscreen
                    aria-label="Google Map of ${escapeHtml(district.name)}"
                    title="Map of ${escapeHtml(district.name)}">
                </iframe>
            </div>

            <a href="${mapLinkSrc}" target="_blank" rel="noopener noreferrer" class="map-button">
                View larger map &#8594;
            </a>

            <!-- Photo Gallery -->
            <div class="gallery-section">
                <h3>Photo Gallery</h3>
                <div class="gallery">
                    ${galleryHTML}
                </div>
                <p class="search-hint" style="margin-top:12px;">
                    Tap a photo to view it larger.
                </p>
            </div>
        </section>
    `;

    animateContent();
    document.getElementById("content").scrollIntoView({
        behavior: "smooth",
        block: "start",
    });
}

// Initialize reviews (localStorage + lightbox review UI)
initReviews();

// Initialize
showHome();
