/**
 * Esportazione delle schede MAT MUD
 * @module mat
 * @memberof module:mud
 * @author Denny Biasiolli
 */

var util = require('util');
var utils = require('./utils');

/** Esporta la riga relativa al record MA(RIF) – Scheda Materiali secondari
 * @param {string} annoRiferimentoDichiarazione Anno di riferimento della dichiarazione (AAAA)
 * @param {string} codiceFiscale Codice fiscale identificativo
 * @param {string} codUL Codice di identificazione univoca dell’unità locale
 * @param {decimal} kgAmmCompVerde Ammendante compostato verde
 * @param {decimal} kgAmmCompMisto Ammendante compostato misto
 * @param {decimal} kgAltriAmm Altri Ammendanti
 * @param {decimal} kgDigestato Digestato
 * @param {decimal} kgAggrRic Aggregati riciclati
 * @param {decimal} kgRottVetro Rottami di vetro
 * @param {decimal} kgRottFerroAcciaio Rottami di ferro e acciaio
 * @param {decimal} kgRottAlluminio Rottami di alluminio
 * @param {decimal} kgRottRame Rottami di rame
 * @param {decimal} kgCartaCartone Carta e cartone
 * @param {decimal} kgPlastica Plastica
 * @param {decimal} kgLegnoSughero Legno e sughero
 * @param {decimal} kgCssCombustibile CSS – combustibile
 * @param {decimal} kgTessile Tessile
 * @param {decimal} kgCuoio Cuoio
 * @param {decimal} kgRifCeramici Rifiuti Ceramici
 * @param {decimal} kgFanghi Fanghi
 * @param {decimal} kgFertilizzanti Fertilizzanti
 * @param {decimal} kgGomma Gomma
 * @param {decimal} kgAltro Altro
 * @param {utils.recordExportCallback} [callback] - Funzione di callback
 * @return {string} (Se non gestito callback) MA(RIF) – Scheda Materiali secondari
 */
exports.getRecordMAT_RIF = function(annoRiferimentoDichiarazione, codiceFiscale, codUL,
                                     kgAmmCompVerde, kgAmmCompMisto, kgAltriAmm, kgDigestato, kgAggrRic,
                                     kgRottVetro, kgRottFerroAcciaio, kgRottAlluminio, kgRottRame,
                                     kgCartaCartone, kgPlastica, kgLegnoSughero, kgCssCombustibile, kgTessile, kgCuoio, kgRifCeramici,
                                     kgFanghi, kgFertilizzanti,/* kgLegno,*/ kgGomma, kgAltro,
                                     callback)
{
    return getRecordMAT(annoRiferimentoDichiarazione, codiceFiscale, codUL,
                        'RIF', 0,
                        kgAmmCompVerde, kgAmmCompMisto, kgAltriAmm, kgDigestato, kgAggrRic,
                        kgRottVetro, kgRottFerroAcciaio, kgRottAlluminio, kgRottRame,
                        kgCartaCartone, kgPlastica, kgLegnoSughero, kgCssCombustibile, kgTessile, kgCuoio, kgRifCeramici,
                        kgFanghi, kgFertilizzanti, 0, kgGomma, kgAltro,
                        callback);
}

/** Esporta la riga relativa al record MA(AUT) – Scheda Materiali secondari
 * @param {string} annoRiferimentoDichiarazione Anno di riferimento della dichiarazione (AAAA)
 * @param {string} codiceFiscale Codice fiscale identificativo
 * @param {string} codUL Codice di identificazione univoca dell’unità locale
 * @param {decimal} kgRottVetro Rottami di vetro
 * @param {decimal} kgRottFerroAcciaio Rottami di ferro e acciaio
 * @param {decimal} kgRottAlluminio Rottami di alluminio
 * @param {decimal} kgRottRame Rottami di rame
 * @param {decimal} kgPlastica Plastica
 * @param {decimal} kgTessile Tessile
 * @param {decimal} kgGomma Gomma
 * @param {decimal} kgAltro Altro
 * @param {utils.recordExportCallback} [callback] - Funzione di callback
 * @return {string} (Se non gestito callback) MA(AUT) – Scheda Materiali secondari
 */
