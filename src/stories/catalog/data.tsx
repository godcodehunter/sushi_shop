import sushiSalmon from "./assets/sushi/salmon.jpg";
import sushiMaguro from "./assets/sushi/maguro.jpg";
import sushiUnagi from "./assets/sushi/unagi.jpg";
import sushiSalmonWithPhilla from "./assets/sushi/salmon_with_philla.jpg";
import sushiHotate from "./assets/sushi/hotate.jpg";
import sushiEbi from "./assets/sushi/ebi.jpg";
import sushiSpiceSalmon from "./assets/sushi/spice_salmon.jpg";
import sushiSpiceMaguro from "./assets/sushi/spice_maguro.jpg";
import sushiSpiceUnagi from "./assets/sushi/spice_unagi.jpg";
import sushiSpiceHotate from "./assets/sushi/spice_hotate.jpg";
import sushiVakameSarada from "./assets/sushi/vakame_sarada.jpg";
import rollsSalmon from "./assets/rolls/salmon_maki.jpg";
import rollsSpiceSalmon from "./assets/rolls/spice_salmon_maki.jpg";
import rollsMaguro from "./assets/rolls/maguro_maki.jpg";
import rollsSpiceMaguro from "./assets/rolls/spice_salmon_maki.jpg";
import rollsUnagi from "./assets/rolls/unagi_maki.jpg";
import rollsSpiceUnagi from "./assets/rolls/spice_unagi_maki.jpg";
import rollsSnowCrabs from "./assets/rolls/snowcrabs_maki.jpg";
import rollsSpiceSnowCrabs from "./assets/rolls/spice_snowcrabs_maki.jpg";
// FIXME: add correct photos
import rollsCucumber from "./assets/rolls/calif_with_shrimps.jpg";
import rollsAvocado from "./assets/rolls/avocado_maki.jpg";
import rollsPhilla1 from "./assets/rolls/philla_with_cucumber.jpg";
import rollsPhilla2 from "./assets/rolls/philla_with_avocado.jpg";
import rollsCalifa1 from "./assets/rolls/calif_with_snowcrab.jpg";
import rollsCalifa2 from "./assets/rolls/calif_with_shrimps.jpg";
// FIXME: add correct photos
import rollsCalifa3 from "./assets/rolls/calif_with_shrimps.jpg";
import sashimiSalmon from "./assets/sashimi/sashimi_salmon.jpg";
import sashimiMaguro from "./assets/sashimi/sashimi_maguro.jpg";
import sashimiUnagi from "./assets/sashimi/sashimi_unagi.jpg";

export interface Item {
    name: string,
    img: string,
    composition: string[],
    weight: number,
    price: number,
}

export interface Category {
    category: string,
    items: Item[],
}

export type Catalog = Category[]

