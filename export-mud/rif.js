/**
 * Esportazione delle schede RIF MUD
 * @module rif
 * @memberof module:mud
 * @author Denny Biasiolli
 */

var util = require('util');
var utils = require('./utils');

/** Esporta la riga relativa al record BA – Scheda RIF – Comunicazione Rifiuti
 * @param {string} annoRiferimentoDichiarazione Anno di riferimento della dichiarazione (AAAA)
 * @param {string} codiceFiscale Codice fiscale identificativo
 * @param {string} codUL Codice di identificazione univoca dell’unità locale
 * @param {number} nProgressivoRIF Numero d’ordine progressivo di scheda RIF
 * @param {string} codiceCER Codice del rifiuto SOLO CATALOGO EUROPEO
 * @param {boolean} isSolidoPulverulento Stato fisico: Solido polverulento
 * @param {boolean} isSolidoNonPulverulento Stato fisico: Solido NON polverulento
 * @param {boolean} isFangosoPalabile Stato fisico: Fangoso palabile
 * @param {boolean} isLiquido Stato fisico: Liquido
 * @param {boolean} isAeriforme Stato fisico: Aeriforme
 * @param {boolean} isVischiosoSciropposo Stato fisico: Vischioso e Sciropposo
 * @param {boolean} isAltro Stato fisico: Altro
 * @param {decimal} kgProdottoUL Rifiuto prodotto nell’unità locale
 * @param {decimal} kgRicTerzi Rifiuto Ricevuto da terzi
 * @param {number} nRT Numero di moduli (record) RT allegati
 * @param {decimal} kgProdFuoriUL Rifiuto Prodotto fuori dell’unità locale
 * @param {number} nRE Numero di moduli (record) RE allegati
 * @param {decimal} kgTraspDichiarante Rifiuto trasportato dal dichiarante
 * @param {number} nTE Numero di moduli (record) TE allegati
 * @param {decimal} kgConsTerziRecSmalt Rifiuto consegnato a terzi per recu. / smal.
 * @param {number} nDR Numero di moduli (record) DR allegati
 * @param {decimal} kgGiacDaAvviareRec Rifiuto in giacenza presso il produttore al 31/12 da avviare a recupero
 * @param {decimal} kgGiacDaAvviareSmalt Rifiuto in giacenza presso il produttore al 31/12 da avviare a smaltimento
 * @param {decimal} kgAvviatoRec Quantità complessiva avviata a recupero
 * @param {decimal} kgAvviatoSmalt Quantità complessiva avviata a smaltimento
 * @param {utils.recordExportCallback} [callback] - Funzione di callback
 * @return {string} (Se non gestito callback) Record BA – Scheda RIF – Comunicazione Rifiuti
 */
