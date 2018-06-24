function footerPopC(){
    //控制footer popup
    $('.LoginT').on('click',function(){
      $('.login_popup').show();
      $('.game_popup').hide();
      $('.funds_popup').hide();
    });
    $('.login_popup .close').on('click',function(){
      $('.login_popup').hide();
    });

    $('.GameT').on('click',function(){
      $('.game_popup').show();
      $('.login_popup').hide();
      $('.funds_popup').hide();
    });
    $('.game_popup .close').on('click',function(){
      $('.game_popup').hide();
    });

    $('.FundsT').on('click',function(){
      $('.funds_popup').show();
      $('.login_popup').hide();
      $('.game_popup').hide();
    });
    $('.funds_popup .close').on('click',function(){
      $('.funds_popup').hide();
    }); 
}

function navC(){
    // 汉堡功能
    $(".navbar-toggle").on("click", function(){
      
        $(this).toggleClass(active);  
        if( $(this).hasClass(active) ){
            SideNav.addClass(active);
        }else{
            SideNav.removeClass(active);
        }

    }); 
}

function footerImgChange(){
    $('.navbar-fixed-bottom li').on('click', function(e){  
        e.preventDefault();
        var curIndex = $('.change_img').index(this);
        var srcs = [];
        var DEFAULT_SRC = '_n.png';
        var HOVERED_SRC = '_s.png';
        $('.change_img').each(function(idx, v){
            srcs.push($(v).find('img').attr('src'));
        });

        // process all srcs
        srcs = srcs.map(function(src, idx) {
            if (idx !== curIndex) {
                if(src.indexOf(HOVERED_SRC) !== -1 ){
                    return src.replace(HOVERED_SRC, DEFAULT_SRC)
                }else{
                    return src
                }
            } else {
                if(src.indexOf(HOVERED_SRC) !== -1 ){
                    return src
                }else{
                    return src.replace(DEFAULT_SRC, HOVERED_SRC)
                }                   
            }
        });
      // assign to DOM          
        $('.change_img').each(function (idx, v){
            $(v).find('img').attr('src', srcs[idx])
        });
    });
}




//查看更多
function loadMore(){
  $("tbody>.InfoRow").slice(0, 8).show();
  if($("tbody>.InfoRow:hidden").length == 0){
    $("#loadMore").hide();
  }else{
    $("#loadMore").show();
  }
  $("#loadMore").on('click', function (e) {
    $("tbody>.InfoRow:hidden").slice(0, 8).slideDown();
    if ($("tbody>.InfoRow:hidden").length == 0) {
        $("#loadMore").fadeOut();
    }
    $('html,body').animate({
        scrollTop: $(this).offset().top
    }, 1500);
  });

}


//popupfullpage
function popupHeight(){
    var h = $(window).height();
    var mh = h-49-53; 
    $('.popup_full_warp').height(mh);
}


// _getViewObject
function _getViewObject(sName,callback){

  $.ajax({
    type: "GET",
    url: sName,
    success: function (data) {
      if (!_isNull(data)) {
          if (typeof callback === "function") callback(data);
      } else {
          if (typeof callback === "function") callback(console.log("取得服务失败"));         }
    },
    error: function (xhr, err) {
      if (typeof callback === "function") callback(console.log("取得服务失败"));
      var strErrHtml = xhr.responseText;
      console.log(strErrHtml);
    }
  });
}


//qa popup
function getQaView(){
  _getViewObject('./views/view_qa.html',function(data){
    $('footer').after(data);
  });  
}

//terms popup
function getTermsView(){
  _getViewObject('./views/view_terms.html',function(data){
    $('footer').after(data);
  });  
}

//terms popup
function getAboutView(){
  _getViewObject('./views/view_about.html',function(data){
    $('footer').after(data);
  });  
}

function closeNav(){
  $('.tQA, .tTerms, .tAbout').on('click',function(){
    $('.SideNav, .navbar-toggle').removeClass('active');

  });
}



function baseCtrl(){

  footerPopC();
  navC();
  footerImgChange();  

  //登录验证
  setLoginValid();


  getQaView();
  getTermsView();
  getAboutView();  
  closeNav();
}