import { CameraIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import Card from "../Components/UI/Card";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import app from "../../firebase";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addHeroFailure, addHeroStart, addHeroSuccess } from "../../store/slices/heroSlice";

export function useFileInput() {
  const [file, setFile] = useState(null);

  const updateFileFn = (evt) => {
    setFile(URL.createObjectURL(evt.target.files[0]));
  };

  return [file, updateFileFn];
}
const UpdateHeroImg = () => {
  const [file, setFile] = useState(null);
  const dispatch = useDispatch();

  const formSubmitHandler = (evt) => {
    evt.preventDefault();
    const fileName = new Date().getTime() + file.name;
    const storage = getStorage(app);
    const storageRef = ref(storage, fileName);
    const uploadTask = uploadBytesResumable(storageRef, file);

    // Register three observers:
    // 1. 'state_changed' observer, called any time the state changes
    // 2. Error observer, called on failure
    // 3. Completion observer, called on successful completion
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        // Observe state change events such as progress, pause, and resume
        // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log("Upload is " + progress + "% done");
        switch (snapshot.state) {
          case "paused":
            console.log("Upload is paused");
            break;
          case "running":
            console.log("Upload is running");
            break;
          default:
        }
      },
      (error) => {
        // Handle unsuccessful uploads
      },
      () => {
        // Handle successful uploads on complete
        // For instance, get the download URL: https://firebasestorage.googleapis.com/...
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          const hero = { ...file, image: downloadURL };
          const addHero = async() => {
            dispatch(addHeroStart());
            try {
              const res = await axios.post('/heros', hero);
              dispatch(addHeroSuccess(res.data));
            }catch(err) {
              dispatch(addHeroFailure());
            }
          }
          addHero();
        });
      }
    );
  };

  return (
    <Card>
      <h1 className="bg-gray-800 px-8 py-4 text-xl sm:text-3xl text-white capitalize font-bold text-center tracking-wide rounded-t-lg sticky top-0">
        Update Hero Images
      </h1>
      <form
        onSubmit={formSubmitHandler}
        className="px-4 py-8 grid grid-cols-1 sm:grid-cols-1 gap-3 text-gray-900"
      >
        <div className="flex flex-col gap-1">
          <label
            htmlFor="hero"
            className="bg-transparent border border-gray-800 h-52 lg:h-72 rounded-md focus:outline-blue-600 flex items-center justify-center"
          >
            {file ? (
              <img
                src={URL.createObjectURL(file)}
                alt="/"
                className="w-full h-full object-cover object-center rounded-md"
              />
            ) : (
              <CameraIcon className="w-8 h-8" />
            )}
          </label>
          <input
            type="file"
            name="image"
            id="hero"
            onChange={(e) => setFile(e.target.files[0])}
            accept="image/*"
            hidden
          />
        </div>
        <div className="flex gap-3 justify-center mt-6 sm:col-span-2">
          <button
            type="button"
            onClick={(e) => e.target.reset()}
            className="border rounded-lg bg-transparent border-gray-800 px-6 py-2"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="rounded-lg  bg-blue-600 text-white  px-6 py-2"
          >
            Upload
          </button>
        </div>
      </form>
    </Card>
  );
};

export default UpdateHeroImg;
