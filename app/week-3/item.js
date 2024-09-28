

export default function Item ({name, quantity, category}){

    return(
      <div>
        <li className="inline-block border border-black bg-blue-500 mt-5 mb-10 mx-6 px-5 py-3">
          <span className="font-extrabold">{name}<br/></span>
          <span className="text-black">{quantity}<br/></span>
          <span className="text-black">{category}<br/></span>
        </li>
      </div>
    );
};

