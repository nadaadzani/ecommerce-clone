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
        description: 'sayuran dan saus caesar',
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
        imageURL: 'https://images.immediate.co.uk/production/volatile/sites/30/2022/12/Smoothie-bowl-16df176.jpg?resize=768,574'
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
        description: "Irisan buah",
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
        imageURL: 'data:image/jpeg;base64,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'
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