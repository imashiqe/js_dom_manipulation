document.getElementById('apply-bg').addEventListener('click', function(){
    const friends = document.getElementsByClassName('friend');
   for(const friend of friends){
       friend.style.backgroundColor = 'lightblue';
   }
})

document.getElementById('center-third').addEventListener('click' , function(){
    const third = document.getElementById('third-friend');
    third.style.textAlign = 'center';
})