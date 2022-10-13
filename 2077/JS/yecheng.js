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


	
	//a
	var myhr=document.getElementById("hr");
	var myhrrr=["夜之城/恶土/恶土.jpg","夜之城/海伍德/海伍德.jpg","夜之城/圣多明哥/圣多明哥.jpg","夜之城/市政中心/市政中心.jpg","夜之城/太平州/太平州.jpg","夜之城/威斯布鲁克/威斯布鲁克.jpg","夜之城/沃森/沃森.jpg"];
	//a
	//onmouseover_out
	var mytitle=document.getElementById("title");
	//onmouseover_out
	
	
	//name_change
	var mymainname=document.getElementById("mainname");
	var mymainnamerr=["恶土","海伍德","圣多明哥","市政中心","太平州","威斯布鲁克","沃森"]
	//name_change
	//introduce_change
	var myintroduce=document.getElementById("introduce");
	var myintroducerr=["恶土就是市区之外一望无际的荒凉平原，这儿只有分布着的零零碎碎的流浪者聚落，荒废的矿场与燃烧的油田，以及严重的污染，污浊不堪。恰是这些衬托的夜之城如同沙漠中的绿洲一般耀眼。但这也无法抵挡知情人在这儿寻找发财的机会。","海伍德是一个与北部的摩天大楼和公园，南部的危险的、不适宜居住的贫民窟形成鲜明对比的城区，这里是“夜市最大的卧室”，瓦伦蒂诺帮和六街帮这样的黑帮在这里从事各种“生意”。","圣多明哥是夜之城最古老的城区之一。商业巨头们仅把这儿作为各自实验项目的试验场，那些耸立的新工厂毫不留情地把旧工厂淘汰，而居民们则挤在这些大建筑里苟延残喘——祈祷着好事发生。","这里是市政中心，夜之城公司所在的地方。闪亮的摩天大楼构筑成如野蛮堡垒般的边界线，以其傲慢的姿态展示出超大型企业无与伦比的力量。自2077年以来，市政中心已经成为夜之城最坚固，最安全的地方。","太平洲本应是繁华富饶的度假胜地，却不料投资枯竭，导致如今腐朽颓败。这儿早已不见游客的身影，随处可见是武装暴力肆意横行的巫毒帮。因毫无警力投入，巫毒帮便是秩序的话事人。","许多人认为威斯布鲁克是夜市中最适合居住和娱乐的地方。如果你有钱，你就来这里消费。如果你没有呢？好吧，借一笔贷款，假装你是一位富豪——尽管只有一个美好的夜晚。","今天的沃森是一个充斥着悲伤与绝望的地方，这里是夜之城最贫穷的地方之一，也是虎爪帮和漩涡帮的战场。"]
	//introduce_change
	
	//pic_change
	var mypic=document.getElementById("pic");
	var mypicrr=["夜之城/恶土/恶土.jpg","夜之城/海伍德/海伍德.jpg","夜之城/圣多明哥/圣多明哥.jpg","夜之城/市政中心/市政中心.jpg","夜之城/太平州/太平州.jpg","夜之城/威斯布鲁克/威斯布鲁克.jpg","夜之城/沃森/沃森.jpg"]
	var myleftbtn=document.getElementById("leftbtn");
	var myrightbtn=document.getElementById("rightbtn");
	var index=0;
	var appear_index=1;
	
	//pic_change
	
	
	//pic_change
	myleftbtn.onclick=function()
	{
		appear_index++;
		index--;
		if(index<0)
			{
				index=mypicrr.length-1;
			}
		mypic.src=mypicrr[index];
		mymainname.innerHTML=mymainnamerr[index];
		myintroduce.innerHTML=myintroducerr[index];


		myhr.href=myhrrr[index];
	
		if(appear_index%2==0)
			{
			mypic.className="pic appear1";
				}
		else
			{
				mypic.className="pic appear2";
			}

		
	}
	myrightbtn.onclick=function()
	{
		appear_index++;
		index++;
		if(index>mypicrr.length-1)
			{
				index=0;
			}
		mypic.src=mypicrr[index];
		mymainname.innerHTML=mymainnamerr[index];
		myintroduce.innerHTML=myintroducerr[index];
		myhr.href=myhrrr[index];
		if(appear_index%2==0)
			{
			mypic.className="pic appear1";
				}
		else
			{
				mypic.className="pic appear2";
			}
		
	}
	//pic_change
	
	//onmouseover_out
	mytitle.onmouseover=function()
	{
		mytitle.className="titleC";
		mypic.className="picC";
	}
	mytitle.onmouseout=function()
	{
		mytitle.className="title";
		mypic.className="pic";
	}
	//onmouseover_out
	
	
	
	
	
	
	
	
	
	



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
	//music
	
	
}