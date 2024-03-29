import React from "react";
import { Component } from "/Users/romirpatel/Downloads/myudash/src/components2/Component";
import { Rectangle } from "/Users/romirpatel/Downloads/myudash/src/components2/Rectangle";
import "./style.css";

export const Rewards = () => {
  return (
    <div className="rewards">
      <div className="div-3">
        <div className="overlap-group">
          <Component className="component-1" hasRectangle={false} />
          <div className="rectangle-3" />
        </div>
    
        <Rectangle className="rectangle-7" />
        <Rectangle className="rectangle-instance" />
        <Rectangle className="rectangle-7-instance" />
        <Rectangle className="design-component-instance-node" />
        <Rectangle className="rectangle-6" />
        <Rectangle className="rectangle-8" />
        <Rectangle className="rectangle-9" />
        <Rectangle className="rectangle-10" />
        <Rectangle className="rectangle-11" />
      </div>
    </div>
  );
};
