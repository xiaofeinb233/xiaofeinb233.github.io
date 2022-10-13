// JavaScript Document
window.onload=function()
{
//music
	var	btn_play=document.getElementById("music_play");
	var btn_pause=document.getElementById("music_pause");
	var Music=document.getElementById("mymusic");
    Music.volume=0.5;
	//music
	//tip
	var Tips=document.getElementById("TIP");	
	//tip
	//a
	var myhr=document.getElementById("hr");
	var myhrrr=["video/帮派掠影.mp4","video/帮派掠影_1.mp4","video/帮派掠影_2.mp4","video/帮派掠影_3.mp4","video/帮派掠影_4.mp4","video/帮派掠影_5.mp4","video/帮派掠影_6.mp4"];
	//a
	//onmouseover_out
	var mytitle=document.getElementById("title");
	//onmouseover_out
	
	//backgif_change
	var mygifback=document.getElementById("gif_back");
	var mygifbackrr=["image/gif/旋涡帮.gif","image/gif/瓦伦蒂诺帮.gif","image/gif/六街帮.gif","image/gif/巫毒帮.gif","image/gif/动物帮.gif","image/gif/虎爪帮.gif","image/gif/莫克斯帮.gif"]
	//backgif_change
	//svglogo_change
	var mysvglogo=document.getElementById("svglogo");
	var mysvglogorr=["image/SVG/漩涡.svg","image/SVG/hat-cowboy.svg","image/SVG/six.svg","image/SVG/poison.svg","image/SVG/拳头优势.svg","image/SVG/claw-marks.svg","image/SVG/美女.svg"]
	//svglogo_change
	
	//name_change
	var mymainname=document.getElementById("mainname");
	var mymainnamerr=["漩涡帮","瓦伦蒂诺帮","六街帮","巫毒帮","动物帮","虎爪帮","莫克斯帮"]
	//name_change
	//introduce_change
	var myintroduce=document.getElementById("introduce");
	var myintroducerr=["漩涡帮是盘踞在沃森北部的工业区的一个极度危险的暴力帮派。您能在废弃全食品工厂，死亡之舞俱乐部等地见到他们。漩涡帮的成员大多沉迷于赛博科技，并且他们对改善自己“脆弱的肉体”的渴望远比对赛博精神病的恐惧要强。漩涡帮成员穿着皮革和镀铬衣服，身上有着神秘的黑色金属纹身，同时他们往往都安装了散发出恐怖红光的赛博义眼和内置了战斗强化组件的义肢。","瓦伦蒂诺帮是夜之城最大的帮派之一，有大约6000名成员。他们受到严格的道德规范和百年传统的束缚。瓦伦蒂诺帮控制着海伍德的拉丁裔贫困社区，他们极其严肃的对待荣誉，正义和兄弟情谊等价值观。瓦伦蒂诺帮是夜之城墨西哥文化的代表，他们将这些传统培育了一个多世纪，并在当地社区中根深蒂固。","六街帮是夜之城中的帮派之一。他们的标志是上面写着“第六街”三个字的蓝色五角星，或是一个黑色的骷髅头，内部印着黑色五角星和“第六街”三个字。六街帮的创立者是一帮对无所最为的NCPD极度不满的第四次公司战争的老兵，他们聚集在一起，创立了名为第六街的临时安保组织。","巫毒帮活跃主要在太平州，因其黑客技术和巫毒教的神秘习俗而臭名昭著的谜之帮派。该帮派的成员全部是海地人，他们是一个完全独立存在而且完全不信任任何的外来者的神秘帮派。该帮派最初的成员皆为海地移民克里奥尔文化的巫毒教祭司和女祭司。2062年，气候剧变在地球表面抹除了整个海地的存在，但也为巫毒教的历史写下了新的篇章。他们自称为海地难民的保护者，在太平州维护着海底人的利益和安全。","动物帮是一个没有固定据点，极具街头攻击性的帮派。众所周知，他们的成员几乎不使用电子植入体，而是更加倾向于使用量身定制的生物药剂。比如强力睾酮和动物激素，来让自己变得更加强壮。他们通常会学习多种格斗技巧，比如笼中格斗、互殴以及各种能够炫耀自己蛮力的行为，他们的凶狠和强壮使他们成为备受欢迎的保卫者。","虎爪帮是盘踞在日本城的残酷黑帮团伙，是夜之城最大的帮派之一，拥有5500名成员。虎爪帮的帮派结构与日本的其他黑社会集团极其相似。虎爪帮的成员以亚洲人为主，他们的主要目标是位置对自己地盘的控制，并偶尔吞并其他帮派的业务。虎爪帮成员的标志是身上发光的纹身、疾驰的街头自行车、武士刀和肋差。虎爪帮常常使用反应增强器、增强赛博义体、苦痛编辑器、以及伪装成荧光纹身的ECM系统。","莫克斯帮是一个小型的非地域性帮派。主要由性工作者、无政府主义者和性别少数群体构成。出于互生的利益和自卫而聚在一起。帮派的名字来自于一句古老的俚语“moxie”，代表着她们坚决反抗压迫者的意志。她们穿着风格往往同时具有朋克美学和妓女廉价感的外衣，但是她们不喜欢会束缚各种行动的服装，这样能让她们看起来更像黑帮成员而不是性工作者。"
]
	//introduce_change
	
	//pic_change
	var mypic=document.getElementById("pic");
	var mypicrr=["image/JPG/帮派/1.jpg","image/JPG/帮派/2.jpg","image/JPG/帮派/3.jpg","image/JPG/帮派/4.jpg","image/JPG/帮派/5.jpg","image/JPG/帮派/6.jpg","image/JPG/帮派/7.jpg"]
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
		mysvglogo.src=mysvglogorr[index];
		mygifback.src=mygifbackrr[index];
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
		mysvglogo.src=mysvglogorr[index];
		mygifback.src=mygifbackrr[index];
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
	myhr.onclick=function()
	{
		btn_play.className="show";
		btn_pause.className="hidden";
		Music.pause();
		//tips
		Tips.className="pips";
	}
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
	