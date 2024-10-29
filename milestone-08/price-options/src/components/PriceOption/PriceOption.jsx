import { TiTick } from "react-icons/ti";
// import PropTypes from 'prop-types';
import PropTypes from 'prop-types';

const PriceOption = ({ option }) => {
  //   console.log(option);
  const { name, price, features } = option;
  return (
    <div className="border rounded-xl md:w-96 flex flex-col items-center justify-between px-6 py-4 ">
      <div className="space-y-6">
        <h2 className="text-center">
          <span className="text-7xl font-bold">{price}</span>
          <span className="text-2xl">/mon</span>
        </h2>

        <h4 className="text-4xl text-center ">{name}</h4>

        <ul>
          {
            // features.map(feature => <li >{feature}</li>)
            features.map((feature, idx) => (
              <li className="flex justify-start gap-2" key={idx}>
                <TiTick className="mt-1 text-xl w-4 h-4 bg-green-900 rounded-full "></TiTick>
                {feature}
              </li>
            ))
          }
        </ul>
      </div>

      <button className="btn w-full bg-green-800 mt-8">Buy Now</button>
    </div>
  );
};

PriceOption.propTypes = {
    option: PropTypes.object,
}

export default PriceOption;
