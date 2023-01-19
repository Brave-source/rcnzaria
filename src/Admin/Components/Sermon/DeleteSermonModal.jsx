import React from "react";
import Modal from "../UI/Modal";

const DeleteSermonModal = ({ sermonName, id, setShowDeleteSermonModal }) => {
  const closeDeleteModalHandler = () => {
    setShowDeleteSermonModal((oldState) => !oldState);
  };

  const deleteSermonHandler = () => {
    // the function takes the id received via prop and is uses to delete the sermon click on...

    console.log(`deleting ${sermonName} with id:${id}`);
  };

  return (
    <Modal className="flex flex-col justify-between items-center">
      <p className="text-lg">
        Are you sure you want to delete{" "}
        <span className="underline font-semibold">{sermonName}</span> ?
      </p>
      <div className="grid grid-cols-2 gap-10 justify-center">
        <button
          onClick={deleteSermonHandler}
          className="border rounded-lg bg-transparent border-red-500 px-6 py-2"
        >
          Yes
        </button>
        <button
          onClick={closeDeleteModalHandler}
          className="rounded-lg bg-blue-600 text-white  px-6 py-2"
        >
          No
        </button>
      </div>
    </Modal>
  );
};

export default DeleteSermonModal;