exports.getRecordRIF = function(annoRiferimentoDichiarazione, codiceFiscale, codUL,
                                 nProgressivoRIF, codiceCER,
                                 isSolidoPulverulento, isSolidoNonPulverulento, isFangosoPalabile, isLiquido, isAeriforme, isVischiosoSciropposo, isAltro,
                                 kgProdottoUL, kgRicTerzi, nRT, kgProdFuoriUL, nRE, kgTraspDichiarante, nTE, kgConsTerziRecSmalt, nDR,
                                 kgGiacDaAvviareRec, kgGiacDaAvviareSmalt, kgAvviatoRec, kgAvviatoSmalt,
                                 callback)
{
    if(codiceCER && typeof(codiceCER) === 'string') codiceCER = codiceCER.replace(/\D+/g, '');
    var objProdottoUL = utils.getOggettoValoreUM(kgProdottoUL);
    var objRicTerzi = utils.getOggettoValoreUM(kgRicTerzi);
    var objProdFuoriUL = utils.getOggettoValoreUM(kgProdFuoriUL);
    var objTraspDichiarante = utils.getOggettoValoreUM(kgTraspDichiarante);
    var objConsTerziRecSmalt = utils.getOggettoValoreUM(kgConsTerziRecSmalt);
    var objGiacDaAvviareRec = utils.getOggettoValoreUM(kgGiacDaAvviareRec);
    var objGiacDaAvviareSmalt = utils.getOggettoValoreUM(kgGiacDaAvviareSmalt);
    var objAvviatoRec = utils.getOggettoValoreUM(kgAvviatoRec);
    var objAvviatoSmalt = utils.getOggettoValoreUM(kgAvviatoSmalt);
    var retVal = util.format(
        '%s;%s;%s;%s;%s;%s;%s;%s;%s;%s;%s;%s;%s;%s;%s;%s;%s;%s;%s;%s;%s;%s;%s;%s;%s;%s;%s;%s;%s;%s;%s;%s;%s;%s;%s;',
        'BA',
        utils.formattaNumero(annoRiferimentoDichiarazione, 4),
        utils.formattaStringa(codiceFiscale, 16),
        utils.formattaStringa(codUL, 15),
        utils.formattaNumero(nProgressivoRIF, 4),
        utils.formattaStringa(codiceCER, 6),
        utils.formattaBoolean(isSolidoPulverulento),
        utils.formattaBoolean(isSolidoNonPulverulento),
        utils.formattaBoolean(isFangosoPalabile),
        utils.formattaBoolean(isLiquido),
        utils.formattaBoolean(isAeriforme),
        utils.formattaBoolean(isVischiosoSciropposo),
        utils.formattaBoolean(isAltro),
        utils.formattaNumero(objProdottoUL.valore, 7, 3),
        utils.formattaNumero(objProdottoUL.um, 1),
        utils.formattaNumero(objRicTerzi.valore, 7, 3),
        utils.formattaNumero(objRicTerzi.um, 1),
        utils.formattaNumero(nRT, 5),
        utils.formattaNumero(objProdFuoriUL.valore, 7, 3),
        utils.formattaNumero(objProdFuoriUL.um, 1),
        utils.formattaNumero(nRE, 5),
        utils.formattaNumero(objTraspDichiarante.valore, 7, 3),
        utils.formattaNumero(objTraspDichiarante.um, 1),
        utils.formattaNumero(nTE, 5),
        utils.formattaNumero(objConsTerziRecSmalt.valore, 7, 3),
        utils.formattaNumero(objConsTerziRecSmalt.um, 1),
        utils.formattaNumero(nDR, 5),
        utils.formattaNumero(objGiacDaAvviareRec.valore, 7, 3),
        utils.formattaNumero(objGiacDaAvviareRec.um, 1),
        utils.formattaNumero(objGiacDaAvviareSmalt.valore, 7, 3),
        utils.formattaNumero(objGiacDaAvviareSmalt.um, 1),
        utils.formattaNumero(objAvviatoRec.valore, 7, 3),
        utils.formattaNumero(objAvviatoRec.um, 1),
        utils.formattaNumero(objAvviatoSmalt.valore, 7, 3),
        utils.formattaNumero(objAvviatoSmalt.um, 1)
    );
    if(callback)
        return callback(retVal.length != 217, retVal);
    else
        return retVal;
}

/** Esporta la riga relativa al record BB – Modulo RT - Rifiuti ricevuti da terzi.
 * @param {string} annoRiferimentoDichiarazione Anno di riferimento della dichiarazione (AAAA)
 * @param {string} codiceFiscale Codice fiscale identificativo
 * @param {string} codUL Codice di identificazione univoca dell’unità locale
 * @param {number} nProgressivoRIF Numero d’ordine progressivo di scheda RIF
 * @param {string} codiceCER Codice del rifiuto SOLO CATALOGO EUROPEO
 * @param {number} nProgressivoAllegato Numero progressivo dell'allegato
 * @param {string} codiceFiscaleSoggetto Codice fiscale del soggetto che ha conferito (RT) (Per i moduli RT valorizzare solo se Ricevuto da Privati = NO)
 * @param {string} ragioneSociale Nome o Ragione sociale (Per i moduli RT valorizzare solo se Ricevuto da Privati = NO)
 * @param {number} istatProvincia ISTAT Provincia
 * @param {number} istatComune ISTAT Comune
 * @param {string} via Via (Valorizzare solo per modulo DR e RT se Ricevuto da Privati = NO)
 * @param {string} civico Nr. Civico (Valorizzare solo per modulo DR e RT se Ricevuto da Privati = NO)
 * @param {string} cap CAP (Valorizzare solo per modulo DR e RT se Ricevuto da Privati = NO)
 * @param {decimal} kgQtaDichiarata Quantità dichiarata
 * @param {string} nazioneEstera Nome della nazione (solo se trattasi di paese Estero)
 * @param {string} codRegolamentoCEE_1013_2006 Codice Regolamento CEE 1013/2006 (2 lettere + 4 cifre)
 * @param {boolean} isRicevutoPrivati Ricevuto da Privati
 * @param {utils.recordExportCallback} [callback] - Funzione di callback
 * @return {string} (Se non gestito callback) Record BB – Modulo RT - Rifiuti ricevuti da terzi.
 */
