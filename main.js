var guest_array = [];
var name_of_people;
function submit(){
     name_of_people = document.getElementById("guest_name_input").value ;
       guest_array.push(name_of_people);
       console.log(guest_array);
    document.getElementById("display_people").innerHTML = guest_array;
};
function show(){
    var display = [];
    for ( var k = 0; k < guest_array.length;k++){
        display.push("<h4> name - "+guest_array[k]+"</h4>"+"<br>");
        document.getElementById("display_people_list").innerHTML = display;
        console.log(display);
    };
};
function sorting(){
    guest_array.sort();
    console.log(guest_array);
    document.getElementById("display_people_sorted").innerHTML = guest_array;
}
function search(){
    var s  = document.getElementById("search_input").value ;
    var found = 0;
    var j;
    for (j= 0;j<guest_array.length; j++){
        if (s == guest_array[j]){
            found = found + 1;
        }
    }
    document.getElementById("para").innerHTML = "name found " + found + " times";
}