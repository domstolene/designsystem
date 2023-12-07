import { Button, Heading, VStack } from '@norges-domstoler/dds-components';
import { DatePicker } from '@norges-domstoler/dds-datepicker';
import { useState } from 'react';

export function HtmlForm() {
  const [lastSubmit, setLastSubmit] = useState('');

  return (
    <form
      onSubmit={e => {
        e.preventDefault();
        setLastSubmit(
          JSON.stringify(new FormData(e.target as HTMLFormElement)),
        );
      }}
    >
      <VStack gap="layout-x1" align="flex-start">
        <Heading level={1}>HTML form</Heading>
        {lastSubmit !== '' && (
          <>
            <Heading level={2} typographyType="headingSans02">
              Last submit
            </Heading>
            <pre>{lastSubmit}</pre>
          </>
        )}
        <DatePicker name="date" />
        <Button type="submit">Send</Button>
      </VStack>
    </form>
  );
}
