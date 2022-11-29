var arrayVaccineName = [] 
var arrayVaccineid = [] 
var arrayVaccineCost = [] 
var arrayVaccinePhase  = [] 


function addVaccine(){
    document.getElementById("vaccineadd").style.display="block";
    document.getElementById("costreal").style.display="none";
    document.getElementById("vaccineall").style.display="none";
    document.getElementById("threephase").style.display="none";
    document.getElementById("idsearch").style.display="none";
}

function realCost(){
    document.getElementById("vaccineadd").style.display="none";
    document.getElementById("costreal").style.display="block";
    document.getElementById("vaccineall").style.display="none";
    document.getElementById("threephase").style.display="none";
    document.getElementById("idsearch").style.display="none";
}

function allVaccine(){
    document.getElementById("vaccineadd").style.display="none";
    document.getElementById("costreal").style.display="none";
    document.getElementById("vaccineall").style.display="block";
    document.getElementById("threephase").style.display="none";
    document.getElementById("idsearch").style.display="none";

   
    var length = arrayVaccineid.length;
    
    document.getElementById("all").innerHTML = "";


    for(i=0; i<length; i++)
    {

        document.getElementById("all").innerHTML +=

                        arrayVaccineid[i] +
                           arrayVaccineName[i] +
                           arrayVaccineCost[i] +
                           arrayVaccinePhase[i] + "<br>";
           
            
    }
    
    if (flag==false){
        alert("Record Not Found");
    }

}

function phase3(){
    document.getElementById("vaccineadd").style.display="none";
    document.getElementById("costreal").style.display="none";
    document.getElementById("vaccineall").style.display="none";
    document.getElementById("threephase").style.display="block";
    document.getElementById("idsearch").style.display="none";

    var length = arrayVaccineid.length;
    
    

    document.getElementById("allthree").innerHTML = ""; 
    document.getElementById("allthree").innerHTML += "<table style='background-color:blue; width:30%; border:solid black'>"; 
    document.getElementById("allthree").innerHTML += "<tr>"+
                                                    "<th>Vaccine Id </th>"  + 
                                                    "<th>Vaccine Name </th>" + 
                                                    "<th>Vaccine Cost </th>" +
                                                    "<th>Vaccine Phase </th>" +
                                                    "</tr><br>"; 

    var flag = false;
    for(i=0; i<length; i++)
    {
        if(arrayVaccinePhase[i]==3)
        {
        document.getElementById("allthree").innerHTML +=

                        "<tr>" + 
                        "<td>" +  arrayVaccineid[i]    + "</td>" +
                        "<td>" +  arrayVaccineName[i]  + "</td>" +
                        "<td>" +  arrayVaccineCost[i]  + "</td>" +
                        "<td>" +  arrayVaccinePhase[i] + "</td>" +
                        "</tr></br>"; 
        }  
            
    }
    
    if (flag==false){
        alert("Record Not Found");
    }

    document.getElementById("allthree").innerHTML += "</table>"; 

}

function searchid(){
    document.getElementById("vaccineadd").style.display="none";
    document.getElementById("costreal").style.display="none";
    document.getElementById("vaccineall").style.display="none";
    document.getElementById("threephase").style.display="none";
    document.getElementById("idsearch").style.display="block";
}





function saveVaccine(){
    var name,id,price,phase;
    
    name = document.getElementById("vaccinename").value;
    id = document.getElementById("vaccineid").value;
    price = parseInt(document.getElementById("vaccineprice").value);
    phase = parseInt(document.getElementById("vaccinephase").value);
    arrayVaccineCost.push(price);
    arrayVaccineName.push(name);
    arrayVaccinePhase.push(phase);
    arrayVaccineid.push(id);

    alert("Record Saved")
}


function searchVaccineCost(){
    var id;
    id=document.getElementById("vaccineid").value;
    
    var length = arrayVaccineid.length;
    var flag = false;

    for(i=0; i<length; i++)
    {
        if(id == arrayVaccineid[i])
        {
            var predictedprice = arrayVaccineCost[i]
            var findcost = predictedprice - 50
            
            document.getElementById("price").value =predictedprice;
            document.getElementById("findcost").value = findcost;
            flag=true;
            break;

        }
    }
    if (flag==false){
        alert("Record Not Found");
    }
}




function searchAll(){
    var id;
    id=document.getElementById("vaccineidsearch").value;
    var length = arrayVaccineid.length;
    var flag = false;
    
    for(i=0; i<length; i++)
    {
        if(id == arrayVaccineid[i])

        {
            document.getElementById("allvaccineprice").value = arrayVaccineCost[i];
            document.getElementById("allvaccinename").value = arrayVaccineName[i];
            document.getElementById("allvaccinephase").value = arrayVaccinePhase[i];
            document.getElementById("allvaccineid").value = arrayVaccineid[i];
            
            flag=true;
            break;
        }
    }
    if (flag==false){
        alert("Record Not Found");
    }
   
}