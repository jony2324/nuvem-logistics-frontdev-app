export default function Table({ columns, data }) {
  return (
    <div className="card">
        <table className="table">
        <thead>
            <tr>
            {columns.map(col => (
                <th
                key={col.key}
                >
                {col.title}
                </th>
            ))}
            </tr>
        </thead>
        <tbody>
            {data.map((row, i) => (
            <tr key={i}>
                {columns.map(col => (
                <td
                    key={col.key}
                >
                    {col.render ? col.render(row) : row[col.dataIndex] ?? "-"}
                </td>
                ))}
            </tr>
            ))}
        </tbody>
        </table>
    </div> 
  );
}