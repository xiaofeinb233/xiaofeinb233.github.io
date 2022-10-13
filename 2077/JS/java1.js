// JavaScript Document
  window.onload=function()
  {


    var	btn_play=document.getElementById("music_play");
	var btn_pause=document.getElementById("music_pause");
	var Music=document.getElementById("mymusic");
	var show_video=document.getElementById("myvideo");
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
	show_video.onclick=function(){
		btn_play.className="show";
		btn_pause.className="hidden";
		Music.pause();
	}
	show_video1.onclick=function(){
		btn_play.className="show";
		btn_pause.className="hidden";
		Music.pause();
	}
	
	 
		  
}