exports.getRecordRIF_RT = function(annoRiferimentoDichiarazione, codiceFiscale, codUL,
                                    nProgressivoRIF, codiceCER,
                                    nProgressivoAllegato,
                                    codiceFiscaleSoggetto, ragioneSociale, istatProvincia, istatComune, via, civico, cap, kgQtaDichiarata,
                                    nazioneEstera, codRegolamentoCEE_1013_2006,
                                    isRicevutoPrivati,
                                    callback)
{
    return getRecordRIF_RT_DR_TE(annoRiferimentoDichiarazione, codiceFiscale, codUL,
                                 nProgressivoRIF, codiceCER,
                                 'RT', nProgressivoAllegato,
                                 codiceFiscaleSoggetto, ragioneSociale, istatProvincia, istatComune, via, civico, cap, kgQtaDichiarata,
                                 nazioneEstera, codRegolamentoCEE_1013_2006,
                                 isRicevutoPrivati, null, null, null,
                                 callback);
}

/** Esporta la riga relativa al record BB – Modulo DR - Rifiuti conferiti a terzi.
 * @param {string} annoRiferimentoDichiarazione Anno di riferimento della dichiarazione (AAAA)
 * @param {string} codiceFiscale Codice fiscale identificativo
 * @param {string} codUL Codice di identificazione univoca dell’unità locale
 * @param {number} nProgressivoRIF Numero d’ordine progressivo di scheda RIF
 * @param {string} codiceCER Codice del rifiuto SOLO CATALOGO EUROPEO
 * @param {number} nProgressivoAllegato Numero progressivo dell'allegato
 * @param {string} codiceFiscaleSoggetto Codice fiscale del soggetto che ha ricevuto (DR)
 * @param {string} ragioneSociale Nome o Ragione sociale
 * @param {number} istatProvincia ISTAT Provincia
 * @param {number} istatComune ISTAT Comune
 * @param {string} via Via
 * @param {string} civico Nr. Civico
 * @param {string} cap CAP
 * @param {decimal} kgQtaDichiarata Quantità dichiarata
 * @param {string} nazioneEstera Nome della nazione (solo se trattasi di paese Estero)
 * @param {string} codRegolamentoCEE_1013_2006 Codice Regolamento CEE 1013/2006 (2 lettere + 4 cifre)
 * @param {decimal} kgQtaSmaltimento Quantità a smaltimento (Valorizzare solo per modulo DR se destinazione estero)
 * @param {decimal} kgQtaRecuperoMateria Quantità a recupero di materia (Valorizzare solo per modulo DR se destinazione estero)
 * @param {decimal} kgQtaRecuperoEnergia Quantità a recupero di energia (Valorizzare solo per modulo DR se destinazione estero)
 * @param {utils.recordExportCallback} [callback] - Funzione di callback
 * @return {string} (Se non gestito callback) Record BB – Modulo DR - Rifiuti conferiti a terzi.
 */
