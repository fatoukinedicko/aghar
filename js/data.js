/**
 * AGHAR - Artisanat Touareg d'Exception
 * Base de données des créations artisanales réelles de l'Atelier
 * Atelier : N° 42, Village Artisanal de Soumbédioune, Dakar
 * Contact WhatsApp : +221 77 964 00 35
 */

const SHOP_CONFIG = {
    storeName: "AGHAR",
    tagline: "L'artisanat touareg d'exception façonné à la main",
    artisan: {
        name: "Maître Artisan Boubacar Dicko",
        title: "Maître Forgeron & Maroquinier Touareg (Inaden)",
        origin: "Originaire du Sahara (Massif de l'Aïr / Agadez)",
        workshop: "Atelier N° 42, Village Artisanal de Soumbédioune, Corniche Ouest, Dakar, Sénégal",
        phone: "+221 77 964 00 35",
        phoneRaw: "221779640035",
        experienceYears: "Plus de 28 années de savoir-faire transmis de père en fils",
        materials: ["Cuir de chèvre tanné végétal", "Bois d'ébène et acacia rouge", "Cuivre & laiton ciselé", "Fibres naturelles de palmier doum"]
    },
    currencies: {
        FCFA: { symbol: "FCFA", rate: 1, format: (val) => `${Math.round(val).toLocaleString('fr-FR')} FCFA` },
        EUR: { symbol: "€", rate: 0.001524, format: (val) => `${(val * 0.001524).toFixed(2).replace('.', ',')} €` },
        USD: { symbol: "$", rate: 0.00165, format: (val) => `$${(val * 0.00165).toFixed(2)}` }
    }
};

