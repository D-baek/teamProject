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
				gogrape()
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
	let gogrape =()=>{
		$('a[class="myGraph"] span'  )
		.click(e=>{
			e.preventDefault()
		$('.masthead').remove()
		$('.page-footer').remove()
		$('#mainpage').empty()
		$('#mainpage').append(mypage_vue.mypage_graph())
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
			alert('내 헬그램 보기 진입')
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