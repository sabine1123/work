function _isNull(obj) {

    if (typeof (obj) == 'undefined' || obj == null || obj == 'undefined') {

	return true;
    }
    else {
	return false;
    }
}//function _isNull(obj)


function _popData(sData,callback){
  try {
		$.blockUI({
	    overlayCSS: { opacity: 0.2 ,cursor:null},
	    css: {
				border: 'none',
				'-webkit-border-radius': '3px',
				'-moz-border-radius': '3px',
				//padding: '10px',
				width: '68.75%',
				left: '50%',
				top: '35%',
				backgroundColor: 'transparent',
				maxWidth: '350px',
				transform: 'translateX(-50%)',
				cursor:null
	    },
	    message: sData,
	    onBlock:function(){
				if (typeof callback === "function") callback("onBlock");
				return;
	    }
		});
  } catch (e) {
		if (typeof callback === "function") callback("error:"+e.message);
		return;
}

}//_popData


function _getViewObject(sName,callback){
  try {
		$.ajax({
		    type: "GET",
		    url: sName,
		    success: function (data) {
					if (!_isNull(data)) {
					    if (typeof callback === "function") callback(data);
					} else {
					    if (typeof callback === "function") callback(_getErrObj("45002","取得服务失败"));					}
		    },
		    error: function (xhr, err) {
					if (typeof callback === "function") callback(_getErrObj("45002","取得服务失败"));
					var strErrHtml = xhr.responseText;
					console.log(strErrHtml);
		    }
		});// $.ajax
  } catch (e) {
		if (typeof callback === "function") callback(_getErrObj("45002","取得服务失败"));
  }
}// _getViewObject


function _showPop(sContent) {
  try {
		_getViewObject("views/popView.html?", function(
		data) {
	    data = String(data).replace("{content}", sContent);
	    _popData(data, function(sFun) {
				// after show
				if (_isNull(sFun)) {
				  console.log("pop error");
				  return;
				}
				if (sFun != "onBlock") {
			    console.log("pop error" + sFun);
			    return;				}

				// button event handle
				$(".popup_section .pupup_close").on("click", function() {
				    $.unblockUI();
				});
	    });
		});
  } catch (e) {
		console.log(e.message);
  }
}// function _showPop()
// ex: _showPop('已送出申請');



function _showPopBtnCallback(sContent, sBtn, callback) {
  try {
		_getViewObject("views/popBtnView.html?", function(
		data) {
	    data = String(data).replace("{content}", sContent);
	    data = String(data).replace("{btn_text}", sBtn);

	    _popData(data, function(sFun) {
		// after show
				if (_isNull(sFun)) {
				    console.log("pop error");
				    if (typeof callback === "function")
							callback("");
				    return;
				}
				if (sFun != "onBlock") {
				    console.log("pop error" + sFun);
				    if (typeof callback === "function")
							callback("");
				    return;
				}

				// button event handle
				$(".popup_section .doBtn").on("click", function() {
			    $.unblockUI();
			    if (typeof callback === "function")
						callback("click");
				});
   		});
		});
	} catch (e) {
		console.log(e.message);
	}
}// function _showPopBtnCallback()
//ex: 
  // _showPopBtnCallback('先完成個人資料','前去填寫資料', function(){
  //   location.href ='./member_info.html';
  // });



function _showPopBtnWithCloseCallback(sContent, sBtn, callback) {
  try {
		_getViewObject("views/popBtnWithCloseView.html?", function(
		data) {
	    data = String(data).replace("{content}", sContent);
	    data = String(data).replace("{btn_text}", sBtn);

	    _popData(data, function(sFun) {
		// after show
				if (_isNull(sFun)) {
				    console.log("pop error");
				    if (typeof callback === "function")
							callback("");
				    return;
				}
				if (sFun != "onBlock") {
				    console.log("pop error" + sFun);
				    if (typeof callback === "function")
							callback("");
				    return;
				}

				// button event handle
				$(".popup_section .doBtn").on("click", function() {
			    $.unblockUI();
			    if (typeof callback === "function")
						callback("click");
				});
				$(".popup_section .pupup_close").on("click", function() {
				    $.unblockUI();
				});
   		});
		});
	} catch (e) {
		console.log(e.message);
	}
}// function _showPopBtnCallback()
//ex:
    // _showPopBtnWithCloseCallback('先完成個人資料','前去填寫資料', function(){
    //   location.href ='./member_info.html';
    // });

