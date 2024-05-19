import React from "react";
import ContentLoader from "react-content-loader";

const Skeleton = (props) => (
  <ContentLoader
    speed={2}
    width={400}
    height={160}
    viewBox="0 0 400 160"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="70" y="15" rx="4" ry="4" width="117" height="15" />
    <rect x="70" y="50" rx="3" ry="3" width="85" height="10" />
    <rect x="0" y="80" rx="3" ry="3" width="350" height="10" />
    <rect x="0" y="98" rx="3" ry="3" width="380" height="10" />
    <rect x="0" y="115" rx="3" ry="3" width="410" height="10" />
    <circle cx="30" cy="30" r="30" />
  </ContentLoader>
);

export default Skeleton;
