<h2 align="center"><em>Where's Wally❓</em></h2>

```
해당 프로젝트는 그림책 월리를 찾아라에서 아이디어를 가져왔습니다.
월리를 찾아라(Where's Wally?)는 영국의 일러스트레이터 마틴 핸드포트가 그린 그림책입니다.
이 책의 목표는 거대한 한 장의 그림 속에서 월리를 찾는 것 입니다. 매우 간단해보이지만,
주변에 수많은 인물들과 사물들이 매우 빽빽하게 그려져있어 찾기 쉽지 않으실 겁니다.
준비가 되셨다면, 시작해볼까요?
```

<h2 align="center"><em>Execution🌎</em></h2>
<p align="center"><em><a href="https://findwally.netlify.app">Let's start!</a></em>
<br/><em>
- 본 프로젝트는 💻에 최적화 되어있습니다.<br>
- 해당 프로젝트는 netlify로 배포되었습니다.</em></p>
<br/>
<h2 align="center"><em>Description project 📝</em></h2>
<br/>

```
* 시작시 타이머가 동작하며, 배경 음악이 재생됩니다.
사용자는 타이머에 나타난 시간 내에 이미지에서 월리를 찾아 클릭해야합니다.

* 월리를 찾았다면, Win! 팝업창과 사운드가 나타나며, 다음 스테이지로 이동할 수 있습니다.

* 시간 내에 월리를 찾지 못하거나, 월리가 아닌 다른 것을 클릭한다면
Lost! 팝업창과 사운드가 나타나며, 다시 실행이 가능합니다.

* 주어진 3개의 스테이지에서 모두 시간 내에 월리를 발견하면,
Finish! 팝업창이 나타나며 사운드와 함께 게임이 종료됩니다.

* 팝업창에 리플레이 버튼이 제공됩니다! 처음으로 돌아가 다시 게임을 진행하길 바란다면 버튼을 클릭해주세요!
```

<h2 align="center"><em>Learned 👩‍🎓</em></h2>
<br/>
<p align="center"><em>🧡 Module </em></p>

```
하나의 main.js에 구현했던 코드를, 각각 함수의 역할에 따라 코드를 분할하고 모듈화를 진행하였습니다.
팝업에 관련된 함수를 popup.js로, game에 관련된 함수들을 game.js로, game field에 관련된 것들을 field.js로,
sound에 관련된 함수를 sound.js로 분리하였습니다. 이를 통해 유지보수를 용이하게 하고, 코드를 간결화하였습니다.
```
<p align="center"><em>❤️ Builder Pattern</em></p>

```
타이머에 설정할 게임 진행 시간에 빌더 패턴을 적용해보았습니다.
기존에는 game_duration을 생성자에 설정하여 const game = new Game(150); 과 같이 값을 할당했습니다.
그러나 여기에 빌더 패턴을 적용하여,
const game = new GameBuilder()
.withGameDuration(150)
.build();
와 같이 변경하였습니다. 
다음과 같이 빌더 패턴 적용한 리팩토링을 통해 사용자가 코드를 더 직관적으로 보고 이해할 수 있도록 하였습니다.
```

<p align="center"><em>💛 this binding</em></p>

```
this가 어떤 클래스 안에 있는 함수를 다른 콜백으로 전달할때 그 함수가 포함되어져 있는
클래스의 정보가 사라지는 것을 발견했습니다. 그래서 this와 함수를 묶을 수 있는 binding의 방법 중 하나인
arrow function의 작성법에 대해 학습하고 적용했습니다.
```

<p align="center"><em>💚 type guarantee </em></p>

```
자바스크립트에서 타입 보장 방법을 학습했습니다. 코드에서 값을 전달하는 경우
사용자들이 값을 잘못 입력하는 실수를 방지하기 위한 방법으로 Object.freeze()라는 메서드를 학습하게 되었습니다.
해당 메서드를 통해 객체를 동결하여 해당 객체 내부의 값만 이용하도록 하여 코드의 안정성을 높였습니다.
```

 <br/>

<h2 align="center"><em>Tech used🛠</em></h2>
<br/>
<p align="center">
  <img src="http://img.shields.io/badge/-HTML5-E34F26?style=for-the-badge&logo=HTML5&logoColor=white"/></a>&nbsp
  <img src="http://img.shields.io/badge/-CSS3-1572B6?style=for-the-badge&logo=CSS3&logoColor=white"/></a>&nbsp
  <img src="https://img.shields.io/badge/-Javascript-F7DF1E?style=for-the-badge&logo=Javascript&logoColor=white"/></a>&nbsp<br/>
</p>

<h2 align="center"><em>Structure Tree🌳</em></h2>

```
wheres_wally
├─ img
├─ sound
├─ src
│ ├─ field.js
│ ├─ game.js
│ ├─ main.js
│ ├─ popup.js
│ └─ sound.js
├─ index.html
└─ style.css
```

<br/>
<h2 align="center"><em>Credit🙏</em></h2>
<p align="center"><em>💜 Dream Coding Academy<br><strong>Browser 101</strong></em></p>
<p align="center"><em><strong><a href="https://github.com/mjungpp/browser_101/">View learned code</strong></em></p>
