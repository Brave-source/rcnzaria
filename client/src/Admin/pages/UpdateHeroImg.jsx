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
        className="px-4 py-8 grid grid-cols-1 sm:grid-cols-1 gap-3 text-gray-900"
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
