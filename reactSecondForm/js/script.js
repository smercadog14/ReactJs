let cardsArray = [
  {
    img: "./assets/profile.png",
    title: "titulo 1",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora enim culpa delectus dolores impedit facere minima, aut laudantium quae est placeat tenetur autem perspiciatis quos qui pariatur recusandae quam nulla.",
    link: "",
  },
  {
    img: "./assets/profile.png",
    title: "titulo 2",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora enim culpa delectus dolores impedit facere minima, aut laudantium quae est placeat tenetur autem perspiciatis quos qui pariatur recusandae quam nulla.",
    link: "",
  },
  {
    img: "./assets/profile.png",
    title: "titulo 3",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora enim culpa delectus dolores impedit facere minima, aut laudantium quae est placeat tenetur autem perspiciatis quos qui pariatur recusandae quam nulla.",
    link: "",
  },
  {
    img: "./assets/profile.png",
    title: "titulo 4",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora enim culpa delectus dolores impedit facere minima, aut laudantium quae est placeat tenetur autem perspiciatis quos qui pariatur recusandae quam nulla.",
    link: "",
  },
];

let liItems = [
  { name: "Home", url: "#" },
  { name: "News", url: "#" },
  { name: "Conctact", url: "#" },
  { name: "About", url: "#" },
];

function rCE(tag, [props], [...childs]) {
  return React.createElement(tag, props, childs);
}

function CreateNavBar(props) {
  return (
    <div>
      <ul className="list">
        {props.liItems.map((item, i) => (
          <li className="itemList" key={i}>
            <a className="itemA" href={item.url}>
              {item.name}
            </a>
          </li>
        ))}

        <li className="itemList search">
          <div className="divSearch">
            <form>
              <input placeholder="Search" type="Text"></input>
              <button className="button" type="submit">
                {"Search"}
              </button>
            </form>
          </div>
        </li>
      </ul>
    </div>
  );
}

function CreateCards(props) {
  return (
    <div className="cards">
      {props.cardsArray.map((item, i) => (
        <div className="card">
          <img className="card-img-top" key={i} src={item.img} />
          <div className="card-body">
            <h5 className="card-title">{item.title}</h5>
            <p className="card-text">{item.description}</p>
            <a className="btn btn-primary" href={item.link}>
              {" "}
              Details
            </a>
          </div>
        </div>
      ))}
    </div>
  );
}

let elements = [
  <CreateNavBar liItems={liItems} />,
  <CreateCards cardsArray={cardsArray} />,
];

ReactDOM.render(elements, document.getElementById("root"));
