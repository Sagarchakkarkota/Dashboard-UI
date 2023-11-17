import React from "react";
import MemberProfile from "../components/MemberProfile";

const SecondCart = () => {
  return (
    <div className="asidebarCard bg-white">
      <h1 className="xlBoldFont">Daily Meeting</h1>
      <div className="flex  relative">
        <div>
          <MemberProfile src="https:imgs.search.brave.com/CO9XHLwngrrVtVkRT-axU5d-4KnnbIG8rFbqcg1_dQM/rs:fit:860:0:0/g:ce/aHR0cHM6Ly93d3cu/bW9ja29mdW4uY29t/L3dwLWNvbnRlbnQv/dXBsb2Fkcy8yMDE5/LzEyL2NpcmNsZS1w/aG90by5qcGc" />
        </div>
        <div className="absolute left-6">
          <MemberProfile src="https:imgs.search.brave.com/CO9XHLwngrrVtVkRT-axU5d-4KnnbIG8rFbqcg1_dQM/rs:fit:860:0:0/g:ce/aHR0cHM6Ly93d3cu/bW9ja29mdW4uY29t/L3dwLWNvbnRlbnQv/dXBsb2Fkcy8yMDE5/LzEyL2NpcmNsZS1w/aG90by5qcGc" />
        </div>
        <div className="absolute left-12">
          <MemberProfile src="https:imgs.search.brave.com/CO9XHLwngrrVtVkRT-axU5d-4KnnbIG8rFbqcg1_dQM/rs:fit:860:0:0/g:ce/aHR0cHM6Ly93d3cu/bW9ja29mdW4uY29t/L3dwLWNvbnRlbnQv/dXBsb2Fkcy8yMDE5/LzEyL2NpcmNsZS1w/aG90by5qcGc" />
        </div>
      </div>
      <div>
        <span>12+ Person</span> <span>8:30 Pm</span>
      </div>
      <p>They will conduct the meeting</p>
      <button className="bg-black text-white p-2 px-3 rounded-2xl">
        Upgrade
      </button>
    </div>
  );
};

export default SecondCart;
