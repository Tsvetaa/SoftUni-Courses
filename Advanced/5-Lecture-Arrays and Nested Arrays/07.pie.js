function pie(pies, start, end) {
    const startIndex = pies.indexOf(start);
    const endIndex = pies.indexOf(end) + 1;

    return pies.slice(startIndex, endIndex);
}

pie(['Pumpkin Pie',
'Key Lime Pie',
'Cherry Pie',
'Lemon Meringue Pie',
'Sugar Cream Pie'],
'Key Lime Pie',
'Lemon Meringue Pie'
)