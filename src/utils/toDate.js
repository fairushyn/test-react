function toDate (num) {
    // return new Date(num).toLocaleDateString();
    var date = new Date(num);
    var dd = date.getDate();

    var mm = date.getMonth()+1; 
    var yyyy = date.getFullYear();
    if(dd<10) {
        dd='0'+dd;
    } 

    if(mm<10) {
        mm='0'+mm;
    } 
    date = dd+'-'+mm+'-'+yyyy;
    return date;

}

export default toDate