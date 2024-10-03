// dom element 

const gameCon = document.querySelector(".container")
 user_img = document.querySelector(".user_img img")
 cpu_img = document.querySelector(".cpu_img img")
 result = document.querySelector(".result")
 option_img = document.querySelectorAll(".op_img")


option_img.forEach( (a,b)=>{
    a.addEventListener("click", (e)=>{
        a.classList.add("active")

        // remove acive class
    option_img.forEach((a1,b1)=>{
        b !== b1 && a1.classList.remove("active");

            
        })
        // target the img 
        let imgsrc = e.target.querySelector("img").src
        user_img.src  = imgsrc
        let ramNum = Math.floor(Math.random () *3)
        //
        let cpuimg = ["images/rock.png","images/paper.png","images/scissors.png" ]
        cpu_img.src = cpuimg[ramNum]
        //
        let cpuValue = ["R","P","S"][ramNum]
        //
        let userValue = ["R","P","S"][b]  
        //
        let outcome = {
            RR:"draw",                 
            PP:"draw",
            SS:"draw",
            RP:"CPU",
            RS:"CPU",
            PS:"CPU",
            SP:"USER",
            PR:"USER",
            SR:"USER"
        }
        let outcomevalue = outcome[cpuValue + userValue]
        result.textContent = userValue === cpuValue ? "draw" : `${outcomevalue} won!!`  
     
    })
});