let ani = fetch("https://hp-api.herokuapp.com/api/characters/students");
ani
  .then((yo1) => {
    console.log(yo1.status);
    console.log(yo1.ok);
    return yo1.json();
  })
  .then((yo2) => {
    console.log(yo2);
  });
