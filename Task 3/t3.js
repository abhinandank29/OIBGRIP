const calculateT = () =>
{
    const numberT = document.getElementById('t').value;
    // console.log(numberT);

    const temp = document.getElementById('temp_diff');
    const valueTemp = temp_diff.options[temp.selectedIndex].value;

    const celTofah = (cel) =>
    {
        let fahrenheit = (cel *9/5) +32;
        return fahrenheit.toFixed(3);
    }
    const fahTocel = (fah) =>
    {
        let celsius = (fah - 32)*5/9;
        return celsius.toFixed(3);
    }


    let answer;
          
    if (valueTemp == 'cel'){
        answer = celTofah(numberT);
        document.getElementById('result').innerHTML = `= ${answer}°Fahrenheit`;
    }else{
        answer = fahTocel(numberT);
        document.getElementById('result').innerHTML = `= ${answer}°Celsius`;
    } 
}