import React from "react";

const MemberProfile = ({ profile }) => {
  if (!profile || !(profile instanceof File)) {
    // Handle cases where profile is null or not a valid File object
    return <div></div>;
  }
  return (
    <div>
      <img
        className="h-[30px] rounded-[30px]"
        src={URL.createObjectURL(profile)}
        alt=""
      />
    </div>
  );
};

export default MemberProfile;
