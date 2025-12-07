import React, { useState } from "react";

const PERMISSIONS = [
  { id: "view_shipments", label: "Ver envíos" },
  { id: "edit_shipments", label: "Editar envíos" },
  { id: "manage_users", label: "Administrar usuarios" },
  { id: "manage_roles", label: "Administrar roles" }
];

const initialRoles = [
  {
    id: "role_admin",
    name: "Admin",
    description: "Control total",
    permissions: PERMISSIONS.map((p) => p.id)
  },
  {
    id: "role_ops",
    name: "Operaciones",
    description: "Gestiona envíos",
    permissions: ["view_shipments", "edit_shipments"]
  },
  {
    id: "role_viewer",
    name: "Vista",
    description: "Solo lectura",
    permissions: ["view_shipments"]
  }
];

const initialUsers = [
  { id: "u1", name: "Laura", email: "laura@example.com", roles: ["role_admin"] },
  { id: "u2", name: "Carlos", email: "carlos@example.com", roles: ["role_ops"] },
  { id: "u3", name: "Ana", email: "ana@example.com", roles: ["role_viewer"] }
];

export default function UsersRolesPage() {
  const [roles, setRoles] = useState(initialRoles);
  const [users, setUsers] = useState(initialUsers);
  const [selectedRoleId, setSelectedRoleId] = useState("role_admin");

  const selectedRole = roles.find((r) => r.id === selectedRoleId);

  const togglePermission = (permId) => {
    setRoles((prev) =>
      prev.map((r) =>
        r.id === selectedRoleId
          ? {
              ...r,
              permissions: r.permissions.includes(permId)
                ? r.permissions.filter((p) => p !== permId)
                : [...r.permissions, permId]
            }
          : r
      )
    );
  };

  const toggleUserRole = (userId, roleId) => {
    setUsers((prev) =>
      prev.map((u) =>
        u.id === userId
          ? {
              ...u,
              roles: u.roles.includes(roleId)
                ? u.roles.filter((r) => r !== roleId)
                : [...u.roles, roleId]
            }
          : u
      )
    );
  };

  return (
    <div className="page page--split">

      {/* Roles */}
      <div className="page-column">
        <h2>Roles & Permisos</h2>

        <div className="card">
          <label>Selecciona un rol</label>
          <select value={selectedRoleId} onChange={(e) => setSelectedRoleId(e.target.value)}>
            {roles.map((r) => (
              <option key={r.id} value={r.id}>{r.name}</option>
            ))}
          </select>

          {selectedRole && (
            <>
              <h3>Permisos</h3>

              <div className="permissions-grid">
                {PERMISSIONS.map((p) => (
                  <label key={p.id} className="checkbox-tile">
                    <input
                      type="checkbox"
                      checked={selectedRole.permissions.includes(p.id)}
                      onChange={() => togglePermission(p.id)}
                    />
                    {p.label}
                  </label>
                ))}
              </div>
            </>
          )}
        </div>
      </div>

      {/* Usuarios */}
      <div className="page-column">
        <h2>Usuarios</h2>

        <div className="card">
          <table className="table">
            <thead>
              <tr>
                <th>Usuario</th>
                <th>Email</th>
                <th>Roles</th>
                <th>Asignar/Quitar</th>
              </tr>
            </thead>
            <tbody>
              {users.map((u) => (
                <tr key={u.id}>
                  <td>{u.name}</td>
                  <td>{u.email}</td>
                  <td>
                    {u.roles.map((rid) => (
                      <span key={rid} className="badge badge--small">
                        {roles.find((r) => r.id === rid)?.name}
                      </span>
                    ))}
                  </td>
                  <td>
                    <select value="" onChange={(e) => toggleUserRole(u.id, e.target.value)}>
                      <option value="">Selecciona...</option>
                      {roles.map((r) => (
                        <option key={r.id} value={r.id}>
                          {u.roles.includes(r.id) ? `Quitar ${r.name}` : `Asignar ${r.name}`}
                        </option>
                      ))}
                    </select>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

      </div>
    </div>
  );
}
