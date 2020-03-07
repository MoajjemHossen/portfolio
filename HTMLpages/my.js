document.querySelector('#sign').addEventListener('click',function(){
	document.querySelector('#loginAcount').innerHTML='<div id="logInBox"><div id="accountTitle"><h2>We Are Friends</h2></div><div id="logInRequire"><form><pre><label><i class="fa fa-envelope"></i>Email or Phone Number </label><input  type="email" placeholder="Please Enter Your Email or Number" required /><label><i class="fa fa-key"></i>Password </label><input type="password" placeholder="Please Enter Your Secret Password" required /></pre></form><button type="button">Sign In</button><span id="frGetPwd"><a href="#">Forget Password</a></span></div><div id="signUp"><h4>Create New An Account <span id="end"><a href="#"> Sign Up</a></span></h4></div>';
	
	//document.querySelector('.login').classList.remove('removeCla');
});
