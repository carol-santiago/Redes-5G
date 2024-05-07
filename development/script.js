document.addEventListener("DOMContentLoaded", function () {
  const menuItems = document.querySelectorAll("#simple-menu a");
  const sections = document.querySelectorAll("article section");

  // Hide all sections except the first one
  sections.forEach((section, index) => {
    if (index !== 0) {
      section.style.display = "none";
    }
  });

  menuItems.forEach((item) => {
    item.addEventListener("click", function (event) {
      event.preventDefault();

      // Remove current class from all items
      menuItems.forEach((item) => {
        item.classList.remove("current");
      });

      // Add current class to the clicked item
      event.currentTarget.classList.add("current");

      // Hide all sections except the target one
      const targetId = event.currentTarget.getAttribute("href").substring(1);
      sections.forEach((section) => {
        if (section.id === targetId) {
          section.style.display = "block";
        } else {
          section.style.display = "none";
        }
      });
    });
  });
});

// document.addEventListener("DOMContentLoaded", function () {
//     const menuItems = document.querySelectorAll("#simple-menu a");

//     menuItems.forEach((item) => {
//       item.addEventListener("click", function (event) {
//         // Remove current class from all items
//         menuItems.forEach((item) => {
//           item.classList.remove("current");
//         });

//         // Add current class to the clicked item
//         event.currentTarget.classList.add("current");
//       });
//     });
//   });
