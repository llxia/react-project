import "./checkout-header.css";
import "./CheckoutPage.css";
import { Header } from "../../components/Header";
import { formatMoney } from "../../utils/money";
import axios from "axios";

import { useState, useEffect } from "react";
import { OrderSummary } from "./OrderSummary";

export function CheckoutPage({ cart }) {
  const [deliveryOptions, setDeliveryOptions] = useState([]);
  const [paymentSummary, setPaymentSummary] = useState();

  useEffect(() => {
    const getDeliveryOpts = async () => {
      const res = await axios.get(
        "/api/delivery-options?expand=estimatedDeliveryTime",
      );
      setDeliveryOptions(res.data);
    };

    const getPaymentSummary = async () => {
      const res = await axios.get("/api/payment-summary");
      setPaymentSummary(res.data);
    };

    getDeliveryOpts();
    getPaymentSummary();
  }, []);

  return (
    <>
      <Header cart={cart} />

      <div className="checkout-page">
        <div className="page-title">Review your order</div>
        <OrderSummary cart={cart} deliveryOptions={deliveryOptions} />
        <div className="checkout-grid">
          <div className="payment-summary">
            <div className="payment-summary-title">Payment Summary</div>

            {paymentSummary && (
              <>
                <div className="payment-summary-row">
                  <div>Items ({paymentSummary.totalItems}):</div>
                  <div className="payment-summary-money">
                    ${formatMoney(paymentSummary.productCostCents)}
                  </div>
                </div>

                <div className="payment-summary-row">
                  <div>Shipping &amp; handling:</div>
                  <div className="payment-summary-money">
                    ${formatMoney(paymentSummary.shippingCostCents)}
                  </div>
                </div>

                <div className="payment-summary-row subtotal-row">
                  <div>Total before tax:</div>
                  <div className="payment-summary-money">
                    ${formatMoney(paymentSummary.totalCostBeforeTaxCents)}
                  </div>
                </div>

                <div className="payment-summary-row">
                  <div>Estimated tax (10%):</div>
                  <div className="payment-summary-money">
                    ${formatMoney(paymentSummary.taxCents)}
                  </div>
                </div>

                <div className="payment-summary-row total-row">
                  <div>Order total:</div>
                  <div className="payment-summary-money">
                    ${formatMoney(paymentSummary.totalCostCents)}
                  </div>
                </div>

                <button className="place-order-button button-primary">
                  Place your order
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
