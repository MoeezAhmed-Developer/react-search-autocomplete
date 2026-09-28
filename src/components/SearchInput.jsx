import style from "../css/search-input.module.css";

export default function SerachInput({ inputVal, setInputVal }) {
  return (
    <div className={style.searchInputDiv}>
      <div>
        <i className="uil uil-search"></i>
        <input
          type="text"
          placeholder="Search services, products, projects, and more..."
          value={inputVal}
          onChange={(evt) => setInputVal(evt.target.value)}
        />
        <button onClick={() => setInputVal("")}>
          <i className="uil uil-multiply"></i>
        </button>
      </div>
    </div>
  );
}
