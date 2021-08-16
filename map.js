const MapAssign = (cont) => cont.map((kuch) =>
    `Name: ${kuch.name} 
    Position: ${kuch.designation} 
    Location: ${kuch.city}`

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