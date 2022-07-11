var student_array = []

function submit()
{
    var Guestname = document.getElementById("list1").value;
    student_array.push(Guestname);
    console.log(student_array);
}

function show_tell()
{
    document.getElementById("name_in_list").innerHTML=student_array;
}
function search_and_find()
{
    var name=document.getElementById("searching_name_of_student").value
    var found = 0
    for(i=0;i<student_array.length; i++)
    {
    if(name==student_array[i])
    {
        found = found+1;
    }
    }
    document.getElementById("result").innerHTML="The name was found"+found+"times !"
}