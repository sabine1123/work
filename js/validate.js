/**
 * 
 */

//姓名验证
$.validator.addMethod("checkName", function(value, element) {        
    var reg = /^([\u4e00-\u9fa5\·]{2,5})$/;
    return reg.test(value);
});

var vRuleName = {
    required:true,
    rangelength:[2,32],
    checkName: ""
};

var vMsgName = {
    required: "真实姓名不能为空",
    rangelength: "为了正常存提款，真实姓名与您银行帐户姓名必须一致",
    checkName: "名字格式不正确，只能输入中文"
};

//check account
function _verifyId(sId){    
    var reg = /^[a-zA-Z]{1}[a-zA-Z0-9]{5,11}$/;
    return reg.test(sId);
}
$.validator.addMethod("checkID", function(value, element) {  
    var reg = /^[a-zA-Z]{1}[a-zA-Z0-9]{5,11}$/;
    return reg.test(value);
});

var vRuleID = {
    required:true,
    rangelength: [6, 12],
    checkID:""
};

var vMsgID = {
    required: "账户名不能为空",
    rangelength: "账户名由6-12位英文字母与数字组成,且不能用数字开头",
    checkID:"只能由字母、数字组成,首位为字母"
};


//check password
$.validator.addMethod("checkPW", function(value, element) {          
    var reg = /^[a-zA-Z0-9]{6,12}$/;
    return reg.test(value);
});

var vRulePW = {
    required:true,
    rangelength: [6, 12],
    checkPW:""
};

var vMsgPW = {
    required: "登录密码不能为空",
    rangelength: "登录密码由6-12位英文字母与数字组成",
    checkPW: "只能由字母、数字组成"
};
var vMsgPWConfirm = {
    required: "确认密码不能为空",
    rangelength: "登录密码由6-12位英文字母与数字组成",
    checkPW: "只能由字母、数字组成",
    equalTo:"确认密码与登录密码不一致，请重新输入"
};

var vRulePWConfirm = {
    required:true,
    equalTo: "#Rpassword",
    rangelength: [6, 12],
    checkPW:""
};

//check new password
$.validator.addMethod("checkNewPW", function(value, element) {          
    var reg = /^[a-zA-Z0-9]{6,12}$/;
    return reg.test(value);
});

var vRuleNPW = {
    required:true,
    rangelength: [6, 12],
    checkPW:""
};

var vMsgNPW = {
    required: "登录密码不能为空",
    rangelength: "登录密码由6-12位英文字母与数字组成",
    checkPW: "只能由字母、数字组成"
};
var vMsgNPWConfirm = {
    required: "确认密码不能为空",
    rangelength: "登录密码由6-12位英文字母与数字组成",
    checkPW: "只能由字母、数字组成",
    equalTo:"确认密码与登录密码不一致，请重新输入"
};

var vRuleNPWConfirm = {
    required:true,
    equalTo: "#Cpassword",
    rangelength: [6, 12],
    checkPW:""
};


//check phone
function _verifyPhoneCN(sValue){
    var reg = /((13[0-9])|(14[5,7])|(15[0-9])|(17[6,7,8])|(18[0-9])|(19[0-9]))\d{8}$/;
    return reg.test(sValue);
}
//check phone no format for China
$.validator.addMethod("checkPhone_cn", function(value, element) {   
    var reg = /((13[0-9])|(14[0-9])|(15[0-9])|(17[0-9])|(18[0-9])|(19[0-9]))\d{8}$/;
    return reg.test(value);
});

var vRulePhoneCN = {
    required:true,
    maxlength:11,
    checkPhone_cn:""
};

var vMsgPhoneCN = {
    required: "请手机号码不能为空",
    maxlength: "请留下真实电话，以便领取优惠红利",
    checkPhone_cn: "请留下真实电话，以便领取优惠红利"
};

//check email
function _verifyEmail(sEmail){  
    var reg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return reg.test(sEmail);
}

$.validator.addMethod("checkEmail",function(value, element){
    var reg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return reg.test(value);
});

var vRuleEmail = {
    required:true,
    rangelength: [10, 32],
    checkEmail:""
};

