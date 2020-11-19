const elections = [
    {
        date: "December 1, 2020",
        type: 'House',
        name: 'U.S. House Georgia District 5 (special election)',
        candidates: [
            {
                party: 'Democrat',
                name: 'Robert Franklin',
                value: 'robert-franklin',
                ballotpedia_site: 'https://ballotpedia.org/Robert_Franklin_(Georgia)',
                campaign_site: 'https://www.franklinforcongress2020.com',
                platform: null
            },
            {
                party: 'Democrat',
                name: 'Kwanza Hall',
                value: 'kwanza-hall',
                ballotpedia_site: 'https://ballotpedia.org/Kwanza_Hall',
                campaign_site: 'http://kwanzahall.com',
                platform: 'https://kwanzahall.com/platform-and-issues/'
            }

        ],
        measures: [
            {
                measure: "Ballot Measure 2A",
                measure_value: "2A",
                description: "Ballot Measure 2A is a sales tax to fund environmental and climate-related programs and tabor spending limit increase measure.",
                name: "Sales Tax to Fund Environmental and Climate-Related Programs and TABOR Spending Limit Increase",
                in_favor: "supports authorizing the city and county of Atlanta to levy an additional 0.25% sales tax generating an estimated $40 million per year to fund climate-related programs and programs designed to reduce greenhouse gas emissions and air pollution, thereby increasing the total sales tax rate in Atlanta from 8.31% to 8.56%.",
                against: "opposes authorizing the city and county of Atlanta to levy an additional 0.25% sales tax to fund climate-related programs and programs designed to reduce greenhouse gas emissions and air pollution, thereby leaving the total sales tax rate in Atlanta at 8.31%."
            },
            {
                measure: "Ballot Measure 2B",
                measure_value: "2B",
                description: 'Ballot Measure 2B is a sales tax to fund housing and homeless services and tabor spending limit increase measure',
                name: 'Sales Tax to Fund Housing and Homeless Services and TABOR Spending Limit Increase',
                in_favor: 'supports authorizing the city and county of Atlanta to levy an additional 0.25% sales tax generating an estimated $40 million per year to fund housing and homeless services, thereby increasing the total sales tax rate in Atlanta from 8.31% to 8.56%.',
                against: 'vote opposes authorizing the city and county of Atlanta to levy an additional 0.25% sales tax to fund housing and homeless services, thereby leaving the total sales tax rate in Atlanta at 8.31%.'
            }
        ]
    }
];




module.exports = elections;