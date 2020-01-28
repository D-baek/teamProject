"use strict"
var mypage_vue = mypage_vue || {}
mypage_vue ={
	mypage_main:()=>{
		return `
		<link rel="stylesheet" href="/web/resources/css/mypageMain.css"/>
<!------ Include the above in your HEAD tag ---------->

    <h1 class="text-center">어서오세요 User님</h1>
	<div class="container">
		<div class="row">
	
		<!--team-1-->
	<div class="col-lg-4">
	<div class="our-team-main">
	
	<div class="team-front">
	<img class="img-fluid1" />
	<h3>회원정보 수정</h3>
	<p>Modifying member information</p>
	</div>
	
	<div class="team-back">
	<a href="#" class ="myModify">
		<span>
			<br />
			비밀번호, 전화번호 등</br>
			개인정보 수정을 원하신다면</br>
			이 쪽으로 들어와 주세요!</br>
		</span>
	</a>
	</div>
	</div>
	</div>
	
	<!--team-2-->
	<div class="col-lg-4">
	<div class="our-team-main">
	
	<div class="team-front">
	<img class="img-fluid2" />
	<h3>회원 차트 보기</h3>
	<p>View Member Graphs</p>
	</div>
	
	<div class="team-back">
	<a href="#" class="myChart">
		<span>
		<br />
		회원님의 운동정보,</br>
		운동기간, 운동횟수 등</br>
		모든 정보를 각종 차트로<br />
		정리하여 보여드릴게요!</br>
		</span>
	</a>
</div></div></div>
	
	<!--team-3-->
	<div class="col-lg-4">
	<div class="our-team-main">
	
	<div class="team-front">
	<img class="img-fluid3" />
	<h3>내 루틴 보러가기</h3>
	<p>Check my routine</p>
	</div>
	
	<div class="team-back">
	<a href="#" class="myRoutine">
		<span>
		<br />
		내가 받은 루틴을 확인하고<br/>
		열심히 운동해서<br />
		헬린이 탈추우우울!!!
		</span>
	</a>
	</div>
	</div>
	</div>
	
	<!--team-4-->
	<div class="col-lg-4">
	<div class="our-team-main">
	
	<div class="team-front">
	<img class="img-fluid4" />
	<h3>내가 작성한 헬그램 보러가기</h3>
	<p>Go see my helgram</p>
	</div>
	<div class="team-back">
	<a href="#" class="myHelgram">
		<span>
		<br />
		지금까지 회원님께서<br />
		작성한 게시글들을<br />
		확인하러 가 볼까요?~ :)
		</span>
	</a>
	</div>
	</div>
	</div>
	
	<!--team-5-->
	<div class="col-lg-4">
	<div class="our-team-main">
	
	<div class="team-front">
	<img class="img-fluid5" />
	<h3>식단 관리</h3>
	<p>Diet management</p>
	</div>
	
	<div class="team-back">
	<a href="#" class="myProtein">
		<span>
		<br />
		몸 스펙에 맞춰 계산 된<br />
		하루섭취 단백질량과<br />
		관련 음식 조리법으로<br />
		맛있는 다이어트<br />
		가즈아아아아아아!!
		</span>
	</a>
	</div>
	
	</div>
	</div>
	
	<!--team-6-->
	<div class="col-lg-4">
	<div class="our-team-main">
	
	<div class="team-front">
	<img src="http://placehold.it/110x110/2196f3/fff?text=Dilip" class="img-fluid" />
	<h3>Dilip Kevat</h3>
	<p>Web Designer</p>
	</div>
	
	<div class="team-back">
	<span>
	Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis 
	natoque penatibus et magnis dis parturient montes,
	Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis 
	natoque.
	</span>
	</div>
	</div>
	</div>
	<!--team-6-->
	</div>
	</div>`
	},
	mypage_modify:()=>{
		return `
		<link rel="stylesheet" href="/web/resources/css/mypageModify.css"/>
		
		<div class="main">
        <section class="myModify">
            <div class="container2">
                <div class="myModify-content">
                    <form method="POST" id="myModify-form" class="myModify-form">
                        <h2 class="form-title">개인정보를 바꾸시려구요?</h2>
                        <div class="form-group">
                            <input type="password" class="form-input" name="oldpwd" id="oldpwd" placeholder="기존 비밀번호를 입력하세요."/>
                        </div>
                        <div class="form-group">
                            <input type="password" class="form-input" name="newpwd" id="newpwd" placeholder="새 비밀번호를 입력하세요."/>
						</div>
						 <div class="form-group">
                            <input type="password" class="form-input" name="re_pwd" id="re_pwd" placeholder="새 비밀번호를 확인합니다."/>
                        </div>
                        <div class="form-group">
                            <input type="text" class="form-input" name="uname" id="newName" placeholder="이름을 입력하세요."/>
                            <span toggle="#password" class="zmdi zmdi-eye field-icon toggle-password"></span>
                        </div>
                         <div class="form-group">
                            <input type="text" class="form-input" name="age" id="newAge" placeholder="나이를 입력하세요."/>
                        </div>
                        <fieldset class="form-group">
                        <div class="row">
                            <legend class="col-form-label col-sm-2 pt-0">성별</legend>
                            <div class="col-sm-10">
                                <div class="form-check">
                                <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios1" value="option1" checked>
                                <label class="form-check-label" for="gridRadios1">남성</label>
                                </div>
                                <div class="form-check">
                                <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios2" value="option2">
                                <label class="form-check-label" for="gridRadios2">여성</label>
                                </div>
                        </div>
                        </div>
                        </fieldset>
                        <div class="form-group">
                            <input type="submit" name="submit" id="submit" class="form-submit" value="Modify up"/>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    </div>`
	},
	mypage_chart : ()=>{
		return `
		<link rel="stylesheet" href="/web/resources/css/mypageChart.css"/>

		<div class="chartMain">
			<div class="chart1">
				<canvas id="myChart1"></canvas>
			</div>
			<div class="chart2">
				<canvas  id="myChart2"></canvas>
			</div>
			<div class="chart3">
				<canvas id="myChart3"></canvas>
			</div>
			<div class="chart4">
				<canvas id="myChart4"></canvas>
			</div>
		</div>`
	},
	mypage_graph: ()=>{
		return `
		<link rel="stylesheet" href="/web/resources/css/mypageGraph.css"/>
		<div class ="graphs">
		<!--프로그래스 바-->

		<div class="rateEx" style="  text-align:center; font-size : 20px; font-weight:bold;">월 운동량 달성률
		<div class="row">
		<div class="col-md-3 col-sm-6">
		<div class="progress blue">
		<span class="progress-left">
		<span class="progress-bar"></span>
		</span>
		<span class="progress-right">
		<span class="progress-bar"></span>
		</span>
		<div class="progress-value">90%</div>
		</div>
		</div>
		</div>
		</div>
											
<!--가로막대그래프-->

	<div class="countEx">부위 별 운동 횟수
	<div class="graph stack1">
		<span style="width: 75%; align-content: center;">가슴 75회</span>
	</div>
	<div class="graph stack2">
		<span style="width: 90%">등 90회</span> 
	</div>
	<div class="graph stack3">
		<span style="width: 33%">어깨 33회</span>
	</div>
	<div class="graph stack4">
		<span style="width: 45%">이두 45회</span>
	</div>
	<div class="graph stack5">
		<span style="width: 51%">삼두 51회</span>
	</div>
	<div class="graph stack6">
		<span style="width: ${x.number}%">하체 ${x.number}회</span>
	</div>
	<div class="graph stack7">
		<span style="width: 85%">코어 85회</span>
	</div>
		</div>

		<!--3번째 블록-->
		<div>달력 블록</div>

		<!--차트그래프-->
		<div class="chartGraph">잘 들어갔냐</div>
</div><!--lastGraph-->
		`
	},
	mypage_routine :()=>{
		return `
		`
	},
	mypage_helgram:()=>{
		return `
		<link rel="stylesheet" href="/web/resources/css/mypageHelgram.css"/>
		
		 <section class="hero">
         <div class="container">
          <div class="row">	
		  
		   <div class="col-lg-6 offset-lg-3">
			
			<div class="cardbox shadow-lg bg-white">
			 
			 <div class="cardbox-heading">
			  <!-- START dropdown-->
			  <div class="dropdown float-right">
			   <button class="btn btn-flat btn-flat-icon" type="button" data-toggle="dropdown" aria-expanded="false">
				<em class="fa fa-ellipsis-h"></em>
			   </button>
			   <div class="dropdown-menu dropdown-scale dropdown-menu-right" role="menu" style="position: absolute; transform: translate3d(-136px, 28px, 0px); top: 0px; left: 0px; will-change: transform;">
				<a class="dropdown-item" href="#">Hide post</a>
				<a class="dropdown-item" href="#">Stop following</a>
				<a class="dropdown-item" href="#">Report</a>
			   </div>
			  </div><!--/ dropdown -->
			  <div class="media m-0">
			   <div class="d-flex mr-3">
				<a href=""><img class="img-fluid rounded-circle" src="http://www.themashabrand.com/templates/bootsnipp/post/assets/img/users/4.jpg" alt="User"></a>
			   </div>
			   <div class="media-body">
			    <p class="m-0">Benjamin Robinson</p>
				<small><span><i class="icon ion-md-pin"></i> Nairobi, Kenya</span></small>
				<small><span><i class="icon ion-md-time"></i> 10 hours ago</span></small>
			   </div>
			  </div><!--/ media -->
			 </div><!--/ cardbox-heading -->
			  
			 <div class="cardbox-item">
			  <img class="img-fluid" src="http://www.themashabrand.com/templates/bootsnipp/post/assets/img/1.jpg" alt="Image">
			 </div><!--/ cardbox-item -->
			 <div class="cardbox-base">
			  <ul class="float-right">
			   <li><a><i class="fa fa-comments"></i></a></li>
			   <li><a><em class="mr-5">12</em></a></li>
			   <li><a><i class="fa fa-share-alt"></i></a></li>
			   <li><a><em class="mr-3">03</em></a></li>
			  </ul>
			  <ul>
			   <li><a><i class="fa fa-thumbs-up"></i></a></li>
			   <li><a href="#"><img src="http://www.themashabrand.com/templates/bootsnipp/post/assets/img/users/3.jpeg" class="img-fluid rounded-circle" alt="User"></a></li>
			   <li><a href="#"><img src="http://www.themashabrand.com/templates/bootsnipp/post/assets/img/users/1.jpg" class="img-fluid rounded-circle" alt="User"></a></li>
			   <li><a href="#"><img src="http://www.themashabrand.com/templates/bootsnipp/post/assets/img/users/5.jpg" class="img-fluid rounded-circle" alt="User"></a></li>
			   <li><a href="#"><img src="http://www.themashabrand.com/templates/bootsnipp/post/assets/img/users/2.jpg" class="img-fluid rounded-circle" alt="User"></a></li>
			   <li><a><span>242 Likes</span></a></li>
			  </ul>			   
			 </div><!--/ cardbox-base -->
			 <div class="cardbox-comments">
			  <span class="comment-avatar float-left">
			   <a href=""><img class="rounded-circle" src="http://www.themashabrand.com/templates/bootsnipp/post/assets/img/users/6.jpg" alt="..."></a>                            
			  </span>
			  <div class="search">
			   <input placeholder="Write a comment" type="text">
			   <button><i class="fa fa-camera"></i></button>
			  </div><!--/. Search -->
			 </div><!--/ cardbox-like -->			  
					
			</div><!--/ cardbox -->

           </div><!--/ col-lg-6 -->	
		   <div class="col-lg-3">
		   </div><!--/ col-lg-3 -->
			
          </div><!--/ row -->
         </div><!--/ container -->
        </section>
		`
	}
}