// Liste de référence des créations d'origine de l'Atelier
const BASE_PRODUCTS = [
    {
        id: "coffre-semainier-ebene",
        name: "Grand Coffre Semainier à Tiroirs en Cuir Ébène Sculpté",
        category: "coffres",
        categoryName: "Coffres & Malles",
        priceFCFA: 185000,
        badge: "Pièce de Maître",
        isFeatured: true,
        image: "articles/15.jpeg",
        imageType: "coffre-grand",
        shortDesc: "Meuble coffre d'exception à 3 tiroirs coulissants et coffre supérieur bombé, gainé de cuir noir ébène ciselé avec serrure dorée en laiton massif.",
        description: "Chef-d'œuvre de maroquinerie d'art et d'ébénisterie touareg réalisé à l'atelier de Soumbédioune. Ce meuble coffre semainier allie une structure solide en bois noble gainée de cuir pleine fleur teinté aux pigments profonds d'ébène. Il comprend un grand compartiment supérieur sous couvercle cintré verrouillable par clé en laiton et trois tiroirs coulissants surpiqués à la main. Une pièce maîtresse intemporelle pour salon ou chambre.",
        dimensions: "Hauteur: 65 cm × Largeur: 46 cm × Profondeur: 38 cm",
        weight: "11.5 kg",
        materials: "Bois massif noble, cuir de chèvre noir ébène, serrure et barillet laiton doré",
        craftTime: "35 jours de façonnage",
        stockStatus: "En stock (Atelier Soumbédioune)",
        tags: ["coffre", "semainier", "tiroirs", "meuble", "cuir", "ebene", "laiton"]
    },
    {
        id: "coffre-ecrin-compartimente",
        name: "Coffre Écrin Compartimenté en Cuir Patiné & Serrure Nomade",
        category: "coffres",
        categoryName: "Coffres & Malles",
        priceFCFA: 85000,
        badge: "Coup de Cœur",
        isFeatured: true,
        image: "articles/1.jpeg",
        imageType: "coffre-moyen",
        shortDesc: "Coffre d'apparat en cuir gravé à la main avec casiers intérieurs amovibles doublés de feutrine et ferrure de verrouillage traditionnelle.",
        description: "Ce coffret traditionnel présente sur son couvercle une somptueuse rosace géométrique touareg gravée au fer chaud. L'intérieur révèle un plateau compartimenté idéal pour organiser montres de collection, bijoux précieux ou parures nomades. Fermeture protégée par moraillon en cuir et métal ciselé.",
        dimensions: "Longueur: 52 cm × Largeur: 32 cm × Hauteur: 24 cm",
        weight: "4.8 kg",
        materials: "Structure bois rigide, cuir de chèvre tanné végétal patiné, doublure feutrine douce",
        craftTime: "18 jours de travail",
        stockStatus: "En stock",
        tags: ["coffre", "ecrin", "compartiments", "montres", "bijoux", "cuir", "patine"]
    },
    {
        id: "boites-bijoux-miroir",
        name: "Coffret à Bijoux en Cuir Repoussé avec Miroir Intérieur",
        category: "boites",
        categoryName: "Boîtes & Coffrets en Cuir",
        priceFCFA: 38000,
        badge: "Best-Seller",
        isFeatured: true,
        image: "articles/14.jpeg",
        imageType: "boite-rectangulaire",
        shortDesc: "Boîte à bijoux raffinée garnie de cuir touareg aux motifs géométriques en relief, miroir biseauté sous couvercle et intérieur velours carmin.",
        description: "Disponible en cuir rouge saharien, vert émeraude ou bleu nuit indigo. Chaque boîte est équipée d'un miroir de courtoisie intégré sous le battant et d'une doublure en velours protecteur. Les motifs en losange surpiqués rappellent les amulettes protectrices du désert.",
        dimensions: "Longueur: 28 cm × Largeur: 18 cm × Hauteur: 14 cm",
        weight: "1.2 kg",
        materials: "Cuir de chèvre teinté artisanalement, miroir de verre, doublure velours",
        craftTime: "7 jours de travail",
        stockStatus: "En stock (Rouge, Vert et Bleu disponibles)",
        tags: ["boite", "bijoux", "miroir", "cuir", "rouge", "indigo", "velours"]
    },
    {
        id: "boites-rondes-sahariennes",
        name: "Boîte Cylindrique Traditionnelle en Cuir Ciselé Saharien",
        category: "boites",
        categoryName: "Boîtes & Coffrets en Cuir",
        priceFCFA: 22000,
        badge: "Art Ancestral",
        isFeatured: true,
        image: "articles/17.jpeg",
        imageType: "boite-ronde",
        shortDesc: "Boîte ronde emblématique en cuir durci, gravée à la main de la Croix d'Agadez et de rosaces berbères. Déclinée en teintes vives sahariennes.",
        description: "Véritable icône de la maroquinerie nomade touareg. Moulée à la main selon la technique séculaire du cuir séché au soleil, chaque boîte arbore un motif géométrique distinct sur son couvercle. Choix parmi les pigments traditionnels : jaune safran, bleu indigo du Tagelmust, orange ocre et rouge profond.",
        dimensions: "Diamètre: 19 cm × Hauteur: 11 cm",
        weight: "480 g",
        materials: "Cuir de chèvre pleine fleur, pigments végétaux et minéraux sahariens",
        craftTime: "4 jours de travail",
        stockStatus: "En stock (Grand choix de coloris à l'Atelier)",
        tags: ["boite", "ronde", "cuir", "croix du sud", "indigo", "safran", "bijoux"]
    },
    {
        id: "coffrets-cuir-marbre",
        name: "Duo de Coffrets Rectangulaires en Cuir Marbré Naturel",
        category: "boites",
        categoryName: "Boîtes & Coffrets en Cuir",
        priceFCFA: 45000,
        badge: "Fait Main",
        isFeatured: false,
        image: "articles/9.jpeg",
        imageType: "boite-rectangulaire",
        shortDesc: "Élégantes boîtes de rangement en cuir teinté avec la technique du marbrage aux pigments d'ambre, d'indigo et d'écorces naturelles.",
        description: "L'effet marbré unique est obtenu grâce à l'application de teintures naturelles par nébulisation et friction d'écorces locales. Aucun coffret ne ressemble à un autre. Parfaites sur un bureau ou une commode pour ranger stylos, lettres, montres ou souvenirs de voyage.",
        dimensions: "Grande: 32 cm × 20 cm × 10 cm | Moyenne: 26 cm × 16 cm × 9 cm",
        weight: "1.4 kg (le set)",
        materials: "Bois léger, cuir de chèvre marbré à la main, charnières cuir invisibles",
        craftTime: "8 jours de travail",
        stockStatus: "En stock",
        tags: ["boite", "cuir", "marbre", "bureau", "rectangulaire", "rangement"]
    },
    {
        id: "boites-ovales-marbrees",
        name: "Trio de Boîtes Ovales en Cuir Marbré à Bouton Sculpté",
        category: "boites",
        categoryName: "Boîtes & Coffrets en Cuir",
        priceFCFA: 42000,
        badge: "Nouveauté",
        isFeatured: false,
        image: "articles/16.jpeg",
        imageType: "boite-ronde",
        shortDesc: "Boîtes de forme ovale galbée en cuir marbré éclatant, surmontées d'un cabochon de préhension en cuir d'ébène patiné.",
        description: "Ce trio harmonieux de boîtes ovales combine la souplesse des courbes à la noblesse du cuir teinté marbré rouge-corail, safran et bleu nuit. Le bouton central permet une ouverture facile et douce.",
        dimensions: "Longueur: 22 cm × Largeur: 16 cm × Hauteur: 14 cm (format moyen)",
        weight: "1.1 kg",
        materials: "Cuir façonné sur moule ovale, cabochon cuir et bois noir",
        craftTime: "9 jours de façonnage",
        stockStatus: "En stock (2 sets disponibles)",
        tags: ["boite", "ovale", "marbre", "cabochon", "cuir", "decoratif"]
    },
    {
        id: "panier-apparat-cauris",
        name: "Panier d'Apparat Touareg Serti de Cauris Traditionnels",
        category: "paniers",
        categoryName: "Paniers & Vannerie Saharienne",
        priceFCFA: 48000,
        badge: "Pièce Unique",
        isFeatured: true,
        image: "articles/10.jpeg",
        imageType: "panier-conique",
        shortDesc: "Panier de prestige en fibres tressées serrées et cuir brun, orné d'une double frise de coquillages cauris blancs et lanières de cuir tressé.",
        description: "Dans la tradition saharienne et ouest-africaine, le cauri est symbole de prospérité, de protection et de féminité. Ce panier réunit un tressage d'une régularité remarquable, un couvercle conique surmonté d'un pommeau en cuir et des pompons en cuir tressé fluide.",
        dimensions: "Diamètre: 34 cm × Hauteur totale: 42 cm",
        weight: "1.6 kg",
        materials: "Fibres naturelles de palmier doum, cuir de chèvre brun, coquillages cauris naturels",
        craftTime: "12 jours de tressage et montage",
        stockStatus: "En stock (Atelier Soumbédioune)",
        tags: ["panier", "cauris", "coquillages", "cuir", "doum", "prestige", "pompons"]
    },
    {
        id: "panier-jarre-conique-geant",
        name: "Panier Jarre Géant Saharien à Couvercle Conique Chocolat",
        category: "paniers",
        categoryName: "Paniers & Vannerie Saharienne",
        priceFCFA: 75000,
        badge: "Sélection Atelier",
        isFeatured: true,
        image: "articles/6.jpeg",
        imageType: "panier-conique",
        shortDesc: "Imposante jarre de rangement nomade tout en hauteur avec couvercle conique élancé et poignées intégrées en cuir pleine fleur.",
        description: "Une pièce monumentale d'une élégance rare pour meubler un vestibule, un angle de salon ou une suite d'hôtel. Entièrement tressé avec des brins de palmier doum sélectionnés pour leur solidité et habillé de cuir brun chocolat, ce panier géant offre une grande contenance tout en restant d'une légèreté remarquable.",
        dimensions: "Diamètre: 48 cm × Hauteur totale avec pointe: 88 cm",
        weight: "3.8 kg",
        materials: "Palmier doum du Sahel, cuir de chèvre teinté brun chocolat, poignées renforcées",
        craftTime: "22 jours de travail",
        stockStatus: "En stock",
        tags: ["panier", "geant", "jarre", "conique", "chocolat", "doum", "salon"]
    },
    {
        id: "panier-jarre-bicolore-damier",
        name: "Grand Panier Jarre Bicolore à Motifs Damier & Couvercle Pointu",
        category: "paniers",
        categoryName: "Paniers & Vannerie Saharienne",
        priceFCFA: 65000,
        badge: "Coup de Cœur",
        isFeatured: true,
        image: "articles/7.jpeg",
        imageType: "panier-conique",
        shortDesc: "Vannerie d'art bicolore associant fibres écrues et cuir teinté brun foncé dans un saisissant motif géométrique en escalier.",
        description: "Ce grand panier à l'allure de totem nomade captive par la précision de ses motifs géométriques inspirés des tissages sahariens. Son couvercle pointu coiffé d'un bouton sculpté s'emboîte parfaitement. Les poignées latérales en cuir facilitent son déplacement.",
        dimensions: "Diamètre: 42 cm × Hauteur: 75 cm",
        weight: "3.1 kg",
        materials: "Fibres végétales naturelles, cuir teinté brun, pommeau sculpté",
        craftTime: "16 jours de tressage",
        stockStatus: "En stock",
        tags: ["panier", "damier", "bicolore", "escalier", "jarre", "vannerie", "deco"]
    },
    {
        id: "corbeille-rouge-chevrons",
        name: "Corbeille Saharienne Rouge Terracotta à Chevrons Tressés",
        category: "paniers",
        categoryName: "Paniers & Vannerie Saharienne",
        priceFCFA: 32000,
        badge: "Fait Main",
        isFeatured: false,
        image: "articles/11.jpeg",
        imageType: "panier-grand",
        shortDesc: "Corbeille cylindrique cannelée rouge terre cuite avec frise de chevrons tressés en fibres blanches et couvercle dôme.",
        description: "La teinte rouge ocre évoque les dunes baignées de soleil couchant du désert. Les chevrons blancs tressés au centre et sur le pourtour du couvercle apportent un contraste graphique saisissant. Idéale en boîte à couture, vide-poche ou rangement d'objets précieux.",
        dimensions: "Diamètre: 30 cm × Hauteur: 28 cm",
        weight: "1.1 kg",
        materials: "Feuilles de palmier doum, teinture rouge terracotta végétale, fibres blanchies",
        craftTime: "6 jours de travail",
        stockStatus: "En stock",
        tags: ["corbeille", "rouge", "terracotta", "chevrons", "doum", "panier"]
    },
    {
        id: "panier-fibres-pompons",
        name: "Panier Nomade en Fibres Tressées & Cuir Marron à Pompons",
        category: "paniers",
        categoryName: "Paniers & Vannerie Saharienne",
        priceFCFA: 35000,
        badge: "Tradition",
        isFeatured: false,
        image: "articles/5.jpeg",
        imageType: "panier-conique",
        shortDesc: "Panier cylindrique à couvercle avec large bande de cuir brun piqué, bouton central en cuir et lanière tressée à pompons.",
        description: "L'association harmonieuse de la paille de doum dorée au soleil et du cuir brun patiné confère à ce panier un charme authentique. La longue lanière en cuir tressé se termine par des franges souples très élégantes.",
        dimensions: "Diamètre: 28 cm × Hauteur: 40 cm",
        weight: "1.3 kg",
        materials: "Doum naturel, cuir de chèvre véritable, passepoil cuir tressé",
        craftTime: "7 jours de travail",
        stockStatus: "En stock",
        tags: ["panier", "pompons", "cuir", "doum", "naturel", "artisanat"]
    },
    {
        id: "panier-cylindrique-noir-chevrons",
        name: "Panier Cylindrique en Cuir Noir Ébène & Frise Tressée",
        category: "paniers",
        categoryName: "Paniers & Vannerie Saharienne",
        priceFCFA: 36000,
        badge: "Art Nomade",
        isFeatured: false,
        image: "articles/4.jpeg",
        imageType: "panier-grand",
        shortDesc: "Panier droit contemporain en cuir noir cannelé, rehaussé d'une élégante ceinture géométrique à chevrons tressés clairs.",
        description: "Une silhouette moderne et épurée qui s'intègre avec prestance dans les intérieurs contemporains ou bohèmes chics. La structure cannelée en cuir noir ébène met magnifiquement en lumière la finesse du tressage blanc.",
        dimensions: "Diamètre: 32 cm × Hauteur: 48 cm",
        weight: "1.8 kg",
        materials: "Cuir noir teinté artisanalement, fibres végétales tressées, anses intégrées",
        craftTime: "9 jours de confection",
        stockStatus: "En stock",
        tags: ["panier", "noir", "ebene", "chevrons", "moderne", "luxe", "rangement"]
    },
    {
        id: "panier-jarre-amphore-ocre",
        name: "Panier Jarre Amphore Saharienne en Doum Cannelé Ocre",
        category: "paniers",
        categoryName: "Paniers & Vannerie Saharienne",
        priceFCFA: 58000,
        badge: "Sculpture Vivante",
        isFeatured: false,
        image: "articles/3.jpeg",
        imageType: "panier-grand",
        shortDesc: "Jarre galbée aux lignes d'amphore antique, entièrement réalisée en cuir souple ocre-safran cannelé sur armature végétale.",
        description: "Une véritable sculpture d'artisanat saharien. Sa silhouette renflée et sa patine chaleureuse ocre rappellent les poteries et jarres à grains traditionnelles des campements nomades. Pièce décorative d'exception.",
        dimensions: "Diamètre max: 40 cm × Hauteur: 68 cm",
        weight: "2.6 kg",
        materials: "Armature végétale rigide, cuir d'Agadez teinté au safran",
        craftTime: "14 jours de travail",
        stockStatus: "En stock",
        tags: ["amphore", "jarre", "ocre", "galbee", "cuir", "statue", "decoration"]
    },
    {
        id: "panier-tubulaire-teinte",
        name: "Panier Nomade Tubulaire en Vannerie Teintée Végétale",
        category: "paniers",
        categoryName: "Paniers & Vannerie Saharienne",
        priceFCFA: 40000,
        badge: "Art Saharien",
        isFeatured: false,
        image: "articles/2.jpeg",
        imageType: "panier-grand",
        shortDesc: "Panier haut tubulaire orné de teintures végétales flammées bordeaux, ocre et vert olive avec finitions en cuir tressé.",
        description: "Les motifs flammés aux teintes végétales créent un jeu de lumière unique sur les cannelures du panier. Son format cylindrique élancé permet de ranger rouleaux, cannes, parapluies ou grands bouquets séchés.",
        dimensions: "Diamètre: 26 cm × Hauteur: 64 cm",
        weight: "1.7 kg",
        materials: "Fibres de doum teintées aux racines et écorces, cuir de finition",
        craftTime: "8 jours de tressage",
        stockStatus: "En stock",
        tags: ["panier", "tubulaire", "flamme", "vegetal", "bordeaux", "ocre"]
    },
    {
        id: "panier-cylindrique-feuillage",
        name: "Panier Cylindrique à Motifs Feuillage Saharien & Anses Cuir",
        category: "paniers",
        categoryName: "Paniers & Vannerie Saharienne",
        priceFCFA: 38000,
        badge: "Fait Main",
        isFeatured: false,
        image: "articles/8.jpeg",
        imageType: "panier-conique",
        shortDesc: "Corbeille à couvercle ornée d'empreintes de feuillage du désert teintées en négatif avec pommeau et anses en cuir tressé.",
        description: "Les maîtres artisans appliquent de véritables feuilles fraîches d'acacia lors de la teinture pour laisser l'empreinte graphique naturelle de la végétation sahélienne. Équipé de deux solides anses en corde de cuir.",
        dimensions: "Diamètre: 30 cm × Hauteur: 46 cm",
        weight: "1.4 kg",
        materials: "Doum tressé, teinture végétale par réserve, cuir de chèvre véritable",
        craftTime: "8 jours de confection",
        stockStatus: "En stock",
        tags: ["panier", "feuillage", "naturel", "empreinte", "couvercle", "anses"]
    },
    {
        id: "flacons-bouteilles-cuir",
        name: "Trio de Flacons Nomades Gainés de Cuir Touareg Gravé",
        category: "surmesure",
        categoryName: "Sur-Mesure & Pièces Rares",
        priceFCFA: 35000,
        badge: "Art & Déco",
        isFeatured: false,
        image: "articles/12.jpeg",
        imageType: "etui-nomade",
        shortDesc: "Ensemble de 3 flacons et carafes gainés de cuir pleine fleur bordeaux, ébène et ocre avec gravures géométriques et bouchons sculptés.",
        description: "Inspirés des gourdes caravanières (guérbas) utilisées pour conserver l'eau et les huiles précieuses dans le désert. Aujourd'hui réinterprétés en objets de décoration raffinés pour garnir étagères, buffets ou bureaux.",
        dimensions: "Hauteurs: 28 cm, 32 cm et 30 cm",
        weight: "1.8 kg (le trio)",
        materials: "Contenants en verre protégés par gainage cuir de chèvre gravé main",
        craftTime: "6 jours de travail",
        stockStatus: "En stock",
        tags: ["flacons", "bouteilles", "gourdes", "cuir", "trio", "caravane", "deco"]
    },
    {
        id: "pots-boites-cuir-vannerie",
        name: "Ensemble de Pots & Boîtes Cylindriques en Cuir & Vannerie",
        category: "boites",
        categoryName: "Boîtes & Coffrets en Cuir",
        priceFCFA: 44000,
        badge: "Set Nomade",
        isFeatured: false,
        image: "articles/13.jpeg",
        imageType: "boite-the",
        shortDesc: "Assortiment de 4 boîtes cylindriques empilables garnies de cuir saharien et ceintures de vannerie bicolore tressée.",
        description: "Un ensemble plein de charme mariant la douceur du cuir teinté (bordeaux, indigo, ébène et ocre) à la finesse de la vannerie en doum. Parfaits pour conserver thé, café en grains, épices ou petits objets du quotidien.",
        dimensions: "Tailles assorties de 12 à 22 cm de hauteur",
        weight: "1.2 kg (le set de 4)",
        materials: "Cuir végétal, vannerie tressée, couvercles hermétiques à friction",
        craftTime: "8 jours de travail",
        stockStatus: "En stock (2 sets restants)",
        tags: ["pots", "boites", "epices", "the", "cuir", "vannerie", "assortiment"]
    }
];

