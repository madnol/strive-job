import React from "react";
import { MdFavorite } from "react-icons/md";
import { useSelector, useDispatch } from "react-redux";
import {
  setFavourite,
  increaseFavourite,
  decreaseFavourite,
} from "../../store/favourite/actions";

function FavouriteCounter() {
  const { favourite } = useSelector(state => state.counter);
  const dispatch = useDispatch();
  const onChange = e => {
    dispatch(setFavourite(parseInt(e.target.value)));
  };

  const inc = () => {
    dispatch(increaseFavourite());
  };
  const dec = () => {
    dispatch(decreaseFavourite());
  };

  return (
    <div>
      <MdFavorite
        onClick={inc}
        className="ml-2"
        style={{ color: "#EE502E" } ? { color: "#000" } : { color: "#EE502E" }}
      />
      <input onChange={onChange} value={favourite} type="number" />
    </div>
  );
}
export default FavouriteCounter;
