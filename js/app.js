const pageviewsData = document.querySelector('.card__interactive__pageviews__value');
const pageviewsRange = document.querySelector('.card__interactive__range-input');
let pageviewsRangeValue = pageviewsRange.value;
let valuePageviews = "10k";

const pricePerMonthData = document.querySelector('.card__interactive__month__value');
let pricePerMonth = "$8.00";

const toggleYearly = document.querySelector('.card__interactive__check-box');
let isToggle = false;

toggleYearly.addEventListener('click', ()=>{
    if(!isToggle){
        isToggle = true;
    }else if(isToggle){
        isToggle = false;
    }
    console.log(isToggle);
    if(pageviewsRangeValue == 0){
        valuePageviews = "10K"; 
        pageviewsData.innerHTML = valuePageviews;
        if(isToggle){
            pricePerMonth = "$6.00";
        }else{
            pricePerMonth = "$8.00";
        }
        pricePerMonthData.innerHTML = pricePerMonth;
    }else if(pageviewsRangeValue == 1){
        valuePageviews = "50K";
        pageviewsData.innerHTML = valuePageviews;
        if(isToggle){
            pricePerMonth = "$9.00";
        }else{
            pricePerMonth = "$12.00";
        }
        pricePerMonthData.innerHTML = pricePerMonth;
    }else if(pageviewsRangeValue == 2){
        valuePageviews = "100K";
        pageviewsData.innerHTML = valuePageviews;
        if(isToggle){
            pricePerMonth = "$12.00";
        }else{
            pricePerMonth = "$16.00";
        }
        pricePerMonthData.innerHTML = pricePerMonth;
    }else if(pageviewsRangeValue == 3){
        valuePageviews = "500K";
        pageviewsData.innerHTML = valuePageviews;
        if(isToggle){
            pricePerMonth = "$18.00";
        }else{
            pricePerMonth = "$24.00";
        }
        pricePerMonthData.innerHTML = pricePerMonth;
    }else if(pageviewsRangeValue == 4){
        valuePageviews = "1M";
        pageviewsData.innerHTML = valuePageviews;
        if(isToggle){
            pricePerMonth = "$27.00";
        }else{
            pricePerMonth = "$36.00";
        }
        pricePerMonthData.innerHTML = pricePerMonth;
    }
});

pageviewsRange.addEventListener('change', () => {
    pageviewsRangeValue = pageviewsRange.value;
    if(pageviewsRangeValue == 0){
        valuePageviews = "10K"; 
        pageviewsData.innerHTML = valuePageviews;
        if(isToggle){
            pricePerMonth = "$6.00";
        }else{
            pricePerMonth = "$8.00";
        }
        pricePerMonthData.innerHTML = pricePerMonth;
    }else if(pageviewsRangeValue == 1){
        valuePageviews = "50K";
        pageviewsData.innerHTML = valuePageviews;
        if(isToggle){
            pricePerMonth = "$9.00";
        }else{
            pricePerMonth = "$12.00";
        }
        pricePerMonthData.innerHTML = pricePerMonth;
    }else if(pageviewsRangeValue == 2){
        valuePageviews = "100K";
        pageviewsData.innerHTML = valuePageviews;
        if(isToggle){
            pricePerMonth = "$12.00";
        }else{
            pricePerMonth = "$16.00";
        }
        pricePerMonthData.innerHTML = pricePerMonth;
    }else if(pageviewsRangeValue == 3){
        valuePageviews = "500K";
        pageviewsData.innerHTML = valuePageviews;
        if(isToggle){
            pricePerMonth = "$18.00";
        }else{
            pricePerMonth = "$24.00";
        }
        pricePerMonthData.innerHTML = pricePerMonth;
    }else if(pageviewsRangeValue == 4){
        valuePageviews = "1M";
        pageviewsData.innerHTML = valuePageviews;
        if(isToggle){
            pricePerMonth = "$27.00";
        }else{
            pricePerMonth = "$36.00";
        }
        pricePerMonthData.innerHTML = pricePerMonth;
    }
});





