import { format } from 'date-fns';
import { Form, Formik } from 'formik';
import 'jodit/build/jodit.min.css';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import {
  Button,
  CardForm,
  DateInput,
  Error,
  Input,
  Loader,
  SideBarLayout,
} from '../../../../components';
import { useUpdateExperienceMutation } from '../../../../generated/graphql';
import { useGetExperienceFromUrl, useIsAuth } from '../../../../hooks';
import { useGetIntId } from '../../../../hooks/useGetIntId/useGetIntId';
import { withApollo } from '../../../../utils';

interface UpdateExperienceProps {
  id: number;
  company: string;
  position: string;
  period: string;
  description: string;
}

const JoditReact = React.lazy(() => {
  return import('jodit-react-ts');
});

const UpdateExperience: React.FC<UpdateExperienceProps> = () => {
  const isSSR = typeof window === 'undefined';
  const { data, error, loading } = useGetExperienceFromUrl();
  const [value, setValue] = React.useState(data?.experience?.description);
  const [dateRange, setDateRange] = useState([null, null]);
  const [startDate, endDate] = dateRange as any;
  const [updateExperience] = useUpdateExperienceMutation();
  const intId = useGetIntId();
  const router = useRouter();
  useIsAuth();

  const newDateRange = `${format(new Date(startDate), 'LLL, yyyy')} to ${format(
    new Date(endDate),
    'LLL, yyyy'
  )}`;

  if (!data?.experience) return <div>Could not found post.</div>;

  return (
    <SideBarLayout sectionTitle={data.experience.company}>
      {error && <Error errorType='500' description='Something went wrong' />}
      {loading && <Loader />}
      <Formik
        initialValues={{
          company: data.experience.company,
          position: data.experience.position,
          period: data.experience.period,
          description: data.experience.description,
        }}
        onSubmit={async (values) => {
          console.log(values);

          await updateExperience({
            variables: { id: intId, input: { ...values } } as any,
          });
          router.back();
        }}
      >
        {({ values, handleChange }) => (
          <CardForm>
            <Form>
              <div className='relative flex flex-col mb-6'>
                <Input
                  label='Company name:'
                  htmlFor='company'
                  type='text'
                  id='company'
                  placeHolder=''
                  value={values.company}
                  onChange={handleChange}
                  name='company'
                />
              </div>
              <div className='relative flex flex-col my-6'>
                <Input
                  label='Position'
                  htmlFor='position'
                  type='text'
                  id='position'
                  placeHolder=''
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
                      <JoditReact
                        onChange={(content) => setValue(content)}
                        defaultValue={value}
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
                  value={(values.description = value as any)}
                  onChange={handleChange}
                  name='description'
                  style={{ display: 'none' }}
                  labelStyle={{ display: 'none' }}
                />
              </div>

              <div className='flex flex-col'>
                <span className='block text-sm font-medium text-gray-700'>
                  Current period:
                </span>
                <span className='block text-sm font-medium text-gray-700'>
                  {data.experience?.period}
                </span>
              </div>

              <div className='relative flex flex-col py-4'>
                <DateInput
                  label='Select a new period:'
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
                  isClearable={true}
                />
              </div>

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
                text='Update Experience'
              />
            </Form>
          </CardForm>
        )}
      </Formik>
    </SideBarLayout>
  );
};

export default withApollo({ ssr: false })(UpdateExperience);
