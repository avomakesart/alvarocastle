import { format } from 'date-fns';
import { Form, Formik } from 'formik';
import { useRouter } from 'next/router';
import dynamic from 'next/dynamic';
import React, { useState } from 'react';
import {
  Button,
  CardForm,
  // DateInput,
  Input,
  SideBarLayout,
} from '../../../../components';
import { useCreateExperienceMutation } from '../../../../generated/graphql';
import { useIsAuth } from '../../../../hooks';
import { withApollo } from '../../../../utils';

const JoditEditor = dynamic(() => import('jodit-react'), { ssr: false })

const CreateExperience = () => {
  const isSSR = typeof window === 'undefined';
  const [value, setValue] = useState('');
  const [dateRange, setDateRange] = useState([null, null]);
  const [startDate, endDate] = dateRange as unknown as [Date, Date];
  const router = useRouter();
  const [createExperience] = useCreateExperienceMutation();
  useIsAuth();

  const newDateRange = `${format(new Date(startDate), 'LLL, yyyy')} to ${format(
    new Date(endDate),
    'LLL, yyyy'
  )}`;

  return (
    <SideBarLayout sectionTitle='Create Experience'>
      <Formik
        initialValues={{
          company: '',
          position: '',
          period: newDateRange,
          description: '',
        }}
        onSubmit={async (values) => {
          console.log(values);
          const { errors } = await createExperience({
            variables: { input: values },
            update: (cache) => {
              cache.evict({ fieldName: 'experiences:{}' });
            },
          });
          if (!errors) router.push('/');
        }}
      >
        {({ values, handleChange }) => (
          <CardForm>
            {' '}
            <Form>
              <div className='relative flex flex-col py-4'>
                <Input
                  label='Company name'
                  htmlFor='Company name'
                  type='text'
                  id='company'
                  placeHolder='Company name'
                  value={values.company}
                  onChange={handleChange}
                  name='company'
                />
              </div>
              <div className='relative flex flex-col py-4'>
                <Input
                  label='Position'
                  htmlFor='Position'
                  type='text'
                  id='position'
                  placeHolder='Position'
                  value={values.position}
                  onChange={handleChange}
                  name='position'
                />
              </div>

              <div className='relative flex flex-col py-4'>
                <label
                  htmlFor='description'
                  className='block text-sm font-medium text-gray-700'
                >
                  Description
                </label>
                <div>
                  {!isSSR && (
                    <React.Suspense fallback={<div>Loading</div>}>
                      <JoditEditor
                        onChange={(content) => setValue(content)}
                        value={value}
                      />
                    </React.Suspense>
                  )}
                </div>

                <Input
                  label='Description'
                  htmlFor='Description'
                  type='text'
                  id='description'
                  placeHolder='Description'
                  value={(values.description = value)}
                  onChange={handleChange}
                  name='description'
                  style={{ display: 'none' }}
                  labelStyle={{ display: 'none' }}
                />
              </div>
{/* 
              <div className='relative flex flex-col py-4'>
                <DateInput
                  label='Period:'
                  htmlFor='period'
                  id='period'
                  name='dateRange'
                  selectsRange={true}
                  startDate={startDate}
                  endDate={endDate}
                  onChange={(update: any) => {
                    setDateRange(update);
                  }}
                  value={dateRange}
                  withPortal
                  isClearable={true}
                />
              </div> */}

              <div className='relative flex flex-col py-4'>
                <Input
                  label='Period selected'
                  htmlFor='Date Selected'
                  type='text'
                  id='date'
                  placeHolder={values.period}
                  value={(values.period = newDateRange)}
                  onChange={handleChange}
                  name='period'
                  style={{ display: 'none' }}
                  labelStyle={{ display: 'none' }}
                />
              </div>
              <Button
                textColor='white'
                hasBorder
                borderColor='white'
                backgroundColor='black'
                text='Create Experience'
              />
            </Form>
          </CardForm>
        )}
      </Formik>
    </SideBarLayout>
  );
};
export default withApollo({ ssr: false })(CreateExperience);
