
document.getElementById("addExp").addEventListener("click",additem);


//add item in localstorge
function additem(e){
    e.preventDefault();

    // getting expriment ,description and category 
    var expVal=document.getElementById('exp').value;
    var decVal=document.getElementById('dec').value;
    var catVal=document.getElementById('category').value;

    document.getElementById('exp').value="";
    document.getElementById('dec').value="";
    document.getElementById('category').value="";

    // set input codition  
    if(expVal=='' || decVal=='' || catVal=='')
    {
        alert("plaese fill information");
    }
    else
    {
        var flag=0
        for(var i=0;i<localStorage.length;i++)
        {
                        var x=localStorage.key(i);
                        if(decVal==x)
                        {
                            alert("your data alredy submitted");
                            flag=1;
                        }
            
        }
    
}

 // create object
  if(flag==0)
  {
                          var myobj={
                          exp: expVal,
                          dec : decVal,
                          category:catVal
                          }

                  // object convert to the serilised
                  var myobjSerilized=JSON.stringify(myobj);


                      //store value in local storage key is email
                      localStorage.setItem(decVal,myobjSerilized);
                
  }

  // call list 
dataShow();



}

// delete  description

function deletedec(dec){
    localStorage.removeItem(dec);
    dataShow();

}


// edit data from localstorage
function editdata(exp,dec,category){

    document.getElementById('exp').value = exp;
    document.getElementById('dec').value = dec;
    document.getElementById('category').value = category;
    deletedec(dec);
 }


//  printing local storage data
function dataShow(){
    var parentNode = document.getElementById('ulList');
    parentNode.innerHTML="";
                        for(var i=0;i<localStorage.length;i++)
                         {
                            var x=localStorage.key(i);
                            var expDetailsObj=JSON.parse(localStorage.getItem(x));
                            
                            
                            const childHTML = `<li id=${expDetailsObj.dec}> ${expDetailsObj.exp} - ${expDetailsObj.dec}- ${expDetailsObj.category}
                                                    <button onclick=deletedec('${expDetailsObj.dec}')> Delete expriment </button>
                                                    <button onclick=editdata('${expDetailsObj.exp}','${expDetailsObj.dec}','${expDetailsObj.category}')>Edit expriment </button>
                                                </li>`
                        
                            parentNode.innerHTML = parentNode.innerHTML + childHTML;
                         }
                   }

// list call
    dataShow()