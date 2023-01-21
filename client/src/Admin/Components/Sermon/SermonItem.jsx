import { TrashIcon } from "@heroicons/react/24/outline";
import React, { useState } from "react";
import DeleteSermonModal from "./DeleteSermonModal";

const SermonItem = ({ title, minister, year, month, id }) => {
  const [showDeleteSermonModal, setShowDeleteSermonModal] = useState(false);

  const openDeleteModalHandler = () => {
    setShowDeleteSermonModal((oldState) => !oldState);
  };

  return (
    <>
      {showDeleteSermonModal && (
        <DeleteSermonModal
          sermonName={title}
          id={id}
          setShowDeleteSermonModal={setShowDeleteSermonModal}
        />
      )}
      <li className="grid grid-cols-5 gap-x-3 justify-items-center break-all sm:break-normal border-b border-gray-800 last-of-type:border-none md:px-4 pt-6 pb-2">
        <p>{title}</p>
        <p>{minister}</p>
        <p>{year}</p>
        <p>{month}</p>
        <button onClick={openDeleteModalHandler}>
          <TrashIcon className="w-6 h-6" />
        </button>
      </li>
    </>
  );
};

export default SermonItem;
