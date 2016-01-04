/**
 * Funzioni utili per il calcolo del MUD Telematico
 * @module mud
 * @author Denny Biasiolli
 */

var util = require('util');
var utils = require('./utils');

/** Sezione Anagrafica – Comunicazione Rifiuti da Apparecchiature Elettriche ed Elettroniche
 * @see {@link mud.anag} */
exports.anag = require('./anag');
/** Sezione Rifiuti
 * @see {@link mud.rif} */
exports.rif = require('./rif');
/** Sezione Intermediazione
 * @see {@link mud.int} */
exports.int = require('./int');
/** Sezione Materiali secondari
 * @see {@link mud.mat} */
exports.mat = require('./mat');
/** Sezione RAEE – Comunicazione Rifiuti da Apparecchiature Elettriche ed Elettroniche
 * @see {@link mud.raee} */
exports.raee = require('./raee');
/** Sezione Veicoli Fuori Uso
 * @see {@link mud.vfu} */
exports.vfu = require('./vfu');
/** Sezione Imballaggi
 * @see {@link mud.imb} */
exports.imb = require('./imb');
/** Utility per esportazione MUD
 *  @see {@link mud.utils} */
exports.utils = require('./utils');

/** Esporta la riga relativa al record XX - Testata del file di export e modulo riepilogativo.
 * @param {number} nAA Numero di record di tipo “AA”
 * @param {number} nAB Numero di record di tipo “AB”
 * @param {number} nBB Numero di record di tipo “BB”
 * @param {number} nBC Numero di record di tipo “BC”
 * @param {number} nBD Numero di record di tipo “BD”
 * @param {number} nBE Numero di record di tipo “BE”
 * @param {number} nDA Numero di record di tipo “DA”
 * @param {number} nDB Numero di record di tipo “DB”
 * @param {number} nRA Numero di record di tipo “RA”
 * @param {number} nRB Numero di record di tipo “RB”
 * @param {number} nRC Numero di record di tipo “RC”
 * @param {number} nRD Numero di record di tipo “RD”
 * @param {number} nRE Numero di record di tipo “RE”
 * @param {number} nRF Numero di record di tipo “RF”
 * @param {number} nVC Numero di record di tipo “VC”
 * @param {number} nVD Numero di record di tipo “VD”
 * @param {number} nVE Numero di record di tipo “VE”
 * @param {number} nVF Numero di record di tipo “VF”
 * @param {number} nVG Numero di record di tipo “VG”
 * @param {number} nVH Numero di record di tipo “VH”
 * @param {number} nIA Numero di record di tipo “IA”
 * @param {number} nIB Numero di record di tipo “IB”
 * @param {number} nIC Numero di record di tipo “IC”
 * @param {number} nID Numero di record di tipo “ID”
 * @param {number} nIE Numero di record di tipo “IE”
 * @param {number} nIF Numero di record di tipo “IF”
 * @param {number} nMA Numero di record di tipo “MA”
 * @param {string} codiceFiscale Codice fiscale
 * @param {string} ragioneSociale Ragione sociale
 * @param {string} via Indirizzo (senza numero civico)
 * @param {string} civico Numero civico
 * @param {string} cap CAP
 * @param {string} citta Città
 * @param {string} siglaProvincia Sigla della provincia
 * @param {string} prefissoTelefonico Prefisso telefonico
 * @param {string} numeroTelefonico Numero telefonico
 * @param {string} indirizzoEmail Indirizzo e-mail
 * @param {utils.recordExportCallback} [callback] - Funzione di callback
 * @return {string} (Se non gestito callback) Record XX - Testata del file di export e modulo riepilogativo.
 */
