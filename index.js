function submit() {
    let name, hindi, english, mathematics, total, percentage;
    name = document.getElementById("name").value;
   
    english = document.getElementById("english").value;
    
    hindi = document.getElementById("hindi").value;
   
    mathematics = document.getElementById("mathematics").value;
    
    total = +hindi + +english + +mathematics;
 
    percentage = total/3;
   
    let result;
    if (percentage > 75) {
        result = "Pass with Distinction"
    }
    
    else if((hindi<33 && english<33)|| (hindi<33 && mathematics<33)||(mathematics<33 && english<33) ){
        result="fail"
    }
else if(hindi<33 || english<33 || mathematics<33 ){
    result="supply"
}

else if (percentage > 33) {
    result = "Pass"}
    else {
        result = "fail"
    }
    
    if (name === "") {
        document.getElementById("error").innerHTML = "please enter a name";
       
    }
   if(english===""){
        document.getElementById("error0").innerHTML = "please enter a value between 1 to 100"}
        else{
            document.getElementById("error0").innerHTML = ""}
        
    
    if(hindi===""){
        document.getElementById("error1").innerHTML = "please enter a value between 1 to 100"
    }
    else{
        document.getElementById("error1").innerHTML = ""}

    if(mathematics===""){
        document.getElementById("error2").innerHTML = "please enter a value between 1 to 100"
    }
    else{
        document.getElementById("error2").innerHTML = ""}
 {
    if (english < 0 || english > 100) {
        document.getElementById("error0").innerHTML = "please enter a value between 1 to 100"
    }
    if (hindi < 0 || hindi > 100) {
        document.getElementById("error1").innerHTML = "please enter a value between 1 to 100"
    }
    if (mathematics < 0 || mathematics > 100) {
        document.getElementById("error2").innerHTML = "please enter a value between 1 to 100"
    }
    else {
        var row = 1;
        var display = document.getElementById("display");
        var newRow = display.insertRow(row);
        var cell1 = newRow.insertCell(0);
        var cell2 = newRow.insertCell(1);
        var cell3 = newRow.insertCell(2);
        var cell4 = newRow.insertCell(3);
        var cell5 = newRow.insertCell(4);
        var cell6 = newRow.insertCell(5);
        var cell7 = newRow.insertCell(6);

        cell1.innerHTML = name;
        cell2.innerHTML = +english;
        cell3.innerHTML = +hindi;
        cell4.innerHTML = +mathematics;
        cell5.innerHTML = +total;
        cell6.innerHTML = +percentage.toFixed(2) + "%";
        cell7.innerHTML = result;

        row++;
    }
}
}