var vMsgEmail = {
    required: "电子邮件不能为空",
    rangelength: "请填写正确邮箱，可及时获得优惠红利信息",
    checkEmail: "邮箱地址格式不正确，请重新输入"
};

var vMsgEmailPW = {
    required: "电子邮件不能为空",
    rangelength: "请填写正确邮箱",
    checkEmail: "邮箱地址格式不正确，请重新输入"
};


//验证码
var vRuleValidCode = {
    required:true,
};

var vMsgValidCode = {
    required: "验证码不能为空",
};

//check银行帐号
$.validator.addMethod("checkBankCardNo", function(value, element) {          
    var reg = /^[0-9]{15,19}$/;
    return reg.test(value);
});

var vRuleBankCardNo = {
    required:true,
    rangelength:[15,19],
    checkBankCardNo:""
};

var vMsgBankCardNo = {
    required: "银行卡号不能为空",
    rangelength: "为了正常存提款，请您填写真实的银行卡号",
    checkBankCardNo: "为了正常存提款，请您填写真实的银行卡号"
};


// 整数验证
$.validator.addMethod("checkisInt", function(value, element) {          
    var reg = /^\d+$/;
    return this.optional( element ) || ( reg.test(value) );
});

var vRulecheckisInt = {
        required:true,
        checkisInt: true
};

var vMsgcheckisInt = {
        required: "转账金额不能为空",
        checkisInt: "请输入正确金额(如:1,10,100)，该游戏平台不支持小数点转帐"
};

// 整数含小数点验证
$.validator.addMethod("checkisNum", function(value, element) {          
    var reg = /^(?:[1-9]\d*|0)?(?:\.\d+)?$/;
    return this.optional( element ) || ( reg.test(value) );
});

var vRulecheckisNum = {
        required:true,
        checkisNum: true
};

var vMsgcheckisNumD = {
        required: "存款金额不能为空",
        checkisNum: "请输入正确金额"
};

var vMsgcheckisNumW = {
        required: "提款金额不能为空",
        checkisNum: "请输入正确金额"
};

function _setValidate(sFormClass){    
    try {
        switch (sFormClass) {
            case "#nameF":
            setNameValid();
            break;  

        case "#registF":
            setRegistValid();
            break;

        case "#mailF":
            setMailValid();
            break;

        case "#phoneF":
            setPhoneValid();
            break;

        case "#changpasswordF":
            setChangePWValid();
            break;

            case "#inviteF":
            setInviteValid();
            break;

            case "#loginF":
            setLoginValid();
            break;

            case "#bindingF":
            setBindingValid();
            break;

            case "#forgetpwF":
            setForgetpwValid();
            break;

            case "#tansferF":
            setTtansferValid();
            break;

            case "#withdrawF":
            setWithdrawValid();
            break;
            
            case "#depositF":
            setDepositValid();
            break;  
            
        }
    } catch (e) {
    }
}//_setValidate


function setNameValid(){
    try {
        $("#nameF").validate({
            rules: {
              checkName: vRuleName,
            },
            messages: {
              checkName: vMsgName
            },
            errorElement: "span",
            errorPlacement: function(error, element) {  
                error.appendTo(element.parent().parent());  
            }      
        });
    } catch (e) {
    console.log(e.message);
    }
}//Name

function setMailValid(){
    try {
        $("#mailF").validate({
            rules: {
              checkEmail: vRuleEmail,
              checkValidCode:vRuleValidCode
            },
            messages: {
              checkEmail: vMsgEmail,
              checkValidCode:vMsgValidCode
            },
            errorElement: "span",
            errorPlacement: function(error, element) {  
                error.appendTo(element.parent().parent());  
            }      
        });
    } catch (e) {
    console.log(e.message);
    }
}//Mail

function setPhoneValid(){
    try {
        $("#phoneF").validate({
            rules: {
              checkPhone_cn: vRulePhoneCN,
              checkValidCode:vRuleValidCode
            },
            messages: {
              checkPhone_cn: vMsgPhoneCN,
              checkValidCode:vMsgValidCode
            },
            errorElement: "span",
            errorPlacement: function(error, element) {  
                error.appendTo(element.parent().parent());  
            }      
        });
    } catch (e) {
    console.log(e.message);
    }
}

