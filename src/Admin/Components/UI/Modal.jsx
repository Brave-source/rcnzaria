import { createPortal } from "react-dom";

const ModalCard = ({ children, className }) => {
  const classNames = ` bg-white rounded-lg p-8 w-[30rem] min-h-[13rem] aspect- absolute z-[999] max-w-[85%] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  ${className}`;
  return <div className={classNames}>{children}</div>;
};
const Backdrop = ({ onClick }) => {
  return (
    <div
      className=" bg-black/60 w-screen h-screen absolute top-0 left-0 z-[100]"
      onClick={onClick}
    ></div>
  );
};
const Modal = ({ children, className, onClick }) => {
  return (
    <>
      {createPortal(
        <ModalCard children={children} className={className} />,
        document.getElementById("overlay")
      )}
      {createPortal(
        <Backdrop onClick={onClick} />,
        document.getElementById("overlay")
      )}
    </>
  );
};

export default Modal;
