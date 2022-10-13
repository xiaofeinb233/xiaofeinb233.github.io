// JavaScript Document
//music
window.onload=function()
{
	var	btn_play=document.getElementById("music_play");
	var btn_pause=document.getElementById("music_pause");
	var Music=document.getElementById("mymusic");
    Music.volume=0.5;
	//tip
	var Tips=document.getElementById("TIP");	
    //video
	var myvideo1=document.getElementById("video1");
	var myrole_video1=document.getElementById("role_video1");
	var myvideo2=document.getElementById("video2");
	var myrole_video2=document.getElementById("role_video2");
	var myvideo3=document.getElementById("video3");
	var myrole_video3=document.getElementById("role_video3");
	
	var mybtn1=document.getElementById("btn1");
		var mybtn2=document.getElementById("btn2");
		var mybtn3=document.getElementById("btn3");
	//video
	
    


	
	
	
	
	
	
	
	
	//video
	myrole_video1.onmouseover=function(){
		myrole_video1.className="role_video1C";

		myvideo1.play();

	}
	
	myrole_video1.onmouseout=function(){
		

		myrole_video1.className="role_video1";
	}
	
	myrole_video2.onmouseover=function(){
		myrole_video2.className="role_video2C";

		myvideo2.play();

	}
	
	myrole_video2.onmouseout=function(){
		

		myrole_video2.className="role_video2";
	}
	
	myrole_video3.onmouseover=function(){
		myrole_video3.className="role_video3C";

		myvideo3.play();

	}
	
	myrole_video3.onmouseout=function(){
		

		myrole_video3.className="role_video3";
	}
	
	mybtn1.onclick=function()
	{
		btn_play.className="show";
		btn_pause.className="hidden";
		Music.pause();
		//tips
		Tips.className="pips";
	
	}
	mybtn2.onclick=function()
	{
		btn_play.className="show";
		btn_pause.className="hidden";
		Music.pause();
		//tips
		Tips.className="pips";
	
	}
	mybtn3.onclick=function()
	{
		btn_play.className="show";
		btn_pause.className="hidden";
		Music.pause();
		//tips
		Tips.className="pips";
	
	}
	//video











//music
	btn_play.onclick=function  ()
	{
		btn_play.className="hidden";
		btn_pause.className="show";
		Music.play();
		//tips
		Tips.className="tips";
	
	}
	btn_pause.onclick=function  ()
	{
		btn_play.className="show";
		btn_pause.className="hidden";
		Music.pause();
		//tips
		Tips.className="pips";
	
	}
	
	
}