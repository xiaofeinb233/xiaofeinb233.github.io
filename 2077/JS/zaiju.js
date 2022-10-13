// JavaScript Document
window.onload=function()
{
	

	var	btn_play=document.getElementById("music_play");
	var btn_pause=document.getElementById("music_pause");
	var Music=document.getElementById("mymusic");
    
	//tip
	var Tips=document.getElementById("TIP");
        var mybtn1=document.getElementById("btn1");
		var mybtn2=document.getElementById("btn2");
		var mybtn3=document.getElementById("btn3");
	    var mybtn4=document.getElementById("btn4");


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
	mybtn4.onclick=function()
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