import React from "react";

export function SermonListHeader() {
  return (
    <div className="grid grid-cols-5 justify-items-center md:px-4">
      <p>Title</p>
      <p>Minister</p>
      <p>Year</p>
      <p>Month</p>
      <p>Action</p>
    </div>
  );
}
