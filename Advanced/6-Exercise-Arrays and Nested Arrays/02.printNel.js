function printNele(arr, step) {
    return arr.filter((el, index) => index % step == 0);
}

printNele(['5', 
'20', 
'31', 
'4', 
'20'], 
2
);