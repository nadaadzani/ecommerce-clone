// DATABASE (FOODS)
let foods = [
    {
        id: 'fo1',
        name: 'Ayam Goreng',
        description: 'paha atau dada (tulis di notes)',
        price: 15000,
        restaurantName: ['Pecel Ayam Pak Edi','Warkop 1881'],
        imageURL: 'https://www.astronauts.id/blog/wp-content/uploads/2023/04/Resep-Ayam-Goreng-Serundeng-ala-Rumahan-yang-Nggak-Kalah-Enak-dari-Restoran.jpg'
    },
    {
        id: 'fo2',
        name: 'Caesar Salad',
        description: 'Selada romaine, crouton, parmesan, dan saus Caesar. Enak, gurih, dan bikin nagih!',
        price: 50000,
        restaurantName: ['Salad Hut'],
        imageURL: 'https://www.masakapahariini.com/wp-content/uploads/2018/12/caesar-salad-2.jpg'
    },
    {
        id: 'fo3',
        name: 'Martabak Cokelat',
        description: 'Gak usah dijelasin, udah ngiler kan',
        price: 35000,
        restaurantName: ['Martabak Legenda'],
        imageURL: 'https://martabakpizzaorins.com/wp-content/uploads/2018/02/MM-COKLAT.jpg'
    },
    {
        id: 'fo4',
        name: 'Martabak Telur Spesial',
        description: 'Telor ayam atau bebek (tulis di notes)',
        price: 40000,
        restaurantName: ['Martabak Legenda'],
        imageURL: 'https://static.promediateknologi.id/crop/0x0:0x0/0x0/webp/photo/indizone/2022/08/10/3esemyn/resep-martabak-telur-spesial-ala-chef-devina-hermawan-enak-krispy-dan-bikinnya-gampang87.jpg'
    },
    {
        id: 'fo5',
        name: 'Indomie Goreng',
        description: 'tanpa telor',
        price: 12000,
        restaurantName: ['Pecel Ayam Pak Edi','Warkop 1881'],
        imageURL: 'https://d1vbn70lmn1nqe.cloudfront.net/prod/wp-content/uploads/2023/08/01045246/ini-resep-mie-goreng-dengan-bahan-sederhana-yang-menggugah-selera-halodoc.jpg.webp'
    },
    {
        id: 'fo6',
        name: 'Smoothie Bowl',
        description: 'Menyehatkan',
        price: 39000,
        restaurantName: ['Salad Hut'],
        imageURL: 'https://www.darngoodveggies.com/wp-content/uploads/2021/07/Strawberry-Smoothie-Bowl-6.jpg'
    },
    {
        id: 'fo7',
        name: 'Soto Ayam',
        description: 'tanpa santan',
        price: 18000,
        restaurantName: ['Warkop 1881','Pecel Ayam Pak Edi'],
        imageURL: 'https://d1vbn70lmn1nqe.cloudfront.net/prod/wp-content/uploads/2023/07/17043644/Praktis-dan-Simpel-Ini-Resep-Soto-Ayam-Lamongan-yang-Menggugah-Selera-.jpg.webp'
    },
    {
        id: 'fo8',
        name: 'Martabak Keju',
        description: 'Gak usah dijelasin, udah ngiler kan',
        price: 35000,
        restaurantName: ['Martabak Legenda'],
        imageURL: 'https://awsimages.detik.net.id/community/media/visual/2017/05/30/356fadda-3e16-4d1f-8910-b949f5b6e32a.jpg?w=600&q=90'
    },
    {
        id: 'fo9',
        name: 'Fruit Salad',
        description: 'Irisan buah keren kayak apel, anggur, dan stroberi, dicampur saus manis. Bikin segar, manis, dan kece abis!',
        price: 45000,
        restaurantName: ['Salad Hut'],
        imageURL: 'https://www.frisianflag.com/storage/app/media/uploaded-files/salad-buah-yoghurt.jpg'
    },
    {
        id: 'fo10',
        name: 'Nasi Goreng',
        description: 'belum pake telur',
        price: 20000,
        restaurantName: ['Warkop 1881','Pecel Ayam Pak Edi'],
        imageURL: 'https://awsimages.detik.net.id/community/media/visual/2023/05/07/resep-nasi-goreng-abang-abang_43.jpeg?w=1200'
    },
    {
        id: 'fo11',
        name: 'Mie Rebus',
        description: 'soto, ayam bawang atau kari (tulis di notes), tanpa telur',
        price: 12000,
        restaurantName: ['Warkop 1881','Pecel Ayam Pak Edi'],
        imageURL: 'https://cdn0-production-images-kly.akamaized.net/LixBVFLDyn2VLuzVt30qZ2Si8bo=/0x977:1365x1746/673x379/filters:quality(75):strip_icc():format(webp)/kly-media-production/medias/3086676/original/008955600_1585282979-shutterstock_1657488301.jpg'
    },
    {
        id: 'fo12',
        name: 'Telur',
        description: 'ceplok, rebus atau dadar (tulis di notes)',
        price: 5000,
        restaurantName: ['Warkop 1881','Pecel Ayam Pak Edi'],
        imageURL: 'https://asset-a.grid.id/crop/0x0:0x0/945x630/photo/2019/12/03/1815148126.jpg'
    },
    {
        id: 'fo13',
        name: 'Martabak Blaster',
        description: 'setengah keju setengah cokelat',
        price: 35000,
        restaurantName: ['Martabak Legenda'],
        imageURL: 'https://sweetrip.id/wp-content/uploads/2021/12/liantojw_culinary_95716458_154858442706164_5012487350835348505_n.jpg.webp'
    },
    {
        id: 'fo14',
        name: 'Salmon Sashimi',
        description: 'fresh salmon',
        price: 70000,
        restaurantName: ['Salad Hut'],
        imageURL: 'https://awsimages.detik.net.id/content/2016/02/15/297/salmoncover.jpg'
    },
    {
        id: 'fo15',
        name: 'Vegan Salad',
        description: 'all fresh vegetable',
        price: 40000,
        restaurantName: ['Salad Hut'],
        imageURL: 'https://cdn77-s3.lazycatkitchen.com/wp-content/uploads/2021/05/green-vegan-salad-platter-800x1200.jpg'
    },
    {
        id: 'fo16',
        name: 'Martabak Jagung Manis',
        description: '',
        price: 38000,
        restaurantName: ['Martabak Legenda'],
        imageURL: 'https://www.tokomesin.com/wp-content/uploads/2017/09/resep-martabak-jagung-keju.jpg'
    },
    {
        id: 'fo17',
        name: 'Sayur Pecel',
        description: 'ala madiun (tanpa nasi)',
        price: 1000,
        restaurantName: ['Warkop 1881','Pecel Ayam Pak Edi'],
        imageURL: 'https://asset.kompas.com/crops/6ZwiRohnvHACa6TqkeNG0VvSKiU=/0x2:1000x669/750x500/data/photo/2021/07/06/60e3ef91620b7.jpg'
    },
    {
        id: 'fo18',
        name: 'Nasi Putih',
        description: '',
        price: 5000,
        restaurantName: ['Warkop 1881','Pecel Ayam Pak Edi'],
        imageURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/Nasi_dibentuk_bulat.jpg/800px-Nasi_dibentuk_bulat.jpg'
    },
    {
        id: 'fo19',
        name: 'Bubur Ayam Bandung',
        description: '',
        price: 12000,
        restaurantName: ['Warkop 1881'],
        imageURL: 'https://awsimages.detik.net.id/community/media/visual/2020/07/09/bubur-ayam-bandung_11.jpeg?w=600&q=90'
    },
    {
        id: 'fo20',
        name: '',
        description: '',
        price: 0,
        restaurantName: [],
        imageURL: ''
    },
    {
        id: 'fo21',
        name: '',
        description: '',
        price: 0,
        restaurantName: [],
        imageURL: ''
    }
]

export default foods