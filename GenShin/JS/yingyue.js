// JavaScript Document
window.onload=function ()
{
	//span
	var span1=document.getElementById("span1");
	var span2=document.getElementById("span2");
	var span3=document.getElementById("span3");
	var span4=document.getElementById("span4");
	var span5=document.getElementById("span5");
	var span6=document.getElementById("span6");
	var span7=document.getElementById("span7");
	var span8=document.getElementById("span8");
	var span9=document.getElementById("span9");
	var span10=document.getElementById("span10");
	var span11=document.getElementById("span11");
	//span
	//music_pic
	var mypic=document.getElementById("music_pic");
	//music_pic
	//musicbar
	var mymusicbar=document.getElementById("musicbar");
	//musicbar
	//changepic
	var myC=document.getElementById("C");
	//changepic
	//download
	var myload=document.getElementById("download");
	var myload1=document.getElementById("download1");
	var myload2=document.getElementById("download2");
	var myload3=document.getElementById("download3");
	var myload4=document.getElementById("download4");
	var myload5=document.getElementById("download5");
	var myload6=document.getElementById("download6");
	var myload7=document.getElementById("download7");
	var myload8=document.getElementById("download8");
	var myload9=document.getElementById("download9");
	var myload10=document.getElementById("download10");
	
	//download
	//animi
	var myqqlogo=document.getElementById("qqlogo");
	var mycicle=document.getElementById("circle");
	var myanimi1=document.getElementById("animi1");
	var myanimi2=document.getElementById("animi2");
	//animi
	//heart
	var myheart=document.getElementById("heart");
	var myheart1=document.getElementById("heart1");
	var myheart2=document.getElementById("heart2");
	var myheart3=document.getElementById("heart3");
	var myheart4=document.getElementById("heart4");
	var myheart5=document.getElementById("heart5");
	var myheart6=document.getElementById("heart6");
	var myheart7=document.getElementById("heart7");
	var myheart8=document.getElementById("heart8");
	var myheart9=document.getElementById("heart9");
	var myheart10=document.getElementById("heart10");
	var myheartrr=["image/SVG/heart red.svg","image/SVG/heart white.svg"];
	var heart_index=1;
	var heart_index1=1;
	var heart_index2=1;
	var heart_index3=1;
	var heart_index4=1;
	var heart_index5=1;
	var heart_index6=1;
	var heart_index7=1;
	var heart_index8=1;
	var heart_index9=1;
	var heart_index10=1;
	//heart
	//musicbar and music_pic

	///mymusicbar.onmouseover=function ()
	//{
	//	mypic.className="music_pic low";
		
	//	myanimi1.className="anipi";
	//	myanimi2.className="anipi";
	//}
	
	//mymusicbar.onmouseout=function ()
	//{
	//	mypic.className="music_pic up";
		
	//	myanimi1.className="animi";
	//	myanimi2.className="animi";
	//}

	var num=0;
	myanimi2.onclick=function()
	{
		num++;
		if(num%2!=0)
		{
			mymusicbar.className="musicbar_change"
			mypic.className="music_pic low";
			myanimi1.className="anipi";
			myanimi2.className="anipi";
		}
		else
		{
			mymusicbar.className="musicbar"
			mypic.className="music_pic up";
			myanimi1.className="animi";
			myanimi2.className="animi";
		}
	}
	//musicbar and music_pic
	//animi move

	//animi move
	
	//play_pause
	var myplay_pause=document.getElementById("play_pause");
	var myplay_pause1=document.getElementById("play_pause1");
	var myplay_pause2=document.getElementById("play_pause2");
	var myplay_pause3=document.getElementById("play_pause3");
	var myplay_pause4=document.getElementById("play_pause4");
	var myplay_pause5=document.getElementById("play_pause5");
	var myplay_pause6=document.getElementById("play_pause6");
	var myplay_pause7=document.getElementById("play_pause7");
	var myplay_pause8=document.getElementById("play_pause8");
	var myplay_pause9=document.getElementById("play_pause9");
	var myplay_pause10=document.getElementById("play_pause10");
	var myplay_pauserr=["image/SVG/pause.svg","image/SVG/music_play.svg"];
	var pp_index=1;
	var pp_index1=1;
	var pp_index2=1;
	var pp_index3=1;
	var pp_index4=1;
	var pp_index5=1;
	var pp_index6=1;
	var pp_index7=1;
	var pp_index8=1;
	var pp_index9=1;
	var pp_index10=1;
	//play_pause
	//au
	var myau=document.getElementById("myau");
	var first_index=1;
	var first_index1=1;
	var first_index2=1;
	var first_index3=1;
	var first_index4=1;
	var first_index5=1;
	var first_index6=1;
	var first_index7=1;
	var first_index8=1;
	var first_index9=1;
	var first_index10=1;
	//au
	//play_pause
	myplay_pause.onclick=function()
	{
		first_index1=1;
		first_index2=1;
		first_index3=1;
		first_index4=1;
		first_index5=1;
		first_index6=1;
		first_index7=1;
		first_index8=1;
		first_index9=1;
		first_index10=1;
		

		span2.className="myspan";
		span3.className="myspan";
		span4.className="myspan";
		span5.className="myspan";
		span6.className="myspan";
		span7.className="myspan";
		span8.className="myspan";
		span9.className="myspan";
		span10.className="myspan";
		span11.className="myspan";
		
		myplay_pause1.src="image/SVG/music_play.svg";
		myplay_pause2.src="image/SVG/music_play.svg";
		myplay_pause3.src="image/SVG/music_play.svg";
		myplay_pause4.src="image/SVG/music_play.svg";
		myplay_pause5.src="image/SVG/music_play.svg";
		myplay_pause6.src="image/SVG/music_play.svg";
		myplay_pause7.src="image/SVG/music_play.svg";
		myplay_pause8.src="image/SVG/music_play.svg";
		myplay_pause9.src="image/SVG/music_play.svg";
		myplay_pause10.src="image/SVG/music_play.svg";
		
		
		pp_index1=1;
		pp_index2=1;
		pp_index3=1;
		pp_index4=1;
		pp_index5=1;
		pp_index6=1;
		pp_index7=1;
		pp_index8=1;
		pp_index9=1;
		pp_index10=1;
		
		
		
		
		
		if(first_index==1)
			{
				myau.src="music/钟离：听书人.mp3";
			}
		first_index++;
		pp_index++;
		if(pp_index>1){
			pp_index=0;
		}
	
		if(pp_index==0)
		{
			myC.src="image/JPG/音乐背景/1.jpg";
			myC.className="C play";
			myqqlogo.className="qqlogo play";
			mycicle.className="circle play";
			span1.className="myspanC";
			myau.play();
			myplay_pause.src=myplay_pauserr[pp_index];
			
		}
		else if(pp_index==1)
			
		{
			myC.className="C pause";
			myqqlogo.className="qqlogo pause";
			mycicle.className="circle pause";
			span1.className="myspanC";
			myau.pause();
			myplay_pause.src=myplay_pauserr[pp_index];
			
		}
	
	}
	
	
	myplay_pause1.onclick=function()
	{
		first_index=1;
		first_index2=1;
		first_index3=1;
		first_index4=1;
		first_index5=1;
		first_index6=1;
		first_index7=1;
		first_index8=1;
		first_index9=1;
		first_index10=1;
		

		span1.className="myspan";
		span3.className="myspan";
		span4.className="myspan";
		span5.className="myspan";
		span6.className="myspan";
		span7.className="myspan";
		span8.className="myspan";
		span9.className="myspan";
		span10.className="myspan";
		span11.className="myspan";
		
		
		myplay_pause.src="image/SVG/music_play.svg";
		myplay_pause2.src="image/SVG/music_play.svg";
		myplay_pause3.src="image/SVG/music_play.svg";
		myplay_pause4.src="image/SVG/music_play.svg";
		myplay_pause5.src="image/SVG/music_play.svg";
		myplay_pause6.src="image/SVG/music_play.svg";
		myplay_pause7.src="image/SVG/music_play.svg";
		myplay_pause8.src="image/SVG/music_play.svg";
		myplay_pause9.src="image/SVG/music_play.svg";
		myplay_pause10.src="image/SVG/music_play.svg";
		
		pp_index=1;
		pp_index2=1;
		pp_index3=1;
		pp_index4=1;
		pp_index5=1;
		pp_index6=1;
		pp_index7=1;
		pp_index8=1;
		pp_index9=1;
		pp_index10=1;
		
		if(first_index1==1)
			{
				myau.src="music/魈：历劫祓恶.mp3";
			}
		first_index1++;
		pp_index1++;
		if(pp_index1>1){
			pp_index1=0;
		}
	
		if(pp_index1==0)
		{
			myC.src="image/JPG/音乐背景/2.jpg";
			myC.className="C play";
			myqqlogo.className="qqlogo play";
			mycicle.className="circle play";
			span2.className="myspanC";
			myau.play();
			myplay_pause1.src=myplay_pauserr[pp_index1];
			
		}
		else if(pp_index1==1)
			
		{
			myC.className="C pause";
			myqqlogo.className="qqlogo pause";
			mycicle.className="circle pause";
			span2.className="myspanC";
			myau.pause();
			myplay_pause1.src=myplay_pauserr[pp_index1];
			
		}
	}
	
	myplay_pause2.onclick=function()
	{
		first_index=1;
		first_index1=1;
		first_index3=1;
		first_index4=1;
		first_index5=1;
		first_index6=1;
		first_index7=1;
		first_index8=1;
		first_index9=1;
		first_index10=1;
		

		span1.className="myspan";
		span2.className="myspan";
		span4.className="myspan";
		span5.className="myspan";
		span6.className="myspan";
		span7.className="myspan";
		span8.className="myspan";
		span9.className="myspan";
		span10.className="myspan";
		span11.className="myspan";
		
		myplay_pause.src="image/SVG/music_play.svg";
		myplay_pause1.src="image/SVG/music_play.svg";
		myplay_pause3.src="image/SVG/music_play.svg";
		myplay_pause4.src="image/SVG/music_play.svg";
		myplay_pause5.src="image/SVG/music_play.svg";
		myplay_pause6.src="image/SVG/music_play.svg";
		myplay_pause7.src="image/SVG/music_play.svg";
		myplay_pause8.src="image/SVG/music_play.svg";
		myplay_pause9.src="image/SVG/music_play.svg";
		myplay_pause10.src="image/SVG/music_play.svg";
		
			pp_index=1;
		pp_index1=1;
		pp_index3=1;
		pp_index4=1;
		pp_index5=1;
		pp_index6=1;
		pp_index7=1;
		pp_index8=1;
		pp_index9=1;
		pp_index10=1;
		
		if(first_index2==1)
			{
				myau.src="music/雷电将军：净土裁断.mp3";
			}
		first_index2++;
		pp_index2++;
		if(pp_index2>1){
			pp_index2=0;
		}
	
		if(pp_index2==0)
		{
			myC.src="image/JPG/音乐背景/3.jpg";
			myC.className="C play";
			myqqlogo.className="qqlogo play";
			mycicle.className="circle play";
			span3.className="myspanC";
			myau.play();
			myplay_pause2.src=myplay_pauserr[pp_index2];
			
		}
		else if(pp_index2==1)
			
		{
			myC.className="C pause";
			myqqlogo.className="qqlogo pause";
			mycicle.className="circle pause";
			span3.className="myspanC";
			myau.pause();
			myplay_pause2.src=myplay_pauserr[pp_index2];
			
		}
	}
	
	myplay_pause3.onclick=function()
	{
		first_index=1;
		first_index1=1;
		first_index2=1;
		first_index4=1;
		first_index5=1;
		first_index6=1;
		first_index7=1;
		first_index8=1;
		first_index9=1;
		first_index10=1;
		

		span1.className="myspan";
		span2.className="myspan";
		span3.className="myspan";
		span5.className="myspan";
		span6.className="myspan";
		span7.className="myspan";
		span8.className="myspan";
		span9.className="myspan";
		span10.className="myspan";
		span11.className="myspan";
		
		
		myplay_pause.src="image/SVG/music_play.svg";
		myplay_pause1.src="image/SVG/music_play.svg";
		myplay_pause2.src="image/SVG/music_play.svg";
		myplay_pause4.src="image/SVG/music_play.svg";
		myplay_pause5.src="image/SVG/music_play.svg";
		myplay_pause6.src="image/SVG/music_play.svg";
		myplay_pause7.src="image/SVG/music_play.svg";
		myplay_pause8.src="image/SVG/music_play.svg";
		myplay_pause9.src="image/SVG/music_play.svg";
		myplay_pause10.src="image/SVG/music_play.svg";
	
			pp_index=1;
		pp_index1=1;
		pp_index2=1;
		pp_index4=1;
		pp_index5=1;
		pp_index6=1;
		pp_index7=1;
		pp_index8=1;
		pp_index9=1;
		pp_index10=1;
		
		
		if(first_index3==1)
			{
				myau.src="music/达达利亚：魔王武装.mp3";
			}
		first_index3++;
		pp_index3++;
		if(pp_index3>1){
			pp_index3=0;
		}
	
		if(pp_index3==0)
		{
			myC.src="image/JPG/音乐背景/4.jpg";
			myC.className="C play";
			myqqlogo.className="qqlogo play";
			mycicle.className="circle play";
			span4.className="myspanC";
			myau.play();
			myplay_pause3.src=myplay_pauserr[pp_index3];
			
		}
		else if(pp_index3==1)
			
		{
			myC.className="C pause";
			myqqlogo.className="qqlogo pause";
			mycicle.className="circle pause";
			span4.className="myspanC";
			myau.pause();
			myplay_pause3.src=myplay_pauserr[pp_index3];
			
		}
	}
	
	myplay_pause4.onclick=function()
	{
		first_index=1;
		first_index1=1;
		first_index2=1;
		first_index3=1;
		first_index5=1;
		first_index6=1;
		first_index7=1;
		first_index8=1;
		first_index9=1;
		first_index10=1;
		first_index11=1;
		

		span1.className="myspan";
		span2.className="myspan";
		span3.className="myspan";
		span4.className="myspan";
		span6.className="myspan";
		span7.className="myspan";
		span8.className="myspan";
		span9.className="myspan";
		span10.className="myspan";
		
		
		myplay_pause.src="image/SVG/music_play.svg";
		myplay_pause1.src="image/SVG/music_play.svg";
		myplay_pause2.src="image/SVG/music_play.svg";
		myplay_pause3.src="image/SVG/music_play.svg";
		myplay_pause5.src="image/SVG/music_play.svg";
		myplay_pause6.src="image/SVG/music_play.svg";
		myplay_pause7.src="image/SVG/music_play.svg";
		myplay_pause8.src="image/SVG/music_play.svg";
		myplay_pause9.src="image/SVG/music_play.svg";
		myplay_pause10.src="image/SVG/music_play.svg";
		
		pp_index=1;
		pp_index1=1;
		pp_index2=1;
		pp_index3=1;
		pp_index5=1;
		pp_index6=1;
		pp_index7=1;
		pp_index8=1;
		pp_index9=1;
		pp_index10=1;
		
		if(first_index4==1)
			{
				myau.src="music/可莉：求求你啦.mp3";
			}
		first_index4++;
		pp_index4++;
		if(pp_index4>1){
			pp_index4=0;
		}
	
		if(pp_index4==0)
		{
			myC.src="image/JPG/音乐背景/5.jpg";
			myC.className="C play";
			myqqlogo.className="qqlogo play";
			mycicle.className="circle play";
			span5.className="myspanC";
			myau.play();
			myplay_pause4.src=myplay_pauserr[pp_index4];
			
		}
		else if(pp_index4==1)
			
		{
			myC.className="C pause";
			myqqlogo.className="qqlogo pause";
			mycicle.className="circle pause";
			span5.className="myspanC";
			myau.pause();
			myplay_pause4.src=myplay_pauserr[pp_index4];
			
		}
	}
	
	myplay_pause5.onclick=function()
	{
		first_index=1;
		first_index1=1;
		first_index2=1;
		first_index3=1;
		first_index4=1;
		first_index6=1;
		first_index7=1;
		first_index8=1;
		first_index9=1;
		first_index10=1;
		

		span1.className="myspan";
		span2.className="myspan";
		span3.className="myspan";
		span4.className="myspan";
		span5.className="myspan";
		span7.className="myspan";
		span8.className="myspan";
		span9.className="myspan";
		span10.className="myspan";
		span11.className="myspan";
		
			myplay_pause.src="image/SVG/music_play.svg";
		myplay_pause1.src="image/SVG/music_play.svg";
		myplay_pause2.src="image/SVG/music_play.svg";
		myplay_pause3.src="image/SVG/music_play.svg";
		myplay_pause4.src="image/SVG/music_play.svg";
		myplay_pause6.src="image/SVG/music_play.svg";
		myplay_pause7.src="image/SVG/music_play.svg";
		myplay_pause8.src="image/SVG/music_play.svg";
		myplay_pause9.src="image/SVG/music_play.svg";
		myplay_pause10.src="image/SVG/music_play.svg";
		
		pp_index=1;
		pp_index1=1;
		pp_index2=1;
		pp_index3=1;
		pp_index4=1;
		pp_index6=1;
		pp_index7=1;
		pp_index8=1;
		pp_index9=1;
		pp_index10=1;
		
		if(first_index5==1)
			{
				myau.src="music/枫原万叶：月下风来.mp3";
			}
		first_index5++;
		pp_index5++;
		if(pp_index5>1){
			pp_index5=0;
		}
	
		if(pp_index5==0)
		{
			myC.src="image/JPG/音乐背景/6.jpg";
			myC.className="C play";
			myqqlogo.className="qqlogo play";
			mycicle.className="circle play";
			span6.className="myspanC";
			myau.play();
			myplay_pause5.src=myplay_pauserr[pp_index5];
			
		}
		else if(pp_index5==1)
			
		{
			myC.className="C pause";
			myqqlogo.className="qqlogo pause";
			mycicle.className="circle pause";
			span6.className="myspanC";
			myau.pause();
			myplay_pause5.src=myplay_pauserr[pp_index5];
			
		}
	}
	
	myplay_pause6.onclick=function()
	{
		first_index=1;
		first_index1=1;
		first_index2=1;
		first_index3=1;
		first_index4=1;
		first_index5=1;
		first_index7=1;
		first_index8=1;
		first_index9=1;
		first_index10=1;
		

		span1.className="myspan";
		span2.className="myspan";
		span3.className="myspan";
		span4.className="myspan";
		span5.className="myspan";
		span6.className="myspan";
		span8.className="myspan";
		span9.className="myspan";
		span10.className="myspan";
		span11.className="myspan";
		
			myplay_pause.src="image/SVG/music_play.svg";
		myplay_pause1.src="image/SVG/music_play.svg";
		myplay_pause2.src="image/SVG/music_play.svg";
		myplay_pause3.src="image/SVG/music_play.svg";
		myplay_pause4.src="image/SVG/music_play.svg";
		myplay_pause5.src="image/SVG/music_play.svg";
		myplay_pause7.src="image/SVG/music_play.svg";
		myplay_pause8.src="image/SVG/music_play.svg";
		myplay_pause9.src="image/SVG/music_play.svg";
		myplay_pause10.src="image/SVG/music_play.svg";
		
		pp_index=1;
		pp_index1=1;
		pp_index2=1;
		pp_index3=1;
		pp_index4=1;
		pp_index5=1;
		pp_index7=1;
		pp_index8=1;
		pp_index9=1;
		pp_index10=1;
		if(first_index6==1)
			{
				myau.src="music/刻晴：七星之玉衡.mp3";
			}
		first_index6++;
		pp_index6++;
		if(pp_index6>1){
			pp_index6=0;
		}
	
		if(pp_index6==0)
		{
			myC.src="image/JPG/音乐背景/7.jpg";
			myC.className="C play";
			myqqlogo.className="qqlogo play";
			mycicle.className="circle play";
			span7.className="myspanC";
			myau.play();
			myplay_pause6.src=myplay_pauserr[pp_index6];
			
		}
		else if(pp_index6==1)
			
		{
			myC.className="C pause";
			myqqlogo.className="qqlogo pause";
			mycicle.className="circle pause";
			span7.className="myspanC";
			myau.pause();
			myplay_pause6.src=myplay_pauserr[pp_index6];
			
		}
	}
	
	myplay_pause7.onclick=function()
	{
		first_index=1;
		first_index1=1;
		first_index2=1;
		first_index3=1;
		first_index4=1;
		first_index5=1;
		first_index6=1;
		first_index8=1;
		first_index9=1;
		first_index10=1;
		

		span1.className="myspan";
		span2.className="myspan";
		span3.className="myspan";
		span4.className="myspan";
		span5.className="myspan";
		span6.className="myspan";
		span7.className="myspan";
		span9.className="myspan";
		span10.className="myspan";
		span11.className="myspan";
		
		
		
			myplay_pause.src="image/SVG/music_play.svg";
		myplay_pause1.src="image/SVG/music_play.svg";
		myplay_pause2.src="image/SVG/music_play.svg";
		myplay_pause3.src="image/SVG/music_play.svg";
		myplay_pause4.src="image/SVG/music_play.svg";
		myplay_pause5.src="image/SVG/music_play.svg";
		myplay_pause6.src="image/SVG/music_play.svg";
		myplay_pause8.src="image/SVG/music_play.svg";
		myplay_pause9.src="image/SVG/music_play.svg";
		myplay_pause10.src="image/SVG/music_play.svg";
		
		pp_index=1;
		pp_index1=1;
		pp_index2=1;
		pp_index3=1;
		pp_index4=1;
		pp_index5=1;
		pp_index6=1;
		pp_index8=1;
		pp_index9=1;
		pp_index10=1;
		if(first_index7==1)
			{
				myau.src="music/蒙德的一日.mp3";
			}
		first_index7++;
		pp_index7++;
		if(pp_index7>1){
			pp_index7=0;
		}
	
		if(pp_index7==0)
		{
			myC.src="image/JPG/音乐背景/8.jpg";
			myC.className="C play";
			myqqlogo.className="qqlogo play";
			mycicle.className="circle play";
			span8.className="myspanC";
			myau.play();
			myplay_pause7.src=myplay_pauserr[pp_index7];
			
		}
		else if(pp_index7==1)
			
		{
			myC.className="C pause";
			myqqlogo.className="qqlogo pause";
			mycicle.className="circle pause";
			span8.className="myspanC";
			myau.pause();
			myplay_pause7.src=myplay_pauserr[pp_index7];
			
		}
	}
	
	myplay_pause8.onclick=function()
	{
		first_index=1;
		first_index1=1;
		first_index2=1;
		first_index3=1;
		first_index4=1;
		first_index5=1;
		first_index6=1;
		first_index7=1;
		first_index9=1;
		first_index10=1;
		

		span1.className="myspan";
		span2.className="myspan";
		span3.className="myspan";
		span4.className="myspan";
		span5.className="myspan";
		span6.className="myspan";
		span7.className="myspan";
		span8.className="myspan";
		span10.className="myspan";
		span11.className="myspan";
		
		
			myplay_pause.src="image/SVG/music_play.svg";
		myplay_pause1.src="image/SVG/music_play.svg";
		myplay_pause2.src="image/SVG/music_play.svg";
		myplay_pause3.src="image/SVG/music_play.svg";
		myplay_pause4.src="image/SVG/music_play.svg";
		myplay_pause5.src="image/SVG/music_play.svg";
		myplay_pause6.src="image/SVG/music_play.svg";
		myplay_pause7.src="image/SVG/music_play.svg";
		myplay_pause9.src="image/SVG/music_play.svg";
		myplay_pause10.src="image/SVG/music_play.svg";
		
			pp_index=1;
		pp_index1=1;
		pp_index2=1;
		pp_index3=1;
		pp_index4=1;
		pp_index5=1;
		pp_index6=1;
		pp_index7=1;
		pp_index9=1;
		pp_index10=1;
		if(first_index8==1)
			{
				myau.src="music/胡桃：嗷.mp3";
			}
		first_index8++;
		pp_index8++;
		if(pp_index8>1){
			pp_index8=0;
		}
	
		if(pp_index8==0)
		{
			myC.src="image/JPG/音乐背景/9.jpg";
			myC.className="C play";
			myqqlogo.className="qqlogo play";
			mycicle.className="circle play";
			span9.className="myspanC";
			myau.play();
			myplay_pause8.src=myplay_pauserr[pp_index8];
			
		}
		else if(pp_index8==1)
			
		{
			myC.className="C pause";
			myqqlogo.className="qqlogo pause";
			mycicle.className="circle pause";
			span9.className="myspanC";
			myau.pause();
			myplay_pause8.src=myplay_pauserr[pp_index8];
			
		}
	}
	
	myplay_pause9.onclick=function()
	{
		first_index=1;
		first_index1=1;
		first_index2=1;
		first_index3=1;
		first_index4=1;
		first_index5=1;
		first_index6=1;
		first_index7=1;
		first_index8=1;
		first_index10=1;
		
	
		span1.className="myspan";
		span2.className="myspan";
		span3.className="myspan";
		span4.className="myspan";
		span5.className="myspan";
		span6.className="myspan";
		span7.className="myspan";
		span8.className="myspan";
		span9.className="myspan";
		span11.className="myspan";
		
		
			myplay_pause.src="image/SVG/music_play.svg";
		myplay_pause1.src="image/SVG/music_play.svg";
		myplay_pause2.src="image/SVG/music_play.svg";
		myplay_pause3.src="image/SVG/music_play.svg";
		myplay_pause4.src="image/SVG/music_play.svg";
		myplay_pause5.src="image/SVG/music_play.svg";
		myplay_pause6.src="image/SVG/music_play.svg";
		myplay_pause7.src="image/SVG/music_play.svg";
		myplay_pause8.src="image/SVG/music_play.svg";
		myplay_pause10.src="image/SVG/music_play.svg";
		
			pp_index=1;
		pp_index1=1;
		pp_index2=1;
		pp_index3=1;
		pp_index4=1;
		pp_index5=1;
		pp_index6=1;
		pp_index7=1;
		pp_index8=1;
		pp_index10=1;
		if(first_index9==1)
			{
				myau.src="music/让风告诉你.mp3";
			}
		first_index9++;
		pp_index9++;
		if(pp_index9>1){
			pp_index9=0;
		}
	
		if(pp_index9==0)
		{
			myC.src="image/JPG/音乐背景/10.jpg";
			myC.className="C play";
			myqqlogo.className="qqlogo play";
			mycicle.className="circle play";
			span10.className="myspanC";
			myau.play();
			myplay_pause9.src=myplay_pauserr[pp_index9];
			
		}
		else if(pp_index9==1)
			
		{
			myC.className="C pause";
			myqqlogo.className="qqlogo pause";
			mycicle.className="circle pause";
			span10.className="myspanC";
			myau.pause();
			myplay_pause9.src=myplay_pauserr[pp_index9];
			
		}
	}
	
	myplay_pause10.onclick=function()
	{
		first_index=1;
		first_index1=1;
		first_index2=1;
		first_index3=1;
		first_index4=1;
		first_index5=1;
		first_index6=1;
		first_index7=1;
		first_index8=1;
		first_index9=1;
		
		
		span1.className="myspan";
		span2.className="myspan";
		span3.className="myspan";
		span4.className="myspan";
		span5.className="myspan";
		span6.className="myspan";
		span7.className="myspan";
		span8.className="myspan";
		span9.className="myspan";
		span10.className="myspan";
		
			myplay_pause.src="image/SVG/music_play.svg";
		myplay_pause1.src="image/SVG/music_play.svg";
		myplay_pause2.src="image/SVG/music_play.svg";
		myplay_pause3.src="image/SVG/music_play.svg";
		myplay_pause4.src="image/SVG/music_play.svg";
		myplay_pause5.src="image/SVG/music_play.svg";
		myplay_pause6.src="image/SVG/music_play.svg";
		myplay_pause7.src="image/SVG/music_play.svg";
		myplay_pause8.src="image/SVG/music_play.svg";
		myplay_pause9.src="image/SVG/music_play.svg";
		
			pp_index=1;
		pp_index1=1;
		pp_index2=1;
		pp_index3=1;
		pp_index4=1;
		pp_index5=1;
		pp_index6=1;
		pp_index7=1;
		pp_index8=1;
		pp_index9=1;
		if(first_index10==1)
			{
				myau.src="music/原神主题音乐.mp3";
			}
		first_index10++;
		pp_index10++;
		if(pp_index10>1){
			pp_index10=0;
		}
	
		if(pp_index10==0)
		{
			myC.src="image/JPG/音乐背景/11.jpg";
			myC.className="C play";
			myqqlogo.className="qqlogo play";
			mycicle.className="circle play";
			span11.className="myspanC";
			myau.play();
			myplay_pause10.src=myplay_pauserr[pp_index10];
			
		}
		else if(pp_index10==1)
			
		{
			myC.className="C pause";
			myqqlogo.className="qqlogo pause";
			mycicle.className="circle pause";
			span11.className="myspanC";
			myau.pause();
			myplay_pause10.src=myplay_pauserr[pp_index10];
			
		}
	}
	//play_pause
	//heart
	
	
	
	
	myheart.onclick=function ()
	{
		heart_index++;
		if(heart_index>1){
			heart_index=0;
		}
	
		if(heart_index==0)
		{
			myheart.src=myheartrr[heart_index];
		}
		else if(heart_index==1)
		{
			myheart.src=myheartrr[heart_index];
		}
	}
	
	myheart1.onclick=function ()
	{
		heart_index1++;
		if(heart_index1>1){
			heart_index1=0;
		}
	
		if(heart_index1==0)
		{
			myheart1.src=myheartrr[heart_index1];
		}
		else if(heart_index1==1)
		{
			myheart1.src=myheartrr[heart_index1];
		}
	}
	
	myheart2.onclick=function ()
	{
		heart_index2++;
		if(heart_index2>1){
			heart_index2=0;
		}
	
		if(heart_index2==0)
		{
			myheart2.src=myheartrr[heart_index2];
		}
		else if(heart_index2==1)
		{
			myheart2.src=myheartrr[heart_index2];
		}
	}
	
	myheart3.onclick=function ()
	{
		heart_index3++;
		if(heart_index3>1){
			heart_index3=0;
		}
	
		if(heart_index3==0)
		{
			myheart3.src=myheartrr[heart_index3];
		}
		else if(heart_index3==1)
		{
			myheart3.src=myheartrr[heart_index3];
		}
	}
	
	myheart4.onclick=function ()
	{
		heart_index4++;
		if(heart_index4>1){
			heart_index4=0;
		}
	
		if(heart_index4==0)
		{
			myheart4.src=myheartrr[heart_index4];
		}
		else if(heart_index4==1)
		{
			myheart4.src=myheartrr[heart_index4];
		}
	}
	
	myheart5.onclick=function ()
	{
		heart_index5++;
		if(heart_index5>1){
			heart_index5=0;
		}
	
		if(heart_index5==0)
		{
			myheart5.src=myheartrr[heart_index5];
		}
		else if(heart_index5==1)
		{
			myheart5.src=myheartrr[heart_index5];
		}
	}
	
	myheart6.onclick=function ()
	{
		heart_index6++;
		if(heart_index6>1){
			heart_index6=0;
		}
	
		if(heart_index6==0)
		{
			myheart6.src=myheartrr[heart_index6];
		}
		else if(heart_index6==1)
		{
			myheart6.src=myheartrr[heart_index6];
		}
	}
	
	myheart7.onclick=function ()
	{
		heart_index7++;
		if(heart_index7>1){
			heart_index7=0;
		}
	
		if(heart_index7==0)
		{
			myheart7.src=myheartrr[heart_index7];
		}
		else if(heart_index7==1)
		{
			myheart7.src=myheartrr[heart_index7];
		}
	}
	
	myheart8.onclick=function ()
	{
		heart_index8++;
		if(heart_index8>1){
			heart_index8=0;
		}
	
		if(heart_index8==0)
		{
			myheart8.src=myheartrr[heart_index8];
		}
		else if(heart_index8==1)
		{
			myheart8.src=myheartrr[heart_index8];
		}
	}
	
	myheart9.onclick=function ()
	{
		heart_index9++;
		if(heart_index9>1){
			heart_index9=0;
		}
	
		if(heart_index9==0)
		{
			myheart9.src=myheartrr[heart_index9];
		}
		else if(heart_index9==1)
		{
			myheart9.src=myheartrr[heart_index9];
		}
	}
	
	myheart10.onclick=function ()
	{
		heart_index10++;
		if(heart_index10>1){
			heart_index10=0;
		}
	
		if(heart_index10==0)
		{
			myheart10.src=myheartrr[heart_index10];
		}
		else if(heart_index10==1)
		{
			myheart10.src=myheartrr[heart_index10];
		}
	}
	//heart
	//download
	myload.onclick=function()
	{
		
		alert("公告: 下载功能尚不完善，下载音乐，请右键新页面另存为到本地");
			  
		window.open("music/钟离：听书人.mp3");
	}
	
	myload1.onclick=function()
	{
		
		alert("公告: 下载功能尚不完善，下载音乐，请右键新页面另存为到本地");
			  
		window.open("music/魈：历劫祓恶.mp3");
	}
	
	myload2.onclick=function()
	{
		
		alert("公告: 下载功能尚不完善，下载音乐，请右键新页面另存为到本地");
			  
		window.open("music/雷电将军：净土裁断.mp3");
	}
	
	myload3.onclick=function()
	{
		
		alert("公告: 下载功能尚不完善，下载音乐，请右键新页面另存为到本地");
			  
		window.open("music/达达利亚：魔王武装.mp3");
	}
	
	myload4.onclick=function()
	{
		
		alert("公告: 下载功能尚不完善，下载音乐，请右键新页面另存为到本地");
			  
		window.open("music/可莉：求求你啦.mp3");
	}
	
	myload5.onclick=function()
	{
		
		alert("公告: 下载功能尚不完善，下载音乐，请右键新页面另存为到本地");
			  
		window.open("music/枫原万叶：月下风来.mp3");
	}
	
	myload6.onclick=function()
	{
		
		alert("公告: 下载功能尚不完善，下载音乐，请右键新页面另存为到本地");
			  
		window.open("music/刻晴：七星之玉衡.mp3");
	}
	
	myload7.onclick=function()
	{
		
		alert("公告: 下载功能尚不完善，下载音乐，请右键新页面另存为到本地");
			  
		window.open("music/蒙德的一日.mp3");
	}
	
	myload8.onclick=function()
	{
		
		alert("公告: 下载功能尚不完善，下载音乐，请右键新页面另存为到本地");
			  
		window.open("music/胡桃：嗷.mp3");
	}
	
	myload9.onclick=function()
	{
		
		alert("公告: 下载功能尚不完善，下载音乐，请右键新页面另存为到本地");
			  
		window.open("music/让风告诉你.mp3");
	}
	
	myload10.onclick=function()
	{
		
		alert("公告: 下载功能尚不完善，下载音乐，请右键新页面另存为到本地");
			  
		window.open("music/原神主题音乐.mp3");
	}
	//download

}