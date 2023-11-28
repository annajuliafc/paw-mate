export const tutorDetailsMockData = {
  tutorId: 4,
  name: 'Alice Williams',
  nickName: 'AW',
  birthDate: new Date('1988-11-20'),
  pets: [
    {
      tutorId: 4,
      tutorName: 'Alice Williams',
      petId: 101,
      name: 'Buddy',
      birthDate: new Date('2018-02-20'),
      breed: 'Golden Retriever',
      color: 'Golden',
      weight: '30',
      vaccines: [
        { type: 'Rabies', dateOfVacination: new Date('2019-03-15') },
        { type: 'Distemper', dateOfVacination: new Date('2019-04-25') },
        { type: 'Rabies', dateOfVacination: new Date('2020-02-18') },
      ],
    },
    {
      tutorId: 4,
      tutorName: 'Alice Williams',
      petId: 102,
      name: 'Whiskers',
      birthDate: new Date('2019-05-10'),
      breed: 'Siamese',
      color: 'Cream',
      weight: '8',
      vaccines: [
        { type: 'FVRCP', dateOfVacination: new Date('2020-01-22') },
      ],
    },
    {
      tutorId: 4,
      tutorName: 'Alice Williams',
      petId: 103,
      name: 'Rocky',
      birthDate: new Date('2017-11-08'),
      breed: 'Boxer',
      color: 'Brindle',
      weight: '55',
      vaccines: [
        { type: 'Parvovirus', dateOfVacination: new Date('2018-02-14') },
        { type: 'Leptospirosis', dateOfVacination: new Date('2018-03-28') },
      ],
    },
  ],
};
