console.log(6);

const getBtn = document.getElementById('get');
const postBtn = document.getElementById('post');
const input = document.getElementById('input');

const baseURL = '//172.20.10.6:3000/' 

getBtn.addEventListener('click', getInfo);
postBtn.addEventListener('click', postInfo);

async function getInfo(e){
    e.preventDefault(); // 預防刷新葉面
    
    const res = await fetch(baseURL + "info", { // add dynamic url
        method: 'GET'
    });

    
    console.log(res);
    const data = await res.json();
    input.value = data.info;
    alert(data.sound);
}

async function postInfo(e){
    const options = {
        input: input.value,
        test: 2
    };
    console.log(34);
    e.preventDefault(); // 預防刷新葉面
    //if(inside === '') return;
    //console.log(res);
    const res = await fetch(baseURL, { 
        method: 'POST',
        headers: {
            "Content-Type": 'application/json'
        },
        body: JSON.stringify(options)
    });
}