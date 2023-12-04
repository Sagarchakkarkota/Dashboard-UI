import React from "react";

const MemberProfile = ({ profile, src }) => {
  // if (!profile || !(profile instanceof File)) {
  //   return <div></div>;
  // }
  return (
    <div>
      <img className="h-[30px] rounded-[30px]" src={src} alt="" />
    </div>
  );
};

export default MemberProfile;
