import { Layer } from '../Layer';
import './index.css';

export const Drink = ({ name, imageUrl }) => {
  return (
    <div className="drink">
      <div className="drink__product">
        <div className="drink__cup">
          <img src={imageUrl} />
        </div>
        <div className="drink__info">
          <h3>{name}</h3>
          <div className="layer">
            <div
              className="layer__color"
              style={{ backgroundColor: '#613916' }}
            ></div>
            <div className="layer__label">espresso</div>
            <Layer color="#feeeca" label="mléčná pěna" />
          </div>
        </div>
      </div>
      <form className="drink__controls">
        <input type="hidden" className="order-id" value="0" />
        <button className="order-btn">Objednat</button>
      </form>
    </div>
  );
};