exports.getRecordRIF_DR = function(annoRiferimentoDichiarazione, codiceFiscale, codUL,
                                    nProgressivoRIF, codiceCER,
                                    nProgressivoAllegato,
                                    codiceFiscaleSoggetto, ragioneSociale, istatProvincia, istatComune, via, civico, cap, kgQtaDichiarata,
                                    nazioneEstera, codRegolamentoCEE_1013_2006,
                                    kgQtaSmaltimento, kgQtaRecuperoMateria, kgQtaRecuperoEnergia,
                                    callback)
{
    return getRecordRIF_RT_DR_TE(annoRiferimentoDichiarazione, codiceFiscale, codUL,
                                 nProgressivoRIF, codiceCER,
                                 'DR', nProgressivoAllegato,
                                 codiceFiscaleSoggetto, ragioneSociale, istatProvincia, istatComune, via, civico, cap, kgQtaDichiarata,
                                 nazioneEstera, codRegolamentoCEE_1013_2006,
                                 false, kgQtaSmaltimento, kgQtaRecuperoMateria, kgQtaRecuperoEnergia,
                                 callback);
}

/** Esporta la riga relativa al record BB – Modulo TE - Rifiuti trasportati da terzi.
 * @param {string} annoRiferimentoDichiarazione Anno di riferimento della dichiarazione (AAAA)
 * @param {string} codiceFiscale Codice fiscale identificativo
 * @param {string} codUL Codice di identificazione univoca dell’unità locale
 * @param {number} nProgressivoRIF Numero d’ordine progressivo di scheda RIF
 * @param {string} codiceCER Codice del rifiuto SOLO CATALOGO EUROPEO
 * @param {number} nProgressivoAllegato Numero progressivo dell'allegato
 * @param {string} codiceFiscaleSoggetto Codice fiscale del soggetto che ha trasportato (TE)
 * @param {string} ragioneSociale Nome o Ragione sociale
 * @param {utils.recordExportCallback} [callback] - Funzione di callback
 * @return {string} (Se non gestito callback) Record BB – Modulo TE - Rifiuti trasportati da terzi.
 */
exports.getRecordRIF_TE = function(annoRiferimentoDichiarazione, codiceFiscale, codUL,
                                    nProgressivoRIF, codiceCER,
                                    nProgressivoAllegato,
                                    codiceFiscaleSoggetto, ragioneSociale,
                                    callback)
{
    return getRecordRIF_RT_DR_TE(annoRiferimentoDichiarazione, codiceFiscale, codUL,
                                 nProgressivoRIF, codiceCER,
                                 'TE', nProgressivoAllegato,
                                 codiceFiscaleSoggetto, ragioneSociale, null, null, null, null, null, null,
                                 null, null,
                                 false, null, null, null,
                                 callback);
}

/** Esporta la riga generica relativa al record BB - Moduli RT / DR / TE – Allegati alla Scheda RIF
 * @param {string} annoRiferimentoDichiarazione Anno di riferimento della dichiarazione (AAAA)
 * @param {string} codiceFiscale Codice fiscale identificativo
 * @param {string} codUL Codice di identificazione univoca dell’unità locale
 * @param {number} nProgressivoRIF Numero d’ordine progressivo di scheda RIF
 * @param {string} codiceCER Codice del rifiuto SOLO CATALOGO EUROPEO
 * @param {string} tipoAllegato Tipo allegato (RT / DR / TE)
 * @param {number} nProgressivoAllegato Numero progressivo dell'allegato
 * @param {string} codiceFiscaleSoggetto Codice fiscale del soggetto che ha conferito (RT), ricevuto (DR), trasportato (TE) (Per i moduli RT valorizzare solo se Ricevuto da Privati = NO)
 * @param {string} ragioneSociale Nome o Ragione sociale (Per i moduli RT valorizzare solo se Ricevuto da Privati = NO)
 * @param {number} istatProvincia ISTAT Provincia (Valorizzare solo per modulo DR e RT)
 * @param {number} istatComune ISTAT Comune (Valorizzare solo per modulo DR e RT)
 * @param {string} via Via (Valorizzare solo per modulo DR e RT se Ricevuto da Privati = NO)
 * @param {string} civico Nr. Civico (Valorizzare solo per modulo DR e RT se Ricevuto da Privati = NO)
 * @param {string} cap CAP (Valorizzare solo per modulo DR e RT se Ricevuto da Privati = NO)
 * @param {decimal} kgQtaDichiarata Quantità dichiarata (Valorizzare solo per modulo DR e RT)
 * @param {string} nazioneEstera Nome della nazione (solo se trattasi di paese Estero)
 * @param {string} codRegolamentoCEE_1013_2006 Codice Regolamento CEE 1013/2006 (2 lettere + 4 cifre)
 * @param {boolean} isRicevutoPrivati Ricevuto da Privati (Valorizzare solo per modulo RT)
 * @param {decimal} kgQtaSmaltimento Quantità a smaltimento (Valorizzare solo per modulo DR se destinazione estero)
 * @param {decimal} kgQtaRecuperoMateria Quantità a recupero di materia (Valorizzare solo per modulo DR se destinazione estero)
 * @param {decimal} kgQtaRecuperoEnergia Quantità a recupero di energia (Valorizzare solo per modulo DR se destinazione estero)
 * @param {utils.recordExportCallback} [callback] - Funzione di callback
 * @return {string} (Se non gestito callback) Record BB - Moduli RT / DR / TE – Allegati alla Scheda RIF
 */
