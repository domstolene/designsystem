import { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { CalendarDate } from '@internationalized/date';
import { VStack, Heading, Button } from '@norges-domstoler/dds-components';
import { DatePicker } from '@norges-domstoler/dds-datepicker';

interface FormShape {
  date: CalendarDate;
}

export function ReactHookForm() {
  const [lastSubmit, setLastSubmit] = useState('');
  const { handleSubmit, control } = useForm<FormShape>();

  return (
    <form
      onSubmit={handleSubmit(formData => {
        setLastSubmit(JSON.stringify(formData));
      })}
    >
      <VStack gap="layout-x1" align="flex-start">
        <Heading level={1}>react-hook-form</Heading>
        {lastSubmit !== '' && (
          <>
            <Heading level={2} typographyType="headingSans02">
              Last submit
            </Heading>
            <pre>{lastSubmit}</pre>
          </>
        )}
        <Controller
          control={control}
          name="date"
          render={({ field }) => <DatePicker {...field} />}
        />
        <Button type="submit">Send</Button>
      </VStack>
    </form>
  );
}
