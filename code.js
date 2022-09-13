document.getElementById('text_area').addEventListener('input', function(){
    document.getElementById('w_counter').innerHTML = 'Word:' + this.value.match(/(\w+)/g).length;
    document.getElementById('c_counter').innerHTML = 'Char:' + Array.from(this.value).length;
})
