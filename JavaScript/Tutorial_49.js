let para = document.getElementById('para');

para.addEventListener('mouseover', function run(){
    // alert('Mouse Inside')
    console.log('Mouse Inside');
});

para.addEventListener('mouseout', function run(){
    // alert('Mouse Outside')
    console.log('Mouse Outside');
});

function toggleHide(){
    // let btn = document.getElementById('btn');
    // let para = document.getElementById('para');
    if(para.style.display!='none'){
        para.style.display = 'none';
    }
    else{
        para.style.display = 'block';
    }
}
