/**
 * Esportazione delle schede VFU MUD
 * @module vfu
 * @memberof module:mud
 * @author Denny Biasiolli
 */

var util = require('util');
var utils = require('./utils');

/** Esporta la riga relativa al record VC – Schede AUT / FRA / ROT – Autodemolitore / Frantumatore / Rottamatore
 * @param {string} annoRiferimentoDichiarazione Anno di riferimento della dichiarazione (AAAA)
 * @param {string} codiceFiscale Codice fiscale identificativo
 * @param {string} codUL Codice di identificazione univoca dell’unità locale
 * @param {string} tipoScheda Tipo di SCHEDA "AUT" / "FRA" / "ROT" – Autodemolitore / Frantumatore / Rottamatore
 * @param {decimal} kgConsTerzi Quantità di rifiuto consegnato a terzi.
 * @param {number} nRT Numero di moduli RT-VEIC allegati
 * @param {number} nDR Numero di moduli DR-VEIC allegati
 * @param {number} nTE Numero di moduli TE-VEIC allegati
 * @param {number} nMG Numero di moduli MG-VEIC allegati
 * @param {decimal} kgSmaltProprio Attività svolta in proprio, Quantità a smaltimento (Solo Scheda FRA)
 * @param {decimal} kgRecMatProprio Attività svolta in proprio, Quantità a recupero di materia (Solo Scheda FRA)
 * @param {decimal} kgReimpiegoProprio Attività svolta in proprio, Quantità a reimpiego (Solo Schede AUT e ROT)
 * @param {decimal} kgSmaltTerzi Attività svolta presso terzi, Quantità a smaltimento
 * @param {decimal} kgRecMatTerzi Attività svolta presso terzi, Quantità a recupero di Materia
 * @param {decimal} kgRegEnergTerzi Attività svolta presso terzi, Quantità a recupero di Energia
 * @param {decimal} kgGiac Rifiuto in giacenza al 31/12
 * @param {decimal} kg160104prec1980 Valorizzato solo per la Scheda AUT. Quantità di veicoli fuori uso codice “160104” ricevuti da terzi aventi anno di produzione precedente al 01/01/1980
 * @param {decimal} kg160104succ1980 Valorizzato solo per la Scheda AUT. Quantità di veicoli fuori uso codice “160104” ricevuti da terzi aventi anno di produzione successivo al 01/01/1980
 * @param {decimal} kgGiac160104 Valorizzato solo per la Scheda AUT. Quantità di rifiuto 160104 in giacenza al 31/12
 * @param {utils.recordExportCallback} [callback] - Funzione di callback
 * @return {string} (Se non gestito callback) Record VC – Schede AUT / FRA / ROT – Autodemolitore / Frantumatore / Rottamatore
 */
exports.getRecordVFU = function(annoRiferimentoDichiarazione, codiceFiscale, codUL,
                                 tipoScheda,
                                 kgConsTerzi, nRT, nDR, nTE, nMG,
                                 kgSmaltProprio, kgRecMatProprio, kgReimpiegoProprio,
                                 kgSmaltTerzi, kgRecMatTerzi, kgRegEnergTerzi,
                                 kgGiac, kg160104prec1980, kg160104succ1980, kgGiac160104,
                                 callback)
{
    var objConsTerzi = utils.getOggettoValoreUM(kgConsTerzi);
    var objSmaltProprio = (tipoScheda == 'FRA' ? utils.getOggettoValoreUM(kgSmaltProprio) : {});
    var objRecMatProprio = (tipoScheda == 'FRA' ? utils.getOggettoValoreUM(kgRecMatProprio) : {});
    var objReimpiegoProprio = (tipoScheda == 'AUT' || tipoScheda == 'ROT' ? utils.getOggettoValoreUM(kgReimpiegoProprio) : {});
    var objSmaltTerzi = utils.getOggettoValoreUM(kgSmaltTerzi);
    var objRecMatTerzi = utils.getOggettoValoreUM(kgRecMatTerzi);
    var objRegEnergTerzi = utils.getOggettoValoreUM(kgRegEnergTerzi);
    var objGiac = utils.getOggettoValoreUM(kgGiac);
    var obj160104prec1980 = (tipoScheda == 'AUT' ? utils.getOggettoValoreUM(kg160104prec1980) : {});
    var obj160104succ1980 = (tipoScheda == 'AUT' ? utils.getOggettoValoreUM(kg160104succ1980) : {});
    var objGiac160104 = (tipoScheda == 'AUT' ? utils.getOggettoValoreUM(kgGiac160104) : {});
    var retVal = util.format(
        '%s;%s;%s;%s;%s;%s;%s;%s;%s;%s;%s;%s;%s;%s;%s;%s;%s;%s;%s;%s;%s;%s;%s;%s;%s;%s;%s;%s;%s;%s;%s;%s;',
        'VC',
        utils.formattaNumero(annoRiferimentoDichiarazione, 4),
        utils.formattaStringa(codiceFiscale, 16),
        utils.formattaStringa(codUL, 15),
        utils.formattaStringa(tipoScheda, 3),
        utils.formattaNumero(objConsTerzi.valore, 7, 3),
        utils.formattaNumero(objConsTerzi.um, 1),
        utils.formattaNumero(nRT, 5),
        utils.formattaNumero(nDR, 5),
        utils.formattaNumero(nTE, 5),
        utils.formattaNumero(nMG, 5),
        Array(1+1).join('0'), // FILLER-01
        utils.formattaNumero(objSmaltProprio.valore, 7, 3),
        utils.formattaNumero(objSmaltProprio.um, 1),
        utils.formattaNumero(objRecMatProprio.valore, 7, 3),
        utils.formattaNumero(objRecMatProprio.um, 1),
        utils.formattaNumero(objReimpiegoProprio.valore, 7, 3),
        utils.formattaNumero(objReimpiegoProprio.um, 1),
        utils.formattaNumero(objSmaltTerzi.valore, 7, 3),
        utils.formattaNumero(objSmaltTerzi.um, 1),
        utils.formattaNumero(objRecMatTerzi.valore, 7, 3),
        utils.formattaNumero(objRecMatTerzi.um, 1),
        utils.formattaNumero(objRegEnergTerzi.valore, 7, 3),
        utils.formattaNumero(objRegEnergTerzi.um, 1),
        utils.formattaNumero(objGiac.valore, 7, 3),
        utils.formattaNumero(objGiac.um, 1),
        utils.formattaNumero(obj160104prec1980.valore, 7, 3),
        utils.formattaNumero(obj160104prec1980.um, 1),
        utils.formattaNumero(obj160104succ1980.valore, 7, 3),
        utils.formattaNumero(obj160104succ1980.um, 1),
        utils.formattaNumero(objGiac160104.valore, 7, 3),
        utils.formattaNumero(objGiac160104.um, 1)
    );
    if(callback)
        return callback(retVal.length != 225, retVal);
    else
        return retVal;
}


