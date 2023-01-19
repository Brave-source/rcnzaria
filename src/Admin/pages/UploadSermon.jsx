import React, { useRef } from "react";
import Card from "../Components/UI/Card";
import { useFileInput } from "./UpdateHeroImg";

const UploadSermon = () => {
  const [audioFile, audioFileUpdater] = useFileInput();
  const titleRef = useRef();
  const ministerRef = useRef();
  const dateRef = useRef();
  const audioLinkRef = useRef();
  const videoLinkRef = useRef();

  const submitFormHandler = (evt) => {
    evt.preventDefault();
    const formData = {
      title: titleRef.current.value,
      minister: ministerRef.current.value,
      day: new Date(dateRef.current.value).getDay(),
      month: new Date(dateRef.current.value).getMonth(),
      year: new Date(dateRef.current.value).getFullYear(),
      audioLink: audioLinkRef.current.value,
      audioFile: audioFile,
      videoLink: videoLinkRef.current.value,
    };
    console.log(formData);
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
            ref={titleRef}
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
            name="Minister"
            id="Minister"
            ref={ministerRef}
            required
            className="bg-transparent border border-gray-800 h-11 rounded-md px-2 focus:outline-blue-600"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="date">
            Date of Upload <span className="text-red-600">*</span>
          </label>
          <input
            type="date"
            name="date"
            id="date"
            ref={dateRef}
            required
            className="bg-transparent border border-gray-800 h-11 rounded-md px-2 focus:outline-blue-600 flex items-center"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="audio-link">
            Audio Sermon Link <span className="text-red-600">*</span>
          </label>
          <input
            type="url"
            name="audio-link"
            id="audio-link"
            ref={audioLinkRef}
            required
            className="bg-transparent border border-gray-800 h-11 rounded-md px-2 focus:outline-blue-600"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="audio-file">
            Audio Sermon File <span className="text-red-600">*</span>
          </label>
          <input
            onChange={audioFileUpdater}
            type="file"
            name="audio-file"
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
            name="video"
            id="video"
            ref={videoLinkRef}
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
