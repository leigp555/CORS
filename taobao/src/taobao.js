//COOS 跨域访问
let request=new XMLHttpRequest()

request.open("GET","http://baidu.com:7777/baidu.json")

request.onreadystatechange=()=>{
    if(request.readyState===4 && request.status===200){
       const obj=JSON.parse(request.response)
       obj.forEach(item => {
        const xx=document.createElement('div')
        xx.innerText=item.name
        red.appendChild(xx)})
    }

}
request.send()



