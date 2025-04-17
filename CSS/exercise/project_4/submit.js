function sendit(){
    const userid = document.getElementById('userid')
    const userpw = document.getElementById('userpw')
    const usesrpw_re =document.getElementById('userpw_re')
    const name = document.getElementById('name')
    const ph = document.getElementById('ph')

    // 입력 조건
    const expIdText=/^[A-Za-z0-9]{4,20}$/
    const expPwText=/^(?=.*[A-Za-z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z0-9!@#$%^&*]{8,20}$/
    const expHpText =/^\d{3}-\d{3,4}-\d{4}/
   const expNameText = /^[가-힣]$/


    // 조건문
    if (userid.value ===''){
        alert('아이디를 입력해주세요.')
        userid.focus()
        return false
    }
    if (!expIdText.test(userid.value)){
        alert('아이디는 4자이상 & 20자이하의 영문자 및 숫자로 입력하세요.')
        userid.focus()
        return false
    }
    if (!expPwText.test(userpw.value)){
        alert("비밀번호는 8이상 & 20이하로 숫자, 영문자, 특수문자를 1개이상 포함하세요")
        userpw.focus()
        return false
    }
    if(userpw.value != usesrpw_re.value){
        alert('비밀번호가 일치하지않습니다.')
        userpw.focus()
        return false
    }
    if (!expNameText.test(name.value)) {
        alert("이름은 한글로 입력하세요");
        name.focus();
        return false;
      }
      if (!expHpText.test(ph.value)) {
        alert(
          "휴대폰번호 형식이 일치하지 않습니다.\n 010-0000-0000 형식으로 써주세요"
        );
        ph.focus();
        return false;
      }
    return true
}