import * as yup from 'yup';

export const AgreementSchema = yup.object({
  agreementTitle: yup.string().required('Please enter an agreement title'),
  subsidiary: yup.string().required('Please select a subsidiary'),
  client: yup.string().required('Please select a client'),
  billingFrequency: yup.string(),
  paymentTerms: yup.string().required('Please select payment terms'),
  startDate: yup.date('Please select start date').required('Please select start date').nullable().transform((curr, orig) => orig === '' ? null : curr),
  endDate: yup
    .date()
    .required('Please select an end date')
    .min(
      yup.ref('startDate'),
      'End date must be greater than or equal to start date'
    ).nullable().transform((curr, orig) => orig === '' ? null : curr),
});