import React from "react";
const Map = () => {
  return (
    <div>
      <h2
        style={{
          color: "white",
          marginBottom: "5rem",
          display: "block",
          fontWeight: "700",
        }}
      >
        OUR <span style={{ color: "#00ffffdf" }}>LOCATION</span>
      </h2>
      <div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3401.097758894345!2d74.31725061135938!3d31.519207190967364!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39190486c21ea5e9%3A0xba7f81365a3de179!2sRehmanpura%20Colony%2C%20Lahore%2C%20Punjab%2054000%2C%20Pakistan!5e0!3m2!1sen!2s!4v1641229183462!5m2!1sen!2s"
          style={{ height: "34rem", width: "100%", maxHeight: "100vh" }}
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
};

export default Map;