exports.getRecordMAT_AUT = function(annoRiferimentoDichiarazione, codiceFiscale, codUL,
                                     kgRottVetro, kgRottFerroAcciaio, kgRottAlluminio, kgRottRame,
                                     kgPlastica, kgTessile, kgGomma, kgAltro,
                                     callback)
{
    return getRecordMAT_VFU(annoRiferimentoDichiarazione, codiceFiscale, codUL,
                            'AUT',
                            kgRottVetro, kgRottFerroAcciaio, kgRottAlluminio, kgRottRame,
                            kgPlastica, kgTessile, kgGomma, kgAltro,
                            callback);
}

/** Esporta la riga relativa al record MA(FRA) – Scheda Materiali secondari
 * @param {string} annoRiferimentoDichiarazione Anno di riferimento della dichiarazione (AAAA)
 * @param {string} codiceFiscale Codice fiscale identificativo
 * @param {string} codUL Codice di identificazione univoca dell’unità locale
 * @param {decimal} kgRottVetro Rottami di vetro
 * @param {decimal} kgRottFerroAcciaio Rottami di ferro e acciaio
 * @param {decimal} kgRottAlluminio Rottami di alluminio
 * @param {decimal} kgRottRame Rottami di rame
 * @param {decimal} kgPlastica Plastica
 * @param {decimal} kgTessile Tessile
 * @param {decimal} kgGomma Gomma
 * @param {decimal} kgAltro Altro
 * @param {utils.recordExportCallback} [callback] - Funzione di callback
 * @return {string} (Se non gestito callback) MA(FRA) – Scheda Materiali secondari
 */
exports.getRecordMAT_FRA = function(annoRiferimentoDichiarazione, codiceFiscale, codUL,
                                     kgRottVetro, kgRottFerroAcciaio, kgRottAlluminio, kgRottRame,
                                     kgPlastica, kgTessile, kgGomma, kgAltro,
                                     callback)
{
    return getRecordMAT_VFU(annoRiferimentoDichiarazione, codiceFiscale, codUL,
                            'FRA',
                            kgRottVetro, kgRottFerroAcciaio, kgRottAlluminio, kgRottRame,
                            kgPlastica, kgTessile, kgGomma, kgAltro,
                            callback);
}

/** Esporta la riga relativa al record MA(ROT) – Scheda Materiali secondari
 * @param {string} annoRiferimentoDichiarazione Anno di riferimento della dichiarazione (AAAA)
 * @param {string} codiceFiscale Codice fiscale identificativo
 * @param {string} codUL Codice di identificazione univoca dell’unità locale
 * @param {decimal} kgRottVetro Rottami di vetro
 * @param {decimal} kgRottFerroAcciaio Rottami di ferro e acciaio
 * @param {decimal} kgRottAlluminio Rottami di alluminio
 * @param {decimal} kgRottRame Rottami di rame
 * @param {decimal} kgPlastica Plastica
 * @param {decimal} kgTessile Tessile
 * @param {decimal} kgGomma Gomma
 * @param {decimal} kgAltro Altro
 * @param {utils.recordExportCallback} [callback] - Funzione di callback
 * @return {string} (Se non gestito callback) MA(ROT) – Scheda Materiali secondari
 */
exports.getRecordMAT_ROT = function(annoRiferimentoDichiarazione, codiceFiscale, codUL,
                                     kgRottVetro, kgRottFerroAcciaio, kgRottAlluminio, kgRottRame,
                                     kgPlastica, kgTessile, kgGomma, kgAltro,
                                     callback)
{
    return getRecordMAT_VFU(annoRiferimentoDichiarazione, codiceFiscale, codUL,
                            'ROT',
                            kgRottVetro, kgRottFerroAcciaio, kgRottAlluminio, kgRottRame,
                            kgPlastica, kgTessile, kgGomma, kgAltro,
                            callback);
}

