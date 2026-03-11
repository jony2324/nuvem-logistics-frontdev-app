import Table from "../components/Table";
import { useFetch } from "../hooks/useFetch";
import "./ShipmentsPage.css";

export default function UsersPage() {
  const { data, loading, error } = useFetch(
    "http://localhost:8000/api/v1/accounts/"
  );

  // Solo definimos las columnas que queremos mostrar
  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name"
    },
    {
      title: "Email",
      dataIndex: "contact_email",
      key: "contact_email"
    },
    {
      title: "RFC",
      dataIndex: "rfc",
      key: "rfc"
    }
  ];

  if (loading) return <p>Cargando...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div className ="page">
      <h1>Accounts</h1>
      <Table columns={columns} data={data} />
    </div>
  );
}