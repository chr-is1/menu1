const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

const menuData = {
    '2024-06-20': ['찹쌀 비빔밥', '미역 된장국', '꽈배기 무침', '딸기 김치'],
    '2024-06-21': ['김치볶음밥', '된장찌개', '계란말이', '깍두기'],
    // 추가 데이터
};

app.use(express.static('public'));

app.get('/api/menu/:date', (req, res) => {
    const date = req.params.date;
    const menu = menuData[date] || ['메뉴 정보가 없습니다.'];
    res.json({ menu });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
