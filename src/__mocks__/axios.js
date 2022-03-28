const mockResponse = {
  data: {
    results: [
      {
        name: {
          first: 'Charlie',
          last: 'Cheung',
        },
        picture: {
          large: 'https://randomuser.me/api/portraits/women/51.jpg',
        },
        login: {
          username: 'charlie13',
        },
      },
    ],
  },
};

export default {
  get: jest.fn().mockResolvedValue(mockResponse),
};
