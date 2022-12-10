import "../css/editTrain.css";
const EditableTrain = () => {
  return (
    <div className="train-table">
      <div className="tables">
        <table>
          <thead>
            <tr>
              <th>Train Name</th>
              <th>Source</th>
              <th>Destination</th>
              <th>Total Seats</th>
              <th>Avaible Seats</th>
              <th>Price</th>
              <th>Start Date</th>
              <th>End Date</th>
              <th colSpan="2">Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <p>Karachi Express</p>
              </td>
              <td>
                <p>Karachi</p>
              </td>
              <td>
                <p>Rawalpindi</p>
              </td>
              <td>
                <p>155</p>
              </td>
              <td>
                <p>50</p>
              </td>
              <td>
                <p>1000</p>
              </td>
              <td>
                <p>25-Mar-2022</p>
              </td>
              <td>
                <p>25-Mar-2022</p>
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
            <tr>
              <td>
                <p>Karachi Express</p>
              </td>
              <td>
                <p>Karachi</p>
              </td>
              <td>
                <p>Rawalpindi</p>
              </td>
              <td>
                <p>155</p>
              </td>
              <td>
                <p>50</p>
              </td>
              <td>
                <p>1000</p>
              </td>
              <td>
                <p>25-Mar-2022</p>
              </td>
              <td>
                <p>25-Mar-2022</p>
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
            <tr>
              <td>
                <p>Karachi Express</p>
              </td>
              <td>
                <p>Karachi</p>
              </td>
              <td>
                <p>Rawalpindi</p>
              </td>
              <td>
                <p>155</p>
              </td>
              <td>
                <p>50</p>
              </td>
              <td>
                <p>1000</p>
              </td>
              <td>
                <p>25-Mar-2022</p>
              </td>
              <td>
                <p>25-Mar-2022</p>
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
            <tr>
              <td>
                <p>Karachi Express</p>
              </td>
              <td>
                <p>Karachi</p>
              </td>
              <td>
                <p>Rawalpindi</p>
              </td>
              <td>
                <p>155</p>
              </td>
              <td>
                <p>50</p>
              </td>
              <td>
                <p>1000</p>
              </td>
              <td>
                <p>25-Mar-2022</p>
              </td>
              <td>
                <p>25-Mar-2022</p>
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
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default EditableTrain;
