// JavaScript Document
  window.onload=function()
  {


    var	btn_play=document.getElementById("music_play");
	var btn_pause=document.getElementById("music_pause");
	var Music=document.getElementById("mymusic");
	
	
	var white1=document.getElementById("whileline1");
	var white2=document.getElementById("whileline2");
	var show_video1=document.getElementById("myvideo1");
	

	
	btn_play.onclick=function  ()
	{
		btn_play.className="hidden";
		btn_pause.className="show";
		Music.play();
	
	}
	btn_pause.onclick=function  ()
	{
		btn_play.className="show";
		btn_pause.className="hidden";
		Music.pause();
	
	}

	show_video1.onmouseover=function(){
		white1.className="huabian1_change";
		white2.className="huabian2_change";
	}
	show_video1.onmouseout=function(){
		white1.className="huabian1";
		white2.className="huabian2";
	}
	

		  
}