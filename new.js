let arr = [
  { id: 1, name: "john", age: "18", profession: "developer" },
  { id: 2, name: "jack", age: "20", profession: "developer" },
  { id: 3, name: "karen", age: "19", profession: "admin" },
];

function PrintDeveloperbyMap() {
  arr.map((item, i) => {
    if (item.profession == "developer") {
      console.log(item);
    }
  });
}

function PrintDeveloperbyForEach() {
  arr.forEach((item, i) => {
    if (item.profession == "developer") {
      console.log(item);
    }
  });
}

function addData() {
  let newdata = { id: 4, name: "susan", age: "20", profession: "intern" };
  arr.push(newdata);
  console.log(newdata);
}

function removeAdmin() {
  arr = arr.filter((item) => item.profession !== "admin");
  console.log(arr);
}

function concatenateArray() {
  let arr2 = [
    { id: 4, name: "juhi", age: "48", profession: "admin" },
    { id: 5, name: "ally", age: "25", profession: "developer" },
    { id: 6, name: "rosy", age: "39", profession: "intern" },
  ];

  const newarr = arr.concat(arr2);
  console.log(newarr);
}
