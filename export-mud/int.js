/**
 * Esportazione delle schede INT MUD
 * @module int
 * @memberof module:mud
 * @author Denny Biasiolli
 */

var util = require('util');
var utils = require('./utils');

/** Esporta la riga relativa al record DA – Scheda INT – Rifiuti commercializzati e intermediati senza detenzione
 * @param {string} annoRiferimentoDichiarazione Anno di riferimento della dichiarazione (AAAA)
 * @param {string} codiceFiscale Codice fiscale identificativo
 * @param {string} codUL Codice di identificazione univoca dell’unità locale
 * @param {number} nProgressivoINT Numero d’ordine progressivo di scheda INT
 * @param {string} codiceCER Codice del rifiuto SOLO CATALOGO EUROPEO
 * @param {boolean} isSolidoPulverulento Stato fisico: Solido polverulento
 * @param {boolean} isSolidoNonPulverulento Stato fisico: Solido NON polverulento
 * @param {boolean} isFangosoPalabile Stato fisico: Fangoso palabile
 * @param {boolean} isLiquido Stato fisico: Liquido
 * @param {boolean} isAeriforme Stato fisico: Aeriforme
 * @param {boolean} isVischiosoSciropposo Stato fisico: Vischioso e Sciropposo
 * @param {boolean} isAltro Stato fisico: Altro
 * @param {decimal} kgIntermediati Quantità complessivamente intermediata
 * @param {number} nUO Numero di moduli (record) UO allegati
 * @param {number} nUD Numero di moduli (record) UD allegati
 * @param {utils.recordExportCallback} [callback] - Funzione di callback
 * @return {string} (Se non gestito callback) Record DA – Scheda INT – Rifiuti commercializzati e intermediati senza detenzione
 */
exports.getRecordINT = function(annoRiferimentoDichiarazione, codiceFiscale, codUL,
                                 nProgressivoINT, codiceCER,
                                 isSolidoPulverulento, isSolidoNonPulverulento, isFangosoPalabile, isLiquido, isAeriforme, isVischiosoSciropposo, isAltro,
                                 kgIntermediati, nUO, nUD,
                                 callback)
{
    if(codiceCER && typeof(codiceCER) === 'string') codiceCER = codiceCER.replace(/\D+/g, '');
    var objIntermediati = utils.getOggettoValoreUM(kgIntermediati);
    var retVal = util.format(
        '%s;%s;%s;%s;%s;%s;%s;%s;%s;%s;%s;%s;%s;%s;%s;%s;%s;',
        'DA',
        utils.formattaNumero(annoRiferimentoDichiarazione, 4),
        utils.formattaStringa(codiceFiscale, 16),
        utils.formattaStringa(codUL, 15),
        utils.formattaNumero(nProgressivoINT, 4),
        utils.formattaStringa(codiceCER, 6),
        utils.formattaBoolean(isSolidoPulverulento),
        utils.formattaBoolean(isSolidoNonPulverulento),
        utils.formattaBoolean(isFangosoPalabile),
        utils.formattaBoolean(isLiquido),
        utils.formattaBoolean(isAeriforme),
        utils.formattaBoolean(isVischiosoSciropposo),
        utils.formattaBoolean(isAltro),
        utils.formattaNumero(objIntermediati.valore, 7, 3),
        utils.formattaNumero(objIntermediati.um, 1),
        utils.formattaNumero(nUO, 5),
        utils.formattaNumero(nUD, 5)
    );
    if(callback)
        return callback(retVal.length != 93, retVal);
    else
        return retVal;
}

/** Esporta la riga generica relativa al record DB - Moduli UO – Unità di Origine del rifiuto.
 * @param {string} annoRiferimentoDichiarazione Anno di riferimento della dichiarazione (AAAA)
 * @param {string} codiceFiscale Codice fiscale identificativo
 * @param {string} codUL Codice di identificazione univoca dell’unità locale
 * @param {number} nProgressivoINT Numero d’ordine progressivo di scheda INT
 * @param {string} codiceCER Codice del rifiuto SOLO CATALOGO EUROPEO
 * @param {number} nProgressivoAllegato Numero progressivo dell'allegato
 * @param {string} codiceFiscaleSoggetto Codice fiscale dell'unità locale di origine
 * @param {string} ragioneSociale Descrizione della ragione sociale
 * @param {number} istatProvincia ISTAT Provincia
 * @param {number} istatComune ISTAT Comune
 * @param {string} via Via
 * @param {string} civico Nr. Civico
 * @param {string} nazioneEstera Paese estero (solo se di origine non nazionale)
 * @param {decimal} kgQtaDichiarata Quantità acquisita
 * @param {utils.recordExportCallback} [callback] - Funzione di callback
 * @return {string} (Se non gestito callback) Record DB - Moduli UO – Unità di Origine del rifiuto.
 */
exports.getRecordINT_UO = function(annoRiferimentoDichiarazione, codiceFiscale, codUL,
                                    nProgressivoINT, codiceCER,
                                    nProgressivoAllegato,
                                    codiceFiscaleSoggetto, ragioneSociale, istatProvincia, istatComune, via, civico, nazioneEstera, kgQtaDichiarata,
                                    callback)
{
    return getRecordINT_UO_UD(annoRiferimentoDichiarazione, codiceFiscale, codUL,
                              nProgressivoINT, codiceCER,
                              'UO', nProgressivoAllegato,
                              codiceFiscaleSoggetto, ragioneSociale, istatProvincia, istatComune, via, civico, nazioneEstera, kgQtaDichiarata,
                              callback);
}

