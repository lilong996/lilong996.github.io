window.onload=function(){
	var prev=document.getElementById('prev'),
	pla=document.getElementById('play'),
	next=document.getElementById('next'),
	left=document.getElementById('left-banner'),
	durBar=document.getElementById('dur-bar'),
	curBar=document.getElementById('cur-bar'),
	hovBar=document.getElementById('hov-bar'),
	album=["飞云之下","江南","明天你好","万有引力","陈奕迅 - 十年","戴佩妮 - 怎样","范玮琪 - 一个像夏天一个像秋天","高至豪 - The Truth That You Leave"],
	singer=["韩红-林俊杰","林俊杰","牛奶咖啡","汪苏泷","陈奕迅","戴佩妮","范玮琪","高至豪"],
	albumSrc=["mp3/韩红 - 飞云之下.mp3","mp3/林俊杰 - 江南.mp3","mp3/牛奶咖啡 (Milk Coffee) - 明天，你好.mp3","mp3/汪苏泷 - 万有引力.mp3","mp3/陈奕迅 - 十年.mp3","mp3/戴佩妮 - 怎样.mp3","mp3/范玮琪 - 一个像夏天一个像秋天.mp3","mp3/高至豪 - The Truth That You Leave (钢琴曲).mp3"],
	onOff=true,
	curt,
  cur,
  timer,
	index=0;

    pla.onclick=function(){
    	 
    	 play();
    	 songbox();
       init(); 
       update();  
    }

    function play(){
    	if(onOff){
    		pla.style.backgroundPosition="0 -65px";
    		audio.play();
    		curt=setInterval(progressTime,1000);
    		rotate();
    		onOff=false;

    	}else{
    		pla.style.backgroundPosition="0 -6px";
    		onOff=true;
    		audio.pause();
    		clearInterval(timer);
    	}
    }
   
	 next.onclick=function(){
      // if(!onOff){clearInterval(timer)}; 
      if (index>albumSrc.length-1) {index = -1}
    	index++;
    	auto();
 }
	  prev.onclick=function(){
      // if(!onOff){clearInterval(timer)}; 
      if (index<0) {index = albumSrc.length-1}
    	index--;
    	auto();   
 }  

        function auto(){
        songbox();
        rotate();
        Img();
        son();
        play();
        update();
        audio.src=albumSrc[index];
        audio.play();
        pla.style.backgroundPosition="0 -65px";

 }
		function rotate(){
      clearInterval(timer);
		        var deg=0;
		        flag=1;
		        timer=setInterval(function(){
		            left.style.transform="rotate("+deg+"deg)";
		            deg+=2;
		            if(deg>360){
		                deg=0;
		            }
		        },30);
		    
        }


//时间

   var curMinutes,curSeconds,durMinutes,durSeconds ,playProgress;
   

    function  update(){

  item=setInterval(function(){
  
        curMinutes = Math.floor(audio.currentTime/60);
        curSeconds = Math.floor(audio.currentTime-curMinutes*60);

        durMinutes = Math.floor(audio.duration/60);
        durSeconds = Math.floor(audio.duration-durMinutes*60);

        playProgress = (audio.currentTime/audio.duration);

    if(curMinutes < 10)
      curMinutes = '0'+curMinutes;
    if(curSeconds < 10)
      curSeconds = '0'+curSeconds;
    
    if(durMinutes < 10)
      durMinutes = '0'+durMinutes;
    if(durSeconds < 10)
      durSeconds = '0'+durSeconds;
        
        if( isNaN(curMinutes) || isNaN(curSeconds) )
            $("#cur-time").html('00:00');//当前时间
        else
            $("#cur-time").html(curMinutes+':'+curSeconds);

        if( isNaN(durMinutes) || isNaN(durSeconds) )
            $("#dur-time").html('00:00');//歌曲总时间
        else
            $("#dur-time").html(durMinutes+':'+durSeconds);

  },1000)
       

}

        function progressTime(){
         cur = audio.currentTime/audio.duration;
          	$('#circle')[0].style.marginLeft=~~(cur*$('#dur-bar')[0].offsetWidth)+'px';
            $('#cur-bar')[0].style.width=~~(cur*$('#dur-bar')[0].offsetWidth)+'px';
        	}
      progressTime();

        var  AlbumName=document.getElementById('album-name'),
             SingerName=document.getElementById('singer-name'),
             Album=document.getElementById('album');

           function songbox(){
           	if (index>0||index<singer.length-1) {
           		Album.innerHTML=album[index];
           		SingerName.innerHTML=singer[index];
           		AlbumName.innerHTML=album[index];
           	}
           }
  var  img=document.getElementById('left-banner').getElementsByTagName('img')
       function Img(){

        for (var i = 0; i < img.length; i++) {
          img[i].className=" ";
           audio.play();
        }
          img[index].className="show";
       }


 
   var   sear=document.getElementById("search");
    
    

      sear.onblur=function(){
        var n=document.getElementById("search").value;

        if (n=="飞云之下") {
          index=0;
          auto();
        }else if(n=="江南"){
          index=1;
          auto();
        }else if(n=="明天你好"){
          index=2;
          auto();
        }else if(n=="万有引力"){
          index=3;
          auto();
        }else if(n=="十年"){
          index=4;
          auto();
        }else if(n=="怎样"){
          index=5;
          auto();
        }else if(n=="一个像夏天一个像秋天"){
          index=6;
          auto();
        }else if(n=="The Truth That You Leave"){
          index=7;
          auto();
        }
        
        }

       var Lin=document.getElementById("LIN"),
           Nan=document.getElementById("Nan"),
           Tom=document.getElementById("Tom"),
           Wan=document.getElementById("Wan"),
           Chen=document.getElementById("Chen"),
           Dai=document.getElementById("Dai"),
           Fan=document.getElementById("Fan"),
           Gao=document.getElementById("Gao"),
           songList=document.getElementById("songList").getElementsByTagName("li");
    function son(){
     for (var i = 0; i < songList.length; i++) {
      songList[i].className=" ";
     }
      songList[index].className="co";
    }

    Lin.onclick=function(){
      index=0;
      auto();
    }
    Nan.onclick=function(){
      index=1;
      auto();
    }
    Tom.onclick=function(){
      index=2;
      auto();
    }
    Wan.onclick=function(){
      index=3;
      auto();
    }
     Chen.onclick=function(){
      index=4;
      auto();
    }
     Dai.onclick=function(){
      index=5;
      auto();
    }
     Fan.onclick=function(){
      index=6;
      auto();
    }
     Gao.onclick=function(){
      index=7;
      auto();
    }
   var str='';
  function init(){
   var g=songData[index].songLyrics.split('[');
       g.forEach(function(current){
        var h=current.split(']');
        var lyrics=h[1];
        var q=h[0].split('.');//切割时间
       var n=q[0].split(':');
      var time=n[0]*60+parseInt(n[1]);
      
      if(lyrics){
        str+='<p id="s'+time+'">'+lyrics+'<p>';
      }

       $('.jspPane')[0].innerHTML=str;
       })
  }
init();

  
//
//  function snow() {
//    //1、定义一片雪花模板
//    var flake = $("<div>").css({
//      "position": "absolute",
//      "color": "#fff"
//    }).html("❄");
// 
//    //获取页面的宽度，利用这个数来算出，雪花开始时left的值
//    var documentWidth = $(document).width();
// 
//    //获取页面的高度 相当于雪花下落结束时Y轴的位置
//    var documentHieght = $(document).height();
// 
//    //定义生成一片雪花的毫秒数
//    var millisec = 100;
//    //2、设置第一个定时器，周期性定时器，每隔一段时间（millisec）生成一片雪花；
//    setInterval(function() {
//      //随机生成雪花下落 开始 时left的值，相当于开始时X轴的位置
//      var startLeft = Math.random() * documentWidth;
// 
//      //随机生成雪花下落 结束 时left的值，相当于结束时X轴的位置
//      var endLeft = Math.random() * documentWidth;
// 
//      //随机生成雪花大小
//      var flakeSize = 5 + 20 * Math.random();
// 
//      //随机生成雪花下落持续时间
//      var durationTime = 4000 + 7000 * Math.random();
// 
//      //随机生成雪花下落 开始 时的透明度
//      var startOpacity = 0.7 + 0.3 * Math.random();
// 
//      //随机生成雪花下落 结束 时的透明度
//      var endOpacity = 0.2 + 0.2 * Math.random();
// 
//      //3、克隆一个雪花模板,定义雪花的初始样式，拼接到页面中
//      flake.clone().appendTo($("body")).css({
//        "left": startLeft,
//        "opacity": startOpacity,
//        "font-size": flakeSize,
//        "top": "-25px",
//      }).animate({ //执行动画
//        "left": endLeft,
//        "opacity": endOpacity,
//        "top": documentHieght
//      }, durationTime, function() {
//        //4、当雪花落下后，删除雪花。
//        $(this).remove(); 
//      });
//    }, millisec);
//  };
//  snow();



}

