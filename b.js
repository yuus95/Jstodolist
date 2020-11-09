const input =document.getElementById("input"); // input.value 데이터가져오기위해서
const button =document.getElementById("button"); //button클릭시 함수 활성화
const list =document.getElementById("list");
let textbox=[];
let cnt = 1;

button.addEventListener('click',clickBtutton);

//입력버튼 클릭시 함수실행
function clickBtutton(){
  textbox[cnt]=input.value;
  console.log(textbox);
  let temp = document.createElement('li');
  temp.setAttribute("class","list-group-item");
  temp.setAttribute("id","li"+cnt);
  
  if(input.value){ 
    temp.textContent=input.value;
    temp.innerHTML += "<button style='float: right;' class='btn btn-outline-secondary' type='button' onclick='remove("+cnt+")'>삭제</button>";
    temp.innerHTML+= "   <button  style='float: right;' type='button' class='btn btn-dark ' onclick ='edit("+cnt+")'>수정</button>";
    list.appendChild(temp);
    cnt++;
    input.value='';
    console.log("24cnt ",cnt);
  }
}


//삭제 
function remove(cnt) {
  var li = document.getElementById('li'+cnt);
  list.removeChild(li);
  textbox.splice(cnt,1);
  console.log(textbox);
}


//수정버튼
function edit(cnt){
  let temp = document.getElementById('li'+cnt);
  console.log(input.value);
  temp.innerText = textbox[cnt];
  temp.innerHTML+=  "<input id="+cnt+" type='text;' style=height:38px;' class='form-control'>"
  temp.innerHTML += "<button  type='button'  class='btn btn-dark ' onclick='editconfirm("+cnt+")'>수정하기</button>";
  temp.innerHTML += "<button  type='button'  style='margin-left:10px;'  class='btn btn-dark ' onclick='cancel("+cnt+")'>취소</button>";
}


//수정취소
function cancel(cnt){
  let temp = document.getElementById('li'+cnt);
  temp.innerText=textbox[cnt];
  temp.innerHTML += "<button style='float: right;' class='btn btn-outline-secondary' type='button' onclick='remove("+cnt+")'>삭제</button>";
  temp.innerHTML+= "   <button  style='float: right;' type='button' class='btn btn-dark ' onclick ='edit("+cnt+")'>수정</button>";
}

//내용수정 
function editconfirm(cnt){
  let temp1 = document.getElementById('li'+cnt);
  let temp = document.getElementById(cnt);
  console.log(temp.value);
  if(temp.value){ temp1.textContent= temp.value;
    temp1.innerHTML += "<button style='float: right;' class='btn btn-outline-secondary' type='button' onclick='remove("+cnt+")'>삭제</button>";
    temp1.innerHTML+= "   <button  style= 'float: right;' type='button' class='btn btn-dark ' onclick ='edit("+cnt+")'>수정</button>";
  } 
}



//https://popcorn16.tistory.com/126
//https://medium.com/@etiennerouzeaud/a-simple-crud-application-with-javascript-ebc82f688c59