function solution(arr) {
    let minNum = Math.min(...arr);
    return arr.length == 1 ? [-1] : arr.filter(el => el !== minNum);
    
}