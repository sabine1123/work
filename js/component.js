var el_header = `      <div class="container-fluid">
      <div class="row">
        <div class="navbar-header">
          <!-- 汉堡menu -->
          <button type="button" class="navbar-toggle pull-left">
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>                        
          </button>
    
          <!-- 标题 -->
          <a class="navbar-brand brand_middle" href="./index.html"><img src="./img/index/logo3.png" alt="MainLogo"></a>
          <!-- 客服 -->
          <a class="navbar-brand pull-right" href=""><img src="./img/icons/service_icon.png" alt="Customer"></a>
        </div>
      </div>
      </div>`;
var el_nav = `      <ul class="nav navbar-nav">
          <li><a href="./vip.html"><img src="./img/menu/vip_icon_n.png" alt="vip"><span>俱乐部</span></a></li>
          <!--<li><a href="#"><img src="./img/menu/down_icon_n.png" alt="down"><span>下载中心</span></a></li>-->
          <li><a href="./joint_company.html"><img src="./img/menu/company_icon_n.png" alt="company"><span>合营代理</span></a></li>
          <li><a href="./announcement.html"><img src="./img/menu/volume_icon_n.png" alt="volume"><span>站内公告</span></a></li>
          <li class="tQA" data-toggle="modal" data-target="#qa_view"><a href="javascript:;"><img src="./img/menu/problem_icon_n.png" alt="problem"><span>常见问题</span></a></li>
          <li><a href=""><img src="./img/menu/novice_icon_n.png" alt="novice"><span>新手操作</span></a></li>
          <li class="tTerms" data-toggle="modal" data-target="#terms_view"><a href="javascript:;"><img src="./img/menu/terms_icon_n.png" alt="terms"><span>服务条款</span></a></li>
          <li class="tAbout" data-toggle="modal" data-target="#about_view"><a href="javascript:;"><img src="./img/menu/aboutme_icon_n.png" alt="aboutme"><span>关于我们</span></a></li>
          <div class="footer">
            <div class="bottom">
              <img src="./img/menu/text_01.png" alt="copyright">
            </div>
          </div>
      </ul>`;                  




var el_footer=`        <div class="container">
          <div class="row">
            <div class="col-xs-12 col-sm-12">
              <ul class="footer_nav row">
                <li class="col-xs-3 col-sm-3 change_img IndexT">
                    <a href="" onclick="location.href='index.html'">
                      <img src="./img/icons/home_icon_n.png" class="center-block" alt="home">
                      <div>首页</div>
                    </a>
                </li>
                <li class="col-xs-3 col-sm-3 change_img GameT">
                    <a href="">
                      <img src="./img/icons/game_icon_n.png" class="center-block" alt="game">
                     
                      <div>游戏</div>
                    </a>
                </li>
                <li class="col-xs-3 col-sm-3 change_img RegistT">
                    <a href="" onclick="location.href='regist.html'">
                      <img src="./img/icons/register_icon_n.png" class="center-block" alt="register">
                      
                      <div>注册</div>
                    </a>
                </li>
                <!--<li class="col-xs-3 col-sm-3 change_img FundsT">
                    <a href="">
                      <img src="./img/icons/funds_icon_n.png" class="center-block" alt="funds">
                    
                      <div>资金</div>
                    </a>
                </li>-->
                <li class="col-xs-3 col-sm-3 change_img LoginT">
                    <a href="">
                      <img src="./img/icons/login_icon_n.png" class="center-block" alt="login">
                      
                      <div>登录</div>
                    </a>
                </li>
                <!--<li class="col-xs-3 col-sm-3 change_img MemberT">
                    <a href="" onclick="location.href='member.html'">
                      <img src="./img/icons/my_icon_n.png" class="center-block" alt="funds">
                      
                      <div>我的</div>
                    </a>
                </li>-->                
              </ul>
            </div>
          </div>
        </div>`;

