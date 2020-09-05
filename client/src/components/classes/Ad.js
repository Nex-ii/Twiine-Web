export default class Ad {
    constructor(photo = '', description = '', insights = 0, customerTurnover = 0, trafficSource = 0, chart = '') {
        this.photo = photo;
        this.description = description;
        this.insights = insights;
        this.customerTurnover = customerTurnover;
        this.trafficSource = trafficSource;
        this.chart = chart;
    }
    get getPhoto() {
        return this.photo;
    }
    set setPhoto(x) {
        this.photo = x;
    }
    get getDescription() {
        return this.description;
    }
    set setDescription(x) {
        this.description = x;
    }
    get getInsights() {
        return this.insights;
    }
    set setInsights(x) {
        this.insights = x;
    }
    get getCustomerTurnover() {
        return this.customerTurnover;
    }
    set setCustomerTurnover(x) {
        this.customerTurnover = x;
    }
    get getTrafficSource() {
        return this.trafficSource;
    }
    set setTrafficSource(x) {
        this.trafficSource = x;
    }
    get getChart() {
        return this.chart;
    }
    set setChart(x) {
        this.chart = x;
    }
}