/** Esporta la riga relativa al record VD – Schede AUT / FRA / ROT – Autodemolitore / Frantumatore / Rottamatore
 * @param {string} annoRiferimentoDichiarazione Anno di riferimento della dichiarazione (AAAA)
 * @param {string} codiceFiscale Codice fiscale identificativo
 * @param {string} codUL Codice di identificazione univoca dell’unità locale
 * @param {string} tipoScheda Tipo di SCHEDA "AUT" / "FRA" / "ROT" – Autodemolitore / Frantumatore / Rottamatore
 * @param {string} tipoSezione Tipo sezione di rifermento nella scheda (AUT / FRA / ROT): “RT” = Ricevuto da Terzi / “PP” = Prodotto nell’Unità Locale
 * @param {string} codiceCER Codice del rifiuto SOLO CATALOGO EUROPEO
 * @param {decimal} kgQta Quantità dichiarata
 * @param {utils.recordExportCallback} [callback] - Funzione di callback
 * @return {string} (Se non gestito callback) Record VD – Schede AUT / FRA / ROT – Autodemolitore / Frantumatore / Rottamatore
 */
exports.getRecordVFU_Det = function(annoRiferimentoDichiarazione, codiceFiscale, codUL,
                                     tipoScheda,
                                     tipoSezione, codiceCER, kgQta,
                                     callback)
{
    var objQta = utils.getOggettoValoreUM(kgQta);
    var retVal = util.format(
        '%s;%s;%s;%s;%s;%s;%s;%s;%s;',
        'VD',
        utils.formattaNumero(annoRiferimentoDichiarazione, 4),
        utils.formattaStringa(codiceFiscale, 16),
        utils.formattaStringa(codUL, 15),
        utils.formattaStringa(tipoScheda, 3),
        utils.formattaStringa(tipoSezione, 2),
        utils.formattaStringa(codiceCER, 6),
        utils.formattaNumero(objQta.valore, 7, 3),
        utils.formattaNumero(objQta.um, 1)
    );
    if(callback)
        return callback(retVal.length != 69, retVal);
    else
        return retVal;
}


/** Esporta la riga relativa al record VE – Moduli RT-VEIC – Rifiuto ricevuto da terzi
 * @param {string} annoRiferimentoDichiarazione Anno di riferimento della dichiarazione (AAAA)
 * @param {string} codiceFiscale Codice fiscale identificativo
 * @param {string} codUL Codice di identificazione univoca dell’unità locale
 * @param {string} tipoScheda Tipo di SCHEDA (“AUT” / “FRA” / “ROT”)
 * @param {string} codiceCER Codice del rifiuto SOLO CATALOGO EUROPEO
 * @param {number} nProgressivoAllegato Numero progressivo dell'allegato
 * @param {boolean} isSoggettoPrivato Rifiuto ricevuto da privati Privati
 * @param {string} codiceFiscaleSoggetto Codice fiscale del soggetto che ha conferito il rifiuto (Valorizzare solo per Privati=NO)
 * @param {string} ragioneSociale Nome o Ragione sociale (Valorizzare solo per Privati=NO)
 * @param {number} istatProvincia ISTAT Provincia (Valorizzare solo per Privati=NO)
 * @param {number} istatComune ISTAT Comune (Valorizzare solo per Privati=NO)
 * @param {string} via Via (Valorizzare solo per Privati=NO)
 * @param {string} civico Nr. Civico (Valorizzare solo per Privati=NO)
 * @param {string} cap CAP (Valorizzare solo per Privati=NO)
 * @param {decimal} kgQta Quantità dichiarata ricevuta
 * @param {string} nazioneEstera Nome della nazione (solo se trattasi di paese Estero)
 * @param {string} codRegolamentoCEE_1013_2006 Codice Regolamento CEE 1013/2006 (2 lettere + 4 cifre)
 * @param {utils.recordExportCallback} [callback] - Funzione di callback
 * @return {string} (Se non gestito callback) Record VE – Moduli RT-VEIC – Rifiuto ricevuto da terzi
 */
