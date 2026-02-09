function areBracketsProperlyMatched(code_snippet) {
    // Write your code here
    const obj={
      ")":"(",
      "}":"{",
      "]":"["
    }
    const stack=[];
    for(const ch of code_snippet){
      if(ch=="("||ch=="{"||ch=="["){
        stack.push(ch);
      }
      if(ch==")"||ch=="}"||ch=="]"){
        if(stack.length===0) return 0;
        if(obj[ch]!==stack.pop()) return 0;
      }
    }

    return stack.length===0?1:0;
}

console.log(areBracketsProperlyMatched(")("))
console.log(areBracketsProperlyMatched("if (a[0] > b[1]) { doSomething(); }"))