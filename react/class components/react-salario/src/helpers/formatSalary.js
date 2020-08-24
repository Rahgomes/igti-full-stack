const formatter = Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' });

function formatValue(value) {
    return formatter.format(value);
}

function formatValuePercent(value){
    return value.toFixed(2);
}

export { formatValue, formatValuePercent };