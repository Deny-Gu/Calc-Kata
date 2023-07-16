const romans = { 'M': 1000, 'D': 500, 'C': 100, 'XC': 90, 'L': 50, 'XL': 40, 'X': 10, 'IX': 9, 'V': 5, 'IV': 4, 'I': 1};

function roman2arabic (str) {
    let arr = str.split('').map(num => romans[num]);
    let num = 0;

    for (let i = 0; i < arr.length; i++) {
       if (arr[i] < arr[i+1]) {
            num += arr[i+1] - arr[i];
            arr.splice(i+1, 1);
       } else {
            num += arr[i];
       }
    }

    return num;
};

function arabic2roman (num) {
    let str = '';
    for (let keys in romans) {
        while (num >= romans[keys]) {
            str += keys;
            num -= romans[keys]
        }
    }

    return str;
};

function calculator (str) {
    if (/^[A-Z]*\s[+-/*]\s[A-Z]*$/.test(str) || /^[0-9]*\s[+-/*]\s[0-9]*$/.test(str)) {
        let arr = str.split(' ');
        if (/[0-9]/.test(arr[0])) {
            if ((arr[0] <= 10 && arr[2] <= 10) && (arr[0] > 0 && arr[2] > 0)) {
                res = Math.floor(eval(arr[0] + arr[1] + arr[2]));
                return String(res);
            } else {
                throw new Error('Вы ввели неверные данные!')
            }
        } else {
            if ((roman2arabic(arr[0]) <= 10 && roman2arabic(arr[2]) <= 10) && (roman2arabic(arr[0]) > 0 && roman2arabic(arr[2]) > 0)) {
                res = Math.floor(eval(roman2arabic(arr[0]) + arr[1] + roman2arabic(arr[2])));
                
                if (res == 0) {
                    return ''
                } else {
                    return arabic2roman(res);
                }
            } else {
                throw new Error('Вы ввели неверные данные!')
            }
        }
    } else {
        throw new Error('Вы ввели неверные данные!')
    }
};
