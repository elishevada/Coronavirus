
var nameArray=[],jarr=[],tarr=[],aarr=[],rarr=[],barr=[],jindex=0,tindex=0,aindex=0,rindex=0,bindex=0;
function insert( ){
    var object={
            lastName:$("#lastName").val(),
            date:$("#date").val(),
            city:$("#city").val()
    };
    if("Jerusalem".localeCompare(object.city)==0)
       jarr.push(object);
    if("Telaviv".localeCompare(object.city)==0)
       tarr.push(object);
    if("Ashdod".localeCompare(object.city)==0)
       aarr.push(object);
    if("Rishonletzion".localeCompare(object.city)==0)
       rarr.push(object);
    if("Bneibrak".localeCompare(object.city)==0)
       barr.push(object);

    return object;
}



function update(){
    var mainObject = insert();
    nameArray.push(mainObject);
    nameArray.sort(function(list1,list2){
        if(list1.lastName > list2.lastName){return 1;}
        if(list1.lastName < list2.lastName){return -1;}
        if(list1.lastName == list2.lastName){return 0;}
    });
    console.log(nameArray);
}



function jerusalem(){
    jarr.sort(function(list1,list2){
        if(list1.lastName > list2.lastName){return 1;}
        if(list1.lastName < list2.lastName){return -1;}
        if(list1.lastName == list2.lastName){return 0;}
    });
    if(jarr[jindex]==null)
    jindex=0;
    if(jarr[jindex]!=null){
    $("#jb").text(jarr[jindex].lastName);
    jindex++;
    }
}


function ta(){
    tarr.sort(function(list1,list2){
        if(list1.lastName > list2.lastName){return 1;}
        if(list1.lastName < list2.lastName){return -1;}
        if(list1.lastName == list2.lastName){return 0;}
    });
    if(tarr[tindex]==null)
    tindex=0;
    if(tarr[tindex]!=null){
    $("#tb").text(tarr[tindex].lastName);
    tindex++;
    }
}


function ash(){
    aarr.sort(function(list1,list2){
        if(list1.lastName > list2.lastName){return 1;}
        if(list1.lastName < list2.lastName){return -1;}
        if(list1.lastName == list2.lastName){return 0;}
    });
    if(aarr[aindex]==null)
    aindex=0;
    if(aarr[aindex]!=null){
    $("#ab").text(aarr[aindex].lastName);
    aindex++;
    }
}


function rish(){
    rarr.sort(function(list1,list2){
        if(list1.lastName > list2.lastName){return 1;}
        if(list1.lastName < list2.lastName){return -1;}
        if(list1.lastName == list2.lastName){return 0;}
    });
    if(rarr[rindex]==null)
    rindex=0;
    if(rarr[rindex]!=null){
    $("#rb").text(rarr[rindex].lastName);
    rindex++;
    }
}


function bb(){
    barr.sort(function(list1,list2){
        if(list1.lastName > list2.lastName){return 1;}
        if(list1.lastName < list2.lastName){return -1;}
        if(list1.lastName == list2.lastName){return 0;}
    });
    if(barr[bindex]==null)
    bindex=0;
    if(barr[bindex]!=null){
    $("#bb").text(barr[bindex].lastName);
    bindex++;
    }
}


function gold(){
    $("#jb").css("color","yellow");
}



function main(){
    $("#button").click(update);
    $("#jbutton").click(jerusalem);
    $("#tbutton").click(ta);
    $("#abutton").click(ash);
    $("#rbutton").click(rish);
    $("#bbutton").click(bb);
    $("#jbutton2").click(gold);

    
}
$("document").ready(main);




