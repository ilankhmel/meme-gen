function renderGallery(){
    var images = getImages()
    var strHTMLS = images.map(img=>
      `<img class="gallery-img" src="${img.url}" onclick="onImgSelect(${img.id})">`  
        )
    document.querySelector('.image-gallery').innerHTML = strHTMLS.join('')
}

function onImgSelect(id){
    console.log(id);
    document.querySelector('.text-input').value = ''
    setImg(id)
    var meme = getMeme()
    meme.lines[0].txt = ''
    showEditor()
    renderMeme()
}

function onSetFilterBy(val){
    setFilterBy(val)
    renderGallery()
}

function onShowMenu(){
    document.querySelector('.buttons').classList.toggle('open')
}

function onSetLineWidth(){
    setLineWidth()
    renderMeme()
}