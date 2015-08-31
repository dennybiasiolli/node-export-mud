/**
 * Esportazione delle schede Anagrafiche MUD
 * @module anag
 * @memberof module:mud
 * @author Denny Biasiolli
 */

var util = require('util');
var utils = require('./utils');

/** Esporta la riga relativa al record AA – Scheda SA-1 - Anagrafica azienda e anagrafica unita' locale
 * @param {string} annoRiferimentoDichiarazione Anno di riferimento della dichiarazione (AAAA)
 * @param {string} codiceFiscale Codice fiscale identificativo
 * @param {string} codUL Codice di identificazione univoca dell’unità locale
 * @param {string} codIstatAttivita Codice ISTAT attività svolta (senza punti e lettere allineato a sinistra)
 * @param {number} nREA N. iscriz. Rep.Notizie Econ.Amm. (REA)
 * @param {number} nAddettiUL Totale addetti nell'unità locale
 * @param {string} ragioneSociale Descrizione della ragione sociale
 * @param {number} ul_IstatProvincia ISTAT Provincia dell'unità locale
 * @param {number} ul_IstatComune ISTAT Comune dell'unità locale
 * @param {string} ul_via Via dell'unità locale
 * @param {string} ul_civico Nr. civico dell'unità locale
 * @param {string} ul_cap CAP dell'unità locale
 * @param {string} ul_prefissoTelefonico Prefisso telefonico dell'unità locale
 * @param {string} ul_numeroTelefonico Numero telefonico dell'unità locale
 * @param {number} sl_IstatProvincia ISTAT Provincia della sede legale
 * @param {number} sl_IstatComune ISTAT Comune della sede legale
 * @param {string} sl_via Via della sede legale
 * @param {string} sl_civico Nr. civico della sede legale
 * @param {string} sl_cap CAP della sede legale
 * @param {string} sl_prefissoTelefonico Prefisso telefonico della sede legale
 * @param {string} sl_numeroTelefonico Numero telefonico della sede legale
 * @param {string} cognomeLegaleRappr Cognome del legale rappresentante
 * @param {string} nomeLegaleRappr Nome del legale rappresentante
 * @param {number} nomeLegaleRappr Mesi di attività nell'anno
 * @param {date} dataCompilazione Data di compilazione/stampa
 * @param {number} mesiAttivita Mesi di attività nell'anno
 * @param {boolean} annullaPrecedente Annulla e sostituisce
 * @param {date} dataComunicazioneSostituita Data della comunicazione sostituita
 * @param {utils.recordExportCallback} [callback] - Funzione di callback
 * @return {string} (Se non gestito callback) Record AA – Scheda SA-1 - Anagrafica azienda e anagrafica unita' locale
 */
exports.getRecordSA1 = function(annoRiferimentoDichiarazione, codiceFiscale, codUL,
                                 codIstatAttivita, nREA, nAddettiUL, ragioneSociale,
                                 ul_IstatProvincia, ul_IstatComune, ul_via, ul_civico, ul_cap, ul_prefissoTelefonico, ul_numeroTelefonico,
                                 sl_IstatProvincia, sl_IstatComune, sl_via, sl_civico, sl_cap, sl_prefissoTelefonico, sl_numeroTelefonico,
                                 cognomeLegaleRappr, nomeLegaleRappr, dataCompilazione, mesiAttivita, annullaPrecedente, dataComunicazioneSostituita,
                                 callback)
{
    // Codice ISTAT attività svolta (senza punti e lettere allineato a sinistra)
    if(codIstatAttivita && typeof(codIstatAttivita) === 'string') codIstatAttivita = codIstatAttivita.replace(/\D+/g, '');
    var retVal = util.format(
        '%s;%s;%s;%s;%s;%s;%s;%s;%s;%s;%s;%s;%s;%s;%s;%s;%s;%s;%s;%s;%s;%s;%s;%s;%s;%s;%s;%s;',
        'AA',
        utils.formattaNumero(annoRiferimentoDichiarazione, 4),
        utils.formattaStringa(codiceFiscale, 16),
        utils.formattaStringa(codUL, 15),
        utils.formattaStringa(codIstatAttivita, 6),
        utils.formattaNumero(nREA, 9),
        utils.formattaNumero(nAddettiUL, 5),
        utils.formattaStringa(ragioneSociale, 60),
        utils.formattaNumero(ul_IstatProvincia, 3),
        utils.formattaNumero(ul_IstatComune, 3),
        utils.formattaStringa(ul_via, 30),
        utils.formattaStringa(ul_civico, 6),
        utils.formattaStringa(ul_cap, 5),
        utils.formattaStringa(ul_prefissoTelefonico, 5),
        utils.formattaStringa(ul_numeroTelefonico, 10),
        utils.formattaNumero(sl_IstatProvincia, 3),
        utils.formattaNumero(sl_IstatComune, 3),
        utils.formattaStringa(sl_via, 30),
        utils.formattaStringa(sl_civico, 6),
        utils.formattaStringa(sl_cap, 5),
        utils.formattaStringa(sl_prefissoTelefonico, 5),
        utils.formattaStringa(sl_numeroTelefonico, 10),
        utils.formattaStringa(cognomeLegaleRappr, 25),
        utils.formattaStringa(nomeLegaleRappr, 25),
        utils.formattaDataOra(dataCompilazione, 'YYYYMMDD'),
        utils.formattaNumero(mesiAttivita, 2),
        utils.formattaBoolean(annullaPrecedente),
        utils.formattaDataOra(dataComunicazioneSostituita, 'YYYYMMDD')
    );
    if(callback)
        return callback(retVal.length != 338, retVal);
    else
        return retVal;
}

