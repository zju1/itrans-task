import EditIcon from "../../../assets/icons/Edit";
import TrashIcon from "../../../assets/icons/Trash";
import { Customer } from "../../../mock/mock-customers";

export function CustomerRow(
  props: Customer & {
    onEdit: (data: number) => void;
    onDelete: (id: number) => void;
  }
) {
  const {
    avatar,
    company,
    email,
    first_name,
    last_name,
    id,
    type,
    onDelete,
    onEdit,
  } = props;

  return (
    <tr>
      <td>
        <div className="user">
          <img src={avatar} alt={first_name} />
          <p>
            {" "}
            {first_name} {last_name}{" "}
          </p>
        </div>
      </td>
      <td> {company} </td>
      <td> {email} </td>
      <td>
        <div className="adminBadge" data-active={type} />
      </td>
      <td>
        <div className="actions">
          <button className="actionBtn" onClick={() => onEdit(id)}>
            <EditIcon />
          </button>
          <button className="actionBtn" onClick={() => onDelete(id)}>
            <TrashIcon />
          </button>
        </div>
      </td>
    </tr>
  );
}
