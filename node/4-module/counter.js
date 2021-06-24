let count = 0; // 내부적으로만 사용

function increase() {
    count++;
}

function getCount() {
    return count;
}

// 모듈 내보내기(exports)
module.exports.getCount = getCount;
module.exports.increase = increase;