// Catalogue dynamique initialisé avec les pièces d'origine
let PRODUCTS = [...BASE_PRODUCTS];

const TESTIMONIALS = [
    {
        id: 1,
        author: "Aminata Diallo",
        city: "Dakar (Almadies)",
        rating: 5,
        date: "Il y a 2 semaines",
        text: "J'ai acheté le grand coffre semainier à tiroirs et un panier serti de cauris directement à l'atelier de Soumbédioune. Ce sont des pièces magistrales dans mon salon. Le travail du cuir et les finitions sont d'une finesse rare. Bravo à Boubacar !",
        product: "Grand Coffre Semainier à Tiroirs"
    },
    {
        id: 2,
        author: "Jean-Marc & Sophie Laurent",
        city: "Bordeaux, France",
        rating: 5,
        date: "Il y a 1 mois",
        text: "Expédition très soignée vers la France pour deux boîtes rondes en cuir et une jarre saharienne bicolore. Le contact direct sur WhatsApp avec Boubacar a été ultra fluide et rassurant. Les articles sont encore plus beaux en vrai qu'en photo.",
        product: "Boîtes Rondes en Cuir Ciselé & Panier Bicolore"
    },
    {
        id: 3,
        author: "Ibrahima Sarr",
        city: "Thiès, Sénégal",
        rating: 5,
        date: "Il y a 1 mois",
        text: "Commande d'un coffret à compartiments pour le mariage de ma sœur. Gravure des initiales parfaite et respect du délai. Une vraie fierté de posséder un objet artisanal authentique fait à la main ici à Soumbédioune.",
        product: "Coffret Écrin Compartimenté en Cuir Patiné"
    }
];

