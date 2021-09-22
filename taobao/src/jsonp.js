
//jsonp 跨域访问

let script=document.createElement("script")
script.src="http://baidu.com:7777/car.js"
ff.style.listStyle='none'
window.xxx=(date)=>{
    date.forEach(element => {
        let li=document.createElement("li")
        li.innerHTML=`${JSON.stringify(element).replace("{","").replace("}","")}`
        ff.appendChild(li)

    });
}
document.body.appendChild(script)