function setRegistValid(){
    try {
        $("#registF").validate({

            rules: {
              checkID: vRuleID,
              checkPW: vRulePW,
              checkPWcon: vRulePWConfirm,
              checkPhone_cn: vRulePhoneCN,
              checkValidCode:vRuleValidCode

            },
            messages: {
              checkID: vMsgID,
              checkPW: vMsgPW,
              checkPWcon: vMsgPWConfirm,
              checkPhone_cn: vMsgPhoneCN,
              checkValidCode:vMsgValidCode

            },
            errorElement: "span",
            errorPlacement: function(error, element) {  
                error.appendTo(element.parent().parent());  
            }      
        });
    } catch (e) {
    console.log(e.message);
    }
}


function setChangePWValid(){
    try {
        $("#changpasswordF").validate({

            rules: {
              checkPW: vRulePW,
              checkNewPW: vRuleNPW,
              checkNewPWcon: vRuleNPWConfirm,

            },
            messages: {
              checkPW: vMsgPW,
              checkNewPW: vMsgNPW,
              checkNewPWcon: vMsgNPWConfirm,
            },
            errorElement: "span",
            errorPlacement: function(error, element) {  
                error.appendTo(element.parent().parent());  
            }      
        });
    } catch (e) {
    console.log(e.message);
    }
}

function setInviteValid(){
    try {
        $("#inviteF").validate({

            rules: {
              checkEmail: vRuleEmail,
            },
            messages: {
              checkEmail: vMsgEmailPW,
            },
            errorElement: "span",
            errorPlacement: function(error, element) {  
                error.appendTo(element.parent().parent());  
            }      
        });
    } catch (e) {
    console.log(e.message);
    }
}


function setLoginValid(){
    try {
        $("#loginF").validate({

            rules: {
              checkID: vRuleID, 
              checkPW: vRulePW,
            },
            messages: {
              checkID: vMsgID,
              checkPW: vMsgPW,
            },
            errorElement: "span",
            errorPlacement: function(error, element) {  
                error.appendTo(element.parent());  
            }      
        });
    } catch (e) {
    console.log(e.message);
    }
}


function setBindingValid(){
    try {
        $("#bindingF").validate({

            rules: {
              checkBankCardNo: vRuleBankCardNo, 
            },
            messages: {
              checkBankCardNo: vMsgBankCardNo,
            },
            errorElement: "span",
            errorPlacement: function(error, element) {  
                error.appendTo(element.parent().parent());  
            }      
        });
    } catch (e) {
    console.log(e.message);
    }
}


function setForgetpwValid(){
    try {
        $("#forgetpwF").validate({
            rules: {
                checkID: vRuleID,   
              checkEmail: vRuleEmail,
              checkValidCode:vRuleValidCode
            },
            messages: {
                checkID: vMsgID,
              checkEmail: vMsgEmailPW,
              checkValidCode:vMsgValidCode
            },
            errorElement: "span",
            errorPlacement: function(error, element) {  
                error.appendTo(element.parent().parent());  
            }      
        });
    } catch (e) {
    console.log(e.message);
    }
}


function setTtansferValid(){
    try {
        $("#tansferF").validate({

            rules: {
              checkisInt: vRulecheckisInt,  
            },
            messages: {
              checkisInt: vMsgcheckisInt,
            },
            errorElement: "span",
            errorPlacement: function(error, element) {  
                error.appendTo(element.parent());  
            }      
        });
    } catch (e) {
    console.log(e.message);
    }
}

function setWithdrawValid(){
    try {
        $("#withdrawF").validate({

            rules: {
              checkisNum: vRulecheckisNum,  
            },
            messages: {
              checkisNum: vMsgcheckisNumW,
            },
            errorElement: "span",
            errorPlacement: function(error, element) {  
                error.appendTo(element.parent());  
            }      
        });
    } catch (e) {
    console.log(e.message);
    }
}

function setDepositValid(){
    try {
        $("#depositF").validate({

            rules: {
              checkisNum: vRulecheckisNum,  
            },
            messages: {
              checkisNum: vMsgcheckisNumD,
            },
            errorElement: "span",
            errorPlacement: function(error, element) {  
                error.appendTo(element.parent());  
            }      
        });
    } catch (e) {
    console.log(e.message);
    }
}