const CARE_TIPS = [
    {
        title: "Cuir Saharien Tanné Végétal",
        icon: "shield-check",
        tips: [
            "Éviter les expositions prolongées à l'eau directe et aux produits détergents chimiques.",
            "Nourrir le cuir 1 à 2 fois par an avec une noisette de cire d'abeille naturelle ou quelques gouttes d'huile de karité vierge tiédie.",
            "La patine naturelle du cuir touareg s'embellira avec les années, prenant une teinte miel et ambrée plus profonde."
        ]
    },
    {
        title: "Bois Massif d'Acacia & Ébène",
        icon: "tree",
        tips: [
            "Dépoussiérer simplement à l'aide d'un chiffon doux sec en microfibre.",
            "Ne pas placer le meuble ou le coffret juste au-dessus d'une source de chaleur vive ou radiateur direct.",
            "Pour raviver la brillance des essences de bois, frottez légèrement dans le sens du fil avec une goutte d'huile de lin ou d'amande douce."
        ]
    },
    {
        title: "Ferrures en Laiton & Cuivre",
        icon: "sparkles",
        tips: [
            "Le laiton et le cuivre acquièrent une patine noble et antique au fil du temps.",
            "Si vous désirez retrouver l'éclat doré brillant d'origine, frottez délicatement avec une pâte de jus de citron et sel fin, puis séchez immédiatement avec un linge propre."
        ]
    },
    {
        title: "Vannerie en Fibres de Doum",
        icon: "sun",
        tips: [
            "Les fibres de doum sont robustes et naturellement souples.",
            "Pour les dépoussiérer, passez un coup de brosse souple ou un chiffon légèrement humidifié.",
            "En cas de déformation légère pendant un voyage, humidifiez très légèrement les fibres avec un brumisateur, redonnez la forme à la main et laissez sécher à l'air libre à l'ombre."
        ]
    }
];

