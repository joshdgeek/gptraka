let nav = document.querySelector(".sidebar");
  let span = document.querySelector(".span");
  let tog = 0;
  span.addEventListener("click", function()
  {

    if (tog === 0)
    {
      nav.style.right = "0px";
      tog = 1
    }
    else if (tog === 1)
    {
      nav.style.right = "-210px"
      tog = 0;
    }

    // almost done
  })