export const data:Catalog = [
    {
        "category": "Sushi",
        "items": [
            {
                "name": "Salmon",
                "img": sushiSalmon,
                "composition": ["salmon", "rice"],
                "weight": 33,
                "price": 50,
            },
            {
                "name": "Maguro",
                "img": sushiMaguro,
                "composition": ["maguro", "rice"],
                "weight": 33,
                "price": 50,
            },
            {
                "name": "Unagi",
                "img": sushiUnagi,
                "composition": ["unagi", "rice","unagi sauce", "nori"],
                "weight": 33,
                "price": 50,
            },
            {
                "name": "Salmon with Philadelphia",
                "img": sushiSalmonWithPhilla,
                "composition": ["salmon", "rice", "cream cheese"],
                "weight": 33,
                "price": 60,
            },
            {
                "name": "Hotate",
                "img": sushiHotate,
                "composition": ["scallop", "rice"],
                "weight": 33,
                "price": 60,
            },
            {
                "name": "Ebi",
                "img": sushiEbi,
                "composition": ["Shrimp", "rice"],
                "weight": 33,
                "price": 50,
            },
            {
                "name": "Spice Salmon Gunkan",
                "img": sushiSpiceSalmon,
                "composition": ["salmon", "rice", "spice sauce", "nori"],
                "weight": 35,
                "price": 60,
            },
            {"name": "Spice Maguro Gunkan",
            "img": sushiSpiceMaguro,
            "composition": ["maguro", "rice", "spice sauce", "nori"],
            "weight": 35,
            "price": 60,
            },
            {
                "name": "Spice Unagi Gunkan",
                "img": sushiSpiceUnagi,
                "composition": ["unagi", "rice", "spice sauce", "nori"],
                "weight": 35,
                "price": 60,
            },
            {
                "name": "Spice Salmon Gunkan",
                "img": sushiSpiceHotate,
                "composition": ["scallop", "rice", "spice sauce", "nori"],
                "weight": 35,
                "price": 70,
            },
            {
                "name": "Vakame Sarada Gunkan",
                "img": sushiSpiceSalmon,
                "composition": ["salmon", "rice", "spice sauce", "nori"],
                "weight": 35,
                "price": 50,
            },
        ]
    },
    {
        "category": "Rolls",
        items: [
            {
                "name": "Salmon maki",
                "img": rollsSalmon,
                "composition": ["rice", "salmon", "nori"],
                "weight": 105,
                "price": 150,
            
            },
            {
                "name": "Spice Salmon maki",
                "img": rollsSpiceSalmon,
                "composition": ["rice", "salmon", "spice sauce", "nori"],
                "weight": 105,
                "price": 160,
            
            },
            {
                "name": "Maguro maki",
                "img": rollsMaguro,
                "composition": ["rice", "maguro", "nori"],
                "weight": 105,
                "price": 150,
            
            },
            {
                "name": "Spice Maguro maki",
                "img": rollsSpiceMaguro,
                "composition": ["rice", "maguro", "spice sauce", "nori"],
                "weight": 105,
                "price": 160,
             
            },
            {
               "name": "Unagi maki",
                "img": rollsUnagi,
                "composition": ["rice", "unagi", "cucumber", "nori"],
                "weight": 110,
                "price": 150,
            
            },
            {
                "name": "Spice Unagi maki",
                "img": rollsSpiceUnagi,
                "composition": ["rice", "unagi", "spice sauce", "nori"],
                "weight": 105,
                "price": 160,
            },
            {
                "name": "Snowy Crabs maki",
                "img": rollsSnowCrabs,
                "composition": ["rice", "imitation crab meat", "nori"],
                "weight": 105,
                "price": 130,
            },
            {
                "name": "Spice Snowy Crabs maki",
                "img": rollsSpiceSnowCrabs,
                "composition": ["rice", "imitation crab meat", "spice sauce", "nori"],
                "weight": 105,
                "price": 130,
            },
            {
                "name": "Cucumber maki",
                "img": rollsCucumber,
                "composition": ["rice", "cucumber", "nori"],
                "weight": 110,
                "price": 80,
            },
            {
                "name": "Avocado maki",
                "img": rollsAvocado,
                "composition": ["rice", "avocado", "nori"],
                "weight": 110,
                "price": 100,
            },
            {
                "name": "Philadelphia with cucumber",
                "img": rollsPhilla1,
                "composition": ["rice", "salmon", "philadelphia cheese", "cucumber", "nori"],
                "weight": 235,
                "price": 250,
            },
            {
                "name": "Philadelphia with avocado",
                "img": rollsPhilla2,
                "composition": ["rice", "salmon", "philadelphia cheese", "avocado", "nori"],
                "weight": 235,
                "price": 250,
            },
            {
                "name": "California with snowy crabs",
                "img": rollsCalifa1,
                "composition": ["rice", "imitation crab meat", "tobico", "avocado","cucumber", "mayonnaise", "nori"],
                "weight": 210,
                "price": 180,
            },
            {
                "name": "California with shrimps",
                "img": rollsCalifa2,
                "composition": ["rice", "shrimps", "tobico", "avocado","cucumber", "mayonnaise", "nori"],
                "weight": 210,
                "price": 210,
            },
            {
                "name": "California with salmon",
                "img": rollsCalifa3,
                "composition": ["rice", "salmon", "tobico", "avocado","cucumber", "mayonnaise", "nori"],
                "weight": 210,
                "price": 230,
            }
        ]
    },
    {
        "category": "Sashimi",
        "items": [
            {
                "name": "Salmon",
                "img": sashimiSalmon,
                "composition": ["salmon", "daikon", "cucumber"],
                "weight": 100,
                "price": 200,
            },
            {
                "name": "Maguro",
                "img": sashimiMaguro,
                "composition": ["maguro", "daikon", "cucumber"],
                "weight": 100,
                "price": 200,
            },
            {
                "name": "Unagi",
                "img": sashimiUnagi,
                "composition": ["unagi", "daikon", "cucumber"],
                "weight": 100,
                "price": 200,
            }
        ]
    },
];
