function dutyClicked(element){
    var liDuty = element.parentElement;
    var li = liDuty.parentElement;
    var button1 = li.getElementsByClassName('duty check');
    var color = window.getComputedStyle( button1[0] , null).getPropertyValue('background-color');
    if (color == 'rgb(255, 255, 255)') {
        button1[0].style.backgroundColor = '#AAA1C8';
    }else{
        button1[0].style.backgroundColor = '#FFFFFF';
    }
    var button2 = li.getElementsByClassName('duty info');
    color = window.getComputedStyle( button2[0] , null).getPropertyValue('background-color');
    if (color == 'rgb(255, 255, 255)') {
        button2[0].style.backgroundColor = 'rgba(170, 161, 200, 0.25)';
    }else{
        button2[0].style.backgroundColor = '#FFFFFF';
    }
}

function selectAll(){  
    var container = document.body.getElementsByClassName('all_duties duties');
    var lis = container[0].children;
    for(var i = 0; i < lis.length; i++){

        if(lis[i].className == 'duties'){
            var buttons = lis[i].children;
        
            var color = window.getComputedStyle( buttons[0] , null).getPropertyValue('background-color');
            if (color == 'rgb(255, 255, 255)') {
                buttons[0].style.backgroundColor = '#AAA1C8';
            }else{
                buttons[0].style.backgroundColor = '#FFFFFF';
            }
            
            color = window.getComputedStyle( buttons[1] , null).getPropertyValue('background-color');
            if (color == 'rgb(255, 255, 255)') {
                buttons[1].style.backgroundColor = 'rgba(170, 161, 200, 0.25)';
            }else{
                buttons[1].style.backgroundColor = '#FFFFFF';
            }
            
        }
    }
}  