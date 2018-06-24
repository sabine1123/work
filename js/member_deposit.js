var SideNav = $(".SideNav");
var active = "active";


$(document).ready(function () {
    setDepositValid();
    // initial
    
    $('footer').html(el_footer);
    $('body').after(el_popupBox);

    baseCtrl();    

    // 選擇銀行
    $('.bank_row').on('click','li', function(e){ 
        console.log('click bank row')
        $('.bank_row li').removeClass(active)
        $(this).addClass(active);
    });
    
    // $('.deposit_title').on('click','li', function(e){
    //     console.log('deposit_title')
    // });
    
});


    




