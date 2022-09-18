var weeklist = [{label:"Week 1" , url:"#"} ,{label:"Week 2" ,
 url:"https//google.com"}]
listWeeklyItems(weeklist,"weeklist");


function listWeeklyItems(weekItem,listElementName){
    let ol = window.weekList;
    if(ol){
        weekItem.forEach(element => {
            let anchor = document.createElement('a');
            anchor.innerHTML = element.label;
            anchor.href = element.url;
            anchor.target = "_blank";


            let li = document.createElement('li');
            li.appendChild(anchor);
            ol.appendChild(li);
        });
    }
}