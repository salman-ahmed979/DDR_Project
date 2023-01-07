const ReadOnly = ({ train, setRowID, handleDelete }) => {
  return (
    <tr>
      <td>
        <p>{train.name}</p>
      </td>
      <td>
        <p>{train.source}</p>
      </td>
      <td>
        <p>{train.destination}</p>
      </td>
      <td>
        <p>{train.totalseats}</p>
      </td>
      <td>
        <p>{train.availableseats}</p>
      </td>
      <td>
        <p>{train.price}</p>
      </td>
      <td>
        <p>{train.startDate}</p>
      </td>
      <td>
        <p>{train.endDate}</p>
      </td>
      <td>
        <button
          onClick={(e) => {
            setRowID(e, train._id);
          }}
        >
          <i class="fa-solid fa-pen-to-square"></i>
        </button>
      </td>
      <td>
        <button
          onClick={(e) => {
            handleDelete(e, train._id);
          }}
        >
          <i class="fa-solid fa-trash"></i>
        </button>
      </td>
    </tr>
  );
};

export default ReadOnly;
