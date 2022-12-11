const EditOnly = ({ train }) => {
  return (
    <tr>
      <td>
        <input type="text" />
      </td>
      <td>
        <input type="text" />
      </td>
      <td>
        <input type="text" />
      </td>
      <td>
        <input type="number" />
      </td>
      <td>
        <input type="number" />
      </td>
      <td>
        <input type="number" />
      </td>
      <td>
        <input type="datetime-local" />
      </td>
      <td>
        <input type="datetime-local" />
      </td>

      <td>
        <button>
          <i class="fa-solid fa-pen-to-square"></i>
        </button>
      </td>
      <td>
        <button>
          <i class="fa-solid fa-trash"></i>
        </button>
      </td>
    </tr>
  );
};

export default EditOnly;