exports.getRecordVFU_RT = function(annoRiferimentoDichiarazione, codiceFiscale, codUL,
                                    tipoScheda, codiceCER,
                                    nProgressivoAllegato,
                                    isSoggettoPrivato, codiceFiscaleSoggetto, ragioneSociale, istatProvincia, istatComune, via, civico, cap,
                                    kgQta, nazioneEstera, codRegolamentoCEE_1013_2006,
                                    callback)
{
    return getRecordVFU_RT_TE(annoRiferimentoDichiarazione, codiceFiscale, codUL,
                              tipoScheda, codiceCER,
                              'RT', nProgressivoAllegato,
                              isSoggettoPrivato, codiceFiscaleSoggetto, ragioneSociale, istatProvincia, istatComune, via, civico, cap,
                              kgQta, nazioneEstera, codRegolamentoCEE_1013_2006,
                              callback);
}


/** Esporta la riga relativa al record VE – Moduli TE-VEIC - Trasportatori cui è stato affidato il rifiuto
 * @param {string} annoRiferimentoDichiarazione Anno di riferimento della dichiarazione (AAAA)
 * @param {string} codiceFiscale Codice fiscale identificativo
 * @param {string} codUL Codice di identificazione univoca dell’unità locale
 * @param {string} tipoScheda Tipo di SCHEDA (“AUT” / “FRA” / “ROT”)
 * @param {string} codiceCER Codice del rifiuto SOLO CATALOGO EUROPEO
 * @param {number} nProgressivoAllegato Numero progressivo dell'allegato
 * @param {string} codiceFiscaleSoggetto Codice fiscale del soggetto che ha trasportato il rifiuto
 * @param {string} ragioneSociale Nome o Ragione sociale
 * @param {decimal} kgQta Quantità dichiarata (Ricevuta per modulo RT-VEIC, Trasportata per modulo TE-VEIC)
 * @param {utils.recordExportCallback} [callback] - Funzione di callback
 * @return {string} (Se non gestito callback) Record VE – Moduli TE-VEIC - Trasportatori cui è stato affidato il rifiuto
 */
exports.getRecordVFU_TE = function(annoRiferimentoDichiarazione, codiceFiscale, codUL,
                                    tipoScheda, codiceCER,
                                    nProgressivoAllegato,
                                    codiceFiscaleSoggetto, ragioneSociale, kgQta,
                                    callback)
{
    return getRecordVFU_RT_TE(annoRiferimentoDichiarazione, codiceFiscale, codUL,
                              tipoScheda, codiceCER,
                              'TE', nProgressivoAllegato,
                              false, codiceFiscaleSoggetto, ragioneSociale, 0, 0, '', '', '',
                              kgQta, '', '',
                              callback);
}


/** Esporta la riga generica relativa al record VE – Moduli RT-VEIC / TE-VEIC – Allegati alle Schede AUT / FRA / ROT
 * @param {string} annoRiferimentoDichiarazione Anno di riferimento della dichiarazione (AAAA)
 * @param {string} codiceFiscale Codice fiscale identificativo
 * @param {string} codUL Codice di identificazione univoca dell’unità locale
 * @param {string} tipoScheda Tipo di SCHEDA (“AUT” / “FRA” / “ROT”)
 * @param {string} codiceCER Codice del rifiuto SOLO CATALOGO EUROPEO
 * @param {string} tipoAllegato Tipo allegato ( RT / TE )
 * @param {number} nProgressivoAllegato Numero progressivo dell'allegato “RT-VEIC” / “TE-VEIC”
 * @param {boolean} isSoggettoPrivato Rifiuto ricevuto da privati Privati (Valorizzare solo per modulo RT-VEIC)
 * @param {string} codiceFiscaleSoggetto Codice fiscale del soggetto che ha conferito (RT) / trasportato (TE) il rifiuto (Valorizzare solo per Privati=NO)
 * @param {string} ragioneSociale Nome o Ragione sociale (Valorizzare solo per Privati=NO)
 * @param {number} istatProvincia ISTAT Provincia (Valorizzare solo per modulo RT-VEIC e Privati=NO)
 * @param {number} istatComune ISTAT Comune (Valorizzare solo per modulo RT-VEIC e Privati=NO)
 * @param {string} via Via (Valorizzare solo per modulo RT-VEIC e Privati=NO)
 * @param {string} civico Nr. Civico (Valorizzare solo per modulo RT-VEIC e Privati=NO)
 * @param {string} cap CAP (Valorizzare solo per modulo RT-VEIC e Privati=NO)
 * @param {decimal} kgQta Quantità dichiarata (Ricevuta per modulo RT-VEIC, Trasportata per modulo TE-VEIC)
 * @param {string} nazioneEstera Nome della nazione (solo se trattasi di paese Estero) (Valorizzare solo per modulo RT-VEIC)
 * @param {string} codRegolamentoCEE_1013_2006 Codice Regolamento CEE 1013/2006 (2 lettere + 4 cifre) (Valorizzare solo per modulo RT-VEIC)
 * @param {utils.recordExportCallback} [callback] - Funzione di callback
 * @return {string} (Se non gestito callback) Record VE – Moduli RT-VEIC / TE-VEIC – Allegati alle Schede AUT / FRA / ROT
 */
