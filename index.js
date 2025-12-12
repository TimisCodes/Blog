import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path"
import { fileURLToPath } from "url";

const app = express();
const port = 8000;
const __dirname = dirname(fileURLToPath(import.meta.url));

app.use(bodyParser.urlencoded({extended: true}))
app.set("views", __dirname + "/views")
app.use(express.static("public"));

const home = [

    {
        id: 1, /* Stores as req.params.id = "1", then convert the string to integer using parseInt(req.params.id) => to become 1 */
        artist: "Gunna",
        image: "/images/gunaa.jpeg",
        category: "entertainment",
        title: "Gunna set to head the Detty December in Lagos, Nigeria",
        content:
            "Gunna is bringing an electrifying concert to Nigeria this December. Fans can expect top-tier performances, hit songs, and an unforgettable night of music and excitement. Don’t miss it!",
        story: 
            "lorem"
    },
    {
        id: 1,
        artist: "Ronaldo",
        image: "/images/ronaldo.jpeg",
        category: "sport",
        title: "Ronaldo set to play Messi in Quarter-finals, 2026",
        content:
            "Name is bringing an electrifying concert to Nigeria this December. Fans can expect top-tier performances, hit songs, and an unforgettable night of music and excitement. Don’t miss it!",
        story: 
            "lorem"
    },
    {
        id: 1, /* Stores as req.params.id = "1", then convert the string to integer using parseInt(req.params.id) => to become 1 */
        artist: "Tinubu",
        image: "/images/tinubu.jpeg",
        title: "President Tinubu set to travel for EU Submit 2025",
        category: "news",
        content:
            "President Tinubu set to travel for EU Submit 2025. Headed of the general world eu submit live in south africa. President Tinubu plan on 2-days trip for the submit",
        story: 
            "lorem"
    },
    {
        id: 2,
        artist: "Asake",
        image: "/images/asake.jpeg",
        category: "entertainment",
        title: "Asake set to head the Detty December in Lagos, Nigeria",
        content:
            "Asake is bringing an electrifying concert to Nigeria this December. Fans can expect top-tier performances, hit songs, and an unforgettable night of music and excitement. Don’t miss it!",
        story: 
            "lorem"
    },
    {
        id: 3,
        artist: "Wizkid",
        image: "/images/wizkid.jpg",
        category: "entertainment",
        title: "Wizkid set to head the Detty December in Lagos, Nigeria",
        content:
            "Wizkid is bringing an electrifying concert to Nigeria this December. Fans can expect top-tier performances, hit songs, and an unforgettable night of music and excitement. Don’t miss it!",
        story: 
            "lorem"
    },
    {
        id: 4,
        artist: "Davido",
        image: "/images/davido.jpeg",
        category: "entertainment",
        title: "Davido set to head the Detty December in Lagos, Nigeria",
        content:
            "Davido is bringing an electrifying concert to Nigeria this December. Fans can expect top-tier performances, hit songs, and an unforgettable night of music and excitement. Don’t miss it!",
   
    },
    {
        id: 5,
        artist: "Omah Lay",
        image: "/images/omahlay.jpeg",
        category: "entertainment",
        title: "Omah Lay set to head the Detty December in Lagos, Nigeria",
        content:
            "Omah Lay is bringing an electrifying concert to Nigeria this December. Fans can expect top-tier performances, hit songs, and an unforgettable night of music and excitement. Don’t miss it!",
        story: 
            "lorem"
    },
    {
        id: 6,
        artist: "Olamide",
        image: "/images/olamide.jpeg",
        category: "entertainment",
        title: "Olamide set to head the Detty December in Lagos, Nigeria",
        content:
            "Olamide is bringing an electrifying concert to Nigeria this December. Fans can expect top-tier performances, hit songs, and an unforgettable night of music and excitement. Don’t miss it!",
        story: 
            "lorem"    
    },
    {
        id: 7,
        artist: "Magixx",
        image: "/images/magix.jpeg",
        category: "entertainment",
        title: "Magixx set to head the Detty December in Lagos, Nigeria",
        content:
            "Magixx is bringing an electrifying concert to Nigeria this December. Fans can expect top-tier performances, hit songs, and an unforgettable night of music and excitement. Don’t miss it!",
        story: 
            "lorem"
    },
    {
        id: 8,
        artist: "Fireboy",
        image: "/images/fireboy.jpeg",
        category: "entertainment",
        title: "Fireboy set to head the Detty December in Lagos, Nigeria",
        content:
            "Fireboy is bringing an electrifying concert to Nigeria this December. Fans can expect top-tier performances, hit songs, and an unforgettable night of music and excitement. Don’t miss it!",
        story: 
            "lorem"
    },
    {
        id: 9,
        artist: "Name",
        image: "/images/wizkid.jpg",
        category: "entertainment",
        title: "Name set to head the Detty December in Lagos, Nigeria",
        content:
            "Name is bringing an electrifying concert to Nigeria this December. Fans can expect top-tier performances, hit songs, and an unforgettable night of music and excitement. Don’t miss it!",
        story: 
            "lorem"
    }
];


