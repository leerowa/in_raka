var crudApp = new function(){
    //수강 데이터를 담을 json형식의 배열 만들기
    this.myClass = [
        { ID : '1', Class_Name:'운영체제', Category:'전공필수',credit:'3'},
        { ID : '2', Class_Name:'컴퓨터구조론', Category:'전공필수',credit:'4'},
        { ID : '3', Class_Name:'심리학의 이해', Category:'교양필수',credit:'2'},
    ]
    //선택가능한 항목
    this.Category=['전공필수','전공선택','교양필수','교양선택'];
    //table header에 담길 데이터 배열에 담기
    this.col = [];

    //테이블 생성메서드
    this.creatTable = ()=>{
   // col에 table header에 해당하는 데이터(table class의 key값)를 넣어주는 코드 
        for(var i=0;i<this.myClass.length;i++){
           //각 개체들 속 key값 순회
           for(var key in this.myClass[i]){
            //key를 col배열에 담기
            if(this.col.indexOf(key)===-1) this.col.push(key);
           } 
        }

        //
        var table = document.createElement('table');
        table.setAttribute('id','classTable');

        //tr:새로운 행 추가
        var tr = table.insertRow(-1);
        
        //th 작성
        for(var h = 0;h<this.col.length;h++){
            var th = document.createElement('th');
            th.innerHTML=this.col[h];
            tr.appendChild(th)
        }

        //td작성
        for(var i =0;i<this.myClass.length;i++){
            //table에 일단 한 열 추가 -1은 맨마지막 추가 
            tr = table.insertRow(-1);
            //table header길이만큼 순회하면서 거기 해당되는 데이터 갖고오기
            for(var j=0; j<this.col.length;j++){
                var tableCell = tr.insertCell();
                tableCell.innerHTML = this.myClass[i][this.col[j]];
            }
            

            // 버튼만들기
            this.td = document.createElement('td');
            //update버튼
            tr.appendChild(this.td);
            var btnUpdate = document.createElement('input');
            btnUpdate.setAttribute('type','button');
            btnUpdate.setAttribute('value','update');
            btnUpdate.setAttribute('id','Edit'+i);
            btnUpdate.setAttribute('style','background-color:#44CCEB;');
            btnUpdate.setAttribute('onclick','crudApp.Update(this)'); //클릭시 실행할 메서드
            this.td.appendChild(btnUpdate);

            //save 버튼
            tr.appendChild(this.td);
            var btnSave = document.createElement('input');
            btnSave.setAttribute('type','button');
            btnSave.setAttribute('value','Save');
            btnSave.setAttribute('id','Save'+i);
            btnSave.setAttribute('style','display:none;');
            btnSave.setAttribute('onclick','crudApp.Save(this)'); //클릭시 실행할 메서드
            this.td.appendChild(btnSave);

            //Delete 버튼
            this.td = document.createElement('td');
            tr.appendChild(this.td);
            var btnDelete = document.createElement('input');
            btnDelete.setAttribute('type','button');
            btnDelete.setAttribute('value','Delete');
            btnDelete.setAttribute('id','Delete'+i);
            btnDelete.setAttribute('style','background-color:#EB5650;');
            btnDelete.setAttribute('onclick','crudApp.Delete(this)'); //클릭시 실행할 메서드
            this.td.appendChild(btnDelete);
        }
        //입력 행 추가
        tr = table.insertRow(-1);
        for(var j = 0; j<this.col.length;j++){
            var newCell =tr.insertCell(-1);
            if(j>=1){
                 //선택항목 만들기
              if(j==2){
                 var select = document.createElement('select');
                 select.innerHTML=`<option value=" "></option>`;
                    for(var k=0;k<this.Category.length;k++){
                    select.innerHTML = select.innerHTML +`<option value="${this.Category[k]}">${this.Category[k]}</option>`;
                  }
                newCell.appendChild(select);
                } else {
                 var tBox =document.createElement('input');
                tBox.setAttribute('type','text');
                tBox.setAttribute('value','');
                newCell.appendChild(tBox);
                }
            } 
              
        }
        //create버튼 만들기
        this.td = document.createElement('td');
        tr.appendChild(this.td);
        var btnCreate = document.createElement('input');
        btnCreate.setAttribute('type','button');
        btnCreate.setAttribute('value','Create');
        btnCreate.setAttribute('id','Create'+i);
        btnCreate.setAttribute('style','background-color:#207DD1;');
        btnCreate.setAttribute('onclick','crudApp.CreateNew(this)'); //클릭시 실행할 메서드
        this.td.appendChild(btnCreate);

        
        

        var div = document.getElementById('container');
        div.innerHTML = "수강관리 앱"
        div.appendChild(table);
    }
    this.Delete = (oButton) => {
        //console.log(oButton); delete버튼이 눌린row에 해당하는 input태그
        var targetIdx = oButton.parentNode.parentNode.rowIndex; //oButton을 감싸고 있는 태그
        this.myClass.splice((targetIdx-1),1);
        this.creatTable();
    }
    this.CreateNew = (oButton) => {
        var writtenInx = oButton.parentNode.parentNode.rowIndex;
        var trDate = document.getElementById('classTable').rows[writtenInx];
        var obj = [];

        //tr데이터에서 td속 key:value만 뽑아서 obj안에 저장
        for(var i = 1;i<this.col.length;i++){
            var td = trDate.getElementsByTagName("td")[i];
            if(td.childNodes[0].getAttribute('type')==='text'||td.childNodes[0].tagName === 'SELECT'){
                var txtVal = td.childNodes[0].value;

                if(txtVal != ''){
                    obj[this.col[i]] = txtVal;
                }
                else{
                    obj = '';
                    alert('모든 항목 입력 바람');
                    break;
                }
            }

        }
        obj[this.col[0]] = this.myClass.length + 1;
        this.myClass.push(obj);
        this.creatTable();
    }


    this.Update = (oButton) => {
        var writtenInx = oButton.parentNode.parentNode.rowIndex;
        var trData = document.getElementById('classTable').rows[writtenInx];
    //Update구현 기존 입력 데이터 갖고오기
         for(var i = 1;i<this.col.length;i++){
        //기존 입력 데이터 담은 새로운 input/select 띄우기
          if(i === 2){
              var td =trData.getElementsByTagName("td")[i];
              var select =document.createElement("select");
              select.innerHTML = `<option value="${td.innerText}">${td.innerText}</option>`
              for(var k=0;k<this.Category.length;k++){
                select.innerHTML = select.innerHTML +
                     `<option value="${this.Category[k]}">${this.Category[k]}</option>`;
                  
             }
            td.innerText ='';
            td.appendChild(select);
            
           }else {
              var td = trData.getElementsByTagName('td')[i];
              var input = document.createElement('input');
              input.setAttribute("type","text");
              input.setAttribute("value",td.innerText);
              td.innerText ='';
              td.appendChild(input);
           }
        }

        var btSave = document.getElementById('Save'+(writtenInx-1));
        btSave.setAttribute('style','display:block; background-color:#2DBF64;');
        oButton.setAttribute('style','display:none;');

    }
    //save 하기 - 변경값 저장
    this.Save = (oButton) => {
        var writtenInx = oButton.parentNode.parentNode.rowIndex;
        var trData = document.getElementById('classTable').rows[writtenInx];

        //새로 입력된 값으로 myClass 값 갱신
        for(var i = 1;i<this.col.length;i++){
            var td = trData.getElementsByTagName("td")[i];
            if(td.childNodes[0].getAttribute('type')==='text'||td.childNodes[0].tagName === 'SELECT'){
                this.myClass[writtenInx-1][this.col[i]] = td.childNodes[0].value;
                
            }
        }
        this.creatTable();

    }
    
}


crudApp.creatTable();
