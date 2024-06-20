document.addEventListener('DOMContentLoaded', function () {
    const menuData = {
        '2024-06-20': ['찹쌀 비빔밥', '미역 된장국', '꽈배기 무침', '딸기 김치'],
        '2024-06-21': ['김치볶음밥', '된장찌개', '계란말이', '깍두기'],
        // 추가 데이터
    };

    const dateElement = document.getElementById('current-date');
    const menuListElement = document.getElementById('menu-list');

    let currentDate = new Date();

    function formatDate(date) {
        const year = date.getFullYear();
        const month = ('0' + (date.getMonth() + 1)).slice(-2);
        const day = ('0' + date.getDate()).slice(-2);
        return `${year}-${month}-${day}`;
    }

    function displayMenu(date) {
        const formattedDate = formatDate(date);
        dateElement.textContent = `${date.getMonth() + 1}월 ${date.getDate()}일`;
        const menu = menuData[formattedDate] || ['메뉴 정보가 없습니다.'];
        menuListElement.innerHTML = menu.map(item => `<p class="text-main">${item}</p>`).join('');
    }

    document.getElementById('prev-day').addEventListener('click', () => {
        currentDate.setDate(currentDate.getDate() - 1);
        displayMenu(currentDate);
    });

    document.getElementById('next-day').addEventListener('click', () => {
        currentDate.setDate(currentDate.getDate() + 1);
        displayMenu(currentDate);
    });

    displayMenu(currentDate);
});
