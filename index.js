module.exports = {
    gattDefs: {
        service: [
            { name: 'dInServ', uuid: '0xbb00' },
            { name: 'aInServ', uuid: '0xbb10' },
            { name: 'nineAxisServ', uuid: '0xbb20' }
        ],
        characteristic: [
            { name: 'aInConfig', uuid: '0xbb11', params: ['config'], types: ['boolean'] },
            { name: 'aInMeasPeriod', uuid: '0xbb12', params: ['period'], types: ['uint8'] },
            { name: 'nineAxisConfig', uuid: '0xbb21', params: ['config'], types: ['boolean'] },
            { name: 'nineAxisMeasPeriod', uuid: '0xbb22', params: ['period'], types: ['uint8'] },
            { name: 'nineAxisResolution', uuid: '0xbb23', params: ['resolution'], types: ['uint8'] }
        ]
     },
     examine: function (periph, basicInfo) {
        var isMine = false;

        if (basicInfo.manufacturer === 'sivann' &&
            basicInfo.devName === 'Nine Axis Sensor')
            isMine = true;

        return isMine;
    }
};