function getRecordVFU_RT_TE(annoRiferimentoDichiarazione, codiceFiscale, codUL,
                             tipoScheda, codiceCER,
                             tipoAllegato, nProgressivoAllegato,
                             isSoggettoPrivato, codiceFiscaleSoggetto, ragioneSociale, istatProvincia, istatComune, via, civico, cap,
                             kgQta, nazioneEstera, codRegolamentoCEE_1013_2006,
                             callback)
{
    if(tipoAllegato != 'RT') { nazioneEstera = '';  codRegolamentoCEE_1013_2006 = '';  isSoggettoPrivato = false; }
    if(tipoAllegato != 'RT' || isSoggettoPrivato) { codiceFiscaleSoggetto = '';  ragioneSociale = '';  istatProvincia = 0;  istatComune = 0;  via = '';  civico = ''; cap = ''; }
    var objQta = utils.getOggettoValoreUM(kgQta);
    if(typeof(nazioneEstera) == 'string') nazioneEstera = nazioneEstera.toString().toUpperCase();
    if(nazioneEstera == 'IT' || nazioneEstera == 'ITALIA' || nazioneEstera == 'ITALY') nazioneEstera = null;
    var retVal = util.format(
        '%s;%s;%s;%s;%s;%s;%s;%s;%s;%s;%s;%s;%s;%s;%s;%s;%s;%s;%s;%s;',
        'VE',
        utils.formattaNumero(annoRiferimentoDichiarazione, 4),
        utils.formattaStringa(codiceFiscale, 16),
        utils.formattaStringa(codUL, 15),
        utils.formattaStringa(tipoScheda, 3),
        utils.formattaStringa(codiceCER, 6),
        utils.formattaStringa(tipoAllegato, 2),
        utils.formattaNumero(nProgressivoAllegato, 5),
        utils.formattaBoolean(isSoggettoPrivato),
        utils.formattaStringa(codiceFiscaleSoggetto, 16),
        utils.formattaStringa(ragioneSociale, 60),
        utils.formattaNumero(istatProvincia, 3),
        utils.formattaNumero(istatComune, 3),
        utils.formattaStringa(via, 30),
        utils.formattaStringa(civico, 6),
        utils.formattaStringa(cap, 5),
        utils.formattaNumero(objQta.valore, 7, 3),
        utils.formattaNumero(objQta.um, 1),
        utils.formattaStringa(nazioneEstera, 20),
        utils.formattaStringa(codRegolamentoCEE_1013_2006, 6)
    );
    if(callback)
        return callback(retVal.length != 235, retVal);
    else
        return retVal;
}


