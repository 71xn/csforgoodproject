function sortData(selection, Data) {
    var data1 = JSON.stringify(Data);
    var selectionOnly = JSON.parse(data1).filter(function (entry) {
        return entry.PL === selection;
    });

    console.log(selectionOnly);
    return selectionOnly;
}

export default sortData;