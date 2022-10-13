// JavaScript Document
window.onload=function()
{
	

	var	btn_play=document.getElementById("music_play");
	var btn_pause=document.getElementById("music_pause");
	var Music=document.getElementById("mymusic");
    Music.volume=0.5;
	//tip
	var Tips=document.getElementById("TIP");

//pic change
	var A=document.getElementById("mypic");
	var mybanner=document.getElementById("BANNER");
	var timer=window.setInterval(autoChange,5000);
	var btn1=document.getElementById("left");
	var btn2=document.getElementById("right");
	var img=document.getElementById("img1");
	var imgrr=["image/JPG/游戏第一人称/1.jpg","image/JPG/游戏第一人称/2.jpg","image/JPG/游戏第一人称/3.jpg","image/JPG/游戏第一人称/4.jpg","image/JPG/游戏第一人称/5.jpg","image/JPG/游戏第一人称/6.jpg","image/JPG/游戏第一人称/7.jpg","image/JPG/游戏第一人称/8.jpg",];
	var index=0;
	var myindex=1;
	btn1.onclick=function()
	{   
		index--;
		if(index<0)
			{
				index=imgrr.length-1;
			}
		img.src=imgrr[index];
		A.href=imgrr[index];
		if(myindex%2==0)
		{
			img.className="show1";
		}
		else
			{
				img.className="show2";
			}
		myindex++;	
	}
	btn2.onclick=function()
	{
		
		index++;
		if(index>imgrr.length-1)
			{
				index=0;
			}
		img.src=imgrr[index];
		A.href=imgrr[index];
		if(myindex%2==0)
		{
			img.className="show1";
		}
		else
			{
				img.className="show2";
			}
		myindex++;
	}
	function autoChange()
	{
		index++;
		if(index>imgrr.length-1)
			{
				index=0;
			}
		img.src=imgrr[index];
		A.href=imgrr[index];
		if(myindex%2==0)
		{
			img.className="show1";
		}
		else
			{
				img.className="show2";
			}
		myindex++;
	}
	mybanner.onmouseover=function()
	{
		if(timer)
			clearTimeout(timer);
	}
	mybanner.onmouseout=function()
	{
		if(timer)
			clearTimeout(timer);
		timer=setInterval(autoChange,5000);
	}
	
	btn1.onmouseover=function()
	{
		if(timer)
			clearTimeout(timer);
	}
	btn1.onmouseout=function()
	{
		if(timer)
			clearTimeout(timer);
		timer=setInterval(autoChange,5000);
	}
	
	btn2.onmouseover=function()
	{
		if(timer)
			clearTimeout(timer)
	}
	btn2.onmouseout=function()
	{
		if(timer)
			clearTimeout(timer);
		timer=setInterval(autoChange,5000);
	}



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