import { useRef, useState } from "react";
import Card from "../Components/UI/Card";
import { useFileInput } from "./UpdateHeroImg";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import app from "../../firebase";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addSermonFailure, addSermonStart, addSermonSuccess } from "../../store/slices/sermonSlice";

const UploadSermon = () => {
  const [inputs, setInputs] = useState({});
  const [file, setFile] = useState(null);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setInputs((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  const submitFormHandler = (evt) => {
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
          const sermon = { ...inputs, audioMessage: downloadURL };
          const addSermon = async() => {
            dispatch(addSermonStart());
            try {
              const res = await axios.post('/sermons', sermon);
              dispatch(addSermonSuccess(res.data));
            }catch(err) {
              dispatch(addSermonFailure());
            }
          }
          addSermon();
        });
      }
    );
  };
  return (
    <Card>
      <div className="bg-gray-800 px-8 py-4  font-[Inter] tracking-wide rounded-t-lg text-white">
        <h1 className="text-xl sm:text-3xl capitalize font-bold text-center">
          Upload New sermon
        </h1>
        <p className="text-xs text-center">
          Required fields are marked with asterisk(*)
        </p>
      </div>
      <form
        onSubmit={submitFormHandler}
        className="px-4 py-8 grid grid-cols-1 sm:grid-cols-2 gap-3 text-gray-900"
      >
        <div className="flex flex-col gap-1">
          <label htmlFor="title">
            Sermon Title <span className="text-red-600">*</span>
          </label>
          <input
            type="text"
            name="title"
            id="title"
            onChange={handleChange}
            required
            className="bg-transparent border border-gray-800 h-11 rounded-md px-2 focus:outline-blue-600"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="Minister">
            Minister's Name <span className="text-red-600">*</span>
          </label>
          <input
            type="text"
            name="minister"
            id="Minister"
            onChange={handleChange}
            required
            className="bg-transparent border border-gray-800 h-11 rounded-md px-2 focus:outline-blue-600"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="audio-file">
            Audio Sermon File <span className="text-red-600">*</span>
          </label>
          <input
            onChange={(e) => setFile(e.target.files[0])}
            type="file"
            name="audioMessage"
            id="audio-file"
            required
            accept="audio/*"
            className="bg-transparent border border-gray-800 h-11 rounded-md px-2 focus:outline-blue-600"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="video">Video Recording Link</label>
          <input
            type="url"
            name="videoMessage"
            id="video"
            onChange={handleChange}
            className="bg-transparent border border-gray-800 h-11 rounded-md px-2 focus:outline-blue-600"
          />
        </div>
        <div className="flex gap-3 justify-center mt-6 sm:col-span-2">
          <button
            type="button"
            className="border rounded-lg bg-transparent border-gray-800 px-6 py-2"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="rounded-lg bg-blue-600 text-white  px-6 py-2"
          >
            Upload
          </button>
        </div>
      </form>
    </Card>
  );
};

export default UploadSermon;
