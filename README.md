Momentos
========
Cloning google chrome app [Momentum](https://chrome.google.com/webstore/detail/momentum/laookkfknpbbblfpciffpaejjkokdgca?page=1&hl=ko&itemlang=he) with **Vanilla JS**

Click this to check ☞ https://blissful-goldstine-c0be01.netlify.app/


Features
---------
- [x] Clock
- [x] Remembering user name
- [x] To do list
- [x] Scrolling to do list
- [x] Temperature
- [x] Location
- [x] Random background picture



고려했던 부분
------------
list의 아이디를 단순하게 list.length+1로 설정
=> id가 중복되어 동시에 삭제되는 문제 발생
=> To do list 속 각 아이템의 아이디가 겹치지 않게 하기 위해서 Date.now() 사용
=> 페이지 재로드 시 list id를 새롭게 Date.now()로 설정하는 문제 발견
=> 새로 입력된 list 인지 이미 저장되어 있던 list 인지 확인하는 조건을 추가해서 기존에 존재하던 list에 대해서는 Date.now() 대신 기존에 저장되어 있던 id를 불러오게 함.
