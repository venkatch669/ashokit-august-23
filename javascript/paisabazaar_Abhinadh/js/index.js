// Selct family icons
const select = function (divId) {
  var element = document.getElementById(divId);

  if (element.classList.contains("deselect-member")) {
    element.classList.remove("deselect-member");
    element.classList.add("select-member");
  } else {
    element.classList.remove("select-member");
    element.classList.add("deselect-member");
  }
};

// Switch form pages
const hide = function (id1, id2) {
  var divToHide = document.getElementById(id1);
  divToHide.classList.add("hidden");

  var divToShow = document.getElementById(id2);
  divToShow.classList.remove("hidden");
};

let divs = document.querySelectorAll(".hover");

// navbar dropdown
divs.forEach((e) => {
  var id = e.id + "-li";
  let element = document.getElementById(id);

  e.addEventListener("mouseenter", () => {
    element.classList.remove("hidden");
  });

  e.addEventListener("mouseleave", () => {
    element.classList.add("hidden");
  });
});

// Page - 5 check boxes
let checkFields = document.querySelectorAll(".check-field");
checkFields.forEach((element) => {
  element.addEventListener("click", () => {
    let eleId = element.id;
    let id = "check-" + eleId.substring(eleId.length - 1);
    let checkBox = document.getElementById(id);

    if (element.classList.contains("deselect-member")) {
      element.classList.remove("deselect-member");
      element.classList.add("select-member");
      checkBox.checked = !checkBox.checked;
    } else {
      element.classList.remove("select-member");
      element.classList.add("deselect-member");
      checkBox.checked = !checkBox.checked;
    }
  });
});

const changeSelect = (element) => {
  element.checked = !element.checked;
};

function changeSelect1(element) {
  element.checked = !element.checked;
}

let checkBoxes = document.querySelectorAll(".check-box");
checkBoxes.forEach((element) => {
  element.addEventListener("click", () => changeSelect1(element));
});
