
let form = document.querySelector("form");
form.addEventListener("submit", async function(e){
    e.preventDefault()
  
   try {
        let courses    = form.courses.value;
        let gradePoint = form.gradePoint.value;
        let unit = form.unit.value

        let res = await fetch("/main",{
        method:"POST",
        body:JSON.stringify({courses,unit,gradePoint}),
        headers:{ "Content-Type":"application/json"}
        })

        let data = await res.json();
        console.log(data)
        location.assign("/main")
   } 

    catch (error) {
       console.log(error)
   }
      
}) 