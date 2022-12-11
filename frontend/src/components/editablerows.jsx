import { useState } from "react";

const EditOnly = ({ train, setRowID, handleEdit }) => {
  const [name, setName] = useState(train.name);
  const [source, setSource] = useState(train.source);
  const [destination, setDestination] = useState(train.destination);
  const [totalSeats, setSeats] = useState(train.totalseats);
  const [price, setPrice] = useState(train.price);
  const [startDate, setsDate] = useState(train.startDate);
  const [endDate, seteDate] = useState(train.endDate);
  const trainProfile = {
    name,
    source,
    destination,
    totalSeats,
    price,
    startDate,
    endDate,
  };
  return (
    <tr>
      <td>
        <input
          type="text"
          onChange={(e) => {
            if (e.target.value !== "") setName(e.target.value);
          }}
        />
      </td>
      <td>
        <input
          type="text"
          onChange={(e) => {
            if (e.target.value !== "") setSource(e.target.value);
          }}
        />
      </td>
      <td>
        <input
          type="text"
          onChange={(e) => {
            if (e.target.value !== "") setDestination(e.target.value);
          }}
        />
      </td>
      <td>
        <input
          type="number"
          min="0"
          onChange={(e) => {
            if (e.target.value !== "") setSeats(e.target.value);
          }}
        />
      </td>
      <td>
        <input type="number" disabled={true} />
      </td>
      <td>
        <input
          type="number"
          min="0"
          onChange={(e) => {
            if (e.target.value !== "") setPrice(e.target.value);
          }}
        />
      </td>
      <td>
        <input
          type="datetime-local"
          onChange={(e) => {
            if (e.target.value !== "") setsDate(e.target.value);
          }}
        />
      </td>
      <td>
        <input
          type="datetime-local"
          onChange={(e) => {
            if (e.target.value !== "") seteDate(e.target.value);
          }}
        />
      </td>

      <td>
        <button
          onClick={(e) => {
            handleEdit(e, trainProfile, train._id);
          }}
        >
          <i class="fa-solid fa-floppy-disk"></i>
        </button>
      </td>
      <td>
        <button
          onClick={(e) => {
            setRowID(e, null);
          }}
        >
          <i class="fa-solid fa-xmark"></i>
        </button>
      </td>
    </tr>
  );
};

export default EditOnly;
