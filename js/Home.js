var SideNav = $(".SideNav");
var active = "active";
var el_footer = 
'<footer class="navbar-default navbar-fixed-bottom text-nowrap">\
    <div class="container">\
      <div class="row">\
        <div class="col-xs-12 col-sm-12">\
          <ul class="nav row">\
            <li class="col-xs-3 col-sm-3 change_img">\
                <a href="">\
                  <img src="./img/icons/home_icon_n.png" alt="home">\
                  <p>首頁</p>\
                </a>\
            </li>\
            <li class="col-xs-3 col-sm-3 change_img">\
                <a href="">\
                  <img src="./img/icons/game_icon_n.png" alt="game">\
                  <p>遊戲</p>\
                </a>\
            </li>\
            <li class="col-xs-3 col-sm-3 change_img">\
                <a href="">\
                  <img src="./img/icons/register_icon_n.png" alt="register">\
                  <p>註冊</p>\
                </a>\
            </li>\
            <li class="col-xs-3 col-sm-3 change_img">\
                <a href="">\
                  <img src="./img/icons/login_icon_n.png" alt="login">\
                  <p>登錄</p>\
                </a>\
            </li>\
          </ul>\
        </div>\
      </div>\
    </div>\
</footer>';

$(document).ready(function () {
    // $('.footer_unLogin').append(el_footer);
    

    // 漢堡功能
    $(".navbar-toggle").on("click", function(){
        $(this).toggleClass(active);  
        if( $(this).hasClass(active) ){
            SideNav.addClass(active);
        }else{
            SideNav.removeClass(active);
        }
    });
    // footer選單功能
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


    
});


    