exports.getRecordXX = function(nAA, nAB, nBA, nBB, nBC, nBD, nBE, nDA, nDB, nRA, nRB, nRC, nRD, nRE, nRF, nVC, nVD, nVE, nVF, nVG, nVH, nIA, nIB, nIC, nID, nIE, nIF, nMA,
                                codiceFiscale, ragioneSociale, via, civico, cap, citta, siglaProvincia, prefissoTelefonico, numeroTelefonico, indirizzoEmail,
                                callback)
{
    var retVal = util.format(
        '%s;%s;%s;%s;%s;%s;%s;%s;%s;%s;%s;%s;%s;%s;%s;%s;%s;%s;%s;%s;%s;%s;%s;%s;%s;%s;%s;%s;%s;%s;%s;%s;%s;%s;%s;%s;%s;%s;%s;%s;%s;%s;%s;%s;%s;%s;',
        'XX',
        '6.00/14', // Costante release file
        utils.formattaNumero(1, 2), // Tipo di file: "10" (valore costante per i files prodotti con SW non fornito dalle CCIAA, corretto a "01" per problemi di importazione sul software MUD)
        utils.formattaDataOra(new Date(), 'YYYYMMDD'), // dataOraCompilazione
        utils.formattaDataOra(new Date(), 'HHmmss'), // dataOraCompilazione
        utils.formattaNumero(nAA+nAB+nBA+nBB+nBC+nBD+nBE+nDA+nDB+nRA+nRB+nRC+nRD+nRE+nRF+nVC+nVD+nVE+nVF+nVG+nVH+nIA+nIB+nIC+nID+nIE+nIF+nMA, 8), // Nr. totale record estratti escluso “XX”
        utils.formattaNumero(nAA, 5),
        utils.formattaNumero(nAB, 5),
        utils.formattaNumero(nBA, 5),
        utils.formattaNumero(nBB, 5),
        utils.formattaNumero(nBC, 5),
        utils.formattaNumero(nBD, 5),
        utils.formattaNumero(nBE, 5),
        utils.formattaNumero(nDA, 5),
        utils.formattaNumero(nDB, 5),
        utils.formattaNumero(nRA, 5),
        utils.formattaNumero(nRB, 5),
        utils.formattaNumero(nRC, 5),
        utils.formattaNumero(nRD, 5),
        utils.formattaNumero(nRE, 5),
        utils.formattaNumero(nRF, 5),
        utils.formattaNumero(nVC, 5),
        utils.formattaNumero(nVD, 5),
        utils.formattaNumero(nVE, 5),
        utils.formattaNumero(nVF, 5),
        utils.formattaNumero(nVG, 5),
        utils.formattaNumero(nVH, 5),
        utils.formattaNumero(nIA, 5),
        utils.formattaNumero(nIB, 5),
        utils.formattaNumero(nIC, 5),
        utils.formattaNumero(nID, 5),
        utils.formattaNumero(nIE, 5),
        utils.formattaNumero(nIF, 5),
        utils.formattaNumero(nMA, 5),
        Array(5+1).join('0'), // FILLER-01
        utils.formattaStringa(codiceFiscale, 16),
        utils.formattaStringa(ragioneSociale, 60),
        utils.formattaStringa(via, 30),
        utils.formattaStringa(civico, 10),
        utils.formattaStringa(cap, 5),
        utils.formattaStringa(citta, 30),
        utils.formattaStringa(siglaProvincia, 2),
        utils.formattaStringa(prefissoTelefonico, 5),
        utils.formattaStringa(numeroTelefonico, 10),
        utils.formattaStringa(indirizzoEmail, 60),
        utils.formattaStringa('mudrifiuti.com v1.0.0', 30) // Riservato,  può essere utilizzato liberamente in fase di presentazione della comunicazione per identificare il software che ha prodotto il file, oltre alla release del prodotto. In questo modo, se dovessero insorgere dei problemi in fase di acquisizione dell'elaborato, è possibile risalire all'identità ed alla versione del prodotto SW.
    );
    if(callback)
        return callback(retVal.length != 482, retVal);
    else
        return retVal;
}
