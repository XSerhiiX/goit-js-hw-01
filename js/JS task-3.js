function getElementWidth(content, padding, border) {
    getElementWidt(Number.parseFloat(content + padding * 2 + border * 2));
    console.log(getElementWidt);
    return getElementWidt;
} 
console.log(getElementWidth("50px", "8px", "4px")); // 74
getElementWidth("50px", "8px", "4px");

console.log(getElementWidth("60px", "12px", "8.5px")); // 101
getElementWidth("60px", "12px", "8.5px");

console.log(getElementWidth("200px", "0px", "0px")); // 200
getElementWidth("200px", "0px", "0px");
