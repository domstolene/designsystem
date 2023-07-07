import { Table } from "@norges-domstoler/dds-components";

const tableData: {
  motatt: string;
  blNum: number;
  krav: string;
  siktede: string;
  dokumenterCount: number;
  saksbehandler: string;
  rettsted: string;
}[] = [
  {
    motatt: "28.08.2023 13:37",
    blNum: 123456789,
    krav: "Krav",
    siktede: "Petter Sæther Moen",
    dokumenterCount: 1,
    saksbehandler: "Kari Normann",
    rettsted: "Trøndelag tingrett",
  },
];

export default function TablePage() {
  return (
    <Table>
      <Table.Head>
        <Table.Row>
          <Table.Cell>Mottatt</Table.Cell>
          <Table.Cell>BL-nummer</Table.Cell>
          <Table.Cell>Krav</Table.Cell>
          <Table.Cell>Siktede</Table.Cell>
          <Table.Cell>Dokumenter</Table.Cell>
          <Table.Cell>Saksbehandler</Table.Cell>
          <Table.Cell>Rettsted</Table.Cell>
        </Table.Row>
      </Table.Head>
      <Table.Body>
        {tableData.map((row, i) => (
          <Table.Row key={i}>
            <Table.Cell>{row.motatt}</Table.Cell>
            <Table.Cell>{row.blNum}</Table.Cell>
            <Table.Cell>{row.krav}</Table.Cell>
            <Table.Cell>{row.siktede}</Table.Cell>
            <Table.Cell>{row.dokumenterCount} dokument(er)</Table.Cell>
            <Table.Cell>{row.saksbehandler}</Table.Cell>
            <Table.Cell>{row.rettsted}</Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>
    </Table>
  );
}
