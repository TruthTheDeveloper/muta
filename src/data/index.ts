export type Schema = {
  id?: string;
  label?: string;
  value?: string;
  dotColor?: string;
  showDot?: boolean;
};
export type SchemaForDelivery = {
  title?: string;
  quantity?: number;
  iconColor?: string;
};

export const deliveries: Array<SchemaForDelivery> = [
  {
    iconColor: 'darkgreen',
    quantity: 5,
    title: 'Delivered packages',
  },
  {
    iconColor: 'red',
    quantity: 6,
    title: 'Pending packages',
  },
];


export const year: Array<Schema> = [
  {
    id: '1',
    label: '2024',
    value: '2024',
  },
  {
    id: '2',
    label: '2023',
    value: '2023',
  },
];
export const quaterly: Array<Schema> = [
  {
    id: 'Q1',
    label: 'Q1',
    value: 'Q2',
  },
  {
    id: 'Q2',
    label: 'Q2',
    value: 'Q2',
  },
  {
    id: 'Q3',
    label: 'Q3',
    value: 'Q3',
  },
  {
    id: 'Q4',
    label: 'Q4',
    value: 'Q4',
  },
];

export const packageSummary: Array<Schema> = [
  {
    id: 'Delivered Package',
    label: 'Delivered Package',
    value: 'Delivered Package',
  },
  {
    id: 'Pending Packages',
    label: 'Pending Packages',
    value: 'Pending Packages',
  },
];
export const packageSummaryOverview: Array<Schema> = [
  {
    id: 'Delivered Package',
    label: 'Delivered Package',
    value: 'Delivered Package',
    dotColor: 'darkgreen',
    showDot: true,
  },
  {
    id: 'Pending Packages',
    label: 'Pending Packages',
    value: 'Pending Packages',
    dotColor: 'red',
    showDot: true,
  },
];
