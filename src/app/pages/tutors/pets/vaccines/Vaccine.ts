export interface Vaccine {
  id: number;
  type: string;
  date: any;
  isEdit: boolean;
}

export const VaccineColumns = [
  {
    key: 'type',
    type: 'text',
    label: 'Tipo',
    required: true,
  },
  {
    key: 'date',
    type: 'date',
    label: 'Data de vacinação',
    required: true,
  },
  {
    key: 'isEdit',
    type: 'isEdit',
    label: 'Ações',
  },
];
