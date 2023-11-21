// ========= DATABASE START =============

// DATABASE (RESTAURANTS)
let restaurants = [
    {
        id: 're1',
        name: 'Warkop 1881',
        location: 'BSD',
        rating: 3.8,
        distance: 3.5, // in km
        timeEstimation: 30, // in minutes
        isOpen: true,
        imageURL: 'https://cdn0-production-images-kly.akamaized.net/rF9J7T6wYPBakuzlp-ym1JveG6w=/0x342:5989x3718/1200x675/filters:quality(75):strip_icc():format(jpeg)/kly-media-production/medias/3930827/original/066100900_1644554867-shutterstock_1984582070.jpg'
    },
    {
        id: 're2',
        name: 'Salad Hut',
        location: 'Kemang',
        rating: 4.5,
        distance: 4, // in km
        timeEstimation: 35, // in minutes
        isOpen: true,
        imageURL: 'https://www.foodandwine.com/thmb/IuZPWAXBp4YaT9hn1YLHhuijT3k=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/FAW-recipes-big-italian-salad-hero-83e6ea846722478f8feb1eea33158b00.jpg'
    },
    {
        id: 're3',
        name: 'Pecel Ayam Pak Edi',
        location: 'Pagedangan',
        rating: 4,
        distance: 4.8, // in km
        timeEstimation: 45, // in minutes
        isOpen: true,
        imageURL: 'https://kurio-img.kurioapps.com/21/05/20/66113714-d2df-4bde-b605-e6fbaa281b12.jpe'
    },
    {
        id: 're4',
        name: 'Martabak Legenda',
        location: 'Kelapa Gading',
        rating: 3.5,
        distance: 5, // in km
        timeEstimation: 50, // in minutes
        isOpen: false,
        imageURL: 'https://awsimages.detik.net.id/community/media/visual/2023/09/07/resep-martabak-manis-teflon_43.jpeg?w=600&q=90'
    }
]


// DATABASE (FOODS)
let foods = [
    {
        id: 'fo1',
        name: 'Ayam Goreng',
        description: 'paha atau dada (tulis di notes)',
        price: '15_000',
        restaurantName: ['Pecel Ayam Pak Edi','Warkop 1881'],
        imageURL: 'https://www.astronauts.id/blog/wp-content/uploads/2023/04/Resep-Ayam-Goreng-Serundeng-ala-Rumahan-yang-Nggak-Kalah-Enak-dari-Restoran.jpg'
    },
    {
        id: 'fo2',
        name: 'Caesar Salad',
        description: 'Selada romaine, crouton, parmesan, dan saus Caesar. Enak, gurih, dan bikin nagih!',
        price: '50_000',
        restaurantName: ['Salad Hut'],
        imageURL: 'https://www.masakapahariini.com/wp-content/uploads/2018/12/caesar-salad-2.jpg'
    },
    {
        id: 'fo3',
        name: 'Martabak Cokelat',
        description: 'Gak usah dijelasin, udah ngiler kan',
        price: '35_000',
        restaurantName: ['Martabak Legenda'],
        imageURL: 'https://martabakpizzaorins.com/wp-content/uploads/2018/02/MM-COKLAT.jpg'
    },
    {
        id: 'fo4',
        name: 'Martabak Telur Spesial',
        description: 'Telor ayam atau bebek (tulis di notes)',
        price: '40_000',
        restaurantName: ['Martabak Legenda'],
        imageURL: 'https://static.promediateknologi.id/crop/0x0:0x0/0x0/webp/photo/indizone/2022/08/10/3esemyn/resep-martabak-telur-spesial-ala-chef-devina-hermawan-enak-krispy-dan-bikinnya-gampang87.jpg'
    },
    {
        id: 'fo5',
        name: 'Indomie Goreng',
        description: 'tanpa telor',
        price: '12_000',
        restaurantName: ['Pecel Ayam Pak Edi','Warkop 1881'],
        imageURL: 'https://d1vbn70lmn1nqe.cloudfront.net/prod/wp-content/uploads/2023/08/01045246/ini-resep-mie-goreng-dengan-bahan-sederhana-yang-menggugah-selera-halodoc.jpg.webp'
    },
    {
        id: 'fo6',
        name: 'Smoothie Bowl',
        description: 'Menyehatkan',
        price: '39_000',
        restaurantName: ['Salad Hut'],
        imageURL: 'https://www.darngoodveggies.com/wp-content/uploads/2021/07/Strawberry-Smoothie-Bowl-6.jpg'
    },
    {
        id: 'fo7',
        name: 'Soto Ayam',
        description: 'tanpa santan',
        price: '18_000',
        restaurantName: ['Warkop 1881','Pecel Ayam Pak Edi'],
        imageURL: 'https://d1vbn70lmn1nqe.cloudfront.net/prod/wp-content/uploads/2023/07/17043644/Praktis-dan-Simpel-Ini-Resep-Soto-Ayam-Lamongan-yang-Menggugah-Selera-.jpg.webp'
    },
    {
        id: 'fo8',
        name: 'Martabak Keju',
        description: 'Gak usah dijelasin, udah ngiler kan',
        price: '35_000',
        restaurantName: ['Martabak Legenda'],
        imageURL: 'https://awsimages.detik.net.id/community/media/visual/2017/05/30/356fadda-3e16-4d1f-8910-b949f5b6e32a.jpg?w=600&q=90'
    },
    {
        id: 'fo9',
        name: 'Fruit Salad',
        description: 'Irisan buah keren kayak apel, anggur, dan stroberi, dicampur saus manis. Bikin segar, manis, dan kece abis!',
        price: '45_000',
        restaurantName: ['Salad Hut'],
        imageURL: 'https://www.frisianflag.com/storage/app/media/uploaded-files/salad-buah-yoghurt.jpg'
    },
    {
        id: 'fo10',
        name: 'Nasi Goreng',
        description: '20_000',
        price: 'belum pake telur',
        restaurantName: ['Warkop 1881','Pecel Ayam Pak Edi'],
        imageURL: 'https://awsimages.detik.net.id/community/media/visual/2023/05/07/resep-nasi-goreng-abang-abang_43.jpeg?w=1200'
    },
    {
        id: 'fo11',
        name: 'Mie Rebus',
        description: 'soto, ayam bawang atau kari (tulis di notes), tanpa telur',
        price: '12_000',
        restaurantName: ['Warkop 1881','Pecel Ayam Pak Edi'],
        imageURL: 'https://cdn0-production-images-kly.akamaized.net/LixBVFLDyn2VLuzVt30qZ2Si8bo=/0x977:1365x1746/673x379/filters:quality(75):strip_icc():format(webp)/kly-media-production/medias/3086676/original/008955600_1585282979-shutterstock_1657488301.jpg'
    },
    {
        id: 'fo12',
        name: 'Telur',
        description: 'ceplok, rebus atau dadar (tulis di notes)',
        price: '5_000',
        restaurantName: ['Warkop 1881','Pecel Ayam Pak Edi'],
        imageURL: 'https://asset-a.grid.id/crop/0x0:0x0/945x630/photo/2019/12/03/1815148126.jpg'
    },
    {
        id: 'fo12',
        name: 'Martabak Blaster',
        description: 'setengah keju setengah cokelat',
        price: '35_000',
        restaurantName: ['Warkop 1881','Pecel Ayam Pak Edi'],
        imageURL: 'https://sweetrip.id/wp-content/uploads/2021/12/liantojw_culinary_95716458_154858442706164_5012487350835348505_n.jpg.webp'
    }
]

