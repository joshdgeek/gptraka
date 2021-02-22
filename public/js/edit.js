let course = document.querySelectorAll(".courses");
let point = document.querySelectorAll(".points");
let unit = document.querySelectorAll(".unit");
let btn = document.querySelectorAll(".btn");
let forms = document.querySelectorAll(".form");

let newArr = []

/*
for (let i=0;i<=btn.length;i++){
  newArr.push(unit[i]);
  console.log(ind)
}
*/


for (let i=0;i<=btn.length;i++){
    forms[i].addEventListener("submit", async function(e){
        e.preventDefault()

        let item = course[i].innerHTML;
        let nums = point[i].innerHTML;
        let units = unit[i].innerHTML;

       
        alert(item)

        try {
            let items = form.courses.value;
            items = item;
            //alert(items.length)
            let res = await fetch("/edit",{
                method:"POST",
                body:JSON.stringify({items, units,nums,index:i}),
                headers:{"Content-Type":"application/json"}
            })
            let data = await res.json();
            console.log(data)
            location.assign("/main")
       } 
    
        catch (error) {
           console.log(error)
       }
    })

}
