var SideNav = $(".SideNav");
var wrapper = $('.wrapper');
var active = "active";
var _sQueryType = "";

function triggerPF(selector){
    //1 change Pname 
    $('.dropdown-menu>li').removeClass(active);
    $(selector).addClass(active);
    var Pname = $(selector).find('a').html();
    $('.Pname').html(Pname+"老虎机");        
    //2 add sub_select active
    $('.sub_select>li>.catbox').removeClass('catActive');
    $('.dropdown-menu>.active .sub_select>li:first-child .catbox').addClass('catActive');
    $('.sub_select .catbox').children('input').prop('checked',false);
    $('.catActive').children('input').prop('checked',true);
    $(selector).find('.sub_select>li:first-child .catbox').addClass('catActive');
    var Pcategory = $('.catActive>.Category').html();
    $('.Pcategory').html(Pcategory); 

    
}


$(document).ready(function () {
    // console.log('?test: ' + $.url('?t'));

    _sQueryType = $.url('?t');
    if(_sQueryType){
        triggerPF('.'+_sQueryType);
        getKey ();
    }else{
        //init game list
        parseData('PT','1'); 
    }    

//-----------common-----------

    $('.SideNav').html(el_nav);
    $('footer').html(el_footer);
     $('body').after(el_popupBox);
    baseCtrl();

//-----------common-----------

    // 老虎机banner滑动
    var bannerSwiper = new Swiper ('.slot_banner', {
        loop: true,
        pagination: {
            el: '.slot_banner_p'
        },
        autoplay: {
          delay: 2500,
          disableOnInteraction: false
        },    
       
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        }
      });


    //menu trigger
    $('li.dropdown>span').on("click", function(){
        //1.check fav 2.open menu 3.open wrap        
        var divCollection = $("ul.Collection");
        if( divCollection.css('display') === 'block' ){

            $(this).parent('li.dropdown').removeClass('open');
        }else{
            $(this).parent('li.dropdown').toggleClass('open');
        
            if( $('li.dropdown').hasClass("open") ){
                wrapper.show(); 
                $('li.Collection').addClass('stop'); 
            }else{
                wrapper.hide();

            }            
        }  

    });

    
  


    // pt list
    $('.dropdown-menu>li').on("click", function(){
        triggerPF(this);

        getKey ();
    });

    //category
    $('.sub_select .catbox').on('click',function(e){
        e.stopPropagation(); 
        $('.sub_select .catbox').removeClass('catActive');
        $('.sub_select .catbox').children('input').prop('checked',false);
        $(this).addClass('catActive');
        $('.catActive').children('input').prop('checked',true);
        var Pcategory = $('.catActive').children('.Category').html();
        $('.Pcategory').html(Pcategory);

        //close menu
        $('li.dropdown').removeClass('open');
        wrapper.hide();

        getKey ();
   
    });


    //fav
    $('li.Collection').on("click", function(){
        var divCollection = $("ul.Collection");
        if($('li.dropdown').hasClass('open')){
            $(this).find('a').removeClass('active');
            divCollection.hide();
        }else{
            
            if( divCollection.css('display') === 'none' ){
                divCollection.show();
                wrapper.show();
                $(this).find('a').addClass('active');
            }else{
                divCollection.hide();
                wrapper.hide();
                $(this).find('a').removeClass('active');
                if( $('li.dropdown').hasClass('open') === false ){
                    wrapper.hide();
                }          
                
            }            
        }

        // 收藏游戏滑动
        var CollectionSwiper = new Swiper('.CollectionSwiper', {
            slidesPerView: 'auto',
            spaceBetween: 6
          });      
        
        
    });

    // 游戏清单收藏按钮
    $('.game_content .title').on("click", function(e){
        $(this).find('button>a').toggleClass('active');
    });

    //search function
    $("#searchKey").keyup(function () {
        keyUp ();
    });

  
    //search input close icon
    $('.search_wrapper>.close_icon').on('click',function(){
        $('#searchKey').val('');
        $('#search_result').hide();
        $('.slot_banner').show();
        getKey ();
    });

    //search result close icon
    $('#search_result>.close_icon').on('click',function(){
        $('#searchKey').blur();
        $('#search_result').hide();
        $('.slot_banner').show();
        getKey ();
    });




}); //end of document.ready


