module.exports = {
    gattDefs: {
        service: [
            { name: 'dinServ', uuid: '0xbb00' },
            { name: 'ainServ', uuid: '0xbb10' },
            { name: 'nineAxisServ', uuid: '0xbb20' }
        ],
        characteristic: [
            { name: 'ainMeasPeriod', uuid: '0xbb11', params: ['period'], types: ['uint8'] },
            { name: 'nineAxisMeasPeriod', uuid: '0xbb21', params: ['period'], types: ['uint8'] }
        ]
     },
     analysis: function (periph, basicInfo) {
        var checkFlag = false;

        if (basicInfo.manufacturer === 'sivann' &&
            basicInfo.devName === 'Nine Axis Sensor' &&
            basicInfo.model === 'NineAxisSensor' &&
            basicInfo.version.fw === 'v1.0.0' && 
            basicInfo.version.hw === 'v1.0.0' &&
            basicInfo.version.sw === 'v1.0.0')
            checkFlag = true;

        return checkFlag;
    }
};