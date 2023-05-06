const Modal = ({ data }) => {
    return (
      <div className="modal">
        <div className="modal-content">
          <h2>{data.title}</h2>
          <p>{data.description}</p>
          <button onClick={() => setShowModal(false)}>Close</button>
        </div>
      </div>
    );
  };

export default CustomInput;
