# ✨월리를 찾아라✨

### Where's Wally❓

> 1987년 영국의 일러스트레이터 마틴 핸드포드가 그린, 한 시대를 풍미한 그림책. 시리즈는 1987년 영국에서 처음 발매된 이후 지금까지 전 세계 32개국 언어로 번역돼 약 6천500만부 이상 판매된 세계적인 베스트셀러다. 거대한 한 장의 그림 속에서 월리를 찾는 것이 이 책의 주목표이다. 물론 찾기 쉽지 않도록 주변에 수많은 다른 인물들과 사물들이 매우 빽빽하게 그려져 있다.  (출처 : namuwiki)

### Planning instrument💪

> 드림코딩 아카데미의 브라우저 101 강의를 수강하고, 강의를 적용해 프로젝트를 진행하고자 기획하게 되었습니다. 

### Execution🌐
<a href="https://findwally.netlify.app">🌏<em>Go!</em></a><br/>
<p>- 본 프로젝트는 💻에 최적화 되어있습니다.<br>
- 해당 프로젝트는 netlify로 배포되었습니다.</p>

### Production period📅

2021.07.06 ~ 2021.07.14 (9 days) 제작<br>
2021.07.15 ~ Refactoring(모듈화) 진행중

### Description🔍

> 1. 본 프로젝트는 3개의 스테이지가 제공됩니다.
> 2. 주어진 시간(2분 30초)동안 월리를 찾을 경우 게임에서 우승하여 다음 스테이지로 넘어가고, 시간 내에 월리를 찾지 못하거나 월리가 아닌 다른 요소를 클릭할 경우 게임에서 실패하여 다시 게임을 진행합니다.
> 3. 모든 게임이 끝나면, 최종 우승 finish 문구가 나타나며 게임 다시 시작 기능이 제공됩니다.

### Use skills🔨

<img src="https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=HTML5&logoColor=white"/></a>
<img src="https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=CSS3&logoColor=white"/></a>
<img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=JavaScript&logoColor=black"/></a>

### Source Tree🌳

📦mbti_test<br>
┣ 📂data<br>
┃ ┣ 📜data.json<br>
┃ ┗ 📜result.json<br>
┣ 📂img<br>
┃ ┣ 📂question<br>
┃ ┣ 📂results<br>
┣ 📂src<br>
┃ ┗ 📜main.js<br>
┣ 📜index.html<br>
┣ 📜README.md<br>
┗ 📜style.css<br>

### Feedback🔖

피드백 결과 제 테스트에서 다음과 같은 문제를 발견했습니다.

#### 1. Result 화면에 대한 complain

👤 : 결과에서 MBTI 유형은 나오지 않고 캐릭터와 특성만 나와서 결과의 MBTI 유형을 알 수 없어! (3건) <br>
- 결과에 캐릭터의 MBTI 유형이 출력되지 않아, 어떤 MBTI 결과를 획득했는지에 대한 내용이 없어 불편하다는 의견이 있었습니다.

#### 2. Font Size
👤 : 글씨가 너무 작아서 눈이 침침해.. (5건)
- 모바일에서의 폰트 사이즈가 너무 작다는 피드백이 있었습니다.
#### 3. 결과 유형이 실제 유형과 다름

👤 : 검사 결과가 내 실제 MBTI랑 좀 다른데? <br>
테스트 결과 본인의 기존 유형과, 제 MBTI 테스트 결과가 일치하지 않는 사용자가 몇몇 발생했습니다.
| num | 기존 본인 유형 | 테스트 결과 유형 |
| :---: | :-: | :-: |
| 1 | ENFP | INFP |
| 2 | INFP | ISFP |
| 3 | INFP | ENTP |
| 4 | ENFP | ISFJ |
| 5 | INFP | ISTP |
| 6 | ESTJ | ESFP |
| 7 | ESTP | ESFP |
| 8 | INFP | ISFP |
| 9 | INTJ | ISFJ |
| 10 | INFP | INFJ |
...

이에 따라
1. 결과 화면에 MBTI 유형을 출력
2. 모바일에서의 폰트 사이즈를 8px -> 11px로 확대
3. 검사 정확도를 높이기 위해 추가 질문지를 제작했습니다. json 파일에 설문 데이터를 총 8건 추가했습니다.

### Productor :busts_in_silhouette:

#### minjung park 👩‍💻

##### email✉️ : mjungpp@naver.com<br>

##### github profile :octocat: : https://github.com/mjungpp