/** Esporta la riga generica relativa al record MA(VFU) – Scheda Materiali secondari
 * @param {string} annoRiferimentoDichiarazione Anno di riferimento della dichiarazione (AAAA)
 * @param {string} codiceFiscale Codice fiscale identificativo
 * @param {string} codUL Codice di identificazione univoca dell’unità locale
 * @param {string} tipoSchedaRiferimento Tipo di SCHEDA a cui la scheda Materiali si riferisce (AUT = Scheda Autodemolitori, FRA = Scheda Frantumatori, ROT = Scheda Rottamatori)
 * @param {decimal} kgRottVetro Rottami di vetro
 * @param {decimal} kgRottFerroAcciaio Rottami di ferro e acciaio
 * @param {decimal} kgRottAlluminio Rottami di alluminio
 * @param {decimal} kgRottRame Rottami di rame
 * @param {decimal} kgPlastica Plastica
 * @param {decimal} kgTessile Tessile
 * @param {decimal} kgGomma Gomma
 * @param {decimal} kgAltro Altro
 * @param {utils.recordExportCallback} [callback] - Funzione di callback
 * @return {string} (Se non gestito callback) MA(VFU) – Scheda Materiali secondari
 */
function getRecordMAT_VFU(annoRiferimentoDichiarazione, codiceFiscale, codUL,
                           tipoSchedaRiferimento,
                           kgRottVetro, kgRottFerroAcciaio, kgRottAlluminio, kgRottRame,
                           kgPlastica, kgTessile, kgGomma, kgAltro,
                           callback)
{
    return getRecordMAT(annoRiferimentoDichiarazione, codiceFiscale, codUL,
                        tipoSchedaRiferimento, 0,
                        0, 0, 0, 0, 0,
                        kgRottVetro, kgRottFerroAcciaio, kgRottAlluminio, kgRottRame,
                        0, kgPlastica, 0, 0, kgTessile, 0, 0,
                        0, 0, 0, kgGomma, kgAltro,
                        callback);
}

/** Esporta la riga generica relativa al record MA(IMB) – Scheda Materiali secondari
 * @param {string} annoRiferimentoDichiarazione Anno di riferimento della dichiarazione (AAAA)
 * @param {string} codiceFiscale Codice fiscale identificativo
 * @param {string} codUL Codice di identificazione univoca dell’unità locale
 * @param {decimal} kgRottVetro Rottami di vetro
 * @param {decimal} kgRottFerroAcciaio Rottami di ferro e acciaio
 * @param {decimal} kgRottAlluminio Rottami di alluminio
 * @param {decimal} kgCartaCartone Carta e cartone
 * @param {decimal} kgPlastica Plastica
 * @param {decimal} kgLegno Legno
 * @param {decimal} kgAltro Altro
 * @param {utils.recordExportCallback} [callback] - Funzione di callback
 * @return {string} (Se non gestito callback) Record MA(IMB) – Scheda Materiali secondari
 */
exports.getRecordMAT_IMB = function(annoRiferimentoDichiarazione, codiceFiscale, codUL,
                                     kgRottVetro, kgRottFerroAcciaio, kgRottAlluminio,
                                     kgCartaCartone, kgPlastica, kgLegno, kgAltro,
                                     callback)
{
    return getRecordMAT(annoRiferimentoDichiarazione, codiceFiscale, codUL,
                        'IMB', 0,
                        0, 0, 0, 0, 0,
                        kgRottVetro, kgRottFerroAcciaio, kgRottAlluminio, 0,
                        kgCartaCartone, kgPlastica, 0, 0, 0, 0, 0,
                        0, 0, kgLegno, 0, kgAltro,
                        callback);
}

