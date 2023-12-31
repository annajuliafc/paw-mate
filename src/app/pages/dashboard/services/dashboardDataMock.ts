export const tutorsMockData = [
  {
    tutorId: 1,
    name: 'John Doe',
    nickName: 'JD',
    birthDate: new Date('1990-05-15'),
    pets: [],
  },
  {
    tutorId: 2,
    name: 'Jane Smith',
    nickName: 'JS',
    birthDate: new Date('1985-08-25'),
    pets: [],
  },
  {
    tutorId: 3,
    name: 'Bob Johnson',
    nickName: 'BJ',
    birthDate: new Date('1992-03-10'),
    pets: [],
  },
  {
    tutorId: 4,
    name: 'Alice Williams',
    nickName: 'AW',
    birthDate: new Date('1988-11-20'),
    pets: [],
  },
  {
    tutorId: 5,
    name: 'Charlie Brown',
    nickName: 'CB',
    birthDate: new Date('1995-07-03'),
    pets: [],
  },
  {
    tutorId: 6,
    name: 'Eva Davis',
    nickName: 'ED',
    birthDate: new Date('1982-09-14'),
    pets: [],
  },
];

export const petsMockData = [
  {
    tutorId: 1,
    tutorName: 'John Doe',
    petId: 101,
    name: 'Buddy',
    birthDate: new Date('2018-02-20'),
    breed: 'Golden Retriever',
    color: 'Golden',
    weight: '30',
    vaccines: [
      { type: 'Rabies', dateOfVacination: new Date('2019-03-15') },
      { type: 'Distemper', dateOfVacination: new Date('2019-04-25') },
    ],
  },
  {
    tutorId: 2,
    tutorName: 'Jane Smith',
    petId: 102,
    name: 'Whiskers',
    birthDate: new Date('2019-05-10'),
    breed: 'Siamese',
    color: 'Cream',
    weight: '8',
    vaccines: [
      { type: 'FVRCP', dateOfVacination: new Date('2020-01-22') },
      { type: 'Rabies', dateOfVacination: new Date('2020-02-18') },
    ],
  },
  {
    tutorId: 3,
    tutorName: 'Bob Johnson',
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
  {
    tutorId: 4,
    tutorName: 'Alice Williams',
    petId: 104,
    name: 'Mittens',
    birthDate: new Date('2016-09-30'),
    breed: 'Maine Coon',
    color: 'Tabby',
    weight: '15',
    vaccines: [
      { type: 'FVRCP', dateOfVacination: new Date('2017-01-12') },
      { type: 'Rabies', dateOfVacination: new Date('2017-02-28') },
    ],
  },
  {
    tutorId: 5,
    tutorName: 'Charlie Brown',
    petId: 105,
    name: 'Max',
    birthDate: new Date('2019-07-15'),
    breed: 'Labrador Retriever',
    color: 'Black',
    weight: '40',
    vaccines: [
      { type: 'Distemper', dateOfVacination: new Date('2020-02-10') },
      { type: 'Parvovirus', dateOfVacination: new Date('2020-03-22') },
    ],
  },
  {
    tutorId: 6,
    tutorName: 'Eva Davis',
    petId: 106,
    name: 'Luna',
    birthDate: new Date('2018-04-18'),
    breed: 'Persian',
    color: 'White',
    weight: '10',
    vaccines: [
      { type: 'Feline Leukemia', dateOfVacination: new Date('2019-01-05') },
      { type: 'Rabies', dateOfVacination: new Date('2019-02-18') },
    ],
  },
];
