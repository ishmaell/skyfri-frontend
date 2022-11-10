import React, { useContext, useState } from 'react';
import { Input, Select, Radio, Button } from './form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { BASE_URL, subsidiaryOptions, clientOptions, billingOptions, paymentOptions } from '../constants';
import { AgreementSchema } from '../schema/agreement';
import { StepperContext } from '../context/StepperContext';
import axios from 'axios';

const Agreement = () => {
  const value = useContext(StepperContext);
  const [isLoading, setIsLoading] = useState(false);
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm({
    mode: 'all',
    resolver: yupResolver(AgreementSchema),
    defaultValues: {
      billingFrequency: 'Monthly'
    }
  });

  const onSubmit = async (formValues) => {
    setIsLoading(true);
    try {
      const response = await axios.post(`${BASE_URL}save-agreement`, formValues);
      if (response.status === 200) {
        value.nextPage();
      }
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <section>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h1 className='title'>1 Register agreement</h1>
        <div className='flex-area'>
          <div className='col-1'>

            <Input error={
              errors.agreementTitle && (
                <span className='error-message'>{errors.agreementTitle.message}</span>
              )
            } register={register} inputClasses='input' label='Agreement title*' type='text' name='agreementTitle' />
            <Select error={
              errors.subsidiary && (
                <span className='error-message'>{errors.subsidiary.message}</span>
              )
            } register={register} name="subsidiary" options={subsidiaryOptions} placeholder='' inputClasses='input select' label='Subsidiary*' type='text' />
            <Select error={
              errors.client && (
                <span className='error-message'>{errors.client.message}</span>
              )
            } register={register} name="client" options={clientOptions} placeholder='' inputClasses='input select' label='Client*' type='text' />

          </div>
          <div className='col-2'>

            <Radio error={
              errors.billingFrequency && (
                <span className='error-message'>{errors.billingFrequency.message}</span>
              )
            } register={register} label='Billing frequency*' name='billingFrequency' options={billingOptions} defaultChecked={getValues("decide") === "decideOne"} />
            <Select error={
              errors.paymentTerms && (
                <span className='error-message'>{errors.paymentTerms.message}</span>
              )
            } register={register} name="paymentTerms" options={paymentOptions} inputClasses='input select' label='Payment terms (in calendar days after invoice date)*' />

            <div className="flex-area">
              <div className="col-1">
                <Input error={
                  errors.startDate && (
                    <span className='error-message'>{errors.startDate.message}</span>
                  )
                } register={register} name="startDate" inputClasses='input' label='Start date*' type='date' />
              </div>
              <div className="col-2">
                <Input error={
                  errors.endDate && (
                    <span className='error-message'>{errors.endDate.message}</span>
                  )
                } register={register} name="endDate" inputClasses='input' label='End date*' type='date' defaultValue={undefined} />
              </div>
            </div>

          </div>
        </div>

        <div className='section-action'>
          <Button disabled={isLoading} type="submit" classes='button primary'>
            {isLoading ? 'Saving...' : 'Next'}
          </Button>
          <Button>Cancel</Button>
        </div>
      </form>

    </section>
  )
}

export default Agreement