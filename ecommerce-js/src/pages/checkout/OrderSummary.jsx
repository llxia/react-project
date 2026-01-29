import dayjs from "dayjs";
import { formatMoney } from "../../utils/money";

export function OrderSummary({ cart, deliveryOptions }) {
  return (
    <div className="order-summary">
      {deliveryOptions.length > 0 &&
        cart &&
        cart.map(({ productId, name, product, quantity, deliveryOptionId }) => {
          const selectedDeliveryOption = deliveryOptions.find((dops) => {
            return dops.id === deliveryOptionId;
          });
          return (
            <div key={productId} className="cart-item-container">
              <div className="delivery-date">
                Delivery Date:{" "}
                {dayjs(selectedDeliveryOption.estimatedDeliveryTimeMs).format(
                  "dddd, MMMM D",
                )}
              </div>

              <div className="cart-item-details-grid">
                <img className="product-image" src={product.iamge} />

                <div className="cart-item-details">
                  <div className="product-name">{name}</div>
                  <div className="product-price">
                    {formatMoney(product.priceCents)}
                  </div>
                  <div className="product-quantity">
                    <span>
                      Quantity:{" "}
                      <span className="quantity-label">{quantity}</span>
                    </span>
                    <span className="update-quantity-link link-primary">
                      Update
                    </span>
                    <span className="delete-quantity-link link-primary">
                      Delete
                    </span>
                  </div>
                </div>

                <div className="delivery-options">
                  <div className="delivery-options-title">
                    Choose a delivery option:
                  </div>
                  {deliveryOptions.map(
                    ({ id, estimatedDeliveryTimeMs, priceCents }) => {
                      let priceString = "FREE Shipping";
                      if (priceCents > 0) {
                        priceString = `${formatMoney(priceCents)}`;
                      }
                      return (
                        <div key={id} className="delivery-option">
                          <input
                            type="radio"
                            checked={id === deliveryOptionId}
                            onChange={() => {}}
                            className="delivery-option-input"
                            name={`delivery-option-${productId}`}
                          />
                          <div>
                            <div className="delivery-option-date">
                              {dayjs(estimatedDeliveryTimeMs).format(
                                "dddd, MMMM D",
                              )}
                            </div>
                            <div className="delivery-option-price">
                              {priceString}
                            </div>
                          </div>
                        </div>
                      );
                    },
                  )}
                </div>
              </div>
            </div>
          );
        })}
    </div>
  );
}
