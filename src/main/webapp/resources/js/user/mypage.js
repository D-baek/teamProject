"use strict"
var mypage = mypage || {}
mypage =(()=>{
	let ctx, img, css, js
	let mypage_vue_js

	let init=()=>{
		ctx=$.ctx()
		img=$.img()
		css=$.css()
		js=$.js()
		mypage_vue_js=js+'/vue/user/mypage_vue.js'
	}
	let onCreate=()=>{
		init()
			$.when(
				$.getScript(mypage_vue_js)
			).done(()=>{
				setContentView()
				gomodify()
				gochart()
				goroutine()
				gohelgram()
				goprotein()
			}).fail(()=>{
				alert('조졌다')
			})
	}
	let setContentView=()=>{
		$('head').append(login_vue.login_head())
		$('.masthead').remove()
		$('.page-footer').remove()
		$('#mainpage').empty()
		$('#mainpage').append(mypage_vue.mypage_main())
	}
	let gomodify=()=>{
		$('a[class="myModify"] span'  )
		.click(e=>{
			e.preventDefault()
		$('.masthead').remove()
		$('.page-footer').remove()
		$('#mainpage').empty()
		$('#mainpage').append(mypage_vue.mypage_modify())
		})
	}
	let gochart =()=>{
		$('a[class="myChart"] span'  )
		.click(e=>{
			e.preventDefault()
		$('.masthead').remove()
		$('.page-footer').remove()
		$('#mainpage').empty()
		$('#mainpage').append(mypage_vue.mypage_chart())
		var ctx1 = $('#myChart1');
		var myPieChart = new Chart(ctx1,{
			type : 'pie',
			data :{
				labels : ['Chest', 'Back', 'Shoulder', 'Biceps', 'Triceps', 'Legs', 'Abdominals'],
				datasets : [{
					label: '부위 별 운동 횟수',
					data : [12, 6, 5, 8, 5, 2, 6],
					backgroundColor : ['#f5bd4f', '#f08530', '#d85348', '#861e52', '#15567e', '#23a8c0', '#38af9b'],
					
				}]
			},
			options:{
				maintainAspectRatio : false,
			}
		})
		var ctx2 = $('#myChart2');
		var ctx3 = $('#myChart3');
		var ctx4 = $('#myChart4');
		var myLineChart = new Chart(ctx4, {
			type: 'line',
			data: {
				labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
				datasets: [	{
					label: '내 월 별 근골격량',
					data: [0, 10, 5, 2, 20, 30, 45, 25, 35, 65, 23 ,11],
					backgroundColor: '#ff0066',
					borderColor: 'rgb(200, 0, 0)',
					borderWidth : 1,
					pointRadius : 5,
					pointHoverRadius : 10,
					pointBorderColor: 'yellow'
					},
					{label: '회원 평균 근골격량',
					borderColor: '#0000ff',
					data: [35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35],
					pointRadius : 5,
					pointHoverRadius : 10,
					fill:false
					}]
			},
			// Configuration options go here
			options: {
				maintainAspectRatio : false,
				}
			});
		})
	}
	let goroutine =()=>{
		$('a[class="myRoutine"] span'  )
		.click(e=>{
			e.preventDefault()
			alert('내 루틴 보기 진입')
		$('.masthead').remove()
		$('.page-footer').remove()
		$('#mainpage').empty()
		$('#mainpage').append(mypage_vue.mypage_routine())
		})
	}
	let gohelgram =()=>{
		$('a[class="myHelgram"] span'  )
		.click(e=>{
			e.preventDefault()
		$('.masthead').remove()
		$('.page-footer').remove()
		$('#mainpage').empty()
		$('#mainpage').append(mypage_vue.mypage_helgram())
		})		
	}
	let goprotein=()=>{
		$('a[class="myProtein"] span'  )
		.click(e=>{
			e.preventDefault()
			alert('단백질 계산 진입')
		$('.masthead').remove()
		$('.page-footer').remove()
		$('#mainpage').empty()
		$('#mainpage').append(mypage_vue.mypage_protein())
		})			
	}
	return{onCreate}
})()