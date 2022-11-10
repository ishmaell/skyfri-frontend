const BASE_URL = 'http://127.0.0.1:9005/';

const subsidiaryOptions = [
  { value: 'Rooftop', label: 'Rooftop' },
  { value: 'Ground Mounted', label: 'Ground Mounted' }
];

const clientOptions = [
  { value: 'Norsk Solar', label: 'Norsk Solar' },
  { value: 'Green Production', label: 'Green Production' }
];

const paymentOptions = [
  { value: '0', label: '0' },
  { value: '7', label: '7' },
  { value: '14', label: '14' },
];

const billingOptions = [
  { value: 'Monthly', label: 'Monthly' },
  { value: 'Quarterly', label: 'Quarterly' },
];

export {
  BASE_URL, subsidiaryOptions, clientOptions, paymentOptions, billingOptions
}