// DATABASE (DRINKS)
let drinks = [
    {
        id: 'dr1',
        name: 'Air Mineral',
        description: '650 ml',
        price: '5_000',
        restaurantName: ['Salad Hut','Warkop 1881', 'Pecel Ayam Pak Edi', 'Martabak Legenda'],
        imageURL: 'https://www.static-src.com/wcsstore/Indraprastha/images/catalog/full//93/MTA-14465631/aqua_aqua_air_mineral_kemasan_botol_600_ml-_1_karton-_24_pcs_full01_eg9ng5lp.jpg'
    },
    {
        id: 'dr2',
        name: 'Teh',
        description: 'tawar atau manis, panas atau dingin (tulis di notes)',
        price: '6_500',
        restaurantName: ['Warkop 1881','Pecel Ayam Pak Edi'],
        imageURL: ''
    },
    {
        id: 'dr3',
        name: 'Jus Jeruk',
        description: 'dari jeruk murni',
        price: '25_000',
        restaurantName: ['Salad Hut'],
        imageURL: 'https://img.okezone.com/content/2016/11/10/481/1537676/9-manfaat-minum-jus-jeruk-setiap-pagi-untuk-kesehatan-A77easiQz2.jpg'
    },
    {
        id: 'dr4',
        name: 'Es Buah',
        description: 'segar dan sehat',
        price: '15_000',
        restaurantName: ['Salad Hut','Martabak Legenda'],
        imageURL: 'https://static.promediateknologi.id/crop/0x0:0x0/0x0/webp/photo/p2/13/2023/10/07/IMG-20231007-WA0039-2908072795.jpg'
    },
    {
        id: 'dr5',
        name: 'Es Coklat',
        description: 'bukan coklat biasa',
        price: '10_000',
        restaurantName: ['Salad Hut','Warkop 1881', 'Pecel Ayam Pak Edi', 'Martabak Legenda'],
        imageURL: 'https://asset.kompas.com/crops/rnP4FAEi-MrCLZq_2uTLtYvn_j8=/83x67:940x638/750x500/data/photo/2022/10/17/634d11c2c0a21.jpg'
    }
]

// ========= DATABASE END =============