/** Esporta la riga relativa al record VF – Modulo DR-VEIC – Rifiuto conferiti a terzi
 * @param {string} annoRiferimentoDichiarazione Anno di riferimento della dichiarazione (AAAA)
 * @param {string} codiceFiscale Codice fiscale identificativo
 * @param {string} codUL Codice di identificazione univoca dell’unità locale
 * @param {string} tipoScheda Tipo di SCHEDA (“AUT” / “FRA” / “ROT”)
 * @param {string} codiceCER Codice del rifiuto SOLO CATALOGO EUROPEO
 * @param {number} nProgressivoAllegato Numero progressivo dell'allegato “DR-VEIC”
 * @param {string} codiceFiscaleSoggetto Codice fiscale del soggetto destinatario
 * @param {string} ragioneSociale Nome o Ragione sociale
 * @param {number} istatProvincia ISTAT Provincia
 * @param {number} istatComune ISTAT Comune
 * @param {string} via Via
 * @param {string} civico Nr. Civico
 * @param {string} cap CAP
 * @param {decimal} kgQta Quantità totale conferita nell'anno
 * @param {string} nazioneEstera Nome della nazione (solo se trattasi di paese Estero)
 * @param {string} codRegolamentoCEE_1013_2006 Codice Regolamento CEE 1013/2006 (2 lettere + 4 cifre)
 * @param {} kg01 R/D1) Quantità conferita nell’anno
 * @param {} tipo01 Destinazione del rifiuto “R” = Recupero / “D” = Smaltimento
 * @param {} kg02 R/D2) Quantità conferita nell’anno
 * @param {} tipo02 Destinazione del rifiuto “R” = Recupero / “D” = Smaltimento
 * @param {} kg03 R/D3) Quantità conferita nell’anno
 * @param {} tipo03 Destinazione del rifiuto “R” = Recupero / “D” = Smaltimento
 * @param {} kg04 R/D4) Quantità conferita nell’anno
 * @param {} tipo04 Destinazione del rifiuto “R” = Recupero / “D” = Smaltimento
 * @param {} kg05 R/D5) Quantità conferita nell’anno
 * @param {} tipo05 Destinazione del rifiuto “R” = Recupero / “D” = Smaltimento
 * @param {} kg06 R/D6) Quantità conferita nell’anno
 * @param {} tipo06 Destinazione del rifiuto “R” = Recupero / “D” = Smaltimento
 * @param {} kg07 R/D7) Quantità conferita nell’anno
 * @param {} tipo07 Destinazione del rifiuto “R” = Recupero / “D” = Smaltimento
 * @param {} kg08 R/D8) Quantità conferita nell’anno
 * @param {} tipo08 Destinazione del rifiuto “R” = Recupero / “D” = Smaltimento
 * @param {} kg09 R/D9) Quantità conferita nell’anno
 * @param {} tipo09 Destinazione del rifiuto “R” = Recupero / “D” = Smaltimento
 * @param {} kg10 R/D10) Quantità conferita nell’anno
 * @param {} tipo10 Destinazione del rifiuto “R” = Recupero / “D” = Smaltimento
 * @param {} kg11 R/D11) Quantità conferita nell’anno
 * @param {} tipo11 Destinazione del rifiuto “R” = Recupero / “D” = Smaltimento
 * @param {} kg12 R/D12) Quantità conferita nell’anno
 * @param {} tipo12 Destinazione del rifiuto “R” = Recupero / “D” = Smaltimento
 * @param {} kg13 R/D13) Quantità conferita nell’anno
 * @param {} tipo13 Destinazione del rifiuto “R” = Recupero / “D” = Smaltimento
 * @param {} kgD14 D14) Quantità conferita nell’anno
 * @param {} kgD15 D15) Quantità conferita nell’anno
 * @param {utils.recordExportCallback} [callback] - Funzione di callback
 * @return {string} (Se non gestito callback) Record VF – Modulo DR-VEIC – Rifiuto conferiti a terzi
 */