/** Esporta la riga generica relativa al record MA – Scheda Materiali secondari
 * @param {string} annoRiferimentoDichiarazione Anno di riferimento della dichiarazione (AAAA)
 * @param {string} codiceFiscale Codice fiscale identificativo
 * @param {string} codUL Codice di identificazione univoca dell’unità locale
 * @param {string} tipoSchedaRiferimento Tipo di SCHEDA a cui la scheda Materiali si riferisce (RIF = Sezione Rifiuti, AUT = Sezione VFU – scheda Autodemolitori, FRA = Sezione VFU – scheda Frantumatori, ROT = Sezione VFU – Scheda Rottamatori, IMB = Sezione Imballaggi, TRA = Sezione RAEE – Scheda Trattamento)
 * @param {number} categoriaRAEE Categoria RAEE “Valore ammesso compreso tra 1 e 10” (da compilare solo con Tipo Scheda = “TRA”)
 * @param {decimal} kgAmmCompVerde Ammendante compostato verde
 * @param {decimal} kgAmmCompMisto Ammendante compostato misto
 * @param {decimal} kgAltriAmm Altri Ammendanti
 * @param {decimal} kgDigestato Digestato
 * @param {decimal} kgAggrRic Aggregati riciclati
 * @param {decimal} kgRottVetro Rottami di vetro
 * @param {decimal} kgRottFerroAcciaio Rottami di ferro e acciaio
 * @param {decimal} kgRottAlluminio Rottami di alluminio
 * @param {decimal} kgRottRame Rottami di rame
 * @param {decimal} kgCartaCartone Carta e cartone
 * @param {decimal} kgPlastica Plastica
 * @param {decimal} kgLegnoSughero Legno e sughero
 * @param {decimal} kgCssCombustibile CSS – combustibile
 * @param {decimal} kgTessile Tessile
 * @param {decimal} kgCuoio Cuoio
 * @param {decimal} kgRifCeramici Rifiuti Ceramici
 * @param {decimal} kgFanghi Fanghi
 * @param {decimal} kgFertilizzanti Fertilizzanti
 * @param {decimal} kgLegno Legno
 * @param {decimal} kgGomma Gomma
 * @param {decimal} kgAltro Altro
 * @param {utils.recordExportCallback} [callback] - Funzione di callback
 * @return {string} (Se non gestito callback) Record MA – Scheda Materiali secondari
 */
