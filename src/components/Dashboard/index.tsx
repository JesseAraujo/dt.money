import { Summary } from "../Summary";
import { TransactionTable } from "../TransationTables";
import { Container } from "./styles";

export function Dashboard() {
    return (
        <Container>
            <Summary />
            <TransactionTable />
        </Container>
    )
}