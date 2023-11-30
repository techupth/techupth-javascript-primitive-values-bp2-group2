// Exercise #6: Displaying message
// totalParts เป็น Variable ที่เก็บจำนวนของชิ้นส่วนเครื่องจักร

// เขียนโปรแกรมให้แสดงข้อความ "Total: 13000 Machine parts" โดยมีรายละเอียดดังนี้

// ให้เขียนอยู่ในรูปแบบ String Concatenation โดยเก็บไว้ใน Variable ที่มีชื่อว่า concatSentence
// ให้เขียนอยู่ในรูปแบบ Template Literals โดยเก็บไว้ใน Variable ที่มีชื่อว่า literalSentence

let totalParts = 13000;

let concatSentence = "Total : " + totalParts + " Machine parts";
let literalSentence = `Total: ${totalParts} Machine parts`;
console.log(literalSentence);
