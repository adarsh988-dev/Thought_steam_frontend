import { useContext, useState } from "react";
import { Link } from "react-router-dom";

function Card(props) {
  const [bidData, setBidData] = useState([]);

//   if (props.path === "#") {
//     const condition_obj = { p_id: props._id };
//     axios
//       .get(FetchBidApiUrl, {
//         params: {
//           condition_obj: condition_obj,
//         },
//       })
//       .then((response) => {
//         const highBid = response.data.length - 1;
//         setBidData(response.data[highBid]);
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   }

  return (
    <>
          <Link
            to={props.path}
            className={`card p-2 m-3 rounded-lg shadow-lg`}
            style={{ width: "18rem" }}
          >
            <img
              className="card-img-top rounded-lg"
              src={`../assets/uploads/${props.folder}/${props.iconnm}`}
              alt={props.iconnm}
              style={{ height: "15rem" }}
            />
            {/* <div className="card-body">
              <h5
                className={`card-title text-center text-uppercase`}
              >
                {props.name}
              </h5>
            </div> */}
          </Link>
    </>
  );
}

export default Card;
