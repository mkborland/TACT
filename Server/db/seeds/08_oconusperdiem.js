/**
 * @param 
{ import("knex").Knex } knex
 * @returns 
{ Promise<void> } 
 */
export async function seed(knex) {
    // Deletes ALL existing entries
    await knex('oconusperdiem').del()
    await knex('oconusperdiem').insert([
        {
            country: "AFGHANISTAN",
            location: "[Other]",
            lodging: "0",
            mAndI: "15",
            perDiem: "15",
            locationCode: "11804"
        }
    ]);

    await knex('oconusperdiem').insert([
        {
            country: "AFGHANISTAN",
            location: "Kabul",
            lodging: "0",
            mAndI: "78",
            perDiem: "78",
            locationCode: "10323"
        }
    ]);

    await knex('oconusperdiem').insert([
        {
            country: "ALBANIA",
            location: "[Other]",
            lodging: "67",
            mAndI: "81",
            perDiem: "148",
            locationCode: "11908"
        }
    ]);
    await knex('oconusperdiem').insert([
    {
        country: "ALBANIA",
        location: "Tirana",
        lodging: "122",
        mAndI: "94",
        perDiem: "216",
        locationCode: "10104"
    }
]);
    await knex('oconusperdiem').insert([
        {
            country: "ALGERIA",
            location: "[Other]",
            lodging: "192",
            mAndI: "112",
            perDiem: "304",
            locationCode: "11805"
        }
    ]);
    await knex('oconusperdiem').insert([
    {
        country: "ALGERIA",
        location: "Algiers",
        lodging: "203",
        mAndI: "113",
        perDiem: "316",
        locationCode: "10324"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "ANDORRA",
        location: "Andorra",
        lodging: "209",
        mAndI: "123",
        perDiem: "332",
        locationCode: "11079"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "ANGOLA",
        location: "[Other]",
        lodging: "336",
        mAndI: "199",
        perDiem: "535",
        locationCode: "11822"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "ANGOLA",
        location: "Luanda",
        lodging: "336",
        mAndI: "199",
        perDiem: "535",
        locationCode: "10373"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "ANGUILLA",
        location: "The Valley",
        lodging: "244",
        mAndI: "130",
        perDiem: "374",
        locationCode: "91116"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "ANTARCTICA",
        location: "Antarctica Region Posts",
        lodging: "0",
        mAndI: "1",
        perDiem: "1",
        locationCode: "19942"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "ANTIGUA AND BARBUDA",
        location: "[Other]",
        lodging: "37",
        mAndI: "18",
        perDiem: "55",
        locationCode: "11984"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "ANTIGUA AND BARBUDA",
        location: "[Other]",
        lodging: "50",
        mAndI: "19",
        perDiem: "69",
        locationCode: "11984"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "ANTIGUA AND BARBUDA",
        location: "Antigua and Barbuda",
        lodging: "346",
        mAndI: "138",
        perDiem: "484",
        locationCode: "11052"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "ANTIGUA AND BARBUDA",
        location: "Antigua and Barbuda",
        lodging: "216",
        mAndI: "125",
        perDiem: "341",
        locationCode: "11052"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "ARGENTINA",
        location: "[Other]",
        lodging: "236",
        mAndI: "120",
        perDiem: "356",
        locationCode: "11737"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "ARGENTINA",
        location: "Bariloche",
        lodging: "237",
        mAndI: "132",
        perDiem: "369",
        locationCode: "12637"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "ARGENTINA",
        location: "Buenos Aires",
        lodging: "266",
        mAndI: "126",
        perDiem: "392",
        locationCode: "10016"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "ARGENTINA",
        location: "Mendoza",
        lodging: "220",
        mAndI: "119",
        perDiem: "339",
        locationCode: "19952"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "ARMENIA",
        location: "[Other]",
        lodging: "143",
        mAndI: "88",
        perDiem: "231",
        locationCode: "11756"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "ARMENIA",
        location: "Yerevan",
        lodging: "143",
        mAndI: "88",
        perDiem: "231",
        locationCode: "10105"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "Aruba",
        location: "[Other]",
        lodging: "310",
        mAndI: "141",
        perDiem: "451",
        locationCode: "91181"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "Aruba",
        location: "[Other]",
        lodging: "259",
        mAndI: "136",
        perDiem: "395",
        locationCode: "91181"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "Aruba",
        location: "Oranjestad",
        lodging: "310",
        mAndI: "141",
        perDiem: "451",
        locationCode: "11024"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "Aruba",
        location: "Oranjestad",
        lodging: "259",
        mAndI: "136",
        perDiem: "395",
        locationCode: "11024"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "ASCENSION ISLAND",
        location: "Ascension Island",
        lodging: "122",
        mAndI: "29",
        perDiem: "151",
        locationCode: "11053"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "AUSTRALIA",
        location: "[Other]",
        lodging: "122",
        mAndI: "95",
        perDiem: "217",
        locationCode: "11787"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "AUSTRALIA",
        location: "Adelaide",
        lodging: "217",
        mAndI: "107",
        perDiem: "324",
        locationCode: "10244"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "AUSTRALIA",
        location: "Bendigo",
        lodging: "247",
        mAndI: "116",
        perDiem: "363",
        locationCode: "19983"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "AUSTRALIA",
        location: "Brisbane",
        lodging: "280",
        mAndI: "126",
        perDiem: "406",
        locationCode: "10245"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "AUSTRALIA",
        location: "Broome",
        lodging: "277",
        mAndI: "120",
        perDiem: "397",
        locationCode: "15035"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "AUSTRALIA",
        location: "Cairns",
        lodging: "122",
        mAndI: "95",
        perDiem: "217",
        locationCode: "12583"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "AUSTRALIA",
        location: "Canberra",
        lodging: "190",
        mAndI: "108",
        perDiem: "298",
        locationCode: "10243"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "AUSTRALIA",
        location: "Darwin,  Northern Territory",
        lodging: "191",
        mAndI: "116",
        perDiem: "307",
        locationCode: "12342"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "AUSTRALIA",
        location: "Exmouth",
        lodging: "157",
        mAndI: "107",
        perDiem: "264",
        locationCode: "15065"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "AUSTRALIA",
        location: "Fremantle",
        lodging: "169",
        mAndI: "99",
        perDiem: "268",
        locationCode: "13319"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "AUSTRALIA",
        location: "Hobart",
        lodging: "150",
        mAndI: "123",
        perDiem: "273",
        locationCode: "12372"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "AUSTRALIA",
        location: "Melbourne",
        lodging: "248",
        mAndI: "106",
        perDiem: "354",
        locationCode: "10246"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "AUSTRALIA",
        location: "Perth",
        lodging: "192",
        mAndI: "127",
        perDiem: "319",
        locationCode: "10247"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "AUSTRALIA",
        location: "Richmond, NSW",
        lodging: "137",
        mAndI: "99",
        perDiem: "236",
        locationCode: "13553"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "AUSTRALIA",
        location: "Sydney",
        lodging: "291",
        mAndI: "115",
        perDiem: "406",
        locationCode: "10248"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "AUSTRIA",
        location: "[Other]",
        lodging: "213",
        mAndI: "121",
        perDiem: "334",
        locationCode: "11757"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "AUSTRIA",
        location: "Graz",
        lodging: "247",
        mAndI: "115",
        perDiem: "362",
        locationCode: "11985"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "AUSTRIA",
        location: "Innsbruck",
        lodging: "213",
        mAndI: "121",
        perDiem: "334",
        locationCode: "11082"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "AUSTRIA",
        location: "Linz",
        lodging: "180",
        mAndI: "142",
        perDiem: "322",
        locationCode: "11410"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "AUSTRIA",
        location: "Salzburg",
        lodging: "253",
        mAndI: "111",
        perDiem: "364",
        locationCode: "10107"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "AUSTRIA",
        location: "Vienna",
        lodging: "315",
        mAndI: "141",
        perDiem: "456",
        locationCode: "10106"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "AZERBAIJAN",
        location: "[Other]",
        lodging: "98",
        mAndI: "81",
        perDiem: "179",
        locationCode: "11758"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "AZERBAIJAN",
        location: "Baku",
        lodging: "159",
        mAndI: "115",
        perDiem: "274",
        locationCode: "10109"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "AZERBAIJAN",
        location: "Ganja",
        lodging: "125",
        mAndI: "90",
        perDiem: "215",
        locationCode: "19944"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "AZERBAIJAN",
        location: "Qabala",
        lodging: "128",
        mAndI: "84",
        perDiem: "212",
        locationCode: "15045"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "Bahamas, The",
        location: "[Other]",
        lodging: "176",
        mAndI: "132",
        perDiem: "308",
        locationCode: "11891"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "Bahamas, The",
        location: "Andros Island",
        lodging: "159",
        mAndI: "107",
        perDiem: "266",
        locationCode: "11000"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "Bahamas, The",
        location: "Eleuthera Island",
        lodging: "213",
        mAndI: "143",
        perDiem: "356",
        locationCode: "11001"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "Bahamas, The",
        location: "Eleuthera Island",
        lodging: "276",
        mAndI: "150",
        perDiem: "426",
        locationCode: "11001"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "Bahamas, The",
        location: "Grand Bahama Island",
        lodging: "187",
        mAndI: "126",
        perDiem: "313",
        locationCode: "11002"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "Bahamas, The",
        location: "Nassau",
        lodging: "318",
        mAndI: "159",
        perDiem: "477",
        locationCode: "10017"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "BAHRAIN",
        location: "Bahrain",
        lodging: "251",
        mAndI: "126",
        perDiem: "377",
        locationCode: "11054"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "BAHRAIN",
        location: "MANAMA",
        lodging: "251",
        mAndI: "126",
        perDiem: "377",
        locationCode: "91120"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "BANGLADESH",
        location: "[Other]",
        lodging: "143",
        mAndI: "102",
        perDiem: "245",
        locationCode: "11807"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "BANGLADESH",
        location: "Chittagong",
        lodging: "150",
        mAndI: "96",
        perDiem: "246",
        locationCode: "11986"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "BANGLADESH",
        location: "Dhaka",
        lodging: "240",
        mAndI: "95",
        perDiem: "335",
        locationCode: "10327"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "BANGLADESH",
        location: "Sylhet",
        lodging: "177",
        mAndI: "104",
        perDiem: "281",
        locationCode: "15021"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "BARBADOS",
        location: "Barbados",
        lodging: "210",
        mAndI: "167",
        perDiem: "377",
        locationCode: "11055"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "BARBADOS",
        location: "Barbados",
        lodging: "321",
        mAndI: "178",
        perDiem: "499",
        locationCode: "11055"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "BELARUS",
        location: "[Other]",
        lodging: "190",
        mAndI: "67",
        perDiem: "257",
        locationCode: "11904"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "BELARUS",
        location: "Minsk",
        lodging: "190",
        mAndI: "67",
        perDiem: "257",
        locationCode: "10822"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "BELGIUM",
        location: "[Other]",
        lodging: "78",
        mAndI: "68",
        perDiem: "146",
        locationCode: "11760"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "BELGIUM",
        location: "Antwerp",
        lodging: "306",
        mAndI: "157",
        perDiem: "463",
        locationCode: "10112"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "BELGIUM",
        location: "Bruges",
        lodging: "124",
        mAndI: "88",
        perDiem: "212",
        locationCode: "12125"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "BELGIUM",
        location: "Brussels",
        lodging: "321",
        mAndI: "145",
        perDiem: "466",
        locationCode: "10111"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "BELGIUM",
        location: "Brussels",
        lodging: "206",
        mAndI: "134",
        perDiem: "340",
        locationCode: "10111"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "BELGIUM",
        location: "Diegem",
        lodging: "321",
        mAndI: "145",
        perDiem: "466",
        locationCode: "11087"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "BELGIUM",
        location: "Diegem",
        lodging: "206",
        mAndI: "134",
        perDiem: "340",
        locationCode: "11087"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "BELGIUM",
        location: "Gent",
        lodging: "315",
        mAndI: "162",
        perDiem: "477",
        locationCode: "11088"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "BELGIUM",
        location: "Kleine Brogel",
        lodging: "110",
        mAndI: "77",
        perDiem: "187",
        locationCode: "10819"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "BELGIUM",
        location: "Liege",
        lodging: "135",
        mAndI: "73",
        perDiem: "208",
        locationCode: "11091"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "BELGIUM",
        location: "Mons",
        lodging: "181",
        mAndI: "110",
        perDiem: "291",
        locationCode: "10481"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "BELGIUM",
        location: "SHAPE/Chievres",
        lodging: "181",
        mAndI: "110",
        perDiem: "291",
        locationCode: "10820"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "BELGIUM",
        location: "Zaventem",
        lodging: "321",
        mAndI: "145",
        perDiem: "466",
        locationCode: "11093"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "BELGIUM",
        location: "Zaventem",
        lodging: "206",
        mAndI: "134",
        perDiem: "340",
        locationCode: "11093"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "BELIZE",
        location: "[Other]",
        lodging: "109",
        mAndI: "77",
        perDiem: "186",
        locationCode: "11742"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "BELIZE",
        location: "Belize City",
        lodging: "156",
        mAndI: "121",
        perDiem: "277",
        locationCode: "10049"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "BELIZE",
        location: "Belmopan",
        lodging: "153",
        mAndI: "91",
        perDiem: "244",
        locationCode: "13643"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "BELIZE",
        location: "Caye Caulker",
        lodging: "169",
        mAndI: "115",
        perDiem: "284",
        locationCode: "15072"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "BELIZE",
        location: "Hopkins",
        lodging: "217",
        mAndI: "114",
        perDiem: "331",
        locationCode: "15073"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "BELIZE",
        location: "Placencia",
        lodging: "223",
        mAndI: "113",
        perDiem: "336",
        locationCode: "15075"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "BELIZE",
        location: "San Ignacio Town",
        lodging: "169",
        mAndI: "107",
        perDiem: "276",
        locationCode: "15076"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "BELIZE",
        location: "San Pedro",
        lodging: "245",
        mAndI: "125",
        perDiem: "370",
        locationCode: "15018"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "BENIN",
        location: "[Other]",
        lodging: "80",
        mAndI: "67",
        perDiem: "147",
        locationCode: "11831"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "BENIN",
        location: "Cotonou",
        lodging: "122",
        mAndI: "86",
        perDiem: "208",
        locationCode: "10386"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "BERMUDA",
        location: "Bermuda",
        lodging: "500",
        mAndI: "208",
        perDiem: "708",
        locationCode: "11963"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "BERMUDA",
        location: "Bermuda",
        lodging: "385",
        mAndI: "197",
        perDiem: "582",
        locationCode: "11963"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "BHUTAN",
        location: "Bhutan",
        lodging: "280",
        mAndI: "112",
        perDiem: "392",
        locationCode: "11094"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "BOLIVIA",
        location: "[Other]",
        lodging: "77",
        mAndI: "53",
        perDiem: "130",
        locationCode: "11738"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "BOLIVIA",
        location: "Cochabamba",
        lodging: "100",
        mAndI: "49",
        perDiem: "149",
        locationCode: "10019"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "BOLIVIA",
        location: "La Paz",
        lodging: "140",
        mAndI: "98",
        perDiem: "238",
        locationCode: "10018"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "BOLIVIA",
        location: "Potosi",
        lodging: "89",
        mAndI: "63",
        perDiem: "152",
        locationCode: "12246"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "BOLIVIA",
        location: "Santa Cruz",
        lodging: "133",
        mAndI: "98",
        perDiem: "231",
        locationCode: "10435"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "BOLIVIA",
        location: "Tarija",
        lodging: "85",
        mAndI: "67",
        perDiem: "152",
        locationCode: "11003"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "Bonaire, Sint Eustatius, and Saba",
        location: "Bonaire",
        lodging: "132",
        mAndI: "117",
        perDiem: "249",
        locationCode: "11666"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "Bonaire, Sint Eustatius, and Saba",
        location: "Saba",
        lodging: "238",
        mAndI: "129",
        perDiem: "367",
        locationCode: "12395"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "Bonaire, Sint Eustatius, and Saba",
        location: "Sint Eustatius",
        lodging: "239",
        mAndI: "110",
        perDiem: "349",
        locationCode: "12393"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "Bosnia and Herzegovina",
        location: "[Other]",
        lodging: "115",
        mAndI: "105",
        perDiem: "220",
        locationCode: "11915"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "Bosnia and Herzegovina",
        location: "Sarajevo",
        lodging: "115",
        mAndI: "105",
        perDiem: "220",
        locationCode: "11043"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "BOTSWANA",
        location: "[Other]",
        lodging: "105",
        mAndI: "61",
        perDiem: "166",
        locationCode: "11824"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "BOTSWANA",
        location: "Francistown",
        lodging: "113",
        mAndI: "60",
        perDiem: "173",
        locationCode: "12578"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "BOTSWANA",
        location: "Gaborone",
        lodging: "120",
        mAndI: "68",
        perDiem: "188",
        locationCode: "10377"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "BOTSWANA",
        location: "Kasane",
        lodging: "139",
        mAndI: "70",
        perDiem: "209",
        locationCode: "12390"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "BOTSWANA",
        location: "Maun",
        lodging: "120",
        mAndI: "61",
        perDiem: "181",
        locationCode: "12579"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "BOTSWANA",
        location: "Selebi Phikwe",
        lodging: "105",
        mAndI: "61",
        perDiem: "166",
        locationCode: "10728"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "BOTSWANA",
        location: "Serowe",
        lodging: "65",
        mAndI: "58",
        perDiem: "123",
        locationCode: "12977"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "BRAZIL",
        location: "[Other]",
        lodging: "177",
        mAndI: "130",
        perDiem: "307",
        locationCode: "12078"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "BRAZIL",
        location: "Belem",
        lodging: "85",
        mAndI: "51",
        perDiem: "136",
        locationCode: "11098"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "BRAZIL",
        location: "Belo Horizonte",
        lodging: "85",
        mAndI: "87",
        perDiem: "172",
        locationCode: "10023"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "BRAZIL",
        location: "Brasilia",
        lodging: "135",
        mAndI: "106",
        perDiem: "241",
        locationCode: "10022"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "BRAZIL",
        location: "Fortaleza",
        lodging: "210",
        mAndI: "114",
        perDiem: "324",
        locationCode: "11004"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "BRAZIL",
        location: "Foz do Iguacu",
        lodging: "78",
        mAndI: "78",
        perDiem: "156",
        locationCode: "11102"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "BRAZIL",
        location: "Goiania",
        lodging: "194",
        mAndI: "131",
        perDiem: "325",
        locationCode: "11103"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "BRAZIL",
        location: "Manaus",
        lodging: "147",
        mAndI: "118",
        perDiem: "265",
        locationCode: "11105"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "BRAZIL",
        location: "Natal",
        lodging: "199",
        mAndI: "95",
        perDiem: "294",
        locationCode: "11106"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "BRAZIL",
        location: "Porto Alegre",
        lodging: "177",
        mAndI: "114",
        perDiem: "291",
        locationCode: "10029"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "BRAZIL",
        location: "Porto Velho",
        lodging: "71",
        mAndI: "41",
        perDiem: "112",
        locationCode: "15062"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "BRAZIL",
        location: "Recife, Pernambuco",
        lodging: "199",
        mAndI: "93",
        perDiem: "292",
        locationCode: "10030"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "BRAZIL",
        location: "Rio de Janeiro",
        lodging: "218",
        mAndI: "162",
        perDiem: "380",
        locationCode: "10031"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "BRAZIL",
        location: "Salvador da Bahia",
        lodging: "201",
        mAndI: "121",
        perDiem: "322",
        locationCode: "11108"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "BRAZIL",
        location: "Sao Paulo",
        lodging: "286",
        mAndI: "101",
        perDiem: "387",
        locationCode: "10033"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "BRUNEI",
        location: "[Other]",
        lodging: "75",
        mAndI: "48",
        perDiem: "123",
        locationCode: "11788"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "BRUNEI",
        location: "Bandar Seri Begawan",
        lodging: "167",
        mAndI: "90",
        perDiem: "257",
        locationCode: "10250"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "BRUNEI",
        location: "Jerudong",
        lodging: "245",
        mAndI: "106",
        perDiem: "351",
        locationCode: "19980"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "BULGARIA",
        location: "[Other]",
        lodging: "106",
        mAndI: "81",
        perDiem: "187",
        locationCode: "11762"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "BULGARIA",
        location: "Bourgas",
        lodging: "126",
        mAndI: "80",
        perDiem: "206",
        locationCode: "12220"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "BULGARIA",
        location: "Plovdiv",
        lodging: "119",
        mAndI: "87",
        perDiem: "206",
        locationCode: "12216"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "BULGARIA",
        location: "Sofia",
        lodging: "173",
        mAndI: "94",
        perDiem: "267",
        locationCode: "10115"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "BULGARIA",
        location: "Varna",
        lodging: "114",
        mAndI: "77",
        perDiem: "191",
        locationCode: "12219"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "BURKINA FASO",
        location: "[Other]",
        lodging: "67",
        mAndI: "60",
        perDiem: "127",
        locationCode: "11854"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "BURKINA FASO",
        location: "Bobo Dioulasso",
        lodging: "67",
        mAndI: "60",
        perDiem: "127",
        locationCode: "11116"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "BURKINA FASO",
        location: "Ouagadougou",
        lodging: "201",
        mAndI: "98",
        perDiem: "299",
        locationCode: "10432"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "BURMA",
        location: "[Other]",
        lodging: "150",
        mAndI: "93",
        perDiem: "243",
        locationCode: "11789"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "BURMA",
        location: "Naypyitaw",
        lodging: "110",
        mAndI: "106",
        perDiem: "216",
        locationCode: "13519"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "BURMA",
        location: "Rangoon",
        lodging: "180",
        mAndI: "107",
        perDiem: "287",
        locationCode: "10251"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "BURUNDI",
        location: "[Other]",
        lodging: "163",
        mAndI: "88",
        perDiem: "251",
        locationCode: "11892"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "BURUNDI",
        location: "Bujumbura",
        lodging: "163",
        mAndI: "88",
        perDiem: "251",
        locationCode: "10378"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "CABO VERDE",
        location: "[Other]",
        lodging: "91",
        mAndI: "83",
        perDiem: "174",
        locationCode: "11826"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "CABO VERDE",
        location: "Boa Vista Island",
        lodging: "154",
        mAndI: "59",
        perDiem: "213",
        locationCode: "11680"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "CABO VERDE",
        location: "Fogo",
        lodging: "93",
        mAndI: "63",
        perDiem: "156",
        locationCode: "12283"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "CABO VERDE",
        location: "Praia",
        lodging: "115",
        mAndI: "87",
        perDiem: "202",
        locationCode: "10381"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "CABO VERDE",
        location: "Sal Island",
        lodging: "174",
        mAndI: "124",
        perDiem: "298",
        locationCode: "11681"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "CABO VERDE",
        location: "Sao Tiago Island",
        lodging: "122",
        mAndI: "85",
        perDiem: "207",
        locationCode: "11682"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "CABO VERDE",
        location: "Sao Vicente Island",
        lodging: "142",
        mAndI: "97",
        perDiem: "239",
        locationCode: "11683"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "CAMBODIA",
        location: "[Other]",
        lodging: "110",
        mAndI: "57",
        perDiem: "167",
        locationCode: "11790"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "CAMBODIA",
        location: "Phnom Penh",
        lodging: "182",
        mAndI: "82",
        perDiem: "264",
        locationCode: "10253"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "CAMBODIA",
        location: "Siem Reap",
        lodging: "187",
        mAndI: "79",
        perDiem: "266",
        locationCode: "11117"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "CAMBODIA",
        location: "Sihanoukville",
        lodging: "145",
        mAndI: "73",
        perDiem: "218",
        locationCode: "13422"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "CAMBODIA",
        location: "Sihanoukville",
        lodging: "180",
        mAndI: "76",
        perDiem: "256",
        locationCode: "13422"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "CAMEROON",
        location: "[Other]",
        lodging: "144",
        mAndI: "58",
        perDiem: "202",
        locationCode: "11825"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "CAMEROON",
        location: "Douala",
        lodging: "213",
        mAndI: "116",
        perDiem: "329",
        locationCode: "10380"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "CAMEROON",
        location: "Limbe",
        lodging: "151",
        mAndI: "68",
        perDiem: "219",
        locationCode: "15055"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "CAMEROON",
        location: "Yaounde",
        lodging: "203",
        mAndI: "117",
        perDiem: "320",
        locationCode: "10379"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "CANADA",
        location: "[Other]",
        lodging: "174",
        mAndI: "125",
        perDiem: "299",
        locationCode: "11763"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "CANADA",
        location: "Banff",
        lodging: "281",
        mAndI: "82",
        perDiem: "363",
        locationCode: "11118"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "CANADA",
        location: "Calgary",
        lodging: "221",
        mAndI: "132",
        perDiem: "353",
        locationCode: "10118"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "CANADA",
        location: "Dartmouth",
        lodging: "329",
        mAndI: "152",
        perDiem: "481",
        locationCode: "10827"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "CANADA",
        location: "Edmonton",
        lodging: "228",
        mAndI: "124",
        perDiem: "352",
        locationCode: "10492"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "CANADA",
        location: "Fort McMurray, Alberta",
        lodging: "210",
        mAndI: "92",
        perDiem: "302",
        locationCode: "13823"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "CANADA",
        location: "Fredericton",
        lodging: "181",
        mAndI: "113",
        perDiem: "294",
        locationCode: "12195"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "CANADA",
        location: "Gander, Newfoundland",
        lodging: "133",
        mAndI: "108",
        perDiem: "241",
        locationCode: "12294"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "CANADA",
        location: "Goose Bay",
        lodging: "159",
        mAndI: "108",
        perDiem: "267",
        locationCode: "91127"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "CANADA",
        location: "Halifax",
        lodging: "329",
        mAndI: "152",
        perDiem: "481",
        locationCode: "10119"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "CANADA",
        location: "Kelowna",
        lodging: "183",
        mAndI: "126",
        perDiem: "309",
        locationCode: "91128"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "CANADA",
        location: "London, Ontario",
        lodging: "207",
        mAndI: "124",
        perDiem: "331",
        locationCode: "10829"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "CANADA",
        location: "Moncton",
        lodging: "146",
        mAndI: "111",
        perDiem: "257",
        locationCode: "12194"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "CANADA",
        location: "Montreal",
        lodging: "178",
        mAndI: "117",
        perDiem: "295",
        locationCode: "10120"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "CANADA",
        location: "Nanoose Bay",
        lodging: "101",
        mAndI: "93",
        perDiem: "194",
        locationCode: "13883"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "CANADA",
        location: "Niagara Falls, Ontario",
        lodging: "216",
        mAndI: "134",
        perDiem: "350",
        locationCode: "91167"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "CANADA",
        location: "Ottawa",
        lodging: "202",
        mAndI: "109",
        perDiem: "311",
        locationCode: "10117"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "CANADA",
        location: "Prince Edward Island",
        lodging: "203",
        mAndI: "134",
        perDiem: "337",
        locationCode: "11121"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "CANADA",
        location: "Quebec",
        lodging: "297",
        mAndI: "149",
        perDiem: "446",
        locationCode: "10121"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "CANADA",
        location: "Regina, Saskatchewan",
        lodging: "192",
        mAndI: "91",
        perDiem: "283",
        locationCode: "13822"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "CANADA",
        location: "Richmond",
        lodging: "204",
        mAndI: "121",
        perDiem: "325",
        locationCode: "11122"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "CANADA",
        location: "Saskatoon, Saskatchewan",
        lodging: "188",
        mAndI: "90",
        perDiem: "278",
        locationCode: "12734"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "CANADA",
        location: "Sidney",
        lodging: "139",
        mAndI: "101",
        perDiem: "240",
        locationCode: "11124"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "CANADA",
        location: "St. John's, Newfoundland",
        lodging: "209",
        mAndI: "153",
        perDiem: "362",
        locationCode: "11123"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "CANADA",
        location: "Toronto",
        lodging: "335",
        mAndI: "146",
        perDiem: "481",
        locationCode: "10122"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "CANADA",
        location: "Vancouver",
        lodging: "346",
        mAndI: "169",
        perDiem: "515",
        locationCode: "10123"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "CANADA",
        location: "Vancouver",
        lodging: "203",
        mAndI: "155",
        perDiem: "358",
        locationCode: "10123"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "CANADA",
        location: "Victoria",
        lodging: "243",
        mAndI: "138",
        perDiem: "381",
        locationCode: "10832"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "CANADA",
        location: "Victoria",
        lodging: "194",
        mAndI: "133",
        perDiem: "327",
        locationCode: "10832"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "CANADA",
        location: "Whistler, BC",
        lodging: "228",
        mAndI: "118",
        perDiem: "346",
        locationCode: "91140"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "CANADA",
        location: "Whitehorse, Yukon",
        lodging: "212",
        mAndI: "96",
        perDiem: "308",
        locationCode: "91129"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "CANADA",
        location: "Winnipeg",
        lodging: "153",
        mAndI: "145",
        perDiem: "298",
        locationCode: "10124"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "CANADA",
        location: "Yellowknife",
        lodging: "131",
        mAndI: "96",
        perDiem: "227",
        locationCode: "91130"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "CAYMAN ISLANDS",
        location: "Cayman Islands",
        lodging: "307",
        mAndI: "119",
        perDiem: "426",
        locationCode: "19016"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "CAYMAN ISLANDS",
        location: "Cayman Islands",
        lodging: "588",
        mAndI: "147",
        perDiem: "735",
        locationCode: "19016"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "CENTRAL AFRICAN REPUBLIC",
        location: "[Other]",
        lodging: "215",
        mAndI: "87",
        perDiem: "302",
        locationCode: "11827"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "CENTRAL AFRICAN REPUBLIC",
        location: "Bangui",
        lodging: "215",
        mAndI: "87",
        perDiem: "302",
        locationCode: "10382"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "CHAD",
        location: "[Other]",
        lodging: "173",
        mAndI: "100",
        perDiem: "273",
        locationCode: "11828"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "CHAD",
        location: "Ndjamena",
        lodging: "220",
        mAndI: "108",
        perDiem: "328",
        locationCode: "10383"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "CHAGOS ARCHIPELAGO",
        location: "Diego Garcia",
        lodging: "147",
        mAndI: "80",
        perDiem: "227",
        locationCode: "11057"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "CHILE",
        location: "[Other]",
        lodging: "220",
        mAndI: "94",
        perDiem: "314",
        locationCode: "11893"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "CHILE",
        location: "Santiago",
        lodging: "226",
        mAndI: "103",
        perDiem: "329",
        locationCode: "10035"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "CHINA",
        location: "[Other]",
        lodging: "130",
        mAndI: "102",
        perDiem: "232",
        locationCode: "11791"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "CHINA",
        location: "Beijing",
        lodging: "247",
        mAndI: "138",
        perDiem: "385",
        locationCode: "10254"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "CHINA",
        location: "Changchun",
        lodging: "167",
        mAndI: "100",
        perDiem: "267",
        locationCode: "13481"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "CHINA",
        location: "Chengdu",
        lodging: "180",
        mAndI: "123",
        perDiem: "303",
        locationCode: "10258"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "CHINA",
        location: "Chongqing",
        lodging: "119",
        mAndI: "99",
        perDiem: "218",
        locationCode: "11127"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "CHINA",
        location: "Dalian",
        lodging: "166",
        mAndI: "108",
        perDiem: "274",
        locationCode: "11128"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "CHINA",
        location: "Fuzhou",
        lodging: "176",
        mAndI: "122",
        perDiem: "298",
        locationCode: "12239"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "CHINA",
        location: "Guangzhou",
        lodging: "246",
        mAndI: "169",
        perDiem: "415",
        locationCode: "10255"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "CHINA",
        location: "Guilin",
        lodging: "168",
        mAndI: "100",
        perDiem: "268",
        locationCode: "12911"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "CHINA",
        location: "Haikou",
        lodging: "162",
        mAndI: "105",
        perDiem: "267",
        locationCode: "12242"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "CHINA",
        location: "Hangzhou",
        lodging: "169",
        mAndI: "124",
        perDiem: "293",
        locationCode: "11129"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "CHINA",
        location: "Harbin",
        lodging: "187",
        mAndI: "101",
        perDiem: "288",
        locationCode: "12514"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "CHINA",
        location: "Jinan",
        lodging: "169",
        mAndI: "114",
        perDiem: "283",
        locationCode: "15031"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "CHINA",
        location: "Lhasa",
        lodging: "210",
        mAndI: "111",
        perDiem: "321",
        locationCode: "11998"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "CHINA",
        location: "Lijiang",
        lodging: "153",
        mAndI: "133",
        perDiem: "286",
        locationCode: "13361"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "CHINA",
        location: "Nanjing",
        lodging: "125",
        mAndI: "70",
        perDiem: "195",
        locationCode: "11130"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "CHINA",
        location: "Nanning",
        lodging: "131",
        mAndI: "119",
        perDiem: "250",
        locationCode: "12241"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "CHINA",
        location: "Ningbo",
        lodging: "124",
        mAndI: "88",
        perDiem: "212",
        locationCode: "13594"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "CHINA",
        location: "Qingdao",
        lodging: "203",
        mAndI: "108",
        perDiem: "311",
        locationCode: "12504"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "CHINA",
        location: "Sanya",
        lodging: "158",
        mAndI: "82",
        perDiem: "240",
        locationCode: "13406"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "CHINA",
        location: "Shanghai",
        lodging: "226",
        mAndI: "126",
        perDiem: "352",
        locationCode: "10256"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "CHINA",
        location: "Shantou",
        lodging: "141",
        mAndI: "86",
        perDiem: "227",
        locationCode: "11131"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "CHINA",
        location: "Shenyang",
        lodging: "169",
        mAndI: "95",
        perDiem: "264",
        locationCode: "10257"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "CHINA",
        location: "Shenzhen",
        lodging: "236",
        mAndI: "122",
        perDiem: "358",
        locationCode: "11132"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "CHINA",
        location: "Suzhou",
        lodging: "136",
        mAndI: "98",
        perDiem: "234",
        locationCode: "13475"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "CHINA",
        location: "Tianjin",
        lodging: "201",
        mAndI: "114",
        perDiem: "315",
        locationCode: "11133"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "CHINA",
        location: "Urumqi",
        lodging: "146",
        mAndI: "79",
        perDiem: "225",
        locationCode: "12560"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "CHINA",
        location: "Wuhan",
        lodging: "130",
        mAndI: "102",
        perDiem: "232",
        locationCode: "12509"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "CHINA",
        location: "Xiamen",
        lodging: "175",
        mAndI: "113",
        perDiem: "288",
        locationCode: "12243"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "CHINA",
        location: "Xian",
        lodging: "196",
        mAndI: "123",
        perDiem: "319",
        locationCode: "11134"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "CHINA",
        location: "Zhuhai",
        lodging: "154",
        mAndI: "108",
        perDiem: "262",
        locationCode: "12240"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "COCOS (KEELING) ISLANDS",
        location: "Cocos Islands",
        lodging: "58",
        mAndI: "50",
        perDiem: "108",
        locationCode: "11135"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "COLOMBIA",
        location: "[Other]",
        lodging: "122",
        mAndI: "76",
        perDiem: "198",
        locationCode: "11744"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "COLOMBIA",
        location: "Barranquilla",
        lodging: "190",
        mAndI: "107",
        perDiem: "297",
        locationCode: "10041"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "COLOMBIA",
        location: "Bogota",
        lodging: "399",
        mAndI: "170",
        perDiem: "569",
        locationCode: "10040"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "COLOMBIA",
        location: "Bucaramanga",
        lodging: "197",
        mAndI: "123",
        perDiem: "320",
        locationCode: "13582"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "COLOMBIA",
        location: "Buenaventura",
        lodging: "118",
        mAndI: "84",
        perDiem: "202",
        locationCode: "12484"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "COLOMBIA",
        location: "Cali",
        lodging: "238",
        mAndI: "117",
        perDiem: "355",
        locationCode: "10042"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "COLOMBIA",
        location: "Cartagena",
        lodging: "381",
        mAndI: "156",
        perDiem: "537",
        locationCode: "11136"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "COLOMBIA",
        location: "Cucuta",
        lodging: "127",
        mAndI: "91",
        perDiem: "218",
        locationCode: "91150"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "COLOMBIA",
        location: "Medellin",
        lodging: "228",
        mAndI: "126",
        perDiem: "354",
        locationCode: "12415"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "COLOMBIA",
        location: "Pasto",
        lodging: "146",
        mAndI: "77",
        perDiem: "223",
        locationCode: "91154"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "COLOMBIA",
        location: "San Andres",
        lodging: "173",
        mAndI: "71",
        perDiem: "244",
        locationCode: "11999"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "COLOMBIA",
        location: "San Jose del Guaviare",
        lodging: "122",
        mAndI: "76",
        perDiem: "198",
        locationCode: "91146"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "COLOMBIA",
        location: "Santa Marta",
        lodging: "231",
        mAndI: "116",
        perDiem: "347",
        locationCode: "12648"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "COLOMBIA",
        location: "Tumaco",
        lodging: "98",
        mAndI: "77",
        perDiem: "175",
        locationCode: "91145"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "COMOROS",
        location: "[Other]",
        lodging: "72",
        mAndI: "71",
        perDiem: "143",
        locationCode: "11829"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "COMOROS",
        location: "Moroni",
        lodging: "116",
        mAndI: "75",
        perDiem: "191",
        locationCode: "10384"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "COOK ISLANDS",
        location: "[Other]",
        lodging: "218",
        mAndI: "108",
        perDiem: "326",
        locationCode: "11917"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "COOK ISLANDS",
        location: "Rarotonga",
        lodging: "218",
        mAndI: "108",
        perDiem: "326",
        locationCode: "11044"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "COSTA RICA",
        location: "[Other]",
        lodging: "147",
        mAndI: "131",
        perDiem: "278",
        locationCode: "11745"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "COSTA RICA",
        location: "San Jose",
        lodging: "147",
        mAndI: "131",
        perDiem: "278",
        locationCode: "10044"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "COTE D'IVOIRE",
        location: "[Other]",
        lodging: "80",
        mAndI: "76",
        perDiem: "156",
        locationCode: "11839"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "COTE D'IVOIRE",
        location: "Abidjan",
        lodging: "216",
        mAndI: "107",
        perDiem: "323",
        locationCode: "10724"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "COTE D'IVOIRE",
        location: "Yamoussoukro",
        lodging: "75",
        mAndI: "71",
        perDiem: "146",
        locationCode: "11489"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "CROATIA",
        location: "[Other]",
        lodging: "171",
        mAndI: "97",
        perDiem: "268",
        locationCode: "11912"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "CROATIA",
        location: "Cavtat",
        lodging: "453",
        mAndI: "144",
        perDiem: "597",
        locationCode: "13394"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "CROATIA",
        location: "Cavtat",
        lodging: "313",
        mAndI: "130",
        perDiem: "443",
        locationCode: "13394"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "CROATIA",
        location: "Dubrovnik",
        lodging: "453",
        mAndI: "144",
        perDiem: "597",
        locationCode: "12718"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "CROATIA",
        location: "Dubrovnik",
        lodging: "313",
        mAndI: "130",
        perDiem: "443",
        locationCode: "12718"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "CROATIA",
        location: "Split",
        lodging: "412",
        mAndI: "134",
        perDiem: "546",
        locationCode: "12719"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "CROATIA",
        location: "Split",
        lodging: "282",
        mAndI: "121",
        perDiem: "403",
        locationCode: "12719"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "CROATIA",
        location: "Zagreb",
        lodging: "171",
        mAndI: "97",
        perDiem: "268",
        locationCode: "10838"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "CUBA",
        location: "[Other]",
        lodging: "100",
        mAndI: "49",
        perDiem: "149",
        locationCode: "11746"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "CUBA",
        location: "Camaguey",
        lodging: "180",
        mAndI: "64",
        perDiem: "244",
        locationCode: "19973"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "CUBA",
        location: "Guantanamo Bay",
        lodging: "125",
        mAndI: "52",
        perDiem: "177",
        locationCode: "10441"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "CUBA",
        location: "Havana",
        lodging: "275",
        mAndI: "118",
        perDiem: "393",
        locationCode: "10047"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "CUBA",
        location: "Holguin",
        lodging: "100",
        mAndI: "49",
        perDiem: "149",
        locationCode: "19975"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "CUBA",
        location: "Matanzas",
        lodging: "110",
        mAndI: "47",
        perDiem: "157",
        locationCode: "19970"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "CUBA",
        location: "Santiago",
        lodging: "130",
        mAndI: "60",
        perDiem: "190",
        locationCode: "13872"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "CUBA",
        location: "Trinidad",
        lodging: "128",
        mAndI: "63",
        perDiem: "191",
        locationCode: "19972"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "Curacao",
        location: "Curacao",
        lodging: "362",
        mAndI: "137",
        perDiem: "499",
        locationCode: "10088"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "CYPRUS",
        location: "[Other]",
        lodging: "185",
        mAndI: "90",
        perDiem: "275",
        locationCode: "11764"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "CYPRUS",
        location: "Akrotiri",
        lodging: "250",
        mAndI: "134",
        perDiem: "384",
        locationCode: "13359"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "CYPRUS",
        location: "Limassol",
        lodging: "250",
        mAndI: "134",
        perDiem: "384",
        locationCode: "11139"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "CYPRUS",
        location: "Nicosia",
        lodging: "210",
        mAndI: "96",
        perDiem: "306",
        locationCode: "10126"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "CYPRUS",
        location: "Paphos",
        lodging: "166",
        mAndI: "107",
        perDiem: "273",
        locationCode: "13518"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "Czech Republic",
        location: "[Other]",
        lodging: "139",
        mAndI: "82",
        perDiem: "221",
        locationCode: "11913"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "Czech Republic",
        location: "Brno",
        lodging: "132",
        mAndI: "84",
        perDiem: "216",
        locationCode: "13581"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "Czech Republic",
        location: "Prague",
        lodging: "255",
        mAndI: "110",
        perDiem: "365",
        locationCode: "10839"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "DEM. PEOPLE'S REPUBLIC OF KOREA",
        location: "[Other]",
        lodging: "113",
        mAndI: "63",
        perDiem: "176",
        locationCode: "11952"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "DEM. PEOPLE'S REPUBLIC OF KOREA",
        location: "Pyongyang",
        lodging: "168",
        mAndI: "69",
        perDiem: "237",
        locationCode: "11730"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "DEMOCRATIC REPUBLIC OF THE CONGO",
        location: "[Other]",
        lodging: "139",
        mAndI: "107",
        perDiem: "246",
        locationCode: "11888"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "DEMOCRATIC REPUBLIC OF THE CONGO",
        location: "Bukavu",
        lodging: "154",
        mAndI: "122",
        perDiem: "276",
        locationCode: "10427"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "DEMOCRATIC REPUBLIC OF THE CONGO",
        location: "Goma",
        lodging: "139",
        mAndI: "107",
        perDiem: "246",
        locationCode: "11500"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "DEMOCRATIC REPUBLIC OF THE CONGO",
        location: "Kinshasa",
        lodging: "240",
        mAndI: "152",
        perDiem: "392",
        locationCode: "10424"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "DEMOCRATIC REPUBLIC OF THE CONGO",
        location: "Lubumbashi",
        lodging: "158",
        mAndI: "147",
        perDiem: "305",
        locationCode: "10425"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "DENMARK",
        location: "[Other]",
        lodging: "205",
        mAndI: "105",
        perDiem: "310",
        locationCode: "11765"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "DENMARK",
        location: "Aalborg",
        lodging: "195",
        mAndI: "110",
        perDiem: "305",
        locationCode: "12505"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "DENMARK",
        location: "Copenhagen",
        lodging: "249",
        mAndI: "151",
        perDiem: "400",
        locationCode: "10129"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "DENMARK",
        location: "Lyngby",
        lodging: "249",
        mAndI: "151",
        perDiem: "400",
        locationCode: "13841"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "DENMARK",
        location: "Odense",
        lodging: "202",
        mAndI: "116",
        perDiem: "318",
        locationCode: "12507"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "DJIBOUTI",
        location: "[Other]",
        lodging: "85",
        mAndI: "98",
        perDiem: "183",
        locationCode: "11821"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "DJIBOUTI",
        location: "Djibouti City",
        lodging: "260",
        mAndI: "120",
        perDiem: "380",
        locationCode: "11078"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "DOMINICA",
        location: "Dominica",
        lodging: "316",
        mAndI: "135",
        perDiem: "451",
        locationCode: "11140"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "DOMINICAN REPUBLIC",
        location: "[Other]",
        lodging: "192",
        mAndI: "98",
        perDiem: "290",
        locationCode: "11747"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "DOMINICAN REPUBLIC",
        location: "Santo Domingo",
        lodging: "221",
        mAndI: "125",
        perDiem: "346",
        locationCode: "10054"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "DOMINICAN REPUBLIC",
        location: "Sosua",
        lodging: "150",
        mAndI: "63",
        perDiem: "213",
        locationCode: "11143"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "ECUADOR",
        location: "[Other]",
        lodging: "122",
        mAndI: "94",
        perDiem: "216",
        locationCode: "11910"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "ECUADOR",
        location: "Cuenca",
        lodging: "122",
        mAndI: "94",
        perDiem: "216",
        locationCode: "12132"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "ECUADOR",
        location: "Galapagos Islands",
        lodging: "300",
        mAndI: "136",
        perDiem: "436",
        locationCode: "13928"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "ECUADOR",
        location: "Guayaquil",
        lodging: "149",
        mAndI: "102",
        perDiem: "251",
        locationCode: "10057"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "ECUADOR",
        location: "Manta",
        lodging: "118",
        mAndI: "89",
        perDiem: "207",
        locationCode: "12002"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "ECUADOR",
        location: "Quito",
        lodging: "190",
        mAndI: "105",
        perDiem: "295",
        locationCode: "10056"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "EGYPT",
        location: "[Other]",
        lodging: "165",
        mAndI: "70",
        perDiem: "235",
        locationCode: "11809"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "EGYPT",
        location: "Alexandria",
        lodging: "175",
        mAndI: "95",
        perDiem: "270",
        locationCode: "10329"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "EGYPT",
        location: "Aswan",
        lodging: "135",
        mAndI: "102",
        perDiem: "237",
        locationCode: "11145"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "EGYPT",
        location: "Aswan",
        lodging: "165",
        mAndI: "105",
        perDiem: "270",
        locationCode: "11145"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "EGYPT",
        location: "Cairo",
        lodging: "175",
        mAndI: "98",
        perDiem: "273",
        locationCode: "10328"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "EGYPT",
        location: "Luxor",
        lodging: "150",
        mAndI: "79",
        perDiem: "229",
        locationCode: "11389"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "EGYPT",
        location: "Sharm el Sheikh",
        lodging: "140",
        mAndI: "86",
        perDiem: "226",
        locationCode: "11395"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "EGYPT",
        location: "Sharm el Sheikh",
        lodging: "160",
        mAndI: "88",
        perDiem: "248",
        locationCode: "11395"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "EL SALVADOR",
        location: "[Other]",
        lodging: "62",
        mAndI: "48",
        perDiem: "110",
        locationCode: "11748"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "EL SALVADOR",
        location: "San Salvador",
        lodging: "128",
        mAndI: "93",
        perDiem: "221",
        locationCode: "10058"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "EQUATORIAL GUINEA",
        location: "[Other]",
        lodging: "168",
        mAndI: "105",
        perDiem: "273",
        locationCode: "11832"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "EQUATORIAL GUINEA",
        location: "Bata",
        lodging: "110",
        mAndI: "61",
        perDiem: "171",
        locationCode: "91132"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "EQUATORIAL GUINEA",
        location: "Malabo",
        lodging: "168",
        mAndI: "105",
        perDiem: "273",
        locationCode: "10387"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "ERITREA",
        location: "[Other]",
        lodging: "60",
        mAndI: "85",
        perDiem: "145",
        locationCode: "11901"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "ERITREA",
        location: "Asmara",
        lodging: "125",
        mAndI: "75",
        perDiem: "200",
        locationCode: "10726"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "ERITREA",
        location: "Keren",
        lodging: "60",
        mAndI: "85",
        perDiem: "145",
        locationCode: "20010"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "ERITREA",
        location: "Massawa",
        lodging: "90",
        mAndI: "83",
        perDiem: "173",
        locationCode: "20001"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "ESTONIA",
        location: "[Other]",
        lodging: "217",
        mAndI: "109",
        perDiem: "326",
        locationCode: "11856"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "ESTONIA",
        location: "[Other]",
        lodging: "155",
        mAndI: "102",
        perDiem: "257",
        locationCode: "11856"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "ESTONIA",
        location: "Tallinn",
        lodging: "185",
        mAndI: "110",
        perDiem: "295",
        locationCode: "10130"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "ESWATINI",
        location: "[Other]",
        lodging: "30",
        mAndI: "20",
        perDiem: "50",
        locationCode: "11850"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "ESWATINI",
        location: "Mbabane",
        lodging: "91",
        mAndI: "53",
        perDiem: "144",
        locationCode: "10419"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "ETHIOPIA",
        location: "[Other]",
        lodging: "96",
        mAndI: "61",
        perDiem: "157",
        locationCode: "11833"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "ETHIOPIA",
        location: "Addis Ababa",
        lodging: "250",
        mAndI: "134",
        perDiem: "384",
        locationCode: "10388"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "Falkland Islands (Islas Malvinas)",
        location: "Falkland Islands",
        lodging: "97",
        mAndI: "70",
        perDiem: "167",
        locationCode: "11161"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "FAROE ISLANDS",
        location: "Faroe Islands",
        lodging: "220",
        mAndI: "94",
        perDiem: "314",
        locationCode: "11162"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "FIJI",
        location: "[Other]",
        lodging: "219",
        mAndI: "113",
        perDiem: "332",
        locationCode: "11792"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "FIJI",
        location: "Korolevu",
        lodging: "65",
        mAndI: "73",
        perDiem: "138",
        locationCode: "12262"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "FIJI",
        location: "Nadi",
        lodging: "173",
        mAndI: "92",
        perDiem: "265",
        locationCode: "11163"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "FIJI",
        location: "Natadola",
        lodging: "424",
        mAndI: "149",
        perDiem: "573",
        locationCode: "19991"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "FIJI",
        location: "Sigatoka",
        lodging: "134",
        mAndI: "77",
        perDiem: "211",
        locationCode: "11164"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "FIJI",
        location: "Suva",
        lodging: "219",
        mAndI: "113",
        perDiem: "332",
        locationCode: "10259"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "FINLAND",
        location: "[Other]",
        lodging: "239",
        mAndI: "115",
        perDiem: "354",
        locationCode: "11766"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "FINLAND",
        location: "Helsinki",
        lodging: "267",
        mAndI: "135",
        perDiem: "402",
        locationCode: "10131"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "FRANCE",
        location: "[Other]",
        lodging: "205",
        mAndI: "124",
        perDiem: "329",
        locationCode: "11855"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "FRANCE",
        location: "Bordeaux",
        lodging: "199",
        mAndI: "126",
        perDiem: "325",
        locationCode: "10138"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "FRANCE",
        location: "Cannes",
        lodging: "460",
        mAndI: "156",
        perDiem: "616",
        locationCode: "11166"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "FRANCE",
        location: "Cannes",
        lodging: "323",
        mAndI: "142",
        perDiem: "465",
        locationCode: "11166"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "FRANCE",
        location: "Deauville",
        lodging: "317",
        mAndI: "121",
        perDiem: "438",
        locationCode: "12087"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "FRANCE",
        location: "Lyon",
        lodging: "273",
        mAndI: "142",
        perDiem: "415",
        locationCode: "10139"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "FRANCE",
        location: "Marseille",
        lodging: "330",
        mAndI: "144",
        perDiem: "474",
        locationCode: "10140"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "FRANCE",
        location: "Montpellier",
        lodging: "196",
        mAndI: "155",
        perDiem: "351",
        locationCode: "10843"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "FRANCE",
        location: "Nice",
        lodging: "210",
        mAndI: "131",
        perDiem: "341",
        locationCode: "11412"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "FRANCE",
        location: "Paris",
        lodging: "476",
        mAndI: "161",
        perDiem: "637",
        locationCode: "10137"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "FRANCE",
        location: "Strasbourg",
        lodging: "330",
        mAndI: "153",
        perDiem: "483",
        locationCode: "10142"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "FRANCE",
        location: "Toulouse",
        lodging: "220",
        mAndI: "122",
        perDiem: "342",
        locationCode: "11413"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "FRENCH GUIANA",
        location: "French Guiana",
        lodging: "168",
        mAndI: "87",
        perDiem: "255",
        locationCode: "11173"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "FRENCH POLYNESIA",
        location: "French Polynesia",
        lodging: "266",
        mAndI: "155",
        perDiem: "421",
        locationCode: "11174"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "GABON",
        location: "[Other]",
        lodging: "184",
        mAndI: "133",
        perDiem: "317",
        locationCode: "11834"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "GABON",
        location: "Libreville",
        lodging: "210",
        mAndI: "133",
        perDiem: "343",
        locationCode: "10389"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "Gambia, The",
        location: "[Other]",
        lodging: "35",
        mAndI: "32",
        perDiem: "67",
        locationCode: "11835"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "Gambia, The",
        location: "Banjul",
        lodging: "143",
        mAndI: "71",
        perDiem: "214",
        locationCode: "10390"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "GEORGIA",
        location: "[Other]",
        lodging: "72",
        mAndI: "63",
        perDiem: "135",
        locationCode: "11767"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "GEORGIA",
        location: "Ajara Region",
        lodging: "195",
        mAndI: "95",
        perDiem: "290",
        locationCode: "13416"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "GEORGIA",
        location: "Borjomi",
        lodging: "91",
        mAndI: "71",
        perDiem: "162",
        locationCode: "13420"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "GEORGIA",
        location: "Gudauri",
        lodging: "104",
        mAndI: "71",
        perDiem: "175",
        locationCode: "13414"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "GEORGIA",
        location: "Gudauri",
        lodging: "162",
        mAndI: "77",
        perDiem: "239",
        locationCode: "13414"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "GEORGIA",
        location: "Kutaisi",
        lodging: "85",
        mAndI: "76",
        perDiem: "161",
        locationCode: "13417"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "GEORGIA",
        location: "Tbilisi",
        lodging: "236",
        mAndI: "105",
        perDiem: "341",
        locationCode: "10143"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "GERMANY",
        location: "[Other]",
        lodging: "209",
        mAndI: "124",
        perDiem: "333",
        locationCode: "11857"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "GERMANY",
        location: "Berlin",
        lodging: "247",
        mAndI: "133",
        perDiem: "380",
        locationCode: "10145"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "GERMANY",
        location: "Boeblingen",
        lodging: "220",
        mAndI: "126",
        perDiem: "346",
        locationCode: "10898"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "GERMANY",
        location: "Bonames",
        lodging: "222",
        mAndI: "115",
        perDiem: "337",
        locationCode: "11182"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "GERMANY",
        location: "Bonn",
        lodging: "209",
        mAndI: "124",
        perDiem: "333",
        locationCode: "10144"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "GERMANY",
        location: "Bremen",
        lodging: "215",
        mAndI: "121",
        perDiem: "336",
        locationCode: "10856"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "GERMANY",
        location: "Cologne",
        lodging: "265",
        mAndI: "119",
        perDiem: "384",
        locationCode: "10152"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "GERMANY",
        location: "Dresden",
        lodging: "220",
        mAndI: "123",
        perDiem: "343",
        locationCode: "11186"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "GERMANY",
        location: "Duesseldorf",
        lodging: "266",
        mAndI: "127",
        perDiem: "393",
        locationCode: "10146"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "GERMANY",
        location: "Echterdingen",
        lodging: "220",
        mAndI: "126",
        perDiem: "346",
        locationCode: "11187"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "GERMANY",
        location: "Erfurt",
        lodging: "219",
        mAndI: "120",
        perDiem: "339",
        locationCode: "11188"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "GERMANY",
        location: "Eschborn",
        lodging: "222",
        mAndI: "115",
        perDiem: "337",
        locationCode: "11189"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "GERMANY",
        location: "Esslingen",
        lodging: "220",
        mAndI: "126",
        perDiem: "346",
        locationCode: "11415"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "GERMANY",
        location: "Frankfurt am Main",
        lodging: "222",
        mAndI: "115",
        perDiem: "337",
        locationCode: "10147"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "GERMANY",
        location: "Garmisch-Partenkirchen",
        lodging: "197",
        mAndI: "111",
        perDiem: "308",
        locationCode: "10867"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "GERMANY",
        location: "Hamburg",
        lodging: "220",
        mAndI: "110",
        perDiem: "330",
        locationCode: "10148"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "GERMANY",
        location: "Hannover",
        lodging: "213",
        mAndI: "113",
        perDiem: "326",
        locationCode: "10151"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "GERMANY",
        location: "Heidelberg",
        lodging: "219",
        mAndI: "120",
        perDiem: "339",
        locationCode: "10153"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "GERMANY",
        location: "Herongen",
        lodging: "266",
        mAndI: "127",
        perDiem: "393",
        locationCode: "10862"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "GERMANY",
        location: "Hoechst",
        lodging: "222",
        mAndI: "115",
        perDiem: "337",
        locationCode: "11423"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "GERMANY",
        location: "Kalkar",
        lodging: "266",
        mAndI: "127",
        perDiem: "393",
        locationCode: "10863"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "GERMANY",
        location: "Koenigswinter",
        lodging: "209",
        mAndI: "124",
        perDiem: "333",
        locationCode: "11427"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "GERMANY",
        location: "Kornwestheim",
        lodging: "220",
        mAndI: "126",
        perDiem: "346",
        locationCode: "11429"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "GERMANY",
        location: "Leipzig",
        lodging: "263",
        mAndI: "121",
        perDiem: "384",
        locationCode: "10623"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "GERMANY",
        location: "Ludwigsburg",
        lodging: "220",
        mAndI: "126",
        perDiem: "346",
        locationCode: "10899"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "GERMANY",
        location: "Mainz",
        lodging: "209",
        mAndI: "131",
        perDiem: "340",
        locationCode: "10901"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "GERMANY",
        location: "Moenchen-Gladbach",
        lodging: "266",
        mAndI: "127",
        perDiem: "393",
        locationCode: "10861"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "GERMANY",
        location: "Munich",
        lodging: "240",
        mAndI: "126",
        perDiem: "366",
        locationCode: "10149"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "GERMANY",
        location: "Nellingen",
        lodging: "220",
        mAndI: "126",
        perDiem: "346",
        locationCode: "10900"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "GERMANY",
        location: "Oberammergau",
        lodging: "197",
        mAndI: "111",
        perDiem: "308",
        locationCode: "10523"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "GERMANY",
        location: "Offenbach",
        lodging: "222",
        mAndI: "115",
        perDiem: "337",
        locationCode: "11434"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "GERMANY",
        location: "Roedelheim",
        lodging: "222",
        mAndI: "115",
        perDiem: "337",
        locationCode: "11439"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "GERMANY",
        location: "Sindelfingen",
        lodging: "220",
        mAndI: "126",
        perDiem: "346",
        locationCode: "11447"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "GERMANY",
        location: "Stuttgart",
        lodging: "220",
        mAndI: "126",
        perDiem: "346",
        locationCode: "10150"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "GERMANY",
        location: "Tuebingen",
        lodging: "220",
        mAndI: "126",
        perDiem: "346",
        locationCode: "11451"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "GERMANY",
        location: "Twisteden",
        lodging: "266",
        mAndI: "127",
        perDiem: "393",
        locationCode: "10864"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "GERMANY",
        location: "Wiesbaden",
        lodging: "225",
        mAndI: "121",
        perDiem: "346",
        locationCode: "10540"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "GHANA",
        location: "[Other]",
        lodging: "120",
        mAndI: "56",
        perDiem: "176",
        locationCode: "11836"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "GHANA",
        location: "Accra",
        lodging: "232",
        mAndI: "79",
        perDiem: "311",
        locationCode: "10391"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "GIBRALTAR",
        location: "Gibraltar",
        lodging: "206",
        mAndI: "112",
        perDiem: "318",
        locationCode: "11225"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "GREECE",
        location: "[Other]",
        lodging: "152",
        mAndI: "80",
        perDiem: "232",
        locationCode: "11894"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "GREECE",
        location: "Athens",
        lodging: "197",
        mAndI: "145",
        perDiem: "342",
        locationCode: "10133"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "GREECE",
        location: "Iraklion (Crete)",
        lodging: "152",
        mAndI: "80",
        perDiem: "232",
        locationCode: "10916"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "GREENLAND",
        location: "[Other]",
        lodging: "208",
        mAndI: "104",
        perDiem: "312",
        locationCode: "13409"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "GREENLAND",
        location: "Ilulissat",
        lodging: "220",
        mAndI: "117",
        perDiem: "337",
        locationCode: "13650"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "GREENLAND",
        location: "Kangerlussuaq",
        lodging: "190",
        mAndI: "105",
        perDiem: "295",
        locationCode: "13602"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "GREENLAND",
        location: "Nuuk",
        lodging: "206",
        mAndI: "113",
        perDiem: "319",
        locationCode: "11058"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "GREENLAND",
        location: "Thule",
        lodging: "210",
        mAndI: "68",
        perDiem: "278",
        locationCode: "13408"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "GRENADA",
        location: "Grenada",
        lodging: "300",
        mAndI: "142",
        perDiem: "442",
        locationCode: "11059"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "GUADELOUPE",
        location: "[Other]",
        lodging: "77",
        mAndI: "80",
        perDiem: "157",
        locationCode: "11939"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "GUADELOUPE",
        location: "Saint Martin (French Part)",
        lodging: "124",
        mAndI: "100",
        perDiem: "224",
        locationCode: "11226"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "GUATEMALA",
        location: "[Other]",
        lodging: "106",
        mAndI: "76",
        perDiem: "182",
        locationCode: "11858"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "GUATEMALA",
        location: "Guatemala City",
        lodging: "144",
        mAndI: "94",
        perDiem: "238",
        locationCode: "10062"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "GUINEA",
        location: "[Other]",
        lodging: "57",
        mAndI: "48",
        perDiem: "105",
        locationCode: "11838"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "GUINEA",
        location: "Conakry",
        lodging: "224",
        mAndI: "94",
        perDiem: "318",
        locationCode: "10393"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "GUINEA-BISSAU",
        location: "[Other]",
        lodging: "73",
        mAndI: "44",
        perDiem: "117",
        locationCode: "11837"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "GUINEA-BISSAU",
        location: "Bissau",
        lodging: "150",
        mAndI: "103",
        perDiem: "253",
        locationCode: "10394"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "GUYANA",
        location: "[Other]",
        lodging: "198",
        mAndI: "119",
        perDiem: "317",
        locationCode: "11741"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "GUYANA",
        location: "Georgetown",
        lodging: "198",
        mAndI: "119",
        perDiem: "317",
        locationCode: "10051"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "HAITI",
        location: "[Other]",
        lodging: "140",
        mAndI: "40",
        perDiem: "180",
        locationCode: "11750"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "HAITI",
        location: "Cap Haitien",
        lodging: "150",
        mAndI: "91",
        perDiem: "241",
        locationCode: "12688"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "HAITI",
        location: "Jacmel",
        lodging: "98",
        mAndI: "75",
        perDiem: "173",
        locationCode: "12692"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "HAITI",
        location: "Montrouis",
        lodging: "133",
        mAndI: "106",
        perDiem: "239",
        locationCode: "12694"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "HAITI",
        location: "Petionville",
        lodging: "155",
        mAndI: "111",
        perDiem: "266",
        locationCode: "11018"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "HAITI",
        location: "Port-au-Prince",
        lodging: "155",
        mAndI: "98",
        perDiem: "253",
        locationCode: "10064"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "HOLY SEE",
        location: "Holy See",
        lodging: "355",
        mAndI: "132",
        perDiem: "487",
        locationCode: "11060"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "HONDURAS",
        location: "[Other]",
        lodging: "130",
        mAndI: "80",
        perDiem: "210",
        locationCode: "11859"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "HONDURAS",
        location: "Bay Islands",
        lodging: "198",
        mAndI: "99",
        perDiem: "297",
        locationCode: "11227"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "HONDURAS",
        location: "La Ceiba",
        lodging: "138",
        mAndI: "85",
        perDiem: "223",
        locationCode: "11228"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "HONDURAS",
        location: "San Pedro Sula",
        lodging: "187",
        mAndI: "98",
        perDiem: "285",
        locationCode: "10066"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "HONDURAS",
        location: "Tegucigalpa",
        lodging: "187",
        mAndI: "91",
        perDiem: "278",
        locationCode: "10065"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "HONDURAS",
        location: "Tela",
        lodging: "125",
        mAndI: "86",
        perDiem: "211",
        locationCode: "11231"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "HONG KONG",
        location: "Hong Kong",
        lodging: "355",
        mAndI: "180",
        perDiem: "535",
        locationCode: "10261"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "HUNGARY",
        location: "[Other]",
        lodging: "130",
        mAndI: "59",
        perDiem: "189",
        locationCode: "11768"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "HUNGARY",
        location: "Budapest",
        lodging: "235",
        mAndI: "93",
        perDiem: "328",
        locationCode: "10158"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "HUNGARY",
        location: "Papa",
        lodging: "130",
        mAndI: "59",
        perDiem: "189",
        locationCode: "13846"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "ICELAND",
        location: "[Other]",
        lodging: "142",
        mAndI: "134",
        perDiem: "276",
        locationCode: "11860"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "ICELAND",
        location: "Akureyri",
        lodging: "143",
        mAndI: "134",
        perDiem: "277",
        locationCode: "13942"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "ICELAND",
        location: "Egilsstadir",
        lodging: "220",
        mAndI: "115",
        perDiem: "335",
        locationCode: "13944"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "ICELAND",
        location: "Reykjavik",
        lodging: "260",
        mAndI: "134",
        perDiem: "394",
        locationCode: "10160"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "ICELAND",
        location: "Reykjavik",
        lodging: "220",
        mAndI: "130",
        perDiem: "350",
        locationCode: "10160"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "INDIA",
        location: "[Other]",
        lodging: "196",
        mAndI: "92",
        perDiem: "288",
        locationCode: "11810"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "INDIA",
        location: "Agra",
        lodging: "139",
        mAndI: "81",
        perDiem: "220",
        locationCode: "11232"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "INDIA",
        location: "Bangalore",
        lodging: "352",
        mAndI: "141",
        perDiem: "493",
        locationCode: "11233"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "INDIA",
        location: "Chennai",
        lodging: "226",
        mAndI: "102",
        perDiem: "328",
        locationCode: "10336"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "INDIA",
        location: "Goa",
        lodging: "195",
        mAndI: "67",
        perDiem: "262",
        locationCode: "13550"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "INDIA",
        location: "Hyderabad",
        lodging: "222",
        mAndI: "116",
        perDiem: "338",
        locationCode: "11235"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "INDIA",
        location: "Kolkata",
        lodging: "268",
        mAndI: "118",
        perDiem: "386",
        locationCode: "10335"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "INDIA",
        location: "Mumbai",
        lodging: "192",
        mAndI: "106",
        perDiem: "298",
        locationCode: "10334"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "INDIA",
        location: "New Delhi",
        lodging: "218",
        mAndI: "115",
        perDiem: "333",
        locationCode: "10333"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "INDIA",
        location: "Pune",
        lodging: "187",
        mAndI: "101",
        perDiem: "288",
        locationCode: "13551"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "INDIA",
        location: "Trivandrum",
        lodging: "182",
        mAndI: "56",
        perDiem: "238",
        locationCode: "12368"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "INDONESIA",
        location: "[Other]",
        lodging: "128",
        mAndI: "56",
        perDiem: "184",
        locationCode: "11794"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "INDONESIA",
        location: "Bali",
        lodging: "235",
        mAndI: "111",
        perDiem: "346",
        locationCode: "11236"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "INDONESIA",
        location: "Bandung",
        lodging: "218",
        mAndI: "107",
        perDiem: "325",
        locationCode: "10753"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "INDONESIA",
        location: "Denpasar",
        lodging: "235",
        mAndI: "111",
        perDiem: "346",
        locationCode: "19023"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "INDONESIA",
        location: "Jakarta",
        lodging: "252",
        mAndI: "102",
        perDiem: "354",
        locationCode: "10262"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "INDONESIA",
        location: "Jayapura",
        lodging: "142",
        mAndI: "74",
        perDiem: "216",
        locationCode: "11238"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "INDONESIA",
        location: "Medan",
        lodging: "79",
        mAndI: "65",
        perDiem: "144",
        locationCode: "10271"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "INDONESIA",
        location: "Surabaya",
        lodging: "147",
        mAndI: "105",
        perDiem: "252",
        locationCode: "10272"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "INDONESIA",
        location: "Timika, Irian Jaya",
        lodging: "220",
        mAndI: "94",
        perDiem: "314",
        locationCode: "12456"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "IRAN",
        location: "[Other]",
        lodging: "97",
        mAndI: "58",
        perDiem: "155",
        locationCode: "11940"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "IRAN",
        location: "Tehran",
        lodging: "97",
        mAndI: "58",
        perDiem: "155",
        locationCode: "11239"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "IRAQ",
        location: "[Other]",
        lodging: "247",
        mAndI: "82",
        perDiem: "329",
        locationCode: "11895"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "IRAQ",
        location: "Baghdad",
        lodging: "0",
        mAndI: "11",
        perDiem: "11",
        locationCode: "10344"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "IRAQ",
        location: "Erbil",
        lodging: "211",
        mAndI: "65",
        perDiem: "276",
        locationCode: "15013"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "IRELAND",
        location: "[Other]",
        lodging: "151",
        mAndI: "94",
        perDiem: "245",
        locationCode: "11874"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "IRELAND",
        location: "Cork",
        lodging: "157",
        mAndI: "109",
        perDiem: "266",
        locationCode: "12449"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "IRELAND",
        location: "Dublin",
        lodging: "253",
        mAndI: "100",
        perDiem: "353",
        locationCode: "10162"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "IRELAND",
        location: "Galway",
        lodging: "168",
        mAndI: "108",
        perDiem: "276",
        locationCode: "12429"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "ISRAEL",
        location: "[Other]",
        lodging: "305",
        mAndI: "146",
        perDiem: "451",
        locationCode: "11811"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "ISRAEL",
        location: "Eilat",
        lodging: "455",
        mAndI: "150",
        perDiem: "605",
        locationCode: "11240"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "ISRAEL",
        location: "En Boqeq",
        lodging: "300",
        mAndI: "122",
        perDiem: "422",
        locationCode: "11241"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "ISRAEL",
        location: "Haifa",
        lodging: "365",
        mAndI: "131",
        perDiem: "496",
        locationCode: "11397"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "ISRAEL",
        location: "Herzliya-Pituach",
        lodging: "460",
        mAndI: "180",
        perDiem: "640",
        locationCode: "15025"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "ISRAEL",
        location: "Jerusalem",
        lodging: "420",
        mAndI: "169",
        perDiem: "589",
        locationCode: "11061"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "ISRAEL",
        location: "Sedom",
        lodging: "300",
        mAndI: "122",
        perDiem: "422",
        locationCode: "11398"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "ISRAEL",
        location: "Tel Aviv",
        lodging: "510",
        mAndI: "184",
        perDiem: "694",
        locationCode: "10345"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "ISRAEL",
        location: "Tiberias",
        lodging: "305",
        mAndI: "146",
        perDiem: "451",
        locationCode: "12370"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "ITALY",
        location: "[Other]",
        lodging: "191",
        mAndI: "114",
        perDiem: "305",
        locationCode: "11769"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "ITALY",
        location: "Aviano",
        lodging: "110",
        mAndI: "84",
        perDiem: "194",
        locationCode: "10934"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "ITALY",
        location: "Bari",
        lodging: "242",
        mAndI: "136",
        perDiem: "378",
        locationCode: "11246"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "ITALY",
        location: "Bologna",
        lodging: "270",
        mAndI: "121",
        perDiem: "391",
        locationCode: "11456"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "ITALY",
        location: "Bolzano",
        lodging: "195",
        mAndI: "117",
        perDiem: "312",
        locationCode: "15041"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "ITALY",
        location: "Capri",
        lodging: "408",
        mAndI: "164",
        perDiem: "572",
        locationCode: "15011"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "ITALY",
        location: "Catania",
        lodging: "165",
        mAndI: "120",
        perDiem: "285",
        locationCode: "10928"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "ITALY",
        location: "Como",
        lodging: "309",
        mAndI: "157",
        perDiem: "466",
        locationCode: "13967"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "ITALY",
        location: "Ferrara",
        lodging: "163",
        mAndI: "107",
        perDiem: "270",
        locationCode: "11460"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "ITALY",
        location: "Florence",
        lodging: "270",
        mAndI: "127",
        perDiem: "397",
        locationCode: "10164"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "ITALY",
        location: "Gaeta",
        lodging: "365",
        mAndI: "144",
        perDiem: "509",
        locationCode: "10930"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "ITALY",
        location: "Gaeta",
        lodging: "180",
        mAndI: "126",
        perDiem: "306",
        locationCode: "10930"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "ITALY",
        location: "Genoa",
        lodging: "224",
        mAndI: "115",
        perDiem: "339",
        locationCode: "10165"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "ITALY",
        location: "La Spezia",
        lodging: "140",
        mAndI: "101",
        perDiem: "241",
        locationCode: "10931"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "ITALY",
        location: "Milan",
        lodging: "324",
        mAndI: "150",
        perDiem: "474",
        locationCode: "10166"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "ITALY",
        location: "Modena",
        lodging: "169",
        mAndI: "88",
        perDiem: "257",
        locationCode: "11465"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "ITALY",
        location: "Naples",
        lodging: "309",
        mAndI: "132",
        perDiem: "441",
        locationCode: "10167"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "ITALY",
        location: "Palermo",
        lodging: "207",
        mAndI: "114",
        perDiem: "321",
        locationCode: "10168"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "ITALY",
        location: "Pisa",
        lodging: "134",
        mAndI: "89",
        perDiem: "223",
        locationCode: "10933"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "ITALY",
        location: "Ravenna",
        lodging: "141",
        mAndI: "101",
        perDiem: "242",
        locationCode: "11468"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "ITALY",
        location: "Reggio Emilia",
        lodging: "165",
        mAndI: "108",
        perDiem: "273",
        locationCode: "11470"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "ITALY",
        location: "Rimini",
        lodging: "175",
        mAndI: "118",
        perDiem: "293",
        locationCode: "10935"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "ITALY",
        location: "Rome",
        lodging: "355",
        mAndI: "132",
        perDiem: "487",
        locationCode: "10163"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "ITALY",
        location: "Siena",
        lodging: "258",
        mAndI: "112",
        perDiem: "370",
        locationCode: "11471"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "ITALY",
        location: "Taormina",
        lodging: "165",
        mAndI: "120",
        perDiem: "285",
        locationCode: "11473"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "ITALY",
        location: "Treviso",
        lodging: "180",
        mAndI: "106",
        perDiem: "286",
        locationCode: "13847"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "ITALY",
        location: "Trieste",
        lodging: "213",
        mAndI: "104",
        perDiem: "317",
        locationCode: "12157"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "ITALY",
        location: "Turin",
        lodging: "281",
        mAndI: "136",
        perDiem: "417",
        locationCode: "10170"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "ITALY",
        location: "Venice",
        lodging: "374",
        mAndI: "208",
        perDiem: "582",
        locationCode: "11479"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "ITALY",
        location: "Verona",
        lodging: "180",
        mAndI: "86",
        perDiem: "266",
        locationCode: "10936"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "ITALY",
        location: "Vicenza",
        lodging: "132",
        mAndI: "88",
        perDiem: "220",
        locationCode: "10937"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "JAMAICA",
        location: "[Other]",
        lodging: "211",
        mAndI: "101",
        perDiem: "312",
        locationCode: "11861"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "JAMAICA",
        location: "Kingston",
        lodging: "211",
        mAndI: "101",
        perDiem: "312",
        locationCode: "10068"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "JAMAICA",
        location: "Montego Bay",
        lodging: "209",
        mAndI: "86",
        perDiem: "295",
        locationCode: "13870"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "JAMAICA",
        location: "Montego Bay",
        lodging: "316",
        mAndI: "96",
        perDiem: "412",
        locationCode: "13870"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "JAPAN",
        location: "[Other]",
        lodging: "116",
        mAndI: "72",
        perDiem: "188",
        locationCode: "11795"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "JAPAN",
        location: "Akashi",
        lodging: "216",
        mAndI: "116",
        perDiem: "332",
        locationCode: "11268"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "JAPAN",
        location: "Amagasaki",
        lodging: "216",
        mAndI: "116",
        perDiem: "332",
        locationCode: "11270"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "JAPAN",
        location: "Asahikawa",
        lodging: "81",
        mAndI: "66",
        perDiem: "147",
        locationCode: "11326"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "JAPAN",
        location: "Ashiya",
        lodging: "121",
        mAndI: "121",
        perDiem: "242",
        locationCode: "11327"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "JAPAN",
        location: "Awashima",
        lodging: "227",
        mAndI: "157",
        perDiem: "384",
        locationCode: "11328"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "JAPAN",
        location: "Beppu",
        lodging: "139",
        mAndI: "83",
        perDiem: "222",
        locationCode: "11329"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "JAPAN",
        location: "Fukui",
        lodging: "67",
        mAndI: "57",
        perDiem: "124",
        locationCode: "11331"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "JAPAN",
        location: "Fukuoka",
        lodging: "175",
        mAndI: "131",
        perDiem: "306",
        locationCode: "10274"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "JAPAN",
        location: "Fukuyama",
        lodging: "67",
        mAndI: "62",
        perDiem: "129",
        locationCode: "11334"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "JAPAN",
        location: "Gifu",
        lodging: "132",
        mAndI: "91",
        perDiem: "223",
        locationCode: "11335"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "JAPAN",
        location: "Hamamatsu",
        lodging: "117",
        mAndI: "67",
        perDiem: "184",
        locationCode: "12634"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "JAPAN",
        location: "Hiroshima",
        lodging: "242",
        mAndI: "106",
        perDiem: "348",
        locationCode: "11337"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "JAPAN",
        location: "Hiroshima",
        lodging: "142",
        mAndI: "96",
        perDiem: "238",
        locationCode: "11337"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "JAPAN",
        location: "Itazuke",
        lodging: "175",
        mAndI: "131",
        perDiem: "306",
        locationCode: "11338"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "JAPAN",
        location: "Izumisano",
        lodging: "148",
        mAndI: "70",
        perDiem: "218",
        locationCode: "12488"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "JAPAN",
        location: "Kagoshima",
        lodging: "122",
        mAndI: "68",
        perDiem: "190",
        locationCode: "11340"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "JAPAN",
        location: "Kanazawa",
        lodging: "78",
        mAndI: "73",
        perDiem: "151",
        locationCode: "11341"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "JAPAN",
        location: "Kitakyushu",
        lodging: "130",
        mAndI: "88",
        perDiem: "218",
        locationCode: "11342"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "JAPAN",
        location: "Kochi",
        lodging: "98",
        mAndI: "62",
        perDiem: "160",
        locationCode: "11343"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "JAPAN",
        location: "Komaki",
        lodging: "98",
        mAndI: "88",
        perDiem: "186",
        locationCode: "11344"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "JAPAN",
        location: "Kumamoto",
        lodging: "150",
        mAndI: "78",
        perDiem: "228",
        locationCode: "11345"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "JAPAN",
        location: "Kurashiki",
        lodging: "172",
        mAndI: "127",
        perDiem: "299",
        locationCode: "12160"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "JAPAN",
        location: "Kure",
        lodging: "90",
        mAndI: "90",
        perDiem: "180",
        locationCode: "11346"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "JAPAN",
        location: "Kyoto",
        lodging: "253",
        mAndI: "118",
        perDiem: "371",
        locationCode: "10280"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "JAPAN",
        location: "Matsue",
        lodging: "67",
        mAndI: "60",
        perDiem: "127",
        locationCode: "11347"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "JAPAN",
        location: "Matsuyama",
        lodging: "96",
        mAndI: "88",
        perDiem: "184",
        locationCode: "11348"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "JAPAN",
        location: "Miyazaki City",
        lodging: "201",
        mAndI: "96",
        perDiem: "297",
        locationCode: "11350"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "JAPAN",
        location: "Morioka",
        lodging: "89",
        mAndI: "64",
        perDiem: "153",
        locationCode: "11351"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "JAPAN",
        location: "Nagasaki",
        lodging: "172",
        mAndI: "99",
        perDiem: "271",
        locationCode: "11352"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "JAPAN",
        location: "Nagoya",
        lodging: "222",
        mAndI: "142",
        perDiem: "364",
        locationCode: "10276"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "JAPAN",
        location: "NAHA",
        lodging: "220",
        mAndI: "82",
        perDiem: "302",
        locationCode: "91121"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "JAPAN",
        location: "NAHA",
        lodging: "142",
        mAndI: "75",
        perDiem: "217",
        locationCode: "91121"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "JAPAN",
        location: "Nara",
        lodging: "85",
        mAndI: "73",
        perDiem: "158",
        locationCode: "11354"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "JAPAN",
        location: "Narita",
        lodging: "143",
        mAndI: "69",
        perDiem: "212",
        locationCode: "11355"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "JAPAN",
        location: "Niigata",
        lodging: "62",
        mAndI: "76",
        perDiem: "138",
        locationCode: "11356"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "JAPAN",
        location: "Nishinomiya",
        lodging: "121",
        mAndI: "121",
        perDiem: "242",
        locationCode: "11357"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "JAPAN",
        location: "Obihiro",
        lodging: "97",
        mAndI: "67",
        perDiem: "164",
        locationCode: "11361"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "JAPAN",
        location: "Oita",
        lodging: "90",
        mAndI: "79",
        perDiem: "169",
        locationCode: "11364"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "JAPAN",
        location: "Okayama",
        lodging: "115",
        mAndI: "95",
        perDiem: "210",
        locationCode: "11365"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "JAPAN",
        location: "Okinawa Prefecture",
        lodging: "241",
        mAndI: "97",
        perDiem: "338",
        locationCode: "10278"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "JAPAN",
        location: "Okinawa Prefecture",
        lodging: "156",
        mAndI: "88",
        perDiem: "244",
        locationCode: "10278"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "JAPAN",
        location: "Osaka-Kobe",
        lodging: "216",
        mAndI: "116",
        perDiem: "332",
        locationCode: "10275"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "JAPAN",
        location: "Otsu",
        lodging: "99",
        mAndI: "96",
        perDiem: "195",
        locationCode: "11366"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "JAPAN",
        location: "Oyama",
        lodging: "68",
        mAndI: "69",
        perDiem: "137",
        locationCode: "11367"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "JAPAN",
        location: "Sapporo",
        lodging: "213",
        mAndI: "107",
        perDiem: "320",
        locationCode: "10277"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "JAPAN",
        location: "Sasebo",
        lodging: "95",
        mAndI: "91",
        perDiem: "186",
        locationCode: "11368"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "JAPAN",
        location: "Sendai",
        lodging: "226",
        mAndI: "100",
        perDiem: "326",
        locationCode: "11369"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "JAPAN",
        location: "Shiga",
        lodging: "99",
        mAndI: "96",
        perDiem: "195",
        locationCode: "12159"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "JAPAN",
        location: "Takamatsu",
        lodging: "85",
        mAndI: "68",
        perDiem: "153",
        locationCode: "11370"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "JAPAN",
        location: "Takayama",
        lodging: "114",
        mAndI: "82",
        perDiem: "196",
        locationCode: "11373"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "JAPAN",
        location: "Tokushima",
        lodging: "82",
        mAndI: "70",
        perDiem: "152",
        locationCode: "11374"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "JAPAN",
        location: "Tokyo City",
        lodging: "248",
        mAndI: "115",
        perDiem: "363",
        locationCode: "10273"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "JAPAN",
        location: "Tokyo-To",
        lodging: "118",
        mAndI: "80",
        perDiem: "198",
        locationCode: "11480"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "JAPAN",
        location: "Tottori",
        lodging: "78",
        mAndI: "85",
        perDiem: "163",
        locationCode: "11483"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "JAPAN",
        location: "Toyama",
        lodging: "105",
        mAndI: "81",
        perDiem: "186",
        locationCode: "11484"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "JAPAN",
        location: "Toyonaka",
        lodging: "102",
        mAndI: "113",
        perDiem: "215",
        locationCode: "11485"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "JAPAN",
        location: "Tsu",
        lodging: "106",
        mAndI: "82",
        perDiem: "188",
        locationCode: "11486"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "JAPAN",
        location: "Wakayama",
        lodging: "106",
        mAndI: "90",
        perDiem: "196",
        locationCode: "11487"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "JAPAN",
        location: "Yamato",
        lodging: "106",
        mAndI: "63",
        perDiem: "169",
        locationCode: "11488"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "JAPAN",
        location: "Yokohama",
        lodging: "206",
        mAndI: "130",
        perDiem: "336",
        locationCode: "10281"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "JAPAN",
        location: "Yokota",
        lodging: "98",
        mAndI: "69",
        perDiem: "167",
        locationCode: "12022"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "JAPAN",
        location: "Yufuin",
        lodging: "124",
        mAndI: "78",
        perDiem: "202",
        locationCode: "12847"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "JORDAN",
        location: "[Other]",
        lodging: "149",
        mAndI: "128",
        perDiem: "277",
        locationCode: "11812"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "JORDAN",
        location: "Amman",
        lodging: "242",
        mAndI: "102",
        perDiem: "344",
        locationCode: "10347"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "JORDAN",
        location: "Aqaba",
        lodging: "149",
        mAndI: "128",
        perDiem: "277",
        locationCode: "12025"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "JORDAN",
        location: "Dead Sea/Jordan Valley",
        lodging: "197",
        mAndI: "143",
        perDiem: "340",
        locationCode: "13404"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "JORDAN",
        location: "Petra",
        lodging: "165",
        mAndI: "129",
        perDiem: "294",
        locationCode: "13917"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "KAZAKHSTAN",
        location: "[Other]",
        lodging: "138",
        mAndI: "98",
        perDiem: "236",
        locationCode: "11771"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "KAZAKHSTAN",
        location: "Aktau",
        lodging: "213",
        mAndI: "93",
        perDiem: "306",
        locationCode: "19005"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "KAZAKHSTAN",
        location: "Almaty",
        lodging: "217",
        mAndI: "122",
        perDiem: "339",
        locationCode: "10172"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "KAZAKHSTAN",
        location: "Astana",
        lodging: "220",
        mAndI: "90",
        perDiem: "310",
        locationCode: "12712"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "KENYA",
        location: "[Other]",
        lodging: "147",
        mAndI: "77",
        perDiem: "224",
        locationCode: "11840"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "KENYA",
        location: "Lamu",
        lodging: "231",
        mAndI: "87",
        perDiem: "318",
        locationCode: "13387"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "KENYA",
        location: "Malindi",
        lodging: "117",
        mAndI: "69",
        perDiem: "186",
        locationCode: "13391"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "KENYA",
        location: "Mara Area Region",
        lodging: "295",
        mAndI: "30",
        perDiem: "325",
        locationCode: "13916"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "KENYA",
        location: "Mombasa",
        lodging: "160",
        mAndI: "78",
        perDiem: "238",
        locationCode: "10396"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "KENYA",
        location: "Mt. Kenya Area",
        lodging: "209",
        mAndI: "106",
        perDiem: "315",
        locationCode: "13392"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "KENYA",
        location: "Nairobi",
        lodging: "250",
        mAndI: "73",
        perDiem: "323",
        locationCode: "10395"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "KENYA",
        location: "Nanyuki",
        lodging: "97",
        mAndI: "64",
        perDiem: "161",
        locationCode: "11490"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "KENYA",
        location: "Watamu",
        lodging: "249",
        mAndI: "90",
        perDiem: "339",
        locationCode: "13503"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "KIRIBATI",
        location: "[Other]",
        lodging: "66",
        mAndI: "40",
        perDiem: "106",
        locationCode: "11919"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "KIRIBATI",
        location: "Christmas Island",
        lodging: "76",
        mAndI: "64",
        perDiem: "140",
        locationCode: "11601"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "KIRIBATI",
        location: "Kiribati",
        lodging: "87",
        mAndI: "47",
        perDiem: "134",
        locationCode: "11062"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "Korea, South",
        location: "[Other]",
        lodging: "67",
        mAndI: "45",
        perDiem: "112",
        locationCode: "12185"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "Korea, South",
        location: "Busan",
        lodging: "233",
        mAndI: "127",
        perDiem: "360",
        locationCode: "10284"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "Korea, South",
        location: "Changwon",
        lodging: "107",
        mAndI: "61",
        perDiem: "168",
        locationCode: "10781"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "Korea, South",
        location: "Cheju",
        lodging: "225",
        mAndI: "94",
        perDiem: "319",
        locationCode: "11602"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "Korea, South",
        location: "Chinju",
        lodging: "77",
        mAndI: "59",
        perDiem: "136",
        locationCode: "12133"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "Korea, South",
        location: "Chongju",
        lodging: "63",
        mAndI: "47",
        perDiem: "110",
        locationCode: "11603"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "Korea, South",
        location: "Chonju",
        lodging: "133",
        mAndI: "64",
        perDiem: "197",
        locationCode: "12183"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "Korea, South",
        location: "Chung Ju",
        lodging: "76",
        mAndI: "53",
        perDiem: "129",
        locationCode: "12442"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "Korea, South",
        location: "Incheon",
        lodging: "138",
        mAndI: "83",
        perDiem: "221",
        locationCode: "12804"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "Korea, South",
        location: "Kimhae",
        lodging: "59",
        mAndI: "60",
        perDiem: "119",
        locationCode: "10793"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "Korea, South",
        location: "Kumi",
        lodging: "94",
        mAndI: "68",
        perDiem: "162",
        locationCode: "13517"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "Korea, South",
        location: "Kwangju",
        lodging: "138",
        mAndI: "121",
        perDiem: "259",
        locationCode: "10285"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "Korea, South",
        location: "Kyongju",
        lodging: "122",
        mAndI: "82",
        perDiem: "204",
        locationCode: "11604"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "Korea, South",
        location: "Masan",
        lodging: "55",
        mAndI: "66",
        perDiem: "121",
        locationCode: "11605"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "Korea, South",
        location: "Pyeongchang",
        lodging: "179",
        mAndI: "77",
        perDiem: "256",
        locationCode: "19992"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "Korea, South",
        location: "Pyongtaek",
        lodging: "71",
        mAndI: "54",
        perDiem: "125",
        locationCode: "10792"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "Korea, South",
        location: "Seoul",
        lodging: "230",
        mAndI: "125",
        perDiem: "355",
        locationCode: "10283"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "Korea, South",
        location: "Sokcho",
        lodging: "101",
        mAndI: "76",
        perDiem: "177",
        locationCode: "12732"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "Korea, South",
        location: "Taegu",
        lodging: "122",
        mAndI: "113",
        perDiem: "235",
        locationCode: "10286"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "Korea, South",
        location: "Taejon",
        lodging: "104",
        mAndI: "68",
        perDiem: "172",
        locationCode: "11606"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "Korea, South",
        location: "Uijongbu",
        lodging: "67",
        mAndI: "45",
        perDiem: "112",
        locationCode: "10799"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "Korea, South",
        location: "Ulsan",
        lodging: "163",
        mAndI: "88",
        perDiem: "251",
        locationCode: "11607"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "KOSOVO",
        location: "[Other]",
        lodging: "56",
        mAndI: "46",
        perDiem: "102",
        locationCode: "13886"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "KOSOVO",
        location: "Pristina",
        lodging: "101",
        mAndI: "59",
        perDiem: "160",
        locationCode: "13885"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "KUWAIT",
        location: "[Other]",
        lodging: "284",
        mAndI: "126",
        perDiem: "410",
        locationCode: "11813"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "KUWAIT",
        location: "Kuwait City",
        lodging: "284",
        mAndI: "126",
        perDiem: "410",
        locationCode: "10348"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "KYRGYZSTAN",
        location: "[Other]",
        lodging: "75",
        mAndI: "53",
        perDiem: "128",
        locationCode: "11772"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "KYRGYZSTAN",
        location: "Bishkek",
        lodging: "220",
        mAndI: "88",
        perDiem: "308",
        locationCode: "10173"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "KYRGYZSTAN",
        location: "Issyk-Kul Region",
        lodging: "130",
        mAndI: "62",
        perDiem: "192",
        locationCode: "13580"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "LAOS",
        location: "[Other]",
        lodging: "110",
        mAndI: "81",
        perDiem: "191",
        locationCode: "11796"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "LAOS",
        location: "Luang Prabang",
        lodging: "184",
        mAndI: "89",
        perDiem: "273",
        locationCode: "13549"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "LAOS",
        location: "Vientiane",
        lodging: "120",
        mAndI: "92",
        perDiem: "212",
        locationCode: "10288"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "LATVIA",
        location: "[Other]",
        lodging: "82",
        mAndI: "80",
        perDiem: "162",
        locationCode: "11773"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "LATVIA",
        location: "Riga",
        lodging: "216",
        mAndI: "126",
        perDiem: "342",
        locationCode: "10174"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "LEBANON",
        location: "[Other]",
        lodging: "165",
        mAndI: "53",
        perDiem: "218",
        locationCode: "11864"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "LEBANON",
        location: "Beirut",
        lodging: "165",
        mAndI: "53",
        perDiem: "218",
        locationCode: "10349"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "LESOTHO",
        location: "[Other]",
        lodging: "108",
        mAndI: "86",
        perDiem: "194",
        locationCode: "11823"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "LESOTHO",
        location: "Maseru",
        lodging: "102",
        mAndI: "63",
        perDiem: "165",
        locationCode: "10374"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "LIBERIA",
        location: "[Other]",
        lodging: "70",
        mAndI: "46",
        perDiem: "116",
        locationCode: "11841"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "LIBERIA",
        location: "Monrovia",
        lodging: "200",
        mAndI: "119",
        perDiem: "319",
        locationCode: "10398"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "LIBYA",
        location: "[Other]",
        lodging: "81",
        mAndI: "79",
        perDiem: "160",
        locationCode: "11943"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "LIBYA",
        location: "Benghazi",
        lodging: "117",
        mAndI: "79",
        perDiem: "196",
        locationCode: "11686"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "LIBYA",
        location: "Misurata",
        lodging: "117",
        mAndI: "79",
        perDiem: "196",
        locationCode: "11687"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "LIBYA",
        location: "Sirte",
        lodging: "117",
        mAndI: "79",
        perDiem: "196",
        locationCode: "11688"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "LIBYA",
        location: "Tripoli",
        lodging: "185",
        mAndI: "53",
        perDiem: "238",
        locationCode: "11689"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "LIECHTENSTEIN",
        location: "Liechtenstein",
        lodging: "267",
        mAndI: "178",
        perDiem: "445",
        locationCode: "11691"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "LITHUANIA",
        location: "[Other]",
        lodging: "131",
        mAndI: "86",
        perDiem: "217",
        locationCode: "11774"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "LITHUANIA",
        location: "Palanga",
        lodging: "300",
        mAndI: "131",
        perDiem: "431",
        locationCode: "13941"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "LITHUANIA",
        location: "Palanga",
        lodging: "260",
        mAndI: "127",
        perDiem: "387",
        locationCode: "13941"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "LITHUANIA",
        location: "Vilnius",
        lodging: "221",
        mAndI: "116",
        perDiem: "337",
        locationCode: "10175"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "LUXEMBOURG",
        location: "Luxembourg",
        lodging: "341",
        mAndI: "129",
        perDiem: "470",
        locationCode: "11063"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "MACAU",
        location: "Macau",
        lodging: "321",
        mAndI: "120",
        perDiem: "441",
        locationCode: "11692"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "MADAGASCAR",
        location: "[Other]",
        lodging: "113",
        mAndI: "54",
        perDiem: "167",
        locationCode: "11865"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "MADAGASCAR",
        location: "Antananarivo",
        lodging: "198",
        mAndI: "64",
        perDiem: "262",
        locationCode: "10399"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "MADAGASCAR",
        location: "Nosy Be",
        lodging: "145",
        mAndI: "68",
        perDiem: "213",
        locationCode: "13402"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "MALAWI",
        location: "[Other]",
        lodging: "137",
        mAndI: "90",
        perDiem: "227",
        locationCode: "11842"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "MALAWI",
        location: "Blantyre",
        lodging: "172",
        mAndI: "106",
        perDiem: "278",
        locationCode: "11491"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "MALAWI",
        location: "Lilongwe",
        lodging: "176",
        mAndI: "97",
        perDiem: "273",
        locationCode: "10400"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "MALAWI",
        location: "Salima",
        lodging: "188",
        mAndI: "103",
        perDiem: "291",
        locationCode: "12580"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "MALAYSIA",
        location: "[Other]",
        lodging: "89",
        mAndI: "44",
        perDiem: "133",
        locationCode: "11797"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "MALAYSIA",
        location: "Kota Kinabalu, Sabah",
        lodging: "132",
        mAndI: "87",
        perDiem: "219",
        locationCode: "11609"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "MALAYSIA",
        location: "Kuala Lumpur",
        lodging: "186",
        mAndI: "74",
        perDiem: "260",
        locationCode: "10289"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "MALAYSIA",
        location: "Kuantan",
        lodging: "72",
        mAndI: "48",
        perDiem: "120",
        locationCode: "12871"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "MALAYSIA",
        location: "Langkawi",
        lodging: "279",
        mAndI: "76",
        perDiem: "355",
        locationCode: "15032"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "MALAYSIA",
        location: "Melaka",
        lodging: "109",
        mAndI: "87",
        perDiem: "196",
        locationCode: "15008"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "MALAYSIA",
        location: "Penang",
        lodging: "116",
        mAndI: "80",
        perDiem: "196",
        locationCode: "12027"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "MALDIVES",
        location: "Maldives",
        lodging: "329",
        mAndI: "134",
        perDiem: "463",
        locationCode: "11694"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "MALDIVES",
        location: "Male",
        lodging: "329",
        mAndI: "134",
        perDiem: "463",
        locationCode: "15047"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "MALI",
        location: "[Other]",
        lodging: "63",
        mAndI: "43",
        perDiem: "106",
        locationCode: "11866"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "MALI",
        location: "Bamako",
        lodging: "283",
        mAndI: "132",
        perDiem: "415",
        locationCode: "10401"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "MALTA",
        location: "Malta",
        lodging: "315",
        mAndI: "135",
        perDiem: "450",
        locationCode: "11064"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "MARSHALL ISLANDS",
        location: "[Other]",
        lodging: "50",
        mAndI: "33",
        perDiem: "83",
        locationCode: "11803"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "MARSHALL ISLANDS",
        location: "Kwajalein Atoll",
        lodging: "130",
        mAndI: "46",
        perDiem: "176",
        locationCode: "11610"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "MARSHALL ISLANDS",
        location: "Likiep Atoll",
        lodging: "76",
        mAndI: "37",
        perDiem: "113",
        locationCode: "13598"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "MARSHALL ISLANDS",
        location: "Majuro",
        lodging: "152",
        mAndI: "92",
        perDiem: "244",
        locationCode: "10321"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "MARTINIQUE",
        location: "Martinique",
        lodging: "170",
        mAndI: "135",
        perDiem: "305",
        locationCode: "10060"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "MAURITANIA",
        location: "[Other]",
        lodging: "43",
        mAndI: "35",
        perDiem: "78",
        locationCode: "11907"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "MAURITANIA",
        location: "Kaedi",
        lodging: "43",
        mAndI: "33",
        perDiem: "76",
        locationCode: "13554"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "MAURITANIA",
        location: "Nouadhibou",
        lodging: "73",
        mAndI: "56",
        perDiem: "129",
        locationCode: "11495"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "MAURITANIA",
        location: "Nouakchott",
        lodging: "105",
        mAndI: "79",
        perDiem: "184",
        locationCode: "10402"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "MAURITIUS",
        location: "Mauritius",
        lodging: "205",
        mAndI: "128",
        perDiem: "333",
        locationCode: "11065"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "Mayotte",
        location: "Mayotte Islands",
        lodging: "107",
        mAndI: "66",
        perDiem: "173",
        locationCode: "19007"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "MEXICO",
        location: "[Other]",
        lodging: "102",
        mAndI: "65",
        perDiem: "167",
        locationCode: "11751"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "MEXICO",
        location: "Acapulco",
        lodging: "283",
        mAndI: "154",
        perDiem: "437",
        locationCode: "11629"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "MEXICO",
        location: "Campeche",
        lodging: "106",
        mAndI: "85",
        perDiem: "191",
        locationCode: "11632"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "MEXICO",
        location: "Cancun",
        lodging: "242",
        mAndI: "119",
        perDiem: "361",
        locationCode: "11633"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "MEXICO",
        location: "Chihuahua",
        lodging: "106",
        mAndI: "75",
        perDiem: "181",
        locationCode: "11634"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "MEXICO",
        location: "Ciudad Juarez",
        lodging: "134",
        mAndI: "104",
        perDiem: "238",
        locationCode: "10070"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "MEXICO",
        location: "Ciudad Victoria",
        lodging: "96",
        mAndI: "55",
        perDiem: "151",
        locationCode: "12029"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "MEXICO",
        location: "Colima",
        lodging: "119",
        mAndI: "76",
        perDiem: "195",
        locationCode: "11638"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "MEXICO",
        location: "Cozumel",
        lodging: "151",
        mAndI: "79",
        perDiem: "230",
        locationCode: "11639"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "MEXICO",
        location: "Cuernavaca",
        lodging: "214",
        mAndI: "113",
        perDiem: "327",
        locationCode: "11022"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "MEXICO",
        location: "Culiacan",
        lodging: "79",
        mAndI: "48",
        perDiem: "127",
        locationCode: "12233"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "MEXICO",
        location: "Ensenada",
        lodging: "141",
        mAndI: "69",
        perDiem: "210",
        locationCode: "11641"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "MEXICO",
        location: "Guadalajara",
        lodging: "241",
        mAndI: "132",
        perDiem: "373",
        locationCode: "10071"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "MEXICO",
        location: "Hermosillo",
        lodging: "115",
        mAndI: "59",
        perDiem: "174",
        locationCode: "10085"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "MEXICO",
        location: "Huatulco",
        lodging: "132",
        mAndI: "83",
        perDiem: "215",
        locationCode: "12724"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "MEXICO",
        location: "Ixtapa Zihuatanejo",
        lodging: "238",
        mAndI: "128",
        perDiem: "366",
        locationCode: "11644"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "MEXICO",
        location: "La Paz",
        lodging: "130",
        mAndI: "59",
        perDiem: "189",
        locationCode: "11645"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "MEXICO",
        location: "Los Cabos (Cabo San Lucas and San Jose del Ca",
        lodging: "273",
        mAndI: "108",
        perDiem: "381",
        locationCode: "11631"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "MEXICO",
        location: "Manzanillo",
        lodging: "145",
        mAndI: "84",
        perDiem: "229",
        locationCode: "11648"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "MEXICO",
        location: "Matamoros",
        lodging: "67",
        mAndI: "71",
        perDiem: "138",
        locationCode: "10072"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "MEXICO",
        location: "Mazatlan",
        lodging: "130",
        mAndI: "56",
        perDiem: "186",
        locationCode: "10080"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "MEXICO",
        location: "Merida",
        lodging: "157",
        mAndI: "93",
        perDiem: "250",
        locationCode: "10073"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "MEXICO",
        location: "Mexicali",
        lodging: "160",
        mAndI: "62",
        perDiem: "222",
        locationCode: "11650"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "MEXICO",
        location: "Mexico City, D.F.",
        lodging: "244",
        mAndI: "106",
        perDiem: "350",
        locationCode: "10069"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "MEXICO",
        location: "Monterrey",
        lodging: "205",
        mAndI: "159",
        perDiem: "364",
        locationCode: "10075"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "MEXICO",
        location: "Morelia",
        lodging: "185",
        mAndI: "108",
        perDiem: "293",
        locationCode: "11652"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "MEXICO",
        location: "Nogales",
        lodging: "125",
        mAndI: "95",
        perDiem: "220",
        locationCode: "11653"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "MEXICO",
        location: "Nuevo Laredo",
        lodging: "107",
        mAndI: "105",
        perDiem: "212",
        locationCode: "10077"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "MEXICO",
        location: "Playa del Carmen, Quintana Roo",
        lodging: "132",
        mAndI: "97",
        perDiem: "229",
        locationCode: "13821"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "MEXICO",
        location: "Puebla",
        lodging: "214",
        mAndI: "113",
        perDiem: "327",
        locationCode: "12720"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "MEXICO",
        location: "Puerto Penasco",
        lodging: "241",
        mAndI: "121",
        perDiem: "362",
        locationCode: "13436"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "MEXICO",
        location: "Puerto Vallarta",
        lodging: "243",
        mAndI: "135",
        perDiem: "378",
        locationCode: "11655"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "MEXICO",
        location: "Queretaro",
        lodging: "120",
        mAndI: "59",
        perDiem: "179",
        locationCode: "12030"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "MEXICO",
        location: "San Carlos",
        lodging: "133",
        mAndI: "99",
        perDiem: "232",
        locationCode: "11657"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "MEXICO",
        location: "San Luis Potosi",
        lodging: "154",
        mAndI: "104",
        perDiem: "258",
        locationCode: "11660"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "MEXICO",
        location: "San Miguel de Allende",
        lodging: "120",
        mAndI: "59",
        perDiem: "179",
        locationCode: "11662"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "MEXICO",
        location: "Tapachula",
        lodging: "94",
        mAndI: "57",
        perDiem: "151",
        locationCode: "10462"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "MEXICO",
        location: "Tijuana",
        lodging: "193",
        mAndI: "108",
        perDiem: "301",
        locationCode: "10078"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "MEXICO",
        location: "Valle del Bravo",
        lodging: "242",
        mAndI: "95",
        perDiem: "337",
        locationCode: "15061"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "MEXICO",
        location: "Veracruz",
        lodging: "120",
        mAndI: "71",
        perDiem: "191",
        locationCode: "10079"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "MEXICO",
        location: "Zacatecas",
        lodging: "134",
        mAndI: "63",
        perDiem: "197",
        locationCode: "11665"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "Micronesia, Federated States of",
        location: "[Other]",
        lodging: "141",
        mAndI: "85",
        perDiem: "226",
        locationCode: "11868"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "Micronesia, Federated States of",
        location: "Chuuk",
        lodging: "141",
        mAndI: "85",
        perDiem: "226",
        locationCode: "10800"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "Micronesia, Federated States of",
        location: "Kosrae",
        lodging: "125",
        mAndI: "84",
        perDiem: "209",
        locationCode: "10801"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "Micronesia, Federated States of",
        location: "Pohnpei",
        lodging: "129",
        mAndI: "98",
        perDiem: "227",
        locationCode: "10802"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "Micronesia, Federated States of",
        location: "Yap",
        lodging: "132",
        mAndI: "85",
        perDiem: "217",
        locationCode: "10803"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "MOLDOVA",
        location: "[Other]",
        lodging: "154",
        mAndI: "91",
        perDiem: "245",
        locationCode: "11869"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "MOLDOVA",
        location: "Chisinau",
        lodging: "154",
        mAndI: "91",
        perDiem: "245",
        locationCode: "10178"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "MONACO",
        location: "Monaco",
        lodging: "406",
        mAndI: "121",
        perDiem: "527",
        locationCode: "11695"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "MONGOLIA",
        location: "[Other]",
        lodging: "140",
        mAndI: "66",
        perDiem: "206",
        locationCode: "11798"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "MONGOLIA",
        location: "Ulaanbaatar",
        lodging: "185",
        mAndI: "85",
        perDiem: "270",
        locationCode: "10294"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "MONTENEGRO",
        location: "[Other]",
        lodging: "210",
        mAndI: "101",
        perDiem: "311",
        locationCode: "13600"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "MONTENEGRO",
        location: "Podgorica",
        lodging: "210",
        mAndI: "101",
        perDiem: "311",
        locationCode: "13596"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "MONTSERRAT",
        location: "Montserrat",
        lodging: "70",
        mAndI: "55",
        perDiem: "125",
        locationCode: "19019"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "MONTSERRAT",
        location: "Montserrat",
        lodging: "105",
        mAndI: "59",
        perDiem: "164",
        locationCode: "19019"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "MOROCCO",
        location: "[Other]",
        lodging: "163",
        mAndI: "67",
        perDiem: "230",
        locationCode: "11896"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "MOROCCO",
        location: "Agadir",
        lodging: "187",
        mAndI: "124",
        perDiem: "311",
        locationCode: "11399"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "MOROCCO",
        location: "Casablanca",
        lodging: "194",
        mAndI: "86",
        perDiem: "280",
        locationCode: "10352"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "MOROCCO",
        location: "Fes",
        lodging: "217",
        mAndI: "83",
        perDiem: "300",
        locationCode: "11401"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "MOROCCO",
        location: "Marrakech",
        lodging: "212",
        mAndI: "105",
        perDiem: "317",
        locationCode: "11032"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "MOROCCO",
        location: "Rabat",
        lodging: "216",
        mAndI: "137",
        perDiem: "353",
        locationCode: "10351"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "MOROCCO",
        location: "Tangier",
        lodging: "199",
        mAndI: "106",
        perDiem: "305",
        locationCode: "10353"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "MOROCCO",
        location: "Taroudant",
        lodging: "157",
        mAndI: "64",
        perDiem: "221",
        locationCode: "11405"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "MOZAMBIQUE",
        location: "[Other]",
        lodging: "189",
        mAndI: "114",
        perDiem: "303",
        locationCode: "11870"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "MOZAMBIQUE",
        location: "Maputo",
        lodging: "220",
        mAndI: "86",
        perDiem: "306",
        locationCode: "10404"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "MOZAMBIQUE",
        location: "Pemba",
        lodging: "189",
        mAndI: "114",
        perDiem: "303",
        locationCode: "19020"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "NAMIBIA",
        location: "[Other]",
        lodging: "72",
        mAndI: "56",
        perDiem: "128",
        locationCode: "11847"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "NAMIBIA",
        location: "Etosha",
        lodging: "93",
        mAndI: "52",
        perDiem: "145",
        locationCode: "12806"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "NAMIBIA",
        location: "Opuwo",
        lodging: "82",
        mAndI: "55",
        perDiem: "137",
        locationCode: "19950"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "NAMIBIA",
        location: "Walvis Bay",
        lodging: "96",
        mAndI: "58",
        perDiem: "154",
        locationCode: "15052"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "NAMIBIA",
        location: "Windhoek",
        lodging: "117",
        mAndI: "58",
        perDiem: "175",
        locationCode: "10405"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "NAURU",
        location: "Nauru",
        lodging: "148",
        mAndI: "101",
        perDiem: "249",
        locationCode: "11696"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "NEPAL",
        location: "[Other]",
        lodging: "153",
        mAndI: "90",
        perDiem: "243",
        locationCode: "11814"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "NEPAL",
        location: "Kathmandu",
        lodging: "204",
        mAndI: "107",
        perDiem: "311",
        locationCode: "10355"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "NEPAL",
        location: "Pokhara",
        lodging: "160",
        mAndI: "113",
        perDiem: "273",
        locationCode: "11034"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "NETHERLANDS",
        location: "[Other]",
        lodging: "179",
        mAndI: "112",
        perDiem: "291",
        locationCode: "11776"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "NETHERLANDS",
        location: "Amsterdam",
        lodging: "424",
        mAndI: "140",
        perDiem: "564",
        locationCode: "10180"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "NETHERLANDS",
        location: "Coevorden",
        lodging: "152",
        mAndI: "112",
        perDiem: "264",
        locationCode: "11513"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "NETHERLANDS",
        location: "Eindhoven",
        lodging: "203",
        mAndI: "107",
        perDiem: "310",
        locationCode: "13545"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "NETHERLANDS",
        location: "Lisse",
        lodging: "167",
        mAndI: "121",
        perDiem: "288",
        locationCode: "11519"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "NETHERLANDS",
        location: "Maastricht",
        lodging: "300",
        mAndI: "147",
        perDiem: "447",
        locationCode: "11510"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "NETHERLANDS",
        location: "Noordwijk",
        lodging: "185",
        mAndI: "101",
        perDiem: "286",
        locationCode: "11520"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "NETHERLANDS",
        location: "Papendrecht",
        lodging: "263",
        mAndI: "146",
        perDiem: "409",
        locationCode: "11515"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "NETHERLANDS",
        location: "Rotterdam",
        lodging: "263",
        mAndI: "146",
        perDiem: "409",
        locationCode: "10181"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "NETHERLANDS",
        location: "Schiphol",
        lodging: "453",
        mAndI: "188",
        perDiem: "641",
        locationCode: "10938"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "NETHERLANDS",
        location: "The Hague",
        lodging: "320",
        mAndI: "127",
        perDiem: "447",
        locationCode: "10179"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "NETHERLANDS",
        location: "Utrecht",
        lodging: "159",
        mAndI: "112",
        perDiem: "271",
        locationCode: "11521"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "NEW CALEDONIA",
        location: "New Caledonia",
        lodging: "192",
        mAndI: "97",
        perDiem: "289",
        locationCode: "11697"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "NEW ZEALAND",
        location: "[Other]",
        lodging: "105",
        mAndI: "84",
        perDiem: "189",
        locationCode: "11871"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "NEW ZEALAND",
        location: "Auckland",
        lodging: "247",
        mAndI: "126",
        perDiem: "373",
        locationCode: "10296"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "NEW ZEALAND",
        location: "Christchurch",
        lodging: "157",
        mAndI: "110",
        perDiem: "267",
        locationCode: "10297"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "NEW ZEALAND",
        location: "Dunedin",
        lodging: "121",
        mAndI: "102",
        perDiem: "223",
        locationCode: "12518"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "NEW ZEALAND",
        location: "Queenstown",
        lodging: "261",
        mAndI: "117",
        perDiem: "378",
        locationCode: "12313"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "NEW ZEALAND",
        location: "Rotorua",
        lodging: "124",
        mAndI: "104",
        perDiem: "228",
        locationCode: "12311"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "NEW ZEALAND",
        location: "Wellington",
        lodging: "172",
        mAndI: "102",
        perDiem: "274",
        locationCode: "10295"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "NICARAGUA",
        location: "[Other]",
        lodging: "98",
        mAndI: "55",
        perDiem: "153",
        locationCode: "11872"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "NICARAGUA",
        location: "Corn Island",
        lodging: "116",
        mAndI: "65",
        perDiem: "181",
        locationCode: "12695"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "NICARAGUA",
        location: "Managua",
        lodging: "172",
        mAndI: "93",
        perDiem: "265",
        locationCode: "10089"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "NICARAGUA",
        location: "San Juan del Sur",
        lodging: "242",
        mAndI: "70",
        perDiem: "312",
        locationCode: "12696"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "NIGER",
        location: "[Other]",
        lodging: "99",
        mAndI: "57",
        perDiem: "156",
        locationCode: "11844"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "NIGER",
        location: "Niamey",
        lodging: "182",
        mAndI: "86",
        perDiem: "268",
        locationCode: "10406"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "NIGERIA",
        location: "[Other]",
        lodging: "318",
        mAndI: "131",
        perDiem: "449",
        locationCode: "11902"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "NIGERIA",
        location: "Abuja",
        lodging: "251",
        mAndI: "132",
        perDiem: "383",
        locationCode: "10741"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "NIGERIA",
        location: "Kaduna",
        lodging: "265",
        mAndI: "113",
        perDiem: "378",
        locationCode: "10743"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "NIGERIA",
        location: "Lagos",
        lodging: "269",
        mAndI: "158",
        perDiem: "427",
        locationCode: "10744"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "NIGERIA",
        location: "Port Harcourt",
        lodging: "318",
        mAndI: "131",
        perDiem: "449",
        locationCode: "13508"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "NIUE",
        location: "Niue",
        lodging: "162",
        mAndI: "71",
        perDiem: "233",
        locationCode: "11698"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "NORTH MACEDONIA",
        location: "[Other]",
        lodging: "91",
        mAndI: "84",
        perDiem: "175",
        locationCode: "11966"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "NORTH MACEDONIA",
        location: "Ohrid",
        lodging: "91",
        mAndI: "84",
        perDiem: "175",
        locationCode: "19994"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "NORTH MACEDONIA",
        location: "Skopje",
        lodging: "160",
        mAndI: "92",
        perDiem: "252",
        locationCode: "11964"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "NORWAY",
        location: "[Other]",
        lodging: "201",
        mAndI: "130",
        perDiem: "331",
        locationCode: "11897"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "NORWAY",
        location: "Oslo",
        lodging: "201",
        mAndI: "130",
        perDiem: "331",
        locationCode: "10183"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "NORWAY",
        location: "Stavanger",
        lodging: "234",
        mAndI: "134",
        perDiem: "368",
        locationCode: "12499"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "NORWAY",
        location: "Tromso",
        lodging: "327",
        mAndI: "128",
        perDiem: "455",
        locationCode: "10189"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "OMAN",
        location: "[Other]",
        lodging: "211",
        mAndI: "170",
        perDiem: "381",
        locationCode: "11816"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "OMAN",
        location: "[Other]",
        lodging: "167",
        mAndI: "165",
        perDiem: "332",
        locationCode: "11816"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "OMAN",
        location: "Duqm",
        lodging: "179",
        mAndI: "135",
        perDiem: "314",
        locationCode: "15071"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "OMAN",
        location: "Muscat",
        lodging: "261",
        mAndI: "155",
        perDiem: "416",
        locationCode: "10361"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "OMAN",
        location: "Salalah",
        lodging: "211",
        mAndI: "170",
        perDiem: "381",
        locationCode: "12034"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "OMAN",
        location: "Salalah",
        lodging: "167",
        mAndI: "165",
        perDiem: "332",
        locationCode: "12034"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "OTHER FOREIGN LOCALITIES",
        location: "Other Foreign Localities",
        lodging: "49",
        mAndI: "35",
        perDiem: "84",
        locationCode: "11074"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "PAKISTAN",
        location: "[Other]",
        lodging: "177",
        mAndI: "82",
        perDiem: "259",
        locationCode: "11815"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "PAKISTAN",
        location: "Faisalabad",
        lodging: "163",
        mAndI: "94",
        perDiem: "257",
        locationCode: "11035"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "PAKISTAN",
        location: "Islamabad",
        lodging: "130",
        mAndI: "80",
        perDiem: "210",
        locationCode: "10356"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "PAKISTAN",
        location: "Karachi",
        lodging: "98",
        mAndI: "86",
        perDiem: "184",
        locationCode: "10359"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "PAKISTAN",
        location: "Lahore",
        lodging: "227",
        mAndI: "61",
        perDiem: "288",
        locationCode: "10357"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "PAKISTAN",
        location: "Peshawar",
        lodging: "145",
        mAndI: "74",
        perDiem: "219",
        locationCode: "10358"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "PAKISTAN",
        location: "Quetta",
        lodging: "177",
        mAndI: "82",
        perDiem: "259",
        locationCode: "11037"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "PALAU",
        location: "[Other]",
        lodging: "245",
        mAndI: "132",
        perDiem: "377",
        locationCode: "11905"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "PALAU",
        location: "Koror",
        lodging: "245",
        mAndI: "132",
        perDiem: "377",
        locationCode: "10805"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "PANAMA",
        location: "[Other]",
        lodging: "84",
        mAndI: "58",
        perDiem: "142",
        locationCode: "11753"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "PANAMA",
        location: "Colon",
        lodging: "114",
        mAndI: "87",
        perDiem: "201",
        locationCode: "11026"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "PANAMA",
        location: "David, Chiriqui",
        lodging: "114",
        mAndI: "81",
        perDiem: "195",
        locationCode: "12337"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "PANAMA",
        location: "Panama City",
        lodging: "173",
        mAndI: "99",
        perDiem: "272",
        locationCode: "11076"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "PAPUA NEW GUINEA",
        location: "[Other]",
        lodging: "154",
        mAndI: "62",
        perDiem: "216",
        locationCode: "11799"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "PAPUA NEW GUINEA",
        location: "Port Moresby",
        lodging: "254",
        mAndI: "80",
        perDiem: "334",
        locationCode: "10300"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "PARAGUAY",
        location: "[Other]",
        lodging: "62",
        mAndI: "60",
        perDiem: "122",
        locationCode: "11873"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "PARAGUAY",
        location: "Asuncion",
        lodging: "175",
        mAndI: "90",
        perDiem: "265",
        locationCode: "10091"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "PARAGUAY",
        location: "Ciudad del Este",
        lodging: "133",
        mAndI: "85",
        perDiem: "218",
        locationCode: "11670"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "PARAGUAY",
        location: "Pegro Juan",
        lodging: "45",
        mAndI: "76",
        perDiem: "121",
        locationCode: "12038"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "PERU",
        location: "[Other]",
        lodging: "127",
        mAndI: "91",
        perDiem: "218",
        locationCode: "11754"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "PERU",
        location: "Cusco",
        lodging: "230",
        mAndI: "112",
        perDiem: "342",
        locationCode: "11673"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "PERU",
        location: "Lima",
        lodging: "250",
        mAndI: "99",
        perDiem: "349",
        locationCode: "10092"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "PERU",
        location: "Paracas",
        lodging: "220",
        mAndI: "108",
        perDiem: "328",
        locationCode: "12292"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "PHILIPPINES",
        location: "[Other]",
        lodging: "122",
        mAndI: "70",
        perDiem: "192",
        locationCode: "11875"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "PHILIPPINES",
        location: "Baguio City",
        lodging: "133",
        mAndI: "85",
        perDiem: "218",
        locationCode: "11612"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "PHILIPPINES",
        location: "Cebu",
        lodging: "112",
        mAndI: "79",
        perDiem: "191",
        locationCode: "10302"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "PHILIPPINES",
        location: "Clark AFB",
        lodging: "137",
        mAndI: "95",
        perDiem: "232",
        locationCode: "91161"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "PHILIPPINES",
        location: "Davao City",
        lodging: "88",
        mAndI: "74",
        perDiem: "162",
        locationCode: "11613"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "PHILIPPINES",
        location: "Mactan",
        lodging: "140",
        mAndI: "84",
        perDiem: "224",
        locationCode: "20008"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "PHILIPPINES",
        location: "Manila",
        lodging: "206",
        mAndI: "94",
        perDiem: "300",
        locationCode: "10301"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "POLAND",
        location: "[Other]",
        lodging: "95",
        mAndI: "68",
        perDiem: "163",
        locationCode: "11777"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "POLAND",
        location: "Bydgoszcz",
        lodging: "102",
        mAndI: "73",
        perDiem: "175",
        locationCode: "12357"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "POLAND",
        location: "Gdansk",
        lodging: "127",
        mAndI: "79",
        perDiem: "206",
        locationCode: "11736"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "POLAND",
        location: "Katowice",
        lodging: "124",
        mAndI: "118",
        perDiem: "242",
        locationCode: "12360"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "POLAND",
        location: "Kielce",
        lodging: "93",
        mAndI: "69",
        perDiem: "162",
        locationCode: "13701"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "POLAND",
        location: "Krakow",
        lodging: "180",
        mAndI: "131",
        perDiem: "311",
        locationCode: "10192"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "POLAND",
        location: "Lodz",
        lodging: "90",
        mAndI: "72",
        perDiem: "162",
        locationCode: "12359"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "POLAND",
        location: "Poznan",
        lodging: "98",
        mAndI: "82",
        perDiem: "180",
        locationCode: "10191"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "POLAND",
        location: "Rzeszow",
        lodging: "98",
        mAndI: "98",
        perDiem: "196",
        locationCode: "13546"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "POLAND",
        location: "Warsaw",
        lodging: "165",
        mAndI: "86",
        perDiem: "251",
        locationCode: "10190"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "POLAND",
        location: "Wroclaw",
        lodging: "154",
        mAndI: "134",
        perDiem: "288",
        locationCode: "12249"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "POLAND",
        location: "Zakopane",
        lodging: "114",
        mAndI: "86",
        perDiem: "200",
        locationCode: "12513"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "PORTUGAL",
        location: "[Other]",
        lodging: "95",
        mAndI: "63",
        perDiem: "158",
        locationCode: "11909"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "PORTUGAL",
        location: "Cascais",
        lodging: "102",
        mAndI: "92",
        perDiem: "194",
        locationCode: "12145"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "PORTUGAL",
        location: "Estoril",
        lodging: "102",
        mAndI: "92",
        perDiem: "194",
        locationCode: "12146"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "PORTUGAL",
        location: "Faial Island",
        lodging: "102",
        mAndI: "68",
        perDiem: "170",
        locationCode: "13018"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "PORTUGAL",
        location: "Faial Island",
        lodging: "94",
        mAndI: "68",
        perDiem: "162",
        locationCode: "13018"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "PORTUGAL",
        location: "Lisbon",
        lodging: "261",
        mAndI: "104",
        perDiem: "365",
        locationCode: "10185"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "PORTUGAL",
        location: "Madeira Islands",
        lodging: "107",
        mAndI: "59",
        perDiem: "166",
        locationCode: "12958"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "PORTUGAL",
        location: "Oeiras",
        lodging: "102",
        mAndI: "92",
        perDiem: "194",
        locationCode: "12147"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "PORTUGAL",
        location: "Oporto",
        lodging: "226",
        mAndI: "120",
        perDiem: "346",
        locationCode: "10186"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "PORTUGAL",
        location: "Ponta Delgada",
        lodging: "174",
        mAndI: "59",
        perDiem: "233",
        locationCode: "13020"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "PORTUGAL",
        location: "Ponta Delgada",
        lodging: "136",
        mAndI: "55",
        perDiem: "191",
        locationCode: "13020"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "PORTUGAL",
        location: "Sao Miguel Island",
        lodging: "257",
        mAndI: "89",
        perDiem: "346",
        locationCode: "13019"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "QATAR",
        location: "[Other]",
        lodging: "227",
        mAndI: "160",
        perDiem: "387",
        locationCode: "11817"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "QATAR",
        location: "Doha",
        lodging: "227",
        mAndI: "160",
        perDiem: "387",
        locationCode: "10362"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "REPUBLIC OF THE CONGO",
        location: "[Other]",
        lodging: "272",
        mAndI: "113",
        perDiem: "385",
        locationCode: "11830"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "REPUBLIC OF THE CONGO",
        location: "Brazzaville",
        lodging: "272",
        mAndI: "113",
        perDiem: "385",
        locationCode: "10385"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "REUNION",
        location: "Reunion",
        lodging: "145",
        mAndI: "76",
        perDiem: "221",
        locationCode: "11729"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "ROMANIA",
        location: "[Other]",
        lodging: "124",
        mAndI: "82",
        perDiem: "206",
        locationCode: "11876"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "ROMANIA",
        location: "Bucharest",
        lodging: "161",
        mAndI: "89",
        perDiem: "250",
        locationCode: "10194"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "ROMANIA",
        location: "Constanta-Mihail Kogalniceanu AB",
        lodging: "155",
        mAndI: "88",
        perDiem: "243",
        locationCode: "13652"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "ROMANIA",
        location: "Constanta-Mihail Kogalniceanu AB",
        lodging: "89",
        mAndI: "82",
        perDiem: "171",
        locationCode: "13652"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "RUSSIA",
        location: "[Other]",
        lodging: "173",
        mAndI: "112",
        perDiem: "285",
        locationCode: "11778"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "RUSSIA",
        location: "Moscow",
        lodging: "350",
        mAndI: "154",
        perDiem: "504",
        locationCode: "10196"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "RUSSIA",
        location: "Saint Petersburg",
        lodging: "352",
        mAndI: "134",
        perDiem: "486",
        locationCode: "10197"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "RUSSIA",
        location: "Sochi",
        lodging: "305",
        mAndI: "202",
        perDiem: "507",
        locationCode: "19957"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "RUSSIA",
        location: "Yuzhno-Sakhalinsk",
        lodging: "250",
        mAndI: "120",
        perDiem: "370",
        locationCode: "12564"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "RWANDA",
        location: "[Other]",
        lodging: "112",
        mAndI: "64",
        perDiem: "176",
        locationCode: "11845"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "RWANDA",
        location: "Akagera",
        lodging: "173",
        mAndI: "70",
        perDiem: "243",
        locationCode: "19002"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "RWANDA",
        location: "Gisenyi",
        lodging: "112",
        mAndI: "64",
        perDiem: "176",
        locationCode: "13473"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "RWANDA",
        location: "Kigali",
        lodging: "203",
        mAndI: "87",
        perDiem: "290",
        locationCode: "10407"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "RWANDA",
        location: "Ruhengeri",
        lodging: "165",
        mAndI: "52",
        perDiem: "217",
        locationCode: "13474"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "SAINT HELENA",
        location: "Saint Helena",
        lodging: "41",
        mAndI: "14",
        perDiem: "55",
        locationCode: "11066"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "SAINT KITTS AND NEVIS",
        location: "Saint Kitts and Nevis",
        lodging: "259",
        mAndI: "138",
        perDiem: "397",
        locationCode: "11700"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "SAINT VINCENT AND THE GRENADINES",
        location: "Saint Vincent and the Grenadines",
        lodging: "220",
        mAndI: "110",
        perDiem: "330",
        locationCode: "11703"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "Samoa",
        location: "Samoa",
        lodging: "186",
        mAndI: "114",
        perDiem: "300",
        locationCode: "11071"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "SAN MARINO",
        location: "San Marino",
        lodging: "112",
        mAndI: "95",
        perDiem: "207",
        locationCode: "11704"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "SAO TOME AND PRINCIPE",
        location: "Principe",
        lodging: "258",
        mAndI: "47",
        perDiem: "305",
        locationCode: "13520"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "SAO TOME AND PRINCIPE",
        location: "Sao Tome",
        lodging: "160",
        mAndI: "99",
        perDiem: "259",
        locationCode: "13522"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "SAUDI ARABIA",
        location: "[Other]",
        lodging: "347",
        mAndI: "163",
        perDiem: "510",
        locationCode: "11818"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "SAUDI ARABIA",
        location: "Dhahran Area",
        lodging: "304",
        mAndI: "134",
        perDiem: "438",
        locationCode: "10364"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "SAUDI ARABIA",
        location: "Eskan",
        lodging: "80",
        mAndI: "43",
        perDiem: "123",
        locationCode: "19986"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "SAUDI ARABIA",
        location: "Jeddah",
        lodging: "347",
        mAndI: "163",
        perDiem: "510",
        locationCode: "10365"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "SAUDI ARABIA",
        location: "Medina",
        lodging: "169",
        mAndI: "93",
        perDiem: "262",
        locationCode: "13407"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "SAUDI ARABIA",
        location: "Medina",
        lodging: "100",
        mAndI: "86",
        perDiem: "186",
        locationCode: "13407"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "SAUDI ARABIA",
        location: "Riyadh",
        lodging: "416",
        mAndI: "142",
        perDiem: "558",
        locationCode: "10363"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "SAUDI ARABIA",
        location: "Taif",
        lodging: "133",
        mAndI: "89",
        perDiem: "222",
        locationCode: "11046"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "SAUDI ARABIA",
        location: "Taif",
        lodging: "111",
        mAndI: "87",
        perDiem: "198",
        locationCode: "11046"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "SENEGAL",
        location: "[Other]",
        lodging: "91",
        mAndI: "103",
        perDiem: "194",
        locationCode: "11877"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "SENEGAL",
        location: "Dakar",
        lodging: "204",
        mAndI: "134",
        perDiem: "338",
        locationCode: "10408"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "SENEGAL",
        location: "Mbour",
        lodging: "91",
        mAndI: "80",
        perDiem: "171",
        locationCode: "19009"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "SERBIA",
        location: "[Other]",
        lodging: "98",
        mAndI: "62",
        perDiem: "160",
        locationCode: "11921"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "SERBIA",
        location: "Belgrade",
        lodging: "194",
        mAndI: "94",
        perDiem: "288",
        locationCode: "11047"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "SERBIA",
        location: "Kopaonik",
        lodging: "152",
        mAndI: "68",
        perDiem: "220",
        locationCode: "20003"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "SEYCHELLES",
        location: "Seychelles",
        lodging: "303",
        mAndI: "130",
        perDiem: "433",
        locationCode: "11068"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "SIERRA LEONE",
        location: "[Other]",
        lodging: "130",
        mAndI: "45",
        perDiem: "175",
        locationCode: "11846"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "SIERRA LEONE",
        location: "Freetown",
        lodging: "180",
        mAndI: "70",
        perDiem: "250",
        locationCode: "10409"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "SINGAPORE",
        location: "Singapore",
        lodging: "284",
        mAndI: "137",
        perDiem: "421",
        locationCode: "10309"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "Sint Maarten",
        location: "Sint Maarten",
        lodging: "263",
        mAndI: "153",
        perDiem: "416",
        locationCode: "11667"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "Slovakia",
        location: "[Other]",
        lodging: "133",
        mAndI: "83",
        perDiem: "216",
        locationCode: "11941"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "Slovakia",
        location: "Bratislava",
        lodging: "196",
        mAndI: "115",
        perDiem: "311",
        locationCode: "11540"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "Slovakia",
        location: "Liptovsky Mikulas",
        lodging: "122",
        mAndI: "94",
        perDiem: "216",
        locationCode: "91135"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "Slovakia",
        location: "Zilina",
        lodging: "143",
        mAndI: "88",
        perDiem: "231",
        locationCode: "13647"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "SLOVENIA",
        location: "[Other]",
        lodging: "160",
        mAndI: "103",
        perDiem: "263",
        locationCode: "11942"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "SLOVENIA",
        location: "Ljubljana",
        lodging: "160",
        mAndI: "103",
        perDiem: "263",
        locationCode: "11541"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "SLOVENIA",
        location: "Portoroz",
        lodging: "207",
        mAndI: "86",
        perDiem: "293",
        locationCode: "13413"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "SOLOMON ISLANDS",
        location: "[Other]",
        lodging: "270",
        mAndI: "90",
        perDiem: "360",
        locationCode: "91177"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "SOLOMON ISLANDS",
        location: "Honiara",
        lodging: "270",
        mAndI: "90",
        perDiem: "360",
        locationCode: "11069"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "SOMALIA",
        location: "[Other]",
        lodging: "112",
        mAndI: "57",
        perDiem: "169",
        locationCode: "11889"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "SOMALIA",
        location: "Mogadishu",
        lodging: "0",
        mAndI: "66",
        perDiem: "66",
        locationCode: "10410"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "SOUTH AFRICA",
        location: "[Other]",
        lodging: "93",
        mAndI: "52",
        perDiem: "145",
        locationCode: "11848"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "SOUTH AFRICA",
        location: "Bloemfontein",
        lodging: "89",
        mAndI: "66",
        perDiem: "155",
        locationCode: "13003"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "SOUTH AFRICA",
        location: "Cape Town",
        lodging: "203",
        mAndI: "81",
        perDiem: "284",
        locationCode: "10412"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "SOUTH AFRICA",
        location: "Durban",
        lodging: "132",
        mAndI: "63",
        perDiem: "195",
        locationCode: "10413"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "SOUTH AFRICA",
        location: "Johannesburg",
        lodging: "184",
        mAndI: "80",
        perDiem: "264",
        locationCode: "10414"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "SOUTH AFRICA",
        location: "Pretoria",
        lodging: "180",
        mAndI: "78",
        perDiem: "258",
        locationCode: "10411"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "SOUTH AFRICA",
        location: "Stellenbosch",
        lodging: "134",
        mAndI: "71",
        perDiem: "205",
        locationCode: "13393"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "SOUTH AFRICA",
        location: "Sun City",
        lodging: "101",
        mAndI: "47",
        perDiem: "148",
        locationCode: "12784"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "SOUTH SUDAN",
        location: "[Other]",
        lodging: "275",
        mAndI: "90",
        perDiem: "365",
        locationCode: "15046"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "SOUTH SUDAN",
        location: "Juba",
        lodging: "275",
        mAndI: "90",
        perDiem: "365",
        locationCode: "13453"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "SPAIN",
        location: "[Other]",
        lodging: "143",
        mAndI: "93",
        perDiem: "236",
        locationCode: "11779"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "SPAIN",
        location: "Almeria",
        lodging: "157",
        mAndI: "102",
        perDiem: "259",
        locationCode: "13396"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "SPAIN",
        location: "Balearic Islands",
        lodging: "184",
        mAndI: "114",
        perDiem: "298",
        locationCode: "13157"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "SPAIN",
        location: "Barcelona",
        lodging: "258",
        mAndI: "105",
        perDiem: "363",
        locationCode: "10202"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "SPAIN",
        location: "Bilbao",
        lodging: "195",
        mAndI: "123",
        perDiem: "318",
        locationCode: "10203"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "SPAIN",
        location: "Fuengirola",
        lodging: "148",
        mAndI: "84",
        perDiem: "232",
        locationCode: "11523"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "SPAIN",
        location: "La Coruna",
        lodging: "141",
        mAndI: "86",
        perDiem: "227",
        locationCode: "11526"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "SPAIN",
        location: "Las Palmas de Gran Canaria",
        lodging: "179",
        mAndI: "89",
        perDiem: "268",
        locationCode: "12914"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "SPAIN",
        location: "Madrid",
        lodging: "275",
        mAndI: "133",
        perDiem: "408",
        locationCode: "10201"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "SPAIN",
        location: "Malaga",
        lodging: "204",
        mAndI: "104",
        perDiem: "308",
        locationCode: "11529"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "SPAIN",
        location: "Marbella",
        lodging: "140",
        mAndI: "93",
        perDiem: "233",
        locationCode: "11530"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "SPAIN",
        location: "Oviedo",
        lodging: "115",
        mAndI: "86",
        perDiem: "201",
        locationCode: "11531"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "SPAIN",
        location: "San Sebastian",
        lodging: "132",
        mAndI: "83",
        perDiem: "215",
        locationCode: "11533"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "SPAIN",
        location: "Santa Cruz de Tenerife",
        lodging: "121",
        mAndI: "85",
        perDiem: "206",
        locationCode: "12913"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "SPAIN",
        location: "Santander",
        lodging: "161",
        mAndI: "83",
        perDiem: "244",
        locationCode: "11534"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "SPAIN",
        location: "Santiago de Compostela",
        lodging: "161",
        mAndI: "93",
        perDiem: "254",
        locationCode: "11535"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "SPAIN",
        location: "Seville",
        lodging: "219",
        mAndI: "98",
        perDiem: "317",
        locationCode: "10204"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "SPAIN",
        location: "Valencia",
        lodging: "282",
        mAndI: "112",
        perDiem: "394",
        locationCode: "11538"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "SPAIN",
        location: "Vigo",
        lodging: "134",
        mAndI: "85",
        perDiem: "219",
        locationCode: "12915"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "SPAIN",
        location: "Zaragoza",
        lodging: "234",
        mAndI: "145",
        perDiem: "379",
        locationCode: "10959"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "SRI LANKA",
        location: "[Other]",
        lodging: "107",
        mAndI: "45",
        perDiem: "152",
        locationCode: "11808"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "SRI LANKA",
        location: "Ahungalla",
        lodging: "110",
        mAndI: "58",
        perDiem: "168",
        locationCode: "12464"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "SRI LANKA",
        location: "Bentota",
        lodging: "104",
        mAndI: "42",
        perDiem: "146",
        locationCode: "12467"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "SRI LANKA",
        location: "Chilaw",
        lodging: "98",
        mAndI: "53",
        perDiem: "151",
        locationCode: "15042"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "SRI LANKA",
        location: "Colombo",
        lodging: "233",
        mAndI: "68",
        perDiem: "301",
        locationCode: "10332"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "SRI LANKA",
        location: "Galle",
        lodging: "145",
        mAndI: "71",
        perDiem: "216",
        locationCode: "12470"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "SRI LANKA",
        location: "Kandy",
        lodging: "177",
        mAndI: "69",
        perDiem: "246",
        locationCode: "11041"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "SRI LANKA",
        location: "Trincomalee",
        lodging: "155",
        mAndI: "76",
        perDiem: "231",
        locationCode: "19022"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "ST LUCIA",
        location: "Saint Lucia",
        lodging: "331",
        mAndI: "157",
        perDiem: "488",
        locationCode: "11701"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "SUDAN",
        location: "[Other]",
        lodging: "210",
        mAndI: "85",
        perDiem: "295",
        locationCode: "11879"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "SUDAN",
        location: "Khartoum",
        lodging: "297",
        mAndI: "140",
        perDiem: "437",
        locationCode: "10418"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "SURINAME",
        location: "[Other]",
        lodging: "149",
        mAndI: "111",
        perDiem: "260",
        locationCode: "11880"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "SURINAME",
        location: "Paramaribo",
        lodging: "149",
        mAndI: "111",
        perDiem: "260",
        locationCode: "10096"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "SWEDEN",
        location: "[Other]",
        lodging: "230",
        mAndI: "103",
        perDiem: "333",
        locationCode: "11780"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "SWEDEN",
        location: "Stockholm",
        lodging: "230",
        mAndI: "103",
        perDiem: "333",
        locationCode: "10206"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "SWITZERLAND",
        location: "[Other]",
        lodging: "250",
        mAndI: "167",
        perDiem: "417",
        locationCode: "11781"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "SWITZERLAND",
        location: "Bad Ragaz",
        lodging: "442",
        mAndI: "169",
        perDiem: "611",
        locationCode: "20009"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "SWITZERLAND",
        location: "Basel",
        lodging: "256",
        mAndI: "181",
        perDiem: "437",
        locationCode: "12483"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "SWITZERLAND",
        location: "Bern",
        lodging: "310",
        mAndI: "171",
        perDiem: "481",
        locationCode: "10208"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "SWITZERLAND",
        location: "Davos",
        lodging: "365",
        mAndI: "198",
        perDiem: "563",
        locationCode: "12690"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "SWITZERLAND",
        location: "Geneva",
        lodging: "336",
        mAndI: "170",
        perDiem: "506",
        locationCode: "10210"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "SWITZERLAND",
        location: "Klosters",
        lodging: "300",
        mAndI: "188",
        perDiem: "488",
        locationCode: "12738"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "SWITZERLAND",
        location: "Lugano",
        lodging: "277",
        mAndI: "181",
        perDiem: "458",
        locationCode: "12739"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "SWITZERLAND",
        location: "Montreux",
        lodging: "367",
        mAndI: "161",
        perDiem: "528",
        locationCode: "12482"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "SWITZERLAND",
        location: "Zurich",
        lodging: "390",
        mAndI: "210",
        perDiem: "600",
        locationCode: "10209"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "SYRIA",
        location: "[Other]",
        lodging: "193",
        mAndI: "20",
        perDiem: "213",
        locationCode: "11881"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "SYRIA",
        location: "Damascus",
        lodging: "193",
        mAndI: "20",
        perDiem: "213",
        locationCode: "10366"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "TAIWAN",
        location: "[Other]",
        lodging: "131",
        mAndI: "114",
        perDiem: "245",
        locationCode: "11906"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "TAIWAN",
        location: "Kaohsiung",
        lodging: "131",
        mAndI: "133",
        perDiem: "264",
        locationCode: "10313"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "TAIWAN",
        location: "Taichung",
        lodging: "110",
        mAndI: "75",
        perDiem: "185",
        locationCode: "11619"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "TAIWAN",
        location: "Taipei",
        lodging: "198",
        mAndI: "113",
        perDiem: "311",
        locationCode: "10311"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "TAJIKISTAN",
        location: "[Other]",
        lodging: "100",
        mAndI: "55",
        perDiem: "155",
        locationCode: "11782"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "TAJIKISTAN",
        location: "Dushanbe",
        lodging: "229",
        mAndI: "82",
        perDiem: "311",
        locationCode: "10211"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "TAJIKISTAN",
        location: "Khorog",
        lodging: "176",
        mAndI: "80",
        perDiem: "256",
        locationCode: "19013"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "TAJIKISTAN",
        location: "Kulob",
        lodging: "100",
        mAndI: "55",
        perDiem: "155",
        locationCode: "19018"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "TANZANIA",
        location: "[Other]",
        lodging: "110",
        mAndI: "47",
        perDiem: "157",
        locationCode: "11851"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "TANZANIA",
        location: "Arusha",
        lodging: "172",
        mAndI: "102",
        perDiem: "274",
        locationCode: "12158"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "TANZANIA",
        location: "Dar Es Salaam",
        lodging: "207",
        mAndI: "106",
        perDiem: "313",
        locationCode: "10420"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "TANZANIA",
        location: "Dodoma",
        lodging: "90",
        mAndI: "64",
        perDiem: "154",
        locationCode: "91162"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "TANZANIA",
        location: "Morogoro",
        lodging: "137",
        mAndI: "60",
        perDiem: "197",
        locationCode: "15068"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "TANZANIA",
        location: "Zanzibar",
        lodging: "195",
        mAndI: "129",
        perDiem: "324",
        locationCode: "13482"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "THAILAND",
        location: "[Other]",
        lodging: "82",
        mAndI: "58",
        perDiem: "140",
        locationCode: "11882"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "THAILAND",
        location: "Bangkok",
        lodging: "161",
        mAndI: "80",
        perDiem: "241",
        locationCode: "10238"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "THAILAND",
        location: "Cha Am",
        lodging: "162",
        mAndI: "73",
        perDiem: "235",
        locationCode: "19993"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "THAILAND",
        location: "Chiang Mai",
        lodging: "127",
        mAndI: "79",
        perDiem: "206",
        locationCode: "10239"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "THAILAND",
        location: "Chiang Rai",
        lodging: "105",
        mAndI: "80",
        perDiem: "185",
        locationCode: "13177"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "THAILAND",
        location: "Hat Yai",
        lodging: "105",
        mAndI: "80",
        perDiem: "185",
        locationCode: "13178"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "THAILAND",
        location: "Hua Hin",
        lodging: "162",
        mAndI: "73",
        perDiem: "235",
        locationCode: "11621"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "THAILAND",
        location: "Khao Lak",
        lodging: "207",
        mAndI: "107",
        perDiem: "314",
        locationCode: "13844"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "THAILAND",
        location: "Krabi",
        lodging: "207",
        mAndI: "90",
        perDiem: "297",
        locationCode: "13845"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "THAILAND",
        location: "Nong Khai",
        lodging: "82",
        mAndI: "58",
        perDiem: "140",
        locationCode: "11622"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "THAILAND",
        location: "Pattaya City",
        lodging: "123",
        mAndI: "84",
        perDiem: "207",
        locationCode: "11623"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "THAILAND",
        location: "Phuket",
        lodging: "207",
        mAndI: "91",
        perDiem: "298",
        locationCode: "11626"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "THAILAND",
        location: "Samui Island",
        lodging: "183",
        mAndI: "94",
        perDiem: "277",
        locationCode: "11625"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "TIMOR-LESTE",
        location: "[Other]",
        lodging: "70",
        mAndI: "70",
        perDiem: "140",
        locationCode: "13977"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "TIMOR-LESTE",
        location: "Dili",
        lodging: "184",
        mAndI: "100",
        perDiem: "284",
        locationCode: "13976"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "TOGO",
        location: "[Other]",
        lodging: "60",
        mAndI: "57",
        perDiem: "117",
        locationCode: "11852"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "TOGO",
        location: "Lama Kara",
        lodging: "90",
        mAndI: "65",
        perDiem: "155",
        locationCode: "12352"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "TOGO",
        location: "Lome",
        lodging: "174",
        mAndI: "85",
        perDiem: "259",
        locationCode: "10422"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "Tokelau",
        location: "Tokelau Islands",
        lodging: "20",
        mAndI: "18",
        perDiem: "38",
        locationCode: "11705"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "TONGA",
        location: "[Other]",
        lodging: "126",
        mAndI: "72",
        perDiem: "198",
        locationCode: "11883"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "TONGA",
        location: "Nukualofa",
        lodging: "126",
        mAndI: "72",
        perDiem: "198",
        locationCode: "10812"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "TRINIDAD AND TOBAGO",
        location: "[Other]",
        lodging: "236",
        mAndI: "193",
        perDiem: "429",
        locationCode: "11884"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "TRINIDAD AND TOBAGO",
        location: "Port of Spain",
        lodging: "236",
        mAndI: "193",
        perDiem: "429",
        locationCode: "11077"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "TRINIDAD AND TOBAGO",
        location: "Tobago",
        lodging: "220",
        mAndI: "109",
        perDiem: "329",
        locationCode: "11674"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "TUNISIA",
        location: "[Other]",
        lodging: "52",
        mAndI: "83",
        perDiem: "135",
        locationCode: "11819"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "TUNISIA",
        location: "Hammamet",
        lodging: "130",
        mAndI: "102",
        perDiem: "232",
        locationCode: "11590"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "TUNISIA",
        location: "Hammamet",
        lodging: "64",
        mAndI: "96",
        perDiem: "160",
        locationCode: "11590"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "TUNISIA",
        location: "Jerba",
        lodging: "59",
        mAndI: "74",
        perDiem: "133",
        locationCode: "11591"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "TUNISIA",
        location: "Tabarka",
        lodging: "153",
        mAndI: "100",
        perDiem: "253",
        locationCode: "12309"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "TUNISIA",
        location: "Tabarka",
        lodging: "138",
        mAndI: "99",
        perDiem: "237",
        locationCode: "12309"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "TUNISIA",
        location: "Tamerza",
        lodging: "52",
        mAndI: "57",
        perDiem: "109",
        locationCode: "13933"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "TUNISIA",
        location: "Tozeur",
        lodging: "57",
        mAndI: "59",
        perDiem: "116",
        locationCode: "11598"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "TUNISIA",
        location: "Tunis",
        lodging: "117",
        mAndI: "111",
        perDiem: "228",
        locationCode: "10367"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "TURKEY",
        location: "[Other]",
        lodging: "120",
        mAndI: "82",
        perDiem: "202",
        locationCode: "11783"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "TURKEY",
        location: "Adana-Incirlik",
        lodging: "163",
        mAndI: "97",
        perDiem: "260",
        locationCode: "10215"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "TURKEY",
        location: "Ankara",
        lodging: "162",
        mAndI: "62",
        perDiem: "224",
        locationCode: "10212"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "TURKEY",
        location: "Antalya",
        lodging: "189",
        mAndI: "94",
        perDiem: "283",
        locationCode: "11547"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "TURKEY",
        location: "Bursa",
        lodging: "158",
        mAndI: "102",
        perDiem: "260",
        locationCode: "12399"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "TURKEY",
        location: "Gaziantep",
        lodging: "130",
        mAndI: "48",
        perDiem: "178",
        locationCode: "19985"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "TURKEY",
        location: "Istanbul",
        lodging: "324",
        mAndI: "150",
        perDiem: "474",
        locationCode: "10213"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "TURKEY",
        location: "Izmir-Cigli",
        lodging: "246",
        mAndI: "48",
        perDiem: "294",
        locationCode: "11545"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "TURKMENISTAN",
        location: "[Other]",
        lodging: "100",
        mAndI: "65",
        perDiem: "165",
        locationCode: "11784"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "TURKMENISTAN",
        location: "Ashgabat",
        lodging: "115",
        mAndI: "110",
        perDiem: "225",
        locationCode: "10217"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "TURKS AND CAICOS ISLANDS",
        location: "Turks and Caicos Islands",
        lodging: "304",
        mAndI: "165",
        perDiem: "469",
        locationCode: "12562"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "TURKS AND CAICOS ISLANDS",
        location: "Turks and Caicos Islands",
        lodging: "231",
        mAndI: "157",
        perDiem: "388",
        locationCode: "12562"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "TUVALU",
        location: "Tuvalu",
        lodging: "112",
        mAndI: "82",
        perDiem: "194",
        locationCode: "11070"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "UGANDA",
        location: "[Other]",
        lodging: "69",
        mAndI: "43",
        perDiem: "112",
        locationCode: "11853"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "UGANDA",
        location: "Entebbe",
        lodging: "172",
        mAndI: "73",
        perDiem: "245",
        locationCode: "12232"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "UGANDA",
        location: "Fort Portal",
        lodging: "113",
        mAndI: "63",
        perDiem: "176",
        locationCode: "15002"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "UGANDA",
        location: "Gulu",
        lodging: "69",
        mAndI: "43",
        perDiem: "112",
        locationCode: "15000"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "UGANDA",
        location: "Jinja",
        lodging: "120",
        mAndI: "62",
        perDiem: "182",
        locationCode: "13912"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "UGANDA",
        location: "Kampala",
        lodging: "250",
        mAndI: "70",
        perDiem: "320",
        locationCode: "10423"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "UGANDA",
        location: "Mbale",
        lodging: "71",
        mAndI: "75",
        perDiem: "146",
        locationCode: "15003"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "UGANDA",
        location: "Mbarara",
        lodging: "100",
        mAndI: "59",
        perDiem: "159",
        locationCode: "15004"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "UKRAINE",
        location: "[Other]",
        lodging: "140",
        mAndI: "97",
        perDiem: "237",
        locationCode: "11785"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "UKRAINE",
        location: "Kharkiv",
        lodging: "152",
        mAndI: "95",
        perDiem: "247",
        locationCode: "12625"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "UKRAINE",
        location: "Kyiv",
        lodging: "243",
        mAndI: "95",
        perDiem: "338",
        locationCode: "10218"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "UNITED ARAB EMIRATES",
        location: "[Other]",
        lodging: "328",
        mAndI: "149",
        perDiem: "477",
        locationCode: "11885"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "UNITED ARAB EMIRATES",
        location: "Abu Dhabi",
        lodging: "328",
        mAndI: "149",
        perDiem: "477",
        locationCode: "10368"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "UNITED ARAB EMIRATES",
        location: "Dubai",
        lodging: "383",
        mAndI: "173",
        perDiem: "556",
        locationCode: "10369"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "UNITED KINGDOM",
        location: "[Other]",
        lodging: "207",
        mAndI: "123",
        perDiem: "330",
        locationCode: "11886"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "UNITED KINGDOM",
        location: "Belfast",
        lodging: "196",
        mAndI: "103",
        perDiem: "299",
        locationCode: "10220"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "UNITED KINGDOM",
        location: "Birmingham",
        lodging: "163",
        mAndI: "71",
        perDiem: "234",
        locationCode: "10221"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "UNITED KINGDOM",
        location: "Bristol",
        lodging: "195",
        mAndI: "92",
        perDiem: "287",
        locationCode: "10969"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "UNITED KINGDOM",
        location: "Cambridge",
        lodging: "260",
        mAndI: "135",
        perDiem: "395",
        locationCode: "10499"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "UNITED KINGDOM",
        location: "Cardiff, Wales",
        lodging: "170",
        mAndI: "83",
        perDiem: "253",
        locationCode: "12420"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "UNITED KINGDOM",
        location: "Caversham",
        lodging: "222",
        mAndI: "123",
        perDiem: "345",
        locationCode: "10504"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "UNITED KINGDOM",
        location: "Cheltenham",
        lodging: "150",
        mAndI: "102",
        perDiem: "252",
        locationCode: "10506"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "UNITED KINGDOM",
        location: "Crawley",
        lodging: "366",
        mAndI: "180",
        perDiem: "546",
        locationCode: "11576"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "UNITED KINGDOM",
        location: "Edinburgh",
        lodging: "634",
        mAndI: "159",
        perDiem: "793",
        locationCode: "10222"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "UNITED KINGDOM",
        location: "Edinburgh",
        lodging: "261",
        mAndI: "122",
        perDiem: "383",
        locationCode: "10222"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "UNITED KINGDOM",
        location: "Fairford",
        lodging: "169",
        mAndI: "88",
        perDiem: "257",
        locationCode: "10976"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "UNITED KINGDOM",
        location: "Gatwick",
        lodging: "172",
        mAndI: "122",
        perDiem: "294",
        locationCode: "11550"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "UNITED KINGDOM",
        location: "Glasgow",
        lodging: "163",
        mAndI: "87",
        perDiem: "250",
        locationCode: "10223"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "UNITED KINGDOM",
        location: "Harrogate",
        lodging: "114",
        mAndI: "98",
        perDiem: "212",
        locationCode: "11553"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "UNITED KINGDOM",
        location: "High Wycombe",
        lodging: "153",
        mAndI: "92",
        perDiem: "245",
        locationCode: "11555"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "UNITED KINGDOM",
        location: "Horley",
        lodging: "172",
        mAndI: "122",
        perDiem: "294",
        locationCode: "11580"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "UNITED KINGDOM",
        location: "Liverpool",
        lodging: "218",
        mAndI: "127",
        perDiem: "345",
        locationCode: "12422"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "UNITED KINGDOM",
        location: "London",
        lodging: "366",
        mAndI: "180",
        perDiem: "546",
        locationCode: "10219"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "UNITED KINGDOM",
        location: "Loudwater",
        lodging: "142",
        mAndI: "99",
        perDiem: "241",
        locationCode: "12124"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "UNITED KINGDOM",
        location: "Manchester",
        lodging: "237",
        mAndI: "125",
        perDiem: "362",
        locationCode: "11582"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "UNITED KINGDOM",
        location: "Menwith Hill",
        lodging: "114",
        mAndI: "98",
        perDiem: "212",
        locationCode: "11554"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "UNITED KINGDOM",
        location: "Oxford",
        lodging: "260",
        mAndI: "150",
        perDiem: "410",
        locationCode: "12421"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "UNITED KINGDOM",
        location: "Reading",
        lodging: "222",
        mAndI: "123",
        perDiem: "345",
        locationCode: "11557"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "URUGUAY",
        location: "[Other]",
        lodging: "155",
        mAndI: "126",
        perDiem: "281",
        locationCode: "11755"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "URUGUAY",
        location: "Colonia",
        lodging: "190",
        mAndI: "132",
        perDiem: "322",
        locationCode: "13384"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "URUGUAY",
        location: "Montevideo",
        lodging: "155",
        mAndI: "126",
        perDiem: "281",
        locationCode: "10098"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "URUGUAY",
        location: "Punta del Este",
        lodging: "240",
        mAndI: "160",
        perDiem: "400",
        locationCode: "11676"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "URUGUAY",
        location: "Punta del Este",
        lodging: "303",
        mAndI: "167",
        perDiem: "470",
        locationCode: "11676"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "UZBEKISTAN",
        location: "[Other]",
        lodging: "106",
        mAndI: "73",
        perDiem: "179",
        locationCode: "11786"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "UZBEKISTAN",
        location: "Tashkent",
        lodging: "158",
        mAndI: "121",
        perDiem: "279",
        locationCode: "10227"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "VANUATU",
        location: "[Other]",
        lodging: "20",
        mAndI: "13",
        perDiem: "33",
        locationCode: "11959"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "VANUATU",
        location: "Port Vila",
        lodging: "176",
        mAndI: "119",
        perDiem: "295",
        locationCode: "11707"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "VANUATU",
        location: "Santos",
        lodging: "190",
        mAndI: "103",
        perDiem: "293",
        locationCode: "11708"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "VANUATU",
        location: "Tanna Island",
        lodging: "267",
        mAndI: "111",
        perDiem: "378",
        locationCode: "11709"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "VENEZUELA",
        location: "[Other]",
        lodging: "278",
        mAndI: "206",
        perDiem: "484",
        locationCode: "11887"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "VENEZUELA",
        location: "Barquisimeto",
        lodging: "263",
        mAndI: "299",
        perDiem: "562",
        locationCode: "13430"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "VENEZUELA",
        location: "Caracas",
        lodging: "314",
        mAndI: "261",
        perDiem: "575",
        locationCode: "10099"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "VENEZUELA",
        location: "Maracaibo",
        lodging: "276",
        mAndI: "287",
        perDiem: "563",
        locationCode: "10100"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "VENEZUELA",
        location: "Porlamar",
        lodging: "266",
        mAndI: "281",
        perDiem: "547",
        locationCode: "13428"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "VENEZUELA",
        location: "Puerto La Cruz",
        lodging: "278",
        mAndI: "206",
        perDiem: "484",
        locationCode: "13433"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "VENEZUELA",
        location: "Puerto Ordaz",
        lodging: "285",
        mAndI: "214",
        perDiem: "499",
        locationCode: "13426"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "VENEZUELA",
        location: "Punto Fijo",
        lodging: "241",
        mAndI: "231",
        perDiem: "472",
        locationCode: "13435"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "VENEZUELA",
        location: "San Cristobal",
        lodging: "278",
        mAndI: "268",
        perDiem: "546",
        locationCode: "13434"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "VENEZUELA",
        location: "Valencia",
        lodging: "249",
        mAndI: "256",
        perDiem: "505",
        locationCode: "13429"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "VIETNAM",
        location: "[Other]",
        lodging: "151",
        mAndI: "98",
        perDiem: "249",
        locationCode: "11802"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "VIETNAM",
        location: "Dalat",
        lodging: "155",
        mAndI: "107",
        perDiem: "262",
        locationCode: "12729"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "VIETNAM",
        location: "Danang",
        lodging: "174",
        mAndI: "110",
        perDiem: "284",
        locationCode: "12730"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "VIETNAM",
        location: "Hanoi",
        lodging: "243",
        mAndI: "119",
        perDiem: "362",
        locationCode: "10314"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "VIETNAM",
        location: "Ho Chi Minh City",
        lodging: "222",
        mAndI: "101",
        perDiem: "323",
        locationCode: "12631"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "VIRGIN ISLANDS, BRITISH",
        location: "Virgin Islands, British",
        lodging: "138",
        mAndI: "100",
        perDiem: "238",
        locationCode: "19017"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "VIRGIN ISLANDS, BRITISH",
        location: "Virgin Islands, British",
        lodging: "192",
        mAndI: "105",
        perDiem: "297",
        locationCode: "19017"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "WALLIS AND FUTUNA",
        location: "Wallis and Futuna",
        lodging: "73",
        mAndI: "64",
        perDiem: "137",
        locationCode: "11710"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "YEMEN",
        location: "[Other]",
        lodging: "108",
        mAndI: "65",
        perDiem: "173",
        locationCode: "11820"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "YEMEN",
        location: "Aden",
        lodging: "164",
        mAndI: "58",
        perDiem: "222",
        locationCode: "11600"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "YEMEN",
        location: "Sanaa",
        lodging: "360",
        mAndI: "95",
        perDiem: "455",
        locationCode: "10370"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "ZAMBIA",
        location: "[Other]",
        lodging: "95",
        mAndI: "80",
        perDiem: "175",
        locationCode: "11890"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "ZAMBIA",
        location: "Chipata",
        lodging: "110",
        mAndI: "92",
        perDiem: "202",
        locationCode: "91164"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "ZAMBIA",
        location: "Kitwe",
        lodging: "139",
        mAndI: "122",
        perDiem: "261",
        locationCode: "11503"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "ZAMBIA",
        location: "Livingstone",
        lodging: "229",
        mAndI: "93",
        perDiem: "322",
        locationCode: "11504"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "ZAMBIA",
        location: "Lusaka",
        lodging: "220",
        mAndI: "135",
        perDiem: "355",
        locationCode: "10430"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "ZAMBIA",
        location: "Mfuwe",
        lodging: "119",
        mAndI: "101",
        perDiem: "220",
        locationCode: "13117"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "ZAMBIA",
        location: "Ndola",
        lodging: "139",
        mAndI: "114",
        perDiem: "253",
        locationCode: "11505"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "ZAMBIA",
        location: "Solwezi",
        lodging: "110",
        mAndI: "72",
        perDiem: "182",
        locationCode: "91163"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "ZIMBABWE",
        location: "[Other]",
        lodging: "130",
        mAndI: "73",
        perDiem: "203",
        locationCode: "11849"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "ZIMBABWE",
        location: "Bulawayo",
        lodging: "195",
        mAndI: "75",
        perDiem: "270",
        locationCode: "12074"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "ZIMBABWE",
        location: "Harare",
        lodging: "192",
        mAndI: "103",
        perDiem: "295",
        locationCode: "10417"
    }
]);
    await knex('oconusperdiem').insert([
{
        country: "ZIMBABWE",
        location: "Victoria Falls",
        lodging: "199",
        mAndI: "95",
        perDiem: "294",
        locationCode: "11507"
    }
    ]);

  };
  