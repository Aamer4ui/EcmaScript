const MapAssign = (cont) => cont.map((kuch) =>
    ` ${kuch.name} heir to this ${kuch.designation} and your location is ${kuch.city}`

);
console.log(
    MapAssign([{
            name: "Aamer",
            designation: "UI Dev",
            city: "HYD"
        },
        {
            name: "Sohel",
            designation: "React Dev",
            city: "Pune"
        },
        {
            name: "Ansari",
            designation: "PHP Dev",
            city: "Bang"
        },
        {
            name: "Salman",
            designation: "Node Dev",
            city: "Mum"
        },
    ]));