/** Esporta la riga relativa al record AB – Scheda SA-AUT - Autorizzazioni e Riassuntiva
 * @param {string} annoRiferimentoDichiarazione Anno di riferimento della dichiarazione (AAAA)
 * @param {string} codiceFiscale Codice fiscale identificativo
 * @param {string} codUL Codice di identificazione univoca dell’unità locale
 * @param {number} nRIF Sezione Rifiuti, numero di schede RIF
 * @param {number} nINT Sez. Intermediazione,numero di schede INT
 * @param {boolean} isAUT Sezione Veicoli, Compilata Scheda AUT
 * @param {boolean} isROT Sezione Veicoli, Compilata Scheda ROT
 * @param {boolean} isFRA Sezione Veicoli, Compilata Scheda FRA
 * @param {number} nTRA_RAEE Sezione RAEE, numero di schede TRA-RAEE
 * @param {number} nCR_RAEE Sezione RAEE, numero di schede CR-RAEE
 * @param {boolean} isIMB Sezione Imballaggi, Compilata Scheda IMB
 * @param {date} VFU_dataAut208 VFU - Data autorizzazione ART. 208, 209, 213 del D.Lgs. 152/2006 così come modificato dal D.Lgs. 205/2010
 * @param {date} VFU_dataAut216 VFU - Data autorizzazione ART. 216 del D.Lgs. 152/2006 così come modificato dal D.Lgs. 205/2010
 * @param {date} RAEE_dataAut208 RAEE - RAEE -Data autorizzazione ART. 208, 209, 213 del D.Lgs. 152/2006 così come modificato dal D.Lgs. 205/2010
 * @param {date} RAEE_dataAut216 RAEE - RAEE -Data autorizzazione ART. 216 del D.Lgs. 152/2006 così come modificato dal D.Lgs. 205/2010
 * @param {date} EMAS_dataCert Data certificazione EMAS
 * @param {string} EMAS_numCert Numero registrazione certificazione EMAS
 * @param {date} ISO14000_dataCert Data certificazione ISO 14000
 * @param {boolean} isIncenerimento Incenerimento
 * @param {number} incen_capacitaAutTot_Peric Capacità autorizzata relativa a rifiuti pericolosi (t/a)
 * @param {number} incen_capacitaAutTot_NonPeric Capacità autorizzata relativa a rifiuti non pericolosi (t/a)
 * @param {boolean} isConcenerimento Concenerimento
 * @param {number} concen_capacitaAutTot_Peric Capacità autorizzata relativa a rifiuti pericolosi (t/a)
 * @param {number} concen_capacitaAutTot_NonPeric Capacità autorizzata relativa a rifiuti non pericolosi (t/a)
 * @param {string} classificazioneDiscarica_1 Classificazione della discarica: 0=ND, 6=Rifiuti pericolosi, 7=Rifiuti non pericolosi, 8=Rifiuti inerti
 * @param {number} tonnDepositateNellAnno_1 Quantità in tonnellate depositata in discarica nell’anno
 * @param {string} classificazioneDiscarica_2 Classificazione della discarica: 0=ND, 6=Rifiuti pericolosi, 7=Rifiuti non pericolosi, 8=Rifiuti inerti
 * @param {number} tonnDepositateNellAnno_2 Quantità in tonnellate depositata in discarica nell’anno
 * @param {string} classificazioneDiscarica_3 Classificazione della discarica: 0=ND, 6=Rifiuti pericolosi, 7=Rifiuti non pericolosi, 8=Rifiuti inerti
 * @param {number} tonnDepositateNellAnno_3 Quantità in tonnellate depositata in discarica nell’anno
 * @param {string} classificazioneDiscarica_4 Classificazione della discarica: 0=ND, 6=Rifiuti pericolosi, 7=Rifiuti non pericolosi, 8=Rifiuti inerti
 * @param {number} tonnDepositateNellAnno_4 Quantità in tonnellate depositata in discarica nell’anno
 * @param {string} classificazioneDiscarica_5 Classificazione della discarica: 0=ND, 6=Rifiuti pericolosi, 7=Rifiuti non pericolosi, 8=Rifiuti inerti
 * @param {number} tonnDepositateNellAnno_5 Quantità in tonnellate depositata in discarica nell’anno
 * @param {utils.recordExportCallback} [callback] - Funzione di callback
 * @return {string} (Se non gestito callback) Record AB – Scheda SA-AUT - Autorizzazioni e Riassuntiva
 */
