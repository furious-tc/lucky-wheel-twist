(() => {
	let $ = document.querySelector.bind(document);

	let timer = 7000;
	let isRotating = false;
	let currentRotate = 0;



	let wheel = $('.wheel');
	let btnStart = $('.btn-start');

	let btnFirst = $('.first');
	let btnSecond = $('.second');
	let btnThird = $('.third');
	let btnFourth = $('.fourth');
    var first = 25;
    var second = 25;
    var third = 25;
    var fourth = 25;

	btnStart.addEventListener('click', () => {

	    let listGift = [
            {
                txtName: 'ПОДКРУТКА',
                percent: first / 100,
            },
            {
                txtName: 'Вафли',
                percent: second / 100,
            },
            {
                txtName: 'Ламба',
                percent: third / 100,
            },
            {
                txtName: 'Мальдивы',
                percent: fourth / 100,
            },
        ];
	    let size = listGift.length;
        let rotate = 360 / size;
        let skewY = 90 - rotate;
        let renderItem = () => {
            listGift.forEach((item, index) => {
                const itemGift = document.createElement('li');

                itemGift.style.transform = `
                    rotate(${rotate * index}deg)
                    skewY(-${skewY}deg)
                `;

                itemGift.innerHTML = `
                    <p class="text-item ${index % 2 == 0 && 'even'}"
                        style="transform: skewY(${skewY}deg)
                            rotate(${rotate / 2}deg)"
                    >
                        <b>${item.txtName}</b>
                    </p>
                `;

                wheel.appendChild(itemGift);
            });
        };
        let rotateWheel = (currentRotate, index) => {
            wheel.style.transform = `rotate(${
                currentRotate - index * rotate - rotate / 2
            }deg)`;
        };
        let getGift = randomNumber => {
            let currentPercent = 0;
            let list = [];

            listGift.forEach((item, index) => {
                currentPercent += item.percent;

                randomNumber <= currentPercent &&
                    list.push({
                        ...item,
                        index,
                    });
            });

            return list[0];
        };
        const showTxtGift = txt => {
            setTimeout(() => {


            }, timer);
        };
        let start = () => {

            let random = Math.random();
            let gift = getGift(random);

            currentRotate += 360 * 10;

            rotateWheel(currentRotate, gift.index);
            showTxtGift(gift.txtName);
        };
		console.log(first, second, third, fourth)
		!isRotating && start();
        renderItem();
	});
	btnFirst.addEventListener('click', () => {
		first = 100;
		second = 0;
		third = 0;
		fourth = 0;
		console.log(first, second, third, fourth)
	});
	btnSecond.addEventListener('click', () => {
		first = 0;
		second = 100;
		third = 0;
		fourth = 0;
		console.log(first, second, third, fourth)
	});
	btnThird.addEventListener('click', () => {
		first = 0;
		second = 0;
		third = 100;
		fourth = 0;
		console.log(first, second, third, fourth)
	});
	btnFourth.addEventListener('click', () => {
		first = 0;
		second = 0;
		third = 0;
		fourth = 100;
		console.log(first, second, third, fourth)
	});





})();