import React from "react";

const Referral = ({ id, first_name, last_name, email }) => {
  return (
    <div className="grid grid-cols-4 border">
      <p className="truncate">{id}</p>
      <p>{first_name}</p>
      <p>{last_name}</p>
      <p className="truncate">{email}</p>
    </div>
  );
};

export default Referral;