exports.getRecordSA_AUT = function(annoRiferimentoDichiarazione, codiceFiscale, codUL,
                                    nRIF, nINT, isAUT, isROT, isFRA, nTRA_RAEE, nCR_RAEE, isIMB,
                                    VFU_dataAut208, VFU_dataAut216, RAEE_dataAut208, RAEE_dataAut216,
                                    EMAS_dataCert, EMAS_numCert, ISO14000_dataCert,
                                    isIncenerimento/*, incen_capacitaAutTot*/, incen_capacitaAutTot_Peric, incen_capacitaAutTot_NonPeric,
                                    isConcenerimento/*, concen_capacitaAutTot*/, concen_capacitaAutTot_Peric, concen_capacitaAutTot_NonPeric,
                                    classificazioneDiscarica_1, tonnDepositateNellAnno_1,
                                    classificazioneDiscarica_2, tonnDepositateNellAnno_2,
                                    classificazioneDiscarica_3, tonnDepositateNellAnno_3,
                                    classificazioneDiscarica_4, tonnDepositateNellAnno_4,
                                    classificazioneDiscarica_5, tonnDepositateNellAnno_5,
                                    callback)
{
    var retVal = util.format(
        '%s;%s;%s;%s;%s;%s;%s;%s;%s;%s;%s;%s;%s;%s;%s;%s;%s;%s;%s;%s;%s;%s;%s;%s;%s;%s;%s;%s;%s;%s;%s;%s;%s;%s;%s;%s;%s;',
        'AB',
        utils.formattaNumero(annoRiferimentoDichiarazione, 4),
        utils.formattaStringa(codiceFiscale, 16),
        utils.formattaStringa(codUL, 15),
        utils.formattaNumero(nRIF, 6),
        utils.formattaNumero(nINT, 6),
        utils.formattaBoolean(isAUT),
        utils.formattaBoolean(isROT),
        utils.formattaBoolean(isFRA),
        utils.formattaNumero(nTRA_RAEE, 2),
        utils.formattaNumero(nCR_RAEE, 2),
        utils.formattaBoolean(isIMB),
        utils.formattaDataOra(VFU_dataAut208, 'YYYYMMDD'),
        utils.formattaDataOra(VFU_dataAut216, 'YYYYMMDD'),
        utils.formattaDataOra(RAEE_dataAut208, 'YYYYMMDD'),
        utils.formattaDataOra(RAEE_dataAut216, 'YYYYMMDD'),
        utils.formattaDataOra(EMAS_dataCert, 'YYYYMMDD'),
        utils.formattaStringa(EMAS_numCert, 9),
        utils.formattaDataOra(ISO14000_dataCert, 'YYYYMMDD'),
        utils.formattaBoolean(isIncenerimento),
        utils.formattaNumero(incen_capacitaAutTot_Peric + incen_capacitaAutTot_NonPeric, 9), // Capacità autorizzata complessiva (t/a)
        utils.formattaNumero(incen_capacitaAutTot_Peric, 9),
        utils.formattaNumero(incen_capacitaAutTot_NonPeric, 9),
        utils.formattaBoolean(isConcenerimento),
        utils.formattaNumero(concen_capacitaAutTot_Peric + concen_capacitaAutTot_NonPeric, 9), // Capacità autorizzata complessiva (t/a)
        utils.formattaNumero(concen_capacitaAutTot_Peric, 9),
        utils.formattaNumero(concen_capacitaAutTot_NonPeric, 9),
        utils.formattaNumero(classificazioneDiscarica_1, 1),
        utils.formattaNumero(tonnDepositateNellAnno_1, 9),
        utils.formattaNumero(classificazioneDiscarica_2, 1),
        utils.formattaNumero(tonnDepositateNellAnno_2, 9),
        utils.formattaNumero(classificazioneDiscarica_3, 1),
        utils.formattaNumero(tonnDepositateNellAnno_3, 9),
        utils.formattaNumero(classificazioneDiscarica_4, 1),
        utils.formattaNumero(tonnDepositateNellAnno_4, 9),
        utils.formattaNumero(classificazioneDiscarica_5, 1),
        utils.formattaNumero(tonnDepositateNellAnno_5, 9)
    );
    if(callback)
        return callback(retVal.length != 257, retVal);
    else
        return retVal;
}
