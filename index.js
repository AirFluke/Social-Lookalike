//SIDEBAR
 
const menuItems = document.querySelectorAll('.menu-items');
//==================SIDEBAR=========


//remove active class from all menu items
const changeActiveItem = () =>{
    menuItems.forEach(item => {
        item.classList.remove('active')
    })
}

menuItems.forEach(item => {
    item.addEventListener('click', () => {
        changeActiveItem();
        item.classList.add('active');

        if(item.id != 'notifications'){
            document.querySelector('.notifications-popup').style.display = 'none'
        } else{
            document.querySelector('.notifications-popup'). style.display = 'block'
            document.querySelector('#notifications .notification-count'). style.display = 'none'
        }
    })
})


//===========MESSAGES====================

const messagesNotification = document.querySelector('#messages-notifications')
const messages = document.querySelector('.messages')

messagesNotification.addEventListener('click', ()=>{
    messages.style.boxShadow = '0 0 1rem var(--color-primary)';
    setTimeout(() => {
        messages.style.boxShadow = 'none'
    }, 3000);
    document.querySelector('#messages-notifications .notification-count').style.display = 'none'
})

//====================SEARCH FUNCTIONALITY=========
const message = messages.querySelectorAll('.message')

const messageSearch = document.querySelector('#message-search')
//we target ids with hastags and classes with .

//Searches chat
const searchMessage = () => {
    const val = messageSearch.value.toLowerCase();
    message.forEach(chat => {
        let name = chat.querySelectorAll('h5').textContent.toLowerCase(); 
        if(name.indexOf(val) != -1){
            chat.style.display = 'flex';
        } else{
            chat.style.display = 'none';
        }
    })
}

//search chat

messageSearch.addEventListener("keyup", searchMessage);

//THEME/DISPLAY CUSTOMIZATION

const theme = document.querySelector('#theme')
const themeModal = document.querySelector('.customize-theme') 
var root = document.querySelector(':root');

//font size

const fontSizes = document.querySelectorAll('.choose-sizes span')

//open modal
const openThemeModal = () => {
    themeModal.style.display = 'grid'
}

//closes modal
const closeThemeModal = (e) =>{
    if(e.target.classList.contains('customize-theme')){
        themeModal.style.display = 'none'
    }
}

//close modal
themeModal.addEventListener('click', closeThemeModal)


theme.addEventListener('click', openThemeModal)

//=================FONT SIZES=================

//remove oactive class from spans or font size selectors

const removeSizeSelector = () => {
    fontSizes.forEach(size => {
        size.classList.remove('active')
    })
}




fontSizes.forEach(size => {
    let fontSize;
    

    size.addEventListener('click', ()=>{
        removeSizeSelector()
        size.classList.add('active');


        if(size.classList.contains('font-size-1')){
            fontSize = '10px'
            root.style.setProperty('--sticky-top-left', '5.4rem')
            root.style.setProperty('--sticky-top-right', '5.4rem')
    
        }else if(size.classList.contains('font-size-2')){
            fontSize = '13px'
    
            root.style.setProperty('--sticky-top-left', '5.4rem')
            root.style.setProperty('--sticky-top-right', '-7rem')
    
        } else if(size.classList.contains('font-size-3')){
            fontSize = '16px'
    
            root.style.setProperty('--sticky-top-left', '-2rem')
            root.style.setProperty('--sticky-top-right', '-17rem')
    
        } else if(size.classList.contains('font-size-4')){
            fontSize = '19px'
    
            root.style.setProperty('--sticky-top-left', '-5rem')
            root.style.setProperty('--sticky-top-right', '-25rem')
                
    
        }else{
            fontSize = '22px'
    
            root.style.setProperty('--sticky-top-left', '-12rem')
            root.style.setProperty('--sticky-top-right', '-35rem')
        }
    
        //change font size of the root html element
        document.querySelector('html').style.fontSize = fontSize;
    })
    
   
})



// change primary colors

const colorPallete =  document.querySelectorAll('.choose-color span')

//remove active class from color

const removeColorSelct = () => {
    colorPallete.forEach(color => {
        color.classList.remove('active')
    })
};


colorPallete.forEach(color => {
    color.addEventListener('click', () => {
        let primary;

        if(color.classList.contains('color-1')){
            primaryHue = 252;
        } else if(color.classList.contains('color-2')){
            primaryHue = 52;
        }else if(color.classList.contains('color-3')){
            primaryHue = 352;
        }else if(color.classList.contains('color-4')){
            primaryHue = 152;
        }else{
            primaryHue = 202;
        }
        removeColorSelct()
        color.classList.add('active');

        root.style.setProperty('--primary-color-hue', primaryHue);
    })
})

//theme selector

const Bg1 = document.querySelector('.bg-1');
const Bg2 = document.querySelector('.bg-2');
const Bg3 = document.querySelector('.bg-3');

let lightColorLightness;
let whiteColorLightness;
let darkColorLIghtness;

//change Backgroung color
const changeBG = () => {
    root.style.setProperty('--white-color-lightness', whiteColorLightness);
    root.style.setProperty('--dark-color-lightness', darkColorLightness);
    root.style.setProperty('--light-color-lightness', lightColorLightness);

}

Bg1.addEventListener('click', () => {
    //add active class
    Bg1.classList.add('active')
    //remove classList form others
    Bg2.classList.remove('active');
    Bg3.classList.remove('active');

    //remove customized changes from local Storage
    window.location.reload();
})


Bg2.addEventListener('click', () => {
    darkColorLIghtness = '95%';
    whiteColorLightness = '20%';
    lightColorLightness = '15%';

    //add active class
    Bg2.classList.add('active');
    //remove classList form others
    Bg1.classList.remove('active');
    Bg3.classList.remove('active');

    changeBG();
});


Bg3.addEventListener('click', () => {
    darkColorLIghtness = '95%';
    whiteColorLightness = '10%';
    lightColorLightness = '0%';

    //add active class
    Bg3.classList.add('active');
    //remove classList form others
    Bg1.classList.remove('active');
    Bg2.classList.remove('active');
    changeBG()
})


