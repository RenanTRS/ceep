export function removeDatasRepetidas(datas){
    const datasUnicas = [];
    datas.forEach((data) => {
        if(datasUnicas.indexOf(data.dateFormat) === -1){
            datasUnicas.push(data.dateFormat);
        }
    });
    
    return datasUnicas;
}
export function ordenaData(data){
    data.sort((a, b)=>{
        const primeiraData = moment(a, 'DD/MM/YYYY').format('YYYYMMDD');
        const segundaData = moment(b, 'DD/MM/YYYY').format('YYYYMMDD');
        
        return primeiraData - segundaData;
    })

}