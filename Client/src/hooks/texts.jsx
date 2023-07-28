// function to store the titles of each step
export function texts() {
    const headerText = [
        {
            h1: 'Exercise Info',
            p: 'All data will auto-save once your click/tab away from each field.'
        },
        {
            h1: 'Aircraft Info',
            p: 'Pick the aircraft and accompanying personnel for your unit.'
        },
        {
            h1: 'Airfare Info',
            p: 'Decide on how much personnel will be using commercial airfare.'
        },
        {
            h1: 'Lodging info',
            p: '..................'
        },
        {
            h1: 'Meal Info',
            p: '...................'
        }
    ]

    const arrayInformationsStep = [
        {
            num: 1,
            name: 'exercise info'
        },
        {
            num: 2,
            name: 'aircraft'
        },
        {
            num: 3,
            name: 'airfare'
        },
        {
            num: 4,
            name: 'lodging'
        },
        {
            num: 5,
            name: 'meals'
        }
    ]

    const plans = {
        monthly: [9, 12, 15],
        yearly: [90, 120, 150]
    }

    const services = {
        monthly: [1, 2, 2],
        yearly: [10, 20, 20]
    }

    return {
        headerText: headerText,
        arrayInformationsStep: arrayInformationsStep,
        plans: plans,
        services: services
    }
}