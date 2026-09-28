import { useState } from "react";
import SerachInput from "./SearchInput";
import style from "../css/searchbar.module.css";
import AutoSuggestion from "./AutoSuggestion";

export default function Searchbar() {
  const [inputVal, setInputVal] = useState("");
  return (
    <div className={style.searchbarContainer}>
      <SerachInput inputVal={inputVal} setInputVal={setInputVal} />
      <AutoSuggestion inputVal={inputVal} />
    </div>
  );
}