const post = [

    {
        id: 1, /* Stores as req.params.id = "1", then convert the string to integer using parseInt(req.params.id) => to become 1 */
        artist: "Gunna",
        image: "/images/gunaa.jpeg",
        title: "Gunna set to head the Detty December in Lagos, Nigeria",
        content:
            "Gunna is bringing an electrifying concert to Nigeria this December. Fans can expect top-tier performances, hit songs, and an unforgettable night of music and excitement. Don’t miss it!",
        story: 
            "lorem"
    },
    {
        id: 2,
        artist: "Asake",
        image: "/images/asake.jpeg",
        title: "Asake set to head the Detty December in Lagos, Nigeria",
        content:
            "Asake is bringing an electrifying concert to Nigeria this December. Fans can expect top-tier performances, hit songs, and an unforgettable night of music and excitement. Don’t miss it!",
        story: 
            "lorem"
    },
    {
        id: 3,
        artist: "Wizkid",
        image: "/images/wizkid.jpg",
        title: "Wizkid set to head the Detty December in Lagos, Nigeria",
        content:
            "Wizkid is bringing an electrifying concert to Nigeria this December. Fans can expect top-tier performances, hit songs, and an unforgettable night of music and excitement. Don’t miss it!",
        story: 
            "lorem"
    },
    {
        id: 4,
        artist: "Davido",
        image: "/images/davido.jpeg",
        title: "Davido set to head the Detty December in Lagos, Nigeria",
        content:
            "Davido is bringing an electrifying concert to Nigeria this December. Fans can expect top-tier performances, hit songs, and an unforgettable night of music and excitement. Don’t miss it!",
        story: 
            "The city of Lagos was already alive with its usual December buzz, but this year, something bigger was coming—something that had the whole country talking. Billboards lit up the highways, radio stations played teasers every hour, and social media timelines were flooded with excitement. The reason was simple: Davido was bringing an electrifying concert to Nigeria this December, and everyone knew it was going to be legendary.For weeks, fans counted down the days. From the bustling streets of Ikeja to the beaches of Victoria Island, “Timeless Concert” T-shirts, wristbands, and posters were everywhere. People shared stories of their favorite Davido songs, argued about which hits he would perform first, and planned their outfits for what promised to be an unforgettable night.On the night of the concert, the atmosphere was nothing short of magical. The venue glowed with colorful lights, and a sea of fans stretched as far as the eye could see. The air vibrated with anticipation—phones ready, voices warm from hours of chanting “OBO! OBO!”Then, without warning, the stage lights cut out. Darkness. A single spotlight flickered on. And there he was. Davido. The crowd erupted like thunder. The opening notes of “Feel” boomed across the arena, and instantly everyone was on their feet. Fireworks shot into the sky, dancers sprinted onto the stage, and the night transformed from a concert into a full-blown celebration of music, culture, and pure energy.Hit after hit—“Unavailable,” “Fall,” “FIA,” “Aye,” “If,”—Davido delivered each song with the passion and charisma that made him one of Africa’s biggest stars. Fans screamed the lyrics back at him word for word, some even in tears of joy. At one point, he paused, smiling as he looked over the massive crowd. “Na una be the real MVP,” he said, and the audience roared louder than ever.Guest artists appeared one by one, adding even more excitement to the night. The stage transformed again and again—sometimes glowing gold, sometimes bursting into flames, sometimes raining digital stardust. Every moment felt like a surprise designed to keep the crowd breathless.By the time Davido closed with “Champion Sound,” the entire arena shook with dancing, laughter, and pure electricity. Fans knew they had witnessed something special—something that would be talked about long after December ended.As the final fireworks lit up the Lagos sky, people hugged strangers, took photos, and promised themselves they would never miss another Davido concert again. Because that night wasn’t just a performance. It was history."
   
    },
    {
        id: 5,
        artist: "Omah Lay",
        image: "/images/omahlay.jpeg",
        title: "Omah Lay set to head the Detty December in Lagos, Nigeria",
        content:
            "Omah Lay is bringing an electrifying concert to Nigeria this December. Fans can expect top-tier performances, hit songs, and an unforgettable night of music and excitement. Don’t miss it!",
        story: 
            "lorem"
    },
    {
        id: 6,
        artist: "Olamide",
        image: "/images/olamide.jpeg",
        title: "Olamide set to head the Detty December in Lagos, Nigeria",
        content:
            "Olamide is bringing an electrifying concert to Nigeria this December. Fans can expect top-tier performances, hit songs, and an unforgettable night of music and excitement. Don’t miss it!",
        story: 
            "lorem"    
    },
    {
        id: 7,
        artist: "Magixx",
        image: "/images/magix.jpeg",
        title: "Magixx set to head the Detty December in Lagos, Nigeria",
        content:
            "Magixx is bringing an electrifying concert to Nigeria this December. Fans can expect top-tier performances, hit songs, and an unforgettable night of music and excitement. Don’t miss it!",
        story: 
            "lorem"
    },
    {
        id: 8,
        artist: "Fireboy",
        image: "/images/fireboy.jpeg",
        title: "Fireboy set to head the Detty December in Lagos, Nigeria",
        content:
            "Fireboy is bringing an electrifying concert to Nigeria this December. Fans can expect top-tier performances, hit songs, and an unforgettable night of music and excitement. Don’t miss it!",
        story: 
            "lorem"
    },
    {
        id: 9,
        artist: "Name",
        image: "/images/wizkid.jpg",
        title: "Name set to head the Detty December in Lagos, Nigeria",
        content:
            "Name is bringing an electrifying concert to Nigeria this December. Fans can expect top-tier performances, hit songs, and an unforgettable night of music and excitement. Don’t miss it!",
        story: 
            "lorem"
    },
    {
        id: 10,
        artist: "Ronaldo",
        image: "/images/ronaldo.jpeg",
        category: "sport",
        title: "Ronaldo set to play Messi in Quarter-finals, 2026",
        content:
            "Name is bringing an electrifying concert to Nigeria this December. Fans can expect top-tier performances, hit songs, and an unforgettable night of music and excitement. Don’t miss it!",
        story: 
            "lorem"
    }
];