exports.getRecordVFU_DR = function(annoRiferimentoDichiarazione, codiceFiscale, codUL,
                                    tipoScheda,
                                    codiceCER,
                                    nProgressivoAllegato,
                                    codiceFiscaleSoggetto, ragioneSociale, istatProvincia, istatComune, via, civico, cap,
                                    kgQta, nazioneEstera, codRegolamentoCEE_1013_2006,
                                    kg01, tipo01, kg02, tipo02, kg03, tipo03, kg04, tipo04, kg05, tipo05, kg06, tipo06, kg07, tipo07, kg08, tipo08, kg09, tipo09, kg10, tipo10, kg11, tipo11, kg12, tipo12, kg13, tipo13, kgD14, kgD15,
                                    callback)
{
    var objQta = utils.getOggettoValoreUM(kgQta);
    if(typeof(nazioneEstera) == 'string') nazioneEstera = nazioneEstera.toString().toUpperCase();
    if(nazioneEstera == 'IT' || nazioneEstera == 'ITALIA' || nazioneEstera == 'ITALY') nazioneEstera = null;
    var obj01 = utils.getOggettoValoreUM(kg01);
    var obj02 = utils.getOggettoValoreUM(kg02);
    var obj03 = utils.getOggettoValoreUM(kg03);
    var obj04 = utils.getOggettoValoreUM(kg04);
    var obj05 = utils.getOggettoValoreUM(kg05);
    var obj06 = utils.getOggettoValoreUM(kg06);
    var obj07 = utils.getOggettoValoreUM(kg07);
    var obj08 = utils.getOggettoValoreUM(kg08);
    var obj09 = utils.getOggettoValoreUM(kg09);
    var obj10 = utils.getOggettoValoreUM(kg10);
    var obj11 = utils.getOggettoValoreUM(kg11);
    var obj12 = utils.getOggettoValoreUM(kg12);
    var obj13 = utils.getOggettoValoreUM(kg13);
    var objD14 = utils.getOggettoValoreUM(kgD14);
    var objD15 = utils.getOggettoValoreUM(kgD15);
    var retVal = util.format(
        '%s;%s;%s;%s;%s;%s;%s;%s;%s;%s;%s;%s;%s;%s;%s;%s;%s;%s;%s;%s;%s;%s;%s;%s;%s;%s;%s;%s;%s;%s;%s;%s;%s;%s;%s;%s;%s;%s;%s;%s;%s;%s;%s;%s;%s;%s;%s;%s;%s;%s;%s;%s;%s;%s;%s;%s;%s;%s;%s;%s;%s;',
        'VF',
        utils.formattaNumero(annoRiferimentoDichiarazione, 4),
        utils.formattaStringa(codiceFiscale, 16),
        utils.formattaStringa(codUL, 15),
        utils.formattaStringa(tipoScheda, 3),
        utils.formattaStringa(codiceCER, 6),
        utils.formattaNumero(nProgressivoAllegato, 5),
        utils.formattaStringa(codiceFiscaleSoggetto, 16),
        utils.formattaStringa(ragioneSociale, 60),
        utils.formattaNumero(istatProvincia, 3),
        utils.formattaNumero(istatComune, 3),
        utils.formattaStringa(via, 30),
        utils.formattaStringa(civico, 6),
        utils.formattaStringa(cap, 5),
        utils.formattaNumero(objQta.valore, 7, 3),
        utils.formattaNumero(objQta.um, 1),
        utils.formattaStringa(nazioneEstera, 20),
        utils.formattaStringa(codRegolamentoCEE_1013_2006, 6),
        utils.formattaNumero(obj01.valore, 7, 3),
        utils.formattaNumero(obj01.um, 1),
        utils.formattaStringa(tipo01, 1),
        utils.formattaNumero(obj02.valore, 7, 3),
        utils.formattaNumero(obj02.um, 1),
        utils.formattaStringa(tipo02, 1),
        utils.formattaNumero(obj03.valore, 7, 3),
        utils.formattaNumero(obj03.um, 1),
        utils.formattaStringa(tipo03, 1),
        utils.formattaNumero(obj04.valore, 7, 3),
        utils.formattaNumero(obj04.um, 1),
        utils.formattaStringa(tipo04, 1),
        utils.formattaNumero(obj05.valore, 7, 3),
        utils.formattaNumero(obj05.um, 1),
        utils.formattaStringa(tipo05, 1),
        utils.formattaNumero(obj06.valore, 7, 3),
        utils.formattaNumero(obj06.um, 1),
        utils.formattaStringa(tipo06, 1),
        utils.formattaNumero(obj07.valore, 7, 3),
        utils.formattaNumero(obj07.um, 1),
        utils.formattaStringa(tipo07, 1),
        utils.formattaNumero(obj08.valore, 7, 3),
        utils.formattaNumero(obj08.um, 1),
        utils.formattaStringa(tipo08, 1),
        utils.formattaNumero(obj09.valore, 7, 3),
        utils.formattaNumero(obj09.um, 1),
        utils.formattaStringa(tipo09, 1),
        utils.formattaNumero(obj10.valore, 7, 3),
        utils.formattaNumero(obj10.um, 1),
        utils.formattaStringa(tipo10, 1),
        utils.formattaNumero(obj11.valore, 7, 3),
        utils.formattaNumero(obj11.um, 1),
        utils.formattaStringa(tipo11, 1),
        utils.formattaNumero(obj12.valore, 7, 3),
        utils.formattaNumero(obj12.um, 1),
        utils.formattaStringa(tipo12, 1),
        utils.formattaNumero(obj13.valore, 7, 3),
        utils.formattaNumero(obj13.um, 1),
        utils.formattaStringa(tipo13, 1),
        utils.formattaNumero(objD14.valore, 7, 3),
        utils.formattaNumero(objD14.um, 1),
        utils.formattaNumero(objD15.valore, 7, 3),
        utils.formattaNumero(objD15.um, 1)
    );
    if(callback)
        return callback(retVal.length != 466, retVal);
    else
        return retVal;
}


