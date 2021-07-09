function createCards() {
  let card = [
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

  let cards = React.createElement(
    "div",
    { className: "cards" },

    card.map((item, i) =>
      React.createElement(
        "div",

        { className: "card", key: i },

        React.createElement("img", {
          className: "card-img-top",
          src: item.img,
          key: i,
        }),
        React.createElement(
          "div",
          { className: "card-body" },
          React.createElement("h5", { className: "card-title" }, item.title),
          React.createElement(
            "p",
            { className: "card-text" },
            item.description
          ),
          React.createElement(
            "a",
            { className: "btn btn-primary", href: item.link },
            "Look"
          )
        )
      )
    )
  );

  return cards;
}

function createNavBar() {
  let liItems = [
    { name: "Home", url: "#" },
    { name: "News", url: "#" },
    { name: "Conctact", url: "#" },
    { name: "About", url: "#" },
  ];

  let navbar =
    // list and items
    React.createElement(
      "div",
      { className: "", id: "#" },

      React.createElement(
        "ul",
        { className: "list" },

        liItems.map((item, i) =>
          React.createElement(
            "li",

            { className: "itemList", key: i },

            React.createElement(
              "a",
              { className: "itemA", key: i, href: item.url },
              item.name
            )
          )
        ),

        React.createElement(
          "li",
          { className: "itemList search" },
          React.createElement(
            "div",
            { className: "divSearch" },
            //serach bar
            React.createElement(
              "form",
              { className: "" },

              React.createElement("input", {
                className: "",
                placeholder: "Search",
                type: "Text",
              }),

              React.createElement(
                "button",
                { className: "button", type: "submit" },
                "Search"
              )
            )
          )
        )
      )
    );
  return navbar;
}

function rCE(tag, [props], [...childs]) {
  return React.createElement(tag, props, childs);
}

let elements = [createNavBar(), createCards()];

ReactDOM.render(elements, document.getElementById("root"));