const sport = [
    {
        id: 1,
        artist: "Ronaldo",
        image: "/images/ronaldo.jpeg",
        category: "sport",
        title: "Ronaldo set to play Messi in Quarter-finals, 2026",
        content:
            "Name is bringing an electrifying concert to Nigeria this December. Fans can expect top-tier performances, hit songs, and an unforgettable night of music and excitement. Don’t miss it!",
        story: 
            "lorem"
    },
    
];
const news = [

    {
        id: 1, /* Stores as req.params.id = "1", then convert the string to integer using parseInt(req.params.id) => to become 1 */
        artist: "Tinubu",
        image: "/images/tinubu.jpeg",
        title: "President Tinubu set to travel for EU Submit 2025",
        category: "news",
        content:
            "President Tinubu set to travel for EU Submit 2025",
        story: 
            "lorem"
    },
    {
        id: 2, /* Stores as req.params.id = "1", then convert the string to integer using parseInt(req.params.id) => to become 1 */
        artist: "Tinubu",
        image: "/images/benin-coup.jpg",
        title: "Benin coup was live in Benin Republic december 9th 2025",
        category: "news",
        content:
            "Benin coup was live benin republic trying to take over the throne of Patrice Talon",
        story: 
            "lorem"
    }
];
const business = [

    {
        id: 1, /* Stores as req.params.id = "1", then convert the string to integer using parseInt(req.params.id) => to become 1 */
        artist: "Gunna",
        image: "/images/gunaa.jpeg",
        title: "Gunna set to head the Detty December in Lagos, Nigeria",
        category: "business",
        content:
            "Gunna is bringing an electrifying concert to Nigeria this December. Fans can expect top-tier performances, hit songs, and an unforgettable night of music and excitement. Don’t miss it!",
        story: 
            "lorem"
    },
    {
        id: 2,
        artist: "Asake",
        image: "/images/asake.jpeg",
        title: "Asake set to head the Detty December in Lagos, Nigeria",
        category: "business",
        content:
            "Asake is bringing an electrifying concert to Nigeria this December. Fans can expect top-tier performances, hit songs, and an unforgettable night of music and excitement. Don’t miss it!",
        story: 
            "lorem"
    }
];
const health = [

    {
        id: 1, /* Stores as req.params.id = "1", then convert the string to integer using parseInt(req.params.id) => to become 1 */
        artist: "Gunna",
        image: "/images/gunaa.jpeg",
        title: "Gunna set to head the Detty December in Lagos, Nigeria",
        category: "health",
        content:
            "Gunna is bringing an electrifying concert to Nigeria this December. Fans can expect top-tier performances, hit songs, and an unforgettable night of music and excitement. Don’t miss it!",
        story: 
            "lorem"
    },
    {
        id: 2,
        artist: "Asake",
        image: "/images/asake.jpeg",
        title: "Asake set to head the Detty December in Lagos, Nigeria",
        category: "health",
        content:
            "Asake is bringing an electrifying concert to Nigeria this December. Fans can expect top-tier performances, hit songs, and an unforgettable night of music and excitement. Don’t miss it!",
        story: 
            "lorem"
    }
];
const entertainment = [

    {
        id: 1, /* Stores as req.params.id = "1", then convert the string to integer using parseInt(req.params.id) => to become 1 */
        artist: "Gunna",
        image: "/images/gunaa.jpeg",
        title: "Gunna set to head the Detty December in Lagos, Nigeria",
        category: "entertainment",
        content:
            "Gunna is bringing an electrifying concert to Nigeria this December. Fans can expect top-tier performances, hit songs, and an unforgettable night of music and excitement. Don’t miss it!",
        story: 
            "lorem"
    },
    {
        id: 2,
        artist: "Asake",
        image: "/images/asake.jpeg",
        title: "Asake set to head the Detty December in Lagos, Nigeria",
        category: "entertainment",
        content:
            "Asake is bringing an electrifying concert to Nigeria this December. Fans can expect top-tier performances, hit songs, and an unforgettable night of music and excitement. Don’t miss it!",
        story: 
            "lorem"
    },
    {
        id: 3,
        artist: "Wizkid",
        image: "/images/wizkid.jpg",
        title: "Wizkid set to head the Detty December in Lagos, Nigeria",
        category: "entertainment",
        content:
            "Wizkid is bringing an electrifying concert to Nigeria this December. Fans can expect top-tier performances, hit songs, and an unforgettable night of music and excitement. Don’t miss it!",
        story: 
            "lorem"
    },
    {
        id: 4,
        artist: "Davido",
        image: "/images/davido.jpeg",
        title: "Davido set to head the Detty December in Lagos, Nigeria",
        category: "entertainment",
        content:
            "Davido is bringing an electrifying concert to Nigeria this December. Fans can expect top-tier performances, hit songs, and an unforgettable night of music and excitement. Don’t miss it!",
        story: 
            "The city of Lagos was already alive with its usual December buzz, but this year, something bigger was coming—something that had the whole country talking. Billboards lit up the highways, radio stations played teasers every hour, and social media timelines were flooded with excitement. The reason was simple: Davido was bringing an electrifying concert to Nigeria this December, and everyone knew it was going to be legendary.For weeks, fans counted down the days. From the bustling streets of Ikeja to the beaches of Victoria Island, “Timeless Concert” T-shirts, wristbands, and posters were everywhere. People shared stories of their favorite Davido songs, argued about which hits he would perform first, and planned their outfits for what promised to be an unforgettable night.On the night of the concert, the atmosphere was nothing short of magical. The venue glowed with colorful lights, and a sea of fans stretched as far as the eye could see. The air vibrated with anticipation—phones ready, voices warm from hours of chanting “OBO! OBO!”Then, without warning, the stage lights cut out. Darkness. A single spotlight flickered on. And there he was. Davido. The crowd erupted like thunder. The opening notes of “Feel” boomed across the arena, and instantly everyone was on their feet. Fireworks shot into the sky, dancers sprinted onto the stage, and the night transformed from a concert into a full-blown celebration of music, culture, and pure energy.Hit after hit—“Unavailable,” “Fall,” “FIA,” “Aye,” “If,”—Davido delivered each song with the passion and charisma that made him one of Africa’s biggest stars. Fans screamed the lyrics back at him word for word, some even in tears of joy. At one point, he paused, smiling as he looked over the massive crowd. “Na una be the real MVP,” he said, and the audience roared louder than ever.Guest artists appeared one by one, adding even more excitement to the night. The stage transformed again and again—sometimes glowing gold, sometimes bursting into flames, sometimes raining digital stardust. Every moment felt like a surprise designed to keep the crowd breathless.By the time Davido closed with “Champion Sound,” the entire arena shook with dancing, laughter, and pure electricity. Fans knew they had witnessed something special—something that would be talked about long after December ended.As the final fireworks lit up the Lagos sky, people hugged strangers, took photos, and promised themselves they would never miss another Davido concert again. Because that night wasn’t just a performance. It was history."
   
    },
    {
        id: 5,
        artist: "Omah Lay",
        image: "/images/omahlay.jpeg",
        title: "Omah Lay set to head the Detty December in Lagos, Nigeria",
        category: "entertainment",
        content:
            "Omah Lay is bringing an electrifying concert to Nigeria this December. Fans can expect top-tier performances, hit songs, and an unforgettable night of music and excitement. Don’t miss it!",
        story: 
            "lorem"
    },
    {
        id: 6,
        artist: "Olamide",
        image: "/images/olamide.jpeg",
        title: "Olamide set to head the Detty December in Lagos, Nigeria",
        category: "entertainment",
        content:
            "Olamide is bringing an electrifying concert to Nigeria this December. Fans can expect top-tier performances, hit songs, and an unforgettable night of music and excitement. Don’t miss it!",
        story: 
            "lorem"    
    },
    {
        id: 7,
        artist: "Magixx",
        image: "/images/magix.jpeg",
        title: "Magixx set to head the Detty December in Lagos, Nigeria",
        category: "entertainment",
        content:
            "Magixx is bringing an electrifying concert to Nigeria this December. Fans can expect top-tier performances, hit songs, and an unforgettable night of music and excitement. Don’t miss it!",
        story: 
            "lorem"
    },
    {
        id: 8,
        artist: "Fireboy",
        image: "/images/fireboy.jpeg",
        title: "Fireboy set to head the Detty December in Lagos, Nigeria",
        category: "entertainment",
        content:
            "Fireboy is bringing an electrifying concert to Nigeria this December. Fans can expect top-tier performances, hit songs, and an unforgettable night of music and excitement. Don’t miss it!",
        story: 
            "lorem"
    },
    {
        id: 9,
        artist: "Name",
        image: "/images/wizkid.jpg",
        title: "Name set to head the Detty December in Lagos, Nigeria",
        category: "entertainment",
        content:
            "Name is bringing an electrifying concert to Nigeria this December. Fans can expect top-tier performances, hit songs, and an unforgettable night of music and excitement. Don’t miss it!",
        story: 
            "lorem"
    }
];

