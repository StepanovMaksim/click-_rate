
window.onload = init;





let isModalOpen = false;

const animals = {
	0: {
		name: 'улитка',
		grade: 'медленно',
		image: 'snail.jpg',
	},
	1: {
		name: 'черепаха',
		grade: 'медленно',
		image: 'turtle.jpg',
	},
	2: {
		name: 'мышь',
		grade: 'медленно',
		image: 'mouse.jpg',
	},
	3: {
		name: 'свин',
		grade: 'поднажми!',
		image: 'pig.jpg',
	},
	4: {
		name: 'слон',
		grade: 'поднажми!',
		image: 'el.jpg',
	},
	5: {
		name: 'бегемот',
		grade: 'неплохо!',
		image: 'hipp.jpg',
	},
	6: {
		name: 'лиса',
		grade: 'Хорошо!',
		image: 'fox.jpg',
	},
	7: {
		name: 'медведь',
		grade: 'Хорошо',
		image: 'bear.jpg',
	},
	8: {
		name: 'косуля',
		grade: 'Хорошо!',
		image: 'roe.jpg',
	},
	9: {
		name: 'заяц',
		grade: 'Отлично!',
		image: 'hare.jpg',
	},
	10: {
		name: 'ягуар',
		grade: 'Отлично!',
		image: 'jaguar.jpg',
	},
	11: {
		name: 'гепард',
		grade: 'НЕВЕРОЯТНО!',
		image: 'cheetah.jpg',
	},
	12: {
		name: 'ястреб',
		grade: 'НЕВЕРОЯТНО!',
		image: 'hawk.jpg',
	},
}
		
let i=0,
 	j=11,
 	a=0.1,
 	k=2,
	u=[],
 	up=[],
	oh =0,
	forAdv = 0,
	bestRes =0,
 	rz = 2;
	u[11]=0;



function changeAnimalName(speed) {
	return speed < 5
		? animals[0].name
		: speed >= 5 && speed < 10
		? animals[1].name
		: speed >= 10 && speed < 20
		? animals[2].name
		: speed >= 20 && speed < 30
		? animals[3].name
		: speed >= 30 && speed < 40
		? animals[4].name
		: speed >= 40 && speed < 50
		? animals[5].name
		: speed >= 50 && speed < 60
		? animals[6].name
		: speed >= 60 && speed < 70
		? animals[7].name
		: speed >= 70 && speed < 80
		? animals[8].name
		: speed >= 80 && speed < 90
		? animals[9].name
		: speed >= 90 && speed < 100
		? animals[10].name
		: speed >= 100 && speed < 110
		? animals[11].name
		: animals[12].name
}

function changeAnimalGrade(speed) {
	return speed < 5
		? animals[0].grade
		: speed >= 5 && speed < 10
		? animals[1].grade
		: speed >= 10 && speed < 20
		? animals[2].grade
		: speed >= 20 && speed < 30
		? animals[3].grade
		: speed >= 30 && speed < 40
		? animals[4].grade
		: speed >= 40 && speed < 50
		? animals[5].grade
		: speed >= 50 && speed < 60
		? animals[6].grade
		: speed >= 60 && speed < 70
		? animals[7].grade
		: speed >= 70 && speed < 80
		? animals[8].grade
		: speed >= 80 && speed < 90
		? animals[9].grade
		: speed >= 90 && speed < 100
		? animals[10].grade
		: speed >= 100 && speed < 110
		? animals[11].grade
		: animals[12].grade
}

function changeAnimalImage(speed) {
	return speed < 5
		? animals[0].image
		: speed >= 5 && speed < 10
		? animals[1].image
		: speed >= 10 && speed < 20
		? animals[2].image
		: speed >= 20 && speed < 30
		? animals[3].image
		: speed >= 30 && speed < 40
		? animals[4].image
		: speed >= 40 && speed < 50
		? animals[5].image
		: speed >= 50 && speed < 60
		? animals[6].image
		: speed >= 60 && speed < 70
		? animals[7].image
		: speed >= 70 && speed < 80
		? animals[8].image
		: speed >= 80 && speed < 90
		? animals[9].image
		: speed >= 90 && speed < 100
		? animals[10].image
		: speed >= 100 && speed < 110
		? animals[11].image
		: animals[12].image
}


