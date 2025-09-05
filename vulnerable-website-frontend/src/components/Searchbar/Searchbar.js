const Searchbar = () => {
  return (
    <div className="my-0 p-0 flex flex-row justify-between items-center">
      <div className="m-0 p-0">
        <input className="py-2 px-4 border-y w-120 border-l rounded-bl-md rounded-tl-md border-[#1e3a8a]" placeholder="Aradığınız ürünü buraya yazınız"/>
      </div>
      <div className="m-0 p-0">
        <button className="flex items-center justify-center py-2 px-4 border-y border-r rounded-br-md rounded-tr-md border-[#1e3a8a] cursor-pointer">
          <span className="material-symbols-rounded" style={{ fontSize: "24px", margin: 0, padding: 0, color: "#1e3a8a"}}>
            search
          </span>
        </button>
      </div>
    </div>
  );
}

export default Searchbar;