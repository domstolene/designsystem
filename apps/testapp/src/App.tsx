import "@norges-domstoler/dds-components";
import styled from 'styled-components';

import { TextInput, Datepicker } from "@norges-domstoler/dds-components";

const Row = styled.div`
  display: flex;
  flex-direction: row;
`

export const App = () => {
  return (
    <Row>
        <TextInput />
        <Datepicker />
    </Row>
  );
}
