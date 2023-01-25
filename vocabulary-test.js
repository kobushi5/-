const ques_ans = {
    "航海": "voyage",
    "〜を確認する":"confirm",
    "〜を確実にする":"ensure",
    "〜に取り組む":"address",
    "〜への取り組み方":"approach",
    "〜を解決する":"resolve",
    "(紛争など)を解決する":"settle",
    "〜に警告する":"warn",
    "〜に強いる":"force"
};

console.log(Object.keys(ques_ans));
console.log(Object.values(ques_ans));


const div = document.getElementById('textbox');

function makeTest(){
    //Textboxの用意
    if(!div.hasChildNodes()){
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
    }
}
makeTest();

function doTest(){//採点
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
    h3.value = count;
    console.log(count);
}