var el_popupBox = `  
<!--登录-->
<div class="container-fluid login_popup">
    <div class="row popup_mask">
      <div class="col-xs-12 col-sm-12 login">
        <div class="p_header">
          <button type="button" class="close close_btn" data-dismiss="modal" aria-hidden="true"></button>
          <h2 class="p_title"><div class="icon"></div><span>登录</span><h2>
        </div>

        <form action="" class="p_body" id="loginF">
          <div class="form-group form-inline form_full">
            <label for=""><img src="img/index/popup/login_icon.png" alt=""><span>账户名</span></label>
            <input type="text" name="checkID" placeholder="由6-12位英文字母与数字组成">
          </div>
          <div class="form-group form-inline form_full">
            <label for=""><img src="img/index/popup/number_icon.png" alt=""><span>密码</span></label>
            <input type="password" name="checkPW" placeholder="由6-12位英文字母与数字组成">          </div>
                

          <div class="p_footer">
            <div class="btn-group btn-group-justified">
              <div class="btn-group">
                <a href="javascript:;" class="btn btn_fill_green" role="button">立即登录</a>
              </div>
            </div>
            <div class="btn-group btn-group-justified">
              <div class="btn-group">
                <a href="./regist.html" class="btn btn_empty_green btn_half" role="button">立即注册</a>
              </div>
              <div class="btn-group">
                <a href="./member_info_forget.html" class="btn btn_empty_gray btn_half" role="button">忘记密码</a>
              </div>
            </div> 
          </div>  

        </form>     

      </div>
    </div>
  </div>
  
  <!--游戏-->
  <div class="container-fluid game_popup">
    <div class="row popup_mask">
      <div class="col-xs-12 col-sm-12 game">
        <div class="p_header">
          <button type="button" class="close close_btn" data-dismiss="modal" aria-hidden="true"></button>
          <h2 class="p_title"><div class="icon"></div><span>游戏</span><h2>
        </div>

        <div class="p_body">
          <div class="row game_img">
            <div class="col-xs-12 col-sm-12 ">
            <a href="./slot.html" class="col-xs-3 col-sm-3">
              <img src="img/index/popup/solt_img.png" alt="老虎机" class="img-responsive center-block">
            </a>
            <a href="./live.html" class="col-xs-3 col-sm-3">
              <img src="img/index/popup/live_img.png" alt="真人" class="img-responsive center-block">
            </a>
            <a href="./sport.html" class="col-xs-3 col-sm-3">
              <img src="img/index/popup/sport_img.png" alt="体育" class="img-responsive center-block">
            </a>
            <a href="" class="col-xs-3 col-sm-3">
              <img src="img/index/popup/ticket_img.png" alt="彩票" class="img-responsive center-block">
            </a>
            </div>
          </div>

          <!-- 已登入 -->
          <div class="row game_history">
            <div class="col-xs-12 col-sm-12">
              <div class="sub_title">最常玩的游戏</div>
              <div class="col-xs-3 col-sm-3 game_list"><a href="">疯狂的猴子</a></div>
              <div class="col-xs-3 col-sm-3 game_list"><a href="">忍者风云</a></div>
              <div class="col-xs-3 col-sm-3 game_list"><a href="">疯狂的猴子</a></div>
              <div class="col-xs-3 col-sm-3 game_list"><a href="">疯狂的猴子</a></div>
            </div>
          </div>

          <div class="row game_collect">
            <div class="col-xs-12 col-sm-12">
              <div class="sub_title">已收藏的游戏</div>
              <div class="col-xs-3 col-sm-3 game_list"><a href="">疯狂的猴子</a></div>
              <div class="col-xs-3 col-sm-3 game_list"><a href="">忍者风云</a></div>
              <div class="col-xs-3 col-sm-3 game_list"><a href="">疯狂的猴子</a></div>
              <div class="col-xs-3 col-sm-3 game_list"><a href="">疯狂的猴子</a></div>
            </div>
          </div>

        </div>        
    

      </div>
    </div>
  </div>

  <!--资金-->
  <div class="container-fluid funds_popup">
    <div class="row popup_mask">
      <div class="col-xs-12 col-sm-12 funds">
        <div class="p_header">
          <button type="button" class="close close_btn" data-dismiss="modal" aria-hidden="true"></button>
          <h2 class="p_title"><div class="icon"></div><span>资金管理</span><h2>
        </div>

        <div class="p_body">
          <div class="row funds_img">
            <div class="col-xs-12 col-sm-12 ">
              <a href="./member_deposit.html" class="col-xs-4 col-sm-4 funds_box">
                <div class="row">
                  <img src="img/index/popup/save_money_img.png" alt="存款" class="img-responsive center-block">
                </div>
              </a>
              <a href="./member_Transfer.html" class="col-xs-4 col-sm-4 funds_box">
                <div class="row">
                  <img src="img/index/popup/money_transfer_img.png" alt="转换" class="img-responsive center-block">
                </div>
              </a>
              <a href="./member_withdraw.html" class="col-xs-4 col-sm-4 funds_box">
                <div class="row">
                  <img src="img/index/popup/deposit_money_img.png" alt="取款" class="img-responsive center-block">
                </div>
              </a>
            </div>
          </div>
          
          <div class="col-xs-12 col-sm-12 line"></div>

          <div class="row funds_me">
            <div class="col-xs-12 col-sm-12 ">
              <a href="javascript:;" class="col-xs-3 col-sm-3 funds_box">
                <div class="row">
                  <img src="img/index/popup/game_icon.png" alt="" class="img-responsive center-block">
                  <div class="sub_title">游戏记录</div>
                </div>
              </a>
              <a href="javascript:;" class="col-xs-3 col-sm-3 funds_box">
                <div class="row">
                  <img src="img/index/popup/bargain_icon.png" alt="" class="img-responsive center-block">
                  <div class="sub_title">交易记录</div>
                </div>
              </a>
              <a href="javascript:;" class="col-xs-3 col-sm-3 funds_box">
                <div class="row">
                  <img src="img/index/popup/report_icon.png" alt="" class="img-responsive center-block">
                  <div class="sub_title">资金报表</div>
                </div>
              </a>
              <a href="javascript:;" class="col-xs-3 col-sm-3 funds_box">
                <div class="row">
                  <img src="img/index/popup/more_icon.png" alt="" class="img-responsive center-block">
                  <div class="sub_title">更多操作</div>
                </div>
              </a>
            </div>
          </div>

        </div>        
    

      </div>
    </div>
  </div>
  `;

var el_mask = `<div class="mask"></div>`;