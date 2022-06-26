import React from "react";

type Props = {};

const Directory = (props: Props) => {
  return (
    <div className="rounded bg-white p-4 w-2/5 text-sm">
      <h1 className="text-2xl pb-2 font-bold">Directory</h1>
      <div className="grid grid-cols-3 py-2 border-y font-medium">
        <h3>Executive Guild</h3>
        <h3 className="text-gray-500">Weighted Voice</h3>
        <h3 className="text-gray-500">Delivered Proposals</h3>
      </div>
      <div className="grid grid-cols-3 py-2">
        <p>Kames</p>
        <p>4.0</p>
        <p>27</p>
      </div>
      <div className="grid grid-cols-3 py-2">
        <p>Dino</p>
        <p>2.5</p>
        <p>24</p>
      </div>
      <div className="grid grid-cols-3 py-2">
        <p>JBass</p>
        <p>2.0</p>
        <p>13</p>
      </div>
      <div className="grid grid-cols-3 py-2">
        <p>Annette</p>
        <p>3.2</p>
        <p>17</p>
      </div>
      <div className="grid grid-cols-3 py-2">
        <p>George</p>
        <p>2.0</p>
        <p>7</p>
      </div>
      <div className="grid grid-cols-3 py-2 border-y font-medium">
        <h3>Developers Guild</h3>
        <h3 className="text-gray-500">Weighted Voice</h3>
        <h3 className="text-gray-500">Delivered Proposals</h3>
      </div>
      <div className="grid grid-cols-3 py-2">
        <p>Kames</p>
        <p>7.0</p>
        <p>45</p>
      </div>
      <div className="grid grid-cols-3 py-2">
        <p>George</p>
        <p>4.5</p>
        <p>26</p>
      </div>
      <div className="grid grid-cols-3 py-2">
        <p>Justin</p>
        <p>4.0</p>
        <p>23</p>
      </div>
    </div>
  );
};

export default Directory;
