function taskbar() 
{
    const alert = document.querySelector('.taskbar');
    alert.style.display = 'block'; 
    const alert2 = document.querySelector('.tasks-elements');
    alert2.style.color = '#0062B1';
    const alert3 = document.querySelector('.taskbar-title');
    alert3.style.display = 'block'; 
    return true;
};

function exit() 
{
    const alert = document.querySelector('.taskbar');
    alert.style.display = 'none'; 
    const alert2 = document.querySelector('.tasks-elements');
    alert2.style.color = 'black';
    const alert3 = document.querySelector('.taskbar-title');
    alert3.style.display = 'none'; 
    return true;
};


