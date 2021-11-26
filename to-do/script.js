const button = document.getElementById('addBtn');
const txt = document.getElementById('txt-box');
const taskBox = document.getElementById('lst');


button.addEventListener('click',function(){
  var val = txt.value;
  if(val==""){alert("The input field is empty!");}
  else{
    var l = document.createElement('li');
    var para = document.createTextNode(val);
    l.appendChild(para);
    l.className = "pending";

      //If clicked on the element, mark it as done
    l.onclick = function(){
      if(l.style.textDecoration!='line-through')
      {l.style.textDecoration = "line-through";
      l.className = "task-done";}
      //If already marked as done and then clicked, then unmark it
      else{
        l.style.textDecoration = "none";
        l.className = "pending";
      }
    }

    //Appending the close button
    var span = document.createElement('span');
    var tx = document.createTextNode('   \u00D7');
    span.className = 'close';
    span.appendChild(tx);
    l.appendChild(span);
    span.onclick = function(){
      var parent = span.parentElement;
      parent.style.display = "none";
    }

    //Appending the list item
    taskBox.appendChild(l);

    //Resetting the text-box
    txt.value = "";
  }
});