//game list
var gameData = JSON.parse(`{"platformlist":[{"platformEn":"PT","platformCn":"PT","id":20,"typelist":[{"typename":"吃角子老虎机","typeid":1,"list":[{"id":116,"createBy":0,"createTime":null,"updateBy":0,"updateTime":null,"createCus":null,"updateCus":null,"platformId":20,"platformName":null,"platformCode":null,"proId":1,"proName":null,"proCode":null,"gameNameCn":"角斗士","gameNameEn":"Gladiator","gameNameTw":null,"gameCode":"glr","gameAnn":null,"status":0,"subtype1":3,"subtype2":0,"subtype3":0,"subtype4":0,"weight":null,"weightBy":69,"weightTime":null,"weightCus":null,"playCount":9999999,"isTry":2},{"id":117,"createBy":0,"createTime":null,"updateBy":0,"updateTime":null,"createCus":null,"updateCus":null,"platformId":20,"platformName":null,"platformCode":null,"proId":1,"proName":null,"proCode":null,"gameNameCn":"角斗士积宝","gameNameEn":"Gladiator Jackpot","gameNameTw":null,"gameCode":"glrj","gameAnn":null,"status":0,"subtype1":0,"subtype2":6,"subtype3":0,"subtype4":0,"weight":null,"weightBy":70,"weightTime":null,"weightCus":null,"playCount":9,"isTry":2}]},{"typename":"经典老虎机","typeid":2,"list":[{"id":33,"createBy":0,"createTime":null,"updateBy":0,"updateTime":null,"createCus":null,"updateCus":null,"platformId":20,"platformName":null,"platformCode":null,"proId":2,"proName":null,"proCode":null,"gameNameCn":"百慕大三角","gameNameEn":"Bermuda Triangle","gameNameTw":null,"gameCode":"bt","gameAnn":null,"status":0,"subtype1":0,"subtype2":0,"subtype3":0,"subtype4":0,"weight":null,"weightBy":29,"weightTime":null,"weightCus":null,"playCount":37,"isTry":1}]}]},{"platformEn":"AG","platformCn":"AG","id":27,"typelist":[{"typename":"奖金翻倍","typeid":80,"list":[{"id":1185,"createBy":0,"createTime":null,"updateBy":0,"updateTime":null,"createCus":null,"updateCus":null,"platformId":27,"platformName":null,"platformCode":null,"proId":80,"proName":null,"proCode":null,"gameNameCn":"冰河世界","gameNameEn":"IceCrush","gameNameTw":null,"gameCode":"545","gameAnn":null,"status":0,"subtype1":0,"subtype2":0,"subtype3":0,"subtype4":0,"weight":null,"weightBy":18,"weightTime":null,"weightCus":null,"playCount":0,"isTry":2},{"id":1186,"createBy":0,"createTime":null,"updateBy":0,"updateTime":null,"createCus":null,"updateCus":null,"platformId":27,"platformName":null,"platformCode":null,"proId":80,"proName":null,"proCode":null,"gameNameCn":"糖果碰碰乐","gameNameEn":"CandyQuest","gameNameTw":null,"gameCode":"544","gameAnn":null,"status":0,"subtype1":0,"subtype2":0,"subtype3":0,"subtype4":0,"weight":null,"weightBy":19,"weightTime":null,"weightCus":null,"playCount":0,"isTry":2}]}]},{"platformEn":"MG","platformCn":"MG","id":28,"typelist":[{"typename":"经典老虎机","typeid":30,"list":[{"id":3545,"createBy":0,"createTime":null,"updateBy":0,"updateTime":null,"createCus":null,"updateCus":null,"platformId":28,"platformName":null,"platformCode":null,"proId":30,"proName":null,"proCode":null,"gameNameCn":"双重韦密","gameNameEn":"Double Wammy","gameNameTw":null,"gameCode":"28514","gameAnn":null,"status":0,"subtype1":0,"subtype2":0,"subtype3":0,"subtype4":0,"weight":null,"weightBy":0,"weightTime":null,"weightCus":null,"playCount":0,"isTry":1}]}]}]}`);

var platformValue = '';
var typeValue = '';
var targetPlatform = {};
var targetGameList = [];

function initGamelist(){
    $('#playgame_slot>.game_listcontainer>.row').html('');
}



function getKey () {
    console.log(gameData);
    platformValue = $('.button.active').attr('data-pf');
    typeValue =  $('.catActive').attr('data-typelist');
    parseData(platformValue,typeValue);
}

function parseData (platformValue,typeValue) {
    console.log(platformValue,typeValue);
    for (var i = 0; i < gameData.platformlist.length; i++) {
        if (gameData.platformlist[i].platformEn === platformValue) {
            targetPlatform = gameData.platformlist[i];
            break;
        }
    }

    for (var i = 0; i < targetPlatform.typelist.length; i++) {
        if (targetPlatform.typelist[i].typeid == typeValue) {
            targetGameList = targetPlatform.typelist[i].list;         
        } 
    }

    renderGameList(targetGameList);
}

function renderGameList(targetList){
    // console.log(targetGameList);
    initGamelist();
    $.each(targetList, function(idx, obj){
        var item = [];        
                      
        item.push('<div class="col-xs-6 col-sm-6 gabox"><div class="game"><div class="game_content"><div class="title clearfix">');
        item.push('<div class="pull-left lineHeight game_name"><span><img class="vertical_initial" src="./img/slot/list_icon.png" alt="star_icon_n">'+obj.gameNameCn+'</span></div>');               
        item.push('<button class="pull-right"><a href="javascript:;"><img class="favorite" src="./img/slot/star_icon_n.png" alt="star_icon_n"></a></button></div>');
        item.push('<img src="./img/slot/images/images_01.jpg"></div>');
        item.push('<div class="play_btn clearfix"><div class="pull-left btn_outline"><a href="">免费试玩</a></div>');
        item.push('<div class="pull-right btn_outline"><a href="">开始游戏</a></div></div');                  
        item.push('</div></div>');

        $('#playgame_slot>.game_listcontainer>.row').append(item.join(""));
        
    });    
}



// search
var key = '';

function keyUp () {

    key = $('#searchKey').val();
    if(key !==''){
        parseSearchData();
    }else{
        $('#search_result').hide();
        $('.slot_banner').show();
        getKey ();
    }

    
}

function parseSearchData () {
    // console.log(key);
    var targetOptionAry = [];

    gameData.platformlist.forEach(function (platform) {
        platform.typelist.forEach(function (type) {
            type.list.forEach(function (game) {
                targetOptionAry.push(game);
            })
        })
    })

    getSearchResult(targetOptionAry);
}

function getSearchResult (targetOptAry) {
    var targetAry = targetOptAry.filter(function (target) {
        return target.gameNameCn.indexOf(key) !== -1;
    })
    renderGameList(targetAry);
    // console.log(targetAry);
    showSearchResult(targetAry);
}

function showSearchResult(targetAry){
    var keyValue = $('#searchKey').val();
    $('#search_result').show();
    $('.sValue').text(keyValue);
    $('.sLength').text(targetAry.length);
    $('.slot_banner').hide();

}





