let button = document.getElementById('button')
let modelContainer = document.getElementById('model-container')
let close = document.getElementById('close')
button.addEventListener('click', function()
{
    modelContainer.style.display = 'block';
    close.addEventListener('click', function()
    {
        modelContainer.style.display = 'none'
    })
})
window.addEventListener('click', function(x){
       if(x.target === modelContainer)
       {
        modelContainer.style.display = 'none'
       }
})