/** Esporta le righe relative ai record VG / VH – Moduli MG-VEIC – Gestione dei rifiuti, Operazioni di Smaltimento / Recupero
 * @param {string} annoRiferimentoDichiarazione Anno di riferimento della dichiarazione (AAAA)
 * @param {string} codiceFiscale Codice fiscale identificativo
 * @param {string} codUL Codice di identificazione univoca dell’unità locale
 * @param {string} tipoScheda Tipo di SCHEDA (“AUT” / “FRA” / “ROT”)
 * @param {string} codiceCER Codice del rifiuto SOLO CATALOGO EUROPEO
 * @param {number} nProgressivoAllegato Numero progressivo dell'allegato “MG-VEIC”
 * @param {boolean} opSmaltimentoSuOrdinanzaSind Op. di Smaltimento su Ordinanza Sind. Art.191 D.Lgs.N.152/2006
 * @param {number} classDiscarica Classificazione della discarica: 0 = ND, 6 = Rifiuti pericolosi, 7 = Rifiuti non pericolosi, 8 = Rifiuti inerti
 * @param {decimal} kgDepositatiInDiscarica Quantità depositata in discarica nell’anno
 * @param {decimal} kgD02 D2 - Tratt. In ambiente terrestre
 * @param {decimal} kgD03 D3 - Iniezioni in profondità
 * @param {decimal} kgD04 D4 – Lagunaggio
 * @param {decimal} kgD06 D6 – Scarico in amb.idrico esclusa l’imm.
 * @param {decimal} kgD07 D7 – Immersione
 * @param {decimal} kgD08 D8 – Tratt.biologico non spec.altrove
 * @param {decimal} kgD09 D9 – Tratt.Chim-Fis. Non spec.altrove
 * @param {decimal} kgD10 D10 – Incenerimento a terra
 * @param {decimal} kgD11 D11 – Incenerimento in mare
 * @param {decimal} kgD13 D13 – Raggr.prelim. a operaz. da D1 a D12
 * @param {decimal} kgD14 D14 – Ricond.prelim. a oper. da D1 a D13
 * @param {decimal} kgD15 D15 – Deposito preliminare alle operazioni da D1 a D14
 * @param {decimal} kgR01 R1 – Utilizzo come combustibile
 * @param {decimal} kgR02 R2 – Rig./Recupero di solventi
 * @param {decimal} kgR03 R3 – Ric./Recupero di sost.org. non solv.
 * @param {decimal} kgR04 R4 – Ric./Recupero dei metalli o comp.met.
 * @param {decimal} kgR05 R5 – Ric./Recupero di sostanze inorg.
 * @param {decimal} kgR06 R6 – Rigen.di acidi e basi
 * @param {decimal} kgR07 R7 – Recupero captatori di inquinanti
 * @param {decimal} kgR08 R8 – Recupero prodotti da catalizzatori
 * @param {decimal} kgR09 R9 – Rig.e altri reim.degli oli
 * @param {decimal} kgR10 R10 – Spandimento sul suolo agricolo
 * @param {decimal} kgR11 R11 – Utilizzo rifiuti da oper.da R1 a R10
 * @param {decimal} kgR12 R12 – Scamb.rifiuti per oper.da R1 a R10
 * @param {decimal} kgR13 R13 – Messa in riserva rifiuti per operazioni da R1 a R12
 * @param {decimal} kgGiacDaAvviareRec Rifiuto in giacenza al 31/12 da avviare a recupero
 * @param {decimal} kgGiacDaAvviareSmalt Rifiuto in giacenza al 31/12 da avviare a smaltimento
 * @param {utils.recordExportCallback} [callback] - Funzione di callback
 * @return {string} (Se non gestito callback) Record VG / VH – Moduli MG-VEIC – Gestione dei rifiuti, Operazioni di Smaltimento / Recupero
 */
