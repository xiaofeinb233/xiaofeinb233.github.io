window.onload=function()

{ 
	//a
	var mygunhr=document.getElementById("gun_video");
	var mygunhrrr=["video/GUN1.mp4","video/GUN2.mp4","video/GUN3.mp4","video/GUN4.mp4","video/GUN5.mp4"];
	//a
	//span
	var myspan1=document.getElementById("span1");
	var mynamerr=["DR5 新星","DB-2 萨达拉","DS1 脉冲","D5 铜斑蛇","猫又"]
	//span
	//gunlogo
	var mygunlogo=document.getElementById("glg");
	var mygunlogorr=["image/SVG/pistol.svg","image/SVG/shotgun.svg","image/SVG/冲锋枪.svg","image/SVG/步枪.svg","image/SVG/sniper sight.svg"]
	
    //weaponshow_move
	var myweaponshow=document.getElementById("weapon_show");
	//weaponshow_move
	//wenbenbar
	var mydps=document.getElementById("dps");
	var mydamage=document.getElementById("damage");
	var mytime=document.getElementById("time");
	var mybullet=document.getElementById("bullet");
	var mystyle=document.getElementById("style");
	var myhow=document.getElementById("how");
	var myyoxi=document.getElementById("yoxi");
	var mydpsrr=["208.3&nbsp;DPS","268.2&nbsp;DPS","198.6&nbsp;DPS","216.3&nbsp;DPS","432&nbsp;DPS"];
	var mydamagerr=["93-114&nbsp;伤害","15-16*14&nbsp;伤害","15-23&nbsp;伤害","18-29&nbsp;伤害","310-423&nbsp;伤害"];
	var mytimerr=["2&nbsp;次攻击/秒","0.77&nbsp;次攻击/秒","8.89&nbsp;次攻击/秒","6.38&nbsp;次攻击/秒","0.97&nbsp;次攻击/秒"];
	var mystylerr=["动能","技术","动能","动能","技术"];
	var mybulletrr=["image/SVG/Bullet(1).svg","image/SVG/能量.svg","image/SVG/Bullet(1).svg","image/SVG/Bullet(1).svg","image/SVG/能量.svg"]
	var myhowrr=["子弹可以在表面上反弹","可以充能从而进行威力强大的射击","子弹可以在表面上反弹","子弹可以在表面上反弹","可以充能从而进行威力强大的射击"];
	var myyoxirr=["左轮手枪。永远不老。","萨达拉所至，金石为开。","脉冲，一个传承的黎明。","多变的武器，应用多样的战斗。","精准不打折。"];
	var mygun_introduction=document.getElementById("gun_introduction");
	//wenbenbar
	
	//gunlogo
	//btn
	var myleft=document.getElementById("left");
	var myright=document.getElementById("right");
	var mygun=document.getElementById("gun");
	var index=0;

	var myrr=["image/PNG/gun/1.png","image/PNG/gun/2.png","image/PNG/gun/3.png","image/PNG/gun/4.png","image/PNG/gun/5.png"];
	var myindex=1;
	
	//btn
	//gun_hover
	var myguntips=document.getElementById("gun_tips");
	var mygunlogocnm=document.getElementById("gun_logo");
	
	//gun_hover
	//gun_hover
	mygun.onmouseover=function()
	{
		myweaponshow.className="weapon_showC";
		mygun_introduction.className="gun_introductionC";
		
		myguntips.className="gun_tipsC";
		mygunlogocnm.className="gun_logoC";
	}
	mygun.onmouseout=function()
	{   
		myweaponshow.className="weapon_show";
		mygun_introduction.className="gun_introduction";
		
		myguntips.className="gun_tips";
		mygunlogocnm.className="gun_logo";
	}
	
	//gun_hover
	
	
	//music
	var	btn_play=document.getElementById("music_play");
	var btn_pause=document.getElementById("music_pause");
	var Music=document.getElementById("mymusic");
   
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
	//btn
	myleft.onclick=function(){
	
		index--;

		if(index<0)
			{
				index=myrr.length-1;
			}
		mygun.src=myrr[index];
		mygunlogo.src=mygunlogorr[index];
		myspan1.innerHTML=mynamerr[index];
		
		mydps.innerHTML=mydpsrr[index];
		mydamage.innerHTML=mydamagerr[index];
		mytime.innerHTML=mytimerr[index];
		mystyle.innerHTML=mystylerr[index];
		mybullet.src=mybulletrr[index];
		myhow.innerHTML=myhowrr[index];
		myyoxi.innerHTML=myyoxirr[index];
		mygunhr.href=mygunhrrr[index];
		if(myindex%2==0)
			{
				mygun.className="gun show1";
			}
		else{
			mygun.className="gun show2";
			
		}
		myindex++;
		
	}
	myright.onclick=function()
	{
		
		index++;
	
		if(index>myrr.length-1){
			index=0;
		}
		mygun.src=myrr[index];
		mygunlogo.src=mygunlogorr[index];
		myspan1.innerHTML=mynamerr[index];
		
		mydps.innerHTML=mydpsrr[index];
		mydamage.innerHTML=mydamagerr[index];
		mytime.innerHTML=mytimerr[index];
		mystyle.innerHTML=mystylerr[index];
		mybullet.src=mybulletrr[index];
		myhow.innerHTML=myhowrr[index];
		myyoxi.innerHTML=myyoxirr[index];
		mygunhr.href=mygunhrrr[index];
		
		if(myindex%2==0)
			{
				mygun.className="gun show1";
			}
		else{
			mygun.className="gun show2";
		}
		myindex++;
	}
	
	//btn
	
}// JavaScript Document