import { CameraIcon } from "@heroicons/react/24/outline";
import React, { useState } from "react";
import Card from "../Components/UI/Card";

export function useFileInput() {
  const [file, setFile] = useState(null);

  const updateFileFn = (evt) => {
    setFile(URL.createObjectURL(evt.target.files[0]));
  };

  return [file, updateFileFn];
}
const UpdateHeroImg = () => {
  const [hero1, updateHero1Handler] = useFileInput();
  const [hero2, updateHero2Handler] = useFileInput();
  const [hero3, updateHero3Handler] = useFileInput();
  const [hero4, updateHero4Handler] = useFileInput();
  const [hero5, updateHero5Handler] = useFileInput();
  const [hero6, updateHero6Handler] = useFileInput();

  const formSubmitHandler = (evt) => {
    evt.preventDefault();

    const heroCarousels = {
      hero1,
      hero2,
      hero3,
      hero4,
      hero5,
      hero6,
    };
  };

  return (
    <Card>
      <h1 className="bg-gray-800 px-8 py-4 text-xl sm:text-3xl text-white capitalize font-bold text-center tracking-wide rounded-t-lg sticky top-0">
        Update Hero Images
      </h1>
      <form
        onSubmit={formSubmitHandler}
        className="px-4 py-8 grid grid-cols-1 sm:grid-cols-2 gap-3 text-gray-900"
      >
        <div className="flex flex-col gap-1">
          <label
            htmlFor="hero1"
            className="bg-transparent border border-gray-800 h-52 lg:h-72 rounded-md focus:outline-blue-600 flex items-center justify-center"
          >
            {hero1 ? (
              <img
                src={hero1}
                alt="/"
                className="w-full h-full object-cover object-center rounded-md"
              />
            ) : (
              <CameraIcon className="w-8 h-8" />
            )}
          </label>
          <input
            type="file"
            name="hero1"
            id="hero1"
            onChange={updateHero1Handler}
            accept="image/*"
            hidden
          />
        </div>
        <div className="flex flex-col gap-1">
          <label
            htmlFor="hero2"
            className="bg-transparent border border-gray-800 h-52 lg:h-72 rounded-md focus:outline-blue-600 flex items-center justify-center"
          >
            {hero2 ? (
              <img
                src={hero2}
                alt="/"
                className="w-full h-full object-cover object-center rounded-md"
              />
            ) : (
              <CameraIcon className="w-8 h-8" />
            )}
          </label>
          <input
            type="file"
            name="hero2"
            id="hero2"
            onChange={updateHero2Handler}
            accept="image/*"
            hidden
          />
        </div>
        <div className="flex flex-col gap-1">
          <label
            htmlFor="hero3"
            className="bg-transparent border border-gray-800 h-52 lg:h-72 rounded-md focus:outline-blue-600 flex items-center justify-center"
          >
            {hero3 ? (
              <img
                src={hero3}
                alt="/"
                className="w-full h-full object-cover object-center rounded-md"
              />
            ) : (
              <CameraIcon className="w-8 h-8" />
            )}
          </label>
          <input
            type="file"
            name="hero3"
            id="hero3"
            onChange={updateHero3Handler}
            accept="image/*"
            hidden
          />
        </div>
        <div className="flex flex-col gap-1">
          <label
            htmlFor="hero4"
            className="bg-transparent border border-gray-800 h-52 lg:h-72 rounded-md focus:outline-blue-600 flex items-center justify-center"
          >
            {hero4 ? (
              <img
                src={hero4}
                alt="/"
                className="w-full h-full object-cover object-center rounded-md"
              />
            ) : (
              <CameraIcon className="w-8 h-8" />
            )}
          </label>
          <input
            type="file"
            name="hero4"
            id="hero4"
            onChange={updateHero4Handler}
            accept="image/*"
            hidden
          />
        </div>
        <div className="flex flex-col gap-1">
          <label
            htmlFor="hero5"
            className="bg-transparent border border-gray-800 h-52 lg:h-72 rounded-md focus:outline-blue-600 flex items-center justify-center"
          >
            {hero5 ? (
              <img
                src={hero5}
                alt="/"
                className="w-full h-full object-cover object-center rounded-md"
              />
            ) : (
              <CameraIcon className="w-8 h-8" />
            )}
          </label>
          <input
            type="file"
            name="hero5"
            id="hero5"
            onChange={updateHero5Handler}
            accept="image/*"
            hidden
          />
        </div>
        <div className="flex flex-col gap-1">
          <label
            htmlFor="hero6"
            className="bg-transparent border border-gray-800 h-52 lg:h-72 rounded-md focus:outline-blue-600 flex items-center justify-center"
          >
            {hero6 ? (
              <img
                src={hero6}
                alt="/"
                className="w-full h-full object-cover object-center rounded-md"
              />
            ) : (
              <CameraIcon className="w-8 h-8" />
            )}
          </label>
          <input
            type="file"
            name="hero6"
            id="hero6"
            onChange={updateHero6Handler}
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
