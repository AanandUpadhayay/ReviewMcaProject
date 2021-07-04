const Images = [
  {image: require('../assets/banners/Electrician1.png')},
  {image: require('../assets/banners/electrician.png')},
  {image: require('../assets/banners/carpenter1.png')},
  {image: require('../assets/banners/Appliances.jpg')},
  {image: require('../assets/banners/air-conditioner.png')},
];

export const data = [
  {
    id: '1',
    coordinate: {
      latitude: 27.020648,
      longitude: 84.838069,
    },
    title: 'Venkatesh Electric Work',
    description: `Very responsible for inspecting, testing, repairing, installing, and modifying electrical components and systems.
                  Electricians general work at homes, businesses, and construction sites, and generally work as contractors. Get a quote and book a service online 24/7.I can provide service at your home or office,even on evenings and weekends. `,
    image: Images[0].image,
    rating: 4,
    reviews: 9,
    categories: ['Electrician'],
  },
  {
    id: '2',
    coordinate: {
      latitude: 22.6345648,
      longitude: 88.4377279,
    },
    title: 'Surya Electrical Workshop',
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque est metus, gravida vel ex volutpat, posuere euismod tortor. Pellentesque tincidunt, mi ac varius blandit, quam orci dignissim risus, vitae rutrum orci urna ut neque.
      
      Pellentesque condimentum ut libero id blandit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.`,
    image: Images[1].image,
    rating: 5,
    reviews: 102,
    categories: ['Electrician', 'Plumber', 'Carpenter'],
  },
  {
    id: '3',
    coordinate: {
      latitude: 22.6281662,
      longitude: 88.4410113,
    },
    title: 'Mahesh Carpentary',
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque est metus, gravida vel ex volutpat, posuere euismod tortor. Pellentesque tincidunt, mi ac varius blandit, quam orci dignissim risus, vitae rutrum orci urna ut neque.
      
      Pellentesque condimentum ut libero id blandit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.`,
    image: Images[2].image,
    rating: 3,
    reviews: 220,
    categories: ['Carpenter', 'Plumber'],
  },
  {
    id: '4',
    coordinate: {
      latitude: 22.6341137,
      longitude: 88.4497463,
    },
    title: 'Appliance',
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque est metus, gravida vel ex volutpat, posuere euismod tortor. Pellentesque tincidunt, mi ac varius blandit, quam orci dignissim risus, vitae rutrum orci urna ut neque.
      
      Pellentesque condimentum ut libero id blandit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.`,
    image: Images[3].image,
    rating: 4,
    reviews: 48,
    categories: ['Appliance', 'Plumber'],
  },
  {
    id: '5',
    coordinate: {
      latitude: 22.6292757,
      longitude: 88.444781,
    },
    title: 'Air Conditioning',
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque est metus, gravida vel ex volutpat, posuere euismod tortor. Pellentesque tincidunt, mi ac varius blandit, quam orci dignissim risus, vitae rutrum orci urna ut neque.
      
      Pellentesque condimentum ut libero id blandit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.`,
    image: Images[4].image,
    rating: 4,
    reviews: 178,
    categories: ['Plumber', 'Appliance'],
  },
  {
    id: '6',
    coordinate: {
      latitude: 22.6293867,
      longitude: 88.4354486,
    },
    title: 'Cleaning Service',
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque est metus, gravida vel ex volutpat, posuere euismod tortor. Pellentesque tincidunt, mi ac varius blandit, quam orci dignissim risus, vitae rutrum orci urna ut neque.
      
      Pellentesque condimentum ut libero id blandit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.`,
    image: Images[0].image,
    rating: 4,
    reviews: 99,
    categories: ['Cleaning Service', 'Plumber'],
  },
  {
    id: '7',
    coordinate: {
      latitude: 22.6345648,
      longitude: 88.4377279,
    },
    title: 'Computer & Laptop',
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque est metus, gravida vel ex volutpat, posuere euismod tortor. Pellentesque tincidunt, mi ac varius blandit, quam orci dignissim risus, vitae rutrum orci urna ut neque.
      
      Pellentesque condimentum ut libero id blandit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.`,
    image: Images[1].image,
    rating: 5,
    reviews: 102,
    categories: ['Computer & Laptop'],
  },
];
