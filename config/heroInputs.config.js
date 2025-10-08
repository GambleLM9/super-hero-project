// config/heroInputs.config.js
module.exports = {
    superName: {
        id: 'superName',
        name: 'superName',
        label: 'Super Name',
        type: 'text',
        required: true,
        placeholder: 'e.g., Spider-Man'
    },
    realName: {
        id: 'realName',
        name: 'realName',
        label: 'Real Name',
        type: 'text',
        required: true,
        placeholder: 'e.g., Peter Parker'
    },
    superpower: {
        id: 'superpower',
        name: 'powerLevel',
        label: 'Power Level (1-10)',
        type: 'number',
        required: true,
        min: 1,
        max: 10
    },
    powerLevel: {
        id: 'powerLevel',
        name: 'powerLevel',
        label: 'Power Levek (1-10)',
        type: 'number',
        required: true,
        min: 1,
        max: 10
    },

    secretIdentity: {
        id: 'secretIdentity',
        name: 'secretIdentity',
        label: 'Has secret identity?',
        type: 'checkbox',
        required: false
    }
};