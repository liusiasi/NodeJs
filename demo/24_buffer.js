console.log( Buffer.alloc(10));
console.log(Buffer.alloc(10, 1));
console.log( Buffer.allocUnsafe(10));
console.log( Buffer.from([1, 2, 3]));
console.log( Buffer.from('tést'));
console.log(Buffer.from('中文字符串!').length)