function getRecordRIF_RT_DR_TE(annoRiferimentoDichiarazione, codiceFiscale, codUL,
                                nProgressivoRIF, codiceCER,
                                tipoAllegato, nProgressivoAllegato,
                                codiceFiscaleSoggetto, ragioneSociale, istatProvincia, istatComune, via, civico, cap, kgQtaDichiarata,
                                nazioneEstera, codRegolamentoCEE_1013_2006,
                                isRicevutoPrivati, kgQtaSmaltimento, kgQtaRecuperoMateria, kgQtaRecuperoEnergia,
                                callback)
{
    tipoAllegato = tipoAllegato.toUpperCase();
    if(codiceCER && typeof(codiceCER) === 'string') codiceCER = codiceCER.replace(/\D+/g, '');
    var out_codiceFiscaleSoggetto = (tipoAllegato == 'RT' && isRicevutoPrivati ? '' : codiceFiscaleSoggetto);
    var out_ragioneSociale = (tipoAllegato == 'RT' && isRicevutoPrivati ? '' : ragioneSociale);
    var out_istatProvincia = (tipoAllegato == 'DR' || tipoAllegato == 'RT' ? istatProvincia : 0);
    var out_istatComune = (tipoAllegato == 'DR' || tipoAllegato == 'RT' ? istatComune : 0);
    var out_via = ((tipoAllegato == 'DR' || tipoAllegato == 'RT') && !isRicevutoPrivati ? via : '');
    var out_civico = ((tipoAllegato == 'DR' || tipoAllegato == 'RT') && !isRicevutoPrivati ? civico : '');
    var out_cap = ((tipoAllegato == 'DR' || tipoAllegato == 'RT') && !isRicevutoPrivati ? cap : '');
    var objQtaDichiarata = utils.getOggettoValoreUM(kgQtaDichiarata);
    if(typeof(nazioneEstera) == 'string') nazioneEstera = nazioneEstera.toString().toUpperCase();
    if(nazioneEstera == 'IT' || nazioneEstera == 'ITALIA' || nazioneEstera == 'ITALY') nazioneEstera = null;
    var out_isRicevutoPrivati = (tipoAllegato == 'RT' ? utils.formattaBoolean(isRicevutoPrivati) : '');
    var objQtaSmaltimento = (tipoAllegato == 'DR' && nazioneEstera ? utils.getOggettoValoreUM(kgQtaSmaltimento) : {});
    var objQtaRecuperoMateria = (tipoAllegato == 'DR' && nazioneEstera ? utils.getOggettoValoreUM(kgQtaRecuperoMateria) : {});
    var objQtaRecuperoEnergia = (tipoAllegato == 'DR' && nazioneEstera ? utils.getOggettoValoreUM(kgQtaRecuperoEnergia) : {});
    var retVal = util.format(
        '%s;%s;%s;%s;%s;%s;%s;%s;%s;%s;%s;%s;%s;%s;%s;%s;%s;%s;%s;%s;%s;%s;%s;%s;%s;%s;',
        'BB',
        utils.formattaNumero(annoRiferimentoDichiarazione, 4),
        utils.formattaStringa(codiceFiscale, 16),
        utils.formattaStringa(codUL, 15),
        utils.formattaNumero(nProgressivoRIF, 4),
        utils.formattaStringa(codiceCER, 6),
        utils.formattaStringa(tipoAllegato, 2),
        utils.formattaNumero(nProgressivoAllegato, 5),
        utils.formattaStringa(out_codiceFiscaleSoggetto, 16),
        utils.formattaStringa(out_ragioneSociale, 60),
        utils.formattaNumero(out_istatProvincia, 3),
        utils.formattaNumero(out_istatComune, 3),
        utils.formattaStringa(out_via, 30),
        utils.formattaStringa(out_civico, 6),
        utils.formattaStringa(out_cap, 5),
        utils.formattaNumero(objQtaDichiarata.valore, 7, 3),
        utils.formattaNumero(objQtaDichiarata.um, 1),
        utils.formattaStringa(nazioneEstera, 20),
        utils.formattaStringa(codRegolamentoCEE_1013_2006, 6),
        utils.formattaStringa(out_isRicevutoPrivati, 1),
        utils.formattaNumero(objQtaSmaltimento.valore, 7, 3),
        utils.formattaNumero(objQtaSmaltimento.um, 1),
        utils.formattaNumero(objQtaRecuperoMateria.valore, 7, 3),
        utils.formattaNumero(objQtaRecuperoMateria.um, 1),
        utils.formattaNumero(objQtaRecuperoEnergia.valore, 7, 3),
        utils.formattaNumero(objQtaRecuperoEnergia.um, 1)
    );
    if(callback)
        return callback(retVal.length != 278, retVal);
    else
        return retVal;
}