app.get("/", (req, res) => {
    const date = new Date();
    const options = {
        day: "numeric",
        month: "long",
        year: "numeric",
        weekday: "long"
    }
    const full = date.toLocaleDateString("en-US", options)

    res.render("index.ejs", {
        date: full, 
        post: post});
})
app.get("/home", (req, res) => {

    const date = new Date();
    const options = {
        weekday: "long",
        day: "numeric",
        month: "long",
        year: "numeric"
    }
    const full = date.toLocaleDateString("en-Us", options)

    res.render("home.ejs", {
        date: full, 
        home: home,
        post: post,
        currentPage: 'home'});
})
app.get("/entertainment", (req, res) => {

    const date = new Date();
    const options = {
        weekday: "long",
        day: "numeric",
        month: "long",
        year: "numeric"
    }
    const full = date.toLocaleDateString("en-Us", options)

    res.render("entertainment.ejs", {
        date: full,
        entertainment: entertainment,
        currentPage: "entertainment"});
})

app.get("/entertainment/:id", (req, res) => {

    const date = new Date();
    const options = {
        weekday: "long",
        day: "numeric",
        month: "long",
        year: "numeric"
    }
    const full = date.toLocaleDateString("en-US", options)

    const entertainmentId = parseInt(req.params.id);
    const foundEntertainment = entertainment.find(e => e.id === entertainmentId);

    if (!foundEntertainment) {
        return res.status(404).send("Post not found");
    }

    res.render("entertainment-post.ejs", {
        date: full , 
        entertainment: foundEntertainment, 
        currentPage: 'entertainment' });
});

