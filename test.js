var fs = require('fs');
var exportMud = require('./export-mud');

var USE_LOG_FILE = false;

function writeLog(logString, fileOnly){
    if(!logString) logString = '';
    if(!fileOnly) console.log(logString);
    if(USE_LOG_FILE){
        var fd = fs.openSync('./log.txt', 'a');
        fs.writeSync(fd, logString + '\r\n', null, 'utf8');
        fs.closeSync(fd);
    }
}

writeLog(new Date());

exportTestMUD(exportMud);

function exportTestMUD(exportMud){
    exportMud.getRecordXX(
        1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28,
        'ABCDEF01B17C123Q', 'Ragione Sociale', 'via ROMA', '12', '00053', 'Civitavecchia', 'RM', '0766', '000000', 'info@example.net',
        function(err, retVal){
            console.log('********** ESPORTAZIONE RECORD XX      ********** [' + (err ? 'KO Lunghezza: ' + retVal.length : 'OK') + ']');
            writeLog(retVal, !err);
        }
    );

    exportMud.anag.getRecordSA1(
        2014, 'ABCDEF01B17C123Q', 1, 'A.12.50.60', '123456789', 5, 'Ragione Sociale', '058', '032', 'via Milano', '23/bis', '00053', '0766', '111111',
        '058', '032', 'via ROMA', '12', '00053', '0766', '000000',
        'ROSSI', 'MARIO', 12,
        function(err, retVal){
            console.log('********** ESPORTAZIONE RECORD AA      ********** [' + (err ? 'KO Lunghezza: ' + retVal.length : 'OK') + ']');
            writeLog(retVal, !err);
        }
    );

    exportMud.anag.getRecordSA_AUT(
        2014, 'ABCDEF01B17C123Q', 1,
        15, 2, false, false, false, 0, 0, false,
        null, null, null, null,
        null, null, null,
        false/*, incen_capacitaAutTot*/, null, null,
        false/*, concen_capacitaAutTot*/, null, null,
        6, 8,
        7, 5,
        8, 3,
        0, 2,
        null, null,
        function(err, retVal){
            console.log('********** ESPORTAZIONE RECORD AB      ********** [' + (err ? 'KO Lunghezza: ' + retVal.length : 'OK') + ']');
            writeLog(retVal, !err);
        }
    );

    exportMud.rif.getRecordRIF(
        2014, 'ABCDEF01B17C123Q', 1,
        1, '100101',
        true, false, false, false, false, false, false,
        123456.1236, 12345678.457, 1, 456, 1, 5678, 1, 789, 2,
        546, 768, 1563, 1235,
        function(err, retVal){
            console.log('********** ESPORTAZIONE RECORD RIF_BA  ********** [' + (err ? 'KO Lunghezza: ' + retVal.length : 'OK') + ']');
            writeLog(retVal, !err);
        }
    );

    exportMud.rif.getRecordRIF_RT(
        2014, 'ABCDEF01B17C123Q', 1,
        1, '100101',
        1,
        'ABCDEF14E11T789W', 'Piero della Francesca Srl', '003', '021', 'via Torino', '6', '12345', 1586,
        null, null,
        false,
        function(err, retVal){
            console.log('********** ESPORTAZIONE RECORD RIF_RT  ********** [' + (err ? 'KO Lunghezza: ' + retVal.length : 'OK') + ']');
            writeLog(retVal, !err);
        }
    );
    exportMud.rif.getRecordRIF_DR(
        2014, 'ABCDEF01B17C123Q', 1,
        1, '100101',
        1,
        'ABCDEF14E11T789W', 'Piero della Francesca Srl', '003', '021', 'via Torino', '6', '12345', 1586,
        null, null,
        156, 457, 1453,
        function(err, retVal){
            console.log('********** ESPORTAZIONE RECORD RIF_DR  ********** [' + (err ? 'KO Lunghezza: ' + retVal.length : 'OK') + ']');
            writeLog(retVal, !err);
        }
    );
    exportMud.rif.getRecordRIF_TE(
        2014, 'ABCDEF01B17C123Q', 1,
        1, '100101',
        1,
        'ABCDEF14E11T789W', 'Piero della Francesca Srl',
        null, null,
        function(err, retVal){
            console.log('********** ESPORTAZIONE RECORD RIF_TE  ********** [' + (err ? 'KO Lunghezza: ' + retVal.length : 'OK') + ']');
            writeLog(retVal, !err);
        }
    );

    exportMud.rif.getRecordRIF_RE(
        2014, 'ABCDEF01B17C123Q', 1,
        1, '100101', 1,
        '003', '021',
        '0', 23124342.234,
        function(err, retVal){
            console.log('********** ESPORTAZIONE RECORD RIF_RE  ********** [' + (err ? 'KO Lunghezza: ' + retVal.length : 'OK') + ']');
            writeLog(retVal, !err);
        }
    );

    exportMud.rif.getRecordRIF_MG(
        2014, 'ABCDEF01B17C123Q', 1,
        1, '100101', 1,
        0, false,
        0, 12345600,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0,
        function(err, retVal){
            console.log('********** ESPORTAZIONE RECORD RIF_MG  ********** [' + (err ? 'KO Lunghezza: ' + retVal.length : 'OK') + ']');
            writeLog(retVal, !err);
        }
    );


    exportMud.int.getRecordINT(
        2014, 'ABCDEF01B17C123Q', 1,
        1, '100101',
        true, false, false, false, false, false, false,
        123456.1236, 3, 1,
        function(err, retVal){
            console.log('********** ESPORTAZIONE RECORD INT_DA  ********** [' + (err ? 'KO Lunghezza: ' + retVal.length : 'OK') + ']');
            writeLog(retVal, !err);
        }
    );

    exportMud.int.getRecordINT_UO(
        2014, 'ABCDEF01B17C123Q', 1,
        1, '100101',
        1,
        'ABCDEF14E11T789W', 'Piero della Francesca Srl', '003', '021', 'via Torino', '6', 'Italia', 897,
        function(err, retVal){
            console.log('********** ESPORTAZIONE RECORD INT_UO  ********** [' + (err ? 'KO Lunghezza: ' + retVal.length : 'OK') + ']');
            writeLog(retVal, !err);
        }
    );

    exportMud.int.getRecordINT_UD(
        2014, 'ABCDEF01B17C123Q', 1,
        1, '100101',
        1,
        'ABCDEF14E11T789W', 'Piero della Francesca Srl', '003', '021', 'via Torino', '6', 'Italia', 456,
        function(err, retVal){
            console.log('********** ESPORTAZIONE RECORD INT_UD  ********** [' + (err ? 'KO Lunghezza: ' + retVal.length : 'OK') + ']');
            writeLog(retVal, !err);
        }
    );


    exportMud.raee.getRecordRAEE(
        2014, 'ABCDEF01B17C123Q', 1,
        'TRA', 1, false,
        2, 1234, 1, 3, false, 1, 1234,
        1234, 423, 12, 213,
        function(err, retVal){
            console.log('********** ESPORTAZIONE RECORD RAEE_RA ********** [' + (err ? 'KO Lunghezza: ' + retVal.length : 'OK') + ']');
            writeLog(retVal, !err);
        }
    );

    exportMud.raee.getRecordRAEE_Det(
        2014, 'ABCDEF01B17C123Q', 1,
        'TRA', 1,
        '100101',
        'DR', 234,
        function(err, retVal){
            console.log('********** ESPORTAZIONE RECORD RAEE_RB ********** [' + (err ? 'KO Lunghezza: ' + retVal.length : 'OK') + ']');
            writeLog(retVal, !err);
        }
    );

    exportMud.raee.getRecordRAEE_RT(
        2014, 'ABCDEF01B17C123Q', 1,
        'TRA', 1,
        '100101',
        1,
        'ABCDEF14E11T789W', 'Piero della Francesca Srl', '003', '021', 'via Torino', '6', '12345',
        1564.3, 'Italia', 'AB1234', false,
        function(err, retVal){
            console.log('********** ESPORTAZIONE RECORD RAEE_RT ********** [' + (err ? 'KO Lunghezza: ' + retVal.length : 'OK') + ']');
            writeLog(retVal, !err);
        }
    );

    exportMud.raee.getRecordRAEE_TE(
        2014, 'ABCDEF01B17C123Q', 1,
        'TRA', 1,
        '100101',
        1,
        'ABCDEF14E11T789W', 'Piero della Francesca Srl',
        1564.3,
        function(err, retVal){
            console.log('********** ESPORTAZIONE RECORD RAEE_TE ********** [' + (err ? 'KO Lunghezza: ' + retVal.length : 'OK') + ']');
            writeLog(retVal, !err);
        }
    );

    exportMud.raee.getRecordRAEE_DR(
        2014, 'ABCDEF01B17C123Q', 1,
        'TRA', 1,
        '100101',
        1,
        'ABCDEF14E11T789W', 'Piero della Francesca Srl', '003', '021', 'via Torino', '6', '12345',
        1564.3, null, null,
        123, 'R', null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null,
        function(err, retVal){
            console.log('********** ESPORTAZIONE RECORD RAEE_DR ********** [' + (err ? 'KO Lunghezza: ' + retVal.length : 'OK') + ']');
            writeLog(retVal, !err);
        }
    );

    exportMud.raee.getRecordRAEE_MG(
        2014, 'ABCDEF01B17C123Q', 1,
        'TRA', 1,
        '100101',
        1, false,
        0, 12344,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 123,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 324,
        1256, 478,
        function(err, retVal){
            console.log('********** ESPORTAZIONE RECORD RAEE_MG ********** [' + (err ? 'KO Lunghezza: ' + retVal.length : 'OK') + ']');
            writeLog(retVal, !err);
        }
    );


    exportMud.vfu.getRecordVFU(
        2014, 'ABCDEF01B17C123Q', 1,
        'AUT',
        2134, 5, 6, 7, 8,
        235, 657, 678,
        678, 45, 34,
        3435, 3452, 765, 234,
        function(err, retVal){
            console.log('********** ESPORTAZIONE RECORD VFU_VC  ********** [' + (err ? 'KO Lunghezza: ' + retVal.length : 'OK') + ']');
            writeLog(retVal, !err);
        }
    );

    exportMud.vfu.getRecordVFU_Det(
        2014, 'ABCDEF01B17C123Q', 1,
        'AUT',
        'RT', '100101', 213,
        function(err, retVal){
            console.log('********** ESPORTAZIONE RECORD VFU_VD  ********** [' + (err ? 'KO Lunghezza: ' + retVal.length : 'OK') + ']');
            writeLog(retVal, !err);
        }
    );

    exportMud.vfu.getRecordVFU_RT(
        2014, 'ABCDEF01B17C123Q', 1,
        'AUT', '100101',
        1,
        false, 'ABCDEF14E11T789W', 'Piero della Francesca Srl', '003', '021', 'via Torino', '6', '12345',
        324, null, null,
        function(err, retVal){
            console.log('********** ESPORTAZIONE RECORD VFU_RT  ********** [' + (err ? 'KO Lunghezza: ' + retVal.length : 'OK') + ']');
            writeLog(retVal, !err);
        }
    );

    exportMud.vfu.getRecordVFU_TE(
        2014, 'ABCDEF01B17C123Q', 1,
        'AUT', '100101',
        1,
        'ABCDEF14E11T789W', 'Piero della Francesca Srl', 324,
        function(err, retVal){
            console.log('********** ESPORTAZIONE RECORD VFU_TE  ********** [' + (err ? 'KO Lunghezza: ' + retVal.length : 'OK') + ']');
            writeLog(retVal, !err);
        }
    );

    exportMud.vfu.getRecordVFU_DR(
        2014, 'ABCDEF01B17C123Q', 1,
        'AUT',
        '100101',
        1,
        'ABCDEF14E11T789W', 'Piero della Francesca Srl', '003', '021', 'via Torino', '6', '12345',
        1564.3, null, null,
        123, 'R', null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null,
        function(err, retVal){
            console.log('********** ESPORTAZIONE RECORD VFU_DR  ********** [' + (err ? 'KO Lunghezza: ' + retVal.length : 'OK') + ']');
            writeLog(retVal, !err);
        }
    );

    exportMud.vfu.getRecordVFU_MG(
        2014, 'ABCDEF01B17C123Q', 1,
        'AUT',
        '100101',
        1, false,
        0, 12344,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 123,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 324,
        1256, 478,
        function(err, retVal){
            console.log('********** ESPORTAZIONE RECORD VFU_MG  ********** [' + (err ? 'KO Lunghezza: ' + retVal.length : 'OK') + ']');
            writeLog(retVal, !err);
        }
    );


    exportMud.imb.getRecordIMB(
        2014, 'ABCDEF01B17C123Q', 1,
        1234, 1, 1, 3, 1, 1234,
        123, 423,
        function(err, retVal){
            console.log('********** ESPORTAZIONE RECORD IMB_IA  ********** [' + (err ? 'KO Lunghezza: ' + retVal.length : 'OK') + ']');
            writeLog(retVal, !err);
        }
    );

    exportMud.imb.getRecordIMB_Det(
        2014, 'ABCDEF01B17C123Q', 1,
        '100101',
        'RC', 234,
        function(err, retVal){
            console.log('********** ESPORTAZIONE RECORD IMB_IB  ********** [' + (err ? 'KO Lunghezza: ' + retVal.length : 'OK') + ']');
            writeLog(retVal, !err);
        }
    );

    exportMud.imb.getRecordIMB_RT(
        2014, 'ABCDEF01B17C123Q', 1,
        '100101',
        1,
        'ABCDEF14E11T789W', 'Piero della Francesca Srl', '003', '021', 'via Torino', '6', '12345',
        1564.3, 'Italia', 'AB1234', 1,
        function(err, retVal){
            console.log('********** ESPORTAZIONE RECORD IMB_RT  ********** [' + (err ? 'KO Lunghezza: ' + retVal.length : 'OK') + ']');
            writeLog(retVal, !err);
        }
    );

    exportMud.imb.getRecordIMB_TE(
        2014, 'ABCDEF01B17C123Q', 1,
        '100101',
        1,
        'ABCDEF14E11T789W', 'Piero della Francesca Srl',
        1564.3,
        function(err, retVal){
            console.log('********** ESPORTAZIONE RECORD IMB_TE  ********** [' + (err ? 'KO Lunghezza: ' + retVal.length : 'OK') + ']');
            writeLog(retVal, !err);
        }
    );

    exportMud.imb.getRecordIMB_DR(
        2014, 'ABCDEF01B17C123Q', 1,
        '100101',
        1,
        'ABCDEF14E11T789W', 'Piero della Francesca Srl', '003', '021', 'via Torino', '6', '12345',
        1564.3, null, null,
        123, 'R', null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null,
        function(err, retVal){
            console.log('********** ESPORTAZIONE RECORD IMB_DR  ********** [' + (err ? 'KO Lunghezza: ' + retVal.length : 'OK') + ']');
            writeLog(retVal, !err);
        }
    );

    exportMud.imb.getRecordIMB_MG(
        2014, 'ABCDEF01B17C123Q', 1,
        '100101',
        1, false,
        0, 12344,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 123,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 324,
        1256, 478,
        function(err, retVal){
            console.log('********** ESPORTAZIONE RECORD IMB_MG  ********** [' + (err ? 'KO Lunghezza: ' + retVal.length : 'OK') + ']');
            writeLog(retVal, !err);
        }
    );


    exportMud.mat.getRecordMAT_RIF(
        2014, 'ABCDEF01B17C123Q', 1,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        function(err, retVal){
            console.log('********** ESPORTAZIONE RECORD MA_RIF  ********** [' + (err ? 'KO Lunghezza: ' + retVal.length : 'OK') + ']');
            writeLog(retVal, !err);
        }
    );

    exportMud.mat.getRecordMAT_AUT(
        2014, 'ABCDEF01B17C123Q', 1,
        0, 0, 0, 0, 0, 0, 0, 0,
        function(err, retVal){
            console.log('********** ESPORTAZIONE RECORD MA_AUT  ********** [' + (err ? 'KO Lunghezza: ' + retVal.length : 'OK') + ']');
            writeLog(retVal, !err);
        }
    );

    exportMud.mat.getRecordMAT_FRA(
        2014, 'ABCDEF01B17C123Q', 1,
        0, 0, 0, 0, 0, 0, 0, 0,
        function(err, retVal){
            console.log('********** ESPORTAZIONE RECORD MA_FRA  ********** [' + (err ? 'KO Lunghezza: ' + retVal.length : 'OK') + ']');
            writeLog(retVal, !err);
        }
    );

    exportMud.mat.getRecordMAT_ROT(
        2014, 'ABCDEF01B17C123Q', 1,
        0, 0, 0, 0, 0, 0, 0, 0,
        function(err, retVal){
            console.log('********** ESPORTAZIONE RECORD MA_ROT  ********** [' + (err ? 'KO Lunghezza: ' + retVal.length : 'OK') + ']');
            writeLog(retVal, !err);
        }
    );
}
