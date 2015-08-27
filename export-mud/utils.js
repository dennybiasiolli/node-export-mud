/**
 * Funzioni utili per il calcolo del MUD Telematico
 * @module utils
 * @memberof module:mud
 * @author Denny Biasiolli
 */

/**
 * Callback generica per le esportazioni di record.
 * @callback recordExportCallback
 * @param {boolean} err Eventuale errore durante l'esportazione
 * @param {string} response Stringa esportata
 */

/**
 * Oggetto generico composto da valore e unità di misura.
 * @typedef oggettoValoreUM
 * @type Object.<number, string>
 * @property {number} valore Valore
 * @property {string} um Unità di misura, '1'=kg, '2'=t
 */

var moment = require('moment');

/** Formatta un valore numerico nella corrispondente stringa composta da n interi e n decimali
 * @param {number} valore Il valore da formattare
 * @param {number} interi Il numero di interi da visualizzare
 * @param {number} [decimali] Il numero di decimali da visualizzare, default = 0
 * @return {string} Stringa formattata composta da n cifre intere ',' come separatore e n cifre decimali
 */
exports.formattaNumero = function(valore, interi, decimali) {
    if(valore == null || isNaN(valore)) valore = 0;
    if(typeof(valore) !== 'number') valore = Number(valore);
    if(interi == null || isNaN(interi)) interi = 0;
    var dimensioneTot = interi + (decimali ? decimali+1 : 0);
    var valoreDaFormattare = (decimali ? valore.toFixed(decimali) : valore);
    var strRet = (Array(dimensioneTot+1).join('0') + valoreDaFormattare.toString()).slice(-dimensioneTot);
    return (decimali ? strRet.replace('.', ',') : strRet);
}

/** Formatta una stringa
 * @param {string} valore Stringa da formattare
 * @param {number} lunghezza Lunghezza della stringa da fornire in output
 * @param {boolean} [bypassaUpperCase] evita di fare l'UpperCase della stringa, default = False
 * @return {string} Stringa formattata con spazi di riempimento a destra o tagliata per la lunghezza richiesta
 */
exports.formattaStringa = function(valore, lunghezza, bypassaUpperCase) {
    if(valore == null) valore = '';
    if(lunghezza == null) lunghezza = 0;
    if(typeof(valore) !== 'string') valore = valore.toString();
    if(!bypassaUpperCase) valore = valore.toUpperCase();
    return (valore + Array(lunghezza+1).join(' ')).slice(0, lunghezza);
}

/** Formatta un valore boolean nella corrispondente stringa
 * @param {boolean} valore Valore booleano da formattare
 * @return {string} '1' se True, '0' se False
 */
exports.formattaBoolean = function(valore) {
    if(valore)
        return '1';
    else
        return '0';
}

/** Formatta un valore Date secondo il formato specificato.
 * @param {date} valore Valore Date(), se null restituisce stringa vuota della lunghezza del formato specificato
 * @param {date} formato Formato da utilizzare per l'output, per i formati fare riferimento a Moment.js (http://momentjs.com/)
 * @return {string} Stringa formattata secondo il formato specificato.
 */
exports.formattaDataOra = function(valore, formato) {
    if(!valore) return Array(formato.length+1).join(' ');
    return moment(valore).format(formato);
}

/** Converte in oggetto il valore indicato, se superiore a limitValue
 * @param {number} valore Valore da convertire se superiore a limitValue
 * @param {number} [limitValue] Valore limite da utilizzare per la conversione, default = 1000
 * @return {oggettoValoreUM} Oggetto contenente il valore e l'unità di misura relativa.
 */
exports.getOggettoValoreUM = function(valore, limitValue) {
    var retObj = {valore: valore, um: '1'};
    if(limitValue == null || isNaN(limitValue)) limitValue = 10000000;
    if(retObj.valore >= limitValue){
        retObj.valore = retObj.valore / 1000;
        retObj.um = '2';
    }/* else {
        retObj.valore = retObj.valore;
        retObj.um = '1';
    }*/
    return retObj
}
