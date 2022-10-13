// JavaScript Document


window.onload=function()

{ 
	
	
	
	
	var myspan =document.getElementById("span");
	myspan.click(function()
				{
		myspan.onclick=function()
	{
		myspan.className="singleC";
	}
	});
	myspan.onclick=function()
	{
		myspan.className="singleC";
	}
	
	
		
	
		

		
		
		
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	//music
	var	btn_play=document.getElementById("music_play");
	var btn_pause=document.getElementById("music_pause");
	var Music=document.getElementById("mymusic");
    Music.volume=0.5;
	//tip
	var Tips=document.getElementById("TIP");
	//music
	btn_play.onclick=function  ()
	{
		btn_play.className="hidden";
		btn_pause.className="show";
		Music.play();
		Tips.className="tips";
	
	}
	btn_pause.onclick=function  ()
	{
		btn_play.className="show";
		btn_pause.className="hidden";
		Music.pause();
		Tips.className="pips";
	
	}
	
}