/** Esporta la riga relativa al record DB - Moduli UD – Unità di Destinazione del rifiuto.
 * @param {string} annoRiferimentoDichiarazione Anno di riferimento della dichiarazione (AAAA)
 * @param {string} codiceFiscale Codice fiscale identificativo
 * @param {string} codUL Codice di identificazione univoca dell’unità locale
 * @param {number} nProgressivoINT Numero d’ordine progressivo di scheda INT
 * @param {string} codiceCER Codice del rifiuto SOLO CATALOGO EUROPEO
 * @param {number} nProgressivoAllegato Numero progressivo dell'allegato
 * @param {string} codiceFiscaleSoggetto Codice fiscale dell'unità locale di destinazione
 * @param {string} ragioneSociale Descrizione della ragione sociale
 * @param {number} istatProvincia ISTAT Provincia
 * @param {number} istatComune ISTAT Comune
 * @param {string} via Via
 * @param {string} civico Nr. Civico
 * @param {string} nazioneEstera Paese estero (solo se di origine non nazionale)
 * @param {decimal} kgQtaDichiarata Quantità ceduta nell'anno
 * @param {utils.recordExportCallback} [callback] - Funzione di callback
 * @return {string} (Se non gestito callback) Record DB - Moduli UD – Unità di Destinazione del rifiuto.
 */
exports.getRecordINT_UD = function(annoRiferimentoDichiarazione, codiceFiscale, codUL,
                                    nProgressivoINT, codiceCER,
                                    nProgressivoAllegato,
                                    codiceFiscaleSoggetto, ragioneSociale, istatProvincia, istatComune, via, civico, nazioneEstera, kgQtaDichiarata,
                                    callback)
{
    return getRecordINT_UO_UD(annoRiferimentoDichiarazione, codiceFiscale, codUL,
                              nProgressivoINT, codiceCER,
                              'UD', nProgressivoAllegato,
                              codiceFiscaleSoggetto, ragioneSociale, istatProvincia, istatComune, via, civico, nazioneEstera, kgQtaDichiarata,
                              callback);
}

/** Esporta la riga generica relativa al record DB - Moduli UO / UD – Allegati alla Scheda INT
 * @param {string} annoRiferimentoDichiarazione Anno di riferimento della dichiarazione (AAAA)
 * @param {string} codiceFiscale Codice fiscale identificativo
 * @param {string} codUL Codice di identificazione univoca dell’unità locale
 * @param {number} nProgressivoINT Numero d’ordine progressivo di scheda INT
 * @param {string} codiceCER Codice del rifiuto SOLO CATALOGO EUROPEO
 * @param {string} tipoAllegato Tipo allegato (UO / UD)
 * @param {number} nProgressivoAllegato Numero progressivo dell'allegato
 * @param {string} codiceFiscaleSoggetto Codice fiscale dell'unità locale di origine / destinazione
 * @param {string} ragioneSociale Descrizione della ragione sociale
 * @param {number} istatProvincia ISTAT Provincia
 * @param {number} istatComune ISTAT Comune
 * @param {string} via Via
 * @param {string} civico Nr. Civico
 * @param {string} nazioneEstera Paese estero (solo se di origine non nazionale)
 * @param {decimal} kgQtaDichiarata Quantità acquisita / ceduta nell'anno
 * @param {utils.recordExportCallback} [callback] - Funzione di callback
 * @return {string} (Se non gestito callback) Record DB - Moduli UO / UD – Allegati alla Scheda INT
 */
function getRecordINT_UO_UD(annoRiferimentoDichiarazione, codiceFiscale, codUL,
                             nProgressivoINT, codiceCER,
                             tipoAllegato, nProgressivoAllegato,
                             codiceFiscaleSoggetto, ragioneSociale, istatProvincia, istatComune, via, civico, nazioneEstera, kgQtaDichiarata,
                             callback)
{
    if(codiceCER && typeof(codiceCER) === 'string') codiceCER = codiceCER.replace(/\D+/g, '');
    if(typeof(nazioneEstera) == 'string') nazioneEstera = nazioneEstera.toString().toUpperCase();
    if(nazioneEstera == 'IT' || nazioneEstera == 'ITALIA' || nazioneEstera == 'ITALY') nazioneEstera = null;
    var objQta = utils.getOggettoValoreUM(kgQtaDichiarata);
    var retVal = util.format(
        '%s;%s;%s;%s;%s;%s;%s;%s;%s;%s;%s;%s;%s;%s;%s;%s;%s;',
        'DB',
        utils.formattaNumero(annoRiferimentoDichiarazione, 4),
        utils.formattaStringa(codiceFiscale, 16),
        utils.formattaStringa(codUL, 15),
        utils.formattaNumero(nProgressivoINT, 4),
        utils.formattaStringa(codiceCER, 6),
        utils.formattaStringa(tipoAllegato, 2),
        utils.formattaNumero(nProgressivoAllegato, 5),
        utils.formattaStringa(codiceFiscaleSoggetto, 16),
        utils.formattaStringa(ragioneSociale, 60),
        utils.formattaNumero(istatProvincia, 3),
        utils.formattaNumero(istatComune, 3),
        utils.formattaStringa(via, 30),
        utils.formattaStringa(civico, 6),
        utils.formattaStringa(nazioneEstera, 20),
        utils.formattaNumero(objQta.valore, 7, 3),
        utils.formattaNumero(objQta.um, 1)
    );
    if(callback)
        return callback(retVal.length != 221, retVal);
    else
        return retVal;
}
