import React from 'react';
import { Input, Select, Radio, Button } from './form';

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
  { value: 'Month', label: 'Month' },
  { value: 'Quarerly', label: 'Quarerly' },
];

const Agreement = () => {
  return (
    <section>
      <h1 className='title'>1 Register agreement</h1>
      <div className='flex-area'>
        <div className='col-1'>

          <Input inputClasses='input' label='Agreement title*' type='text' />
          <Select options={subsidiaryOptions} placeholder='' inputClasses='input select' label='Subsidiary*' type='text' />
          <Select options={clientOptions} placeholder='' inputClasses='input select' label='Client*' type='text' />

        </div>
        <div className='col-2'>

          <Radio label='Billing frequency*' name='billing' options={billingOptions} />
          <Select options={paymentOptions} inputClasses='input select' label='Payment terms (in calendar days after invoice date)*' />

          <div className="flex-area">
            <Input inputClasses='input' label='Start date*' type='date' />
            <Input inputClasses='input' label='End date*' type='date' />
          </div>

        </div>
      </div>

      <div className='section-action'>
        <Button classes='button primary'>Next</Button>
        <Button>Cancel</Button>
      </div>

    </section>
  )
}

export default Agreement