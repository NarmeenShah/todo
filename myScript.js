
	function myfunc()
	{
	var title=document.getElementById("title").value;
	var type=document.getElementById("type").value;
	var description=document.getElementById("description").value;
	console.log(`title: ${title} , type: ${type}, description: ${description}`);
            
    		var tr=document.createElement("tr");
		    
		    var td1=tr.insertCell();		    
		    td1.appendChild(document.createTextNode(title));
		    tr.appendChild(td1);
		    
		    var td2=tr.insertCell();
		    td2.appendChild(document.createTextNode(type));
		    tr.appendChild(td2);
		    
		    var td3=tr.insertCell();
		    td3.appendChild(document.createTextNode(description));
		    tr.appendChild(td3);		    
		    
		    document.getElementById("tbody").appendChild(tr);		  
    }