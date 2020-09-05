import moment from 'moment';

class Order {
    constructor(
        id,
        items,
        totalAmount,
        date
    ) {
        this.id = id;
        this.items = items;
        this.totalAmount = totalAmount;
        this.date = date;
    } 

    get readableDate() {
        // return this.date.toLocaleDateString('en-GB', {
        //     day: '2-digit',
        //     month: '2-digit',
        //     year: 'numeric',
        //     hour: '2-digit',
        //     minute: '2-digit',
        // })
        return moment(this.date).format('DD MMMM YYYY, hh:mm');
    }
}

export default Order