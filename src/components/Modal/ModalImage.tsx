import React, { useState } from "react";
import "../../App.css";
import { postImageToBike } from "../../img/FetchData";
import { IsetModalOpenImage } from "../../../@types/types";

function ModalImage({ setModalOpenImage }: IsetModalOpenImage) {
  const [file, setFile] = useState<File | null>();
  const [bikesId, setBikesId] = useState("");
  const handleSubmitPathToBike = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("file", file!);
    formData.append("bikesId", bikesId);
    postImageToBike(formData);
  };
  const handleChangeFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFile(e.target.files && e.target.files[0] ? e.target.files[0] : null);
  };
  const handleChangeBikesId = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBikesId(e.target.value);
  };
  return (
    <div className="modalBackground">
      <form onSubmit={handleSubmitPathToBike}>
        <div className="modalContainer">
          <div className="titleCloseBtn">
            <button
              type="button"
              onClick={() => {
                setModalOpenImage(false);
              }}
            >
              X
            </button>
          </div>
          <div className="title">
            <h1>Add photo to bike</h1>
          </div>
          <div className="body">
            <input
              type="file"
              name="path"
              id="path"
              onChange={handleChangeFile}
            />
            <input
              type="number"
              name="bikesId"
              id="bikesId"
              onChange={handleChangeBikesId}
            />
          </div>
          <div className="footer">
            <button
              type="button"
              onClick={() => {
                setModalOpenImage(false);
              }}
              id="cancelBtn"
            >
              Cancel
            </button>
            <button type="submit">Add</button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default ModalImage;
