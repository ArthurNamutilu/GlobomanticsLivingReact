// testing functions on sample json file

const allHouses = [
    {
        "id": 1,
        "address": "12 Valley of Kings, Geneva",
        "country": "Switzerland",
        "description": "A superb detached Victorian property on one of the town's finest roads, within easy reach of Barnes Village. The property has in excess of 6000 sq/ft of accommodation, a driveway and landscaped garden.",
        "price": 900000,
        "photo": "277667"
    },
    {
        "id": 1,
        "address": "12 Valley of Kings, Geneva",
        "country": "Switzerland",
        "description": "A superb detached Victorian property on one of the town's finest roads, within easy reach of Barnes Village. The property has in excess of 6000 sq/ft of accommodation, a driveway and landscaped garden.",
        "price": 900000,
        "photo": "277667"
    },
    {
        "id": 2,
        "address": "89 Road of Forks, Bern",
        "country": "America",
        "description": "This impressive family home, which dates back to approximately 1840, offers original period features throughout and is set back from the road with off street parking for up to six cars and an original Coach House, which has been incorporated into the main house to provide further accommodation. ",
        "price": 500000,
        "photo": "462358"
    },
    {
        "id": 2,
        "address": "89 Road of Forks, Bern",
        "country": "United Kingdom",
        "description": "This impressive family home, which dates back to approximately 1840, offers original period features throughout and is set back from the road with off street parking for up to six cars and an original Coach House, which has been incorporated into the main house to provide further accommodation. ",
        "price": 500000,
        "photo": "462358"
    },
    {
        "id": 2,
        "address": "89 Road of Forks, Bern",
        "country": "Deutchland",
        "description": "This impressive family home, which dates back to approximately 1840, offers original period features throughout and is set back from the road with off street parking for up to six cars and an original Coach House, which has been incorporated into the main house to provide further accommodation. ",
        "price": 500000,
        "photo": "462358"
    },
]
// const countries = allHouses ? Array.from(new Set(allHouses.map((h) => h.country))) : [];
const countries = allHouses ? Array.from(new Set(allHouses.map((h) => h.country))) : [];
countries.unshift(null);


countries.map((c) => (
    <option key={c} value={c}>
        {c}
    </option>
))





console.log(countries);
