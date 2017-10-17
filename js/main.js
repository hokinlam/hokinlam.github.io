(function(){
	var dropdownListArr = document.getElementsByClassName('dropdown-list');
	var centerUl = document.getElementsByClassName('center')[0].children[0].children;
	var dropdown = document.getElementsByClassName('dropdown')[0];
	var search = document.getElementsByClassName('search')[0];
	var mainpartDetail = document.getElementsByClassName('mainpart-detail');
	var mainleft = document.getElementsByClassName('mainpart-left')[0].children[0].children;
	var dbr = document.getElementsByClassName('detail-bottom-right')[0];
	var dbrLi = dbr.getElementsByTagName('li');
	var dbl = document.getElementById('dbl');
	var ltt = document.getElementById('ltt');
	var ltt2 = document.getElementById('ltt2');
	var rp = document.getElementById('rp');

	// 通用函数
		// 选项卡(nav是数组，detail是数组，bigpart是单个元素)
		// function tab (nav,detail,bigpart){
		// 	for (var i = 0; i < nav.length; i++) {
		// 		nav[i].id = i ;
		// 		nav[i].onmouseover = function () {
		// 			for (var j = 0; j < detail.length; j++) {
		// 				detail[j].style.display = "none";				
		// 					bigpart.style.display = "none";		
		// 			};
		// 			detail[this.id].style.display = "block";	
		// 					bigpart.style.display = "block";					
		// 			}
		// 		nav[i].onmouseout = function () {
		// 			bigpart.style.display = "none";
		// 		}
		// 	};
		// }
		// slider
	// translateY(-3px)
		function t3 (ele) {
			ele.onmouseover = function () {
				this.style.boxShadow = '0 0 20px rgba(0,0,0,.3)';
				this.style.transform = "translateY(-3px)";
			}
			ele.onmouseout = function () {
				this.style.boxShadow = 'none';
				this.style.transform = "translateY(0)";
			}
		}
		

	//dropdown 
	for (var i = 0; i < centerUl.length; i++) {
		centerUl[i].id = i ;
		centerUl[i].onmouseover = function () {
			for (var j = 0; j < dropdownListArr.length; j++) {
				dropdownListArr[j].style.display = "none";
				dropdown.style.display = "none";
			};
			dropdownListArr[this.id].style.display = "block";
			dropdown.style.display = "block";
		}
		centerUl[i].onmouseout = function () {
			dropdown.style.display = "none";
		}
	};
	


	// search 
	search.children[0].onfocus = function () {
		search.children[3].style.display = 'block';
		search.children[1].style.display = 'none';
		search.children[0].style.border = '1px solid #ff6700';
		search.children[2].style.border = '1px solid #ff6700';
		search.children[3].style.border = '1px solid #ff6700';
	}
	search.children[0].onblur = function () {
		search.children[3].style.display = 'none';
		search.children[1].style.display = 'block';
		search.children[0].style.border = 'none';
		search.children[2].style.border = 'none';
		search.children[3].style.border = 'none';
	}

	// mainpart-detail
	for (var i = 0; i < mainleft.length; i++) {
		mainleft[i].id = i ;
		mainleft[i].onmouseover = function () {
			for (var j = 0; j < mainpartDetail.length; j++) {
				mainpartDetail[j].style.display = "none";
			};
			mainpartDetail[this.id].style.display = "block";
			
		}
		mainleft[i].onmouseout = function () {
			for (var k = 0; k < mainpartDetail.length; k++) {
				mainpartDetail[k].style.display = "none";
			};
		}
	};

	// dbl
	t3(dbl);
	// ltt ltt2
	t3(ltt);
	t3(ltt2);
	// rp
	for (var l =0 ;  l < rp.children.length; l++) {
		t3(rp.children[l]);
	}

	// detail-bottom-right
	for (var i = dbrLi.length - 1; i >= 0; i--) {
		dbrLi[i].onmouseover = function () {
			this.children[4].style.bottom = '0';
			this.style.boxShadow = '0 0 10px rgba(0,0,0,.3)';
			this.style.transform = "translateY(-3px)";
		}
		dbrLi[i].onmouseout = function () {
			this.children[4].style.bottom = '-76px';
			this.style.boxShadow = 'none';
			this.style.transform = "translateY(0)";
		}
	};

	// slider
	var all = document.getElementsByClassName('mainpart-slider')[0];
	var screen = all.children[0];
	var ul = screen.children[0];
	var lis = ul.children;
	var ol = screen.children[1];
	var firstLi = ul.children[0];
	var arr = document.getElementById("arrow");
    var arrL = arr.children[0];
    var arrR = arr.children[1];

    //2、克隆
        var newLi = firstLi.cloneNode(true);
        //3、加入到图片最后   a.appendChild(b);
        ul.appendChild(newLi);

    //2、动态生成li。
        for(var i=0;i<lis.length-1;i++){
            var lilili = document.createElement("li");
            
            ol.appendChild(lilili);
        }

    //3、焦点悬停动画。
        //1、小方块的颜色切换(排他思想)
        var olLis = ol.children;
        olLis[0].className = "current";
        for(var i=0;i<olLis.length;i++){
            olLis[i].index = i;
            olLis[i].onmouseover = function () {
                for(var j=0;j<olLis.length;j++){
                    olLis[j].className = "";
                }
                this.className = "current";

                key = square = this.index;
                //2、图片的切换
                animate(ul,-this.index*lis[0].offsetWidth)
            }
        }

    //4、加定时器
        var timer = null;
        //图片
        var key = 0;
        //小方块
        var square = 0;

        timer = setInterval(autoPlay,6000);

        function autoPlay(){
            key++;
            square++;
            if(key>3){
                key=1;
                ul.style.left = 0+ 'px';
            }
            animate(ul,-key*lis[0].offsetWidth);

            square = square > olLis.length-1? 0:square;
            for(var i=0;i<olLis.length;i++){
                olLis[i].className = "";
            }
            olLis[square].className = "current";

        }


    //1、清除定时器
        all.onmouseover = function () {
            arr.style.display = "block";
            clearInterval(timer);
        }
        all.onmouseout = function () {
            arr.style.display = "none";
            timer = setInterval(autoPlay,6000);
        }


        arrR.onclick = function () {

            autoPlay();
            
        }

        arrL.onclick = function () {
            key--;
            square--;
            if(key<0){
                key=2;
                ul.style.left = -3*lis[0].offsetWidth+ 'px';
            }
            animate(ul,-key*lis[0].offsetWidth);

            square = square <0 ? 2:square;
            for(var i=0;i<olLis.length;i++){
                olLis[i].className = "";
            }
            olLis[square].className = "current";
            console.log(key+"  " + square);
            
        }

    
    function animate(obj,target) {
        clearInterval(obj.timer);

        var speed = obj.offsetLeft < target ? 15 : -15;

        obj.timer = setInterval(function () {
            var result = target - obj.offsetLeft;

            obj.style.left = obj.offsetLeft + speed + "px";
            console.log(speed);
            if(Math.abs(result) <= 10 ){
                clearInterval(obj.timer);
                obj.style.left = target + "px";
            }

   		},10);
	}

})()