app.get("/sport", (req, res) => {

    const date = new Date();
    const options = {
        weekday: "long",
        day: "numeric",
        month: "long",
        year: "numeric"
    }
    const full = date.toLocaleDateString("en-Us", options)

    res.render("sport.ejs", {
        date: full,
        sport: sport,
        // main: main,
        currentPage: "sport"});
})
app.get("/sport/:id", (req, res) => {

    const date = new Date();
    const options = {
        weekday: "long",
        day: "numeric",
        month: "long",
        year: "numeric"
    }
    const full = date.toLocaleDateString("en-US", options)

    const sportId = parseInt(req.params.id);
    const foundSport = sport.find(s => s.id === sportId);

    if (!foundSport) {
        return res.status(404).send("Post not found");
    }

    res.render("sport-post.ejs", {
        date: full , 
        sport: foundSport, 
        currentPage: 'sport' });
});

app.get("/news", (req, res) => {

    const date = new Date();
    const options = {
        weekday: "long",
        day: "numeric",
        month: "long",
        year: "numeric"
    }
    const full = date.toLocaleDateString("en-Us", options)

    res.render("news.ejs", {
        date: full,
        news: news,
        currentPage: "news"});
})
app.get("/news/:id", (req, res) => {

    const date = new Date();
    const options = {
        weekday: "long",
        day: "numeric",
        month: "long",
        year: "numeric"
    }
    const full = date.toLocaleDateString("en-US", options)

    const newsId = parseInt(req.params.id);
    const foundNews = news.find(n => n.id === newsId);

    if (!foundNews) {
        return res.status(404).send("Post not found");
    }

    res.render("news-post.ejs", {
        date: full , 
        news: foundNews, 
        currentPage: 'news' });
});

app.listen(port, ()=>{
    console.log(`Blog is running on port:${port}`)
})
