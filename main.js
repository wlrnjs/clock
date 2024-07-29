// 시계 업데이트 함수
function updateClock() {
    const now = new Date();
    const daysOfWeek = ["일", "월", "화", "수", "목", "금", "토"];
    const dayOfWeek = daysOfWeek[now.getDay()];
    const year = now.getFullYear();
    const month = (now.getMonth() + 1).toString().padStart(2, '0');
    const day = now.getDate().toString().padStart(2, '0');
    const hours = now.getHours();
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');

    let ampm = 'AM';
    let displayHours = hours;

    if (hours >= 12) {
        ampm = 'PM';
        displayHours = hours % 12;
        if (displayHours === 0) {
            displayHours = 12;
        }
    }

    const dateString = `${year}년 ${month}월 ${day}일 ${dayOfWeek}요일`;
    document.getElementById('date-area').textContent = dateString;

    const timeStringHours = `${displayHours}`;
    const timeStringMinutes = `${minutes}`;
    const timeStringAmPm = `${ampm}`;

    document.getElementById('time-area-hour').textContent = timeStringHours;
    document.getElementById('time-area-minutes').textContent = timeStringMinutes;
    document.querySelector('#time-area-ampm').textContent = timeStringAmPm;
}

// 전체화면 열기
function openFullScreen() {
    const doc = document.documentElement;
    if (doc.requestFullscreen) {
        doc.requestFullscreen();
    } else if (doc.webkitRequestFullscreen) { // Chrome, Safari (webkit)
        doc.webkitRequestFullscreen();
    } else if (doc.mozRequestFullScreen) { // Firefox
        doc.mozRequestFullScreen();
    } else if (doc.msRequestFullscreen) { // IE or Edge
        doc.msRequestFullscreen();
    } else {
        console.log('전체화면 API를 지원하지 않는 브라우저입니다.');
    }
    document.getElementById('open-button').style.display = 'none';
    document.getElementById('close-button').style.display = 'block';
    document.getElementById('timer-h1').style.display = 'none';
}

// 전체화면 닫기
function closeFullScreen() {
    if (document.fullscreenElement || document.webkitFullscreenElement || document.mozFullScreenElement || document.msFullscreenElement) {
        if (document.exitFullscreen) {
            document.exitFullscreen();
        } else if (document.webkitExitFullscreen) { // Chrome, Safari (webkit)
            document.webkitExitFullscreen();
        } else if (document.mozCancelFullScreen) { // Firefox
            document.mozCancelFullScreen();
        } else if (document.msExitFullscreen) { // IE or Edge
            document.msExitFullscreen();
        }
    } else {
        console.log('전체화면 모드가 아닙니다.');
    }
    document.getElementById('open-button').style.display = 'block';
    document.getElementById('close-button').style.display = 'none';
    document.getElementById('timer-h1').style.display = 'block';
}

// 색상 버튼 클릭 시 색상 변경
function changeColor(color) {
    document.querySelector('#timer-h1').style.color = color.textColor;
    document.querySelector('#date-area').style.color = color.textColor;
    document.querySelector('#time-area-hour').style.color = color.textColor;
    document.querySelector('#time-area-minutes').style.color = color.textColor;
    document.querySelector('#time-area-ampm').style.color = color.textColor;
    document.querySelector('#open-button').style.backgroundColor = color.buttonBackground;
    document.querySelector('#close-button').style.backgroundColor = color.buttonBackground;
    document.querySelector('#open-button').style.color = color.buttonText;
    document.querySelector('#close-button').style.color = color.buttonText;
    document.querySelector('.time-area-p').style.color = color.textColor;
    document.querySelector('body').style.backgroundColor = color.bodyBackground;
    document.querySelector('.time-area-one').style.backgroundColor = color.timeAreaBackground;
    document.querySelector('.time-area-two').style.backgroundColor = color.timeAreaBackground;
}

// 색상 버튼 클릭 이벤트
document.querySelector('#palette-icon').addEventListener('click', () => {
    document.getElementById('color-buttons').classList.toggle('active');
});

document.querySelector('.color-button-1').addEventListener('click', () => {
    changeColor({
        textColor: 'white',
        buttonBackground: '#525255',
        buttonText: 'white',
        bodyBackground: '#2e2e2e',
        timeAreaBackground: '#525252'
    });
});

document.querySelector('.color-button-2').addEventListener('click', () => {
    changeColor({
        textColor: 'black',
        buttonBackground: 'white',
        buttonText: 'black',
        bodyBackground: 'rgb(224, 224, 224)',
        timeAreaBackground: 'white'
    });
});

document.querySelector('.color-button-3').addEventListener('click', () => {
    changeColor({
        textColor: 'rgb(238, 231, 17)',
        buttonBackground: '#525252',
        buttonText: 'rgb(238, 231, 17)',
        bodyBackground: '#2e2e2e',
        timeAreaBackground: '#525252'
    });
});

document.querySelector('.color-button-4').addEventListener('click', () => {
    changeColor({
        textColor: 'rgb(181, 181, 181)',
        buttonBackground: '#525252',
        buttonText: 'rgb(181, 181, 181)',
        bodyBackground: '#2e2e2e',
        timeAreaBackground: '#525252'
    });
});

document.querySelector('.color-button-5').addEventListener('click', () => {
    changeColor({
        textColor: 'rgb(33, 210, 30)',
        buttonBackground: '#525252',
        buttonText: 'rgb(33, 210, 30)',
        bodyBackground: '#2e2e2e',
        timeAreaBackground: '#525252'
    });
});

// 매 초마다 시계 업데이트
setInterval(updateClock, 1000);

// 페이지 로드 시에도 시계 업데이트
updateClock();

// 버튼 클릭 이벤트 리스너 추가
document.getElementById('open-button').addEventListener('click', openFullScreen);
document.getElementById('close-button').addEventListener('click', closeFullScreen);