/** Esporta la riga relativa al record BC - Moduli RE – Rifiuti prodotti fuori dall’unità locale
 * @param {string} annoRiferimentoDichiarazione Anno di riferimento della dichiarazione (AAAA)
 * @param {string} codiceFiscale Codice fiscale identificativo
 * @param {string} codUL Codice di identificazione univoca dell’unità locale
 * @param {number} nProgressivoRIF Numero d’ordine progressivo di scheda RIF
 * @param {string} codiceCER Codice del rifiuto SOLO CATALOGO EUROPEO
 * @param {number} nProgressivoAllegato Numero progressivo dell'allegato
 * @param {number} istatProvincia ISTAT Provincia (Valorizzare solo per modulo DR e RT)
 * @param {number} istatComune ISTAT Comune (Valorizzare solo per modulo DR e RT)
 * @param {number} attivitaOrig Attività che ha originato il rifiuto: 0 = ND, 2 = Manutenzioni, 4 = Attività di bonifica amianto, 5 = Assistenza sanitaria, 6 = Cantieri temporanei e mobili (anche di bonifica)
 * @param {decimal} kgQtaDichiarata Quantità dichiarata (Valorizzare solo per modulo DR e RT)
 * @param {utils.recordExportCallback} [callback] - Funzione di callback
 * @return {string} (Se non gestito callback) Record BC - Moduli RE – Rifiuti prodotti fuori dall’unità locale
 */
exports.getRecordRIF_RE = function(annoRiferimentoDichiarazione, codiceFiscale, codUL,
                                    nProgressivoRIF, codiceCER, nProgressivoAllegato,
                                    istatProvincia, istatComune,
                                    attivitaOrig, kgQtaDichiarata,
                                    callback)
{
    if(codiceCER && typeof(codiceCER) === 'string') codiceCER = codiceCER.replace(/\D+/g, '');
    var objQtaDichiarata = utils.getOggettoValoreUM(kgQtaDichiarata);
    var retVal = util.format(
        '%s;%s;%s;%s;%s;%s;%s;%s;%s;%s;%s;%s;',
        'BC',
        utils.formattaNumero(annoRiferimentoDichiarazione, 4),
        utils.formattaStringa(codiceFiscale, 16),
        utils.formattaStringa(codUL, 15),
        utils.formattaNumero(nProgressivoRIF, 4),
        utils.formattaStringa(codiceCER, 6),
        utils.formattaNumero(nProgressivoAllegato, 5),
        utils.formattaNumero(istatProvincia, 3),
        utils.formattaNumero(istatComune, 3),
        utils.formattaNumero(attivitaOrig, 1),
        utils.formattaNumero(objQtaDichiarata.valore, 7, 3),
        utils.formattaNumero(objQtaDichiarata.um, 1)
    );
    if(callback)
        return callback(retVal.length != 83, retVal);
    else
        return retVal;
}


