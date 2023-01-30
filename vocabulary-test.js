const ques ={
    ques_ans_442:{
        "航海": "voyage",
        "〜を確認する":"confirm",
        "〜を確実にする":"ensure",
        "〜に取り組む":"address",
        "〜への取り組み方":"approach",
        "〜を解決する":"resolve",
        "(紛争など)を解決する":"settle",
        "〜に警告する":"warn",
        "〜に強いる":"force"
    },
    ques_ans_443:{
        "a":"1"
    }
};
const defaultHTML = document.body;

//const ques_ans_442 = {
//    "航海": "voyage",
//    "〜を確認する":"confirm",
//    "〜を確実にする":"ensure",
//    "〜に取り組む":"address",
//    "〜への取り組み方":"approach",
//    "〜を解決する":"resolve",
//    "(紛争など)を解決する":"settle",
//    "〜に警告する":"warn",
//    "〜に強いる":"force"
//};
const shuffle = ([...array]) => {//配列シャッフル
    for (let i = array.length -1; i >= 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j],array[i]];
    }
    return array;
}

//console.log(ques_ans);
//console.log(Object.keys(ques_ans));
//console.log(Object.values(ques_ans));
//const a = CreateArray(5)
//console.log(a);
//
//console.log(shuffle(a))
const div = document.getElementById('textbox');//いる
var finFlag = 0;
const a = shuffle(CreateArray(10));
console.log(a)

function CreateArray(length) {//未実装
    let array =[];
    for(let i = 0; i < length; i++){
        array[i] = i;
    }
    return(array);
}

function chooseTest(page){
    eval(`const ques_ans = ques.ques_ans_${page};
    console.log(ques_ans);
    makeTest(ques_ans);
    `);
    console.log(page);
    console.log(Array.from(ques.ques_ans_442));
}

function makeTest(ques_ans){
    //Textboxの用意
    while(div.firstChild) {
        div.removeChild(div.firstChild);
    }
    for(let i = 0; i < Object.keys(ques_ans).length; i++){
        console.log('s');
        let label = document.createElement("label");
        label.setAttribute('id',`ques_${i}`);//問題(日本語)
        let input = document.createElement('input');
        div.appendChild(label);
        
        label.innerText = Object.keys(ques_ans)[i];
        br = document.createElement('br');
        div.appendChild(br);
        input.setAttribute('type',"text");
        input.setAttribute('size','20');
        input.setAttribute('id',`ans_${i}`);//textbox
        label.appendChild(input);
    }
    const interval = setInterval(() => {
        if(finFlag == 1){
            finFlag = 0;
            doTest(ques_ans);
            return;
        }else{
            return;
        }
    },10);
}
function clickFinishButton() {
    finFlag = 1;
}

function doTest(ques_ans){//採点
    let count = 0;
    for(let i = 0; i < Object.keys(ques_ans).length; i++){
        let ques = document.getElementById(`ques_${i}`);
        let user_ans = document.getElementById(`ans_${i}`);
        //テキストボックスの値を取得
        if(user_ans.value == Object.values(ques_ans)[i]){
            count++;
            //ques.innerText += "○";
        }
    }
    h3 = document.getElementById('score');
    h3.innerText = count + 'てん';
    console.log(count);
}