function init() {
	var button1 = document.getElementById("click");
	button1.onclick = onClick;
//	sortList();	
	graf(0, 1, 50, 25, 250);
}

// function showResult() {
// 	const modal = document.querySelector('dialog');
// 	modal.showModal();
// 	isModalOpen = true;

// }

function closeResult() {
	forAdv++;
	if (forAdv % 6 == 1) {
		YaGames.init().then(ysdk => ysdk.adv.showFullscreenAdv())
	};
	const modal = document.querySelector('dialog');
	modal.close();
	isModalOpen = false;
}

function onClick() {
	
	const modalAnimal = document.getElementById('res-animal');
	const modalImg = document.getElementById('Animal-img');
	const modalSpeed = document.getElementById('res-speed');
	const modalGrade = document.getElementById('res-grade');
	const refreshBut = document.getElementById('refresh');
	const record = document.getElementById('record');
	rz+=1;	
	k=1;	
	if (j > 10.9) {
		j--;
		refreshBut.style.scale=0
	}
	
	const messageTime = document.getElementById('time');
	
	if ( j == 10 && k == 1) {
		let id =  setInterval(function rt() {
		j=Math.floor((j-a)*100)/100;
		 
		
		if (j < 10) {
			let elems = document.getElementById("planeta");
			elems.style.width = 50+rz+"px";
			elems.style.height = 50+rz+"px";
			let button1 = document.getElementById("click");
			button1.onclick = onClick;
		
  		messageTime.innerHTML="Время: "+j;
		  
	}
		
		if (j < 0.04) {

			clearInterval(id);	
				 
			messageTime.innerHTML="Время: 0";
			modalAnimal.innerHTML = changeAnimalName(i).toLocaleUpperCase()
			modalSpeed.innerHTML = 'Результат: ' + i + ' км/ч'
			modalGrade.innerHTML = changeAnimalGrade(i)
			modalImg.src= changeAnimalImage(i)
			modalImg.alt= changeAnimalImage(i)
			const modal = document.querySelector('dialog')
			modal.showModal()
			isModalOpen = true
			refreshBut.style.scale=1;

			if (i > bestRes) {
				bestRes = i;
			}

			record.innerHTML = 'Рекорд: ' + bestRes + ' км/ч'
			
//			let textInput = document.getElementById("userName");
//			let nameGamer = textInput.value;
//			let li = document.createElement("li");
//			li.innerHTML = i+" "+nameGamer;
//			let ol= document.getElementById("record");
//			ol.appendChild(li);
//			sortList();
		}
	}, 100);
	} 
		if (j < 10 && j >0.04) {
			i++;
			let messageArea= document.getElementById('msg');
			messageArea.innerHTML="Количество нажатий: "+i;
			if (j>1) {
				var l = Math.floor(10-j);	
			} else if (j<1) {
				l = Math.floor(10-j);
			}
		}

		

	up[l]=i;
	u[0]=up[0];
	u[l]=up[l]-up[l-1];
	if (l==0){ graf(up[l]+1, l+1, 50, 25, 250)} else graf(u[l]+1, l+1, 50, 25, 250);
		
	
	

	
	let img = document.getElementById('fly');
	
	let cart = ["Pictures/Low1.png" , "Pictures/Low2.png", "Pictures/Low3.png", "Pictures/medium1.png" , "Pictures/medium2.png", "Pictures/medium3.png", "Pictures/Super1.png" , "Pictures/Super2.png"];	
	
	if (i<10 || u[l-1]<4) {
		oh = i%3;
	}
	
	else if (u[l-1]>=4 && u[l-1]<9) {
		oh = 3+i%3;
	}
	
	else if (u[l-1]>=9) {
		oh = 6+i%2;
	}

	img.src=cart[oh];

	if (window.innerWidth < 1450) {
		if (window.innerHeight < 710) {
			img.style.bottom = -400 + i * 3 + 'px'
		} else  {
			img.style.bottom = 30 + i * 3 + 'px'
		} 
	} else {
			img.style.bottom = 30 + i * 3 + 'px'
		}

}


	
function refr() {
	
	let img = document.getElementById('fly')
	const refreshBut = document.getElementById('refresh')
	refreshBut.style.scale = 0
		j = 11;
		i= 0;
		k=2;
		let messageArea= document.getElementById('msg');
		messageArea.innerHTML="Количество нажатий: 0";
		let messageTime = document.getElementById('time');
		messageTime.innerHTML="Время: 10"; 
		const canvasPlot = document.getElementById('canvas_plot');
		const ctx = canvasPlot.getContext('2d');
		ctx.clearRect(0,0, 550, 250);
		let elems = document.getElementById("planeta");
		elems.style.width = 50+"px";
		elems.style.height = 50+"px";
		rz=1;
		if (window.innerWidth < 1450) {
			if (window.innerHeight < 710) {
				img.style.bottom = -400 + i * 3 + 'px'
			} else  {
				img.style.bottom = 30 + i * 3 + 'px'
			} 
		} else {
				img.style.bottom = 30 + i * 3 + 'px'
			}

	
}

