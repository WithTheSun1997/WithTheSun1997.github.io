// JavaScript Document

//随机验证码生成
	//获取元素
	var usenm = document.querySelector('.user');
	var psw = document.querySelector('.ward');
	var div = document.querySelector('.ve-code');
	var inputcode = document.querySelector('.ve-text');
	var btn = document.querySelector('.verify-btn');
   //创建字符库
	var characters = "QWERTYUIOPASDFGHJKLZXCVBNMqwertyuiopasdfghjklzxcvbnm0123456789";
	var str;
	
	//生成随机整数
	function getRandom(l,r){
		return parseInt(l + Math.random()*(r - l + 1));
	}
	//设置文本不可选中
	div.addEventListener('selectstart',function(e){
		e.preventDefault();
	})
	
	//随机生成验证码元素和样式
	function run(){
		str = '';
		while(div.hasChildNodes()){
			div.removeChild(div.firstChild);
		}
		
		for(var i = 0;i < 4;i++){
			var span = document.createElement('span');
			span.innerHTML = characters[getRandom(0,characters.length - 1)];
			
			span.style.display = 'inline-block';
			span.style.fontSize = getRandom(16,32) + 'px';
			span.style.color = 'rgb('+getRandom(0,200)+','+getRandom(0,200)+','+getRandom(0,200)+')';
			span.style.textTransform = 'translate(' + getRandom(-5,5) + 'px' + getRandom(-5,5) + 'px)rotate(' + getRandom(-20,20) + 'deg)';
			str += span.innerHTML;
			span.style.height = '40px';
			div.appendChild(span);
		}
	}
	
	//每次打开刷新
	run();
	//每次点击重置
	div.addEventListener('click',run);
	
//随机验证码生成结束

//验证判断

	// btn.addEventListener('click',function(){
	// 	if(usenm.value == ''){
	// 		alert('请输入用户名');
	// 	}else if(psw.value == ''){
	// 		alert('请输入您的密码');
	// 	}else if(input.value.toLowerCase() != str.toLowerCase() || input.value == ''){
	// 		alert('验证失败');
	// 	}else{
	// 		alert('欢迎访问青年志愿者协会');
	// 	}
	// 	run();
	// 	input.value = '';
	// })

//验证结束