function getRecordMAT(annoRiferimentoDichiarazione, codiceFiscale, codUL,
                       tipoSchedaRiferimento, categoriaRAEE,
                       kgAmmCompVerde, kgAmmCompMisto, kgAltriAmm, kgDigestato, kgAggrRic,
                       kgRottVetro, kgRottFerroAcciaio, kgRottAlluminio, kgRottRame,
                       kgCartaCartone, kgPlastica, kgLegnoSughero, kgCssCombustibile, kgTessile, kgCuoio, kgRifCeramici,
                       kgFanghi, kgFertilizzanti, kgLegno, kgGomma, kgAltro,
                       callback)
{
    if(tipoSchedaRiferimento != 'TRA') categoriaRAEE = 0;
    var objAmmCompVerde = utils.getOggettoValoreUM(kgAmmCompVerde);
    var objAmmCompMisto = utils.getOggettoValoreUM(kgAmmCompMisto);
    var objAltriAmm = utils.getOggettoValoreUM(kgAltriAmm);
    var objDigestato = utils.getOggettoValoreUM(kgDigestato);
    var objAggrRic = utils.getOggettoValoreUM(kgAggrRic);
    var objRottVetro = utils.getOggettoValoreUM(kgRottVetro);
    var objRottFerroAcciaio = utils.getOggettoValoreUM(kgRottFerroAcciaio);
    var objRottAlluminio = utils.getOggettoValoreUM(kgRottAlluminio);
    var objRottRame = utils.getOggettoValoreUM(kgRottRame);
    var objCartaCartone = utils.getOggettoValoreUM(kgCartaCartone);
    var objPlastica = utils.getOggettoValoreUM(kgPlastica);
    var objLegnoSughero = utils.getOggettoValoreUM(kgLegnoSughero);
    var objCssCombustibile = utils.getOggettoValoreUM(kgCssCombustibile);
    var objTessile = utils.getOggettoValoreUM(kgTessile);
    var objCuoio = utils.getOggettoValoreUM(kgCuoio);
    var objRifCeramici = utils.getOggettoValoreUM(kgRifCeramici);
    var objFanghi = utils.getOggettoValoreUM(kgFanghi);
    var objFertilizzanti = utils.getOggettoValoreUM(kgFertilizzanti);
    var objLegno = utils.getOggettoValoreUM(kgLegno);
    var objGomma = utils.getOggettoValoreUM(kgGomma);
    var objAltro = utils.getOggettoValoreUM(kgAltro);
    var retVal = util.format(
        '%s;%s;%s;%s;%s;%s;%s;%s;%s;%s;%s;%s;%s;%s;%s;%s;%s;%s;%s;%s;%s;%s;%s;%s;%s;%s;%s;%s;%s;%s;%s;%s;%s;%s;%s;%s;%s;%s;%s;%s;%s;%s;%s;%s;%s;%s;%s;%s;',
        'MA',
        utils.formattaNumero(annoRiferimentoDichiarazione, 4),
        utils.formattaStringa(codiceFiscale, 16),
        utils.formattaStringa(codUL, 15),
        utils.formattaStringa(tipoSchedaRiferimento, 3),
        utils.formattaNumero(categoriaRAEE, 2),
        utils.formattaNumero(objAmmCompVerde.valore, 7, 3),
        utils.formattaNumero(objAmmCompVerde.um, 1),
        utils.formattaNumero(objAmmCompMisto.valore, 7, 3),
        utils.formattaNumero(objAmmCompMisto.um, 1),
        utils.formattaNumero(objAltriAmm.valore, 7, 3),
        utils.formattaNumero(objAltriAmm.um, 1),
        utils.formattaNumero(objDigestato.valore, 7, 3),
        utils.formattaNumero(objDigestato.um, 1),
        utils.formattaNumero(objAggrRic.valore, 7, 3),
        utils.formattaNumero(objAggrRic.um, 1),
        utils.formattaNumero(objRottVetro.valore, 7, 3),
        utils.formattaNumero(objRottVetro.um, 1),
        utils.formattaNumero(objRottFerroAcciaio.valore, 7, 3),
        utils.formattaNumero(objRottFerroAcciaio.um, 1),
        utils.formattaNumero(objRottAlluminio.valore, 7, 3),
        utils.formattaNumero(objRottAlluminio.um, 1),
        utils.formattaNumero(objRottRame.valore, 7, 3),
        utils.formattaNumero(objRottRame.um, 1),
        utils.formattaNumero(objCartaCartone.valore, 7, 3),
        utils.formattaNumero(objCartaCartone.um, 1),
        utils.formattaNumero(objPlastica.valore, 7, 3),
        utils.formattaNumero(objPlastica.um, 1),
        utils.formattaNumero(objLegnoSughero.valore, 7, 3),
        utils.formattaNumero(objLegnoSughero.um, 1),
        utils.formattaNumero(objCssCombustibile.valore, 7, 3),
        utils.formattaNumero(objCssCombustibile.um, 1),
        utils.formattaNumero(objTessile.valore, 7, 3),
        utils.formattaNumero(objTessile.um, 1),
        utils.formattaNumero(objCuoio.valore, 7, 3),
        utils.formattaNumero(objCuoio.um, 1),
        utils.formattaNumero(objRifCeramici.valore, 7, 3),
        utils.formattaNumero(objRifCeramici.um, 1),
        utils.formattaNumero(objFanghi.valore, 7, 3),
        utils.formattaNumero(objFanghi.um, 1),
        utils.formattaNumero(objFertilizzanti.valore, 7, 3),
        utils.formattaNumero(objFertilizzanti.um, 1),
        utils.formattaNumero(objLegno.valore, 7, 3),
        utils.formattaNumero(objLegno.um, 1),
        utils.formattaNumero(objGomma.valore, 7, 3),
        utils.formattaNumero(objGomma.um, 1),
        utils.formattaNumero(objAltro.valore, 7, 3),
        utils.formattaNumero(objAltro.um, 1)
    );
    if(callback)
        return callback(retVal.length != 342, retVal);
    else
        return retVal;
}
exports.getRecordMAT = getRecordMAT;