function st(string) {
	return string.replace(/[а-яa-z]/gi, '');
}

function sortList() {
  let list, u, switching, b, shouldSwitch;
  list = document.getElementById("record");
  switching = true;

  while (switching) {
    switching = false;
    b = list.getElementsByTagName("li");
    for (u = b.length-1; u > 0 ; u--) {
      shouldSwitch = false;
      
      if (Number(st(b[u].innerHTML)) > Number(st(b[u-1].innerHTML))) {
        shouldSwitch = true;
        break;
      }
    }
    if (shouldSwitch) {
      b[u].parentNode.insertBefore(b[u], b[u-1]);
      switching = true;
    }
  }
}

function graf(touch, tochka, scaleX, scaleY, sizeCanv) {
	const canvasPlot = document.getElementById('canvas_plot');
	
	const ctx = canvasPlot.getContext('2d');
	
	const canvasPlotWidth = canvasPlot.clientWidth;
	const canvasPlotHeight = canvasPlot.clientHeight;
	ctx.clearRect(0,0,scaleX,sizeCanv);
	ctx.clearRect(0, 225,550,200);

	let shiftName= 3;
	let xAxis =  0;
	let yAxis = canvasPlotHeight;

	ctx.font= `${Math.round(scaleX / 2)}px Arial`;
	ctx.textAlign='left';
	ctx.textBaseline = 'bottom';

	ctx.beginPath();
	ctx.strokeStyle = '#f5f0e8';

	for (let i=0; i<= canvasPlotWidth; i = i + scaleX) {
		ctx.moveTo(i, 0);
		ctx.lineTo(i, canvasPlotHeight-scaleY);
		ctx.fillText((i-xAxis) / scaleX, i + shiftName, yAxis + shiftName);
	}

	for (let i=0; i<= canvasPlotHeight; i = i + scaleY) {
		ctx.moveTo(scaleX, i);
		ctx.lineTo(canvasPlotWidth, i);
		ctx.fillText((yAxis-i) / scaleY, xAxis + shiftName, i + shiftName);
	} 

	ctx.stroke();
	ctx.closePath();
	ctx.beginPath();
	ctx.strokeStyle = '#000';
	ctx.moveTo(xAxis, 0);
	ctx.lineTo(xAxis, canvasPlotHeight);
	ctx.moveTo(0, yAxis);
	ctx.lineTo(canvasPlotWidth, yAxis);
	ctx.stroke();
	ctx.closePath();
	
	// График

	const x = tochka;
	const y = touch;
	ctx.fillRect(x * scaleX	,  sizeCanv - scaleY * y, scaleX, scaleY);
	
}


