import React from "react";
import styled from "styled-components";

const UserProfileComponent = () => {
  return (
    <StyledWrapper>
      <div className="card">
        <div className="profileImage">
          <svg viewBox="0 0 128 128">
            <circle r="60" fill="transparent" cy="64" cx="64" />
            <circle r="48" fill="transparent" cy="64" cx="64" />
            <path
              fill="#191919"
              d="m64 14a32 32 0 0 1 32 32v41a6 6 0 0 1 -6 6h-52a6 6 0 0 1 -6-6v-41a32 32 0 0 1 32-32z"
            />
            <path
              opacity="1"
              fill="#191919"
              d="m62.73 22h2.54a23.73 23.73 0 0 1 23.73 23.73v42.82a4.45 4.45 0 0 1 -4.45 4.45h-41.1a4.45 4.45 0 0 1 -4.45-4.45v-42.82a23.73 23.73 0 0 1 23.73-23.73z"
            />
            <circle r="7" fill="#fbc0aa" cy="65" cx="89" />
            <path
              fill="#4bc190"
              d="m64 124a59.67 59.67 0 0 0 34.69-11.06l-3.32-9.3a10 10 0 0 0 -9.37-6.64h-43.95a10 10 0 0 0 -9.42 6.64l-3.32 9.3a59.67 59.67 0 0 0 34.69 11.06z"
            />
            <path
              opacity=".3"
              fill="#356cb6"
              d="m45 110 5.55 2.92-2.55 8.92a60.14 60.14 0 0 0 9 1.74v-27.08l-12.38 10.25a2 2 0 0 0 .38 3.25z"
            />
            <path
              opacity=".3"
              fill="#356cb6"
              d="m71 96.5v27.09a60.14 60.14 0 0 0 9-1.74l-2.54-8.93 5.54-2.92a2 2 0 0 0 .41-3.25z"
            />
            <path
              fill="#fff"
              d="m57 123.68a58.54 58.54 0 0 0 14 0v-25.68h-14z"
            />
            <path
              strokeWidth={14}
              strokeLinejoin="round"
              strokeLinecap="round"
              stroke="#fbc0aa"
              fill="none"
              d="m64 88.75v9.75"
            />
            <circle r="7" fill="#fbc0aa" cy="65" cx="39" />
            <path
              fill="#ffd8ca"
              d="m64 91a25 25 0 0 1 -25-25v-16.48a25 25 0 1 1 50 0v16.48a25 25 0 0 1 -25 25z"
            />
            <path
              fill="#191919"
              d="m91.49 51.12v-4.72c0-14.95-11.71-27.61-26.66-28a27.51 27.51 0 0 0 -28.32 27.42v5.33a2 2 0 0 0 2 2h6.81a8 8 0 0 0 6.5-3.33l4.94-6.88a18.45 18.45 0 0 1 1.37 1.63 22.84 22.84 0 0 0 17.87 8.58h13.45a2 2 0 0 0 2.04-2.03z"
            />
            <path
              style={{
                fill: "none",
                strokeLinecap: "round",
                stroke: "#fff",
                strokeMiterlimit: "10",
                strokeWidth: "2",
                opacity: ".1",
              }}
              d="m62.76 36.94c4.24 8.74 10.71 10.21 16.09 10.21h5"
            />
            <path
              style={{
                fill: "none",
                strokeLinecap: "round",
                stroke: "#fff",
                strokeMiterlimit: "10",
                strokeWidth: "2",
                opacity: ".1",
              }}
              d="m71 35c2.52 5.22 6.39 6.09 9.6 6.09h3"
            />
            <circle r="3" fill="#515570" cy="62.28" cx="76" />
            <circle r="3" fill="#515570" cy="62.28" cx="52" />
            <ellipse
              ry="2.98"
              rx="4.58"
              opacity=".1"
              fill="#f85565"
              cy="69.67"
              cx="50.42"
            />
            <ellipse
              ry="2.98"
              rx="4.58"
              opacity=".1"
              fill="#f85565"
              cy="69.67"
              cx="77.58"
            />
            <g strokeLinejoin="round" strokeLinecap="round" fill="none">
              <path strokeWidth={4} stroke="#fbc0aa" d="m64 67v4" />
              <path
                strokeWidth={2}
                stroke="#515570"
                opacity=".2"
                d="m55 56h-9.25"
              />
              <path
                strokeWidth={2}
                stroke="#515570"
                opacity=".2"
                d="m82 56h-9.25"
              />
            </g>
            <path
              opacity=".4"
              fill="#f85565"
              d="m64 84c5 0 7-3 7-3h-14s2 3 7 3z"
            />
            <path
              fill="#f85565"
              d="m65.07 78.93-.55.55a.73.73 0 0 1 -1 0l-.55-.55c-1.14-1.14-2.93-.93-4.27.47l-1.7 1.6h14l-1.66-1.6c-1.34-1.4-3.13-1.61-4.27-.47z"
            />
          </svg>
        </div>
        <div className="textContainer">
          <p className="name">User</p>
          <p className="profile">Member since 2024</p>
        </div>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .card {
  width: 11rem;
  height: 20rem;
  background: white;
  border-radius: 12px;
  box-shadow: 2px 2px 4px 4px black;
  display: flex;
  margin: 0.6rem;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  transition-duration: .25s;
}

.profileImage {
  background: linear-gradient(to right,rgb(54, 54, 54),rgb(32, 32, 32));
  margin-top: 1rem;
  width: 9rem;
  height: 9rem;
  border-radius: 50%;
  box-shadow: 2px 2px 4px 4px black;
  transition: transform 1s ease, box-shadow 1s ease;
}

.textContainer {
  width: 100%;
  text-align: center;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 0rem;
}

.name {
  font-size: 1.5em;
  font-weight: 600;
  color: Black;
  letter-spacing: 0.05rem;
}

.profile {
  font-size: 0.9em;
  color: black;
  letter-spacing: 0.1rem;
}

.card:hover {
  background-color: rgb(43, 43, 43);
  transition-duration: 0.5s;

  .name {
    color: white;
  }

  .profile {
    color: white;
  }

  .profileImage {
    transform: scale(1.1);
    box-shadow: 4px 4px 8px 6px black;
    background: #e6e6fa;
  }
}
`;

export default UserProfileComponent;
