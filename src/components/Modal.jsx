import { useState } from "react";
import img1 from "../Resources/image1.svg";
import img2 from "../Resources/image2.svg";

function Modal({ openModal, setOpenModal }) {
  const [email, setEmail] = useState("");
  const [emailSend, setEmailSend] = useState(false);

  const sendEmail = () => {
    setEmailSend(true);
    console.log("The email sent: " + email);
    setTimeout(() => {
      setOpenModal(false);
    }, 2000);
  };

  return (
    <>
      {!emailSend && (
        <div className="main-container">
          <dialog open className="modal-container">
            <img className="modal-image" src={img1} />
            <h3 className="">Subscribe to our newsletter</h3>
            <div className="modal-text">
              {""}
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
              consequatur quo aliquid iusto suscipit repellat minus laboriosam
              culpa, nisi itaque.
              {""}
            </div>
            <div className="modal-input-label">
              <label htmlFor="" className="modal-input-text">
                Email address
              </label>
              <input
                type="email"
                name=""
                id=""
                className="modal-input"
                label={"Input"}
                placeholder="Email"
                onChange={(event) => {
                  setEmail(event.target.value);
                }}
              />
            </div>
            <div>
              <button
                className="modal-footer-button modal-button-send"
                onClick={sendEmail}
              >
                Send
              </button>
              <button
                className="modal-footer-button modal-button-cancel"
                onClick={() => {
                  setOpenModal(false);
                }}
              >
                Cancel
              </button>
            </div>
          </dialog>
        </div>
      )}
      {emailSend && (
        <div className="modal-container-sent">
          <img src={img2} alt="" className="modal-image" />
          <dialog className="modal-text">Email sent</dialog>
        </div>
      )}
    </>
  );
}

export default Modal;