const FAQS = [
    {
        q: "Où se trouve l'atelier de l'artisan pour voir les articles en vrai ?",
        a: "Notre atelier est situé au sein du réputé **Village Artisanal de Soumbédioune** (Atelier N° 42), sur la Corniche Ouest à Dakar, Sénégal. Vous êtes les bienvenus tous les jours de 9h à 19h30 pour rencontrer Boubacar Dicko et observer le travail du cuir et du bois en direct."
    },
    {
        q: "Comment fonctionne la commande via WhatsApp ?",
        a: "C'est la méthode la plus rapide et préférée de nos clients ! Remplissez votre panier sur le site, puis cliquez sur 'Commander via WhatsApp'. Un message complet contenant la liste exacte de vos articles, vos options et le total calculé est automatiquement préparé sur votre téléphone. Boubacar Dicko vous répond en direct pour confirmer la disponibilité, le mode de remise ou les frais de livraison."
    },
    {
        q: "Livrez-vous à Dakar, dans les régions du Sénégal et à l'international ?",
        a: "Oui ! Nous livrons partout à Dakar le jour-même ou sous 24h par coursier sécurisé. Nous expédions également dans toutes les régions du Sénégal (Saint-Louis, Thiès, Ziguinchor, Mbour, etc.) et à l'international (France, Europe, États-Unis, Canada, Afrique de l'Ouest) via transporteurs express (DHL, Colissimo, fret aérien) avec emballage sous caisse de protection pour les coffres."
    },
    {
        q: "Puis-je commander un coffre avec des dimensions spécifiques ou une personnalisation ?",
        a: "Absolument ! En tant qu'artisan créateur, Boubacar Dicko façonne régulièrement des commandes sur-mesure (coffres de mariage, coffrets cadeaux d'entreprise, étuis spécifiques). Utilisez le formulaire de devis sur-mesure ou contactez-nous directement sur WhatsApp au +221 77 964 00 35 avec vos dimensions."
    },
    {
        q: "Quels sont les modes de paiement acceptés ?",
        a: "À l'atelier : Espèces (FCFA, Euros, Dollars). Pour les commandes à distance : Wave, Orange Money, Free Money, Virement bancaire, ou Western Union / MoneyGram / RIA pour les clients hors du Sénégal."
    }
];
