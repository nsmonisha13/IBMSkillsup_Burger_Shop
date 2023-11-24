// Write all the code here
const OrderDetails =()=>{
const OrderDetail =  {
        address: 'testing',
        contact: {
            name: 'sdfs',
            phone: 12121
        },
        status: {
            orderStatus: 'asda',
            placedAt: 'asdasd',
            deliveredAt: 'q3aad'
        },
        payment: {
            Method: 'cod',
            reference: 'adasd',
            paidAt: '2423123'
        },
        amount: {
            itemTotal: '10',
            shippingCharge: 'adsadasdasd',
            tax: '12121',
            totalAmount:'100'
        }
}
    return(
<section className="orderDetails">
    <main>
        <h1>Order Details</h1>
        <div>
            <h1>
                SHIPPING
            </h1>
            <p>
               {OrderDetail.address}
            </p>

        </div>
        <div>
            <h1>
                CONTACT
            </h1>
            <p>
               {OrderDetail.contact.name}
            </p>
            <p>
               {OrderDetail.contact.phone}
            </p>

        </div>
        <div>
            <h1>
                STATUS
            </h1>
            <p>
                {OrderDetail.status.orderStatus}
            </p>
            <p>
                {OrderDetail.status.placedAt}
            </p>
            <p>
                {OrderDetail.status.deliveredAt}
            </p>

        </div>
        <div>
            <h1>
                PAYMENT
            </h1>
            <p>
            {OrderDetail.payment.Method}
            </p>
            <p>
            {OrderDetail.payment.reference}
            </p>
            <p>
            {OrderDetail.payment.paidAt}
            </p>

        </div>
        <div>
            <h1>
                AMOUNT
            </h1>
            <p>
            {OrderDetail.amount.itemTotal}
            </p>
            <p>
            {OrderDetail.amount.shippingCharge}
            </p>
            <p>
            {OrderDetail.amount.tax}
            </p>
            <p>
            {OrderDetail.amount.totalAmount}
            </p>
        </div>
        <article>
            <h1>
               ORDERED ITEMS
            </h1>
            <div>
            Cheese Burger
                <h4>45 
                </h4>
            </div>
            <div> Veg Cheese Burger
                <h4>
               50
                </h4>
            </div>
            <div>Cheese Burger with French Fries
                <h4>
                100
                </h4>
            </div>
            <div>
            <b>Sub Total</b>
                <h4>
               200
                </h4>
            </div>
        </article>
    </main>

</section>
)
    }
export default OrderDetails;
