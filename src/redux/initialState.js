const initialState = {
  posts: [
    {
      id: '1',
      title: 'Szybcy i wsciekli',
      shortDescription: 'Warto obejrzec',
      content: 'Wyscigi samochodowe',
      publishedDate: new Date('2023-09-01'),
      author: 'Johannes Newton',
      category: 'Sport',
    },
    {
      id: '2',
      title: 'Szklana pulapka',
      shortDescription: 'Czlowiek w wiezowcu',
      content: 'Uzywanie broni',
      publishedDate: new Date('2023-09-01'),
      author: 'Alicja Nowak',
      category: 'Movies',
    },
    {
      id: '3',
      title: 'Ksiegowy',
      shortDescription: 'Jak rozliczyc swoj podatek',
      content: 'Ksiegwosc korporacyjna',
      publishedDate: new Date('2023-09-01'),
      author: 'Marcin Krasicki',
      category: 'News',
    },
  ],
};

export default initialState;
