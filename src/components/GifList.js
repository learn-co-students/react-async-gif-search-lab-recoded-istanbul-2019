import React from "react";

export default function GifList({ gifs }) {
  return (
    <div>
      {gifs.map((gif) => (
        <img key={gif} src={gif} alt="gif" />
      ))}
    </div>
  );
}
