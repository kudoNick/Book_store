import React from "react";
import Profile from "@/components/profile";

export default function page({ params }) {
  return (
    <div>
      <title>Profile</title>
      <Profile id={params.id} />
    </div>
  );
}
