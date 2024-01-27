import { nanoid } from 'nanoid'

const Characters = [
    [
        {
            id: nanoid(),
            name: 'Goku',
            title: 'Overflowing Resolve',
            img: 'https://dokkaninfo.com/assets/japan/character/card/2000670/2000670.png',
            type: 'teq',
            rarity: 'r'
        },
        {
            id: nanoid(),
            name: 'Gohan (Kid)',
            title: 'Steely Determination',
            img: 'https://dokkaninfo.com/assets/japan/character/card/1000270/1000270.png',
            type: 'int',
            rarity: 'r'
        },
        {
            id: nanoid(),
            name: 'Trunks (Teen)',
            title: 'From Hell and Back',
            img: 'https://dokkaninfo.com/assets/japan/character/card/1000280/1000280.png',
            type: 'agl',
            rarity: 'r'
        },
        {
            id: nanoid(),
            name: 'Vegeta',
            title: 'Invader from Afar',
            img: 'https://dokkaninfo.com/assets/japan/character/card/2000260/2000260.png',
            type: 'str',
            rarity: 'r'
        },
    ],
    [
        {
            id: nanoid(),
            name: 'Super Saiyan Goku',
            title: 'Legendary Super Saiyan',
            img: 'https://dokkaninfo.com/assets/japan/character/card/1004200/1004200.png',
            type: 'teq',
            rarity: 'sr'
        },
        {
            id: nanoid(),
            name: 'Super Saiyan Gohan (Youth)',
            title: 'Resolute Valor',
            img: 'https://dokkaninfo.com/assets/japan/character/card/1002690/1002690.png',
            type: 'phy',
            rarity: 'sr'
        },
        {
            id: nanoid(),
            name: 'Super Saiyan Trunks (Teen)',
            title: 'A Slash of Respect',
            img: 'https://dokkaninfo.com/assets/japan/character/card/1003280/1003280.png',
            type: 'agl',
            rarity: 'sr'
        },
        {
            id: nanoid(),
            name: 'Super Saiyan Vegeta',
            title: 'Inherited Honor',
            img: 'https://dokkaninfo.com/assets/japan/character/card/1004280/1004280.png',
            type: 'teq',
            rarity: 'sr'
        },
    ],
    [
        {
            id: nanoid(),
            name: 'Super Saiyan 2 Goku (Angel)',
            title: 'Heated Clash Between Rivals',
            img: 'https://dokkaninfo.com/assets/japan/character/card/1018750/1018750.png',
            type: 'int',
            rarity: 'ssr'
        },
        {
            id: nanoid(),
            name: 'Super Saiyan 2 Gohan (Youth)',
            title: 'Flaring Rage',
            img: 'https://dokkaninfo.com/assets/japan/character/card/1004740/1004740.png',
            type: 'int',
            rarity: 'ssr'
        },
        {
            id: nanoid(),
            name: 'Super Trunks',
            title: 'Augmented Offense',
            img: 'https://dokkaninfo.com/assets/japan/character/card/1007660/1007660.png',
            type: 'int',
            rarity: 'ssr'
        },
        {
            id: nanoid(),
            name: 'Super Saiyan 2 Vegeta',
            title: 'Catastrophic Clash Between Rivals',
            img: 'https://dokkaninfo.com/assets/japan/character/card/1018770/1018770.png',
            type: 'teq',
            rarity: 'ssr'
        },
        {
            id: nanoid(),
            name: 'Piccolo',
            title: 'Imperturbable Namekian Warrior',
            img: 'https://dokkaninfo.com/assets/japan/character/card/1017480/1017480.png',
            type: 'phy',
            rarity: 'ssr'
        },
    ],
    [
        {
            id: nanoid(),
            name: 'Super Saiyan 3 Goku',
            title: 'Betting on the Moment',
            img: 'https://dokkaninfo.com/assets/japan/character/card/1027610/1027610.png',
            type: 'str',
            rarity: 'ssr'
        },
        {
            id: nanoid(),
            name: 'Ultimate Gohan',
            title: 'Perfected Strength',
            img: 'https://dokkaninfo.com/assets/japan/character/card/1011810/1011810.png',
            type: 'str',
            rarity: 'ssr'
        },
        {
            id: nanoid(),
            name: 'Super Saiyan Trunks (Future)',
            title: 'Duty of Those Living in the Future',
            img: 'https://dokkaninfo.com/assets/japan/character/card/1027270/1027270.png',
            type: 'phy',
            rarity: 'ssr'
        },
        {
            id: nanoid(),
            name: 'Majin Vegeta',
            title: 'A Lonely Battle',
            img: 'https://dokkaninfo.com/assets/japan/character/card/1023970/1023970.png',
            type: 'int',
            rarity: 'ssr'
        },
        {
            id: nanoid(),
            name: 'Super Saiyan Trunks (Kid) & Super Saiyan Goten (Kid)',
            title: 'Innocent Pair',
            img: 'https://dokkaninfo.com/assets/japan/character/card/1021680/1021680.png',
            type: 'phy',
            rarity: 'ssr'
        },
    ],
    [
        {
            id: nanoid(),
            name: 'Super Saiyan God Goku & Super Saiyan God Vegeta',
            title: 'Domain of Supremacy',
            img: 'https://dokkaninfo.com/assets/japan/character/card/1022370/1022370.png',
            type: 'steq',
            rarity: 'ur'
        },
        {
            id: nanoid(),
            name: 'Ultimate Gohan & Piccolo',
            title: 'Bond Forged by Master and Disciple',
            img: 'https://dokkaninfo.com/assets/japan/character/card/1021350/1021350.png',
            type: 'steq',
            rarity: 'ur'
        },
        {
            id: nanoid(),
            name: 'Super Saiyan Trunks (Future) & Mai (Future)',
            title: 'Human Pride',
            img: 'https://dokkaninfo.com/assets/japan/character/card/1019280/1019280.png',
            type: 'sagl',
            rarity: 'ur'
        },
        {
            id: nanoid(),
            name: 'Super Saiyan 3 Gotenks & Piccolo',
            title: 'Unusual Pairing',
            img: 'https://dokkaninfo.com/assets/japan/character/card/1025820/1025820.png',
            type: 'sagl',
            rarity: 'ur'
        },
        {
            id: nanoid(),
            name: 'Super Gogeta',
            title: 'Outshining Darkness',
            img: 'https://dokkaninfo.com/assets/japan/character/card/1010850/1010850.png',
            type: 'sint',
            rarity: 'ur'
        },
        {
            id: nanoid(),
            name: 'Super Vegito',
            title: 'Unparalleled Golden Ki',
            img: 'https://dokkaninfo.com/assets/japan/character/card/1006790/1006790.png',
            type: 'sagl',
            rarity: 'ur'
        },
    ],
    [
        {
            id: nanoid(),
            name: 'Super Saiyan God SS Goku',
            title: 'Final Super Power',
            img: 'https://dokkaninfo.com/assets/japan/character/card/1018540/1018540.png',
            type: 'sstr',
            rarity: 'ur'
        },
        {
            id: nanoid(),
            name: 'Ultimate Gohan',
            title: 'Clashing Justice',
            img: 'https://dokkaninfo.com/assets/japan/character/card/1025550/1025550.png',
            type: 'sphy',
            rarity: 'ur'
        },
        {
            id: nanoid(),
            name: 'Super Saiyan God SS Vegeta & Super Saiyan Trunks (Future)',
            title: 'Cooperation Between the Enraged Father and Son',
            img: 'https://dokkaninfo.com/assets/japan/character/card/1024540/1024540.png',
            type: 'sint',
            rarity: 'ur'
        },
        {
            id: nanoid(),
            name: 'Piccolo (Power Awakening)',
            title: 'Unprecedented Power-Up',
            img: 'https://dokkaninfo.com/assets/japan/character/card/1025580/1025580.png',
            type: 'steq',
            rarity: 'ur'
        },
        {
            id: nanoid(),
            name: 'Super Saiyan God SS Gogeta',
            title: 'Transcendent Fusion',
            img: 'https://dokkaninfo.com/assets/japan/character/card/4015980/4015980.png',
            type: 'sagl',
            rarity: 'ur'
        },
        {
            id: nanoid(),
            name: 'Super Saiyan God SS Vegito',
            title: 'Strength Beyond Gods',
            img: 'https://dokkaninfo.com/assets/japan/character/card/1012740/1012740.png',
            type: 'steq',
            rarity: 'ur'
        },
    ],
    [
        {
            id: nanoid(),
            name: 'Super Saiyan God SS Goku & Super Saiyan God SS Vegeta',
            title: 'Divine Warriors with Infinite Power',
            img: 'https://dokkaninfo.com/assets/japan/character/card/4022390/4022390.png',
            type: 'steq',
            rarity: 'lr'
        },
        {
            id: nanoid(),
            name: 'Ultimate Gohan',
            title: 'Awakened Super Hero',
            img: 'https://dokkaninfo.com/assets/japan/character/card/1025560/1025560.png',
            type: 'sphy',
            rarity: 'lr'
        },
        {
            id: nanoid(),
            name: 'Super Saiyan Trunks (Future)',
            title: 'Hope at the End of a Deadly Showdown',
            img: 'https://dokkaninfo.com/assets/japan/character/card/4027300/4027300.png',
            type: 'sphy',
            rarity: 'lr'
        },
        {
            id: nanoid(),
            name: 'Orange Piccolo (Giant Form)',
            title: 'Exploding Latent Power',
            img: 'https://dokkaninfo.com/assets/japan/character/card/4025590/4025590.png',
            type: 'steq',
            rarity: 'lr'
        },
        {
            id: nanoid(),
            name: 'Super Saiyan God SS Gogeta',
            title: 'Ultimate and Supreme Fusion',
            img: 'https://dokkaninfo.com/assets/japan/character/card/4017970/4017970.png',
            type: 'sstr',
            rarity: 'lr'
        },
        {
            id: nanoid(),
            name: 'Super Saiyan God SS Vegito',
            title: 'All-Out Final Battle',
            img: 'https://dokkaninfo.com/assets/japan/character/card/4027130/4027130.png',
            type: 'sagl',
            rarity: 'lr'
        },
        {
            id: nanoid(),
            name: 'Goku (Ultra Instinct -Sign-)',
            title: 'Sign of a Turnaround',
            img: 'https://dokkaninfo.com/assets/japan/character/card/1019820/1019820.png',
            type: 'sstr',
            rarity: 'lr'
        }
    ],
    [
        {
            id: nanoid(),
            name: 'Super Saiyan God SS Goku (Kaioken) & Super Saiyan God SS Evolved Vegeta',
            title: 'Beyond Boundless Power',
            img: 'https://dokkaninfo.com/assets/japan/character/card/1019990/1019990.png',
            type: 'sphy',
            rarity: 'lr'
        },
        {
            id: nanoid(),
            name: 'Gohan (Teen) & Goten (Kid) & Trunks (Kid)',
            title: 'Dream-Packed Future',
            img: 'https://dokkaninfo.com/assets/japan/character/card/1023890/1023890.png',
            type: 'steq',
            rarity: 'lr'
        },
        {
            id: nanoid(),
            name: 'Super Saiyan Goku & Super Saiyan Vegeta & Super Saiyan Trunks (Teen)',
            title: 'All-Out Ultimate Battle',
            img: 'https://dokkaninfo.com/assets/japan/character/card/1028060/1028060.png',
            type: 'sint',
            rarity: 'lr'
        },
        {
            id: nanoid(),
            name: 'Super Saiyan Goku',
            title: 'Earth-Shaking Immense Power',
            img: 'https://dokkaninfo.com/assets/japan/character/card/1025870/1025870.png',
            type: 'sstr',
            rarity: 'lr'
        },
        {
            id: nanoid(),
            name: 'Super Saiyan God SS Evolved Vegeta',
            title: 'True Warrior Race',
            img: 'https://dokkaninfo.com/assets/japan/character/card/1020340/1020340.png',
            type: 'sint',
            rarity: 'lr'
        },
        {
            id: nanoid(),
            name: 'Super Saiyan 4 Goku & Super Saiyan 4 Vegeta',
            title: 'Super Warriors with Ultimate Power',
            img: 'https://dokkaninfo.com/assets/japan/character/card/1022420/1022420.png',
            type: 'sphy',
            rarity: 'lr'
        },
        {
            id: nanoid(),
            name: 'Goku (Ultra Instinct)',
            title: 'True Ultra Instinct',
            img: 'https://dokkaninfo.com/assets/japan/character/card/1020310/1020310.png',
            type: 'sagl',
            rarity: 'lr'
        }
    ],
    [
        {
            id: nanoid(),
            name: 'Golden Freeza',
            title: "Emperor's Newfound Power",
            img: 'https://dokkaninfo.com/assets/japan/character/card/1024510/1024510.png',
            type: 'eagl',
            rarity: 'lr'
        },
        {
            id: nanoid(),
            name: 'Fusion Zamasu',
            title: 'Infinite Sanctuary',
            img: 'https://dokkaninfo.com/assets/japan/character/card/1027220/1027220.png',
            type: 'eteq',
            rarity: 'lr'
        },
        {
            id: nanoid(),
            name: 'Legendary Super Saiyan Broly',
            title: 'Nightmarish Impact',
            img: 'https://dokkaninfo.com/assets/japan/character/card/4016880/4016880.png',
            type: 'eteq',
            rarity: 'lr'
        },
        {
            id: nanoid(),
            name: 'Omega Shenron',
            title: 'The Ultimate Evil Dragon',
            img: 'https://dokkaninfo.com/assets/japan/character/card/1027040/1027040.png',
            type: 'eagl',
            rarity: 'lr'
        },
        {
            id: nanoid(),
            name: 'Cooler (Final Form)',
            title: 'Planet-Crushing Blow',
            img: 'https://dokkaninfo.com/assets/japan/character/card/1024830/1024830.png',
            type: 'estr',
            rarity: 'lr'
        },
        {
            id: nanoid(),
            name: 'Super Janemba',
            title: 'Boiling Evil',
            img: 'https://dokkaninfo.com/assets/japan/character/card/4022600/4022600.png',
            type: 'ephy',
            rarity: 'lr'
        },
        {
            id: nanoid(),
            name: 'Perfect Cell',
            title: 'The True Value of Perfect Form',
            img: 'https://dokkaninfo.com/assets/japan/character/card/4017910/4017910.png',
            type: 'eint',
            rarity: 'lr'
        }
    ],
]

export default Characters