/** Esporta le righe relative ai record BD / BE – Moduli MG – Gestione dei rifiuti, Operazioni di Smaltimento / Recupero
 * @param {string} annoRiferimentoDichiarazione Anno di riferimento della dichiarazione (AAAA)
 * @param {string} codiceFiscale Codice fiscale identificativo
 * @param {string} codUL Codice di identificazione univoca dell’unità locale
 * @param {number} nProgressivoRIF Numero d’ordine progressivo di scheda RIF
 * @param {string} codiceCER Codice del rifiuto SOLO CATALOGO EUROPEO
 * @param {number} nProgressivoAllegato Numero progressivo dell'allegato
 * @param {number} tipologiaImpianto Tipologia Impianto: 0 = ND, 1 = Discarica (D1, D5, D12), 2 = Impianto di compostaggio, 3 = Inceneritore (D10), 4 = Impianto di trattamento chimico fisico biologico (D8, D9, D14), 5 = impianto di coincenerimento (R1), 6 = Impianto di digestione anaerobica, 7 = Recupero di materia (R2, R3, R4, R5, R6, R7, R8, R9, R13), 9 = Impianti che effettuano una o più operazioni di smaltimento (D2, D4, D13), 10 = Impianto per il deposito preliminare (D15), 11 = Impianto per la messa in riserva (R13)
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
 * @return {string} (Se non gestito callback) Record BD / BE – Moduli MG – Gestione dei rifiuti, Operazioni di Smaltimento / Recupero
 */
exports.getRecordRIF_MG = function(annoRiferimentoDichiarazione, codiceFiscale, codUL,
                                    nProgressivoRIF, codiceCER, nProgressivoAllegato,
                                    tipologiaImpianto, opSmaltimentoSuOrdinanzaSind,
                                    classDiscarica, kgDepositatiInDiscarica,
                                    kgD02, kgD03, kgD04, kgD06, kgD07, kgD08, kgD09, kgD10, kgD11, kgD13, kgD14, kgD15,
                                    kgR01, kgR02, kgR03, kgR04, kgR05, kgR06, kgR07, kgR08, kgR09, kgR10, kgR11, kgR12, kgR13,
                                    kgGiacDaAvviareRec, kgGiacDaAvviareSmalt,
                                    callback)
{
    if(codiceCER && typeof(codiceCER) === 'string') codiceCER = codiceCER.replace(/\D+/g, '');
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
        '%s;%s;%s;%s;%s;%s;%s;%s;%s;%s;%s;%s;%s;%s;%s;%s;%s;%s;%s;%s;%s;%s;%s;%s;%s;%s;%s;%s;%s;%s;%s;%s;%s;%s;%s;\r\n'+
        '%s;%s;%s;%s;%s;%s;%s;%s;%s;%s;%s;%s;%s;%s;%s;%s;%s;%s;%s;%s;%s;%s;%s;%s;%s;%s;%s;%s;%s;%s;%s;%s;%s;%s;%s;%s;%s;',
        'BD',
        utils.formattaNumero(annoRiferimentoDichiarazione, 4),
        utils.formattaStringa(codiceFiscale, 16),
        utils.formattaStringa(codUL, 15),
        utils.formattaNumero(nProgressivoRIF, 4),
        utils.formattaStringa(codiceCER, 6),
        utils.formattaNumero(nProgressivoAllegato, 4),
        utils.formattaNumero(tipologiaImpianto, 2),
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
        'BE',
        utils.formattaNumero(annoRiferimentoDichiarazione, 4),
        utils.formattaStringa(codiceFiscale, 16),
        utils.formattaStringa(codUL, 15),
        utils.formattaNumero(nProgressivoRIF, 4),
        utils.formattaStringa(codiceCER, 6),
        utils.formattaNumero(nProgressivoAllegato, 4),
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
        return callback(retVal.length != 245 + 2 + 268, retVal);
    else
        return retVal;
}
