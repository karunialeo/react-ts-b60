import { Button } from "@/components/ui/button";
import React from "react";

function RightBar() {
  return (
    <div className="w-80 h-screen text-white">
      {/* edit profile comp */}
      <section className="mb-20">
        <Button>Edit Profile</Button>
      </section>

      {/* suggestions */}
      <section>
        <p>Suggested Users</p>
      </section>
    </div>
  );
}

export default RightBar;