exports.getRecordVFU_MG = function(annoRiferimentoDichiarazione, codiceFiscale, codUL,
                                    tipoScheda,
                                    codiceCER,
                                    nProgressivoAllegato, opSmaltimentoSuOrdinanzaSind,
                                    classDiscarica, kgDepositatiInDiscarica,
                                    kgD02, kgD03, kgD04, kgD06, kgD07, kgD08, kgD09, kgD10, kgD11, kgD13, kgD14, kgD15,
                                    kgR01, kgR02, kgR03, kgR04, kgR05, kgR06, kgR07, kgR08, kgR09, kgR10, kgR11, kgR12, kgR13,
                                    kgGiacDaAvviareRec, kgGiacDaAvviareSmalt,
                                    callback)
{
    if(codiceCER && typeof(codIstatAttivita) === 'string') codiceCER = codiceCER.replace(/\D+/g, '');
    var objD02 = utils.getOggettoValoreUM(kgD02);
    var objD03 = utils.getOggettoValoreUM(kgD03);
    var objD04 = utils.getOggettoValoreUM(kgD04);
    var objD06 = utils.getOggettoValoreUM(kgD06);
    var objD07 = utils.getOggettoValoreUM(kgD07);
    var objD08 = utils.getOggettoValoreUM(kgD08);
    var objD09 = utils.getOggettoValoreUM(kgD09);
    var objD10 = utils.getOggettoValoreUM(kgD10);
    var objD11 = utils.getOggettoValoreUM(kgD11);
    var objD13 = utils.getOggettoValoreUM(kgD13);
    var objD14 = utils.getOggettoValoreUM(kgD14);
    var objD15 = utils.getOggettoValoreUM(kgD15);
    var objR01 = utils.getOggettoValoreUM(kgR01);
    var objR02 = utils.getOggettoValoreUM(kgR02);
    var objR03 = utils.getOggettoValoreUM(kgR03);
    var objR04 = utils.getOggettoValoreUM(kgR04);
    var objR05 = utils.getOggettoValoreUM(kgR05);
    var objR06 = utils.getOggettoValoreUM(kgR06);
    var objR07 = utils.getOggettoValoreUM(kgR07);
    var objR08 = utils.getOggettoValoreUM(kgR08);
    var objR09 = utils.getOggettoValoreUM(kgR09);
    var objR10 = utils.getOggettoValoreUM(kgR10);
    var objR11 = utils.getOggettoValoreUM(kgR11);
    var objR12 = utils.getOggettoValoreUM(kgR12);
    var objR13 = utils.getOggettoValoreUM(kgR13);
    var objGiacDaAvviareRec = utils.getOggettoValoreUM(kgGiacDaAvviareRec);
    var objGiacDaAvviareSmalt = utils.getOggettoValoreUM(kgGiacDaAvviareSmalt);
    var retVal = util.format(
        '%s;%s;%s;%s;%s;%s;%s;%s;%s;%s;%s;%s;%s;%s;%s;%s;%s;%s;%s;%s;%s;%s;%s;%s;%s;%s;%s;%s;%s;%s;%s;%s;%s;%s;\r\n'+
        '%s;%s;%s;%s;%s;%s;%s;%s;%s;%s;%s;%s;%s;%s;%s;%s;%s;%s;%s;%s;%s;%s;%s;%s;%s;%s;%s;%s;%s;%s;%s;%s;%s;%s;%s;%s;%s;',
        'VG',
        utils.formattaNumero(annoRiferimentoDichiarazione, 4),
        utils.formattaStringa(codiceFiscale, 16),
        utils.formattaStringa(codUL, 15),
        utils.formattaStringa(tipoScheda, 3),
        utils.formattaStringa(codiceCER, 6),
        utils.formattaNumero(nProgressivoAllegato, 5),
        utils.formattaBoolean(opSmaltimentoSuOrdinanzaSind),
        utils.formattaNumero(classDiscarica, 1),
        utils.formattaNumero(kgDepositatiInDiscarica / 1000, 7, 3), // Quantità depositata in discarica nell’anno in tonnellate
        utils.formattaNumero(objD02.valore, 7, 3),
        utils.formattaNumero(objD02.um, 1),
        utils.formattaNumero(objD03.valore, 7, 3),
        utils.formattaNumero(objD03.um, 1),
        utils.formattaNumero(objD04.valore, 7, 3),
        utils.formattaNumero(objD04.um, 1),
        utils.formattaNumero(objD06.valore, 7, 3),
        utils.formattaNumero(objD06.um, 1),
        utils.formattaNumero(objD07.valore, 7, 3),
        utils.formattaNumero(objD07.um, 1),
        utils.formattaNumero(objD08.valore, 7, 3),
        utils.formattaNumero(objD08.um, 1),
        utils.formattaNumero(objD09.valore, 7, 3),
        utils.formattaNumero(objD09.um, 1),
        utils.formattaNumero(objD10.valore, 7, 3),
        utils.formattaNumero(objD10.um, 1),
        utils.formattaNumero(objD11.valore, 7, 3),
        utils.formattaNumero(objD11.um, 1),
        utils.formattaNumero(objD13.valore, 7, 3),
        utils.formattaNumero(objD13.um, 1),
        utils.formattaNumero(objD14.valore, 7, 3),
        utils.formattaNumero(objD14.um, 1),
        utils.formattaNumero(objD15.valore, 7, 3),
        utils.formattaNumero(objD15.um, 1),
        'VH',
        utils.formattaNumero(annoRiferimentoDichiarazione, 4),
        utils.formattaStringa(codiceFiscale, 16),
        utils.formattaStringa(codUL, 15),
        utils.formattaStringa(tipoScheda, 3),
        utils.formattaStringa(codiceCER, 6),
        utils.formattaNumero(nProgressivoAllegato, 5),
        utils.formattaNumero(objR01.valore, 7, 3),
        utils.formattaNumero(objR01.um, 1),
        utils.formattaNumero(objR02.valore, 7, 3),
        utils.formattaNumero(objR02.um, 1),
        utils.formattaNumero(objR03.valore, 7, 3),
        utils.formattaNumero(objR03.um, 1),
        utils.formattaNumero(objR04.valore, 7, 3),
        utils.formattaNumero(objR04.um, 1),
        utils.formattaNumero(objR05.valore, 7, 3),
        utils.formattaNumero(objR05.um, 1),
        utils.formattaNumero(objR06.valore, 7, 3),
        utils.formattaNumero(objR06.um, 1),
        utils.formattaNumero(objR07.valore, 7, 3),
        utils.formattaNumero(objR07.um, 1),
        utils.formattaNumero(objR08.valore, 7, 3),
        utils.formattaNumero(objR08.um, 1),
        utils.formattaNumero(objR09.valore, 7, 3),
        utils.formattaNumero(objR09.um, 1),
        utils.formattaNumero(objR10.valore, 7, 3),
        utils.formattaNumero(objR10.um, 1),
        utils.formattaNumero(objR11.valore, 7, 3),
        utils.formattaNumero(objR11.um, 1),
        utils.formattaNumero(objR12.valore, 7, 3),
        utils.formattaNumero(objR12.um, 1),
        utils.formattaNumero(objR13.valore, 7, 3),
        utils.formattaNumero(objR13.um, 1),
        utils.formattaNumero(objGiacDaAvviareRec.valore, 7, 3),
        utils.formattaNumero(objGiacDaAvviareRec.um, 1),
        utils.formattaNumero(objGiacDaAvviareSmalt.valore, 7, 3),
        utils.formattaNumero(objGiacDaAvviareSmalt.um, 1)
    );
    if(callback)
        return callback(retVal.length != 242 + 2 + 268, retVal);
    else
        return retVal;
}
