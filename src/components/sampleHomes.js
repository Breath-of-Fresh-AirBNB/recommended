const sampleHomes = [
  {
    relatedDestinations: [
      'Costa da Caparica',
      'Sagres',
      'Porto',
      'Sintra',
      'Albufeira',
      'Seville',
      'Ericeira',
      'Faro',
      'Cádiz',
      'Comporta',
      'Armona Island',
      'Tarifa',
    ],
    _id: '600726d11106d0e5c774e2db',
    homeId: 1,
    name: 'Charming Loft',
    destination: 'Lisbon',
    imageUrl: 'https://fecfreshairbnb.s3.us-east-2.amazonaws.com/houses/photo-1603034222368-fc53916f4eed.jpeg',
    beds: 13,
    reviews: 753,
    averageRating: 2.63,
    rate: 921,
    __v: 0,
  },
  {
    relatedDestinations: [
      'Costa da Caparica',
      'Sagres',
      'Porto',
      'Sintra',
      'Albufeira',
      'Seville',
      'Ericeira',
      'Faro',
      'Cádiz',
      'Comporta',
      'Armona Island',
      'Tarifa',
    ],
    _id: '600726d11106d0e5c774e2e5',
    homeId: 11,
    name: 'Modern Villa',
    destination: 'Lisbon',
    imageUrl: 'https://fecfreshairbnb.s3.us-east-2.amazonaws.com/houses/photo-1603034222368-fc53916f4eed.jpeg',
    beds: 7,
    reviews: 447,
    averageRating: 3.23,
    rate: 694,
    __v: 0,
  },
  {
    relatedDestinations: [
      'Rouen',
      'Èterat',
      'Dijon',
      'Reims',
      'Le Touquet',
      'Ghent',
      'Honfleur',
      'Lille',
      'Brussels',
      'Deauville',
      'De Panne',
      'Ostend',
    ],
    _id: '600726d11106d0e5c774e2e6',
    homeId: 12,
    name: 'Glamorous Villa',
    destination: 'Paris',
    imageUrl: 'https://fecfreshairbnb.s3.us-east-2.amazonaws.com/houses/photo-1603034222368-fc53916f4eed.jpeg',
    beds: 9,
    reviews: 45,
    averageRating: 2.61,
    rate: 1587,
    __v: 0,
  },
  {
    relatedDestinations: [
      'Ischia',
      'Elba',
      'Rimini',
      'Naples',
      'Positano',
      'Pisa',
      'Capri',
      'Amalfi',
      'Olbia',
      'Sorrento',
      'FLorence',
      'Bologna',
    ],
    _id: '600726d11106d0e5c774e2e7',
    homeId: 13,
    name: 'Spacious Cottage',
    destination: 'Rome',
    imageUrl: 'https://fecfreshairbnb.s3.us-east-2.amazonaws.com/houses/photo-1603034222368-fc53916f4eed.jpeg',
    beds: 13,
    reviews: 949,
    averageRating: 2.29,
    rate: 1299,
    __v: 0,
  },
  {
    relatedDestinations: [
      'Central London',
      'Costwold District',
      'Le Touquet',
      'Brighton',
      'Bournemouth',
      'Bristol',
      'Cambridge',
      'Bath',
      'De Panne',
      'Oxford',
      'Birmingham',
      'Ètretat',
    ],
    _id: '600726d11106d0e5c774e2e8',
    homeId: 14,
    name: 'Luxurious Apartment',
    destination: 'London',
    imageUrl: 'https://fecfreshairbnb.s3.us-east-2.amazonaws.com/houses/photo-1603034222368-fc53916f4eed.jpeg',
    beds: 0,
    reviews: 765,
    averageRating: 2.84,
    rate: 1885,
    __v: 0,
  },
  {
    relatedDestinations: [
      'Costa da Caparica',
      'Sagres',
      'Porto',
      'Sintra',
      'Albufeira',
      'Seville',
      'Ericeira',
      'Faro',
      'Cádiz',
      'Comporta',
      'Armona Island',
      'Tarifa',
    ],
    _id: '600726d11106d0e5c774e2e9',
    homeId: 15,
    name: 'Luxurious B&B',
    destination: 'Lisbon',
    imageUrl: 'https://fecfreshairbnb.s3.us-east-2.amazonaws.com/houses/photo-1603034222368-fc53916f4eed.jpeg',
    beds: 3,
    reviews: 393,
    averageRating: 2.38,
    rate: 587,
    __v: 0,
  },
  {
    relatedDestinations: [
      'Costa da Caparica',
      'Sagres',
      'Porto',
      'Sintra',
      'Albufeira',
      'Seville',
      'Ericeira',
      'Faro',
      'Cádiz',
      'Comporta',
      'Armona Island',
      'Tarifa',
    ],
    _id: '600726d11106d0e5c774e2ea',
    homeId: 16,
    name: 'Luxurious Guest Suite',
    destination: 'Lisbon',
    imageUrl: 'https://fecfreshairbnb.s3.us-east-2.amazonaws.com/houses/photo-1603034222368-fc53916f4eed.jpeg',
    beds: 3,
    reviews: 746,
    averageRating: 1.83,
    rate: 595,
    __v: 0,
  },
  {
    relatedDestinations: [
      'Costa da Caparica',
      'Sagres',
      'Porto',
      'Sintra',
      'Albufeira',
      'Seville',
      'Ericeira',
      'Faro',
      'Cádiz',
      'Comporta',
      'Armona Island',
      'Tarifa',
    ],
    _id: '600726d11106d0e5c774e2eb',
    homeId: 17,
    name: 'Peaceful Loft',
    destination: 'Lisbon',
    imageUrl: 'https://fecfreshairbnb.s3.us-east-2.amazonaws.com/houses/photo-1603034222368-fc53916f4eed.jpeg',
    beds: 4,
    reviews: 362,
    averageRating: 4.06,
    rate: 1981,
    __v: 0,
  },
  {
    relatedDestinations: [
      'Colorado Springs',
      'Boulder',
      'Fort Collins',
      'Nederland',
      'Estes Park',
      'Golden',
      'Breckenridge',
      'Aurora',
      'Winter Park',
      'Vail',
      'Downtown Denver',
      'Keystone',
    ],
    _id: '600726d11106d0e5c774e2ec',
    homeId: 18,
    name: 'Spacious Resort',
    destination: 'Denver',
    imageUrl: 'https://fecfreshairbnb.s3.us-east-2.amazonaws.com/houses/photo-1603034222368-fc53916f4eed.jpeg',
    beds: 5,
    reviews: 778,
    averageRating: 2.93,
    rate: 320,
    __v: 0,
  },
  {
    relatedDestinations: [
      'Colorado Springs',
      'Boulder',
      'Fort Collins',
      'Nederland',
      'Estes Park',
      'Golden',
      'Breckenridge',
      'Aurora',
      'Winter Park',
      'Vail',
      'Downtown Denver',
      'Keystone',
    ],
    _id: '600726d11106d0e5c774e2ed',
    homeId: 19,
    name: 'Secluded Bungalow',
    destination: 'Denver',
    imageUrl: 'https://fecfreshairbnb.s3.us-east-2.amazonaws.com/houses/photo-1603034222368-fc53916f4eed.jpeg',
    beds: 0,
    reviews: 258,
    averageRating: 2.34,
    rate: 1883,
    __v: 0,
  },
  {
    relatedDestinations: [
      'Rouen',
      'Èterat',
      'Dijon',
      'Reims',
      'Le Touquet',
      'Ghent',
      'Honfleur',
      'Lille',
      'Brussels',
      'Deauville',
      'De Panne',
      'Ostend',
    ],
    _id: '600726d11106d0e5c774e2ee',
    homeId: 20,
    name: 'Rare Guest House',
    destination: 'Paris',
    imageUrl: 'https://fecfreshairbnb.s3.us-east-2.amazonaws.com/houses/photo-1603034222368-fc53916f4eed.jpeg',
    beds: 5,
    reviews: 414,
    averageRating: 3.83,
    rate: 1100,
    __v: 0,
  },
  {
    relatedDestinations: [
      'Costa da Caparica',
      'Sagres',
      'Porto',
      'Sintra',
      'Albufeira',
      'Seville',
      'Ericeira',
      'Faro',
      'Cádiz',
      'Comporta',
      'Armona Island',
      'Tarifa',
    ],
    _id: '600726d11106d0e5c774e2ef',
    homeId: 21,
    name: 'Glamorous Chalet',
    destination: 'Lisbon',
    imageUrl: 'https://fecfreshairbnb.s3.us-east-2.amazonaws.com/houses/photo-1603034222368-fc53916f4eed.jpeg',
    beds: 8,
    reviews: 972,
    averageRating: 2.5,
    rate: 857,
    __v: 0,
  },
];

export default sampleHomes;
