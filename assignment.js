// 연습 시간!

/**
 * 1) 세 개의 새로운 변수를 생성하세요:
 * - 당신이 선택한 온라인 코스의 이름을 저장하는 변수
 * - 그 코스의 가격을 저장하는 변수
 * - 이 코스를 수강할 때 가지고 있는 세 가지 주요 목표를 저장하는 변수
 * */
let name = "【한글자막】 100일 코딩 챌린지 - Web Development 부트캠프";
let price = 88000;
let goals = ["HTML 마스터", "CSS 마스터", "자바스크립트 마스터"];

// 2) 세 변수의 값을 출력하세요 ("alert" 사용)
alert(name);
alert(price);
alert(goals);

// 3) 세 변수를 "그룹화"하여 그 값들을 여전히 출력해보세요
const course = {
    name: name,
    price: price,
    goals: goals
};

// 4) "주요 목표" 변수의 두 번째 요소도 출력하세요
alert(course.goals[1])

/** 5) 다음을 수행하는 사용자 정의 명령을 추가하세요:
 * - "주요 목표" 변수를 사용하고 그 요소를 식별자로 접근하세요
 * - 구체적인 식별자 값은 동적 / 유연해야 합니다
 *      (즉, 다른 식별자에 대해 명령을 실행할 수 있어야 합니다)
 * - "주요 목표" 변수도 동적이어야 합니다:
 *      명령은 어떤 값들의 목록과도 작동해야 합니다
 * - 사용자 정의 명령은 접근된 값을 (즉, 목록 요소) 제공해야 합니다
 * */
function getListItem(array, arrayIndex) {
    let arrayElement = array[arrayIndex];
    return arrayElement;
}

// 6) '5)'에서 만든 사용자 정의 명령을 실행하고 결과를 출력하세요 ("alert" 사용)
alert(getListItem(course.goals, 2));